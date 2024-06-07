import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaTrash } from "react-icons/fa";
import { FcViewDetails } from "react-icons/fc";
import Swal from "sweetalert2";

const ManageTasks = () => {
  const axiosSecure = useAxiosSecure();
  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const result = await axiosSecure.get("/tasks");
      return result.data;
    },
  });

  // handleDelete Task
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
            refetch();
          }
        });
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>Dashboard | ManageTasks</title>
      </Helmet>
      <h3 className="text-center mt-4 font-semibold text-lime-700 text-3xl">
        Total Tasks: {tasks.length}
      </h3>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead className="dark:bg-gray-300 border-b-2 border-b-orange-200 text-base">
              <tr className="text-left">
                <th className="p-3">TaskTitle</th>
                <th className="p-3">TaskCreator Name</th>
                <th className="p-3">Task Quantity</th>
                <th className="p-3">Coin Needed</th>
                <th className="p-3">Availability</th>
                <th className="p-3 text-center">View Task</th>
                <th className="p-3 text-center">Delete Tasks</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr
                  key={task._id}
                  className="border-b text-start border-opacity-20 dark:border-gray-300 dark:bg-gray-50"
                >
                  <td className="p-3">
                    <p>{task.title}</p>
                  </td>
                  <td className="p-3">
                    <p>{task.creatorName}</p>
                  </td>
                  <td className="p-3">
                    <p>{task.quantity}</p>
                  </td>
                  <td className="p-3">120</td>
                  <td className="p-3 ">
                    <p>$15,792</p>
                  </td>
                  <td className="p-1">
                    <span className="px-3 py-1 text-xl font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                      <button
                        className="btn"
                        onClick={() =>
                          document.getElementById("my_modal_3").showModal()
                        }
                      >
                        <FcViewDetails className="text-2xl"></FcViewDetails>
                      </button>
                      <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-outline absolute right-2 top-2">
                              ✕
                            </button>
                          </form>
                          <div>
                            <img className="w-11/12" src={task.url} />
                          </div>
                          <div className="text-base font-normal">
                            <h3 className="font-bold text-lg">{task.title}</h3>
                            <p className="py-1">Quantity:{task.quantity}</p>
                            <p className="py-1">
                              Payable Amount: {task.payable}
                            </p>
                            <p className="py-1">Details:{task.details}</p>
                            <p className="py-1">Created taskDate:{task.date}</p>
                            <p className="py-1">Info:{task.info}</p>
                            <p className="py-1">
                              Creator Name:{task.creatorName}
                            </p>
                          </div>
                        </div>
                      </dialog>
                    </span>
                  </td>
                  <td className="p-1">
                    <span className="px-3 py-1 text-xl font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                      <button
                        className="btn btn-ghost"
                        onClick={() => handleDelete(task)}
                      >
                        <FaTrash className="text-red-500 text-2xl"></FaTrash>
                      </button>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageTasks;
