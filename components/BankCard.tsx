import React from 'react';
import { CreditCard, Wifi } from 'lucide-react';

interface BankCardProps {
  balance: number;
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
}

const BankCard = ({
  balance,
  cardNumber,
  cardHolder,
  expiryDate,
}: BankCardProps) => {
  // Format card number to show only last 4 digits
  const formatCardNumber = (number: string) => {
    const lastFour = number.slice(-4);
    return `•••• •••• •••• ${lastFour}`;
  };

  return (
    <div className="max-w-md w-full mx-auto">
      {/* Balance Display */}
      <div className="mb-6">
        <h2 className="text-sm font-medium text-gray-600">Available Balance</h2>
        <p className="text-4xl font-bold text-gray-900">
          ${balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
        </p>
      </div>

      {/* Credit Card */}
      <div className="relative h-56 w-full">
        {/* Card Background with Animated Gradient */}
        <div 
          className="absolute inset-0 rounded-2xl shadow-xl overflow-hidden"
          style={{
            background: 'linear-gradient(-45deg, #3b82f6, #1d4ed8, #2563eb, #3730a3)',
            backgroundSize: '400% 400%',
            animation: 'gradient 15s ease infinite'
          }}
        >
          {/* Glass Effect Overlay */}
          <div className="absolute inset-0 backdrop-blur-[1px] bg-white/10">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 transform rotate-45">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-32 w-96 border border-white/20"
                    style={{
                      transform: `translateX(${i * 48}px) translateY(${i * -48}px)`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Card Content */}
          <div className="relative h-full p-6 flex flex-col justify-between text-white">
            <div className="flex justify-between items-start">
              <div className="flex space-x-2">
                <CreditCard className="w-8 h-8" />
                <Wifi className="w-8 h-8 rotate-90" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="text-xl tracking-widest">
                {formatCardNumber(cardNumber)}
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <div className="text-xs opacity-75 mb-1">Card Holder</div>
                  <div className="font-medium uppercase tracking-wider">
                    {cardHolder}
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs opacity-75 mb-1">Expires</div>
                  <div className="font-medium">{expiryDate}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankCard;