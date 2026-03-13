import React, { useState } from "react";
import {
  mockAcademicYears,
  mockCourseRegistrations,
  mockSemesters,
} from "../data/mockDataAdditional";
import "./SemesterRegistration.css";

const SemesterRegistration = () => {
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedYear, setSelectedYear] = useState(mockAcademicYears[0]);
  const [selectedSemester, setSelectedSemester] = useState(mockSemesters[0]);

  const handleSearch = () => {
    setHasSearched(true);
  };

  const filteredRegistrations = mockCourseRegistrations.filter(
    (row) =>
      row.academicYear === selectedYear && row.semester === selectedSemester,
  );

  return (
    <div className="registration-page">
      <div className="card search-card">
        <h2 className="search-title">Course Registration search</h2>

        <div className="search-form-row">
          <div className="form-group flex-1">
            <label>Academic Year</label>
            <select
              className="outlined-select"
              value={selectedYear}
              onChange={(event) => setSelectedYear(event.target.value)}
              title="Academic Year"
            >
              {mockAcademicYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group flex-1">
            <label>Semester</label>
            <select
              className="outlined-select"
              value={selectedSemester}
              onChange={(event) => setSelectedSemester(event.target.value)}
              title="Semester"
            >
              {mockSemesters.map((semester) => (
                <option key={semester} value={semester}>
                  {semester}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button className="btn-search" onClick={handleSearch}>
          Search
        </button>
      </div>

      {hasSearched && (
        <div className="card results-card mt-3">
          <div className="table-wrapper">
            <table className="registration-table styled-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Program</th>
                  <th>
                    Program
                    <br />
                    Type
                  </th>
                  <th>Year</th>
                  <th>
                    Academic
                    <br />
                    Year
                  </th>
                  <th>Semester</th>
                  <th>Course</th>
                  <th>
                    Payment
                    <br />
                    Slip
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredRegistrations.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-light" : ""}>
                    <td>{row.sNo}</td>
                    <td>{row.id}</td>
                    <td className="text-teal text-wrap-name">
                      {row.name.replace(" ", "\n")}
                    </td>
                    <td>{row.department}</td>
                    <td>{row.program}</td>
                    <td>{row.programType}</td>
                    <td>{row.year}</td>
                    <td>{row.academicYear}</td>
                    <td>{row.semester}</td>
                    <td className="text-teal">{row.course}</td>
                    <td className="text-teal">
                      Payment
                      <br />
                      Invoice
                    </td>
                  </tr>
                ))}
                {filteredRegistrations.length === 0 && (
                  <tr>
                    <td colSpan={11} className="registration-empty-state">
                      No registration found for Academic Year {selectedYear}{" "}
                      Semester {selectedSemester}.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default SemesterRegistration;
