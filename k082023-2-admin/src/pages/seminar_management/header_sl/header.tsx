import { Header, VerticalLine } from './style'; 
import { useTranslation } from "react-i18next";
function Header_sl() {
  const { t } = useTranslation("list");
  return (
    <Header>
      <VerticalLine > <span>
      {t("Sl_top.Seminar_List")}</span>  
       </VerticalLine >
    </Header>

  );
}

export default Header_sl;
