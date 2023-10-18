import { ILoginResponse, loginPayload } from '@/interface/auth';
import { privateInstance, publicInstance } from '.';

const login = async (payload: loginPayload) => {
  const res = await publicInstance.post('/api/admin/login', payload);
  return res.data as unknown as ILoginResponse;
};

const getListSeminar = () => {
  return privateInstance.get('/api/admin/seminars');
};
// /thongke 12 tháng
const getthongke12 = () => {
  return privateInstance.get('/api/admin/seminars/chart')
    .then(response => {
      return response.data; 
    })
    .catch(error => {
      throw error; 
    });
};
// thong ke theo 3 tháng có lượt bắt đầu seminar lớn nhất
const getthongkeTop3 = () => {
  return privateInstance.get('/api/admin/seminars/chart/top')
    .then(response => {
      return response.data; 
    })
    .catch(error => {
      throw error; 
    });
};

const deleteListSeminar = async (payload: any) => {
  const res = await privateInstance.patch('/api/admin/seminar/delete', payload);
  return res;
};

export {
  login,
  getListSeminar,
  getthongke12,
  getthongkeTop3,
  deleteListSeminar,
};
