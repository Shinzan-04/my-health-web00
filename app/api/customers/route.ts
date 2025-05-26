import { NextResponse } from 'next/server';

export async function GET() {
  const fakeCustomers = [
    {
      customerID: "C001",
      fullName: "Nguyễn Văn A",
      gender: "Nam",
      dateOfBirth: "1990-01-01",
      phone: "0909123456",
      email: "a@example.com",
      address: "Hà Nội",
      role: "Bệnh nhân"
    }
  ];

  return NextResponse.json(fakeCustomers);
}
