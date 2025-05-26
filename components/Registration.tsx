"use client";

import { useState } from "react";
import "../app/registrations/registrations.css";

export default function RegistrationPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    gender: "",
    phone: "",
    address: "",
    doctor: "",
    specialty: "",
    date: "",
    session: "",
    symptom: "",
    mode: "",
    note: "", // Thêm trường ghi chú
  });
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.date || !form.doctor) {
      setSuccess("Vui lòng điền đầy đủ thông tin bắt buộc");
      return;
    }
    setSuccess("Đăng ký khám thành công!");
    // TODO: Gửi dữ liệu lên server
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">
        {/* LEFT: Lưu ý */}
        <div className="bg-blue-600 text-white p-4 rounded-2xl shadow-lg h-fit flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold mb-4 text-center">Lưu ý :</h2>
          <ul className="space-y-4 text-sm leading-relaxed list-disc list-inside text-center">
            <li>Lịch hẹn có hiệu lực sau khi có xác nhận chính thức.</li>
            <li>
              Quý khách vui lòng cung cấp thông tin chính xác để được phục vụ tốt nhất. Nếu không có email & điện thoại hợp lệ, việc xác nhận sẽ không hiệu lực.
            </li>
            <li>
              Quý khách nên đặt lịch trước ít nhất 24 giờ trước khi đến khám.
            </li>
            <li>
              Nếu có triệu chứng nguy hiểm, hãy ĐẾN TRỰC TIẾP cơ sở y tế gần nhất để được xử lý kịp thời.
            </li>
          </ul>
        </div>

        {/* RIGHT: Form */}
        <div className="bg-white p-4 rounded-2xl shadow-lg relative flex flex-col items-center">
          <button
            className="absolute top-4 right-4 text-xl text-gray-500 hover:text-red-600 font-bold"
            aria-label="Đóng"
            onClick={() => window.history.back()}
          >
            ×
          </button>

          <h1 className="text-2xl font-bold text-center mb-2 w-full">ĐĂNG KÝ KHÁM</h1>
          <p className="text-center text-gray-600 text-sm mb-6 w-full">
            Vui lòng điền thông tin vào form bên dưới để đặt lịch khám bệnh theo yêu cầu
          </p>

          {success && (
            <p className="text-center text-green-600 font-medium mb-4 w-full">
              {success}
            </p>
          )}

          <form
            onSubmit={handleSubmit}
            className="form-grid justify-items-center"
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Họ và tên"
              className="form-input"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="form-input"
            />

            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="form-input"
            >
              <option value="">Giới tính</option>
              <option value="male">Nam</option>
              <option value="female">Nữ</option>
              <option value="other">Khác</option>
            </select>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Số điện thoại"
              className="form-input"
              required
            />

            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Địa chỉ"
              className="form-input"
            />
            <select
              name="doctor"
              value={form.doctor}
              onChange={handleChange}
              className="form-input"
              required
            >
              <option value="">Bác sĩ</option>
              <option value="dr-thanh">BS. Nguyễn Văn Thanh</option>
              <option value="dr-linh">BS. Trần Thị Linh</option>
              <option value="dr-hoang">BS. Hoàng Văn Hòa</option>
            </select>

            <input
              type="text"
              name="specialty"
              value={form.specialty}
              onChange={handleChange}
              placeholder="Chuyên khoa"
              className="form-input"
            />
            <select
              name="mode"
              value={form.mode}
              onChange={handleChange}
              className="form-input"
            >
              <option value="">Online/Offline</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>

            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="form-input"
              required
            />
            <select
              name="session"
              value={form.session}
              onChange={handleChange}
              className="form-input"
            >
              <option value="">Buổi khám</option>
              <option value="morning">Sáng</option>
              <option value="afternoon">Chiều</option>
              <option value="evening">Tối</option>
            </select>

            <textarea
              name="symptom"
              value={form.symptom}
              onChange={handleChange}
              placeholder="Triệu chứng"
              rows={3}
              className="form-input full resize-none"
            />
            <textarea
              name="note"
              value={form.note}
              onChange={handleChange}
              placeholder="Ghi chú"
              rows={2}
              className="form-input full resize-none"
            />
            <button
              type="submit"
              className="form-submit full"
            >
              GỬI
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}