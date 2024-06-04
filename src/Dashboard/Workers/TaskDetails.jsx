import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const TaskDetails = () => {
  const task = useLoaderData();
  // console.log(task);
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    const submittedTask = {
      id: data.taskId,
      title: data.title,
      url: data.url,
      payable: data.payable,
      date: data.date,
      details: data.details,
      workerName: data.workerName,
      user: data.userEmail,
      creatorName: data.creatorName,
      creatorEmail: data.creatorEmail,
      submissionDetails: data.submissionDetails,
    };
    axiosPublic.post("/submission", submittedTask).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Task Submitted Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        // navigate("dashboard/mySubmisssion");
      }
    });
  };
  return (
    <section className="dark:bg-stone-300 dark:text-gray-800">
      {user ? (
        <div className="container flex flex-col-reverse mx-auto lg:flex-row">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="container flex flex-col mx-auto space-y-3"
          >
            <fieldset className="grid grid-cols-4 gap-6 p-6  shadow-sm dark:bg-gray-50">
              <div className="col-span-full space-y-3">
                <div className="flex items-center text-xl">
                  <label className="font-bold">Task_ID:</label>
                  <input
                    id="taskId"
                    type="text"
                    name="taskId"
                    {...register("taskId", { required: true })}
                    defaultValue={task._id}
                    className="p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="flex items-center text-xl">
                  <label htmlFor="title" className="font-bold">
                    Title of the Task:
                  </label>
                  <input
                    id="title"
                    type="text"
                    name="title"
                    {...register("title", { required: true })}
                    defaultValue={task.title}
                    className="p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="flex items-center  text-base">
                  <label htmlFor="url" className="font-bold">
                    Image URL
                  </label>
                  <input
                    id="url"
                    type="text"
                    name="url"
                    {...register("url", { required: true })}
                    defaultValue={task.url}
                    className=" p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="flex items-center text-base">
                  <label htmlFor="payable" className="font-bold">
                    Payable Amount
                  </label>
                  <input
                    id="payable"
                    type="text"
                    name="payable"
                    {...register("payable", { required: true })}
                    defaultValue={task.payable}
                    className=" p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className=" flex items-center text-base">
                  <label htmlFor="user" className="font-bold">
                    Worker Name:
                  </label>
                  <input
                    id="workerName"
                    type="text"
                    name="workerName"
                    {...register("workerName", { required: true })}
                    defaultValue={user.displayName}
                    className="p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="flex items-center text-base">
                  <label className="font-bold">Worker Email:</label>
                  <input
                    type="email"
                    name="userEmail"
                    {...register("userEmail", { required: true })}
                    defaultValue={user.email}
                    className=" p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="flex items-center  text-base">
                  <label htmlFor="creatorName" className="font-bold">
                    Work Creator Name:
                  </label>
                  <input
                    id="creatorName"
                    type="text"
                    name="creatorName"
                    {...register("creatorName", { required: true })}
                    defaultValue={task.creatorName}
                    className=" p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="flex items-center text-base">
                  <label className="font-bold">Work Creator Email:</label>
                  <input
                    id="creatorEmail"
                    type="email"
                    name="creatorEmail"
                    {...register("creatorEmail", { required: true })}
                    defaultValue={task.email}
                    className=" p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <br />
                <div className="flex items-center  text-base">
                  <label htmlFor="date" className="font-bold">
                    Current Date:
                  </label>
                  <input
                    type="date"
                    name="date"
                    {...register("date", { required: true })}
                    defaultValue={task.date}
                  />
                </div>
                <div className="flex items-center  text-base">
                  <label htmlFor="details" className="font-bold">
                    Task Details:
                  </label>
                  <input
                    type="text"
                    name="details"
                    {...register("details", { required: true })}
                    defaultValue={task.details}
                  />
                </div>
                <div className=" flex flex-col text-start items-center text-base">
                  <label htmlFor="SubmissionDetails" className="font-bold">
                    Descriptions:
                  </label>
                  <textarea
                    rows={10}
                    id="submissionDetails"
                    name="submissionDetails"
                    {...register("submissionDetails", { required: true })}
                    className="w-full pl-1 border-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                  {errors.submissionDetails?.type === "required" && (
                    <p className="text-red-600" role="alert">
                      Submission Details is Required
                    </p>
                  )}
                </div>
                <input
                  type="submit"
                  className="w-full text-base text-white btn btn-info col-span-full"
                  value="Submit Task"
                />
              </div>
            </fieldset>
          </form>
        </div>
      ) : (
        navigate("/login")
      )}
    </section>
  );
};

export default TaskDetails;
