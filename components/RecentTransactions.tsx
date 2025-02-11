import React from 'react';
import { ArrowDownLeft, ArrowUpRight, Coffee, ShoppingCart, Home, Plane, ArrowRight } from 'lucide-react';
import Link from 'next/link';

type TransactionType = 'credit' | 'debit';

interface Transaction {
  id: string;
  type: TransactionType;
  description: string;
  merchant: string;
  amount: number;
  date: string;
  category: 'shopping' | 'food' | 'housing' | 'travel';
}

// Sample data
const transactions: Transaction[] = [
  {
    id: '1',
    type: 'debit',
    description: 'Coffee Shop',
    merchant: 'Starbucks',
    amount: 4.50,
    date: '2024-03-15',
    category: 'food'
  },
  {
    id: '2',
    type: 'debit',
    description: 'Grocery Shopping',
    merchant: 'Whole Foods',
    amount: 89.32,
    date: '2024-03-14',
    category: 'shopping'
  },
  {
    id: '3',
    type: 'credit',
    description: 'Salary Deposit',
    merchant: 'Company Inc',
    amount: 3500.00,
    date: '2024-03-13',
    category: 'housing'
  },
  {
    id: '4',
    type: 'debit',
    description: 'Flight Tickets',
    merchant: 'United Airlines',
    amount: 450.00,
    date: '2024-03-12',
    category: 'travel'
  }
];

const getCategoryIcon = (category: Transaction['category']) => {
  switch (category) {
    case 'shopping':
      return <ShoppingCart className="w-5 h-5" />;
    case 'food':
      return <Coffee className="w-5 h-5" />;
    case 'housing':
      return <Home className="w-5 h-5" />;
    case 'travel':
      return <Plane className="w-5 h-5" />;
    default:
      return null;
  }
};

const RecentTransactions = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Recent Transactions</h2>
        <Link 
          href="/transactions-history" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          View All
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
      
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors duration-150"
          >
            <div className="flex items-center space-x-4">
              <div className={`p-2 rounded-full ${
                transaction.type === 'credit' 
                  ? 'bg-green-100 text-green-600'
                  : 'bg-red-100 text-red-600'
              }`}>
                {transaction.type === 'credit' 
                  ? <ArrowDownLeft className="w-6 h-6" />
                  : <ArrowUpRight className="w-6 h-6" />
                }
              </div>
              
              <div>
                <p className="font-semibold text-gray-800">{transaction.description}</p>
                <p className="text-sm text-gray-500">{transaction.merchant}</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="text-gray-400">
                {getCategoryIcon(transaction.category)}
              </div>
              
              <div className="text-right">
                <p className={`font-medium ${
                  transaction.type === 'credit'
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}>
                  {transaction.type === 'credit' ? '+' : '-'}
                  ${transaction.amount.toFixed(2)}
                </p>
                <p className="text-sm text-gray-500">
                  {new Date(transaction.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;