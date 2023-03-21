import './style.sass';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { Outlet } from 'react-router-dom';
import MyFooter from '../../components/footer/footer';
import MyHeader from '../../components/header/header';

export default function Root() {
  return (
    <Layout className="layout">
      <MyHeader data-testid="header" />
      <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }} data-testid="outlet">
          <Outlet />
        </div>
      </Content>
      <MyFooter />
    </Layout>
  );
}
