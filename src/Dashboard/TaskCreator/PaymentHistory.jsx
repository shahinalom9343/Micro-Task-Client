import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: payments = [] } = useQuery({
    queryKey: ["payment"],
    queryFn: async () => {
      const result = await axiosSecure.get("/payment");
      return result.data;
    },
  });
  return (
    <div>
      <Helmet>
        <title>Dashboard | Payment</title>
      </Helmet>
      <table className="table my-7">
        {/* head */}
        <thead>
          <tr className="bg-sky-300 font-bold text-black">
            <th></th>
            <th>TransactionId</th>
            <th>Payment Date</th>
            <th>Payable_amount</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {payments
            .filter((singlePayment) => singlePayment.email === user?.email)
            .map((payment, index) => (
              <tr key={payment._id}>
                <td>{index + 1}</td>
                <td>{payment.transactionId}</td>
                <td>{payment.date}</td>
                <td className="text-center">{payment.payment_amount}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
