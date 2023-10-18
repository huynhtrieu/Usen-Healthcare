import styled from 'styled-components';
import { Upload as UploadBase } from 'antd';

export const StyledUpload = styled(UploadBase)`
  .ant-upload-list-item {
    border: unset !important;
  }
  .ant-upload-list-item .ant-upload-list-item-thumbnail {
    max-height: 85px;
  }
`;

export const StyledUploadContainer = styled.div`
  .image-container {
    height: 89px;
    border: 3px dotted #adadb0;
    width: 131px;
    position: absolute;
    top: 11%;
    left: 5%;
    padding: 2px 0;
  }
  .image-container img {
    object-fit: contain;
    height: 81px;
  }
`;
