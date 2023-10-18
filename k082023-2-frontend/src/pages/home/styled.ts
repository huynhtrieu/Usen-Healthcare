import styled,  { css } from "styled-components";
import Slider from "@ant-design/react-slick";
import { Colors } from "@/themes";

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
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; 

  @media (max-width: 900px){
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const CampaignContainer = styled.div`
  display: flex;
  align-items: start;
  margin-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px dotted ${Colors.GRAY4};
`;


export const ImageDiv1 = styled.div`
  width: 280px;
  height: 215px;
  margin-right: 20px;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const ContentDiv = styled.div`
  width: 77%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;


export const Child1 = styled.div`
  width: 300px;
  height: 60px;
  background-color: pink;
  display: flex;
  align-items: center;
  box-shadow: 3px 3px 9px #00000029;
  
  @media (max-width: 1280px) { 
    width: 100%; 
    max-width: 630px;
  }
`;

export const StyledIcon1 = styled.img`
  margin: 0px 20px;
  height: 35px; 
  width: auto;
`;

export const SmallDiv = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  width: 100%;
  background-color: ${Colors.GRAY1};
`;


export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;  
  padding-top: 30px;
`;

export const ChildDiv = styled.div<{ color: string }>`
  position: relative; 
  width: 240px;
  height: 240px;
  background-color: ${props => props.color};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 3px 3px 9px #00000029;

  h2 {
    color: white;
    width: 180px;
    text-align: center;
    font-size: 20px;
    margin-top: 40px; 
  }
  p {
    color: white;
    width: 180px;
    text-align: center;
    font-size: 12px;
    margin-top: 15px;
  }
  img {
    position: absolute; 
    bottom: 45px;    
    left: 50%;       
    transform: translateX(-50%); 
  }
`;


export const Child = styled.div`
  width: 100%; 
  max-width: 630px;
  height: 80px;
  background-color: pink;
  display: flex;
  align-items: center;
  box-shadow: 3px 3px 9px #00000029;

  @media (max-width: 1280px) { 
    width: 100%; 
    max-width: 630px;
  }
`;

export const CampaignH3 = styled.h3`
  font-size: 16px;
  margin: 0;
`;

export const ParentDiv = styled.div`
  display: flex;
  flex-direction: row;  
  align-items: center; 
  flex-wrap: wrap;   
  gap: 20px;   
  padding-top: 30px;

  @media (max-width: 1320px) {
    > ${Child} {
      width: calc(100% - 0px); 
    }
  }
`;

export const StyledIcon = styled.img`
  margin: 0px 20px;
  height: 50px; 
  width: auto;
`;

export const StyledH3 = styled.h3`
  font-size: 20px;
  padding: 0 80px 0 20px;
  margin-top: 8px;
`;


export const ParentContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%; 
  padding-top: 30px;
  gap: 25px;
  ${props => props.as === Slider && css`
    width: 100%;
    .slick-slide > div {
      display: flex;
      justify-content: center;
    }
  `}
  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ImageDivWrapper = styled.div`
  margin: 0 12.5px;
  box-shadow: 0px 3px 9px #00000029;
`;


export const ImageDiv = styled.div`
  opacity: 1;
  width: 410px;
  max-width: 410px;
  height: 370px;
  display: flex;
  flex-direction: column;
`;

export const ImageDiv2 = styled.div`
  opacity: 1;
  width: 410px;
  max-width: 410px;
  height: 470px;
  display: flex;
  flex-direction: column;
`;

export const StyledImage = styled.img`
    width: 410px;
    height: 250px;
`;

export const Styled3 = styled.h3`
  font-size: 20px;
  padding: 0 80px 0 20px;
  margin-top: 18px;
`;




