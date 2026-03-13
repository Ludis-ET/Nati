import React, { useState } from 'react';
import { Folder, Minus, X, GraduationCap, Calendar as CalendarIcon } from 'lucide-react';
import './Dashboard.css';
import { mockSchedule } from '../data/mockData';

const Dashboard = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="dashboard-page">
      {/* Top Flash Cards */}
      <div className="flash-cards-container">
        {/* Message Card */}
        <div className="card flash-card">
          <div className="flash-card-header">
            <div className="flash-card-title">
              <Folder size={16} />
              <span>Message</span>
            </div>
            <div className="flash-card-actions">
              <Minus size={14} />
              <X size={14} />
            </div>
          </div>
          <div className="flash-card-body">
            <p className="message-date">Aug 26, 2025 8:38:55 AM <span className="text-danger">(close)</span></p>
            <p className="message-text">
              You get B for the course <span className="course-highlight">Architectural Science II (Water) (Arch-3131).</span>
            </p>
            <div className="message-action">
              <button className="btn-show-more" onClick={() => setShowMore(!showMore)}>
                {showMore ? 'Show less' : 'Show more'}
              </button>
            </div>
          </div>
        </div>

        {/* Invoice Card */}
        <div className="card flash-card">
          <div className="flash-card-header">
            <div className="flash-card-title">
              <Folder size={16} />
              <span>Current Pending Invoice</span>
            </div>
            <div className="flash-card-actions">
              <Minus size={14} />
              <X size={14} />
            </div>
          </div>
          <div className="flash-card-body empty-body">
            {/* Empty space as seen in image */}
          </div>
        </div>

        {/* Rank Card */}
        <div className="card flash-card">
          <div className="flash-card-header">
            <div className="flash-card-title">
              <GraduationCap size={16} />
              <span>Rank</span>
            </div>
            <div className="flash-card-actions">
              <Minus size={14} />
              <X size={14} />
            </div>
          </div>
          <div className="flash-card-body">
            <hr className="rank-divider" />
          </div>
        </div>
      </div>

      {/* Schedule Section */}
      <div className="card schedule-card">
        <div className="flash-card-header">
          <div className="flash-card-title">
            <CalendarIcon size={16} />
            <span>Schedule</span>
          </div>
          <div className="flash-card-actions">
            <Minus size={14} />
            <X size={14} />
          </div>
        </div>
        
        <div className="schedule-body">
          <div className="schedule-title-bar">
            UG3 2016 AR 2 R
          </div>
          <div className="table-responsive">
            <table className="styled-table schedule-table">
              <thead>
                <tr>
                  <th className="dark-header">Periods/Weekday</th>
                  <th>Sunday</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                </tr>
              </thead>
              <tbody>
                {mockSchedule.map((row, index) => (
                  <tr key={index}>
                    <td>{row.period}</td>
                    <td>{row.sunday}</td>
                    <td>{row.monday}</td>
                    <td>{row.tuesday}</td>
                    <td>{row.wednesday}</td>
                    <td>{row.thursday}</td>
                    <td>{row.friday}</td>
                    <td>{row.saturday}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
