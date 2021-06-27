import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function About() {
  return (
    <div>
      <h1>đây là trang chi tiết</h1>
      <Link to="/">trang chủ</Link>
    </div>
  );
}

export default About;
