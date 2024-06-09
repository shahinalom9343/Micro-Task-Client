import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const WorkerHome = () => {
  const axiosSecure = useAxiosSecure();
  // Fetch Admin Stat Data here
  const { data: statData = {} } = useQuery({
    queryKey: ["statData"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/worker-stat");
      return data;
    },
  });
  return (
    <div className="bg-slate-400 flex justify-center my-10 rounded-xl">
      <Helmet>
        <title>Dashboard | WorkerHome</title>
      </Helmet>
      <div className="stats shadow my-10 max-w-full">
        <div className="stat place-items-center">
          <div className="stat-title">Available Coins</div>
          <div className="stat-value">{statData.totalCoins}</div>
          <div className="stat-desc"></div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Total Submission</div>
          <div className="stat-value text-secondary">
            {statData.totalSubmission}
          </div>
          <div className="stat-desc text-secondary"></div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Total Earning</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc"></div>
        </div>
      </div>
    </div>
  );
};

export default WorkerHome;
