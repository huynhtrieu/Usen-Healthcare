import { Layout } from 'antd';
import React from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import mainStyles from '../index.module.css';
import styles from './index.module.css';
import {AccountDropdown} from "@/layouts/main/main-header/account-dropdown";
// import Language from "../../../components/languages";

const { Header } = Layout;

interface HeaderProps {
    collapsed: boolean;
    toggle: () => void;
}

export function MainHeader(props: HeaderProps) {
    return (
        <Header
            className={`${mainStyles.siteLayoutBackground} ${styles.header}`}
            style={{ padding: 0 }}
        >
            {React.createElement(
                props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                    className: `${styles.trigger}`,
                    onClick: () => props.toggle()
                }
            )}
            <div className={styles.right}>
                <AccountDropdown />
            </div>
            {/* <Language /> */}
        </Header>
    );
}
