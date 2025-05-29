import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('Body gửi lên BE:', body);

    const res = await fetch('http://localhost:8080/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error('Lỗi từ BE:', error);
      return NextResponse.json({ error }, { status: res.status });
    }

    const data = await res.json();
    console.log('Kết quả trả về từ BE:', data);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Lỗi khi gọi BE:', error);
    return NextResponse.json({ error: 'Lỗi server hoặc không kết nối được backend.' }, { status: 500 });
  }
}