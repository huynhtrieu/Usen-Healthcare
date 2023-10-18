import styled from 'styled-components';
import { Colors } from "@/themes";
import { Typography } from 'antd';
import { RightOutlined } from '@ant-design/icons';

export const SeminarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; 

  > div {
    width: 1280px;
    max-width: 100%;
  }
  @media (max-width: 1340px){
    padding: 0 20px
  }
`;

export const Path = styled.div`
  padding: 30px 0 40px;
  width: 100%; 
  cursor: pointer;

  > div {
    display: flex;
    width: 1280px;
    max-width: 100%;
    margin: 0 auto;
  }
  
  @media (max-width: 1340px){
    padding: 19px 20px
  }

  @media (max-width: 768px){
    background-color: ${Colors.GRAY1};
  }
`;

export const StyledRightOutlined = styled(RightOutlined)`
  color: ${Colors.GRAY3};
  font-size: 10px;
  padding: 6px 10px;
`;


export const MainImage = styled.div`
  img{
    width: 100%;
    height: 400px;
    object-fit: cover;
    margin-bottom: 30px;
  }

  @media (max-width: 673px){
    img{
      height: 250px;
      margin-bottom: 20px;
    }
  }
`;

export const TimeStatus = styled.div`
  display: flex;
`;

export const Datetime = styled.div`
  background-color: ${Colors.GRAY1};
  font-size: 16px;
  padding: 10px 15px;
  height: 40px;
  margin-right: 13px;
  width: 480px;
  @media (max-width: 673px){
    margin-right: 0px;
    width: 65%;
  }
`;
export const Status = styled.div`
  background-color: ${Colors.PINK2};
  font-size: 16px;
  font-weight: 600;
  padding: 10px 15px;
  height: 40px;
  width: 120px;
  text-align: center;
  @media (max-width: 673px){
    width: 35%;
  }
`;

export const SeminarContent = styled.div`
`;

export const Overview = styled.div`
  margin-top: 30px;
`;

export const SeminarButton = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1340px){
    flex-direction: column;
    align-items: center;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 30px;
  // margin-bottom: 10px;

  img {
    width: 50%; 
    height: 400px;
    object-fit: cover;
  }

  div {
    flex: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    img {
      width: 100%; 
      height: 230px;
      margin: 0 auto;
      object-fit: cover;
    }
  }
`;

export const Lable = styled(Typography)`
  font-size: 16px;
`;

export const SeminarButton2 = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 10px;
  margin-bottom: 151px;

  @media (max-width: 1340px){
    align-items: center;
    flex-direction: column;
    margin-bottom: 101px;
  }
`;
