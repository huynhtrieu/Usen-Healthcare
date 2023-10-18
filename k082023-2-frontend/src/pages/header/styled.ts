import { Colors } from "@/themes";
import { styled } from "styled-components";
import { Menu } from "antd";
import { Drawer } from "antd";

export const Header = styled.div`
  display: flex;
  background-color: ${Colors.BLACK};
`;

export const Logo = styled.div`
  margin-left: 44px;

  img{
    width: 233px;
    height: 80px;
  }

  @media (max-width: 1850px) {
    margin-left: 20px;
  }
`;

export const MenuList = styled.div`
  heigh: 80px;
  flex-grow: 1;
  @media (max-width: 1850px) {
    display: none;
  }
`;

export const MenuIcon = styled.div`
  margin-left: auto;
  padding-right: 25px;
  padding-top: 25px;

  @media (min-width: 1850px) {
    display: none;
  }
`;



export const MenuItem = styled(Menu)`
  background-color: ${Colors.BLACK};
  font-size: 16px;
  display: flex;
  padding: 0;

  h3 {
    color: ${Colors.WHITE};
  }

  @media (max-width: 1850px){
    display: flex;  
    flex-direction: column;
    justify-content: center;
  }
`;

export const MenuLink = styled.div`
  @media (min-width: 1850px) {
    display: flex;
    gap: 10px;
    flex-grow: 1
    align-items: center;
    text-align: center;

    h3{
      font-size: 16px;
      padding: 20px 0px 14px;
    }
    h3:hover {
      border-bottom: 2px solid pink;
    }

    .link1 h3{
      width: 150px;
    }
    .link2 h3{
      width: 160px;
    }
    .link4 h3{
      width: 240px;
    }
    .link5 h3{
      width: 230px;
    }
  }

  @media (max-width: 1850px) {
    display: flex;
    flex-direction: column;

    h3{
      font-size: 16px;
      padding: 20px 0px;
      height: 80px;
      padding-top: 20px
      border-bottom: 2px solid pink;
    }
  }
`;

export const MenuButton = styled.div`
  @media (min-width: 1850px){
    display: flex;
    gap: 10px;
    margin-left: auto;
    margin-right: 14px;
    margin-top: 18px;
  }
  @media (max-width: 1850px){
    display: flex;
    gap: 10px;
  }
`;

export const MenuDrawer = styled.div`
:where(.css-dev-only-do-not-override-byeoj0).ant-drawer .ant-drawer-body {
  padding: 24px;
}
`;

export const DrawerAnt = styled(Drawer)`
  font-size: 60px;
  padding: '0px' !important;

  div.ant-drawer-body{
    padding: '0px' !important;
  }
`;

export const Button = styled.button`
  width: 148px;
  height: 45px;
  margin-right: 10px;
  border: none;
  cursor: pointer;
  
  background-color: #40a9ff;
  color: white;

  @media (max-width: 768px) {
    width: 90%;
    margin: 10px auto;
  }

  &:hover {
    background-color: #1890ff;
  }

  h3 {
    margin: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;
