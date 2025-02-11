import React, { useMemo } from 'react';
import { DollarSign, ArrowUpRight } from 'lucide-react';

interface Transaction {
  id: string;
  type: 'credit' | 'debit';
  amount: number;
  date: string;
  description: string;
  merchant: string;
  category: string;
}

interface DailySpendProps {
  transactions: Transaction[];
}

const DailySpend = ({transactions}: DailySpendProps) => {
  const { todaySpend, todayTransactions } = useMemo(() => {
    const today = new Date().toISOString().split('T')[0];
    const todayTxns = transactions.filter(t => t.date === today && t.type === 'debit');
    const total = todayTxns.reduce((sum, t) => sum + t.amount, 0);
    return {
      todaySpend: total,
      todayTransactions: todayTxns
    };
  }, [transactions]);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center space-x-4 mb-6">
        <div className="p-3 bg-indigo-100 rounded-full">
          <DollarSign className="w-6 h-6 text-indigo-600" />
        </div>
        <div>
          <h2 className="text-sm font-medium text-gray-600">Today&apos;s Spending</h2>
          <p className="text-2xl font-bold text-gray-900">
            ${todaySpend.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium text-gray-500">Today&apos;s Transactions</h3>
        {todayTransactions.length > 0 ? (
          <div className="space-y-3">
            {todayTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-3 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-red-100 rounded-full">
                    <ArrowUpRight className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{transaction.description}</p>
                    <p className="text-xs text-gray-500">{transaction.merchant}</p>
                  </div>
                </div>
                <p className="text-sm font-medium text-red-600">
                  -${transaction.amount.toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500 text-center py-4">
            No transactions today
          </p>
        )}
      </div>
    </div>
  );
};

export default DailySpend;