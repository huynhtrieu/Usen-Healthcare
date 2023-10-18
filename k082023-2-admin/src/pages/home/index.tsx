import {  useSelector } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/store";
// import { decrement, increment } from "@/store/count.slice";

import HomePageContainer from "./styled";
// import { Button } from "antd";
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const count = useSelector((state: RootState) => state.count.value);
  // const dispatch = useDispatch();
  const { t } = useTranslation('common');


  return (
    <HomePageContainer>
      <div className="content">
        <span>{t('count')}: {count}</span>
        <div className="button-box">
        </div>
      </div>
    </HomePageContainer>
  );
};

export default HomePage;
