import React from "react";
import { mockGradeReport } from "../data/mockDataAdditional";
import "./Clearances.css";

const Clearances = () => {
  const student = mockGradeReport.student;

  return (
    <div className="clearance-page card">
      <h2 className="clearance-title">Clearance/Withdraw</h2>
      <p className="clearance-info">
        Important Note:The system will check if you have taken any properties
        from universities and inform you to return the properties to concerned
        bodies before filling the clearance, if you have not taken any
        properties the system will forward your request to registrar for their
        approval. The clearance will be final if the registrar confirmed your
        clearance as cleared.
      </p>

      <ol className="clearance-rules">
        <li>
          If the request is withdrawal the system will process the clearance
          too, please advice your department advisor befor filling withdrawl,
          inorder to be consider in readmission application registrar has to
          approved the clearnce and accepted your withdrawal.
        </li>
        <li>
          If the request is clarance, your clearance application will be cleared
          if registrar has approved that your cleared else you have to contact
          registrar
        </li>
      </ol>

      <div className="clearance-grid">
        <div className="student-box">
          <table>
            <tbody>
              <tr>
                <td>
                  <strong>College:</strong>
                </td>
                <td>Engineering, Technology and Computational Sciences</td>
              </tr>
              <tr>
                <td>
                  <strong>Department:</strong>
                </td>
                <td>{student.department}</td>
              </tr>
              <tr>
                <td>
                  <strong>Program:</strong>
                </td>
                <td>{student.program}</td>
              </tr>
              <tr>
                <td>
                  <strong>Program Type:</strong>
                </td>
                <td>{student.programType}</td>
              </tr>
              <tr>
                <td>
                  <strong>Name:</strong>
                </td>
                <td>{student.fullName}</td>
              </tr>
              <tr>
                <td>
                  <strong>Student Number:</strong>
                </td>
                <td>{student.id}</td>
              </tr>
              <tr>
                <td>
                  <strong>Year Level:</strong>
                </td>
                <td>{student.yearLevel}</td>
              </tr>
              <tr>
                <td>
                  <strong>Section:</strong>
                </td>
                <td>{student.section}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="stats-box">
          <table>
            <tbody>
              <tr>
                <td>
                  <strong>Semester:</strong>
                </td>
                <td>2</td>
              </tr>
              <tr>
                <td>
                  <strong>Academic Year:</strong>
                </td>
                <td>2016</td>
              </tr>
              <tr>
                <td>
                  <strong>SGPA:</strong>
                </td>
                <td>2.56</td>
              </tr>
              <tr>
                <td>
                  <strong>CGPA:</strong>
                </td>
                <td>2.61</td>
              </tr>
              <tr>
                <td>
                  <strong>Academic Status:</strong>
                </td>
                <td>Good Standing</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="action-box">
          <label>
            <input type="radio" name="request" defaultChecked />
            Clearance
          </label>
          <label>
            <input type="radio" name="request" />
            Withdraw
          </label>

          <label className="field-label">Reason</label>
          <input className="reason-input" type="text" title="Reason" />

          <p className="reason-help">
            E.g. End of Academic Year, Graduation, Health Problem, Acadamic
            Dismissal, Social/Family/Personal Case
          </p>

          <label className="field-label">Last Date Class Attended</label>
          <div className="date-selects">
            <select title="Month" defaultValue="March">
              <option>March</option>
            </select>
            <select title="Day" defaultValue="13">
              <option>13</option>
            </select>
            <select title="Year" defaultValue="2026">
              <option>2026</option>
            </select>
          </div>

          <div className="note-box">
            Note: incase of withdrawl please attach supporting document for your
            withdrawl.
          </div>
        </div>
      </div>

      <button className="clearance-submit">Submit</button>
    </div>
  );
};

export default Clearances;
