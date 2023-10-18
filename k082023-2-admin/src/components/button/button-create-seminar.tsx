import common from '../../translates/jp/common.json';
import style_cm from './button_seminar.module.css';

import { Button, Form } from 'antd';

function ButtonCreateSM() {
  return (
    <div>
      <div className={style_cm.formButton_sl}>
        <Form
          name="wrap"
          labelCol={{ flex: '155px' }}
          labelAlign="left"
          labelWrap
          wrapperCol={{ span: 15 }}
          colon={false}
          style={{ maxWidth: 900, margin: '28px 28px 31px 38px' }}
        >
          <div className={style_cm.button_seminar}>
            <div className={style_cm.button_left}>
              <Form.Item label="" className={style_cm.formButton}>
                <Button type="primary" htmlType="submit" className={style_cm.buttonStyle_left}>
                  <p>{common.Sl_bottom.Delete}</p>
                </Button>
              </Form.Item>
            </div>
            <div className={style_cm.button_right}>
              <div className={style_cm.button_row}>
                <Button type="primary" htmlType="submit" className={style_cm.buttonStyle}>
                 <p>{common.Sl_bottom.Download}</p> 
                </Button>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default ButtonCreateSM;
