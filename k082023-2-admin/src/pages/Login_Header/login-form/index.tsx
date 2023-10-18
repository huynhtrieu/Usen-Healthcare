import { Button, Col, Form, Row } from "antd";
import "./index.css";
import { useTranslation } from "react-i18next";
import styles from "./index.module.css";
import { useFormik } from "formik";
import * as yup from "yup";
import Input from "@/components/input/Input";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useToastContext } from "@/contexts/ToastContext";
import { login } from "@/apis/auth";
import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";

const layout = {
  wrapperCol: { span: 24 },
};


export default function LoginForm() {
  const { t } = useTranslation("auth");
  const schema = yup.object({
    email: yup
      .string()
      .required(t("message_LG.email_required"))
      .trim()
      .matches(/^\S*$/, (t("message_LG.not_space")))
      .matches(/^.+@.+\..+$/, (t("message_LG.email_format"))), 
  
    password: yup
      .string()
      .required(t("message_LG.password_required"))
      .trim()
      .matches(/^\S*$/, (t("message_LG.not_space")))
  });
  const navigate = useNavigate();
  const toast = useToastContext();
  const [loginError, setLoginError] = useState("");
  const [isFormSubmit, setIsFormSubmit] = useState(false);
  const { isLoading, mutate } = useMutation(login, {
    onSuccess: async (data) => {
      toast?.success({ message: (t("message_LG.Login_success"))});
      Cookie.set("access_token", data?.result?.access_token, { expires: 1 });// 1 ngày tự xóa
      navigate("/seminar");
    },

    onError: (error: any) => {
      if (
        error?.response?.data?.errors?.message ===
        "メールアドレス、 またはパスワードが正しく ありません。"
      ) {
                setLoginError("");
        setLoginError((t("message_LG.Check_DB")));
      }
      toast?.error({
        message: (t("message_LG.Login_failure")),
      });
    },
  });

  const encodePasswordToBase64 = (password: string) => {
    return btoa(password);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    async onSubmit(values) {
      const payload = {
        email: values.email,
        password: encodePasswordToBase64(values.password),
      };
      mutate(payload);
    },
    validationSchema: schema,
    validateOnChange: isFormSubmit,
  });

  return (
    <div className={styles.loginFormContainer}>
      <Form {...layout} className={styles.loginForm} name="basic">
        <Row>
          <Col xs={24} sm={24} md={24}>
            {loginError && <div style={{ color: "red" }}>{loginError}</div>}
            <Form.Item colon={false} name="email" className={styles.form_email}>
              <Input
                className={styles.Input_email}
                placeholder={"メールアドレス"}
                onChange={(e) => formik.setFieldValue("email", e.target.value)}
                type="email"
                errorMessage={formik.errors.email}
              />
            </Form.Item>
            <Form.Item
              colon={false}
              name="password"
              className={styles.form_password}
            >
              <Input
                className={styles.Input_password}
                placeholder={"パスワード"}
                onChange={(e) =>
                  formik.setFieldValue("password", e.target.value)
                }
                $type="password"
                errorMessage={formik.errors.password}
              />
            </Form.Item>
            <Form.Item colon={false} style={{ textAlign: "center" }}>
              <Button
                className={styles.button_login}
                style={{ width: "100%" }}
                type="primary"
                onClick={() => {
                  formik.handleSubmit();
                  setIsFormSubmit(true);
                }}
                disabled={isLoading}
              >
              {t("Login.heading_login")}
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
