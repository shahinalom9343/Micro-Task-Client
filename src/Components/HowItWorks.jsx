import { FaRegistered, FaTasks } from "react-icons/fa";
import { FcMoneyTransfer } from "react-icons/fc";

const HowItWorks = () => {
  return (
    <div className="my-10">
      <div className="my-3">
        <h2 className="text-3xl font-bold text-center">How it Works</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 border-2 bg-cyan-100">
        {/* registered user */}
        <div className="flex flex-col card bg-stone-100 shadow-xl space-y-6 max-w-xl p-8 rounded-xl lg:p-12 dark:bg-gray-50 dark:text-gray-800">
          <div className="flex flex-col items-center w-full">
            <h2 className="text-3xl font-semibold text-center">1. Register</h2>
          </div>
          <div className="flex text-5xl items-center justify-center">
            <FaRegistered></FaRegistered>
          </div>
          <div className="text-base text-justify">
            <p>
              Start with a warm welcome to the user and express gratitude for
              their interest in joining your website.Provide clear instructions
              on how to register. This might include filling out a form with
              basic information such as name, email address, and password.
            </p>
          </div>
        </div>

        {/* Completed tasks */}
        <div className="flex flex-col card bg-violet-100 shadow-xl space-y-6 max-w-xl p-8 rounded-xl lg:p-12 dark:bg-gray-50 dark:text-gray-800">
          <div className="flex flex-col items-center w-full">
            <h2 className="text-3xl font-semibold text-center">
              2. Complete Tasks
            </h2>
          </div>
          <div className="flex text-5xl items-center justify-center">
            <FaTasks></FaTasks>
          </div>
          <div className="text-base text-justify">
            <p>
              Start with a warm welcome to the user and express gratitude for
              their interest in joining your website.Provide clear instructions
              on how to register. This might include filling out a form with
              basic information such as name, email address, and password.
            </p>
          </div>
        </div>

        {/* Earn rewards */}
        <div className="flex flex-col card bg-pink-100 shadow-xl space-y-6 max-w-xl p-8 rounded-xl lg:p-12 dark:bg-gray-50 dark:text-gray-800">
          <div className="flex flex-col items-center w-full">
            <h2 className="text-3xl font-semibold text-center">
              3. Earn Money
            </h2>
          </div>
          <div className="flex text-5xl items-center justify-center">
            <FcMoneyTransfer />
          </div>
          <div className="text-base text-justify">
            <p>
              Select the tasks that interest you and match your expertise.
              Whether you're a quick typist, a creative thinker, or a meticulous
              researcher, there's a task waiting for you.Get rewarded for your
              efforts! As you successfully complete tasks, you'll earn money
              that can be deposited directly into your account. The more tasks
              you complete, the more you can earn.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
