"use client";

import { useState } from "react";
import "../globals.css";

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
    insurance: "",
    dob: "",
    note: "",
  });
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.date || !form.specialty) {
      setSuccess("Vui lòng điền đầy đủ thông tin bắt buộc");
      return;
    }
    setSuccess("Đăng ký khám thành công!");
    // TODO: Gửi dữ liệu lên server
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
        {/* LEFT: Lưu ý */}
        <div className="bg-gradient-to-b from-blue-600 to-blue-800 text-white p-6 rounded-lg shadow-lg h-fit flex flex-col justify-center">
          <h2 className="text-lg font-semibold mb-4">Lưu ý:</h2>
          <p className="text-sm leading-relaxed">
            Lịch hẹn có hiệu lực sau khi có xác nhận chính thức.<br /><br />
            Quý khách hàng vui lòng cung cấp thông tin chính xác để được sắp xếp lịch hẹn khám. Thời gian khám có thể thay đổi tuỳ theo tình trạng bệnh và sắp xếp của cơ sở y tế.<br /><br />
            Nếu cần hỗ trợ, vui lòng liên hệ bộ phận chăm sóc khách hàng hoặc gọi trực tiếp đến số hotline của đơn vị.<br /><br />
            Trong trường hợp quý khách nghi ngờ có nguy cơ lây nhiễm HIV, hãy đến cơ sở gần nhất để được tư vấn và xét nghiệm miễn phí thông qua các chương trình “Xét nghiệm HIV miễn phí”, “Tự xét nghiệm HIV” hoặc liên hệ các trung tâm hỗ trợ gần nhất để được hỗ trợ kịp thời.
          </p>
        </div>

        {/* RIGHT: Form */}
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-lg relative flex flex-col items-center">
          <button
            className="absolute top-4 right-4 text-xl text-gray-500 hover:text-red-600 font-bold"
            aria-label="Đóng"
            onClick={() => window.history.back()}
          >
            ×
          </button>

          <h1 className="text-2xl font-bold text-center mb-6 w-full">ĐĂNG KÝ KHÁM</h1>
          <p className="text-center text-gray-600 text-sm mb-6 w-full">
            Vui lòng điền thông tin vào form bên dưới để đặt đăng ký khám bệnh theo yêu cầu
          </p>

          {success && (
            <p className="text-center text-green-600 font-medium mb-4 w-full">
              {success}
            </p>
          )}

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
          >
            <div>
              <label className="block text-gray-700 text-sm mb-1">Họ và tên</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Nhập họ và tên"
                className="border rounded-md px-3 py-2 w-full"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Nhập email"
                className="border rounded-md px-3 py-2 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-1">Giới tính</label>
              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full"
              >
                <option value="">Chọn giới tính</option>
                <option value="male">Nam</option>
                <option value="female">Nữ</option>
                <option value="other">Khác</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-1">Năm sinh</label>
              <input
                type="text"
                name="dob"
                value={form.dob}
                onChange={handleChange}
                placeholder="VD: 1990"
                className="border rounded-md px-3 py-2 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-1">Số điện thoại</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Nhập số điện thoại"
                className="border rounded-md px-3 py-2 w-full"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-1">Địa chỉ</label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Nhập địa chỉ"
                className="border rounded-md px-3 py-2 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-1">Bác sĩ</label>
              <input
                type="text"
                name="doctor"
                value={form.doctor}
                onChange={handleChange}
                placeholder="Nhập tên bác sĩ"
                className="border rounded-md px-3 py-2 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-1">Chuyên khoa</label>
              <select
                name="specialty"
                value={form.specialty}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full"
                required
              >
                <option value="">Chọn chuyên khoa</option>
                <option value="hiv">HIV/AIDS</option>
                <option value="da-lieu">Da liễu</option>
                <option value="other">Khác</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-1">Online/Offline</label>
              <select
                name="mode"
                value={form.mode}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full"
              >
                <option value="">Chọn hình thức</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-1">Ngày khám</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-1">Buổi khám</label>
              <select
                name="session"
                value={form.session}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full"
              >
                <option value="">Chọn buổi</option>
                <option value="morning">Sáng</option>
                <option value="afternoon">Chiều</option>
                <option value="evening">Tối</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-1">Bảo hiểm</label>
              <select
                name="insurance"
                value={form.insurance}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full"
              >
                <option value="">Chọn</option>
                <option value="yes">Có</option>
                <option value="no">Không</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 text-sm mb-1">Triệu chứng</label>
              <textarea
                name="symptom"
                value={form.symptom}
                onChange={handleChange}
                placeholder="Mô tả triệu chứng (nếu có)"
                rows={3}
                className="border rounded-md px-3 py-2 w-full resize-none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 text-sm mb-1">Ghi chú</label>
              <textarea
                name="note"
                value={form.note}
                onChange={handleChange}
                placeholder="Thêm ghi chú (nếu có)"
                rows={2}
                className="border rounded-md px-3 py-2 w-full resize-none"
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full py-2 rounded-md text-white"
                style={{ backgroundColor: '#2563EB' }}
              >
                Gửi
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}