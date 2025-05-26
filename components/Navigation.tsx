"use client";
import React from 'react';
import styles from './Navigation.module.css';
import { useRouter } from 'next/navigation';

export const Navigation = () => {
  const router = useRouter();

  return (
    <div className={styles.navigation}>
      <div className={styles.logoSection}>
        <img src="/next.svg" alt="Logo" className={styles.logo} />
        <h1 className={styles.title}>HIV Treatment and Medical</h1>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.search}>
          <input type="text" placeholder="Nhập từ khóa tìm kiếm" className={styles.searchInput} />
          <button className={styles.searchButton}>Tìm</button>
        </div>
        <div className={styles.links}>
          <a
            href="/home"
            className={styles.link}
            onClick={e => {
              e.preventDefault();
              window.location.href = "/home"; // Luôn về trang chủ (home) và reload
            }}
          >
            Trang chủ
          </a>
          <a href="#" className={styles.link}>Đặt lịch</a>
          <a href="#" className={styles.link}>Tài liệu giáo dục</a>
          <a
              href="/blog"
              className={styles.link}
              onClick={e => {
                e.preventDefault();
                router.push('/blog');
              }}
            >
              Blog
          </a>
        </div>
        <div className={styles.buttons}>
          <button
            className={styles.registerButton}
            onClick={() => router.push('/registrations')}
          >
            Đăng Ký Khám
          </button>
          <button
            className={styles.loginButton}
            onClick={() => router.push('/login')}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};