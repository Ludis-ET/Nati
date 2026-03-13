import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Menu,
  PieChart,
  Contact,
  FileText,
  RefreshCw,
  CreditCard,
  Award,
  ShieldCheck,
  ArrowRightLeft,
  CheckSquare,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  onExpand: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  isCollapsed,
  onToggleCollapse,
  onExpand,
}) => {
  const [openMenu, setOpenMenu] = useState<string>("dashboard");
  const location = useLocation();

  // Keep accordion state in sync with URL
  useEffect(() => {
    const path = location.pathname;
    if (path.includes("/dashboard") || path.includes("/profile"))
      setOpenMenu("dashboard");
    else if (path.includes("/admission")) setOpenMenu("admission");
    else if (path.includes("/semester-registration")) setOpenMenu("semester");
    else if (path.includes("/readmission")) setOpenMenu("readmission");
    else if (path.includes("/payment")) setOpenMenu("payment");
    else if (path.includes("/grades")) setOpenMenu("grades");
    else if (path.includes("/clearances")) setOpenMenu("clearances");
    else if (path.includes("/transfers")) setOpenMenu("transfers");
    else if (path.includes("/evalution")) setOpenMenu("evalution");
  }, [location.pathname]);

  const toggleMenu = (menu: string) => {
    if (isCollapsed) {
      onExpand();
      return;
    }
    setOpenMenu(openMenu === menu ? "" : menu);
  };

  return (
    <aside
      className={`sidebar ${isOpen ? "open" : ""} ${isCollapsed ? "collapsed" : ""}`}
    >
      {/* <button
        type="button"
        className="sidebar-collapse-toggle"
        onClick={onToggleCollapse}
        title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        <Menu size={18} />
      </button> */}

      <div className="sidebar-header">
        <div className="logo-container">
          <img
            src="https://sis.uu.edu.et/img/uulogo.png"
            alt="Unity University Logo"
            className="logo"
          />
        </div>
        {!isCollapsed && (
          <>
            <span className="sis-text">SiS</span>
            <span className="sis-badge">2</span>
          </>
        )}
      </div>

      <nav className="sidebar-nav">
        <ul>
          {/* Dashboard Menu List */}
          <li
            className={`nav-item ${openMenu === "dashboard" ? "active" : ""}`}
          >
            <div
              className={`nav-link main-link ${openMenu === "dashboard" ? "active" : ""}`}
              onClick={() => toggleMenu("dashboard")}
            >
              <PieChart size={18} />
              <span>DASHBOARD</span>
            </div>
            {openMenu === "dashboard" && (
              <ul className="sub-menu">
                <li>
                  <NavLink
                    to="/profile/basic"
                    className={({ isActive }) =>
                      isActive ? "sub-link active" : "sub-link"
                    }
                  >
                    Basic Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/profile/academic"
                    className={({ isActive }) =>
                      isActive ? "sub-link active" : "sub-link"
                    }
                  >
                    Academic Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/help/view"
                    className={({ isActive }) =>
                      isActive ? "sub-link active" : "sub-link"
                    }
                  >
                    View Helps
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li
            className={`nav-item ${openMenu === "admission" ? "active" : ""}`}
          >
            <div
              className={`nav-link main-link ${openMenu === "admission" ? "active" : ""}`}
              onClick={() => toggleMenu("admission")}
            >
              <Contact size={18} />
              <span>ADMISSION</span>
            </div>
            {openMenu === "admission" && (
              <ul className="sub-menu">
                <li>
                  <NavLink
                    to="/admission/search"
                    className={({ isActive }) =>
                      isActive ? "sub-link active" : "sub-link"
                    }
                  >
                    List Accepted Students
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admission/admitted"
                    className={({ isActive }) =>
                      isActive ? "sub-link active" : "sub-link"
                    }
                  >
                    View Admitted Students
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admission/placement"
                    className={({ isActive }) =>
                      isActive ? "sub-link active" : "sub-link"
                    }
                  >
                    List Preference
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Semester Registration Menu List */}
          <li className={`nav-item ${openMenu === "semester" ? "active" : ""}`}>
            <div
              className={`nav-link main-link ${openMenu === "semester" ? "active" : ""}`}
              onClick={() => toggleMenu("semester")}
            >
              <FileText size={18} />
              <span>SEMESTER REGISTRATION</span>
            </div>
            {openMenu === "semester" && (
              <ul className="sub-menu">
                <li>
                  <NavLink
                    to="/semester-registration"
                    className={({ isActive }) =>
                      isActive ? "sub-link active" : "sub-link"
                    }
                    end
                  >
                    View All Registration
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/semester-registration/register"
                    className={({ isActive }) =>
                      isActive ? "sub-link active" : "sub-link"
                    }
                  >
                    Register
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Readmission Menu List */}
          <li
            className={`nav-item ${openMenu === "readmission" ? "active" : ""}`}
          >
            <div
              className={`nav-link main-link ${openMenu === "readmission" ? "active" : ""}`}
              onClick={() => toggleMenu("readmission")}
            >
              <RefreshCw size={18} />
              <span>READMISSION</span>
            </div>
            {openMenu === "readmission" && (
              <ul className="sub-menu">
                <li>
                  <NavLink
                    to="/readmission/course-adds"
                    className={({ isActive }) =>
                      isActive ? "sub-link active" : "sub-link"
                    }
                  >
                    Course Adds
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/readmission/course-drops"
                    className={({ isActive }) =>
                      isActive ? "sub-link active" : "sub-link"
                    }
                  >
                    Course Drops
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/readmission/course-exemptions"
                    className={({ isActive }) =>
                      isActive ? "sub-link active" : "sub-link"
                    }
                  >
                    Course Exemptions
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/readmission/requests"
                    className={({ isActive }) =>
                      isActive ? "sub-link active" : "sub-link"
                    }
                  >
                    Readmissions
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/readmission/substitutions"
                    className={({ isActive }) =>
                      isActive ? "sub-link active" : "sub-link"
                    }
                  >
                    Course Substitution Requests
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Payment Menu List */}
          <li className={`nav-item ${openMenu === "payment" ? "active" : ""}`}>
            <div
              className={`nav-link main-link ${openMenu === "payment" ? "active" : ""}`}
              onClick={() => toggleMenu("payment")}
            >
              <CreditCard size={18} />
              <span>PAYMENT</span>
            </div>
            {openMenu === "payment" && (
              <ul className="sub-menu">
                <li>
                  <NavLink
                    to="/payment/view"
                    className={({ isActive }) =>
                      isActive ? "sub-link active" : "sub-link"
                    }
                    end
                  >
                    View Payment
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li className={`nav-item ${openMenu === "grades" ? "active" : ""}`}>
            <div
              className={`nav-link main-link ${openMenu === "grades" ? "active" : ""}`}
              onClick={() => toggleMenu("grades")}
            >
              <Award size={18} />
              <span>GRADES</span>
            </div>
            {openMenu === "grades" && (
              <ul className="sub-menu">
                <li>
                  <NavLink
                    to="/grades/report"
                    className={({ isActive }) =>
                      isActive ? "sub-link active" : "sub-link"
                    }
                  >
                    My Grade Report
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/grades/makeup-request"
                    className={({ isActive }) =>
                      isActive ? "sub-link active" : "sub-link"
                    }
                  >
                    Request Makeup Exam
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/grades/makeup-requests"
                    className={({ isActive }) =>
                      isActive ? "sub-link active" : "sub-link"
                    }
                  >
                    View Makeup exam requests
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li
            className={`nav-item ${openMenu === "clearances" ? "active" : ""}`}
          >
            <div
              className={`nav-link main-link ${openMenu === "clearances" ? "active" : ""}`}
              onClick={() => toggleMenu("clearances")}
            >
              <ShieldCheck size={18} />
              <span>CLEARANCES</span>
            </div>
            {openMenu === "clearances" && (
              <ul className="sub-menu">
                <li>
                  <NavLink
                    to="/clearances"
                    className={({ isActive }) =>
                      isActive ? "sub-link active" : "sub-link"
                    }
                    end
                  >
                    Clear/Withdraw
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li
            className={`nav-item ${openMenu === "transfers" ? "active" : ""}`}
          >
            <div
              className={`nav-link main-link ${openMenu === "transfers" ? "active" : ""}`}
              onClick={() => toggleMenu("transfers")}
            >
              <ArrowRightLeft size={18} />
              <span>TRANSFERS</span>
            </div>
            {openMenu === "transfers" && (
              <ul className="sub-menu">
                <li className="sub-group-label">Department Transfers</li>
                <li>
                  <NavLink
                    to="/transfers"
                    className={({ isActive }) =>
                      isActive
                        ? "sub-link sub-nested active"
                        : "sub-link sub-nested"
                    }
                    end
                  >
                    View department transfer
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/transfers/request"
                    className={({ isActive }) =>
                      isActive
                        ? "sub-link sub-nested active"
                        : "sub-link sub-nested"
                    }
                  >
                    Request Transfer
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li
            className={`nav-item ${openMenu === "evalution" ? "active" : ""}`}
          >
            <div
              className={`nav-link main-link ${openMenu === "evalution" ? "active" : ""}`}
              onClick={() => toggleMenu("evalution")}
            >
              <CheckSquare size={18} />
              <span>EVALUTION</span>
            </div>
            {openMenu === "evalution" && (
              <ul className="sub-menu">
                <li>
                  <NavLink
                    to="/evalution/teacher"
                    className={({ isActive }) =>
                      isActive ? "sub-link active" : "sub-link"
                    }
                  >
                    Fill Evaluation Form
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
