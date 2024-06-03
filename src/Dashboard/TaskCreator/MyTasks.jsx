import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const MyTasks = () => {
  const axiosSecure = useAxiosSecure();
  const { data: tasks = [] } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const result = await axiosSecure.get("/tasks");
      return result.data;
    },
  });
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Task_Title</th>
            <th>Task_Count</th>
            <th>Payable_amount</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {tasks.map((task, index) => (
            <tr key={task._id}>
              <td>{index + 1}</td>
              <td>{task.title}</td>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>
                <FaRegEdit className="text-xl" />
              </td>
              <td>
                <MdDelete className="text-xl" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyTasks;
