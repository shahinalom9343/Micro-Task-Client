import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

import UsersRow from "./UsersRow";
import { Helmet } from "react-helmet-async";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const result = await axiosSecure.get("/users");
      return result.data;
    },
  });

  return (
    <div className="my-6">
      <Helmet>
        <title>Dashboard | ManageUsers</title>
      </Helmet>
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
              {users.map((user) => (
                <UsersRow key={user?._id} user={user} refetch={refetch} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
