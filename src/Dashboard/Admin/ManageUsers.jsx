import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import UpdateUserModal from "../../Components/UpdateUserModal";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";

const ManageUsers = ({ user, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const { user: loggedInUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const result = await axiosSecure.get("/users");
      return result.data;
    },
  });

  const { mutateAsync } = useMutation({
    mutationFn: async (role) => {
      const { data } = await axiosSecure.patch(
        `/users/update/${user?.email}`,
        role
      );
      return data;
    },
    onSuccess: (data) => {
      refetch();
      console.log(data);
      toast.success("User role updated successfully!");
      setIsOpen(false);
    },
  });

  //   modal handler
  const modalHandler = async (selected) => {
    if (loggedInUser.email === user.email) {
      toast.error("Action Not Allowed");
      return setIsOpen(false);
    }

    const userRole = {
      role: selected,
      status: "Verified",
    };

    try {
      await mutateAsync(userRole);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  // handleDeleteUser
  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure deleted this Worker?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete this!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Worker has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="my-6">
      <h3 className="text-center font-semibold text-pink-800 text-2xl">
        Total Workers : {users.length}
      </h3>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800 my-10">
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
              <tr className="text-center">
                <th className="p-3"></th>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">PhotoURL</th>
                <th className="p-3">Status</th>
                <th className="p-3">Role</th>
                <th className="p-3">Coin</th>
                <th className="p-3">Action</th>
                <th className="p-3">Delete User</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={user._id}
                  className="border-b text-start border-opacity-20 dark:border-gray-300 dark:bg-gray-50"
                >
                  <td className="p-3">
                    <p>{index + 1}</p>
                  </td>
                  <td className="p-3">
                    <p>{user.name}</p>
                  </td>
                  <td className="p-3">
                    <p>{user.email}</p>
                  </td>
                  <td className="p-3">
                    <img
                      className="h-14 w-14 flex justify-center items-center"
                      src={user.photoURL}
                    />
                  </td>
                  <td className="p-3">{user.status}</td>
                  <td className="p-3">{user.role}</td>
                  <td className="p-3 ">
                    <p>$15,792</p>
                  </td>
                  <td>
                    <button className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">Update Role</span>
                    </button>
                    {/* Update User Modal */}
                    <UpdateUserModal
                      isOpen={isOpen}
                      setIsOpen={setIsOpen}
                      modalHandler={modalHandler}
                      user={user}
                    />
                  </td>
                  <td className="p-1">
                    <span className="px-3 py-1 text-xl font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                      <button
                        className="btn btn-ghost"
                        onClick={() => handleDelete(user)}
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
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default ManageUsers;
