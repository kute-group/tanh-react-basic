import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>đây là trang chủ</h1>
      <Link to="/about">about</Link>
    </div>
  );
}

export default Home;
