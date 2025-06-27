import { useState } from "react";

const PaymentsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const paymentsPerPage = 7;

  const payments = [
    { date: "2024-03-15", amount: "500,000 UZS", status: "Tasdiqlangan" },
    { date: "2024-03-20", amount: "350,000 UZS", status: "Jarayonda" },
    { date: "2024-04-01", amount: "800,000 UZS", status: "Rad etilgan" },
    { date: "2024-04-05", amount: "100,000 UZS", status: "Tasdiqlangan" },
    { date: "2024-04-10", amount: "250,000 UZS", status: "Tasdiqlangan" },
    { date: "2024-04-15", amount: "600,000 UZS", status: "Jarayonda" },
    { date: "2024-04-20", amount: "700,000 UZS", status: "Tasdiqlangan" },
    { date: "2024-04-25", amount: "300,000 UZS", status: "Rad etilgan" },
    { date: "2024-04-30", amount: "450,000 UZS", status: "Tasdiqlangan" },
    { date: "2024-05-05", amount: "900,000 UZS", status: "Jarayonda" },
    { date: "2024-05-10", amount: "500,000 UZS", status: "Tasdiqlangan" },
    { date: "2024-05-15", amount: "300,000 UZS", status: "Tasdiqlangan" },
    { date: "2024-05-20", amount: "150,000 UZS", status: "Jarayonda" },
    { date: "2024-05-25", amount: "250,000 UZS", status: "Tasdiqlangan" },
    { date: "2024-05-30", amount: "650,000 UZS", status: "Rad etilgan" },
    { date: "2024-06-01", amount: "750,000 UZS", status: "Tasdiqlangan" },
    { date: "2024-06-05", amount: "350,000 UZS", status: "Jarayonda" },
    { date: "2024-06-10", amount: "800,000 UZS", status: "Tasdiqlangan" },
    { date: "2024-06-15", amount: "950,000 UZS", status: "Tasdiqlangan" },
    { date: "2024-06-20", amount: "400,000 UZS", status: "Jarayonda" },
  ];

  const totalPages = Math.ceil(payments.length / paymentsPerPage);
  const start = (currentPage - 1) * paymentsPerPage;
  const currentPayments = payments.slice(start, start + paymentsPerPage);

  const getPageNumbers = () => {
    let pages = [];
    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, startPage + 2);

    // Agar oxiriga yetgan bo‘lsa, 3ta raqamni to‘ldirish uchun orqaga sur
    if (endPage - startPage < 2) {
      startPage = Math.max(1, endPage - 2);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">To'lovlar Tarixi</h2>

      <table className="min-w-full bg-white border border-gray-200 shadow rounded-md">
        <thead className="bg-amber-500 text-white">
          <tr>
            <th className="py-3 px-4 text-left">Sana</th>
            <th className="py-3 px-4 text-left">Summa</th>
            <th className="py-3 px-4 text-left">Holat</th>
          </tr>
        </thead>
        <tbody>
          {currentPayments.map((payment, index) => (
            <tr key={index} className="hover:bg-gray-100 border-t">
              <td className="py-2 px-4">{payment.date}</td>
              <td className="py-2 px-4">{payment.amount}</td>
              <td className="py-2 px-4">{payment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center mt-4 gap-2 items-center">
        <button
          onClick={() => {
            if (currentPage > 1) setCurrentPage(currentPage - 1);
          }}
          className="px-3 py-1 border rounded text-xl"
          disabled={currentPage === 1}
        >
          {"<"}
        </button>

        {getPageNumbers().map((num) => (
          <button
            key={num}
            onClick={() => setCurrentPage(num)}
            className={`px-4 py-1 rounded border ${
              currentPage === num
                ? "bg-amber-500 text-white"
                : "bg-white text-black border-gray-300"
            }`}
          >
            {num}
          </button>
        ))}

        <button
          onClick={() => {
            if (currentPage < totalPages) setCurrentPage(currentPage + 1);
          }}
          className="px-3 py-1 border rounded text-xl"
          disabled={currentPage === totalPages}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default PaymentsPage;
