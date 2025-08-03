import { BrowserRouter, Route, Routes } from "react-router";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AllJobs from "./pages/AllJobs";
import PrivateRoute from "./components/PrivateRoute";

import Profile from "./pages/Profile";
import AppliedJobs from "./pages/AppliedJobs";

import EditJob from "./pages/EditJob";
import CreateJob from "./pages/CreateJob";
import CreatedJobs from "./pages/CreatedJobs";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/jobs"
          element={
            <PrivateRoute>
              <AllJobs />
            </PrivateRoute>
          }
        />

        {/* Job Seeker Routes */}
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/applied-jobs"
          element={
            <PrivateRoute>
              <AppliedJobs />
            </PrivateRoute>
          }
        />

        {/* Job Poster Routes */}
        <Route
          path="/create-job"
          element={
            <PrivateRoute>
              <CreateJob />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit-job/:id"
          element={
            <PrivateRoute>
              <EditJob />
            </PrivateRoute>
          }
        />
        <Route
          path="/created-jobs"
          element={
            <PrivateRoute>
              <CreatedJobs />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
