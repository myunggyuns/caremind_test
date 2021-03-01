import React from "react";
import "../Styles/Home.css";

const Home = () => {
  return (
    <div className="home-root">
      <h1>코딩 Test</h1>
      <ul>
        <li>
          <h3>
            햄버거 버튼안에 각 과제 링크 걸어 두었으며, 반응형 웹으로
            구현했습니다.(breakPoint는 480px 입니다.)
          </h3>
        </li>
        <li>
          1-1 다이나믹 Text 변화 <span>OK</span>
        </li>
        <li>
          2-1 Greeter 상속 값 render <span>OK</span>
        </li>
        <li>
          2-2 PieChart 구현 .with server data <span>OK</span>
        </li>
        <li>
          2-3 redux Session Login <span>OK</span>
        </li>
        <li className="explain-web">
          npm start: react web open / npm run server: server open
        </li>
        <li>login test email: 11@11.com / password: 12341234</li>
        <li>
          <h3>확인 부탁 드립니다.</h3>
        </li>
      </ul>
    </div>
  );
};

export default Home;
