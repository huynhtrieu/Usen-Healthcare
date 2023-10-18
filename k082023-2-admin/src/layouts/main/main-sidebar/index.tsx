import { Layout, Menu } from "antd";
import // DashboardOutlined,
"@ant-design/icons";

import { useTranslation } from "react-i18next";
import Logo from "../../../assets/images/admin_logo.png";
import styles from "./index.module.css";
import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { useEffect, useState } from "react";
// import style from './index.module.css';

const { Sider } = Layout;
const { SubMenu } = Menu;

interface SidebarProps {
  collapsed: boolean;
  toggle: () => void;
}

export function MainSidebar(props: SidebarProps) {
  const { pathname } = useLocation();
  const { t } = useTranslation("sidebar");
  let selectedKey = pathname.substring(1);

  const [openKeys, setOpenKeys] = useState<any>([]);

  const menu = [
    {
      url: "/seminar",
      title: (t("slidebar.Business_Menu")),
      key: "list-seminar",
    },

   

    {
      url: "",
      title: t("slidebar.Product_Management"),
      key: "1",
      childrens: [
        {
          url: "/chart",
          title: t("slidebar.Product_List"),
          key: "2",
        },
        {
          url: "",
          title: t("slidebar.SetProduct_List"),
          key: "3",
        },
      ],
    },
    {
      url: "",
      title: t("slidebar.Posting_Management"),
      key: "4",
      childrens: [
        {
          url: "",
          title: t("slidebar.Posting_List"),
          key: "5",
        },
        {
          url: "",
          title: t("slidebar.Seminar_List"),
          key: "6",
        },
      ],
    },
    {
      url: "",
      title: t("slidebar.Campaign_List"),
      key: "7",
      childrens: [
        {
          url: "",
          title: t("slidebar.Management_Member"),
          key: "8",
        },
      ],
    },
    {
      url: "",
      title: t("slidebar.Member_ActionList"),
      key: "9",
      childrens: [
        {
          url: "",
          title: t("slidebar.Survey_Management"),
          key: "10",
        },
      ],
    },
    {
      url: "",
      title: t("slidebar.Survey_List"),
      key: "11",
      childrens: [
        {
          url: "",
          title: t("slidebar.Member_Management"),
          key: "12",
        },
      ],
    },
    {
      url: "",
      title: t("slidebar.Member_List"),
      key: "13",
      childrens: [
        {
          url: "",
          title: t("slidebar.Employee_Management"),
          key: "14",
        },
      ],
    },
  ];

  // ...
  const deepRender = (menuData: any, parentKey = "") => {
    if (menuData && menuData.length > 0) {
      return menuData.map((item: any, index: number) => {
        const uniqueKey = item.url
          ? item.url.replace("/", "")
          : `submenu-${index}`;
        const fullKey = parentKey ? `${parentKey}-${uniqueKey}` : uniqueKey;
        if (item.childrens && item.childrens.length > 0) {
          return (
            <SubMenu key={fullKey} icon={item.icon} title={item.title}>
              {deepRender(item.childrens, fullKey)}
            </SubMenu>
          );
        }
        return (
          <Menu.Item key={fullKey} icon={item.icon}>
            <Link to={item.url}>{item.title}</Link>
          </Menu.Item>
        );
      });
    }
  };

  // ...

  const rootSubmenuKeys = ["list", "create"];

  useEffect(() => {
    if (selectedKey === "list1" || selectedKey === "list2") {
      setOpenKeys(["list"]);
    } else if (selectedKey === "create-seminar") {
      setOpenKeys(["create"]);
    }
  }, []);

  const onOpenChange = (keys: any) => {
    const latestOpenKey = keys.find((key: any) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Sider
      style={{ overflow: "auto",minHeight: '100vh' }}
      width={270}
      trigger={null}
      collapsible
      collapsed={props.collapsed}
      collapsedWidth={0}
      breakpoint="lg"
      className={styles.sidebar}
      onBreakpoint={() => {
        props.toggle();
      }}
    >
      <div className={styles.logo}>
        <img className={styles.logoIcon} alt="logo" src={Logo}></img>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        openKeys={openKeys}
        selectedKeys={[selectedKey]}
        onOpenChange={onOpenChange}
      >
        {deepRender(menu)}
      </Menu>
    </Sider>
  );
}