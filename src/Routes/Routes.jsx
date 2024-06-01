import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import PrivateRoutes from "./PrivateRoutes";
import DashBoard from "../Layout/DashBoard";
import TaskLists from "../Dashboard/Workers/TaskLists";
import MySubmission from "../Dashboard/Workers/MySubmission";
import WorkerHome from "../Dashboard/Workers/WorkerHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashBoard></DashBoard>
      </PrivateRoutes>
    ),
    children: [
      // for workers
      {
        path: "workerHome",
        element: <WorkerHome></WorkerHome>,
      },
      {
        path: "taskLists",
        element: <TaskLists></TaskLists>,
      },
      {
        path: "mySubmisssion",
        element: <MySubmission></MySubmission>,
      },
      // for admin
    ],
  },
]);

export default router;
