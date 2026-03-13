import React from 'react';
import { MessageSquare } from 'lucide-react';
import './CourseAdds.css';

const CourseAdds = () => {
  return (
    <div className="course-adds-page">
      <div className="alert-message">
        <div className="alert-icon-wrapper">
          <MessageSquare size={18} color="white" fill="#5bc0de" />
        </div>
        <span>There is no add courses in the system in the given criteria.</span>
      </div>
      
      {/* Empty visual blocker below alert */}
      <div className="empty-content-block"></div>
    </div>
  );
};

export default CourseAdds;
