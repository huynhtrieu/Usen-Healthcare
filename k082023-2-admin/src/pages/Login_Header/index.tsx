import { Col, Row, Card } from "antd";
import styles from "./style.module.css";
import "./style.css";
import { useTranslation } from "react-i18next";
import Logo_admin from "../../assets/images/admin_logo.png";
import LoginForm from "@/pages/Login_Header/login-form";
import { UserOutlined } from "@ant-design/icons";
// import Language from "../../components/languages";

export function Header_login() {
  const { t } = useTranslation("auth");
  return (
    <div>
      <div className={styles.header}>
     
        <div className={styles.logo}>
          <img src={Logo_admin} alt="Logo" />
        </div>
        {/* <Language /> */}
      </div>
      <Row
        justify="space-around"
        style={{ paddingTop: "3%" }}
        gutter={[8, 16]}
        className={styles.row_login}
      >
        <Col xs={2} sm={2} md={9}></Col>

        <Col xs={20} sm={20} md={6} className={styles.col_Login}>
          <div className={styles.icon}>
            <p>
              <UserOutlined />
              {t("Login.heading_login")}
            </p>
          </div>
          <Card
            headStyle={{
              textAlign: "center",
            }}
            title= {t("Login.Completion_message")}
            className={styles.cardBorder}
          >
            <Row gutter={[8, 16]}>
              <Col xs={24} sm={24} md={24}>
                <LoginForm></LoginForm>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={2} sm={2} md={9}></Col>
      </Row>
      <div className={styles.footer}></div>
    </div>
  );
}

export default Header_login;
