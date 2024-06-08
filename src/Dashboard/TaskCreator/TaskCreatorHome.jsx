import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaCoins, FaTasks, FaUsers } from "react-icons/fa";

const TaskCreatorHome = () => {
  const axiosSecure = useAxiosSecure();
  // Fetch task creator Stat Data here
  const { data: statData = {} } = useQuery({
    queryKey: ["statData"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/creator-statistics");
      return data;
    },
  });
  return (
    <div className="md:my-6">
      <Helmet>
        <title>Dashboard | TaskCreator Home</title>
      </Helmet>
      <div className="container grid grid-cols-1 gap-4 mx-auto sm:grid-cols-2 xl:grid-cols-3">
        <div className="flex p-1 bg-blue-200  rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
          <div className="flex items-center justify-center p-2  rounded-lg sm:p-4 dark:bg-violet-600">
            <FaCoins className="text-5xl"></FaCoins>
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold leading-none">
              {statData.totalCoins}
            </p>
            <p className="capitalize">Available Coins</p>
          </div>
        </div>
        <div className="flex p-2 space-x-4 bg-cyan-200 rounded-lg  dark:bg-gray-50 dark:text-gray-800">
          <div className="flex justify-center items-center p-2 rounded-lg sm:p-4 dark:bg-violet-600">
            <FaTasks className="text-5xl" />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold leading-none">
              {statData.totalPendingTasks}
            </p>
            <p className="capitalize">Pending Tasks</p>
          </div>
        </div>
        <div className="flex bg-red-200 p-10 rounded-lg  dark:bg-gray-50 dark:text-gray-800">
          <div className="flex justify-center p-2 rounded-lg sm:p-4 dark:bg-violet-600">
            <FaUsers className="text-5xl" />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold leading-none">
              {statData.totalUsers}
            </p>
            <p className="capitalize">Total Payment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCreatorHome;
