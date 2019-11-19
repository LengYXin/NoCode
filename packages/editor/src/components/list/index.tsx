import React from 'react';
import { bindAll } from 'lodash-decorators';
import styles from './style.module.less';
import Drag from 'components/drop/drag';
import Source from 'components/drop/source';
import { List, Menu, Icon, Drawer } from 'antd';
import { EnumComponentsTypes } from 'enums';
import { TemplateEntities } from 'entities/template';
import { observer, inject } from 'mobx-react';
export interface IAppProps {
}
@bindAll()

export default class App extends React.Component<IAppProps> {
    ref = React.createRef<HTMLDivElement>();
    state = {
        visible: false
    }
    onVisible(visible = !this.state.visible) {
        this.setState({ visible: visible })
    }
    public render() {
        return (
            <div className={styles.list} onMouseLeave={event => {
                this.onVisible(false)
            }}>
                <Drawer
                    title="Basic Drawer"
                    placement="left"
                    closable={false}
                    onClose={event => { this.onVisible(false) }}
                    visible={this.state.visible}
                    getContainer={false}
                    style={{ position: 'absolute' }}
                >
                    <div className={styles.content}>
                        <Drag model={{}} type={EnumComponentsTypes.Layout}>
                            <div>拖</div>
                        </Drag>
                        {/* <Source key={item.key} index={index} type={EnumComponentsTypes.LayoutSource} moveCard={this.moveCard}>
                            <Card title={item.key} extra={<a href="#">More</a>} style={{ width: '100%' }}>
                                <Drop
                                    type={EnumComponentsTypes.DataEntry}
                                // onDrop={this.props.TemplateExample.onPush}
                                >
                                    <div style={{ height: 50 }}>

                                    </div>
                                </Drop>
                            </Card>
                        </Source> */}
                        <Drag model={{}} type={EnumComponentsTypes.DataEntry}>
                            <div>Swap me around</div>
                        </Drag>
                    </div>
                </Drawer>
                {/* <div>
                    测试
                </div> */}
                <Menu
                    mode="inline"
                >
                    <Menu.Item key="1"
                        onMouseEnter={event => {
                            this.onVisible(true)
                        }}
                    >
                        <Icon type="pie-chart" />
                        <span>Option 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop" />
                        <span>Option 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="inbox" />
                        <span>Option 3</span>
                    </Menu.Item>
                </Menu>

            </div>
        );
    }
}
