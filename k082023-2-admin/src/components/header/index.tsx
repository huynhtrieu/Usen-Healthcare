import Language from "../languages";
import Login from "../login";
import HeaderContainer from "./styled";

const Header = () => {
  return(
    <HeaderContainer>
      <Login />
      <Language />
    </HeaderContainer>
  );
};

export default Header;