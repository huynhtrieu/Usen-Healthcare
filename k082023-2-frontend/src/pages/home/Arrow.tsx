import React from 'react';
import { RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons';

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const SampleNextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
  return (
    <RightCircleOutlined
      className={className}
      style={{ ...style, display: "block", color: "grey", zIndex: 2, fontSize: "20px" , marginRight: "15px"}}
      onClick={onClick}
    />
  );
};

export const SamplePrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
  return (
    <LeftCircleOutlined
      className={className}
      style={{ ...style, display: "block", color: "grey", zIndex: 2, fontSize: "20px", marginLeft: "15px" }}
      onClick={onClick}
    />
  );
};
