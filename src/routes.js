import { createBrowserRouter } from "react-router"; // مطمئن شو که از "react-router-dom" ایمپورت می‌کنی نه "react-router"
import App from "./App.jsx";
import Users from "./pages/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/users",
    Component: Users,
  },
]);

export default router;
