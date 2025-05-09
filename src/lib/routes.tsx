import { Dashboard } from "@/pages/dashboard";
import { createBrowserRouter } from "react-router-dom";

import LoginPage from "@/pages/login/loginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
    errorElement: <div>Error</div>,
  },
  {
    path: "/patients",
    element: <div>Patients</div>,
    errorElement: <div>Error</div>,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <div>Error</div>,
  },
  {
    path: "/assign_patient",
    element: <div>Assign Patient</div>,
    errorElement: <div>Error</div>,
  },
  {
    path: "/calendar",
    element: <div>Calendar</div>,
    errorElement: <div>Error</div>,
  },
  {
    path: "/test",
    element: <div>Test</div>,
    errorElement: <div>Error</div>,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <div>Error</div>,
  },
]);
