import React from 'react';
import { mockAdmittedStudents } from '../data/mockData';
import './AdmissionSearch.css';

const AdmissionSearch = () => {
  return (
    <div className="search-page">
      <div className="card title-card">
        <h2>Accepted Student Search</h2>
      </div>

      <div className="card table-card">
        <div className="table-wrapper">
          <table className="admissions-table">
            <thead>
              <tr>
                <th className="text-center">No.</th>
                <th>Full Name</th>
                <th>Sex</th>
                <th>Student Number</th>
                <th>College</th>
                <th>Department</th>
                <th>Program Type</th>
                <th>Folder Number</th>
                <th>File Number</th>
              </tr>
            </thead>
            <tbody>
              {mockAdmittedStudents.map((student, idx) => (
                <tr key={student.studentNumber} className={idx % 2 === 0 ? 'bg-light' : ''}>
                  <td className="text-center">{student.no}</td>
                  <td>{student.fullName}</td>
                  <td>{student.sex}</td>
                  <td>{student.studentNumber}</td>
                  <td className="text-teal">{student.college}</td>
                  <td className="text-teal">{student.department}</td>
                  <td className="text-teal">{student.programType}</td>
                  <td>{student.folderNumber}</td>
                  <td>{student.fileNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty row as seen in screenshot */}
        <div className="empty-row-box"></div>

        <div className="pagination-info">
          Page 1 of 1, showing 1 records out of 1 total, starting on record 1, ending on 1
        </div>
        
        <div className="pagination-controls">
          <span className="page-link">&lt;&lt;</span>
          <span className="page-link">&gt;&gt;</span>
        </div>
      </div>
    </div>
  );
};

export default AdmissionSearch;
