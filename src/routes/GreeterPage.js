import React from "react";
import Greeter from "../Components/Greeter";
import { userData } from "../data/UserData";

const GreeterPage = () => {
  return (
    <div>
      {userData && userData.map(user => <Greeter key={user.id} user={user} />)}
    </div>
  );
};

export default GreeterPage;
