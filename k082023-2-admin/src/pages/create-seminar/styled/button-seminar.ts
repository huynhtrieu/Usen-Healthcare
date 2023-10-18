import styled from 'styled-components';
// Button style
const ButtonStyle = styled.button`
  width: 115px;
  background-color: #d3d3d34d;
  color: black;
  border: 1px solid black;
  border-top: 1px solid transparent;
  border-left: 1px solid transparent;
  border-radius: 0;
`;

const ButtonParagraph = styled.p`
  font-size: 10px;
`;

const FormButtonContainer = styled.div`
  margin-left: auto;
  margin-right: -1%;
  margin-top: 2%;
`;

const ButtonSeminar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const ButtonRight = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonStyleLeft = styled(ButtonStyle)`
  margin-bottom: 0px;
`;

const ButtonLeft = styled.div`
  margin-bottom: -23px;
`;

const SmallScreenStyles = `
  @media (max-width: 768px) {
    ${ButtonSeminar} {
      flex-direction: column;
      align-items: center;
    }
  
    ${ButtonRight} {
      margin-top: 16px;
    }
  }
`;

const StyledButtonStyle = styled(ButtonStyle)`
  ${SmallScreenStyles}
`;

export {
  StyledButtonStyle as ButtonStyle,
  ButtonParagraph,
  FormButtonContainer,
  ButtonSeminar,
  ButtonRow,
  ButtonRight,
  ButtonStyleLeft,
  ButtonLeft,
};
