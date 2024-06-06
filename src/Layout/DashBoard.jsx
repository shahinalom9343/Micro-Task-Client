import {
  FaAddressBook,
  FaDonate,
  FaHome,
  FaList,
  FaSitemap,
  FaTasks,
  FaUsers,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import logo from "../../public/logo.png";
import useAuth from "../Hooks/useAuth";
import { IoMenu, IoNotifications } from "react-icons/io5";
import { PiHandWithdrawFill } from "react-icons/pi";
import useRole from "../Hooks/useRole";
import { MdOutlinePayment } from "react-icons/md";
import { GiTwoCoins } from "react-icons/gi";
import { Helmet } from "react-helmet-async";

const DashBoard = () => {
  const { user } = useAuth();
  const [role] = useRole();
  // console.log(role);
  return (
    <div>
      <Helmet>
        <title>PickTask Rush | Dashboard</title>
      </Helmet>
      <div className="grid grid-cols-7 gap-8 bg-violet-500 py-2">
        <div className="col-span-2 text-white text-2xl font-medium flex justify-center items-center">
          <div className="">
            <img src={logo} className="h-16 w-16" />
          </div>
          <div className="font-bold">PicoTask Rush</div>
        </div>
        <div className="col-span-4  px-4 text-white">
          <div className="flex gap-2 justify-end">
            <button className="btn">
              Available Coin
              <div className="badge badge-primary">+0</div>
            </button>
            |
            <img
              src={user?.photoURL}
              className="h-16 w-16 rounded-full"
              alt=""
            />
          </div>
          <div className="text-white flex justify-end">
            <span>
              UserRole:{" "}
              <button className="badge badge-secondary badge-outline">
                Worker
              </button>
            </span>{" "}
            | {user.displayName}
          </div>
        </div>
        <div className="col-span-1 border-l-emerald-600 text-white px-2 justify-center items-center">
          <IoNotifications />
          Notifications
        </div>
      </div>
      <div className="grid grid-cols-7 gap-8">
        <div className="col-span-2 bg-emerald-700  min-h-screen text-white">
          <ul className="menu p-5 font-medium text-lg">
            {role === "admin" && (
              <>
                <li>
                  <Link to="/dashboard/adminHome">
                    <FaHome></FaHome>
                    Admin Home
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/manageUsers">
                    <FaUsers></FaUsers>
                    Manage Users
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/manageTask">
                    <FaTasks></FaTasks>
                    Manage Task
                  </Link>
                </li>
              </>
            )}
            {role === "taskCreator" && (
              <>
                <li>
                  <Link to="/dashboard/taskCreatorHome">
                    <FaHome></FaHome>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/addTasks">
                    <FaAddressBook />
                    Add Task
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/myTasks">
                    <FaSitemap />
                    My Tasks
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/purchaseCoins">
                    <GiTwoCoins />
                    Purchase Coins
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/paymentHistory">
                    <MdOutlinePayment />
                    Payment History
                  </Link>
                </li>
              </>
            )}
            {role === "worker" && (
              <>
                <li>
                  <Link to="/dashboard/workerHome">
                    <FaHome></FaHome>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/taskLists">
                    <FaList></FaList>
                    TaskList
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/mySubmisssion">
                    <FaDonate></FaDonate>
                    My Submissions
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/withdrawals">
                    <PiHandWithdrawFill />
                    Withdrawals
                  </Link>
                </li>
              </>
            )}
          </ul>
          <div className="divider">OR</div>
          <div className="menu p-5  font-medium text-lg">
            <li>
              <Link to="/">
                <IoMenu></IoMenu>
                Menu
              </Link>
            </li>
          </div>
        </div>
        <div className="col-span-5">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
