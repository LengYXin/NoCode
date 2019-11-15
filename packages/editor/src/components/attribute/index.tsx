import React from 'react';
import styles from './style.module.less';
import { Tabs, Icon } from 'antd';
export interface IAppProps {
}
const { TabPane } = Tabs;


export default class App extends React.Component<IAppProps> {
    public render() {
        return (
            <div className={styles.attribute}>
                <Tabs defaultActiveKey="2">
                    <TabPane
                        tab={
                            <span>
                                <Icon type="apple" />
                                Tab 1
        </span>
                        }
                        key="1"
                    >
                        Tab 1
    </TabPane>
                    <TabPane
                        tab={
                            <span>
                                <Icon type="android" />
                                Tab 2
        </span>
                        }
                        key="2"
                    >
                        Tab 2
    </TabPane>
                </Tabs>
            </div>
        );
    }
}
