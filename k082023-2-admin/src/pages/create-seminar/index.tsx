import style_cm from '../../components/button/button_seminar.module.css';
import { createSeminar, uploadImg } from '@/apis/seminar';
import { useToastContext } from '@/contexts/ToastContext';
import {
  TInitialValueQuestions,
  TInitialValueSeminarInformation,
} from '@/interface/seminar';
import { useTranslation } from "react-i18next";
import { cloneFile } from '@/utils/clone-file';
import { readImageAsBinary } from '@/utils/read-file-as-binary';
import { Button, Form } from 'antd';
import axios from 'axios';
import { useFormik } from 'formik';
import { isEmpty } from 'lodash';
import { RcFile } from 'rc-upload/lib/interface';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ApplicationEmail from './Application-reception-completion-email/Application-rce';
import './index.css';
import styles from './index.module.css';
import ListDisplayInformation from './List-display-information/list-dis';
import Questionnaire from './Ques-tionnaire/ques';
import ReminderEmail from './Reminder-email/reminde-e';
import {
  applicationEmailSchema,
  listDisplaySchema,
  questionnaireSchema,
  seminarInfoSchema,
} from './Schema/CreateFormSchema';
import SeminarEmail from './Seminar-email/Seminar-e';
import SeminarInformation from './Seminar-information/Se-inf';
import Creat_Sm from './styled/Creat-sm.module.css';
export type SelectedFilesState = {
  'mockpjteam1/image/general': TSelectedFileWithPos[];
  'mockpjteam1/image/main': TSelectedFileWithPos[];
  'mockpjteam1/image/sub': TSelectedFileWithPos[];
};

type TSelectedFileWithPos = {
  file: RcFile;
  position: number;
};

const initialSelectedFile = {
  'mockpjteam1/image/general': [],
  'mockpjteam1/image/main': [],
  'mockpjteam1/image/sub': [],
};

const CreateSeminar: React.FC = () => {
  const [formHasErrors, setFormHasErrors] = useState(false);
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const navigate = useNavigate();
  const toast = useToastContext();
  const [selectedFiles, setSelectedFiles] =
    useState<SelectedFilesState>(initialSelectedFile);

  const seminarInfoFormik = useFormik<TInitialValueSeminarInformation>({
    initialValues: {
      event_startdate: null,
      event_enddate: null,
      publication_start_date_time: null,
      publication_end_date_time: null,
      seminar_title: '',
      is_online_seminar: false,
      is_hall_seminar: false,
      seminar_maximum_participant: 0,
      seminar_attribute: [],
    },
    onSubmit() {
     
    },
    validationSchema: seminarInfoSchema,
    validateOnChange: isFormSubmited,
    validateOnBlur: false,
  });

  // ================handle in List Display==========================

  const listDisplayFormik = useFormik({
    initialValues: {
      seminar_details: {
        headline: '',
        content: '',
      },
    },
    onSubmit() {
    },
    validationSchema: listDisplaySchema,
    validateOnChange: isFormSubmited,
    validateOnBlur: false,
  });

  const handleChangeFile = (
    file: RcFile,
    filePath:
      | 'mockpjteam1/image/general'
      | 'mockpjteam1/image/main'
      | 'mockpjteam1/image/sub',
    position: number
  ) => {
    if (file) {
      setSelectedFiles((prev) => {
        let tempArr: TSelectedFileWithPos[] = [];
        const tempFile = cloneFile(file);
        if (prev[filePath].find((item) => item.position === position)) {
          tempArr = prev[filePath].map((item) => {
            if (item.position === position) {
              return {
                file: tempFile,
                position,
              };
            }
            return item;
          });
        } else {
          tempArr = [...prev[filePath], { file: tempFile, position }];
        }
        return { ...prev, [filePath]: [...tempArr] };
      });
    }
    return false;
  };

  const handleUpload = async () => {
    try {
      // let checkUploadSuccess = true;
      const array = [] as unknown as Promise<Boolean>[];

      Object.entries(selectedFiles).forEach(([folderPath, files]) => {
        files.forEach(async (item) => {
          try {
            if (item) {
              const result = uploadFile(item.file, folderPath);
              array.push(result);
              // 
            }
          } catch (err) {
            // ;
          }
        });
      });

      const resp = await Promise.all(array);
      return resp.every((e) => e);
      // return resp;
    } catch (err) {
      //
    }
  };

  const uploadFile = async (file: RcFile, folderPath: string) => {
    try {
      let response = await uploadImg(file.name, folderPath, file.type ?? ``);
      if (response.data.status === 200) {
        let presignedUrl = response.data.result?.presigned_url;

        const binaryData = await readImageAsBinary(file);
        try {
          await axios.put(presignedUrl, binaryData, {
            headers: {
              'Content-Type': file.type,
            },
          });
          return true;
        } catch (err) {
          return false;
        }
      }
      return false;
    } catch (err) {
      // throw new Error('failure');
      return false;
    }
  };

  // ================handle in ApplicationEmail==========================
  const applicationEmailFormik = useFormik({
    initialValues: {
      seminar_emails: {
        optional_message_hall: '',
        optional_message_online: '',
      },
    },
    validationSchema: applicationEmailSchema,
    onSubmit() { },
    validateOnChange: isFormSubmited,
    validateOnBlur: false,
  });

  // ================handle in Questionnaire==========================
  const questionnaireFormik = useFormik<TInitialValueQuestions>({
    initialValues: {
      seminar_questions: [
        {
          answer: '',
          is_required_answer: undefined,
          questionnaire_cd_format: '',
          questionnaire_question: '',
        },
      ],
    },
    validationSchema: questionnaireSchema,
    onSubmit() {
    },
    validateOnChange: isFormSubmited,
    validateOnBlur: false,
  });

  // ================handle in create seminar==========================
  const handleCreateSeminar = async () => {
    setIsFormSubmited(true);
    const serminarInfoErrors = await seminarInfoFormik.validateForm();
    const listDisplayErrors = await listDisplayFormik.validateForm();
    const applicationEmailyErrors = await applicationEmailFormik.validateForm();
    const questionnaireErrors = await questionnaireFormik.validateForm();
    let totalLength = 0;

    for (const key in selectedFiles) {
      const array = selectedFiles[key];
      totalLength += array.length;
    }

    if (
      isEmpty(serminarInfoErrors) &&
      isEmpty(listDisplayErrors) &&
      isEmpty(applicationEmailyErrors) &&
      isEmpty(questionnaireErrors) &&
      totalLength === 6
    ) {

      const uploadStatus = await handleUpload();
      if (!uploadStatus) {
        // ('upload error');
      } else {
        let seminarImages: { file_name: any; file_path: string }[] = [];
        for (const key in selectedFiles) {
          const array = selectedFiles[key];
          array.forEach((item) =>
            seminarImages.push({
              file_name: item?.file.name,
              file_path: key,
            })
          );
        }
        const payload = {
          publication_start_date_time:
            seminarInfoFormik.values.publication_start_date_time?.format(
              'YYYY-MM-DD HH:mm:ss'
            ),
          publication_end_date_time:
            seminarInfoFormik.values.publication_end_date_time?.format(
              'YYYY-MM-DD HH:mm:ss'
            ),
          event_startdate: seminarInfoFormik.values.event_startdate?.format(
            'YYYY-MM-DD HH:mm:ss'
          ),
          event_enddate: seminarInfoFormik.values.event_enddate?.format(
            'YYYY-MM-DD HH:mm:ss'
          ),
          seminar_title: seminarInfoFormik.values.seminar_title,
          is_hall_seminar: seminarInfoFormik.values.is_hall_seminar,
          is_online_seminar: seminarInfoFormik.values.is_online_seminar,
          seminar_maximum_participant: `${seminarInfoFormik.values.seminar_maximum_participant}`,
          seminar_attribute: seminarInfoFormik.values.seminar_attribute,
          seminar_details: listDisplayFormik.values.seminar_details,
          seminar_emails: applicationEmailFormik.values.seminar_emails,
          seminar_questions: questionnaireFormik.values.seminar_questions,
          seminar_images: seminarImages,
        };

        const res = await createSeminar(payload);
        if (res.status === 200) {
          toast?.success({
               message:  (t("message_creat.creat_success")),

          });
          navigate('/seminar');
        } else {
          toast?.error({
            message:  (t("message_creat.creat_error")),
          });
        }
      }
    } else {
      if (totalLength < 6) {
        toast?.error({
          message: (t("message_creat.Full_img")),

        });
      }
    }
  };

  useEffect(() => {
    let totalLength = 0;

    for (const key in selectedFiles) {
      const array = selectedFiles[key];
      totalLength += array.length;
    }

    if (
      !isEmpty(seminarInfoFormik.errors) ||
      !isEmpty(listDisplayFormik.errors) ||
      !isEmpty(applicationEmailFormik.errors) ||
      !isEmpty(questionnaireFormik.errors) ||
      totalLength < 6
    ) {
      setFormHasErrors(true);
    } else {
      setFormHasErrors(false);
    }
  }, [
    seminarInfoFormik.errors,
    listDisplayFormik.errors,
    applicationEmailFormik.errors,
    questionnaireFormik.errors,
    selectedFiles,
  ]);

  const checkError = isFormSubmited && formHasErrors;
  const { t } = useTranslation("creat");
  return (
    <div className={styles.SemilarCreat_task}>
      {/* ///////////////////////////// 2 nút bấm ở  trên  bỏ qua////////////////////////////////////////// */}
      <div>
        <div className={style_cm.formButton_sl}>
          <Form
            name="wrap"
            labelCol={{ flex: '155px' }}
            labelAlign="left"
            labelWrap
            wrapperCol={{ span: 15 }}
            colon={false}
            style={{ maxWidth: 900, margin: '28px 28px 31px 38px' }}
          >
            <div className={style_cm.button_seminar}>
              <div className={style_cm.button_left}>
                <Form.Item label="" className={style_cm.formButton}>
                <Link to='/seminar'>
                  <Button type="primary" htmlType="submit" className={style_cm.buttonStyle_left}>
                    <p> {t("Return")}</p>
                  </Button>
                  </Link>
                </Form.Item>
              </div>
              <div className={style_cm.button_right}>
                <div className={style_cm.button_row}>
                  <Button
                    type='primary'
                    htmlType='submit'
                    onClick={() => handleCreateSeminar()}

                    className={style_cm.buttonStyle}>
                    <p>{t("Register")}</p>
                  </Button>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
      <div
        className={styles.container_canhbao}>
        {checkError && (
          <div className={styles.canhbao} >{t("canhbao")}</div>
        )}
      </div>
      <SeminarInformation formik={seminarInfoFormik} />
      <ListDisplayInformation
        formik={listDisplayFormik}
        handleChangeFile={handleChangeFile}
      />
      <ApplicationEmail formik={applicationEmailFormik} />
      <ReminderEmail />
      <SeminarEmail />
      <Questionnaire formik={questionnaireFormik} />
      <div className={Creat_Sm.button_creat_seminar}>
        <div className={Creat_Sm.creat}>
          <Button
            type='primary'
            htmlType='submit'
            className={Creat_Sm.buttonStyle}
            onClick={() => handleCreateSeminar()}
          >
            <p>{t("Register")}</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateSeminar;
