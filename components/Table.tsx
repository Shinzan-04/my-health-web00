interface TableProps<T> {
  data: T[];
  columns: (keyof T)[];
}

export default function Table<T>({ data, columns }: TableProps<T>) {
  return (
    <table className="w-full table-auto border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          {columns.map((col) => (
            <th key={col as string} className="border px-4 py-2 text-left capitalize">
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx} className="hover:bg-gray-50">
            {columns.map((col) => (
              <td key={col as string} className="border px-4 py-2">
                {(row[col] as string) || ""}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
