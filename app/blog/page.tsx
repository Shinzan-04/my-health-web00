"use client";
import React from "react";
import { Navigation } from "../../components/Navigation";

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 to-blue-300 font-sans">
      <Navigation />
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto mt-8 px-4 gap-8 w-full">
        {/* Main Article */}
        <main
  className="flex-1 rounded-2xl shadow-xl p-8 relative"
  style={{ backgroundColor: "rgb(169,225,232)" }}
>          {/* Header Image */}
          <img
            src="/blog-cover.jpg"
            alt="HIV & Streament"
            className="w-full h-56 object-cover rounded-xl mb-6 shadow-lg"
          />
          {/* Article Title */}
          <h1 className="text-4xl font-extrabold text-black mb-2 drop-shadow">
            Streament in HIV Treatment: A New Hope for Patients
          </h1>
          {/* Short Description / Subtitle */}
          <p className="text-black text-lg mb-4">
            Discover how Streament offers new possibilities in HIV treatment, improving patient outcomes and quality of life.
          </p>
          {/* Author & Metadata */}
          <div className="flex flex-wrap items-center gap-4 mb-6 text-black text-sm">
            <div className="flex items-center gap-2">
              <span className="inline-block bg-white/20 rounded-full px-3 py-1 font-semibold">👨‍⚕️ Dr. Nguyễn Văn A</span>
              <span>•</span>
              <span>27/05/2025</span>
              <span>•</span>
              <span>7 min read</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-white/80 text-blue-700 font-semibold px-3 py-1 rounded-full text-xs">#HIV Treatment</span>
              <span className="bg-white/80 text-green-700 font-semibold px-3 py-1 rounded-full text-xs">#Streament</span>
              <span className="bg-white/80 text-blue-700 font-semibold px-3 py-1 rounded-full text-xs">#Community Health</span>
            </div>
          </div>
          {/* Article Body */}
          <article className="prose prose-lg prose-invert max-w-none text-black">
            <h2>Giới thiệu</h2>
            <p>
              Streament là nền tảng tiên phong trong việc cung cấp thông tin, hỗ trợ và kết nối cộng đồng liên quan đến HIV. Chúng tôi cam kết xây dựng một môi trường an toàn, thân thiện và chuyên nghiệp cho mọi người.
            </p>
            <h3>Tin tức & Cập nhật</h3>
            <p>
              Cập nhật các nghiên cứu mới, chính sách y tế, và các hoạt động cộng đồng nổi bật về HIV. Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng chia sẻ kiến thức và kinh nghiệm thực tiễn.
            </p>
            <h3>Tài nguyên & Hỗ trợ</h3>
            <ul>
              <li>Hướng dẫn điều trị và chăm sóc sức khỏe</li>
              <li>Địa chỉ các cơ sở y tế uy tín</li>
              <li>Chia sẻ câu chuyện thực tế từ cộng đồng</li>
              <li>Hỗ trợ tư vấn miễn phí qua email và hotline</li>
            </ul>
            <h3>Kết nối cộng đồng</h3>
            <p>
              Tham gia diễn đàn, bình luận, và chia sẻ kinh nghiệm để cùng nhau xây dựng một cộng đồng khỏe mạnh, tích cực và đầy cảm hứng.
            </p>
          </article>
          {/* Social Sharing */}
          <div className="flex gap-4 mt-8 mb-4">
            <span className="text-black font-semibold">Chia sẻ:</span>
            <a href="#" className="hover:text-blue-300 text-2xl" aria-label="Facebook">🌐</a>
            <a href="#" className="hover:text-blue-300 text-2xl" aria-label="Twitter">🐦</a>
            <a href="#" className="hover:text-blue-300 text-2xl" aria-label="LinkedIn">💼</a>
            <a href="#" className="hover:text-blue-300 text-2xl" aria-label="Zalo">💬</a>
          </div>
          {/* Comment/Question Form */}
          <div className="mt-8 bg-white/90 rounded-xl p-6 shadow">
            <h4 className="text-lg font-bold text-blue-700 mb-2">Bình luận hoặc đặt câu hỏi ẩn danh</h4>
            <form className="flex flex-col gap-3">
              <textarea
                rows={3}
                placeholder="Nhập bình luận hoặc câu hỏi của bạn..."
                className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="self-end bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition"
              >
                Gửi
              </button>
            </form>
          </div>
        </main>
        {/* Sidebar */}
        <aside className="w-full md:w-80 flex-shrink-0 flex flex-col gap-8">
          {/* Featured/Trending Articles */}
<div
  className="rounded-2xl shadow-lg p-6"
  style={{ backgroundColor: "#4a6fa4" }}
>
  <h4 className="text-lg font-bold text-black mb-4">Trending in HIV Care</h4>
  <ul className="space-y-4">
              <li className="flex gap-3 items-center">
                <img src="/thumb1.jpg" alt="" className="w-12 h-12 rounded-lg object-cover" />
                <div>
                  <div className="font-semibold text-black truncate max-w-[160px]">What to Know About Streament</div>
                  <div className="text-xs text-black/80 flex gap-2">
                    <span>25/05/2025</span>
                    <span>•</span>
                    <span>4 min</span>
                    <span className="bg-white/20 text-xs px-2 py-0.5 rounded-full ml-2">#Support</span>
                  </div>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <img src="/thumb2.jpg" alt="" className="w-12 h-12 rounded-lg object-cover" />
                <div>
                  <div className="font-semibold text-black truncate max-w-[160px]">Living Positively with HIV: A Patient Story</div>
                  <div className="text-xs text-black/80 flex gap-2">
                    <span>20/05/2025</span>
                    <span>•</span>
                    <span>6 min</span>
                    <span className="bg-white/20 text-xs px-2 py-0.5 rounded-full ml-2">#HIV Care</span>
                  </div>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <img src="/thumb3.jpg" alt="" className="w-12 h-12 rounded-lg object-cover" />
                <div>
                  <div className="font-semibold text-black truncate max-w-[160px]">Improving HIV Care Access in Remote Areas</div>
                  <div className="text-xs text-black/80 flex gap-2">
                    <span>18/05/2025</span>
                    <span>•</span>
                    <span>5 min</span>
                    <span className="bg-white/20 text-xs px-2 py-0.5 rounded-full ml-2">#Treatment</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* Community Stats */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h4 className="text-lg font-bold text-blue-700 mb-4">Cộng đồng</h4>
            <div className="flex flex-col gap-2 text-gray-700 text-sm">
              <span>👥 2,350 thành viên</span>
              <span>👍 8,120 lượt thích</span>
              <span>💬 1,540 bình luận</span>
            </div>
          </div>
        </aside>
      </div>
      {/* Footer */}
      <footer className="mt-16 bg-gradient-to-r from-blue-700 to-green-600 text-black py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-6">
          <div>
            <div className="font-bold text-lg mb-2">Liên hệ hỗ trợ</div>
            <div>Email: <a href="mailto:support@streament.com" className="underline">support@streament.com</a></div>
            <div>Hotline: <a href="tel:18001234" className="underline">1800 1234</a></div>
          </div>
          {/* Social Media */}
          <div className="flex gap-4 text-2xl">
            <a href="#" aria-label="Facebook" className="hover:text-blue-300">🌐</a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-300">🐦</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-300">💼</a>
            <a href="#" aria-label="Zalo" className="hover:text-blue-300">💬</a>
          </div>
          {/* Newsletter */}
          <form className="flex flex-col md:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Nhập email để nhận tin"
              className="rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="submit"
              className="bg-white text-blue-700 font-semibold px-4 py-2 rounded-md hover:bg-blue-100 transition"
            >
              Đăng ký nhận tin
            </button>
          </form>
        </div>
        <div className="text-center text-xs mt-6 text-white/80">
          © 2025 Streament & HIV Community. All rights reserved.
        </div>
      </footer>
    </div>
  );
}