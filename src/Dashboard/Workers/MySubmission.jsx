import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";

const MySubmission = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { data: tasks = [] } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const result = await axiosPublic.get("/submission");
      return result.data;
    },
  });
  return (
    <div className="overflow-x-auto md:mt-10 border-2">
      <div>
        <h3 className="text-2xl font-semibold text-center my-5">
          My Submitted tasks
        </h3>
      </div>
      <table className="table">
        {/* head */}
        <thead>
          <tr className="bg-yellow-50 font-bold text-black">
            <th></th>
            <th>Task_Title</th>
            <th>Payable_amount</th>
            <th>Image</th>
            <th>Posted Date</th>
            <th>Worker Name</th>
            <th>Task Creator</th>
            <th>Creator Email</th>
          </tr>
        </thead>
        <tbody className="bg-gray-600 text-white">
          {/* row 1 */}
          {tasks
            .filter((singleTask) => singleTask.user === user?.email)
            .map((task, index) => (
              <tr key={task._id}>
                <td>{index + 1}</td>
                <td>{task.title}</td>
                <td>{task.payable}</td>
                <td>
                  <img className="h-14 w-14" src={task.url} />
                </td>
                <td>{task.date}</td>
                <td>{task.workerName}</td>
                <td>{task.creatorName}</td>
                <td>{task.creatorEmail}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MySubmission;
