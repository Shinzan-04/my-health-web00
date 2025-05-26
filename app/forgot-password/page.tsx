"use client";

import { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [contact, setContact] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contact) {
      setError("Vui lòng nhập số điện thoại hoặc email");
      setSuccess("");
      return;
    }
    setError("");
    setSuccess("Yêu cầu lấy lại mật khẩu đã được gửi. Vui lòng kiểm tra email hoặc điện thoại!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white shadow-xl rounded-xl px-8 py-10 w-full max-w-md relative">
        <div className="flex flex-col items-center mb-6">
          <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl mb-2 shadow">
            <span>🔑</span>
          </div>
          <h2 className="text-2xl font-bold text-blue-700 mb-1">Quên mật khẩu</h2>
          <div className="text-gray-500 text-sm mb-2">Nhập số điện thoại hoặc email để lấy lại mật khẩu</div>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="contact"
              name="contact"
              required
              placeholder="Số điện thoại hoặc Email"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Gửi yêu cầu
          </button>
          {error && <div className="text-red-600 text-center text-sm">{error}</div>}
          {success && <div className="text-green-600 text-center text-sm">{success}</div>}
        </form>
        <div className="mt-6 flex flex-col items-center gap-2">
          <Link href="/login" className="text-blue-600 hover:underline text-sm font-medium">
            Quay lại đăng nhập
          </Link>
        </div>
      </div>
    </div>
  );
}