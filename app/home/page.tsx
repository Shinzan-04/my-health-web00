"use client";

import { useState } from "react";
import { Navigation } from '@/components/Navigation';

const banners = [
  {
    image: "./imgbanner/banner1.jpg",
    title: "Chào mừng bạn đến với Streament & HIV Care",
    subtitle: "Nền tảng hỗ trợ, kết nối và chia sẻ kiến thức về HIV",
  },
  {
    image: "./imgbanner/banner2.jpg",
    title: "Cập nhật kiến thức y khoa mới nhất",
    subtitle: "Tin tức, tài liệu và cộng đồng đồng hành cùng bạn",
  },
  {
    image: "./imgbanner/banner3.jpg",
    title: "Đặt lịch khám dễ dàng, bảo mật",
    subtitle: "Đội ngũ chuyên gia luôn sẵn sàng hỗ trợ bạn",
  },
];

export default function HomePage() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navigation />
      {/* Banner slider full width, sát Navigation */}
      <div className="relative w-full" style={{ height: "500px" }}>
        <img
          src={banners[current].image}
          alt={banners[current].title}
          className="w-full h-full object-cover"
          style={{ height: "500px" }}
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow mb-2">
            {banners[current].title}
          </h1>
          <p className="text-lg md:text-xl text-white/90">{banners[current].subtitle}</p>
        </div>
        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-blue-700 rounded-full p-3 shadow transition"
          aria-label="Previous"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-blue-700 rounded-full p-3 shadow transition"
          aria-label="Next"
        >
          &#8594;
        </button>
        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full ${current === idx ? "bg-blue-600" : "bg-white/70"}`}
              aria-label={`Chọn banner ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      {/* Các nội dung khác bên dưới nếu có */}
    </div>
  );
}