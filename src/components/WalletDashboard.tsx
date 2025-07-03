import React, { useState } from 'react';
import { 
  Wallet, 
  Plus, 
  Minus, 
  TrendingUp, 
  TrendingDown,
  Clock,
  CheckCircle,
  AlertCircle,
  CreditCard,
  Phone,
  ArrowUpRight,
  ArrowDownLeft
} from 'lucide-react';

interface Transaction {
  id: string;
  type: 'credit' | 'debit';
  amount: number;
  description: string;
  date: string;
  status: 'completed' | 'pending' | 'failed';
  method: string;
}

const transactions: Transaction[] = [
  {
    id: '1',
    type: 'debit',
    amount: 2500,
    description: 'Payment to Hassan Mwangi - Electrical Repair',
    date: '2024-01-15 10:30',
    status: 'completed',
    method: 'Wallet'
  },
  {
    id: '2',
    type: 'credit',
    amount: 5000,
    description: 'Wallet Top-up via M-Pesa',
    date: '2024-01-14 15:45',
    status: 'completed',
    method: 'M-Pesa'
  },
  {
    id: '3',
    type: 'debit',
    amount: 3200,
    description: 'Payment to Grace Wanjiku - Plumbing Service',
    date: '2024-01-12 14:20',
    status: 'completed',
    method: 'Wallet'
  },
  {
    id: '4',
    type: 'credit',
    amount: 10000,
    description: 'Wallet Top-up via Card',
    date: '2024-01-10 09:15',
    status: 'completed',
    method: 'Card'
  }
];

export const WalletDashboard: React.FC = () => {
  const [showTopUp, setShowTopUp] = useState(false);
  const [topUpAmount, setTopUpAmount] = useState('');
  const [selectedTopUpMethod, setSelectedTopUpMethod] = useState('mpesa');

  const walletBalance = 15000;
  const monthlySpent = 8700;
  const monthlySaved = 1200;

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-secondary-500" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'failed':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-secondary-600';
      case 'pending':
        return 'text-yellow-600';
      case 'failed':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      {/* Wallet Balance Card */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Wallet className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Fundi Wallet</h3>
              <p className="text-blue-100 text-sm">Available Balance</p>
            </div>
          </div>
          <button
            onClick={() => setShowTopUp(true)}
            className="bg-white/20 hover:bg-white/30 transition-colors rounded-lg p-2"
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
        
        <div className="text-3xl font-bold mb-6">
          KES {walletBalance.toLocaleString()}
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/10 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-1">
              <TrendingDown className="h-4 w-4" />
              <span className="text-sm">This Month</span>
            </div>
            <div className="text-lg font-semibold">KES {monthlySpent.toLocaleString()}</div>
            <div className="text-xs text-blue-100">Spent on services</div>
          </div>
          <div className="bg-white/10 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-1">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm">Saved</span>
            </div>
            <div className="text-lg font-semibold">KES {monthlySaved.toLocaleString()}</div>
            <div className="text-xs text-blue-100">With wallet payments</div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setShowTopUp(true)}
            className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center">
              <Plus className="h-5 w-5 text-secondary-600" />
            </div>
            <div className="text-left">
              <div className="font-medium text-gray-900">Top Up</div>
              <div className="text-sm text-gray-600">Add money to wallet</div>
            </div>
          </button>
          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
              <Minus className="h-5 w-5 text-primary-600" />
            </div>
            <div className="text-left">
              <div className="font-medium text-gray-900">Withdraw</div>
              <div className="text-sm text-gray-600">Transfer to bank</div>
            </div>
          </button>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Transactions</h3>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center space-x-4 p-3 border border-gray-100 rounded-lg">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                transaction.type === 'credit' ? 'bg-secondary-100' : 'bg-red-100'
              }`}>
                {transaction.type === 'credit' ? (
                  <ArrowDownLeft className={`h-5 w-5 ${transaction.type === 'credit' ? 'text-secondary-600' : 'text-red-600'}`} />
                ) : (
                  <ArrowUpRight className={`h-5 w-5 ${transaction.type === 'credit' ? 'text-secondary-600' : 'text-red-600'}`} />
                )}
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">{transaction.description}</div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span>{transaction.date}</span>
                  <span>•</span>
                  <span>{transaction.method}</span>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    {getStatusIcon(transaction.status)}
                    <span className={getStatusColor(transaction.status)}>
                      {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
              <div className={`font-semibold ${
                transaction.type === 'credit' ? 'text-secondary-600' : 'text-red-600'
              }`}>
                {transaction.type === 'credit' ? '+' : '-'}KES {transaction.amount.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Up Modal */}
      {showTopUp && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full animate-slide-up">
            <div className="bg-primary-600 text-white p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Top Up Wallet</h2>
                <button
                  onClick={() => setShowTopUp(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <Plus className="h-6 w-6 rotate-45" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amount to Add
                </label>
                <input
                  type="number"
                  value={topUpAmount}
                  onChange={(e) => setTopUpAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <div className="flex space-x-2 mt-2">
                  {[1000, 2500, 5000, 10000].map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setTopUpAmount(amount.toString())}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200 transition-colors"
                    >
                      {amount}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Payment Method
                </label>
                <div className="space-y-2">
                  <div
                    className={`border rounded-lg p-3 cursor-pointer transition-all ${
                      selectedTopUpMethod === 'mpesa'
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedTopUpMethod('mpesa')}
                  >
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-green-600" />
                      <span className="font-medium">M-Pesa</span>
                    </div>
                  </div>
                  <div
                    className={`border rounded-lg p-3 cursor-pointer transition-all ${
                      selectedTopUpMethod === 'card'
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedTopUpMethod('card')}
                  >
                    <div className="flex items-center space-x-3">
                      <CreditCard className="h-5 w-5 text-blue-600" />
                      <span className="font-medium">Credit/Debit Card</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <button
                disabled={!topUpAmount}
                className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Add KES {topUpAmount ? parseInt(topUpAmount).toLocaleString() : '0'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};