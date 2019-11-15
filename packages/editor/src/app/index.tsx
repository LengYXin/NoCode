import { Icon, Layout, Menu } from 'antd';
import React from 'react';
import './index.less'
import List from "components/list"
import Edit from "components/edit"
import Nav from "components/nav"
import Attribute from "components/attribute"
const { Header, Content, Footer, Sider } = Layout;
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

export default () => (
    <Layout className='edit-wrapper'>
        <Layout>
            <Header>
                <Nav />
            </Header>
            <DndProvider backend={HTML5Backend}>
                <Layout>
                    <Sider collapsedWidth={40} collapsed className='edit-list'>
                        <List />
                    </Sider>
                    <Content >
                        <Edit />
                    </Content>
                </Layout>
            </DndProvider>
        </Layout>
        {/* <Sider width={280}>
            <Attribute />
        </Sider> */}
    </Layout>
)