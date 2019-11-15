import React from 'react';
import { bindAll } from 'lodash-decorators';
import styles from './style.module.less';
import Drag from 'components/drop/drag';
import { List, Menu, Icon, Drawer } from 'antd';
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
                    <div ref={this.ref}>
                        <Drag model={{}} type="readyTags">
                            <div>拖</div>
                        </Drag>
                        <Drag model={{}} type="readyTags">
                            <div>Swap me around</div>

                        </Drag>
                        <Drag model={{}} type="sourceTags">
                            <div>Swap her around</div>

                        </Drag>
                        <Drag model={{}} type="sourceTags">
                            <div>Swap him around</div>
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
