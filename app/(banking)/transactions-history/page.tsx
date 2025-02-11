import { getCurrentUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import AllTransactions from "@/components/AllTransactions";

const TransactionsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) return redirect("/sign-in");

  return (
    <div className="bg-white rounded-tl-[3em] rounded-bl-[1em] rounded-tr-[1em] rounded-br-[1em] p-12 m-6 h-full overflow-y-scroll overscroll-contain scrollbar-hidden">
      <AllTransactions />
    </div>
    
  );
};

export default TransactionsPage;
