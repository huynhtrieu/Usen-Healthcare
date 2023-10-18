import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import type { TableRowSelection } from 'antd/es/table/interface';
import { format } from 'date-fns';
import React from 'react';
import './table.css';
import { useTranslation } from "react-i18next";
import table_list from './table.module.css';
import dayjs from "dayjs";
const dateFormat = "YYYY-MM-DD HH:mm:ss";

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


interface ITable_listProps {
  setSelectedRowKeys: React.Dispatch<React.SetStateAction<React.Key[]>>;
  selectedRowKeys: React.Key[];
  error: any;
  data: any;
}

const Table_list = ({
  setSelectedRowKeys,
  selectedRowKeys,
  error,
  data,
}: ITable_listProps) => {

  const { t } = useTranslation("list");
  const columns: ColumnsType<DataType> = [
    
    {
      
      key: 'seminar_id',
      title:  t("Sl_bottom.Seminar_Number"),
      render: (text, record) => (
        <span>
          <a
            href={`/${record.seminar_id}`}
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: 'black' }}
          >
            {`${record.seminar_id}`}
          </a>
        </span>
      ),
      dataIndex: 'seminar_id',
      className: 'custom-class-for-column1',
      sorter: {
        compare: (a, b) => a.seminar_id - b.seminar_id,
        multiple: 3,
      },
    },
  
    {
      key: 'seminar_title',
  
      title: t("Sl_bottom.Seminar_Title"),
      dataIndex: 'seminar_title',
      className: 'custom-class-for-column2',
    },
    {
      key: 'list_overview',
  
      title: t("Sl_bottom.Overview"),
      dataIndex: 'list_overview',
      className: 'custom-class-for-column3',
    },
    {
      key: 'Seminar_Category',
      title: t("Sl_bottom.Seminar_Category"),
      render: (text, record) => (
        <span>
          {record.is_online_seminar ? t("Sl_bottom.Online") : ''}
          <br />
          {record.is_hall_seminar ? t("Sl_bottom.Offline") : ''}
        </span>
      ),
      className: 'custom-class-for-column4',
    },
    {
      key: 'Event_Date',
      title: t("Sl_bottom.Event_Date"),
      render: (text, record) => (
        <span>
          {`${format(new Date(record.event_startdate), 'yyyy/MM/dd')} ~ ${format(
            new Date(record.event_enddate),
            'yyyy/MM/dd'
          )}`}
        </span>
      ),
      className: 'custom-class-for-column5',
      sorter: {
        compare: (a, b) => {
          const startDateMilisecondBefore = dayjs(
            a.event_startdate,
            dateFormat
          ).valueOf();
          const startDateMilisecondAfter = dayjs(
            b.event_startdate,
            dateFormat
          ).valueOf();
          return startDateMilisecondBefore - startDateMilisecondAfter;
        },
      },
    },
    {
      key: 'Publication_Period',
  
      title: t("Sl_bottom.Publication_Period"),
      render: (text, record) => (
        <span>
          {`${format(
            new Date(record.publication_start_date_time),
            'yyyy/MM/dd HH:mm'
          )} ~ ${format(
            new Date(record.publication_end_date_time),
            'yyyy/MM/dd HH:mm'
          )}`}
        </span>
      ),
      className: 'custom-class-for-column6',
      sorter: {
        compare: (a, b) => {
          const publicStartDateBefore = dayjs(
            a.publication_start_date_time,
            dateFormat
          ).valueOf();
          const publicStartDateAfter = dayjs(
            b.publication_start_date_time,
            dateFormat
          ).valueOf();
          return publicStartDateBefore - publicStartDateAfter;
        },
      },
    },
    {
      key: 'Publication_Status',
  
      title: t("Sl_bottom.Publication_Status"),
      render: () => <span>{t("Sl_bottom.Posting")}</span>,
      className: 'custom-class-for-column7',
    },
    {
      key: 'Seminar_URL',
      title: t("Sl_bottom.Seminar_URL"),
      render: (text, record) => (
        <span>
          <a
            href={`https://aa.html/${record.seminar_id}`}
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: 'black' }}
          >
            {`https://aa.html/${record.seminar_id}`}
          </a>
        </span>
      ),
      dataIndex: 'seminar_id',
      className: 'custom-class-for-column8',
    },
    {
      key: 'Numberof_Applicants',
      title: t("Sl_bottom.Numberof_Applicants"),
      dataIndex: 'numberOfApplicants',
      className: 'custom-class-for-column9',
      render: (text, record) => {
        const applicantsCategory1 = record.seminar_application.filter(
          (application) => application.seminar_application_category === 1
        );
        const applicantsCategory2 = record.seminar_application.filter(
          (application) => application.seminar_application_category === 2
        );
  
        let onText = '';
        let offText = '';
  
        if (applicantsCategory1.length > 0) {
          if (record.is_hall_seminar) {
            onText +=
            t("Sl_bottom.Online") +
              applicantsCategory1
                .map((application) => application.seminar_application_member)
                .join(', ');
          } else {
            offText +=
            t("Sl_bottom.Offline") +
              applicantsCategory1
                .map((application) => application.seminar_application_member)
                .join(', ');
          }
        }
        if (applicantsCategory2.length > 0) {
          if (!record.is_hall_seminar) {
            onText +=
            t("Sl_bottom.Online") +
              applicantsCategory2
                .map((application) => application.seminar_application_member)
                .join(', ');
          } else {
            offText +=
            t("Sl_bottom.Offline") +
              applicantsCategory2
                .map((application) => application.seminar_application_member)
                .join(', ');
          }
        }
        if (onText === '') onText = t("Sl_bottom.Online") + 0;
        if (offText === '') offText = t("Sl_bottom.Offline") +0;
        onText += t("Sl_bottom.human") ;
        offText += t("Sl_bottom.human");
  
        return (
          <span>
            {onText}
            <br />
            {offText}
          </span>
        );
      },
    },
  ];
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  if (error) {
    return <div>Error:</div>;
  }
  if (!data) {
    return <div>Loading...</div>;
  }
  const paginationConfig = {
    pageSize: 10,
  };
  const tableScroll = { x: '100%' };
  const onChange: TableProps<DataType>['onChange'] = (
  ) => {
  };
  return (
    <>
      <Table
        className={table_list.table_list}
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data?.data?.result?.seminars}
        onChange={onChange}
        bordered 
        size='middle'
        scroll={tableScroll} 
        pagination={paginationConfig}
        rowKey='seminar_id' 
      />
    </>
  );
};

export default Table_list;
