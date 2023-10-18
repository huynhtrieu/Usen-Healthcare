import { WarningOutlined } from '@ant-design/icons';

import EmptyBoxContainer from './styled';

const EmptyBox = () => {
  return (
    <EmptyBoxContainer>
      <WarningOutlined />
      {/* <p>Please login first for use</p> */}
      <p> cannot</p>
    </EmptyBoxContainer>
  );
};

export default EmptyBox;
