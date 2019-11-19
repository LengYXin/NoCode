import { Icon, Layout, Menu } from 'antd';
import React from 'react';
import List from "components/list"
import Edit from "components/edit"
import Nav from "components/nav"
import Attribute from "components/attribute"
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Provider } from 'mobx-react';
import entities from 'entities/index';
import './index.less'
const { Header, Content, Footer, Sider } = Layout;
console.log("TCL: entities", entities)
export default () => (

    <Provider {...entities} >
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
    </Provider>
)