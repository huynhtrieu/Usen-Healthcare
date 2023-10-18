import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from "yup";
import { useMutation } from '@tanstack/react-query';
import { useAuth } from '@/contexts/authContext';
import { useTranslation } from "react-i18next";

import Button from "@/components/Button";
import Title from "@/components/Title";

import { register } from "@/apis/auth";
import { Form, Input, Modal} from 'antd';
import {  EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { Connector, ErrorMessage, FormLayout, InputContainer, MemberContainer, StepBox, StepContainer, StyledCheckbox, StyledFormItem } from './styled';

const Register: React.FC = () => {
  const { t } = useTranslation("auth");

  const validationSchema = yup.object({
    firstname: yup
      .string()
      .required(t("errmessage.firstName_required"))
      .trim()
      .matches(/^\S*$/, t("errmessage.not_space")),
    lastname: yup
      .string()
      .required(t("errmessage.lastName_required"))
      .trim()
      .matches(/^\S*$/, t("errmessage.not_space")),
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
    password_confirm: yup
      .string()
      .nullable()
      .required(t("errmessage.confirmPassword_required"))
      .test('passwords-must-match', t("errmessage.passwords_must_match"), function(value) {
        return this.parent.password === value;
      })
  });

  const [isAgreeTerms, setIsAgreeTerms] = useState<boolean>(false);
  const [form] = Form.useForm();

  const navigate = useNavigate();
  const { loginUser } = useAuth();

  const { isLoading, mutate } = useMutation(register, {
    onSuccess: async (data) => {
      Modal.success({
        title: t("modal.title_success"),
        content: t("modal.register_success"),
      });
      localStorage.setItem('accessToken', data?.result?.access_token);
      loginUser();
      navigate("/");
    },

    onError: (error: any) => {
      if (error?.response?.status === 425) {
        Modal.error({
          title: t("modal.title_failure"),
          content: t("modal.email_exists"),
        });
      } else if(error?.response?.status === 422) {
        Modal.error({
          title: t("modal.title_failure"),
          content: t("modal.wrong_format"),
        });
      } else if(error?.response?.status === 433) {
        Modal.error({
          title: t("modal.title_failure"),
          content: t("modal.invalid_password"),
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

  const encodeConfirmPasswordToBase64 = (password_confirm: string) => {
    return btoa(password_confirm);
  };

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      password_confirm: "",
    },
    async onSubmit(values) {
      const payload={
        first_name: values.firstname,
        last_name: values.lastname,
        email: values.email,
        password: encodePasswordToBase64(values.password),
        password_confirm: encodeConfirmPasswordToBase64(values.password_confirm)
      };
      mutate(payload);
    },
    validationSchema: validationSchema,
    validateOnChange: true,
  });

  return (
    <MemberContainer>
      <StepContainer>
        <StepBox>{t("member.step_box1")}</StepBox>
        <Connector/>
        <StepBox>{t("member.step_box2")}</StepBox>
        <Connector/>
        <StepBox>{t("member.step_box3")}</StepBox>
      </StepContainer>
      <div>
        <Title className="member_title2_30">{t("member.title_contact_infor")}</Title>
      
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
        > 
          <FormLayout 
            form={form}
            className="form-layout"
          >
            <StyledFormItem
              label={t("member.full_name")}
              className="labelStyle_SI"
              name='FullName'
            >
              <InputContainer>
                <ErrorMessage>{formik.errors.firstname}</ErrorMessage>
                <Input
                  onChange={(e) => formik.setFieldValue("firstname", e.target.value)}
                  placeholder={t("member.first_name")} 
                />
                <ErrorMessage>{formik.errors.lastname}</ErrorMessage>
                <Input
                  onChange={(e) => formik.setFieldValue("lastname", e.target.value)}
                  placeholder={t("member.last_name")} 
                />
              </InputContainer>
            </StyledFormItem>
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

            <Title className="register_title2_30">{t("member.title_member_registration")}</Title>
            <Title className="member_description_16">{t("member.description_member_registration1")}</Title>
            <Title className="member_description_16">{t("member.description_member_registration2")}</Title>
            <StyledFormItem 
              label={t("member.password")}
              className="labelStyle_SI"
              name='Password'
            >
              <p>{formik.errors.password}</p>
              <Input.Password
                placeholder={t("member.placehoder_password")}
                iconRender={visible => (visible ? <EyeOutlined onClick={togglePasswordVisibility} /> : <EyeInvisibleOutlined onClick={togglePasswordVisibility} />)}
                type="password"
                onChange={(e) => formik.setFieldValue("password", e.target.value)}
              />
            </StyledFormItem>
            <StyledFormItem 
              label={t("member.password_confirm")}
              className="labelStyle_SI"
              name='ConfirmPassword'
            >
              <p>{formik.errors.password_confirm}</p>
              <Input.Password
                placeholder={t("member.placehoder_confirm_password")}
                iconRender={visible => (visible ? <EyeOutlined onClick={togglePasswordVisibility} /> : <EyeInvisibleOutlined onClick={togglePasswordVisibility} />)}
                type="password"
                onChange={(e) => formik.setFieldValue("password_confirm", e.target.value)}
              />
            </StyledFormItem>
          </FormLayout>
        </Form>
        <StyledCheckbox
          checked={isAgreeTerms}
          onChange={(e) => setIsAgreeTerms(e.target.checked)}
        >
          <Title className="membership_terms">{t("member.membership_terms")}</Title>
          <Title className="member_agree_terms">{t("member.agree")}</Title>
        </StyledCheckbox>
        <Button 
          className="btn_member_signup"
          label={isLoading ? t("member.btn_loading") : t("member.btn_check")}
          id=''
          onClick={() => {
            formik.handleSubmit();
          }}
          disabled={isLoading || !isAgreeTerms}
        />
      </div>
    </MemberContainer>
  );
};

export default Register;