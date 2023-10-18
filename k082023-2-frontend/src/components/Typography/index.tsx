import React from "react";
import { Colors } from "@/themes";
import styled from 'styled-components';
import { Typography as AntTypography } from 'antd';

const StyledTypography = styled(AntTypography.Title)`
  color: ${Colors.BLACK};
  font-size: 16px;
  
  &.typo_16_gray {
    font-size: 16px;
    color: ${Colors.GRAY3};
  }
  
  &.typo_16_black {
    font-size: 16px;
    color: ${Colors.BLACK};
  }


`;

interface TypographyProps {
    children: React.ReactNode;
    level?: 1 | 2 | 3 | 4 | 5;
    className?: string;
  }
  
  const Typography: React.FC<TypographyProps> = ({ children, level = 1, className }) => {
    return <StyledTypography level={level} className={className}>{children}</StyledTypography>;
  };

  export default Typography;
