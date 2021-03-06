import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import FirstMenu from './first/firstMenu';
import SecondMenu from './secondMenu/secondMenu';
import {FifthMenu} from './fifth/fifthMenu';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;


export default class Antd extends Component {
    state = {
        collapsed: false,
        menuVal: '2'
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }
    showKey = (e) =>{
        console.log(e.key);
        this.setState ({
            menuVal : e.key
        });
    }
    render() {
        let contentMenu;
        const secondProps = {
            a:1,
            b:2,
        }
        if(this.state.menuVal == 1){
            contentMenu = <FirstMenu/>;
        }else if(this.state.menuVal == 2){
            contentMenu = <SecondMenu a={this.state.menuVal} b="b"/>;
        }else if(this.state.menuVal == 9){
            contentMenu = <FifthMenu/>;
        }
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline"
                          onClick={this.showKey}>
                        <Menu.Item key="1">
                            <Icon type="pie-chart" />
                            <span>antd demo</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="desktop" />
                            <span>Option 2</span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="user" /><span>User</span></span>}
                        >
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={<span><Icon type="team" /><span>Team</span></span>}
                        >
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9">
                            <Icon type="file" />
                            <span>File</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 300 }}>
                            {contentMenu}
                        </div>
                        <div style={{ padding: 24, background: '#fff', minHeight: 600 ,marginTop:10 }}>

                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>

                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

