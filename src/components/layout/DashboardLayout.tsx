import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleMenuClick = () => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      setSidebarOpen((prev) => !prev);
      return;
    }
    setSidebarCollapsed((prev) => !prev);
  };

  const expandSidebar = () => setSidebarCollapsed(false);

  return (
    <div
      className={`app-container ${sidebarCollapsed ? "sidebar-collapsed" : ""}`}
    >
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      <Sidebar
        isOpen={sidebarOpen}
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed((prev) => !prev)}
        onExpand={expandSidebar}
      />

      <div className="main-content-wrapper">
        <Header onMenuClick={handleMenuClick} />
        <main className="main-content">
          <Outlet />
        </main>
        <footer className="footer">
          <p>Copyright &copy; 2012 - 2026</p>
        </footer>
      </div>
    </div>
  );
};

export default DashboardLayout;
