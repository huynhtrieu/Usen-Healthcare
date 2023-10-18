/* eslint-disable no-unused-vars */
import Upload from "@/components/upload/single-upload";
// import ImgCrop from 'antd-img-crop';
import { MenuOutlined, UploadOutlined } from "@ant-design/icons"; // Make sure you import from the correct location
import { Button, Col, Form, Input, Row } from "antd";
import { RcFile } from "antd/es/upload";
import { FormikProps } from "formik";
import { useState } from "react";
import "../index.css";
import styles from "../index.module.css";
import listStyles from "../styled/List-display-information.module.css";
import { useTranslation } from "react-i18next";
type SizeType = Parameters<typeof Form>[0]["size"];

type TListDisplayInformation = {
  handleChangeFile: (
    event: RcFile | undefined,
    filePath:
      | "mockpjteam1/image/general"
      | "mockpjteam1/image/main"
      | "mockpjteam1/image/sub",
    position: number
  ) => void;

  formik: FormikProps<{
    seminar_details: { headline: string; content: string };
  }>;
};

const ListDisplayInformation = ({
  handleChangeFile,
  formik,
}: TListDisplayInformation) => {
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default"
  );
  const { t } = useTranslation("creat");
  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize as SizeType}
      >
        <div className="List-display-information">
          <div>
          </div>
          <Row>
            <Col span={24}>
              <Row>
                <Col span={4}>
                  <Row>
                    <Col span={24}>
                      <div className={listStyles.row_col_13_upload}>
                       &nbsp; {t("List_display_information.four_anh")} <span style={{ color: "red" }}>*</span>
                      </div>
                    </Col>
                    <Col span={24}>
                      <div className={listStyles.row_col_15}>
                        &nbsp;{t("List_display_information.List_overview")}  <span style={{ color: "red" }}>*</span>
                      </div>
                    </Col>
                    <Col span={24}>
                      <div className={listStyles.row_col_16}>
                        &nbsp;{t("List_display_information.one_main")}  <span style={{ color: "red" }}>*</span>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col span={20}>
                  <Row>
                    <Col span={24} className={listStyles.Anh_13_14}>
                      <Row>
                        <Col span={24}>
                          <div className={listStyles.anh1}>
                            <div className={styles.row_col_14_upload}>
                              <div className={styles.customUploadContainer}>
                                <Upload
                                  onChangeCustom={(e) =>
                                    handleChangeFile(
                                      e,
                                      "mockpjteam1/image/general",
                                      1
                                    )
                                  }
                                >
                                  <Button
                                    className={listStyles.uploadButton}
                                  >
                                    {t("upanh")}  
                                      </Button>
                                </Upload>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col span={24}>
                          <div className={listStyles.anh1}>
                            <div className={styles.row_col_14_upload}>
                              <div className={styles.customUploadContainer}>
                                <Upload
                                  onChangeCustom={(e) =>
                                    handleChangeFile(
                                      e,
                                      "mockpjteam1/image/general",
                                      2
                                    )
                                  }
                                >
                                  <Button
                                    className={listStyles.uploadButton}
                                  >
                                    {t("upanh")}  
                                  </Button>
                                </Upload>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col span={24}>
                          <div className={listStyles.anh1}>
                            <div className={styles.row_col_14_upload}>
                              <div className={styles.customUploadContainer}>
                                <Upload
                                  onChangeCustom={(e) =>
                                    handleChangeFile(
                                      e,
                                      "mockpjteam1/image/general",
                                      3
                                    )
                                  }
                                >
                                  <Button
                                    className={listStyles.uploadButton}
                                  >
                                    {t("upanh")}  
                                  </Button>
                                </Upload>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col span={24}>
                          <div className={listStyles.anh1}>
                            <div className={styles.row_col_14_upload}>
                              <div className={styles.customUploadContainer}>
                                <Upload
                                  onChangeCustom={(e) =>
                                    handleChangeFile(
                                      e,
                                      "mockpjteam1/image/general",
                                      4
                                    )
                                  }
                                >
                                  <Button
                                    className={listStyles.uploadButton}
                                  >
                                    {t("upanh")}  
                                  </Button>
                                </Upload>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={24}>
                      <div className={styles.row_col_21_24}>
                        <Input
                          className={styles.input_20}
                          placeholder="Basic usage"
                          maxLength={500}
                        />
                      </div>
                    </Col>
                    <Col span={24}>
                      <div className={listStyles.row_col_16_17}>
                        <div className={listStyles.anh1}>
                          <div className={styles.row_col_14_upload}>
                            <div className={styles.customUploadContainer}>
                              <Upload
                                onChangeCustom={(e) =>
                                  handleChangeFile(
                                    e,
                                    "mockpjteam1/image/main",
                                    1
                                  )
                                }
                              >
                                <Button
                                  className={listStyles.uploadButton}
                                >
                                    {t("upanh")}  
                                </Button>
                              </Upload>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Form>

      <div>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          initialValues={{ size: componentSize }}
          onValuesChange={onFormLayoutChange}
          size={componentSize as SizeType}
        >
          <div className="Detaile-dinformation-cassette">
            <div>
            </div>
            <Row>
              <Col span={2} className={styles.column}>
                <div className={styles.header}> {t("Detailed_information.Detailed")}<span style={{ color: "red" }}>*</span> </div>
              </Col>
              <Col span={21}>
                <Row>
                  <Col span={3} className={styles.row_col_3}>
                    <Row>
                      <Col span={24}>
                        <div className={styles.row_col_24_upload}>
                          &nbsp;{t("Detailed_information.Detailed_img")}
                        </div>
                      </Col>
                      <Col span={24}>
                        <div className={styles.row_col_24}>
                         &nbsp;{t("Detailed_information.heading")}
                        </div>
                      </Col>
                      <Col span={24}>
                        <div className={styles.row_col_24_so21}>
                          &nbsp;{t("Detailed_information.message")}
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col span={21}>
                    <Row>
                      <Col span={24}>
                        <div className={styles.row_col_21_24_upload}>
                          <div className={styles.customUploadContainer}>
                            <Upload
                              onChangeCustom={(e) =>
                                handleChangeFile(e, "mockpjteam1/image/sub", 1)
                              }
                            >
                              <Button
                                className={listStyles.uploadButton}
                              >
                                    {t("upanh")}  
                              </Button>
                            </Upload>
                          </div>
                        </div>
                      </Col>
                      <Col span={24}>
                        <div className={styles.row_col_21_24}>
                          <Form.Item
                            validateStatus={
                              formik.errors.seminar_details?.["content"]
                                ? "error"
                                : ""
                            }
                          >
                            <Input
                              className={styles.input_26}
                              placeholder="Basic usage"
                              value={formik.values.seminar_details.content}
                              onChange={(e) =>
                                formik.setFieldValue(
                                  `seminar_details.content`,
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
                              formik.errors.seminar_details?.["headline"]
                                ? "error"
                                : ""
                            }
                          >
                            <Input
                              className={styles.input_21}
                              placeholder="Basic usage"
                              value={formik.values.seminar_details.headline}
                              onChange={(e) =>
                                formik.setFieldValue(
                                  `seminar_details.headline`,
                                  e.target.value
                                )
                              }
                              maxLength={50}
                            />
                          </Form.Item>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <div className={styles.Cong_tru_form}></div>
                  </Col>
                </Row>
              </Col>
              <Col span={1} className={styles.column}>
                <div className={styles.Footer_18_22}>
                  <MenuOutlined />
                </div>
              </Col>
            </Row>
          </div>
        </Form>
      </div>
    </>
  );
};

export default ListDisplayInformation;
