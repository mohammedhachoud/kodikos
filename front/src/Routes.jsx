import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const InMeetingDashboard = React.lazy(() => import("pages/InMeetingDashboard"));
const TasksDashboardOpenedTask = React.lazy(() => import("pages/TasksDashboardOpenedTask"));
const HomeDashboardNotification = React.lazy(() => import("pages/HomeDashboardNotification"));
const ProfileDashboard = React.lazy(() => import("pages/ProfileDashboard"));
const MeetingsDashboard = React.lazy(() => import("pages/MeetingsDashboard"));
const MessagesDashboard = React.lazy(() => import("pages/MessagesDashboard"));
const TasksDashboard = React.lazy(() => import("pages/TasksDashboard"));
const ScheduleDashboard = React.lazy(() => import("pages/ScheduleDashboard"));
const LoginPage = React.lazy(() => import("pages/LoginPage"));
const HomeDashboard = React.lazy(() => import("pages/HomeDashboard"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<HomeDashboard />} />
          <Route path="*" element={<NotFound/>} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/scheduledashboard" element={<ScheduleDashboard />} />
          <Route path="/tasksdashboard" element={<TasksDashboard />} />
          <Route path="/messagesdashboard" element={<MessagesDashboard />} />
          <Route path="/meetingsdashboard" element={<MeetingsDashboard />} />
          <Route path="/profiledashboard" element={<ProfileDashboard />} />
          <Route
            path="/homedashboardnotification"
            element={<HomeDashboardNotification />}
          />
          <Route
            path="/tasksdashboardopenedtask"
            element={<TasksDashboardOpenedTask />}
          />
          <Route path="/inmeetingdashboard" element={<InMeetingDashboard />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
