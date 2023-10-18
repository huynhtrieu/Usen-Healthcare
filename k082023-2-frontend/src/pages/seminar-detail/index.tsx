import React from "react";
import Title from '@/components/Title';
import Button from "@/components/Button";
import Typography from "@/components/Typography";
import imageNotAvailable from "../../assets/images/no_image_available.png";

import { SeminarContainer, SeminarContent, Datetime, Status, SeminarButton, Overview, Content, Lable, TimeStatus, MainImage, StyledRightOutlined, Path, SeminarButton2 } from "./styled";

import { seminardetail, seminarApply  } from "@/apis/seminar";
import { useMutation } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { RightCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { useTranslation } from "react-i18next";

interface ApiResponse {
  status: number;
  result: {
    seminarDetail: DataType[];
  }
}

interface DataType {
  key: React.Key;
  seminar_id: string;
  title: string;
  main_image_file: string;
  date: string;
  is_hall_seminar: boolean;
  is_online_seminar: boolean;
  is_accepting: string;
  is_offline_appliciate: boolean;
  is_online_appliciate: boolean;
  summary: string;
  max_participants: number;
  details: {
    detail_image_file?: string;
    detail_headline: string;
    detail_message: string;
  };
}

const SeminarDetail: React.FC = () => {
  const { t } = useTranslation('seminars');

  let {id} = useParams();
  const seminarId = id; 

  const determineUserAgent = (): string => {
    const userAgentString: string = navigator.userAgent.toLowerCase();
    if (!userAgentString.includes('mobi')) {
        return 'pc';
    } else {
        return 'sp';
    }
  };

  const detectedUserAgent: string = determineUserAgent();
  const userAgent = detectedUserAgent;

  const navigate = useNavigate();
  const accessToken = localStorage.getItem('accessToken');

  const mutation = useMutation(
    (data: { seminar_id: number, member_id: number, seminar_application_category: number }) => seminarApply(data.seminar_id, data.member_id, data.seminar_application_category),
    {
      onSuccess: (response) => {
        if (response.status === 200) {
          Modal.success({
            title: t("detail.title_success"),
            content: t("detail.register_success"),
          });
        } else if (response.status === 400) {
          Modal.error({
            title: t("detail.title_failure"),
            content: t("detail.register_failure"),
          });
        }
      },
      onError: (error) => {
        if (error?.response?.status === 400) {
          Modal.error({
            title: t("detail.title_failure"),
            content: t("detail.register_failure"),
          });
        } else {
          // Các trường hợp lỗi khác nếu có phát sinh
        }
      },
    }
  );

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = imageNotAvailable;
  };  
  
  const handleButtonClick = (category: number) => {
    const memberId = localStorage.getItem('userId');
    if (accessToken) {
      mutation.mutate({
        seminar_id: seminarId,
        member_id: parseInt(memberId || '0'),
        seminar_application_category: category,
      });
    } else {
      navigate('/login');
    }
  };

  const { error, data } = useQuery<ApiResponse>({
    queryKey: ['seminarDetail', seminarId],
    queryFn: () => seminardetail(seminarId, userAgent),
  });

  if (!data) {
    return <div>{t("common.loading")}</div>;
  }
  if (error) {
    return <div>{t("common.err_loading")}</div>;
  }
  
  const seminarDetail = data?.result || [];

  return(
    <div>
      <Path>
        <div>
          <Typography className="typo_16_gray">TOP</Typography>
          <StyledRightOutlined />
          <Typography className="typo_16_gray">{t("seminars.title_seminars")}</Typography>
          <StyledRightOutlined />
          <Typography className="typo_16_black">{t("detail.title_detail")}</Typography>
        </div>
      </Path>  
      <SeminarContainer>
        <div>
          <Title className="seminar_detail_title">{seminarDetail.title}</Title>
        </div>
        <SeminarContent>
          <MainImage>
            <img 
              src={import.meta.env.VITE_S3_BUCKET_URL + seminarDetail.main_image_file} 
              alt=""
              onError={handleImageError}
            />
          </MainImage>
                      
          <TimeStatus>
            <Datetime>{seminarDetail.date}</Datetime>
            <Status>{seminarDetail.is_accepting}</Status>
          </TimeStatus>
          
              <Overview>
                <Title className="seminar_description">概要：{seminarDetail.summary}</Title>
                <Title className="seminar_description">会場：東京都●●区秋葉原UDX／Live参加も可能です。</Title>
                <Title className="seminar_applicantCount">申込み人数：{seminarDetail.max_participants}人</Title>
              </Overview>
              <SeminarButton>
                <Button 
                  className="btn_seminar_register"
                  label= {t("detail.btn_offline")}
                  icon={<RightCircleOutlined />}
                  id=""
                  onClick={() => handleButtonClick(1)}
                  disabled={mutation.isLoading}
                />
                <Button 
                  className="btn_seminar_register"
                  label= {t("detail.btn_online")}
                  icon={<RightCircleOutlined />}
                  id=""
                  onClick={() => handleButtonClick(2)}
                  disabled={mutation.isLoading}
                />
              </SeminarButton>
              <Title className="seminar_detail_title2"> {t("detail.detail")}</Title>
              <div>
                  {seminarDetail.details.map((value, index) => (
                  <Content key={index}>
                    <img 
                      src={import.meta.env.VITE_S3_BUCKET_URL + value.detail_image_file} 
                      alt=""
                      onError={handleImageError}
                    />
                    <div>
                      <Title className="seminar_content_title">{value.detail_headline}</Title>
                      <Lable>{value.detail_message}</Lable>
                    </div>
                  </Content>
                ))}
              </div>
              
              <SeminarButton2>
                <Button
                  className="btn_seminar_register2"
                  label=  {t("detail.btn_offline")}
                  icon={<RightCircleOutlined />}
                  id=""
                  onClick={() => handleButtonClick(1)}
                  disabled={mutation.isLoading}
                />
                <Button 
                  className="btn_seminar_register2"
                  label= {t("detail.btn_online")}
                  icon={<RightCircleOutlined />}
                  id=""
                  onClick={() => handleButtonClick(2)}
                  disabled={mutation.isLoading}
                />
              </SeminarButton2>
          </SeminarContent>
        </SeminarContainer>
    </div>
  );
};

export default SeminarDetail;