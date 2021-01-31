import React from 'react';

import { Layout, Menu } from 'antd';

const { Header } = Layout;

function AppHeader() {
    

    return (
        <div>
    <Header>
    <div className="logo" ><h1> Foods Review!</h1></div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">Food list</Menu.Item>
        <Menu.Item key="2" disabled>Reviewers statistics</Menu.Item>
        <Menu.Item key="3" disabled>Food statistics</Menu.Item>
      </Menu>
    </Header>
        </div>
    );
}

export default AppHeader;
