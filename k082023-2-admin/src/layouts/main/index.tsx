import { Layout } from "antd";
import { MainSidebar } from "@/layouts/main/main-sidebar";
import styles from "./index.module.css";
import { MainHeader } from "@/layouts/main/main-header";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import SeminarManagement from "@/pages/seminar_management";
import CreateSeminar from "@/pages/create-seminar";
import ChartList from "@/pages/w-chart";
import { I18nextProvider } from "react-i18next";
import i18next from 'i18next';

import '@/translates/i18n';
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout className={styles.mainLayout}>
      <MainSidebar collapsed={collapsed} toggle={toggle}></MainSidebar>
      <Layout className={styles.siteLayout}>
        <MainHeader collapsed={collapsed} toggle={toggle} />
        <I18nextProvider i18n={i18next}>

        <Routes>
          <Route path="/seminar" element={<SeminarManagement />} />
          <Route path="/seminar/create" element={<CreateSeminar />} />
          <Route path="/chart" element={<ChartList />} />

        </Routes>
        </I18nextProvider >

      </Layout>
    </Layout>
  );
};

export default MainLayout;
