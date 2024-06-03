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
import AddTasks from "../Dashboard/TaskCreator/AddTasks";
import MyTasks from "../Dashboard/TaskCreator/MyTasks";
import ManageUsers from "../Dashboard/Admin/ManageUsers";
import AdminHome from "../Dashboard/Admin/AdminHome";
import ManageTasks from "../Dashboard/Admin/ManageTasks";
import Common from "../Dashboard/Common";
import WithDrawals from "../Dashboard/Workers/WithDrawals";

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
        index: true,
        element: <Common></Common>,
      },
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
      {
        path: "withdrawals",
        element: <WithDrawals></WithDrawals>,
      },

      // for task creators
      {
        path: "addTasks",
        element: <AddTasks></AddTasks>,
      },
      {
        path: "myTasks",
        element: <MyTasks></MyTasks>,
      },

      // for admin
      {
        index: true,
        element: <Common></Common>,
      },
      {
        path: "adminHome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "manageTask",
        element: <ManageTasks></ManageTasks>,
      },
    ],
  },
]);

export default router;
