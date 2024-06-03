import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { ToastContainer, toast } from "react-toastify";

const UpdateTask = () => {
  const updateTask = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  // console.log(updateTask);
  const handleUpdateTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const quantity = form.quantity.value;
    const details = form.details.value;

    const taskData = {
      title,
      quantity,
      details,
    };
    axiosSecure.put(`/tasks/${updateTask._id}`, taskData).then((res) => {
      if (res.data.modifiedCount > 0) {
        toast("Task Updated Successfully");
      }
    });
  };
  return (
    <div>
      <form
        onSubmit={handleUpdateTask}
        className="container flex flex-col mx-auto space-y-12"
      >
        <fieldset className=" p-6 rounded-md shadow-sm dark:bg-gray-50">
          <div>
            <p className="text-center text-stone-600 text-2xl font-semibold my-2">
              Update task Form :
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-6 border-2 bg-pink-100 p-4 rounded-xl">
            <div className="col-span-6 sm:col-span-6">
              <label className="text-xl ">Title of the Task</label>
              <input
                type="text"
                name="title"
                defaultValue={updateTask.title}
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-6 sm:col-span-6">
              <label className="text-xl ">Submission Count</label>
              <input
                type="number"
                name="quantity"
                defaultValue={updateTask.quantity}
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <br />
            <div className="col-span-full ">
              <label htmlFor="details" className="text-xl ">
                Task Details
              </label>
              <textarea
                id="details"
                type="text"
                name="details"
                defaultValue={updateTask.details}
                className="w-full pl-1 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <input
              type="submit"
              className="text-base text-white btn btn-secondary col-span-full"
              value="Update Task"
            />
          </div>
        </fieldset>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default UpdateTask;
