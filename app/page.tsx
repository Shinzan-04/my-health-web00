import React from 'react';
import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect từ root (/) đến /home
  redirect('/home');
}