import React, { useState } from 'react';
import { CreditCard } from 'lucide-react';
import { mockUser, mockAttendedSections } from '../data/mockData';
import './AcademicProfile.css';

const AcademicProfile = () => {
  const [activeTab, setActiveTab] = useState('basic');

  return (
    <div className="profile-page academic-profile">
      <div className="page-header">
        <CreditCard size={18} color="#6c757d" />
        <h2 className="page-title">
          Student Academic Profile - {mockUser.firstNameEng} {mockUser.middleNameEng} {mockUser.lastNameEng} ({mockUser.username})
        </h2>
      </div>

      <div className="card profile-card">
        {/* Tabs */}
        <div className="profile-tabs multi-tabs">
          {['basic', 'exemptions', 'registrations', 'course-adds', 'course-drops', 'results', 'curriculum', 'billing'].map((tab) => (
             <button 
              key={tab}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
             >
               {tab.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
             </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'basic' && (
          <div className="tab-content two-col-layout academic-layout">
            
            {/* Left Column */}
            <div className="left-col">
              <div className="section-title">Demographic Information</div>
              <div className="info-table">
                <div className="info-row">
                  <div className="info-label">First Name:</div>
                  <div className="info-value fw-bold">{mockUser.firstNameEng}</div>
                </div>
                <div className="info-row alternate">
                  <div className="info-label">ስም:</div>
                  <div className="info-value fw-bold">{mockUser.firstNameAmh}</div>
                </div>
                <div className="info-row">
                  <div className="info-label">Middle Name:</div>
                  <div className="info-value fw-bold">{mockUser.middleNameEng}</div>
                </div>
                <div className="info-row alternate">
                  <div className="info-label">የአባት ስም:</div>
                  <div className="info-value fw-bold">{mockUser.middleNameAmh}</div>
                </div>
                <div className="info-row">
                  <div className="info-label">Last Name:</div>
                  <div className="info-value fw-bold">{mockUser.lastNameEng}</div>
                </div>
                <div className="info-row alternate">
                  <div className="info-label">የአያት ስም:</div>
                  <div className="info-value fw-bold">{mockUser.lastNameAmh}</div>
                </div>
                <div className="info-row">
                  <div className="info-label">Sex:</div>
                  <div className="info-value fw-bold">{mockUser.sex}</div>
                </div>
                <div className="info-row alternate special-flex">
                  <div className="special-left">
                    <span className="info-label">Student ID:</span>
                    <span className="info-value fw-bold ml-2">{mockUser.id}</span>
                  </div>
                  <a href="#" className="change-link">Change ID</a>
                </div>
                <div className="info-row">
                  <div className="info-label">Birth Date:</div>
                  <div className="info-value">{mockUser.birthDate}</div>
                </div>
                <div className="info-row alternate">
                  <div className="info-label">National Student ID:</div>
                  <div className="info-value">---</div>
                </div>
                <div className="info-row">
                  <div className="info-label">Fayda ID (FAN):</div>
                  <div className="info-value">N/A</div>
                </div>
                <div className="info-row alternate">
                  <div className="info-label">Fayda ID (FIN):</div>
                  <div className="info-value">N/A</div>
                </div>
              </div>

              <div className="section-title mt-4">Attended Sections</div>
              <table className="styled-table sections-table">
                <tbody>
                  {mockAttendedSections.map((section, idx) => (
                    <tr key={section.id} className={idx % 2 === 0 ? 'alternate' : ''}>
                      <td>
                        {section.name.includes('Current') ? (
                          <>
                            {section.name.replace('Current', '')} <span className="fw-bold">Current</span>
                          </>
                        ) : (
                          section.name
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Right Column */}
            <div className="right-col">
              
              <div className="info-box clear-bg portrait-box">
                <div className="section-title">Profile</div>
                <div className="photo-container">
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop" alt="Student Profile" className="student-photo" />
                </div>
                <a href="#" className="document-link mt-2">View Education Document</a>
              </div>

              <div className="info-table-contained mt-4">
                <div className="section-title bg-gray">Access Information</div>
                <div className="contained-rows">
                  <div className="info-row text-sm">Username: {mockUser.username}</div>
                  <div className="info-row alternate text-sm">Last Login: {mockUser.lastLogin}</div>
                  <div className="info-row text-sm">Last Password Change: {mockUser.lastPasswordChange}</div>
                  <div className="info-row alternate text-sm">Failed Logins: ---</div>
                  <div className="info-row text-sm">Folder Number: {mockUser.folderNumber}</div>
                  <div className="info-row alternate text-sm">Phone Number: {mockUser.phoneMobile}</div>
                  <div className="info-row text-sm">Email: {mockUser.email}</div>
                </div>
              </div>

              <div className="info-table-contained mt-4">
                <div className="section-title bg-gray">Classification of Admission</div>
                <div className="contained-rows">
                  <div className="info-row text-sm">Program: {mockUser.program}</div>
                  <div className="info-row alternate text-sm">Program Type: {mockUser.programType}</div>
                  <div className="info-row text-sm">Campus: {mockUser.campus}</div>
                  <div className="info-row alternate text-sm">Faculty: {mockUser.faculty}</div>
                  <div className="info-row text-sm">Department: {mockUser.department}</div>
                  <div className="info-row alternate text-sm">Admission Year: {mockUser.admissionYear}</div>
                  <div className="info-row text-sm">Date Admitted: Dec 1, 2023</div>
                  <div className="info-action-box alternate">
                    <a href="#">View Preferences</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AcademicProfile;
