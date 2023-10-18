/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Button, Form, Input, Row, notification } from "antd";
import { loginProps } from "@/interface/auth";

import { useMutation } from "@tanstack/react-query";
import { login } from "@/apis/auth";
import { setAuthState } from "@/store/auth.slice";

import LoginContainer from "./styled";

const LoginForm = ({ onLoginSuccess, onCancel }: loginProps) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { t } = useTranslation("auth");

  const { isLoading, mutate } = useMutation(login, {
    onSuccess: async (data: any) => {
      notification.success({
        message: "SUCCESS",
        description: "Login successfuly",
        placement: "top",
        duration: 4,
      });

      dispatch(
        setAuthState({
          ...data,
        })
      );

      onLoginSuccess && onLoginSuccess();
    },
    onError: (e: any) => {
      notification.error({
        message: "ERROR",
        description: "Login failure!",
        placement: "top",
        duration: 4,
      });
    },
  });

  const onSubmit = (values: loginProps) => {
    mutate(values);
  };

  const _onCancel = () => {
    form.resetFields();
    onCancel && onCancel();
  };

  return (
    <LoginContainer>
      <Form form={form} onFinish={onSubmit}>
        <label>{t("email")}</label>
        <Form.Item
          name="email"
          shouldUpdate
          rules={[
            {
              required: true,
              message: t("message.email_required"),
            },
          ]}
        >
          <Input />
        </Form.Item>

        <label>{t("password")}</label>
        <Form.Item
          name="password"
          shouldUpdate
          rules={[
            {
              required: true,
              message: t("message.password_required"),
            },
          ]}
        >
          <Input type="password" />
        </Form.Item>
        <Row className="button-box">
          <Form.Item>
            <Button loading={isLoading} onClick={form.submit}>
              {t("btn_login")}
            </Button>
          </Form.Item>
          <Button loading={isLoading} onClick={_onCancel}>
            {t("btn_close")}
          </Button>
        </Row>
      </Form>
    </LoginContainer>
  );
};

export default LoginForm;
