import React, { useState } from 'react';
import { 
  X, 
  CreditCard, 
  Phone, 
  Wallet, 
  Shield, 
  CheckCircle,
  AlertCircle,
  Clock
} from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  serviceName: string;
  providerName: string;
  onPaymentSuccess: (paymentData: any) => void;
}

const paymentMethods = [
  {
    id: 'mpesa',
    name: 'M-Pesa',
    description: 'Pay via mobile money',
    icon: Phone,
    color: 'bg-green-500',
    fees: '1.5%',
    processingTime: 'Instant'
  },
  {
    id: 'card',
    name: 'Credit/Debit Card',
    description: 'Visa, Mastercard accepted',
    icon: CreditCard,
    color: 'bg-blue-500',
    fees: '2.9%',
    processingTime: 'Instant'
  },
  {
    id: 'wallet',
    name: 'Fundi Wallet',
    description: 'Use your platform balance',
    icon: Wallet,
    color: 'bg-purple-500',
    fees: 'Free',
    processingTime: 'Instant'
  }
];

export const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  amount,
  serviceName,
  providerName,
  onPaymentSuccess
}) => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStep, setPaymentStep] = useState('select'); // select, details, processing, success

  if (!isOpen) return null;

  const calculateTotal = () => {
    const method = paymentMethods.find(m => m.id === selectedMethod);
    if (!method) return amount;
    
    if (method.id === 'wallet') return amount;
    const feePercentage = parseFloat(method.fees.replace('%', '')) / 100;
    return amount + (amount * feePercentage);
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    setPaymentStep('processing');

    // Simulate payment processing
    setTimeout(() => {
      setPaymentStep('success');
      setIsProcessing(false);
      
      const paymentData = {
        method: selectedMethod,
        amount: calculateTotal(),
        transactionId: `TXN${Date.now()}`,
        timestamp: new Date().toISOString()
      };
      
      setTimeout(() => {
        onPaymentSuccess(paymentData);
        onClose();
      }, 2000);
    }, 3000);
  };

  const renderPaymentForm = () => {
    switch (selectedMethod) {
      case 'mpesa':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                M-Pesa Phone Number
              </label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="254712345678"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Phone className="h-5 w-5 text-green-600" />
                <span className="font-medium text-green-800">M-Pesa Payment</span>
              </div>
              <p className="text-sm text-green-700">
                You'll receive an STK push notification on your phone to complete the payment.
              </p>
            </div>
          </div>
        );
      
      case 'card':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Card Number
              </label>
              <input
                type="text"
                value={cardDetails.number}
                onChange={(e) => setCardDetails({...cardDetails, number: e.target.value})}
                placeholder="1234 5678 9012 3456"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expiry Date
                </label>
                <input
                  type="text"
                  value={cardDetails.expiry}
                  onChange={(e) => setCardDetails({...cardDetails, expiry: e.target.value})}
                  placeholder="MM/YY"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  CVV
                </label>
                <input
                  type="text"
                  value={cardDetails.cvv}
                  onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value})}
                  placeholder="123"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cardholder Name
              </label>
              <input
                type="text"
                value={cardDetails.name}
                onChange={(e) => setCardDetails({...cardDetails, name: e.target.value})}
                placeholder="John Doe"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        );
      
      case 'wallet':
        return (
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Wallet className="h-5 w-5 text-purple-600" />
              <span className="font-medium text-purple-800">Fundi Wallet</span>
            </div>
            <p className="text-sm text-purple-700 mb-3">
              Current balance: KES 15,000
            </p>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-purple-600" />
              <span className="text-sm text-purple-700">Sufficient balance available</span>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-slide-up">
        {/* Header */}
        <div className="bg-primary-600 text-white p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">Secure Payment</h2>
              <p className="text-blue-100 text-sm">{serviceName} by {providerName}</p>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {paymentStep === 'select' && (
            <>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Choose Payment Method
              </h3>
              
              <div className="space-y-3 mb-6">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${
                      selectedMethod === method.id
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedMethod(method.id)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 ${method.color} rounded-lg flex items-center justify-center`}>
                        <method.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{method.name}</h4>
                        <p className="text-sm text-gray-600">{method.description}</p>
                        <div className="flex items-center space-x-4 mt-1 text-xs text-gray-500">
                          <span>Fee: {method.fees}</span>
                          <span>•</span>
                          <span>{method.processingTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {selectedMethod && (
                <button
                  onClick={() => setPaymentStep('details')}
                  className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium"
                >
                  Continue
                </button>
              )}
            </>
          )}

          {paymentStep === 'details' && (
            <>
              <div className="flex items-center space-x-2 mb-4">
                <button
                  onClick={() => setPaymentStep('select')}
                  className="text-gray-600 hover:text-gray-800"
                >
                  ← Back
                </button>
                <h3 className="text-lg font-semibold text-gray-900">
                  Payment Details
                </h3>
              </div>

              {renderPaymentForm()}

              <div className="bg-gray-50 rounded-lg p-4 mt-6 mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Payment Summary</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service Amount</span>
                    <span>KES {amount.toLocaleString()}</span>
                  </div>
                  {selectedMethod !== 'wallet' && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Processing Fee</span>
                      <span>KES {(calculateTotal() - amount).toLocaleString()}</span>
                    </div>
                  )}
                  <div className="border-t pt-2">
                    <div className="flex justify-between font-semibold">
                      <span>Total Amount</span>
                      <span>KES {calculateTotal().toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-blue-800">Secure Payment</span>
                </div>
                <p className="text-sm text-blue-700 mt-1">
                  Your payment is protected by 256-bit SSL encryption and our money-back guarantee.
                </p>
              </div>

              <button
                onClick={handlePayment}
                disabled={
                  (selectedMethod === 'mpesa' && !phoneNumber) ||
                  (selectedMethod === 'card' && (!cardDetails.number || !cardDetails.expiry || !cardDetails.cvv || !cardDetails.name))
                }
                className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Pay KES {calculateTotal().toLocaleString()}
              </button>
            </>
          )}

          {paymentStep === 'processing' && (
            <div className="text-center py-8">
              <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Processing Payment</h3>
              <p className="text-gray-600 mb-4">Please wait while we process your payment...</p>
              {selectedMethod === 'mpesa' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Phone className="h-5 w-5 text-green-600" />
                    <span className="font-medium text-green-800">Check Your Phone</span>
                  </div>
                  <p className="text-sm text-green-700">
                    Enter your M-Pesa PIN when prompted to complete the payment.
                  </p>
                </div>
              )}
            </div>
          )}

          {paymentStep === 'success' && (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Payment Successful!</h3>
              <p className="text-gray-600 mb-4">
                Your payment has been processed successfully. The provider has been notified.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm text-gray-600">
                  <div className="flex justify-between mb-1">
                    <span>Transaction ID:</span>
                    <span className="font-mono">TXN{Date.now()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Amount Paid:</span>
                    <span className="font-semibold">KES {calculateTotal().toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};