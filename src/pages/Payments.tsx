import React from "react";
import { mockPayments } from "../data/mockDataAdditional";
import "./Payments.css";

const Payments = () => {
  const parseAmount = (value: string) => {
    const normalized = value.replace(/,/g, "");
    const parsed = Number(normalized);
    return Number.isFinite(parsed) ? parsed : 0;
  };
  const formatAmount = (value: number) =>
    value.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const totals = mockPayments.reduce(
    (acc, row) => {
      const amount = parseAmount(row.amount);
      if (row.status === "paid") acc.paid += amount;
      if (row.status === "unpaid") acc.unpaid += amount;
      if (row.status === "scholarship") acc.scholarship += amount;
      if (row.status === "refundable") acc.refundable += amount;
      if (row.status === "cancelled") acc.cancelled += amount;
      return acc;
    },
    { paid: 0, unpaid: 0, scholarship: 0, refundable: 0, cancelled: 0 },
  );

  return (
    <div className="payments-page">
      <div className="card title-card">
        <h2>Payments</h2>
      </div>

      <div className="card table-card">
        <div className="table-wrapper">
          <table className="payments-table styled-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Student</th>
                <th>
                  Academic
                  <br />
                  Year
                </th>
                <th>
                  Reference
                  <br />
                  Number
                </th>
                <th>
                  Receipt
                  <br />
                  Number
                </th>
                <th>
                  Total
                  <br />
                  Contact Hr
                </th>
                <th>
                  Total
                  <br />
                  Amount
                </th>
                <th>
                  Payment
                  <br />
                  Group
                </th>
                <th>
                  Payment
                  <br />
                  Term
                </th>
                <th>
                  Payment
                  <br />
                  Date
                </th>
                <th>Receipt</th>
              </tr>
            </thead>
            <tbody>
              {mockPayments.map((row, idx) => (
                <tr
                  key={idx}
                  className={`${idx % 2 === 0 ? "bg-light" : ""} ${
                    row.status === "unpaid" && row.amount === "Pending"
                      ? "pending-payment-row"
                      : ""
                  }`}
                >
                  <td className="text-gray">{row.sNo}</td>
                  <td className="text-teal text-wrap-name">
                    {row.student.replace(" ", "\n")}
                  </td>
                  <td className="text-teal">{row.academicYear}</td>
                  <td className="text-teal">{row.refPattern}</td>
                  <td className="text-teal">{row.receiptNumber}</td>
                  <td className="text-teal">{row.contactHr}</td>
                  <td className="text-teal">{row.amount}</td>
                  <td className="text-teal text-wrap-name">
                    {row.group.replace(" ", "\n")}
                  </td>
                  <td className="text-teal">{row.term}</td>
                  <td className="text-teal text-wrap-name">
                    {row.date.replace(" ", "\n")}
                  </td>
                  <td className="text-teal">{row.receipt}</td>
                </tr>
              ))}

              {/* Summary Rows */}
              <tr className="summary-row">
                <td colSpan={6} className="text-right text-success fw-bold">
                  Total Amount Paid
                </td>
                <td colSpan={5} className="text-success fw-bold">
                  {formatAmount(totals.paid)}
                </td>
              </tr>
              <tr className="summary-row">
                <td colSpan={6} className="text-right text-danger fw-bold">
                  Total Amount UnPaid
                </td>
                <td colSpan={5} className="text-danger fw-bold">
                  {formatAmount(totals.unpaid)}
                </td>
              </tr>
              <tr className="summary-row">
                <td colSpan={6} className="text-right text-primary fw-bold">
                  Scholarship Amount
                </td>
                <td colSpan={5} className="text-primary fw-bold">
                  {formatAmount(totals.scholarship)}
                </td>
              </tr>
              <tr className="summary-row">
                <td colSpan={6} className="text-right text-warning fw-bold">
                  Total Amount Refundable
                </td>
                <td colSpan={5} className="text-warning fw-bold">
                  {formatAmount(totals.refundable)}
                </td>
              </tr>
              <tr className="summary-row">
                <td colSpan={6} className="text-right text-gray fw-bold">
                  Total Amount Cancelled
                </td>
                <td colSpan={5} className="text-gray fw-bold">
                  {formatAmount(totals.cancelled)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Legend block at bottom */}
        <div className="payment-legend">
          <div className="legend-item">
            <span className="text-success">
              1. Green marked payment collected
            </span>
          </div>
          <div className="legend-item">
            <span className="text-danger">2. Red marked not paid</span>
          </div>
          <div className="legend-item">
            <span className="text-primary">3. Blue marked scholarship</span>
          </div>
          <div className="legend-item">
            <span className="text-warning">4. Yellow marked refundable</span>
          </div>
          <div className="legend-item">
            <span className="text-gray">5. Gray marked cancelled</span>
          </div>
        </div>

        <div className="pagination-info mt-4">
          Page 1 of 1, showing {mockPayments.length} records out of{" "}
          {mockPayments.length} total, starting on record 1, ending on{" "}
          {mockPayments.length}
        </div>

        <div className="pagination-controls payment-pagination">
          <span className="page-link text-gray">&lt;&lt; previous</span>
          <span className="page-link text-gray">||</span>
          <span className="page-link text-gray">next &gt;&gt;</span>
        </div>
      </div>
    </div>
  );
};

export default Payments;
