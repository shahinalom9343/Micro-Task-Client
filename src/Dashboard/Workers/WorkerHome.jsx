import { FaCoins } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";

const WorkerHome = () => {
  return (
    <div className="bg-slate-400 rounded-xl">
      <section className="p-6 my-6 dark:bg-gray-100 dark:text-gray-800">
        <div className="container grid grid-cols-1 gap-4 mx-auto sm:grid-cols-2 xl:grid-cols-3">
          <div className="flex bg-red-200 p-10 rounded-lg  dark:bg-gray-50 dark:text-gray-800">
            <div className="flex justify-center p-2 rounded-lg sm:p-4 dark:bg-violet-600">
              <FaCoins className="text-5xl" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none">150</p>
              <p className="capitalize">Available Coins</p>
            </div>
          </div>
          <div className="flex p-1 bg-blue-200  rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
            <div className="flex items-center justify-center p-2  rounded-lg sm:p-4 dark:bg-violet-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="h-9 w-9 dark:text-gray-100"
              >
                <polygon points="160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039"></polygon>
                <path d="M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z"></path>
                <path d="M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z"></path>
              </svg>
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none">200</p>
              <p className="capitalize">Total Submission</p>
            </div>
          </div>
          <div className="flex p-2 space-x-4 bg-cyan-200 rounded-lg  dark:bg-gray-50 dark:text-gray-800">
            <div className="flex justify-center items-center p-2 rounded-lg sm:p-4 dark:bg-violet-600">
              <FaMoneyCheckDollar className="text-5xl" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none">7500</p>
              <p className="capitalize">Total Earnings</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkerHome;
