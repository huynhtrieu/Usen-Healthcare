import React from 'react';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const SliderNextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
  return (
    <RightOutlined
      className={className}
      style={{ ...style, display: "block", color: "grey", zIndex: 2, fontSize: "40px", marginRight: "0px"}}
      onClick={onClick}
    />
  );
};

export const SliderPrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
  return (
    <LeftOutlined
      className={className}
      style={{ ...style, display: "block", color: "grey", zIndex: 2, fontSize: "40px", marginLeft: "-20px" }}
      onClick={onClick}
    />
  );
};
