import React from 'react';
import styles from './style.module.less';
import { Menu, Icon } from 'antd';
export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
    public render() {
        return (
            <div className={styles.nav}>
                <Menu
                    mode="horizontal"
                >
                    <Menu.Item key="1">
                        <Icon type="pie-chart" />
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop" />
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="inbox" />
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}
