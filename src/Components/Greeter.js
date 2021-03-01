import React from "react";
import "../Styles/Greeter.css";

const Greeter = ({ user }) => {
  return (
    <div className="greeter-root">{`Hello! ${user.name} 입니다. 직업은 ${user.job} 입니다.`}</div>
  );
};

export default Greeter;
