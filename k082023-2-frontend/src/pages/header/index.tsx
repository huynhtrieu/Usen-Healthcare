// import Language from "../../components/languages";
import {Header, Logo, MenuItem, DrawerAnt, MenuIcon, MenuList, MenuLink, MenuButton, MenuDrawer} from "./styled";
import Button from "@/components/Button";
import logo from "../../assets/images/logo/logo.jpg";
import { MenuOutlined,CloseOutlined } from "@ant-design/icons";

import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const HeaderContainer = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return(
    <Header >
      <Logo>
        <Link to='/'><img src={logo} alt="Logo" /></Link>
      </Logo>
      <MenuIcon >
        <MenuOutlined 
          style={{color: "white", fontSize: 30}}
          onClick={()=>{
            setOpenMenu(true);
          }}/>
      </MenuIcon>
      <MenuList>
        <AppMenu/>
      </MenuList>
      <MenuDrawer style={{padding: '0px'}}>
      <DrawerAnt
        placement="right"
        open = {openMenu}
        width="100%"
        style={{padding:'0px'}}
        onClose={()=>{
          setOpenMenu(false);
        }}
        closable={false}
        bodyStyle={{backgroundColor: "black"}}>
          <Logo style={{    margin: '-24px 0 0 -14px'}} className="demo-logo">
            <Link to='/'><img src={logo} alt="Logo" /></Link>
          </Logo>
          <CloseOutlined 
            style={{ color: "white", fontSize: 30, display: 'inline-block', position: 'absolute', right: '20px', top: '20px', cursor: 'pointer' }} 
            onClick={() => {
            setOpenMenu(false);
            }} 
          />
        <AppMenu isInline/>
      </DrawerAnt>
      </MenuDrawer>
    </Header>
  );
};

function AppMenu({isInline=false}){
  const { t } = useTranslation("auth");
  const isLoggedIn = Boolean(localStorage.getItem('accessToken'));

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userId');
    window.location.href = '/login';
  };

  return(
    <MenuItem
      mode={ isInline?"inline":"horizontal"}
    >
      <MenuLink>
        <Link className="link1" to='/'><h3>{t("header.top")}</h3></Link>
        <Link className="link2" to='/error'><h3>{t("header.medical")}</h3></Link>
        <Link className="link2" to='/error'><h3>{t("header.pharmacy")}</h3></Link>
        <Link className="link2" to='/error'><h3>{t("header.dentistry")}</h3></Link>
        <Link className="link4" to='/seminar'><h3>{t("header.seminar")}</h3></Link>
        <Link className="link5" to='/error'><h3>{t("header.Seminar_archive")}</h3></Link>
        {/* <Language/> */}
      </MenuLink>
      <MenuButton>
        <Link to='/register'>
          <Button className="sign-up" label={t("header.Signup")} id=""/>
        </Link>
        {isLoggedIn ? (
          <Button className="login" label={t("header.Logout")} onClick={handleLogout} id=""/>
        ) : (
          <Link to='/login'>
            <Button className="login" label={t("header.Login")} id=""/>
          </Link>
        )}
      </MenuButton>
    </MenuItem>
  );
}

AppMenu.propTypes = {
  isInline: PropTypes.bool
};

export default HeaderContainer;