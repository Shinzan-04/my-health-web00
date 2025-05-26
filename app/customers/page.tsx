"use client";

import { useEffect, useState } from "react";
import { Customer } from "@/types";
import Table from "@/components/Table";

export default function CustomerPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    fetch("/api/customers") // Gọi tới backend Java
      .then((res) => res.json())
      .then((data) => setCustomers(data))
      .catch((err) => console.error("Lỗi khi tải danh sách khách hàng:", err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Quản lý khách hàng</h1>
      <Table data={customers} columns={["fullName", "gender", "email", "phone", "role"]} />
    </div>
  );
}
