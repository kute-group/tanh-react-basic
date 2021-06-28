import WraperApp from 'components/WraperApp';
import { Table, Tag, Space } from 'antd';
import productImg from 'assets/images/testjpg.jpg';
import { Row, Col } from 'antd';
import { PlusOutlined } from "@ant-design/icons"
import { Button, Tooltip } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const { Column } = Table;
const data = [
  {
    key: '1',
    image: { productImg },
    title: '10 cách dạy toán cho trẻ mẫu giáo học mà như chơi',
    email: "Administrator",
    categories: 'Kiến Thức',
    date: "18-03-2021"
  },
  {
    key: '2',
    image: { productImg },
    title: "Chuyên gia giáo dục: Bé sẽ không còn sợ học toán nếu mẹ áp dụng",
    email: "Administrator",
    categories: 'Kiến Thức',
    date: "18-03-2021"
  },
  {
    key: '3',
    image: { productImg },
    title: '10 cách đơn giản dạy con học Toán để chuẩn bị vào lớp 1',
    email: "Administrator",
    categories: 'Kiến Thức',
    date: "18-03-2021"
  },
  {
    key: '4',
    image: { productImg },
    title: 'Thay đổi những thủ thuật thú vị 22222',
    email: "Administrator",
    categories: 'Kiến Thức',
    date: "18-03-2021"
  },
  {
    key: '5',
    image: { productImg },
    title: 'Sử dụng các vật dụng thường gặp hàng ngày như một công cụ hỗ trợ ',
    email: "Administrator",
    categories: 'Kiến Thức',
    date: "18-03-2021"
  },

];
function ListPosts() {
  return (
    <WraperApp>
      <Row>
        <Col lg={20}></Col>
        <Col lg={4}>
          <Link to="/post/add"><Button type="primary" shape="round" icon={<PlusOutlined />}>
            Thêm mới bài viết
          </Button></Link>
        </Col>
      </Row>
      <Table dataSource={data}>
        <Column title="Hình Ảnh" dataIndex="image" key="image" />
        <Column title="Tiêu đề" dataIndex="title" key="title" />
        <Column title="Tác giả" dataIndex="email" key="email" />
        <Column title="Danh mục" dataIndex="categories" key="categories" />
        <Column title="Ngày tạo" dataIndex="date" key="date" />
      </Table>
    </WraperApp>
  );
}
export default ListPosts;