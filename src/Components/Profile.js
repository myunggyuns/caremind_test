import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearInputValue,
  enterEmail,
  enterPassword,
} from "../redux/action/UserAction";
import { getUser } from "../redux/action/UserAPIAction";
import "../Styles/Profile.css";

const Profile = () => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.userSignin.email);
  const password = useSelector(state => state.userSignin.password);
  const name = useSelector(state => state.userSignin.name);
  const [JWT_KEY, setJWT_KEY] = useState("");

  useEffect(() => {
    if (localStorage.getItem("JWT_KEY")) {
      setJWT_KEY(localStorage.getItem("JWT_KEY"));
    }
  }, [JWT_KEY]);

  const onClickLogoutBtn = e => {
    localStorage.setItem("JWT_KEY", "");
    setJWT_KEY("");
    dispatch(clearInputValue());
  };

  const onSubmit = async e => {
    e.preventDefault();
    try {
      fetch("http://localhost:8000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      })
        .then(res => {
          if (res.status === 200) {
            return res.json();
          } else {
            let ok = alert("fail to sign in");
            if (!ok) {
              dispatch(clearInputValue());
            }
            return;
          }
        })
        .then(data => {
          if (data) {
            dispatch(getUser(data));
            setJWT_KEY(data.JWT_KEY);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeEmail = e => {
    const {
      target: { value },
    } = e;

    dispatch(enterEmail(value));
  };

  const onChangePassword = e => {
    const {
      target: { value },
    } = e;

    dispatch(enterPassword(value));
  };

  return (
    <>
      {JWT_KEY ? (
        <div className="form-root text">
          <h1>{`Succed Signin. 환영합니다. ${name} 님`}</h1>
          <button onClick={onClickLogoutBtn}>LogOut</button>
        </div>
      ) : (
        <>
          <form className="form-root" onSubmit={onSubmit}>
            <div className="input-box">
              <div className="input-email-box">
                <div className="input-email-title">email</div>
                <input
                  className="input-email"
                  type="text"
                  placeholder="이메일을 입력하세요"
                  value={email}
                  onChange={onChangeEmail}
                />
              </div>
              <div className="input-password-box">
                <div className="input-password-title">password</div>
                <input
                  className="input-password"
                  type="password"
                  placeholder="패스워드를 입력하세요"
                  value={password}
                  onChange={onChangePassword}
                />
              </div>
              <div className="input-submit-box">
                <input className="submit-btn" type="submit" value="Sign in" />
              </div>
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default Profile;
