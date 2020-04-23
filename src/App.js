import { Layout, Menu, Breadcrumb, Input} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {PieChartOutlined,} from '@ant-design/icons';
import React from 'react';
import './App.css';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Search } = Input;

class App extends React.Component {
  render() {
    return (
      <Layout>
        {/*================== PHẦN HEADER===================== */}
        <Header className="header">
          <div className="logo"/>
          
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Search 
            placeholder="input search text" 
            onSearch={value => console.log(value)} 
            style={{ width: 1000 , paddingTop:15, paddingLeft:25 }}
            enterButton />
          </Menu>
        </Header>

        {/* ================PHẦN MENU TRÁI====================== */}
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              {/* TỔNG QUAN */}
              <Menu.Item>
                <PieChartOutlined/>
                <span> Overview </span>
              </Menu.Item>
                     
              {/* ĐƠN HÀNG */}
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <UserOutlined />
              Orders
            </span>
                }
              >
                <Menu.Item key="1">All Orders</Menu.Item>
                <Menu.Item key="2">Abandoned Checkout</Menu.Item>
              </SubMenu>

              {/* SHIPMENT */}
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <LaptopOutlined />
              Shipments
            </span>
                }
              >
                <Menu.Item key="3">Overview</Menu.Item>
                <Menu.Item key="4">Shipments</Menu.Item>
                <Menu.Item key="5">COD</Menu.Item>
              </SubMenu>

              {/* Products */}             
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <NotificationOutlined />
              Products
            </span>
                }
              >
                <Menu.Item key="6">All Products</Menu.Item>
                <Menu.Item key="7">Category</Menu.Item>
                <Menu.Item key="8">Inventory</Menu.Item>
              </SubMenu>

              {/* Customer */}
              <Menu.Item>
                <PieChartOutlined/>
                <span> Customer </span>
              </Menu.Item>

            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 800,
              }}>
              Content
            </Content>

          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default App;

