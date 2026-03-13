import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import DashboardLayout from "./components/layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import BasicProfile from "./pages/BasicProfile";
import AcademicProfile from "./pages/AcademicProfile";
import AdmissionSearch from "./pages/AdmissionSearch";
import AdmittedStudents from "./pages/AdmittedStudents";
import SemesterRegistration from "./pages/SemesterRegistration";
import CourseAdds from "./pages/CourseAdds";
import Payments from "./pages/Payments";
import Grades from "./pages/Grades";
import Clearances from "./pages/Clearances";
import Help from "./pages/Help";
import DepartmentTransfers from "./pages/DepartmentTransfers";
import { AuthProvider, useAuth } from "./context/AuthContext";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile/basic" element={<BasicProfile />} />
            <Route path="profile/academic" element={<AcademicProfile />} />
            <Route path="help" element={<Help />} />
            <Route path="help/view" element={<Help />} />

            <Route path="admission">
              <Route path="search" element={<AdmissionSearch />} />
              <Route path="admitted" element={<AdmittedStudents />} />
              <Route path="placement" element={<AdmittedStudents />} />
            </Route>

            {/* New Routes */}
            <Route path="semester-registration">
              <Route index element={<SemesterRegistration />} />
              <Route path="register" element={<SemesterRegistration />} />
            </Route>

            <Route path="readmission">
              <Route path="course-adds" element={<CourseAdds />} />
              <Route path="course-drops" element={<CourseAdds />} />
              <Route path="course-exemptions" element={<CourseAdds />} />
              <Route path="requests" element={<CourseAdds />} />
              <Route path="substitutions" element={<CourseAdds />} />
            </Route>

            <Route path="payment" element={<Payments />} />
            <Route path="payment/view" element={<Payments />} />

            <Route path="grades">
              <Route index element={<Grades />} />
              <Route path="report" element={<Grades />} />
              <Route path="makeup-request" element={<CourseAdds />} />
              <Route path="makeup-requests" element={<CourseAdds />} />
            </Route>

            <Route path="clearances">
              <Route index element={<Clearances />} />
              <Route path="withdraw" element={<Clearances />} />
            </Route>

            <Route path="transfers">
              <Route index element={<DepartmentTransfers />} />
              <Route path="request" element={<DepartmentTransfers />} />
            </Route>

            <Route path="evalution">
              <Route index element={<CourseAdds />} />
              <Route path="teacher" element={<CourseAdds />} />
            </Route>

            <Route
              path="*"
              element={<div className="not-found-page">Page Not Found</div>}
            />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
