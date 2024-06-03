import { FaCoins, FaUsers } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const result = await axiosSecure.get("/users");
      return result.data;
    },
  });
  return (
    <div>
      <div>
        <h3 className="my-6 text-3xl font-bold text-center text-cyan-600">
          Admin Stats
        </h3>
      </div>
      <div className="bg-slate-400 rounded-xl">
        <section className="p-6 my-6 dark:bg-gray-100 dark:text-gray-800">
          <div className="container grid grid-cols-1 gap-4 mx-auto sm:grid-cols-2 xl:grid-cols-3">
            <div className="flex bg-red-200 p-10 rounded-lg  dark:bg-gray-50 dark:text-gray-800">
              <div className="flex justify-center p-2 rounded-lg sm:p-4 dark:bg-violet-600">
                <FaUsers className="text-5xl" />
              </div>
              <div className="flex flex-col justify-center align-middle">
                <p className="text-3xl font-semibold leading-none">
                  {users.length}
                </p>
                <p className="capitalize">Total Users</p>
              </div>
            </div>
            <div className="flex p-1 bg-blue-200  rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
              <div className="flex items-center justify-center p-2  rounded-lg sm:p-4 dark:bg-violet-600">
                <FaCoins className="text-5xl"></FaCoins>
              </div>
              <div className="flex flex-col justify-center align-middle">
                <p className="text-3xl font-semibold leading-none">200</p>
                <p className="capitalize">Total Coins</p>
              </div>
            </div>
            <div className="flex p-2 space-x-4 bg-cyan-200 rounded-lg  dark:bg-gray-50 dark:text-gray-800">
              <div className="flex justify-center items-center p-2 rounded-lg sm:p-4 dark:bg-violet-600">
                <FaMoneyCheckDollar className="text-5xl" />
              </div>
              <div className="flex flex-col justify-center align-middle">
                <p className="text-3xl font-semibold leading-none">7500</p>
                <p className="capitalize">Total Payment</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminHome;