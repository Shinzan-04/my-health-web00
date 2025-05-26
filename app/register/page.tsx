"use client";

import { useState } from "react";
import "./register.css";

export default function RegisterPage() {
  const [fullname, setFullname] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullname || !contact || !password || !confirmPassword) {
      setError("Vui lòng nhập đầy đủ thông tin");
      return;
    }
    if (password !== confirmPassword) {
      setError("Mật khẩu xác nhận không khớp");
      return;
    }
    setError("");
    alert(`Đăng ký thành công cho: ${fullname}`);
  };

  return (
    <div className="fullscreen-container">
      <div className="background-shadow">
        <div className="logo"></div>
        <div className="heading-2-ng-k-t-i-kho-n">Đăng ký tài khoản</div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input">
            <div className="container">
              <input
                type="text"
                id="fullname"
                name="fullname"
                required
                placeholder="Nhập họ và tên"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>
          </div>
          <div className="input2">
            <div className="container">
              <input
                type="text"
                id="contact"
                name="contact"
                required
                placeholder="Nhập email hoặc số điện thoại"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
          </div>
          <div className="input3">
            <div className="container">
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="Nhập mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="input4">
            <div className="container">
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                required
                placeholder="Xác nhận lại mật khẩu"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="button">
            <button type="submit" className="ng-k">
              Đăng ký
            </button>
          </div>
          {error && (
            <div className="loi">{error}</div>
          )}
        </form>
        <div className="div">🔒</div>
        <div className="th-ng-tin-c-a-b-n-c-b-o-m-t-tuy-t-i">
          Thông tin của bạn được bảo mật tuyệt đối
        </div>
      </div>
    </div>
  );
}