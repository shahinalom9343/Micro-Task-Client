import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const TaskLists = () => {
  const axiosPublic = useAxiosPublic();
  const { data: tasks = [] } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const result = await axiosPublic.get("/tasks");
      return result.data;
    },
  });
  return (
    <div>
      <div>
        <h3 className="text-xl text-center my-2">All Available Tasks</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
        {tasks.map((task) => (
          <div
            key={task._id}
            className="card bg-base-100 shadow-xl rounded-xl my-4"
          >
            <figure>
              <img className="w-full" src={task.url} />
            </figure>
            <div className="card-body bg-stone-300">
              <h2 className="card-title">Title:{task.title}</h2>
              <p>Quantity:{task.quantity}</p>
              <p>Creator of the Task: {task.creatorName}</p>
              <p>Completion Date: {task.date}</p>
              <p>Payable Amount: {task.payable}</p>
              <div className="card-actions">
                <Link
                  to={`/taskDetails/${task._id}`}
                  className="btn w-full btn-primary"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskLists;
