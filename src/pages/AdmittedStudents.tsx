import React from "react";
import { mockAdmittedStudentsDetailed } from "../data/mockDataAdditional";
import "./AdmittedStudents.css";

const AdmittedStudents = () => {
  return (
    <div className="admitted-page card">
      <h3 className="admitted-title">View Students</h3>

      <div className="print-tools">
        <span>Print</span>
        <span>ETA Print</span>
      </div>

      <table className="admitted-table">
        <thead>
          <tr>
            <th>S.Nq</th>
            <th>Full Name</th>
            <th>Gender</th>
            <th>Studentnumber</th>
            <th>Admissionyear</th>
            <th>Program</th>
            <th>Program Type</th>
            <th>College</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {mockAdmittedStudentsDetailed.map((student) => (
            <tr key={student.studentNumber}>
              <td>{student.sNo}</td>
              <td>{student.fullName}</td>
              <td>{student.gender}</td>
              <td>{student.studentNumber}</td>
              <td>{student.admissionYear}</td>
              <td>{student.program}</td>
              <td>{student.programType}</td>
              <td>{student.college}</td>
              <td>{student.department}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="admitted-page-info">
        Page 1 of 1, showing {mockAdmittedStudentsDetailed.length} records out
        of {mockAdmittedStudentsDetailed.length} total, starting on record 1,
        ending on {mockAdmittedStudentsDetailed.length}
      </div>
      <div className="admitted-page-nav">&lt;&lt; &gt;&gt;</div>
    </div>
  );
};

export default AdmittedStudents;
