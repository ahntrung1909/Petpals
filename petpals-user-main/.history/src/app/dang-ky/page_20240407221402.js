"use client";
import React, { useEffect, useState } from "react";
import "./style.scss";
import { Checkbox } from "antd";
import Link from "next/link";
import { toast } from "react-toastify";

export default function page() {
  const [eye, setEye] = useState(false);
  const [eyeRepass, setEyeRepass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [rePasswordError, setRePasswordError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      let flag = true;
      const users = localStorage.getItem("users");
      users = JSON.parse(users);
      users.push({
        email: email,
        password: password,
      });
      console.log(users);
    }
  }, [loading, setLoading]);

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmailError(
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value)
        ? null
        : "** Vui lòng nhập đúng định dạng Email!"
    );

    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordError(
      /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/.test(
        e.target.value
      )
        ? null
        : "** Mật khẩu phải có ít nhất 8 ký tự, 1 chữ in hoa, 1 chũ số và 1 ký tự đặc biệt"
    );
    setPassword(e.target.value);
  };

  const handleRePasswordChange = (e) => {
    setRePasswordError(
      /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/.test(
        e.target.value
      )
        ? null
        : "** Mật khẩu phải có ít nhất 8 ký tự, 1 chữ in hoa, 1 chũ số và 1 ký tự đặc biệt"
    );
    setRePassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let flag = true;
    if (email === "") {
      setEmailError("** Không được bỏ trống!!");
      flag = false;
    }
    if (password === "") {
      setPasswordError("** Không được bỏ trống!!");
      flag = false;
    }
    if (rePassword === "") {
      setRePasswordError("** Không được bỏ trống!!");
      flag = false;
    }
    if (flag && email !== null && password !== null && rePassword !== null) {
      setLoading(true);
    }
  };

  return (
    <main>
      <div className="breadcrumb">
        <img src="/icon/ic_baseline-home.svg" alt="" />
        <img src="/icon/iconamoon_arrow-right-2.svg" alt="" />
        <p>Đăng ký</p>
      </div>
      <div className="wrapper">
        <div className="img">
          <div className="overlay"></div>
          <div className="content">
            <img src="/img/logo_am_ban.svg" alt="" />
            <h3>"CHỮA LÀNH TỪ TRÁI TIM"</h3>
          </div>
        </div>
        <div className="form-wrapper">
          <form className="form" onSubmit={handleSubmit}>
            <h1 className="form-heading">Đăng ký</h1>
            <div className="input-group">
              <label htmlFor="">Email:</label>
              <input
                type="text"
                placeholder="Nhập Email..."
                onChange={handleEmailChange}
                className={emailError ? "input-err" : ""}
              />
              <p className="error">{emailError}</p>
            </div>
            <div className="input-group">
              <label htmlFor="">Mật khẩu:</label>
              <div className="custom-eye">
                <input
                  type={eye ? "text" : "password"}
                  placeholder="Nhập mật khẩu..."
                  className={passwordError ? "input-err" : ""}
                  onChange={handlePasswordChange}
                />
                <img
                  src={eye ? `/icon/eye-btn-close.svg` : `/icon/eye-btn.svg`}
                  alt=""
                  onClick={() => {
                    setEye(!eye);
                  }}
                />
              </div>
              <p className="error">{passwordError}</p>
            </div>
            <div className="input-group">
              <label htmlFor="">Xác nhận lại mật khẩu:</label>
              <div className="custom-eye">
                <input
                  type={eyeRepass ? "text" : "password"}
                  placeholder="Nhập mật khẩu..."
                  className={rePasswordError ? "input-err" : ""}
                  onChange={handleRePasswordChange}
                />
                <img
                  src={
                    eyeRepass ? `/icon/eye-btn-close.svg` : `/icon/eye-btn.svg`
                  }
                  alt=""
                  onClick={() => {
                    setEye(!eyeRepass);
                  }}
                />
              </div>
              <p className="error">{rePasswordError}</p>
            </div>
            <div className="option-group">
              <Checkbox onChange={() => {}}>
                Đồng ý với các <Link href="/dieu-khoan">điều khoản</Link> của
                Petpals
              </Checkbox>
            </div>
            <button>
              {loading ? (
                <img src="/loading/rooling_loading.gif" alt="" />
              ) : (
                `ĐĂNG KÝ`
              )}
            </button>
          </form>
          <div className="other-line">
            <div className="line"></div>
            <p>hoặc</p>
            <div className="line"></div>
          </div>
          <div className="social-option">
            <img src="/icon/gg_ic.svg" alt="" />
            <img src="/icon/logos_facebook.svg" alt="" />
            <img src="/icon/formkit_twitter.svg" alt="" />
          </div>
          <div className="other-option-link">
            Bạn đã có tài khoản? <Link href="/dang-nhap">Đăng nhập</Link> ngay!
          </div>
        </div>
      </div>
    </main>
  );
}
