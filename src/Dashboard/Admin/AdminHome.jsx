import { FaCoins, FaUsers } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();
  // Fetch Admin Stat Data here
  const { data: statData = {} } = useQuery({
    queryKey: ["statData"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/admin-stat");
      return data;
    },
  });
  return (
    <div>
      <Helmet>
        <title>Dashboard | AdminHome</title>
      </Helmet>
      <div>
        <h3 className="my-1 md:my-6 text-3xl font-bold text-center text-cyan-600">
          Admin Stats
        </h3>
        <div className="bg-slate-400 rounded-xl">
          <section className="p-6 my-6 dark:bg-gray-100 dark:text-gray-800">
            <div className="container grid grid-cols-1 gap-4 mx-auto sm:grid-cols-2 xl:grid-cols-3">
              <div className="flex bg-red-200 p-10 rounded-lg  dark:bg-gray-50 dark:text-gray-800">
                <div className="flex justify-center p-2 rounded-lg sm:p-4 dark:bg-violet-600">
                  <FaUsers className="text-5xl" />
                </div>
                <div className="flex flex-col justify-center align-middle">
                  <p className="text-3xl font-semibold leading-none">
                    {statData.totalUsers}
                  </p>
                  <p className="capitalize">Total Users</p>
                </div>
              </div>
              <div className="flex p-1 bg-blue-200  rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                <div className="flex items-center justify-center p-2  rounded-lg sm:p-4 dark:bg-violet-600">
                  <FaCoins className="text-5xl"></FaCoins>
                </div>
                <div className="flex flex-col justify-center align-middle">
                  <p className="text-3xl font-semibold leading-none">
                    {statData.totalCoins}
                  </p>
                  <p className="capitalize">Total Coins</p>
                </div>
              </div>
              <div className="flex p-2 space-x-4 bg-cyan-200 rounded-lg  dark:bg-gray-50 dark:text-gray-800">
                <div className="flex justify-center items-center p-2 rounded-lg sm:p-4 dark:bg-violet-600">
                  <FaMoneyCheckDollar className="text-5xl" />
                </div>
                <div className="flex flex-col justify-center align-middle">
                  <p className="text-3xl font-semibold leading-none">
                    {statData.totalPayments}
                  </p>
                  <p className="capitalize">Total Payment</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
