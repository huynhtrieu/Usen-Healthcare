import authEn from './en/auth.json';
import authJp from './jp/auth.json';
import commonEn from './en/common.json';
import commonJp from './jp/common.json';
import seminarsEn from './en/seminars.json';
import seminarsJp from './jp/seminars.json';

const resources = {
  en: {
    auth: authEn,
    common: commonEn,
    seminars: seminarsEn
    
  },

  jp: {
    auth: authJp,
    common: commonJp,
    seminars: seminarsJp
  },
};

export default resources;