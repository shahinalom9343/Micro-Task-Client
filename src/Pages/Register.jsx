import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
// import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser } = useAuth();
  // const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const createuser = result.user;
      console.log(createuser);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User Created Successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
      navigate("/login");
      // const userInfo = {
      //   name: data.name,
      //   email: data.email,
      // };
      // updateUserProfile(data.name, data.photoURL)
      //   .then(() => {
      //     axiosPublic.post("/users", userInfo).then((res) => {
      //       if (res.data.insertedId) {
      //         Swal.fire({
      //           position: "top-end",
      //           icon: "success",
      //           title: "User Created Successfully!",
      //           showConfirmButton: false,
      //           timer: 1500,
      //         });
      //         reset();
      //       }
      //       navigate("/login");
      //     });
      //   })
      //   .catch((error) => {
      //     alert(error);
      //   });
    });
  };
  return (
    <div className="border-2 mx-auto border-red-300  w-full max-w-xl mb-4 p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
      <h1 className="text-2xl font-bold text-center">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label htmlFor="username" className="block dark:text-gray-600">
            Username*
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            name="name"
            id="name"
            placeholder="Username"
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-600" role="alert">
              First Name is Required
            </p>
          )}
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="photoURL" className="block dark:text-gray-600">
            PhotoURL*
          </label>
          <input
            type="text"
            {...register("photoURL", { required: true })}
            name="photoURL"
            id="photoURL"
            placeholder="photoURL"
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
          {errors.photoURL?.type === "required" && (
            <p className="text-red-600" role="alert">
              Your PhotoURL is Required
            </p>
          )}
        </div>
        <div className="space-y-1 text-sm">
          <label className="block dark:text-gray-600">Email*</label>
          <input
            type="email"
            {...register("email", { required: true })}
            name="email"
            id="email"
            placeholder="email"
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-600" role="alert">
              Email is Required
            </p>
          )}
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block dark:text-gray-600">
            Password*
          </label>
          <input
            type="password"
            {...register("password", {
              required: true,
              pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
            })}
            name="password"
            id="password"
            placeholder="****"
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-600" role="alert">
              Password must contains at least one uppercase,one lowercase,one
              character and one special characters
            </p>
          )}
        </div>
        <input
          type="submit"
          value="Create an Account"
          className="block text-white bg-fuchsia-600 w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600"
        ></input>
      </form>

      <p className="text-base text-center sm:px-6 dark:text-gray-600">
        Already have an account?
        <Link
          rel="noopener noreferrer"
          to="/login"
          className="underline text-emerald-500 font-bold dark:text-gray-800"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
