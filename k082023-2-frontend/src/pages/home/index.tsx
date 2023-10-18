

import Title from "@/components/Title";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "@ant-design/react-slick";

import { CampaignContainer, CampaignH3, Child, Child1, ChildDiv, ContentDiv, ImageDiv, ImageDiv1, ImageDiv2, ImageDivWrapper, ParentContainer, ParentDiv, SeminarContainer, SeminarContent, SmallDiv, Styled3, StyledH3, StyledIcon, StyledIcon1, StyledImage, Wrapper } from "./styled";

import WhiteIcon1 from '../../assets/images/img/Image_Icon/WhiteIcon/1.svg';
import WhiteIcon2 from '../../assets/images/img/Image_Icon/WhiteIcon/2.svg';
import WhiteIcon3 from '../../assets/images/img/Image_Icon/WhiteIcon/3.svg';
import WhiteIcon4 from '../../assets/images/img/Image_Icon/WhiteIcon/4.svg';
import WhiteIcon5 from '../../assets/images/img/Image_Icon/WhiteIcon/5.svg';
import WhiteIcon6 from '../../assets/images/img/Image_Icon/WhiteIcon/6.svg';
import WhiteIcon7 from '../../assets/images/img/Image_Icon/WhiteIcon/7.svg';
import WhiteIcon8 from '../../assets/images/img/Image_Icon/WhiteIcon/8.svg';
import WhiteIcon9 from '../../assets/images/img/Image_Icon/WhiteIcon/9.svg';
import WhiteIcon10 from '../../assets/images/img/Image_Icon/WhiteIcon/10.svg';
import WhiteIcon11 from '../../assets/images/img/Image_Icon/WhiteIcon/11.svg';
import WhiteIcon12 from '../../assets/images/img/Image_Icon/WhiteIcon/12.svg';
import WhiteIcon13 from '../../assets/images/img/Image_Icon/WhiteIcon/13.svg';

import BlackIcon2 from '../../assets/images/img/Image_Icon/BlackIcon/2.svg';

import ImageInfection from '../../assets/images/img/category-top/Infection.jpg';
import ImageVideo from '../../assets/images/img/product-category/main1.jpg';

import ImageSlide1 from '../../assets/images/img/top/slider01-pc.jpg';
import ImageSlide2 from '../../assets/images/img/top/slider02-pc.jpg';
import ImageSlide3 from '../../assets/images/img/top/slider03-pc.jpg';

import campaignImg1 from '../../assets/images/img/top/Campaign01.jpg';
import campaignImg2 from '../../assets/images/img/top/Campaign02.jpg';
import campaignImg3 from '../../assets/images/img/top/Campaign03.jpg';

import campaignIcon1 from '../../assets/images/img/Image_Icon/BlackIcon/3.svg';
import campaignIcon2 from '../../assets/images/img/Image_Icon/BlackIcon/4.svg';


import { SampleNextArrow, SamplePrevArrow } from "./Arrow";
import { SliderNextArrow, SliderPrevArrow } from "./SliderMain";

const HomePage = () => {
  const icons = [
    WhiteIcon1, WhiteIcon2, WhiteIcon3, WhiteIcon4, WhiteIcon5,
    WhiteIcon6, WhiteIcon7, WhiteIcon8, WhiteIcon9, WhiteIcon10,
    WhiteIcon11, WhiteIcon12, WhiteIcon13
  ];
  
  const colors = [
    '#5A71E0', '#5B91E0', '#3AAADE', '#27C0DC', '#19AA9F', 
    '#5B91E0', '#3AAADE', '#27C0DC', '#19AA9F', '#18AA69', 
    '#3AAADE', '#27C0DC', '#19AA9F'
  ];

  const titles  = [
    'ホームページ制作 サービス', '診療予約システム', 'オンライン資格確認', '電子カルテ', 'オンライン診療', 
    'キャッシュレス決済', '会計業務', 'Wi-Fi', '通信回線', 'BGM', 
    '感染症対策', '防犯対策', 'コスト削減'
  ];
  
  const paragraphs  = [
    'Web site', 'Reservation system', 'Health insurance card confirmation', 
    'Electronic medical record', 'Online medical care', 
    'Cashless payment', 'Accounting business', 'Wi-Fi', 'optical line', 'Background music', 
    'Infection', 'Crime prevention', 'Cost'
  ];

  const h3Titles = ["医科向け開業支援パッケージ", "Covid19対策　クリニック・施設環境整備セット", "ドクターズ　事業・経営支援パック"];

  const newSlideSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SliderNextArrow />,
    prevArrow: <SliderPrevArrow />,
};



  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slideWidth: '410px',
    centerMode: true, 
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0',
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <SeminarContainer>
      <div>
        <Slider {...newSlideSettings}>
            <div>
                <img src={ImageSlide1} alt="Image 1" style={{ width: '1280px', height: '513px' }} />
            </div>
            <div>
                <img src={ImageSlide2} alt="Image 2" style={{ width: '1280px', height: '513px' }} />
            </div>
            <div>
                <img src={ImageSlide3} alt="Image 3" style={{ width: '1280px', height: '513px' }} />
            </div>
        </Slider>
      </div>

      <div>
        <div>
          <Title className="top_title1_30">キャンペーン中の商材<span>Campaign products</span></Title>
        </div>
        <CampaignContainer>
          <ImageDiv1>
            <img src={campaignImg1} alt="Description" />
          </ImageDiv1>
          <ContentDiv>
            <div>
              <Title className="campaign_24">キャンペーンA 電子カルテ：初期費用無料！</Title>
              <Title className="campaign_16">クラウド型電子カルテ、予約システム、そしてクラウドを支える。</Title>
              <Title className="campaign_b16">対象商材</Title>
            </div>
            <SmallDiv>
              <Child1>
                <StyledIcon1 src={campaignIcon1} alt="Icon" />
                <CampaignH3>電子カルテ</CampaignH3>
              </Child1>
            </SmallDiv>
          </ContentDiv>
        </CampaignContainer>
        <CampaignContainer>
          <ImageDiv1>
            <img src={campaignImg2} alt="Description" />
          </ImageDiv1>
          <ContentDiv>
            <div>
              <Title className="campaign_24">キャンペーンB クラウドに切り替えでお得！</Title>
              <Title className="campaign_16">クラウド型電子カルテ、予約システム、そしてクラウドを支えるwifi回線導入をご支援。</Title>
              <Title className="campaign_b16">対象商材</Title>
            </div>
            <SmallDiv>
              <Child1>
                <StyledIcon1 src={campaignIcon1} alt="Icon" />
                <CampaignH3>電子カルテ</CampaignH3>
              </Child1>
              <Child1>
                <StyledIcon1 src={campaignIcon2} alt="Icon" />
                <CampaignH3>オンライン診療</CampaignH3>
              </Child1>
            </SmallDiv>
          </ContentDiv>
        </CampaignContainer>
        <CampaignContainer>
          <ImageDiv1>
            <img src={campaignImg3} alt="Description" />
          </ImageDiv1>
          <ContentDiv>
            <div>
              <Title className="campaign_24">キャンペーンX［医科向け］開業支援</Title>
              <Title className="campaign_16">医科クリニック開業のドクター支援。スタート時に必要になる機器類をオールインワンでお届け</Title>
              <Title className="campaign_b16">対象商材</Title>
            </div>
            <SmallDiv>
              <Child1>
                <StyledIcon1 src={campaignIcon1} alt="Icon" />
                <CampaignH3>医科向け開業支援パッケージ</CampaignH3>
              </Child1>
            </SmallDiv>
          </ContentDiv>
        </CampaignContainer>
      </div>

      <div>
        <div>
          <Title className="top_title1_30">取り扱い商材カテゴリー<span>Product category</span></Title>
        </div>
        <SeminarContent>
          <Wrapper>
            {Array.from({ length: 13 }).map((_, idx) => (
              <ChildDiv key={idx} color={colors[idx]}>
                <h2>{titles[idx]}</h2>
                <p>{paragraphs[idx]}</p>
                <img src={icons[idx]} alt={`Icon ${idx + 1}`} />
              </ChildDiv>
            ))}
          </Wrapper>

        </SeminarContent>
      </div>

      <div>
        <div>
          <Title className="top_title1_30">便利！必要なものが揃うセット商材<span>Package products</span></Title>
        </div>
        <SeminarContent>
          <ParentDiv>
            {Array.from({ length: 3 }).map((_, idx) => (
              <Child key={idx}>
                <StyledIcon src={BlackIcon2} alt="Icon" />
                <StyledH3>{h3Titles[idx]}</StyledH3>
              </Child>
            ))}
          </ParentDiv>
        </SeminarContent>
      </div>

      <div>
        <div>
          <Title className="notice_title1_30">お知らせ</Title>
        </div>
          <div>
            <Title className="notice_date">2021.07.06</Title>
            <Title className="notice_title">お知らせタイトルが入ります。</Title>
          </div>
          <div>
            <Title className="notice_date">2021.07.06</Title>
            <Title className="notice_title">お知らせタイトルが入ります。</Title>
          </div>
          <div>
            <Title className="notice_date">2021.07.06</Title>
            <Title className="notice_title">お知らせタイトルが入ります。</Title>
          </div>
      </div>

      <div>
        <div>
          <Title className="top_title1_30">開業・経営セミナー<span>Seminar</span></Title>
        </div>
        <SeminarContent>
          <ParentContainer as={Slider} {...settings}>
            {Array.from({ length: 3 }).map((_, idx) => (
              <ImageDivWrapper key={idx}>
                <ImageDiv>
                  <StyledImage src={ImageInfection} alt={`Shared Image ${idx + 1}`} />
                  <Title className="seminar_date">2021.07.06</Title>
                  <StyledH3>第1回経営者＆医療従事者向け WEBセミナー開催のお知らせ {idx + 1}</StyledH3>
                </ImageDiv>
              </ImageDivWrapper>
            ))}
          </ParentContainer>
        </SeminarContent>
      </div>

      <div>
        <div>
          <Title className="top_title1_30">セミナーアーカイブ<span>Archive</span></Title>
        </div>
        <SeminarContent>
          <ParentContainer as={Slider} {...settings}>
            {Array.from({ length: 3 }).map((_, idx) => (
              <ImageDivWrapper key={idx}>
                <ImageDiv2>
                  <StyledImage src={ImageVideo} alt={`Shared Image ${idx + 1}`} />
                  <Styled3>第８回 経営者＆医療従事者向け WEBセミナーアーカイブ動画{idx + 1}</Styled3>
                  <Title className="archive_text">説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。</Title>
                </ImageDiv2>
              </ImageDivWrapper>
            ))}
          </ParentContainer>
        </SeminarContent>
      </div>
    </SeminarContainer>
    
  );
};

export default HomePage;
