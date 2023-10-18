import styled from 'styled-components';
import { Form } from 'antd';
import { Link } from 'react-router-dom';
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

export const TitleBlock = styled.div`
  @media (max-width: 580px) {
    display: none;
  }
`;
export const TitleBlock2 = styled.div`
  @media (max-width: 580px) {
    display: none;
  }
`;
export const TitleBlock3 = styled.div`
  margin-top: 30px;
  @media (min-width: 580px) {
    display: none;
  }
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
    }
  }
`;

export const StyledFormItem = styled(Form.Item)<{ hasError?: boolean }>`
  p {
    color: ${Colors.RED};
    font-size: 12px;
    position: absolute;
    top: 0;
    right: 0;
    white-space: nowrap;
    margin-right: 22px;
  }

  @media (max-width: 580px){
    p {
      top: -30px; 
      right: 0; 
      color: ${Colors.RED};
      margin-right: 22px;
      font-size: 12px;
    }
  }
  ${props => props.hasError && `
    input, .ant-input-password {
      border-color: red;
    }
  `}
  input:focus, .ant-input-password:focus .ant-input {
    border-color: ${Colors.GRAY2} !important;
    box-shadow: none !important;
  }
  input:hover, .ant-input-password:hover .ant-input {
    border-color: ${Colors.GRAY2} !important;
  }
  .ant-input-password:hover .ant-input-affix-wrapper .ant-input {
    border-color: black !important;
  }
  .ant-input-password .ant-input-affix-wrapper:hover .ant-input,
  .ant-input-password .ant-input-affix-wrapper:focus .ant-input,
  .ant-input-password .ant-input-affix-wrapper-focused .ant-input {
      border-color: black !important;
      box-shadow: none !important;
  }

  .ant-input-password .ant-input-affix-wrapper:hover .ant-input:not(.ant-input-disabled),
  .ant-input-password .ant-input-affix-wrapper-focused .ant-input:not(.ant-input-disabled) {
      border-color: black !important;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;