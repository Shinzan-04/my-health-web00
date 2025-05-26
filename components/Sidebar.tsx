import React from 'react';

export const Sidebar = () => {
  return (
    <aside style={{ width: '200px', backgroundColor: '#f5f5f5', padding: '10px' }}>
      <ul>
        <li><a href="/home">Trang chủ</a></li>
        <li><a href="/dashboard">Bảng điều khiển</a></li>
        <li><a href="/customers">Khách hàng</a></li>
      </ul>
    </aside>
  );
};