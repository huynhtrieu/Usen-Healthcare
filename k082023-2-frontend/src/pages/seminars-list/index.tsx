import Title from '@/components/Title';
import Button from "@/components/Button";
import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { useQuery } from '@tanstack/react-query';
import { seminarlist } from "../../apis/seminar";

import imageNotAvailable from "../../assets/images/no_image_available.png";

import { Pagination } from 'antd';
import { RightCircleOutlined } from '@ant-design/icons';
import { SeminarContainer, SeminarList, SeminarImg,ContainerImg, Thumbnail, Content, Datetime, Status, Type, SeminarContent, Path, StyledRightOutlined } from './styled';
import { Link } from 'react-router-dom';
import Typography from '@/components/Typography';

interface ApiResponse {
  status: number;
  result: {
    seminars: DataType[];
  };
}

interface DataType {
  key: React.Key;
  images:[
    {
      file_path: string
    }
  ];
  date: string;
  is_accepting: boolean;
  title: boolean;
  summary: string;
  max_participant: number;
  icons:[
    {
      icon: string
    }
  ];
  url_to_go: string;
}

const SeminarsList: React.FC = () => {
  const { t } = useTranslation('seminars');

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const { error, data } = useQuery<ApiResponse>({
    queryKey: ['seminars'],
    queryFn: seminarlist,
  });
  
  if (!data) {
    return <div>{t("common.loading")}</div>;
  }
  if (error) {
    return <div>{t("common.err_loading")}</div>;
  }
  const seminars = data?.result.seminars || [];

  type Image = {
    file_path: string;
  };
  
  type SeminarProps = {
    images: Image[];
  };

  const Seminar: React.FC<SeminarProps & { className?: string }> = ({ images, className }) => {

    const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
      event.currentTarget.src = imageNotAvailable;
    };

    const [selectedImage, setSelectedImage] = useState<string>(
      import.meta.env.VITE_S3_BUCKET_URL + images[0]?.file_path
    );
    const handleThumbnailClick = (filePath: string) => {
      setSelectedImage(import.meta.env.VITE_S3_BUCKET_URL + filePath);
    };
  
    return (
      <ContainerImg className={className}>
        <div className="row">
          <SeminarImg className="col-xl-12" style={{ paddingBottom: '20px' }}>
              <img id="img1" src={selectedImage} alt="Selected" onError={handleImageError} /> 
          </SeminarImg>
        </div>
        <div className="row">
          {images.map((link, imgIndex) => (
            <div key={imgIndex}>
              <Thumbnail 
                src={import.meta.env.VITE_S3_BUCKET_URL + link.file_path}
                alt={`Thumbnail ${imgIndex + 1}`} 
                onClick={() => handleThumbnailClick(link.file_path)}
                onError={handleImageError} 
                lastItem={imgIndex === images.length - 1}
              />
            </div>
          ))}
        </div>
      </ContainerImg>
    );
  };

  const currentSeminars = seminars.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const getSeminarUrl = (url) => {
    url = url.split('/');
    return url.pop();

  };

  return (
    <SeminarContainer>
      <Path>
        <div>
          <Typography className="typo_16_gray">TOP</Typography>
          <StyledRightOutlined />
          <Typography className="typo_16_gray">{t("seminars.title_seminars")}</Typography>
        </div>
      </Path>  
      <div>
        <Title className="seminar_title1_30">{t("seminars.title_seminars")}</Title>
      </div>
      <SeminarContent>
        {currentSeminars.map((seminar, index) => (
          <SeminarList key={index}>
            <Seminar className="seminar-first" key={index} images={seminar.images} />
            <Content>
              <div className='row'>
                <Datetime>{seminar.date}</Datetime>
                <Status>{seminar.is_accepting}</Status>
              </div>
              <Title className="seminar_title">{seminar.title}</Title>
              <Title className="seminar_description">{seminar.summary}</Title>
              <Title className="seminar_description">{t("seminars.venue")}</Title>
              <Title className="seminar_applicantCount">{t("seminars.numberOfApplicants")}{seminar.max_participant}{t("seminars.people")}</Title>
              <div className='row'>
                {seminar.icons.map((iconObj, iconIndex) => (
                  <Type key={iconIndex}>{iconObj.icon}</Type>
                ))}
              </div>
              <Seminar className="seminar-second" key={index} images={seminar.images} />
              <Link to={"/seminar/" + getSeminarUrl(seminar.url_to_go)}>
                <Button 
                  className="btn_seminar_detail" 
                  label={t("seminars.btn_detail")} 
                  id={getSeminarUrl(seminar.url_to_go)} 
                  icon={<RightCircleOutlined />}
                />
              </Link>
              
            </Content>
          </SeminarList>
        ))}
      </SeminarContent>
      <Pagination
        style={{marginBottom: '30px'}}
        current={currentPage}
        total={seminars.length}
        pageSize={itemsPerPage}
        onChange={(page) => setCurrentPage(page)}
      />
    </SeminarContainer>
  );
};

export default SeminarsList;
