import { useState } from "react";
import { Button, Dropdown } from "antd";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import { Colors, Images } from '@/themes';

import LanguageItem from "./language-item";

const LanguageContainer = styled.div`
  button {
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;

    &:hover {
      border-color: transparent !important;
    }
  }

  .language_btn {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 25px;
      height: 25px;
    }

    span {
      color: ${Colors.WHITE};
      padding-left: 5px;
    }
  }
`;

const listLang:any = {
  en: Images.EN_FLAG_ICON,
  jp: Images.JP_FLAG_ICON,
};

const Language = () => {
  const { i18n } = useTranslation();

  const lang = localStorage.getItem("LANGUAGE") || "en";

  const [active, setActive] = useState(lang);

  const onChangeLanguage = (lang: string) => () => {
    if (lang === active) return;
    i18n.changeLanguage(lang);
    localStorage.setItem("LANGUAGE", lang);
    setActive(lang);
  };

  const items = [
    {
      key: "1",
      label: (
        <LanguageItem
          onChangeLanguage={onChangeLanguage("en")}
          name="EN"
          symbol="en"
          icon={Images.EN_FLAG_ICON}
          className={`btn ${active === "en" ? "active-language" : ""}`}
        />
      ),
    },
    {
      key: "2",
      label: (
        <LanguageItem
          onChangeLanguage={onChangeLanguage("jp")}
          name="JP"
          symbol="jp"
          icon={Images.JP_FLAG_ICON}
          className={`btn ${active === "jp" ? "active-language" : ""}`}
        />
      ),
    },
  ];

  return (
    <LanguageContainer>
      <div className="content">
        <Dropdown
          menu={{ items }}
          placement="bottom"
          arrow={{ pointAtCenter: true }}
          trigger={["click"]}
          className="dropdown_language"
        >
          <Button className="language_btn">
            <img src={listLang[active]} alt="language" />
            <span>{active === "en" ? "EN" : "JP"}</span>
          </Button>
        </Dropdown>
      </div>
    </LanguageContainer>
  );
};

export default Language;
