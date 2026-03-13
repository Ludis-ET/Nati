import React, { useMemo, useState } from "react";
import {
  mockAcademicYears,
  mockGradeReport,
  mockGradeReports,
  mockSemesters,
} from "../data/mockDataAdditional";
import "./Grades.css";

const Grades = () => {
  const [showReport, setShowReport] = useState(false);
  const [selectedYear, setSelectedYear] = useState(
    mockGradeReport.filters.academicYear,
  );
  const [selectedSemester, setSelectedSemester] = useState(
    mockGradeReport.filters.semester,
  );

  const selectedReport = useMemo(
    () =>
      mockGradeReports.find(
        (report) =>
          report.filters.academicYear === selectedYear &&
          report.filters.semester === selectedSemester,
      ),
    [selectedYear, selectedSemester],
  );

  const totals = useMemo(() => {
    if (!selectedReport) {
      return {
        totalCredit: 0,
        totalPoint: 0,
        sgpa: 0,
      };
    }

    const totalCredit = selectedReport.courses.reduce(
      (sum, course) => sum + course.creditHour,
      0,
    );
    const totalPoint = selectedReport.courses.reduce(
      (sum, course) => sum + course.gradePoint,
      0,
    );
    const sgpa = totalCredit === 0 ? 0 : totalPoint / totalCredit;

    return {
      totalCredit,
      totalPoint,
      sgpa,
    };
  }, [selectedReport]);

  const isPendingReport = selectedReport?.pending ?? false;

  return (
    <div className="grades-page card">
      <h2 className="grades-title">Student Examination Grade Report</h2>
      <p className="grades-subtitle">
        Please select academic year and semester for which you want to get grade
        report.
      </p>

      <div className="grade-filter-bar">
        <div className="grade-filter-label">Academic Year:</div>
        <select
          title="Academic Year"
          value={selectedYear}
          onChange={(event) => setSelectedYear(event.target.value)}
        >
          {mockAcademicYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <div className="grade-filter-label">Semester:</div>
        <select
          title="Semester"
          value={selectedSemester}
          onChange={(event) => setSelectedSemester(event.target.value)}
        >
          {mockSemesters.map((semester) => (
            <option key={semester} value={semester}>
              {semester}
            </option>
          ))}
        </select>
      </div>

      <div className="grade-btn-row">
        <button
          className="grade-report-btn"
          onClick={() => setShowReport(true)}
        >
          Grade Report
        </button>
      </div>

      {showReport && (
        <>
          {!selectedReport ? (
            <div className="grade-empty-state">
              No grade report found for Academic Year {selectedYear} Semester{" "}
              {selectedSemester}.
            </div>
          ) : (
            <>
              <table className="student-meta-table">
                <tbody>
                  <tr>
                    <td>
                      <strong>Fullname:</strong>
                    </td>
                    <td>{selectedReport.student.fullName}</td>
                    <td>
                      <strong>ID:</strong>
                    </td>
                    <td>{selectedReport.student.id}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Program:</strong>
                    </td>
                    <td>{selectedReport.student.program}</td>
                    <td>
                      <strong>Program Type:</strong>
                    </td>
                    <td>{selectedReport.student.programType}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>School/Center:</strong>
                    </td>
                    <td>{selectedReport.student.schoolCenter}</td>
                    <td>
                      <strong>Department:</strong>
                    </td>
                    <td>{selectedReport.student.department}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Section:</strong>
                    </td>
                    <td>{selectedReport.student.section}</td>
                    <td>
                      <strong>Year Level:</strong>
                    </td>
                    <td>{selectedReport.student.yearLevel}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Academic Year:</strong>
                    </td>
                    <td>{selectedReport.filters.academicYear}</td>
                    <td>
                      <strong>Semester:</strong>
                    </td>
                    <td>{selectedReport.filters.semester}</td>
                  </tr>
                </tbody>
              </table>

              <table className="grade-result-table">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Course Code</th>
                    <th>Course Title</th>
                    <th>Credit Hour</th>
                    <th>Grade</th>
                    <th>Grade Point</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedReport.courses.map((course, idx) => (
                    <tr key={course.courseCode}>
                      <td>{idx + 1}</td>
                      <td>{course.courseCode}</td>
                      <td>{course.courseTitle}</td>
                      <td>{course.creditHour}</td>
                      <td>{course.grade}</td>
                      <td>{course.grade === "-" ? "-" : course.gradePoint}</td>
                    </tr>
                  ))}
                  <tr className="result-total-row">
                    <td colSpan={3}>TOTAL</td>
                    <td>{totals.totalCredit}</td>
                    <td></td>
                    <td>{isPendingReport ? "-" : totals.totalPoint}</td>
                  </tr>
                </tbody>
              </table>

              <div className="grade-summary-grid">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Previous</strong>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Credit Hour Taken:</td>
                      <td>{selectedReport.previousCreditHour ?? "---"}</td>
                    </tr>
                    <tr>
                      <td>Grade Point Earned:</td>
                      <td>{selectedReport.previousGradePoint ?? "---"}</td>
                    </tr>
                    <tr>
                      <td>SGPA:</td>
                      <td>
                        {selectedReport.previousSgpa?.toFixed(2) ?? "---"}
                      </td>
                    </tr>
                    <tr>
                      <td>CGPA:</td>
                      <td>
                        {selectedReport.cumulativeGpa?.toFixed(2) ?? "---"}
                      </td>
                    </tr>
                    <tr>
                      <td>Status:</td>
                      <td>{selectedReport.academicStatus ?? "---"}</td>
                    </tr>
                  </tbody>
                </table>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <strong>This Semester</strong>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Credit Hour Taken:</td>
                      <td>{totals.totalCredit}</td>
                    </tr>
                    <tr>
                      <td>Grade Point Earned:</td>
                      <td>{isPendingReport ? "-" : totals.totalPoint}</td>
                    </tr>
                    <tr>
                      <td>SGPA:</td>
                      <td>{isPendingReport ? "-" : totals.sgpa.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td>CGPA:</td>
                      <td>
                        {selectedReport.cumulativeGpa?.toFixed(2) ?? "---"}
                      </td>
                    </tr>
                    <tr>
                      <td>Status:</td>
                      <td>{selectedReport.academicStatus ?? "---"}</td>
                    </tr>
                  </tbody>
                </table>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Cumulative Academic Status</strong>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Total Credit Hour Taken:</td>
                      <td>
                        {selectedReport.cumulativeCreditHour ??
                          totals.totalCredit}
                      </td>
                    </tr>
                    <tr>
                      <td>Total Grade Point Earned:</td>
                      <td>
                        {selectedReport.cumulativeGradePoint ??
                          totals.totalPoint}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Grades;
