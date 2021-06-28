import { Layout, Menu, Breadcrumb } from 'antd';
import { Row, Col } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "antd/dist/antd.css";

const { Header, Content, Footer, } = Layout;


function AuthChoose() {
  return (
    <Row>
      <Col span={4}></Col>
      <Col span={4}></Col>
      <Col span={12}>
        <div>
          <p>hoặc</p>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/login">Đăng nhập</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/register">Đăng kí</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/forgotpw">Quên mật khẩu</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="">Tiếng Anh</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="">Tiếng Việt</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </Col>
      <Col span={4}></Col>
    </Row>
  );
}
export default AuthChoose;