import React from "react";
import { mockSisManuals } from "../data/mockDataAdditional";
import "./Help.css";

const Help = () => {
  return (
    <div className="help-page card">
      <div className="help-head">SMIS Users Manuals</div>

      <table className="help-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Title of the Manual</th>
            <th>Manual Release Date</th>
            <th>version</th>
            <th>Manual</th>
            <th className="actions-col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {mockSisManuals.map((manual) => (
            <tr key={manual.sNo}>
              <td>{manual.sNo}</td>
              <td>{manual.title}</td>
              <td>{manual.releaseDate}</td>
              <td>{manual.version}</td>
              <td>{manual.manual}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="help-pagination-info">
        Page 1 of 1, showing {mockSisManuals.length} records out of{" "}
        {mockSisManuals.length} total, starting on record 0, ending on{" "}
        {mockSisManuals.length}
      </p>
      <div className="help-pagination">&lt;&lt; &gt;&gt;</div>
    </div>
  );
};

export default Help;
