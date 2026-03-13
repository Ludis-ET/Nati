import { useState } from "react";
import { Edit } from "lucide-react";
import { mockUser } from "../data/mockData";
import "./BasicProfile.css";

const BasicProfile = () => {
  const [activeTab, setActiveTab] = useState("basic");

  return (
    <div className="profile-page">
      <div className="page-header">
        <Edit size={18} color="#6c757d" />
        <h2 className="page-title">
          Update Student Details: {mockUser.firstNameEng}{" "}
          {mockUser.middleNameEng} {mockUser.lastNameEng} ({mockUser.username})
        </h2>
      </div>

      <div className="card profile-card">
        {/* Tabs */}
        <div className="profile-tabs">
          <button
            className={`tab-btn ${activeTab === "basic" ? "active" : ""}`}
            onClick={() => setActiveTab("basic")}
          >
            Basic Student Information
          </button>
          <button
            className={`tab-btn ${activeTab === "address" ? "active" : ""}`}
            onClick={() => setActiveTab("address")}
          >
            Address & Primary Contact
          </button>
          <button
            className={`tab-btn ${activeTab === "edu" ? "active" : ""}`}
            onClick={() => setActiveTab("edu")}
          >
            Educational Background
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "basic" && (
          <div className="tab-content two-col-layout">
            {/* Left Column */}
            <div className="left-col">
              <div className="section-title">Demographic Information</div>
              <div className="form-group">
                <label>
                  First Name (English): <span className="req">*</span>
                </label>
                <input
                  type="text"
                  value={mockUser.firstNameEng}
                  disabled
                  className="readonly-input"
                />
              </div>
              <div className="form-group">
                <label>
                  Middle Name (English): <span className="req">*</span>
                </label>
                <input
                  type="text"
                  value={mockUser.middleNameEng}
                  disabled
                  className="readonly-input"
                />
              </div>
              <div className="form-group">
                <label>
                  Last Name (English): <span className="req">*</span>
                </label>
                <input
                  type="text"
                  value={mockUser.lastNameEng}
                  disabled
                  className="readonly-input"
                />
              </div>

              <div className="form-group">
                <label>
                  First Name (Amharic): <span className="req">*</span>
                </label>
                <input
                  type="text"
                  value={mockUser.firstNameAmh}
                  className="outlined-input"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>
                  Middle Name (Amharic): <span className="req">*</span>
                </label>
                <input
                  type="text"
                  value={mockUser.middleNameAmh}
                  className="outlined-input"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>
                  Last Name (Amharic): <span className="req">*</span>
                </label>
                <input
                  type="text"
                  value={mockUser.lastNameAmh}
                  className="outlined-input"
                  readOnly
                />
              </div>

              <div className="form-group mt-3">
                <label>
                  Fayda FAN Number (16 digit) :{" "}
                  <span className="req fw-bold">
                    {" "}
                    *(Fill out this very carefully!)
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Check the FRONT side of your Fayda ID for FAN."
                  className="outlined-input warning-border"
                />
              </div>
              <div className="form-group mt-3 line-after">
                <label>
                  Fayda FIN Number (12 digit) :{" "}
                  <span className="req fw-bold">
                    {" "}
                    *(Fill out this very carefully!)
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Check the BACK side of your Fayda ID for FIN."
                  className="outlined-input warning-border"
                />
              </div>

              <div className="form-group inline-group mt-4">
                <label>Estimated Graduation Date: (G.C)</label>
                <div className="select-group">
                  <select defaultValue="August">
                    <option>August</option>
                  </select>
                  <select defaultValue="1">
                    <option>1</option>
                  </select>
                  <select defaultValue="2027">
                    <option>2027</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Sex:</label>
                <select defaultValue="Male" className="outlined-select">
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>

              <div className="form-group mt-3">
                <label>Primary Language:</label>
                <input type="text" className="outlined-input" />
              </div>

              <div className="form-group mt-3">
                <label>
                  Email: <span className="req">*</span>
                </label>
                <input
                  type="email"
                  value={mockUser.email}
                  className="outlined-input"
                  readOnly
                />
              </div>

              <div className="form-group mt-3">
                <label>Alternative Email:</label>
                <input type="email" className="outlined-input" />
              </div>

              <div className="form-group mt-3">
                <label>Phone (Home):</label>
                <input type="text" className="outlined-input" />
              </div>

              <div className="form-group mt-3">
                <label>
                  Phone (Mobile): <span className="req">*</span>
                </label>
                <input
                  type="text"
                  value={mockUser.phoneMobile}
                  className="outlined-input"
                  readOnly
                />
              </div>

              <div className="form-group inline-group mt-3">
                <label>
                  Birth Date: (G.C){" "}
                  <span className="req"> *(set this carefully!)</span>
                </label>
                <div className="select-group">
                  <select defaultValue="April">
                    <option>April</option>
                  </select>
                  <select defaultValue="7">
                    <option>7</option>
                  </select>
                  <select defaultValue="2003">
                    <option>2003</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="right-col">
              <div className="info-box">
                <div className="section-title">Profile Picture</div>
                <div className="picture-placeholder">
                  Photograph
                  <br />
                  not available
                </div>
                <div className="upload-section">
                  <label>Uplaod Profile Picture</label>
                  <div className="file-input-wrapper">
                    <button className="btn-choose-file">Choose File</button>
                    <span className="file-name">No file chosen</span>
                  </div>
                </div>
              </div>

              <div className="info-box mt-4">
                <div className="section-title">Access Information</div>
                <ul className="info-list">
                  <li>Username: {mockUser.username}</li>
                  <li>Last Login: {mockUser.lastLogin}</li>
                  <li>Last Password Change: {mockUser.lastPasswordChange}</li>
                  <li>Failed Logins: ---</li>
                  <li>Ecardnumber: ---</li>
                </ul>
              </div>

              <div className="info-box mt-4">
                <div className="section-title">Classification of Admission</div>
                <ul className="info-list bordered-list">
                  <li>Program: {mockUser.program}</li>
                  <li>Program Type: {mockUser.programType}</li>
                  <li>Faculty: {mockUser.faculty}</li>
                  <li>Department: {mockUser.department}</li>
                  <li>Admission Year: {mockUser.admissionYear}</li>
                  <li>Admission Date: {mockUser.admissionDate}</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Alerts & Buttons */}
        <div className="form-actions">
          <div className="alert-warning">
            Inputs/fields marked <span className="req">*</span> are required and
            you have to select or provide the required information, not marked
            fields are optional. Please check all tabs before updating your
            profile.
          </div>
          <div className="alert-info mt-3">
            By submitting this form, you certify that all the information
            provided in this form is accurate and truthful to the best of your
            knowledge or supporting documents. Any false, misleading, or
            inaccurate information may be subject to further actions as
            permitted by the university's legislation or applicable law.
          </div>

          <button className="btn-primary mt-4">Update Student Detail</button>
        </div>
      </div>
    </div>
  );
};

export default BasicProfile;
