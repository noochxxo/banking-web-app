import BankCard from "@/components/BankCard";
import DailySpend from "@/components/DailySpending";
import RecentTransactions from "@/components/RecentTransactions";
import { getCurrentUser } from "@/lib/actions/user.actions";

// Sample transactions for the current day
const transactions = [
  {
    id: '1',
    type: 'debit',
    description: 'Coffee Shop',
    merchant: 'Starbucks',
    amount: 4.50,
    date: new Date().toISOString().split('T')[0],
    category: 'food'
  },
  {
    id: '2',
    type: 'debit',
    description: 'Grocery Shopping',
    merchant: 'Whole Foods',
    amount: 89.32,
    date: new Date().toISOString().split('T')[0],
    category: 'shopping'
  }
];

const page = async () => {
  const user = await getCurrentUser();
  return (
    <div className="bg-white rounded-tl-[3em] rounded-bl-[1em] rounded-tr-[1em] rounded-br-[1em] p-12 m-6 h-full grid grid-cols-3 grid-rows-2 gap-4 space-y-7 overflow-y-scroll">
      
      <div className="col-span-2 row-span-1">
        <BankCard 
          balance={24680.90}
          cardNumber="4485123456789012"
          cardHolder={`${user.firstName} ${user.lastName}`}
          expiryDate="12/25"
        />
      </div>
      <div className="col-span-2 row-span-1 order-last">
        <RecentTransactions />
      </div>
      <div className="col-span-1 row-span-2 order-2">
        <DailySpend transactions={transactions} />
      </div>
      
    </div>
  );
};

export default page;
