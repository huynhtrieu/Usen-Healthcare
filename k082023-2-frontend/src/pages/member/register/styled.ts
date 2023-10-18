import styled from 'styled-components';
import { Checkbox, Form } from 'antd';
import { Colors } from "@/themes";

export const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; 

  > div {
    width: 1280px;
    max-width: 100%;
    margin-bottom: 50px;
  }
  @media (max-width: 1340px){
    padding: 0 20px
  }
`;

export const StepContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

export const StepBox = styled.div`
  width: clamp(80px, 50vw, 400px);
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  background-color: ${Colors.GRAY1};
  &:first-child {
    background-color: ${Colors.PINK};
  }
`;

export const Connector = styled.span`
  width: clamp(10px, 5vw, 40px);
  height: 1px; 
  background-color: black;
  flex-grow: 1;
  align-items: center;
`;


export const FormLayout = styled(Form)`
  .laberStyle_SI{
    margin-bottom: 0px !important;
    border: 10px solid black;
  }

  .form-layout .ant-col.ant-form-item-label {
    background-color: navajowhite;
    margin-right: 20px;
    min-width:200px;
  }

  @media (min-width: 580px){
    :where(.css-dev-only-do-not-override-byeoj0).ant-form-item .ant-form-item-label >label {
      min-width:200px;
      background-color: ${Colors.GRAY3};
      padding: 40px 20px;
      margin-right: 1px;
      font-size: 16px;
      font-weight: 600;
      color: #000000;
    }

    :where(.css-dev-only-do-not-override-byeoj0).ant-form-item .ant-form-item-control-input-content {
      flex: auto;
      max-width: 100%;
      padding: 22px;
      height: 80px;
    }

    .ant-col.ant-form-item-control.css-dev-only-do-not-override-byeoj0 {
      background-color: ${Colors.GRAY1};
    }

    .ant-form-item.labelStyle_SI.css-dev-only-do-not-override-byeoj0 {
      margin-bottom: 1px;
    }
  }

  @media (max-width: 580px){
    :where(.css-dev-only-do-not-override-byeoj0).ant-form-item .ant-form-item-label >label {
      font-size: 16px;
      font-weight: 600;
      color: #000000;
      margin-bottom: 15px;
    }
  }
`;

export const StyledFormItem = styled(Form.Item)`
  .ant-col.ant-form-item-label{
    width: 200px;
  }
  @media (min-width: 580px){
    .ant-form-item-explain {
      position: absolute;
      top: 0;
      right: 0;
      transform: translateY(10%);
      font-size: 12px;
      color: red;
    }
  }
  @media (max-width: 580px){
    .ant-form-item-explain {
      position: absolute;
      top: 0;
      right: 0;
      transform: translateY(-100%);
      font-size: 12px;
      color: red;
    }
  }
  p {
    color: ${Colors.RED};
    font-size: 12px;
    margin-right: 22px;
    position: absolute;
    top: 0;
    right: 0;
    white-space: nowrap;
  }

  @media (max-width: 580px){
    p {
      top: -30px; 
      right: 0; 
      color: ${Colors.RED};
      font-size: 12px;
      margin-right: 0px;
    }
  }
  input:focus, .ant-input-password:focus .ant-input {
    border-color: ${Colors.GRAY2} !important;
    box-shadow: none !important;
  }
  input:hover, .ant-input-password:hover .ant-input {
    border-color: ${Colors.GRAY2} !important;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;

  & > input: not(:last-child) {
    margin-right: 10px;
  }
`;

export const ErrorMessage = styled.p`
  color: ${Colors.RED};
  font-size: 12px;
  position: absolute;
  top: 0;
  right: 0;
  white-space: nowrap;

  @media (max-width: 580px){
    top: -30px; 
    right: 0; 
    color: ${Colors.RED};
    font-size: 12px;
    &:first-of-type {
      margin-right: 22px;
    }
  }

  &:first-of-type {
    right: 51%;
    transform: translateX(20%); 
  }
  &:last-of-type {
    right: 0; 
  }
`;

export const StyledCheckbox = styled(Checkbox)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin-top: 40px;
`;