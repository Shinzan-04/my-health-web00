"use client";

import { Navigation } from '@/components/Navigation';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navigation />
      <div className="flex flex-1 items-center justify-center">
        <h1 className="text-3xl font-bold text-blue-700">
          Chào mừng bạn đến với trang chủ! cccc
        </h1>
      </div>
    </div>
  );
}