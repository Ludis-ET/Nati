import React from "react";
import { mockDepartmentTransfers } from "../data/mockDataAdditional";
import "./DepartmentTransfers.css";

const DepartmentTransfers = () => {
  return (
    <div className="department-transfers-page card">
      <div className="department-transfers-body">
        <div className="department-transfers-smallheading">
          Department Transfers Request.
        </div>

        <table className="department-transfers-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Transfer To Department</th>
              <th>Full Name</th>
              <th>Request Date</th>
              <th>Sender Department Approval</th>
              <th>Sender College Approval</th>
              <th>Sender College Approval Date</th>
              <th>Receiver Department Approval</th>
              <th>Receiver Department Date</th>
              <th>Receiver College Approval</th>
              <th>Receiver College Approval Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockDepartmentTransfers.map((row, index) => (
              <tr key={row.id}>
                <td>{index + 1}</td>
                <td>{row.transferToDepartment}</td>
                <td>{row.fullName}</td>
                <td>{row.requestDate}</td>
                <td>{row.senderDepartmentApproval}</td>
                <td>{row.senderCollegeApproval}</td>
                <td>{row.senderCollegeApprovalDate}</td>
                <td>{row.receiverDepartmentApproval}</td>
                <td>{row.receiverDepartmentDate}</td>
                <td>{row.receiverCollegeApproval}</td>
                <td>{row.receiverCollegeApprovalDate}</td>
                <td>
                  {row.canCancel ? (
                    <button
                      type="button"
                      className="department-transfers-action"
                    >
                      Cancel Request
                    </button>
                  ) : (
                    "-"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="department-transfers-page-meta">
          Page 1 of 1, showing {mockDepartmentTransfers.length} records out of{" "}
          {mockDepartmentTransfers.length} total, starting on record 1, ending
          on {mockDepartmentTransfers.length}
        </p>

        <div className="department-transfers-pagination">
          <span>&lt;&lt; previous</span>
          <span>|</span>
          <span>|</span>
          <span>next &gt;&gt;</span>
        </div>
      </div>
    </div>
  );
};

export default DepartmentTransfers;
