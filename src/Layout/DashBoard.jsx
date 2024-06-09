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
import { IoMenu } from "react-icons/io5";
import { PiHandWithdrawFill } from "react-icons/pi";
import useRole from "../Hooks/useRole";
import { MdOutlinePayment } from "react-icons/md";
import { GiTwoCoins } from "react-icons/gi";
import { Helmet } from "react-helmet-async";
import Footer from "../Components/Footer";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";

const DashBoard = () => {
  const { user } = useAuth();
  const [role] = useRole();
  const [notification, setNotification] = useState([]);
  // const axiosSecure = useAxiosSecure();
  // const { data: statData = {} } = useQuery({
  //   queryKey: ["statData"],
  //   queryFn: async () => {
  //     const { data } = await axiosSecure.get("/creator-statistics");
  //     return data;
  //   },
  // });
  const url = `http://localhost:5000/notification?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setNotification(data);
      });
  }, [url]);

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
          <div className="flex justify-around">
            <div>
              <button className="btn">
                Available Coin
                <div className="badge badge-primary">1200</div>
              </button>
            </div>

            <div>
              <img
                src={user?.photoURL}
                className="h-16 w-16 rounded-full"
                alt=""
              />
            </div>
          </div>
          <div className="text-white flex justify-around items-center">
            <div>
              UserRole:
              <button className="badge p-2 badge-secondary badge-outline text-lg font-semibold">
                {role}
              </button>
            </div>
            <div>{user?.displayName || user?.name}</div>
          </div>
        </div>
        <details className="dropdown">
          <summary className="m-1 btn">
            Notifications
            <div className="badge badge-secondary">{notification.length}</div>
          </summary>
          {notification.map((singleNotification) => (
            <div key={singleNotification._id} className="border border-y-2">
              <p>{singleNotification.status}</p>
            </div>
          ))}
        </details>
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
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
