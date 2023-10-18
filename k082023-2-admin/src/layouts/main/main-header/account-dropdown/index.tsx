import { Dropdown, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from './index.module.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Language from "../../../../components/languages";

export function AccountDropdown() {
  const navigate = useNavigate();
  const username = '山田 太郎';

  const _logout = () => {
    Cookies.remove('access_token');

    navigate('/login');
  };

  const menu = (
    <Menu>
      <Menu.Divider key="1" />
      <Menu.Item onClick={_logout} key="2">
        Logout
      </Menu.Item>
      <Language />

    </Menu>
  );

  return (
    <>
      <Dropdown overlay={menu} trigger={['hover']}>
        <span className={`${styles.action} ${styles.account}`}>
          <UserOutlined style={{ fontSize: '20px', color: '#ffffff' }} />
          <span className={styles.anticon}>{username}</span>
        </span>
      </Dropdown>
    </>
  );
}
