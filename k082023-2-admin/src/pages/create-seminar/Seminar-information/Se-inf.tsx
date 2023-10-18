import DatePicker from '@/components/datepicker/datepicker';
import Input from '@/components/input/Input';
import { TInitialValueSeminarInformation } from '@/interface/seminar';
import { Checkbox, Col, Form, Row } from 'antd';
import dayjs from 'dayjs';
import { FormikProps } from 'formik';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import '../index.css';
import styles from '../index.module.css';
type SizeType = Parameters<typeof Form>[0]['size'];

type TSeminarInformationProps = {
  formik: FormikProps<TInitialValueSeminarInformation>;
};

const SeminarInformation = ({ formik }: TSeminarInformationProps) => {
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
      <div className='Seminar-information'>
        <div className={styles.rangbuoc}>
          <p>{t("batbuoc")}</p>
        </div>
        <div className={styles.customForm}>
          <Form.Item
            label={t("Seminarinformation.Publication_period")}
            style={{ maxWidth: 900, marginBottom: 0 }}
            className={styles.laberStyle_SI}
            required
          >
            <Row gutter={16} className={styles.custom_row} style={{}}>
              <Col xl={9} md={12}>
                <Form.Item
                  style={{ maxWidth: 900, marginBottom: 0 }}
                  required
                  validateStatus={
                    formik.errors.publication_start_date_time ? 'error' : ''
                  }
                >
                  <DatePicker
                    label={t("Seminarinformation.starts")}
                    // name="publication_start_date_time" //thuoc tinh chuan json
                    showTime={{ format: 'HH:mm' }}
                    showMinute={true}
                    format='YYYY-MM-DD HH:mm'
                    value={formik.values.publication_start_date_time}
                    onChange={(time) =>
                      formik.setFieldValue('publication_start_date_time', time)
                    }
                    disabledDate={(date) => {
                      return date.valueOf() < dayjs().startOf('day').valueOf();
                    }}
                  />
                </Form.Item>
              </Col>
              <Col xl={9} md={12}>
                <Form.Item
                  style={{ maxWidth: 900, marginBottom: 0 }}
                  required
                  validateStatus={
                    formik.errors.publication_end_date_time ? 'error' : ''
                  }
                >
                  <DatePicker
                    label={t("Seminarinformation.ends")}
                    // name="publication_start_date_time" //thuoc tinh chuan json
                    showTime={{ format: 'HH:mm' }}
                    showMinute={true}
                    format='YYYY-MM-DD HH:mm'
                    value={formik.values.publication_end_date_time}
                    disabledDate={(date) => {
                      return date.valueOf() < dayjs().startOf('day').valueOf();
                    }}
                    onChange={(time) =>
                      formik.setFieldValue('publication_end_date_time', time)
                    }
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form.Item>
        </div>
        {/* //cái này fix cứng Url */}
        <div className={styles.customForm}>
          <Form.Item
            label={t("Seminarinformation.Seminar_URL")}
            className={styles.laberStyle_SI}
          >
            {/* <Input maxLength={500} /> */}
            <p> https://aaaaaa.html</p>
          </Form.Item>
        </div>
        <div className={styles.customForm}>
          <Form.Item
            label={t("Seminarinformation.Seminar_title")}
            className={styles.laberStyle_SI}
            name='seminar_title'
            required
            validateStatus={formik.errors.seminar_title ? 'error' : ''}
          >
            <Input
              onChange={(e) => {
                formik.setFieldValue('seminar_title', e.target.value);
              }}
              value={formik.values.seminar_title}
              maxLength={100}
            />
          </Form.Item>
        </div>
        {/* đoạn này là checkbox  tích là true không tích là false có thể tích cả 2  */}
        <div className={styles.customForm}>
          <Form.Item
            label={t("Seminarinformation.Seminar_classification")}
            // name="disabled"
            valuePropName='checked'
            className={styles.laberStyle_SI}
            required
          >
            <div className='checkbox-group__container'>
              <Checkbox.Group
                onChange={(values) => {
                  formik.setFieldValue(
                    'is_online_seminar',
                    values.includes('online')
                  );
                  formik.setFieldValue(
                    'is_hall_seminar',
                    values.includes('offline')
                  );
                }}
              >
                <Checkbox value={'offline'} style={{ minWidth: 239 }}>
                {t("Seminarinformation.Offline")}
                 </Checkbox>
                <Checkbox value={'online'}>
                {t("Seminarinformation.Online")}
                 </Checkbox>
              </Checkbox.Group>
              {formik.errors.is_online_seminar && (
                <div style={{ color: 'red' }}>
                  {formik.errors.is_online_seminar}
                </div>
              )}
            </div>
          </Form.Item>
        </div>
        <div className={styles.customForm}>
          <Form.Item
            label= {t("Seminarinformation.Event")}
            style={{ maxWidth: 900 }}
            className={styles.laberStyle_SI}
            required
          >
            <Row gutter={16} className={styles.custom_row} style={{}}>
              <Col xl={9} md={12}>
                <Form.Item
                  style={{ maxWidth: 900 }}
                  required
                  validateStatus={formik.errors.event_startdate ? 'error' : ''}
                >
                  <DatePicker
                    label={t("Seminarinformation.starts")}
                    // name="publication_start_date_time" //thuoc tinh chuan json
                    showTime={{ format: 'HH:mm' }}
                    showMinute={true}
                    format='YYYY-MM-DD HH:mm'
                    value={formik.values.event_startdate}
                    onChange={(time) =>
                      formik.setFieldValue('event_startdate', time)
                    }
                    disabledDate={(date) => {
                      return date.valueOf() < dayjs().startOf('day').valueOf();
                    }}
                  />
                </Form.Item>
              </Col>

              <Col xl={9} md={12}>
                <Form.Item
                  style={{ maxWidth: 900 }}
                  required
                  validateStatus={formik.errors.event_enddate ? 'error' : ''}
                >
                  <DatePicker
                    label={t("Seminarinformation.ends")}
                    // name="publication_start_date_time" //thuoc tinh chuan json
                    showTime={{ format: 'HH:mm' }}
                    showMinute={true}
                    format='YYYY-MM-DD HH:mm'
                    value={formik.values.event_enddate}
                    onChange={(time) =>
                      formik.setFieldValue('event_enddate', time)
                    }
                    disabledDate={(date) => {
                      return date.valueOf() < dayjs().startOf('day').valueOf();
                    }}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form.Item>
        </div>
        {/* số người để ở dạng string nhập liệu  */}
        <div className={styles.customForm}>
          <Form.Item
            label={t("Seminarinformation.max_human")}
            className={styles.laberStyle_SI}
            name='seminar_maximum_participant'
            required
            validateStatus={
              formik.errors.seminar_maximum_participant ? 'error' : ''
            }
          >
            <Input
              value={formik.values.seminar_maximum_participant}
              onChange={(e) =>
                formik.setFieldValue(
                  'seminar_maximum_participant',
                  e.target.value
                )
              }
              maxLength={9}
            />
          </Form.Item>
        </div>
        {/* biểu tượng của hội thảo dạng checkbox  */}
        <div className={styles.customForm}>
          <Form.Item
            name={['seminar_attribute', 'icon_id']}
            label={t("Seminarinformation.Seminar_attribute")}
            className={styles.laberStyle_SI}
            required
          >
            <div className='checkbox-group__container'>
              <Checkbox.Group
                onChange={(values) => {
                  const tempArray = values.map((item) => ({
                    icon_id: item,
                  }));
                  formik.setFieldValue('seminar_attribute', tempArray);
                }}
              >
                <Row>
                  <Col span={9}>
                    <Checkbox
                      value={1}
                      style={{ lineHeight: '32px', minWidth: 238 }}
                    >
                   {t("Seminarinformation.icon_1")}
                    </Checkbox>
                  </Col>
                  <Col span={9}>
                    <Checkbox value={2} style={{ lineHeight: '32px' }}>
                    {t("Seminarinformation.icon_2")}
                    </Checkbox>
                  </Col>

                  <Col span={9}>
                    <Checkbox
                      value={3}
                      style={{ lineHeight: '32px', minWidth: 238 }}
                    >
                      {t("Seminarinformation.icon_3")}
                    </Checkbox>
                  </Col>
                  <Col span={9}>
                    <Checkbox value={4} style={{ lineHeight: '32px' }}>
                    {t("Seminarinformation.icon_4")}
                    </Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>
              {formik.errors.seminar_attribute && (
                <div style={{ color: 'red' }}>
                  {`${formik.errors.seminar_attribute}`}
                </div>
              )}
            </div>
          </Form.Item>
        </div>
      </div>
    </Form>
  );
};

export default SeminarInformation;
