import styled from 'styled-components';
import { Colors } from "@/themes";
import { RightOutlined } from '@ant-design/icons';

export const SeminarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; 

  > div {
    width: 1280px;
    max-width: 100%;
    margin-bottom: 40px;
  }
  @media (max-width: 1340px){
    padding: 0 20px
  }
`;

export const SeminarContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; 

  > div {
    width: 1280px;
    max-width: 100%;
  }
  @media (max-width: 900px){
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const SeminarList = styled.div`
  display: flex;
  border-bottom: 1px solid ${Colors.GRAY4};
  padding-bottom: 30px;
  margin-bottom: 30px;
  
  .seminar-first {
    display: block; 
  }

  .seminar-second {
    display: none;  
  }

  @media (max-width: 900px) {
    .seminar-first {
      display: none; 
    }

    .seminar-second {
      display: block; 
      margin-top: 20px;
    }
  }
`;

export const ContainerImg = styled.div`
  @media (min-width: 900px){
    margin-right: 30px;
  }
  @media (max-width: 900px){
    margin-right: 0px;
    margin-bottom: 30px;
  }
`;

export const SeminarImg = styled.div`
  img{
    width: 460px;
    height: 290px;
  }
  @media (max-width: 500px){
    img{
      width: 350px;
      height: 230px;
    }
  }
`;

type ThumbnailProps = {
    lastItem?: boolean;
}

export const Thumbnail = styled.img<ThumbnailProps>`
  cursor: pointer;
  width: 100px;
  @media (max-width: 500px){
    width: 72.5px;
  }
  margin-right: ${props => props.lastItem ? '0' : '20px'};

`;

export const Content = styled.div`
  align-items: flex-start;
`;

export const Path = styled.div`
  padding: 30px 0 0px;
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

export const Datetime = styled.div`
  background-color: ${Colors.GRAY1};
  font-size: 16px;
  padding: 10px 15px;
  height: 40px;
  margin-right: 10px;
`;
export const Status = styled.div`
  background-color: ${Colors.PINK2};
  font-size: 16px;
  font-weight: 600;
  padding: 10px 15px;
  height: 40px;
`;

export const Type = styled.div`
  color: ${Colors.GRAY4};
  border: 1px solid ${Colors.GRAY4};
  font-size: 16px;
  font-weight: 600;
  padding: 10px 15px;
  height: 40px;
  margin-right: 10px;
`;
