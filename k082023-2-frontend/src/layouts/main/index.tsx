import Header from '@/pages/header';
import AppFooter from '@/pages/footer';
import { ContentWrapper, MainLayoutContainer } from './styled';

const MainLayout = (props: any) => {
  return(
    <MainLayoutContainer>
      <Header />
      <ContentWrapper>
        {props.children}
      </ContentWrapper>
      <AppFooter/>
    </MainLayoutContainer>
  );
};

export default MainLayout;