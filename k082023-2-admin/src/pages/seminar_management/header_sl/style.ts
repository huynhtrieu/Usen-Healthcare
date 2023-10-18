// styles.ts
import styled from 'styled-components';

export const Header = styled.div`
  color: black;
  margin: 28px 5px 5px 32px;
`;

export const VerticalLine = styled.span`
  &::before {
    content: "";
    display: inline-block;
    width: 3px;
    height: 0.6cm;
    background-color: black;
    margin-right: 4px;
    margin-left: 4px;
  }
`;
