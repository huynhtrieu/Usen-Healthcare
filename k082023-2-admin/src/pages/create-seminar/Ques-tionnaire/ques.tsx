import Input from '@/components/input/Input';
import { TInitialValueQuestions } from '@/interface/seminar';
import { Col, Form, Radio, Row } from 'antd';
import { FormikProps } from 'formik';
import { useState } from 'react';
import styles from '../index.module.css';
import QueStyles from '../styled/Questionnaire.module.css';
import { useTranslation } from "react-i18next";
type SizeType = Parameters<typeof Form>[0]['size'];

type TQuestionnaireProps = {
  formik: FormikProps<TInitialValueQuestions>;
};

const initialValue = {
  answer: '',
  is_required_answer: undefined,
  questionnaire_cd_format: '',
  questionnaire_question: '',
};

const Questionnaire = ({ formik }: TQuestionnaireProps) => {
  const [noQuestion, setNoQuestion] = useState(1);
  const { t } = useTranslation("creat");
  const [componentSize, setComponentSize] = useState<SizeType | 'default'>(
    'default'
  );

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
      <div className='questionnaire'>
        <div>
        </div>
        <Row>
          <Col span={3} className={styles.column}>
            <div className={styles.header}>{t("questionnaire.Cotbu")}</div>
          </Col>
          <Col span={21}>
            {Array.from({ length: noQuestion }, (_, index) => index + 1).map(
              (item) => (
                <Row key={item}>
                  <Col span={3} className={styles.row_col_3}>
                    <Row>
                      <Col span={24}>
                        <div className={QueStyles.row_col_32_TD}>
                          <span style={{ color: 'red' }}>*</span>&nbsp;{t("questionnaire.Required")}
                        </div>
                      </Col>
                      <Col span={24}>
                        <div className={QueStyles.row_col_33_TD}>
                          <span style={{ color: 'red' }}>*</span>&nbsp;{t("questionnaire.format")}
                        </div>
                      </Col>
                      <Col span={24}>
                        <div className={styles.row_col_24_so21}>
                          <span style={{ color: 'red' }}>*</span>&nbsp;{t("questionnaire.question")}
                        </div>
                      </Col>
                      <Col span={24}>
                        <div className={styles.row_col_24_so21}>
                          <span style={{ color: 'red' }}>*</span>&nbsp;{t("questionnaire.Answer")}
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col span={21}>
                    <Row>
                      <Col span={24}>
                        <div className={QueStyles.row_col_32_ND}>
                          <Radio.Group
                            name='radiogroup'
                            onChange={(e) =>
                              formik.setFieldValue(
                                `seminar_questions[${
                                  item - 1
                                }].is_required_answer`,
                                e.target.value
                              )
                            }
                          >
                            <Radio
                              className={QueStyles.ques_radio}
                              value={true}
                            >
                      {t("questionnaire.true")}
                            </Radio>
                            <Radio
                              className={QueStyles.ques_radio}
                              value={false}
                            >
                        {t("questionnaire.false")}
                            </Radio>
                          </Radio.Group>
                          <div style={{ color: 'red' }}>
                            {formik.errors.seminar_questions?.[item - 1]
                              ?.is_required_answer ?? ``}
                          </div>
                        </div>
                      </Col>
                      <Col span={24}>
                        <div className={QueStyles.row_col_33_ND}>
                          <Radio.Group
                            name='radiogroup'
                            onChange={(e) =>
                              formik.setFieldValue(
                                `seminar_questions[${
                                  item - 1
                                }].questionnaire_cd_format`,
                                e.target.value
                              )
                            }
                          >
                            <Radio className={QueStyles.ques_radio} value={'1'}>
                            {t("questionnaire.radio_button")}

                            </Radio>
                            <Radio className={QueStyles.ques_radio} value={'2'}>
                            {t("questionnaire.checkbox")}


                            </Radio>
                            <Radio className={QueStyles.ques_radio} value={'3'}>
                            {t("questionnaire.text")}

                            </Radio>
                          </Radio.Group>
                          <div style={{ color: 'red' }}>
                            {formik.errors.seminar_questions?.[item - 1]
                              ?.questionnaire_cd_format ?? ``}
                          </div>
                        </div>
                      </Col>
                      <Col span={24}>
                        <div className={styles.row_col_21_21}>
                          <Form.Item
                            validateStatus={
                              formik.errors.seminar_questions?.[item - 1]
                                ?.questionnaire_question
                                ? 'error'
                                : ''
                            }
                          >
                            <Input
                              className={styles.input_34_35}
                              placeholder='Basic usage'
                              value={
                                formik.values.seminar_questions[item - 1]
                                  ?.questionnaire_question ?? ``
                              }
                              onChange={(e) =>
                                formik.setFieldValue(
                                  `seminar_questions[${
                                    item - 1
                                  }].questionnaire_question`,
                                  e.target.value
                                )
                              }
                              maxLength={500}
                            />
                          </Form.Item>
                        </div>
                      </Col>
                      <Col span={24}>
                        <div className={styles.row_col_21_21}>
                          <Form.Item
                            validateStatus={
                              formik.errors.seminar_questions?.[item - 1]
                                ?.answer
                                ? 'error'
                                : ''
                            }
                          >
                            <Input
                              className={styles.input_34_35}
                              placeholder='Basic usage'
                              value={
                                formik.values.seminar_questions[item - 1]
                                  ?.answer ?? ``
                              }
                              onChange={(e) =>
                                formik.setFieldValue(
                                  `seminar_questions[${item - 1}].answer`,
                                  e.target.value
                                )
                              }
                              maxLength={500}
                            />
                          </Form.Item>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              )
            )}

            <Row>
              <Col span={24}>
                <div className={styles.congtru}>
                  <div
                    style={{
                      borderRadius: '100%',
                      background: '#ffffff',
                      width: 20,
                      height: 20,
                      marginLeft:'auto',
                      border:'1px solid gray',
                      textAlign: 'center',
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      setNoQuestion((prev) => prev + 1);
                      const tempArr = [
                        ...formik.values.seminar_questions,
                        initialValue,
                      ];
                      formik.setFieldValue('seminar_questions', tempArr);
                    }}
                  >
                    +
                  </div>
                  <div
                    style={{
                      borderRadius: '100%',
                      background: '#ffffff',
                      width: 20,
                      height: 20,
                      marginLeft:'auto',
                      border:'1px solid gray',
                      textAlign: 'center',
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      if (formik.values.seminar_questions.length > 1) {
                        setNoQuestion((prev) => prev - 1);
                        const tempArr = [
                          ...formik.values.seminar_questions,
                        ].slice(0, -1);
                        formik.setFieldValue('seminar_questions', tempArr);
                      }
                    }}
                  >
                    -
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Form>
  );
};

export default Questionnaire;
