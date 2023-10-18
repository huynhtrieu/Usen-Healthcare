import authEn from './en/auth.json';
import authJp from './jp/auth.json';
import commonEn from './en/common.json';
import commonJp from './jp/common.json';
import siderbarEn from './en/sidebar.json';
import siderbarJp from './jp/sidebar.json';
import listEn from './en/listseminar.json';
import listJp from './jp/listseminar.json';
import creatEn from './en/create.json';
import creatJp from './jp/create.json';


const resources = {
  en: {
    auth: authEn,
    common: commonEn,
    sidebar:siderbarEn,
    list:listEn,
    creat:creatEn,
  },

  jp: {
    auth: authJp,
    common: commonJp,
    sidebar:siderbarJp,
    list:listJp,
    creat:creatJp,

  },
};

export default resources;