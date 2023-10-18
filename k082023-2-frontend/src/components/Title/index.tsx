import React from 'react';
import { Colors } from "@/themes";
import styled from 'styled-components';
import { Typography as AntTypography } from 'antd';

const StyledTitle = styled(AntTypography.Title)`
  color: ${Colors.BLACK};
  font-size: 16px;
  
  &.member_title_16 {
    font-size: 16px;
    margin-left: 20px;
  }

  &.ant-typography+h1.ant-typography {
    margin-top: 5px;
  }
 
  &.member_description_16 {
    font-size: 16px;
    margin: 0;
  }

  &.member_description_16:nth-of-type(3) {
    margin-bottom: 30px;
  }

  &.member_fgpass_16{
    font-size: 16px;
    color: ${Colors.PINK};
    border-bottom: 1px solid ${Colors.PINK};
    text-decoration: none; 
  }

  &.membership_terms{
    font-size: 16px;
    color: ${Colors.PINK};
    border-bottom: 1px solid ${Colors.PINK};
    text-decoration: none; 
    display: inline-block;
    vertical-align: middle;
    margin-right: 2px;
    margin-top: 8px;
  }
  &.member_agree_terms{
    font-size: 16px;
    color: ${Colors.BLACK};
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 5px;
  }
  
  &.member_title1_30 {
    font-size: 30px;
    font-weight: 600;
    padding: 40px 0 20px;
    margin: 0;
    border-bottom: 1px solid ${Colors.PINK};
  }
 
  &.member_title2_30 {
    font-size: 30px;
    font-weight: 600;
    padding: 0 0 20px;
    margin-bottom: 30px;
    border-bottom: 1px solid ${Colors.PINK};
  }

  &.register_title2_30 {
    font-size: 30px;
    font-weight: 600;
    padding: 0 0 20px;
    margin: 80px 0 30px;
    border-bottom: 1px solid ${Colors.PINK};
  }

  &.title_30 {
    font-size: 30px;
  }

  &.seminar_title1_30 {
    font-size: 30px;
    font-weight: 600;
    padding: 20px 0 20px;
    margin: 0;
    border-bottom: 1px solid ${Colors.PINK};
  }
  
  &.seminar_title{
    font-size: 24px;
    padding-bottom: 20px;
    margin: 15PX 0 20px;
    border-bottom: 1px dotted ${Colors.GRAY4};
  }
  
  &.top_title1_30 {
    font-size: 30px;
    font-weight: 600;
    padding: 20px 0 20px;
    margin: 0;
    border-bottom: 1px solid ${Colors.PINK};
    > span {
      font-size: 13px;
      padding-left: 20px;
      color: ${Colors.GRAY4};
      align-items: center;
    }
  }

  &.campaign_24{
    font-size: 24px;
    margin: 0px 0 10px;
  }
  &.campaign_16{
    font-size: 16px;
    margin: 15PX 0 10px;
  }
  &.campaign_b16{
    width: 112px;
    font-size: 16px;
    padding: 10px 25px 9px 20px;
    background-color: ${Colors.GRAY1};
  }
  
  &.notice_title1_30 {
    font-size: 30px;
    font-weight: 600;
    padding: 20px 0 20px;
    margin-bottom: 45px;
    border-bottom: 1px solid ${Colors.PINK};
  }

  &.notice_title{
    font-size: 24px;
    padding-bottom: 20px;
    padding-left: 20px;
    margin: 15PX 0 20px;
    border-bottom: 1px dotted ${Colors.GRAY4};
  }
  
  &.notice_date{
    font-size: 14px;
    color: ${Colors.GRAY4};
    padding-left: 20px;
    margin: 15PX 0 10px;
  }
  
  &.archive_text{
    font-size: 16px;
    color: ${Colors.GRAY4};
    padding-left: 20px;
    margin: 20PX 0 10px;
    width: 370px;
  }
  
  &.seminar_date{
    font-size: 14px;
    color: ${Colors.GRAY4};
    padding-left: 20px;
    margin: 20px 0 0px;
  }

  &.seminar_description {
    font-size: 16px;
    margin: 0;
  }

  &.seminar_applicantCount {
    font-size: 16px;
    margin-bottom: 20px;
    @media (max-width: 1340px) {
      margin-bottom: 20px;
    }
    
  }
  
  &.seminar_detail_title {
    font-size: 30px;
    margin: 0px 0 30px;

    @media (max-width: 768px) {
      margin: 30px 0 20px;
    }
  }
  
  &.seminar_detail_title2 {
    font-size: 30px;
    padding-bottom: 20px;
    margin: 80px 0 30px;
    border-bottom: 1px solid ${Colors.PINK};
    @media (max-width: 1340px) {
      margin-top: 60px;
    }
  }
  
  &.seminar_content_title {
    border-left: 5px solid ${Colors.PINK};
    padding-left: 10px;
    font-size: 24px;
    label {
      margin-left: 20px;
    }
    
    @media (max-width: 768px) {
      img {
        max-width: 100%; 
      }
    }
  }
`;

interface TitleProps {
    children: React.ReactNode;
    level?: 1 | 2 | 3 | 4 | 5;
    className?: string;
  }
  
  const Title: React.FC<TitleProps> = ({ children, level = 1, className }) => {
    return <StyledTitle level={level} className={className}>{children}</StyledTitle>;
  };

  export default Title;
