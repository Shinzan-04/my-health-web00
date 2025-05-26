"use client";

import { useState } from "react";
import Link from "next/link";
import "./login.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !role) {
      setError("Vui lòng nhập đầy đủ thông tin");
      return;
    }
    setError("");
    alert(`Đăng nhập với: ${email}, role: ${role}`);
  };

  return (
    <div className="fullscreen-container">
      <div className="background-shadow">
        <div className="logo"></div>
        <div className="heading-2-dang-nhap">Đăng nhập</div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input">
            <div className="container">
              <input
                type="text"
                id="email"
                name="email"
                required
                placeholder="Email hoặc số điện thoại"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="input2">
            <div className="container">
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="input3">
            <div className="container">
              <select
                className="chon-vai-tro"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="" disabled>
                  Chọn vai trò
                </option>
                <option value="user">Người dùng</option>
                <option value="admin">Quản trị viên</option>
              </select>
            </div>
          </div>
          <div className="button">
            <button type="submit" className="nut-dang-nhap">
              Đăng nhập
            </button>
          </div>
          {error && <div className="loi">{error}</div>}
        </form>
        <div className="icon-lock">🔒</div>
        <div className="bao-mat-thong-tin">
          Thông tin đăng nhập của bạn được bảo mật
        </div>
        <div className="goi-y">
          <span className="text-sm">
            Chưa có tài khoản?{" "}
            <Link href="/register" className="text-blue-600 hover:underline font-medium">
              Đăng ký ngay
            </Link>
          </span>
          <br />
          <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
            Quên mật khẩu?
          </Link>
        </div>
      </div>
    </div>
  );
}