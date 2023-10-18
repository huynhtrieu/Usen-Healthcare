/* eslint-disable no-console */
import Storage from './storage';
import AUTH from '@/constants/auth';

const BASE_API_URL = import.meta.env.VITE_API_URL;

export const getFileInfoS3 = (s3url: string) => {
  let fileName = s3url.substr(0, s3url.lastIndexOf('_'));
  fileName = fileName.substring(fileName.lastIndexOf('/') + 1);
  fileName = decodeURIComponent(fileName);
  return fileName;
};

export const downloadS3File = (item: any) => {
  fetch(item.s3Path, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*'
    }
  })
    .then((response) => {
      response.arrayBuffer().then((buffer) => {
        const url = window.URL.createObjectURL(new Blob([buffer]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', item.fileName);
        document.body.appendChild(link);
        link.click();
      });
    })
    .catch(() => {
    });
};

export const downloadOctetFile = (item: any) => {
  const token = Storage.get(AUTH.ACCESS_TOKEN);
  fetch(`${BASE_API_URL}/api/v1${item.downloadPath}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/octet-stream'
    }
  })
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      document.body.appendChild(a);
      a.href = url;
      a.download = item.fileName;
      a.click();
      window.URL.revokeObjectURL(url);
    })
    .catch(() => {
    });
};
