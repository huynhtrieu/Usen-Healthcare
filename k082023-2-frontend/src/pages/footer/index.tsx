import { Row, Col, Collapse  } from 'antd';
import styled from 'styled-components';
import { RightOutlined, DownOutlined  } from '@ant-design/icons';
import { Colors } from "@/themes";

const FooterApp = styled.div`
  background-color: ${Colors.GRAY1};
  :where(.css-dev-only-do-not-override-byeoj0).ant-divider-horizontal {
    margin: 0px 0;
  }
  overflow: hidden;

`;

const FooterContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  @media (max-width: 1000px) {
    display: none;
    padding-left: 20px;
  }
  @media (min-width: 1000px) {
    padding: 20px 0 0 20px;
  }
`;

const FooterContainerSp = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: ${Colors.GRAY1};
  padding-left: 20px;
  
  @media (min-width: 1000px) {
    display: none;
  }

  :where(.css-dev-only-do-not-override-byeoj0).ant-collapse {
    background-color: ${Colors.GRAY1};
    box-sizing: border-box;
    width: 96%;
    margin: 0px;
    padding: 0;
    font-size: 14px;
    list-style: none;
    border: 0px;
    border-radius: 0px;
  }
  :where(.css-dev-only-do-not-override-byeoj0).ant-collapse .ant-collapse-content>.ant-collapse-content-box {
    padding: 16px 16px;
    background-color: ${Colors.GRAY1};
  }
`;

const StyledCollapse = styled(Collapse)`
  & .ant-collapse-item {
    border: none;
    // padding-right: 20px;
  }
  & .ant-collapse-header {
    background: transparent;
    color: #333;
  }
  & .ant-collapse-content {
    border: 0;
  }
  & .ant-collapse-content-box {
    padding: 0;
  }
`;

const FooterTitle = styled.h4`
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 16px;
`;

const FooterItem = styled.div`
  margin-bottom: 20px;
  font-size: 15px;
`;

const IconOutlined = styled(RightOutlined)`
    margin-right: 10px;
    font-size: 10px;
    color: #707070;
`;

const Copyright = styled.div`
    background-color: ${Colors.BLACK};
    height: 47px;
    h3{
        color:  ${Colors.WHITE};
        font-size: 11px;
        text-align: center;
        padding-top: 18px;
    }
`;

interface FooterItem1 {
    title: string;
    items: string[];
  }
const footerItems: FooterItem1[] = [
    { title: 'お問い合わせ', items: ['よくある質問（準備中）', 'ご相談・お問合せ'] },
    { title: 'USEN Healthcareについて', items: ['会社概要', '利用規約・会員規約', '情報セキュリティ方針', '個人情報保護方針', '個人情報の取り扱いについて', 'お知らせ・ニュース', '採用情報'] },
    { title: '業種別サービス一覧', items: ['医科向け', '薬科向け', '歯科向け'] },
    { title: '商品カテゴリー別', items: ['ホームページ制作サービス', '診療予約システム', 'オンライン資格確認', '電子カルテ', 'オンライン診療', '会計業務', 'Wi-Fi', '通信回線', 'BGM', '感染症対策', '防犯対策', 'コスト削減'] },
  ];

const { Panel } = Collapse;

const customExpandIcon = (props: any) => {
    if (props.isActive) {
      return <DownOutlined rotate={180} />;
    }
    return <DownOutlined />;
  };

const AppFooter = () => {
  return (
    <FooterApp >
      <FooterContainerSp >
        <Row gutter={[16, 16]}>
          <StyledCollapse expandIcon={customExpandIcon} expandIconPosition="right">
            {footerItems.map((footerSection, sectionIndex) => (
              <Panel header={footerSection.title} key={sectionIndex}>
                {footerSection.items.map(item => (
                    <FooterItem key={item}>
                    <IconOutlined />
                      {item}
                    </FooterItem>
                ))}
              </Panel>
            ))}
          </StyledCollapse>
        </Row>
      </FooterContainerSp>

      <FooterContainer>
        <Row gutter={[16, 16]}>
            <Col span={4}>
            <FooterTitle>{footerItems[0].title}</FooterTitle>
                {footerItems[0].items.map((item) => (
                <FooterItem key={item}><IconOutlined />{item}</FooterItem>
                ))}
            </Col>

            <Col span={6}>
            <FooterTitle>{footerItems[1].title}</FooterTitle>
                {footerItems[1].items.map((item) => (
                <FooterItem key={item}><IconOutlined />{item}</FooterItem>
                ))}
            </Col>

            <Col span={5}>
            <FooterTitle>{footerItems[2].title}</FooterTitle>
                {footerItems[2].items.map((item) => (
                <FooterItem key={item}><IconOutlined/>{item}</FooterItem>
                ))}
            </Col>

            <Col span={9}>
            <FooterTitle>{footerItems[3].title}</FooterTitle>
            <Row gutter={[16, 16]}>
                <Col span={12}>
                {footerItems[3].items
                    .filter((_, index) => index < footerItems[3].items.length - 4)
                    .map((item) => (
                    <FooterItem key={item}><IconOutlined />{item}</FooterItem>
                    ))}
                </Col>
                <Col span={12}>
                {footerItems[3].items
                    .filter((_, index) => index >= footerItems[3].items.length - 4)
                    .map((item) => (
                    <FooterItem key={item}><IconOutlined />{item}</FooterItem>
                    ))}
                </Col>
            </Row>
            </Col>
        </Row>
        
      </FooterContainer>
      <Copyright>
            <h3>Copyright ©USEN Healthcare.Inc All Rights Reserved.</h3>
        </Copyright>
    </FooterApp>
  );
};

export default AppFooter;
