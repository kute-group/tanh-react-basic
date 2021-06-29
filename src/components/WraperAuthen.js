import { Layout, Menu, Breadcrumb } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "antd/dist/antd.css";

const { Header, Content, Footer, } = Layout;


function WraperAuthen(props) {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1"><Link to='/posts'>trang bai viet</Link></Menu.Item>
          <Menu.Item key="2"><Link to='/products'>trang san pham</Link></Menu.Item>
          <Menu.Item key="3"><Link to='/'>trang chu</Link></Menu.Item>
          <Menu.Item key="4"><Link to='/login'>Đăng Nhập</Link></Menu.Item>
        </Menu>
      </Header>
      <Content className="site-layout" style={{ padding:0 , marginTop: 64 }}>
        <div className="site-layout-background" style={{ padding: 0, minHeight: 380 }}>
          {props.children}
        </div>
      </Content>
    </Layout>
  );
}
export default WraperAuthen;