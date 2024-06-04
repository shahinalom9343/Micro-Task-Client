import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const MyTasks = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const result = await axiosSecure.get("/tasks");
      return result.data;
    },
  });

  // handleDeleteUser
  const handleDelete = (task) => {
    Swal.fire({
      title: "Are you sure deleted this Task?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete this!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/tasks/${task._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Task has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="overflow-x-auto md:mt-10 border-2">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="bg-yellow-50 font-bold text-black">
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
          {tasks
            .filter((singleTask) => singleTask.email === user?.email)
            .map((task, index) => (
              <tr key={task._id}>
                <td>{index + 1}</td>
                <td>{task.title}</td>
                <td>{task.quantity}</td>
                <td>{task.payable}</td>
                <td>
                  <Link to={`updateTask/${task._id}`}>
                    <FaRegEdit className="text-xl" />
                  </Link>
                </td>
                <td>
                  <button onClick={() => handleDelete(task)}>
                    <MdDelete className="text-xl" />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyTasks;
