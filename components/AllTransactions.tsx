'use client'

import React, { useState, useMemo } from "react";
import {
  ArrowDownLeft,
  ArrowUpRight,
  Coffee,
  ShoppingCart,
  Home,
  Plane,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

type TransactionType = "credit" | "debit";
type Category = "shopping" | "food" | "housing" | "travel";

interface Transaction {
  id: string;
  type: TransactionType;
  description: string;
  merchant: string;
  amount: number;
  date: string;
  category: Category;
}

// Extended sample data
const allTransactions: Transaction[] = [
  {
    id: "1",
    type: "debit",
    description: "Coffee Shop",
    merchant: "Starbucks",
    amount: 4.5,
    date: "2024-03-15",
    category: "food",
  },
  {
    id: "2",
    type: "debit",
    description: "Grocery Shopping",
    merchant: "Whole Foods",
    amount: 89.32,
    date: "2024-03-14",
    category: "shopping",
  },
  {
    id: "3",
    type: "credit",
    description: "Salary Deposit",
    merchant: "Company Inc",
    amount: 3500.0,
    date: "2024-03-13",
    category: "housing",
  },
  {
    id: "4",
    type: "debit",
    description: "Flight Tickets",
    merchant: "United Airlines",
    amount: 450.0,
    date: "2024-03-12",
    category: "travel",
  },
  {
    id: "5",
    type: "debit",
    description: "Restaurant Dinner",
    merchant: "Local Bistro",
    amount: 78.5,
    date: "2024-03-11",
    category: "food",
  },
  {
    id: "6",
    type: "debit",
    description: "Monthly Rent",
    merchant: "Property Management",
    amount: 1200.0,
    date: "2024-03-10",
    category: "housing",
  },
  {
    id: "7",
    type: "credit",
    description: "Freelance Payment",
    merchant: "Client Co.",
    amount: 850.0,
    date: "2024-03-09",
    category: "housing",
  },
  {
    id: "8",
    type: "debit",
    description: "Electronics Store",
    merchant: "Best Buy",
    amount: 299.99,
    date: "2024-03-08",
    category: "shopping",
  },
];

const getCategoryIcon = (category: Category) => {
  switch (category) {
    case "shopping":
      return <ShoppingCart className="w-5 h-5" />;
    case "food":
      return <Coffee className="w-5 h-5" />;
    case "housing":
      return <Home className="w-5 h-5" />;
    case "travel":
      return <Plane className="w-5 h-5" />;
    default:
      return null;
  }
};
function AllTransactions() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | Category>(
    "all"
  );
  const [selectedType, setSelectedType] = useState<"all" | TransactionType>(
    "all"
  );

  const filteredTransactions = useMemo(() => {
    return allTransactions.filter((transaction) => {
      const matchesCategory =
        selectedCategory === "all" || transaction.category === selectedCategory;
      const matchesType =
        selectedType === "all" || transaction.type === selectedType;
      return matchesCategory && matchesType;
    });
  }, [selectedCategory, selectedType]);

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <Link
              href="/dashboard"
              className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Link>
            <h1 className="text-3xl font-bold text-gray-800">
              All Transactions
            </h1>
          </div>

          <div className="flex gap-4">
            <select
              value={selectedCategory}
              onChange={(e) =>
                setSelectedCategory(e.target.value as "all" | Category)
              }
              className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Categories</option>
              <option value="shopping">Shopping</option>
              <option value="food">Food</option>
              <option value="housing">Housing</option>
              <option value="travel">Travel</option>
            </select>

            <select
              value={selectedType}
              onChange={(e) =>
                setSelectedType(e.target.value as "all" | TransactionType)
              }
              className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Types</option>
              <option value="credit">Credit</option>
              <option value="debit">Debit</option>
            </select>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-[auto_1fr_auto_auto] gap-4 p-4 bg-gray-50 border-b border-gray-200 font-medium text-gray-600">
            <div>Type</div>
            <div>Details</div>
            <div>Category</div>
            <div className="text-right">Amount</div>
          </div>

          <div className="divide-y divide-gray-100">
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="grid grid-cols-[auto_1fr_auto_auto] gap-4 p-4 items-center hover:bg-gray-50 transition-colors duration-150"
                >
                  <div
                    className={`p-2 rounded-full ${
                      transaction.type === "credit"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {transaction.type === "credit" ? (
                      <ArrowDownLeft className="w-5 h-5" />
                    ) : (
                      <ArrowUpRight className="w-5 h-5" />
                    )}
                  </div>

                  <div>
                    <p className="font-medium text-gray-800">
                      {transaction.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>{transaction.merchant}</span>
                      <span>•</span>
                      <span>
                        {new Date(transaction.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  <div className="text-gray-400">
                    {getCategoryIcon(transaction.category)}
                  </div>

                  <div className="text-right">
                    <p
                      className={`font-medium ${
                        transaction.type === "credit"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {transaction.type === "credit" ? "+" : "-"}$
                      {transaction.amount.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-gray-500">
                No transactions found matching the selected filters.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllTransactions