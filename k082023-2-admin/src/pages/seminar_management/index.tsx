import { Button, Form, Input, Row, Col, Select } from 'antd';
import styles from './index.module.css';
import Header_sl from './header_sl/header';
import ErrorMessage from './error_message/error';
import logo_print from '../../assets/images/logo_hd.png';
import Table_list from './table_list/table';
import './index.css';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import useConfirmModal from '@/hooks/useConfirmModal';
import React, { useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { deleteListSeminar, getListSeminar } from '@/apis/auth';
import { useToastContext } from '@/contexts/ToastContext';
const { Option } = Select;
interface ApiResponse {
  status: number;
  result: {
    seminars: DataType[];
  };
}

interface DataType {
  key: React.Key;
  seminar_id: number;
  seminar_title: string;
  is_hall_seminar: boolean;
  is_online_seminar: boolean;
  list_overview: string;
  event_startdate: Date;
  event_enddate: Date;
  publication_start_date_time: Date;
  publication_end_date_time: Date;
  seminar_application: [
    {
      seminar_application_member: number;
      seminar_application_category: number;
    },
  ];
}

export default function SeminarManagement() {
  const { t } = useTranslation("common");
  const toast = useToastContext();
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const { error, data, refetch } = useQuery<ApiResponse>({
    queryKey: ['seminars'],
    queryFn: getListSeminar,
  });

  const { mutate } = useMutation(deleteListSeminar, {
    onSuccess: (data) => {
      if (data.status === 200) {
        toast?.success({
          message: (t("delete.Deleteseminarsuccess")),
          description: '',
        });
        refetch();
      }
    },
    onError: () => {
      toast?.error({
        message: (t("delete.Chooseatleast1toshuffle")),
        description: '',
      });
    },
  });

  const { showConfirm } = useConfirmModal();
  const printReceipt = () => {
    const seminars = data?.data?.result?.seminars;
    if (!seminars || seminars.length === 0) {
      alert('No seminar selected.');
      return;
    }
    window.print();

  };
  return (
    <div>
      <div className={styles.semilar_task}>
        <Header_sl />
        <div className={styles.formContainer}>
          <Form
            name='wrap'
            labelCol={{ flex: '155px' }}
            labelAlign='left'
            labelWrap
            wrapperCol={{ span: 15 }}
            colon={false}
            style={{ maxWidth: 969, margin: '28px 28px 28px 38px' }}
          >
            <Row gutter={16} className={`${styles.formItemContainer} `}>
              <Col xs={24} sm={12}>
                <div className={`${styles.formContainer} ${styles.formBorder}`}>
                  <Form.Item
                    label={t("Sl_top.Seminar_Title")}
                    className={`${styles.laberStyle} `}
                  >
                    <Input className={styles.inputStyle} />
                  </Form.Item>
                </div>
              </Col>
              <Col xs={24} sm={12}>
                <div className={`${styles.formContainer} ${styles.formBorder}`}>
                  <Form.Item
                    label={t("Sl_top.Seminar_Category")}

                    className={styles.laberStyle}
                  >
                    <Select allowClear>
                      <Option value='male'>male</Option>
                      <Option value='female'>female</Option>
                      <Option value='other'>other</Option>
                    </Select>
                  </Form.Item>
                </div>
              </Col>
              <Form.Item label='' className={styles.formButton}>
                <Button
                  type='primary'
                  htmlType='submit'
                  className={styles.buttonStyle}

                >
                
                    <p>{t("Sl_top.Search")}</p>
              
                </Button>
              </Form.Item>
            </Row>
          </Form>
        </div>
        <ErrorMessage />
        <div
          className={styles.formButton_sl}
          style={{ maxWidth: 1088, margin: '28px 28px 0px 38px' }}
        >
          <div className={styles.button_seminar}>
            <div className={styles.button_left}>
              <Form.Item label='' className={styles.formButton}>
                <Button
                  type='primary'
                  // htmlType='submit'
                  className={styles.buttonStyle_left}
                  onClick={() =>
                    showConfirm({
                      title: t("delete.Doyouwanttodelete"),
                      content: '',
                      onCancel: () => { },
                      onOk: () => {
                        mutate({ seminars_id: selectedRowKeys });
                      },
                    })
                  }
                >
                  <p>{t("Sl_bottom.Delete")}</p>
                </Button>
              </Form.Item>
            </div>
            <div className={styles.button_right}>
              <div className={styles.button_row}>
                <Link to='/seminar/create'>
                  <Button
                    type='primary'
                    htmlType='submit'
                    className={styles.buttonStyle}
                  >
                    <p> {t("Sl_bottom.Register")}</p>
                  </Button>
                </Link>
                <Button
                  type='primary'
                  htmlType='submit'
                  className={styles.buttonStyle}
                  onClick={printReceipt}

                >
                  <p> {t("Sl_bottom.Download")}</p>
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* <ButtonSeminar /> */}
        {/* // impo trong bảng table_list */}
        <Table_list
          setSelectedRowKeys={setSelectedRowKeys}
          selectedRowKeys={selectedRowKeys}
          error={error}
          data={data}
        />
      </div>


      <div id={styles.print}>

        <header className="clearfix">
          <div id="logo" className="logo_print">
            <img src={logo_print} />
          </div>
          <h1>U-Sen Healthcare</h1>
          <h2>Seminar List</h2>
          <div id="company" className="clearfix">
            <div>Company Name</div>
            <div>455 Foggy Heights,<br /> AZ 85004, US</div>
            <div>(602) 519-0450</div>
            <div><a href="mailto:FEteam2@example.com">FEteam2@example.com</a></div>
          </div>
          <div id="project" >
            <div><span>PROJECT</span> {t("print.projectName")}</div>
            <div><span>CLIENT</span> {t("print.client")}</div>
            <div><span>ADDRESS</span>{t("print.address")}</div>
            <div><span>EMAIL</span> <a href="mailto:kakakan@example.com">{t("print.email")}</a></div>

          </div>
        </header>
        <main>
          <table>
            <thead>
              <tr>
                <th className="service">Numbers</th>
                <th className="tieude">Title</th>
                <th>Overview</th>
                <th>participation</th>
                <th>Link Website</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.result?.seminars.map((seminar, index) => (
                <tr key={index}>
                  <td className="service">{index + 1}</td>
                  <td className="tieude">{seminar.seminar_title}</td>
                  <td className="unit">{seminar.list_overview}</td>
                  <td className="qty">
                    {seminar.is_online_seminar ? t("Seminarinformation.Online") : ''}
                    <p></p>
                    {seminar.is_hall_seminar ? t("Seminarinformation.Offline") : ''}
                  </td>
                  <td className="total">
                    https://aa.html/{seminar.seminar_id}

                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan={4} className="grand total">Total Online</td>
                <td className="grand total">{data?.data?.result?.seminars.reduce((total, seminar) => {
                  return seminar.is_online_seminar ? total + 1 : total;
                }, 0)}</td>
              </tr>
              <tr>
                <td colSpan={4}>Total Offline</td>
                <td className="total">{data?.data?.result?.seminars.reduce((total, seminar) => {
                  return seminar.is_hall_seminar ? total + 1 : total;
                }, 0)}</td>
              </tr>
              <tr>
                <td colSpan={4} className="grand total"></td>
                <td className="grand total"></td>
              </tr>
              <tr></tr>
            </tbody>
          </table>
          <div id="notices">
            <div>NOTICE:</div>
            <div className="notice">Data was collected within the last 3 months.</div>
          </div>
        </main>
        
      </div>
    </div>
  );
}
