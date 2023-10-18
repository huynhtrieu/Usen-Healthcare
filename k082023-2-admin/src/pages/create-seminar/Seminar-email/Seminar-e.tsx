import React, { useState } from 'react';
import {
    Form,
    Input,
} from 'antd';
import styles from '../index.module.css';
import { useTranslation } from "react-i18next";
type SizeType = Parameters<typeof Form>[0]['size'];

const SeminarEmail: React.FC = () => {
    const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');

    const onFormLayoutChange = ({ size }: { size: SizeType }) => {
        setComponentSize(size);
    };
    const { t } = useTranslation("creat");

    return (
        <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            initialValues={{ size: componentSize }}
            onValuesChange={onFormLayoutChange}
            size={componentSize as SizeType}
            >
           <div className="Seminar-end-thank-you-email">
           <div>
            <p className={styles.chubang}> {t("Seminar_email.td3")} </p>
          </div>
          <div className={styles.customForm}>
            <Form.Item 
            label= {t("Seminar_email.venue")}
             className={styles.laberStyle_SI}>
              <Input 
              className={styles.input_applications}

              />
            </Form.Item>
          </div>
          <div className={styles.customForm}>
            <Form.Item 
            label= {t("Seminar_email.online")}
            className={styles.laberStyle_SI}>
              <Input 
              className={styles.input_applications}

              />
            </Form.Item>
          </div>
        </div>
            
        </Form>
    );
};

export default SeminarEmail;