import React from 'react';
import { Colors } from "@/themes";
import styled from 'styled-components';
import { Button as AntButton } from 'antd';

const StyledAntButton = styled(AntButton)`
  &:hover {
    color: ${Colors.WHITE} !important;
    border-color: inherit !important; 
  }
  font-size:16px;
  border: none;

  &.sign-up {
    background-color: ${Colors.WHITE};
    color: ${Colors.BLACK};
    width: 148px;
    height: 45px;
    &:hover {
      color: ${Colors.BLACK} !important;
    }
  }
 
  &.login {
    background-color: ${Colors.PINK};
    color: ${Colors.WHITE};
    width: 148px;
    height: 45px;
    margin-left: 10px;
    &:where(.css-dev-only-do-not-override-byeoj0).ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover {
      color: ${Colors.WHITE};
    },
  }
  
  &.btn_member_signup {
    display: block;
    background-color: ${Colors.PINK};
    color: ${Colors.WHITE};
    font-size: 18px;
    width: 390px;
    height: 60px;
    margin: 60px auto;
    pading: 0;
    @media (max-width: 768px){
      width: 350px;
    }
    &:where(.css-dev-only-do-not-override-byeoj0).ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover {
          color: ${Colors.WHITE};
    },
  }

  &.btn_member_login {
    display: block;
    background-color: ${Colors.PINK};
    color: ${Colors.WHITE};
    font-size: 18px;
    width: 390px;
    height: 60px;
    margin: 40px auto;
    @media (max-width: 768px){
      width: 350px;
    },
    &:where(.css-dev-only-do-not-override-byeoj0).ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover {
      color: ${Colors.WHITE};
    },
  }

  &.btn_member_signup {
    display: block;
    background-color: ${Colors.PINK};
    color: ${Colors.WHITE};
    font-size: 18px;
    width: 390px;
    height: 60px;
    margin: 40px auto;
    @media (max-width: 768px){
      width: 350px;
    }
    &:where(.css-dev-only-do-not-override-byeoj0).ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover {
      color: ${Colors.WHITE};
    },
  }
  
  &.btn_seminar_detail {
    display: block;
    background-color: ${Colors.PINK};
    color: ${Colors.WHITE};
    font-size: 18px;
    width: 390px;
    height: 60px;
    margin-top: 31px;
    @media (max-width: 1320px){
      width: 350px;
      margin: 0 auto;
      margin-top: 31px;
    }
  }
  
  &.btn_seminar_register {
    display: block;
    background-color: ${Colors.PINK};
    color: ${Colors.WHITE};
    font-size: 18px;
    width: 630px;
    height: 60px;
    margin-top: 31px;
    @media (max-width: 1340px){
      margin-top: 30px;  
      margin-right: 0; 
    }
    @media (max-width: 690px){
      width: 100%;
      margin-top: 20px;
      margin-right: 0;
    }
  }
  
  &.btn_seminar_register2 {
    display: block;
    background-color: ${Colors.PINK};
    color: ${Colors.WHITE};
    font-size: 18px;
    width: 630px;
    height: 60px;
    margin-top: 40px;

    @media (max-width: 1340px){
      margin-top: 20px;  
      margin-right: 0; 
    }
    @media (max-width: 690px){
      margin-top: 20px;
      width: 100%;
      margin-right: 0;
    }
  }
`;

interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  id: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className, icon, id, disabled }) => {
  return (
    <StyledAntButton 
      onClick={onClick} 
      className={className} 
      id={id} 
      disabled={disabled} 
    >
      {label}{icon}
    </StyledAntButton>
  );
};

export default Button;