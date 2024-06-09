import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const AddTasks = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const axiosSecure = useAxiosSecure();

  const onSubmit = (data) => {
    console.log(data);
    const taskInfo = {
      title: data.title,
      url: data.url,
      quantity: data.quantity,
      payable: data.payable,
      date: data.date,
      details: data.details,
      info: data.info,
      creatorName: data.creatorName,
      email: data.email,
    };
    axiosSecure.post("/tasks", taskInfo).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Task Created Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
    });
    reset();
    navigate("/dashboard/myTasks");
  };
  return (
    <section className=" dark:bg-gray-100 dark:text-gray-900">
      <Helmet>
        <title>Dashboard | AddTask</title>
      </Helmet>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container flex flex-col mx-auto space-y-12"
      >
        <fieldset className="my-3 space-y-4 rounded-md shadow-sm dark:bg-gray-50">
          <div className="space-y-2">
            <p className="font-extrabold text-2xl text-center text-pink-700">
              Create A Task
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 border-2 px-6 rounded-lg py-2 bg-slate-400">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="title" className="text-sm">
                Task Title
              </label>
              <input
                id="title"
                {...register("title", { required: true })}
                name="title"
                type="text"
                placeholder="title"
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
              {errors.title?.type === "required" && (
                <p className="text-red-600" role="alert">
                  Task title is Required
                </p>
              )}
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="quantity" className="text-sm">
                Task Quantity
              </label>
              <input
                id="quantity"
                {...register("quantity", { required: true })}
                name="quantity"
                type="number"
                placeholder="Quantity"
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="payable" className="text-sm">
                Payable Amount(/task)
              </label>
              <input
                id="payable"
                {...register("payable", { required: true })}
                name="payable"
                type="number"
                placeholder="Amount"
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="date" className="text-sm">
                Completion Date
              </label>
              <input
                id="date"
                {...register("date", { required: true })}
                name="date"
                type="date"
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="url" className="text-sm">
                Task Image URL
              </label>
              <input
                id="url"
                {...register("url", { required: true })}
                name="url"
                type="text"
                placeholder="URL"
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="info" className="text-sm">
                Submission Info
              </label>
              <input
                id="info"
                {...register("info", { required: true })}
                name="info"
                type="text"
                placeholder="Info"
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full flex flex-col">
              <label htmlFor="details" className="text-sm">
                Task Details:
              </label>
              <textarea
                {...register("details", { required: true })}
                name="details"
                rows={10}
                id="details"
              ></textarea>
            </div>
            <div className="col-span-full sm:col-span-3">
              <label className="text-sm">TaskCreator Name</label>
              <input
                {...register("creatorName", { required: true })}
                name="creatorName"
                type="text"
                defaultValue={user.displayName}
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="email" className="text-sm">
                Creator Email
              </label>
              <input
                id="email"
                {...register("email", { required: true })}
                name="email"
                type="email"
                defaultValue={user.email}
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full">
              <input
                type="submit"
                className="btn btn-primary w-full text-white col-span-full sm:col-span-3"
                value="Add Task"
              />
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default AddTasks;
