import { Form, Input } from 'antd';
import { FormikProps } from 'formik';
import { useState } from 'react';
import '../index.css';
import { useTranslation } from "react-i18next";
import styles from '../index.module.css';
type SizeType = Parameters<typeof Form>[0]['size'];

type TApplicationEmailProps = {
  formik: FormikProps<{
    seminar_emails: {
      optional_message_hall: string;
      optional_message_online: string;
    };
  }>;
};

const ApplicationEmail = ({ formik }: TApplicationEmailProps) => {
  const [componentSize, setComponentSize] = useState<SizeType | 'default'>(
    'default'
  );
  const { t } = useTranslation("creat");
  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout='horizontal'
      initialValues={{ size: componentSize }}
      onValuesChange={onFormLayoutChange}
      size={componentSize as SizeType}
    >
      <div className='Application-reception-completion-email'>
      <div >
          <p className={styles.chubang}>{t("Application_email.td1")}</p>
        </div>
        <div className={styles.customForm}>
          <Form.Item
            label= {t("Application_email.venue")}
            className={styles.laberStyle_SI}
            validateStatus={
              formik.errors.seminar_emails?.optional_message_hall ? 'error' : ''
            }required
          >
            <Input
            className={styles.input_applications}
              value={formik.values.seminar_emails.optional_message_hall}
              onChange={(e) =>
                formik.setFieldValue(
                  `seminar_emails.optional_message_hall`,
                  e.target.value
                )
              }
              maxLength={500}
            />
          </Form.Item>
        </div>
        <div className={styles.customForm}>
          <Form.Item
            label={t("Application_email.online")}
            className={styles.laberStyle_SI}
            validateStatus={
              formik.errors.seminar_emails?.optional_message_online
                ? 'error'
                : ''
            }required
          >
            <Input
              className={styles.input_applications}
              value={formik.values.seminar_emails.optional_message_online}
              onChange={(e) =>
                formik.setFieldValue(
                  `seminar_emails.optional_message_online`,
                  e.target.value
                )
              }
              maxLength={500}
            />
          </Form.Item>
        </div>
      </div>
    </Form>
  );
};

export default ApplicationEmail;