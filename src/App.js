import React from 'react';
import { ReviewsList } from './features/reviews/ReviewsList';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Layout } from 'antd';
import AppHeader from './conponents/Header'
import { Filter } from './features/reviews/Filter';
const { Content, Footer } = Layout;

function App() {
  
  return (
    <div className="App">
      <Router>
        <Layout className="layout">
          <AppHeader />
          <Filter/>
          <Content style={{ padding: '50px 50px' }}>
            <div className="site-layout-content">
              <Switch>
                <Route exact path="/" component={ReviewsList} />
                <Redirect to="/" />
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}></Footer>
        </Layout>
      </Router>

    </div>
  );
}

export default App;
