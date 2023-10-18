import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from "yup";
import { useMutation } from '@tanstack/react-query';
import { useAuth } from '@/contexts/authContext';

import Button from "@/components/Button";
import Title from "@/components/Title";

import { FormLayout, MemberContainer, StyledFormItem, StyledLink, TitleBlock, TitleBlock2, TitleBlock3 } from './styled';
import {  EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { Form, Input, } from 'antd';
import { Modal } from 'antd';

import { useTranslation } from "react-i18next";
import { login } from "@/apis/auth";

const Login: React.FC = () => {
  const { t } = useTranslation("auth");
  const validationSchema = yup.object({
    email: yup
      .string()
      .required(t("errmessage.email_required"))
      .trim()
      .matches(/^\S*$/, t("errmessage.not_space"))
      .email(t("errmessage.email_format")),
    password: yup
      .string()
      .required(t("errmessage.password_required"))
      .trim()
      .matches(/^\S*$/, t("errmessage.not_space")),
  });

  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { loginUser } = useAuth();

  const { isLoading, mutate } = useMutation(login, {
    onSuccess: async (data) => {
      Modal.success({
        title: t("modal.title_success"),
        content: t("modal.login_success"),
      });
      localStorage.setItem('accessToken', data?.result?.access_token);
      localStorage.setItem('userId', data?.result?.user_id);
      loginUser();
      navigate("/");
    },

    onError: (error: any) => {
      if (
        error?.response?.data?.errors?.code === 400
      ) {
        Modal.error({
          title: t("modal.title_failure"),
          content: t("modal.login_failure"),
        });
      }
    },
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

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
    validationSchema: validationSchema,
    validateOnChange: true,
  });

  return (
    <MemberContainer>
      <TitleBlock>
        <Title className="member_title1_30">{t("member.title_signup")}</Title>
        <Link to='/register'>
        <Button className="btn_member_signup" label={t("member.btn_signup")} id='' />
        </Link>
      </TitleBlock>
      <div>
        <TitleBlock2>
          <Title className="member_title2_30">{t("member.title_login")}</Title>
        </TitleBlock2>
        <TitleBlock3>
          <Title className="member_title2_30">{t("member.title_loginSp")}</Title>
        </TitleBlock3>
        <FormLayout form={form} className="form-layout">
          <StyledFormItem
            label={t("member.email")}
            className="labelStyle_SI"
            name='Email'
          >
            <p>{formik.errors.email}</p>
            <Input
              onChange={(e) => formik.setFieldValue("email", e.target.value)}
              placeholder={t("member.placehoder_email")}
              />
          </StyledFormItem>

          <StyledFormItem
            label={t("member.password")}
            className="labelStyle_SI"
            name='Pass'
          >
            <p>{formik.errors.password}</p>
            <Input.Password
              placeholder={t("member.placehoder_password")}
              onChange={(e) =>
                formik.setFieldValue("password", e.target.value)
              }
              type="password"
              iconRender={visible => (visible ? <EyeOutlined onClick={togglePasswordVisibility} /> : <EyeInvisibleOutlined onClick={togglePasswordVisibility} />)}
            />
          </StyledFormItem>
        </FormLayout>
        <Button 
          className="btn_member_login"
          label={isLoading ? t("member.btn_loading") : t("member.btn_login")}
          id=''
          onClick={() => {
            formik.handleSubmit();
          }}
          disabled={isLoading}
        />
        <StyledLink to='/error'>
          <Title className="member_fgpass_16">{t("member.forgot_password")}</Title>
        </StyledLink>
      </div>
    </MemberContainer>
  );
};

export default Login;