import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, updateUserProfile, setLoading } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    try {
      setLoading(true);

      //2. User Registration
      createUser(email, password);
      updateUserProfile(name, photoURL);
      navigate("/login");
      toast.success("User Created Successfully!!");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
    // createUser(email, password).then((result) => {
    //   const createuser = result.user;
    //   console.log(createuser);

    //   const userInfo = {
    //     photoURL: data.photoURL,
    //     name: data.name,
    //     email: data.email,
    //     coin: 10,
    //   };
    //   updateUserProfile(data.name, data.photoURL)
    //     .then(() => {
    //       axiosPublic.put("/users", userInfo).then((res) => {
    //         if (res.data.insertedId) {
    //           Swal.fire({
    //             position: "top-end",
    //             icon: "success",
    //             title: "User Created Successfully!",
    //             showConfirmButton: false,
    //             timer: 1500,
    //           });
    //           reset();
    //         }
    //         navigate("/login");
    //       });
    //     })
    //     .catch((error) => {
    //       alert(error);
    //     });
    // });
  };
  return (
    <div className="border-2 mx-auto border-red-300  w-full max-w-xl mb-4 p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
      <h1 className="text-2xl font-bold text-center">Register</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label htmlFor="username" className="block dark:text-gray-600">
            Username*
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Username"
            required
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="photoURL" className="block dark:text-gray-600">
            PhotoURL*
          </label>
          <input
            type="text"
            name="photoURL"
            id="photoURL"
            placeholder="photoURL"
            required
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label className="block dark:text-gray-600">Email*</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            required
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block dark:text-gray-600">
            Password*
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="****"
            required
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
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
