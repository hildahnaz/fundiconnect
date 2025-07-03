import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  Star, 
  MapPin, 
  Phone, 
  MessageCircle,
  CheckCircle,
  AlertCircle,
  XCircle,
  Plus,
  Filter,
  Search,
  Wallet,
  CreditCard
} from 'lucide-react';
import { WalletDashboard } from '../components/WalletDashboard';

const bookings = [
  {
    id: 1,
    providerName: 'Hassan Mwangi',
    service: 'Electrical Repair',
    date: '2024-01-15',
    time: '10:00 AM',
    status: 'confirmed',
    price: 2500,
    image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'Kiambu, Kenya',
    paymentMethod: 'M-Pesa',
    transactionId: 'TXN123456789'
  },
  {
    id: 2,
    providerName: 'Grace Wanjiku',
    service: 'Plumbing Service',
    date: '2024-01-12',
    time: '2:00 PM',
    status: 'completed',
    price: 3200,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'Westlands, Kenya',
    rating: 5,
    paymentMethod: 'Wallet',
    transactionId: 'TXN123456788'
  },
  {
    id: 3,
    providerName: 'David Ochieng',
    service: 'Carpentry Work',
    date: '2024-01-10',
    time: '9:00 AM',
    status: 'cancelled',
    price: 4500,
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'Karen, Kenya',
    paymentMethod: 'Card',
    transactionId: 'TXN123456787',
    refundStatus: 'processed'
  },
  {
    id: 4,
    providerName: 'Mary Njeri',
    service: 'House Painting',
    date: '2024-01-08',
    time: '8:00 AM',
    status: 'completed',
    price: 15000,
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'Kasarani, Kenya',
    rating: 4,
    paymentMethod: 'M-Pesa',
    transactionId: 'TXN123456786'
  }
];

const stats = [
  { label: 'Total Bookings', value: '24', color: 'bg-primary-500' },
  { label: 'Completed', value: '18', color: 'bg-secondary-500' },
  { label: 'Upcoming', value: '3', color: 'bg-accent-500' },
  { label: 'Total Spent', value: 'KES 45,200', color: 'bg-purple-500' }
];

export const DashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('bookings');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="h-5 w-5 text-secondary-500" />;
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-secondary-500" />;
      case 'cancelled':
        return <XCircle className="h-5 w-5 text-red-500" />;
      case 'pending':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      default:
        return <Clock className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-blue-100 text-blue-700';
      case 'completed':
        return 'bg-secondary-100 text-secondary-700';
      case 'cancelled':
        return 'bg-red-100 text-red-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getPaymentMethodIcon = (method: string) => {
    switch (method.toLowerCase()) {
      case 'm-pesa':
        return <Phone className="h-4 w-4 text-green-600" />;
      case 'wallet':
        return <Wallet className="h-4 w-4 text-purple-600" />;
      case 'card':
        return <CreditCard className="h-4 w-4 text-blue-600" />;
      default:
        return <CreditCard className="h-4 w-4 text-gray-600" />;
    }
  };

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = booking.providerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.service.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || booking.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                My Dashboard
              </h1>
              <p className="text-gray-600 mt-1">
                Manage your bookings, payments, and service history
              </p>
            </div>
            <Link
              to="/services"
              className="mt-4 sm:mt-0 bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium inline-flex items-center space-x-2"
            >
              <Plus className="h-5 w-5" />
              <span>Book New Service</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 text-center">
              <div className={`w-12 h-12 ${stat.color} rounded-lg mx-auto mb-3 flex items-center justify-center`}>
                <span className="text-white font-bold text-lg">
                  {stat.label === 'Total Spent' ? '₹' : stat.value.replace(/[^0-9]/g, '')}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
              <p className="font-semibold text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex space-x-8 border-b">
            {[
              { key: 'bookings', label: 'My Bookings', icon: Calendar },
              { key: 'wallet', label: 'Wallet & Payments', icon: Wallet }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-all ${
                  activeTab === tab.key
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {activeTab === 'bookings' && (
          <>
            {/* Filters and Search */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {[
                    { key: 'all', label: 'All Bookings' },
                    { key: 'confirmed', label: 'Confirmed' },
                    { key: 'completed', label: 'Completed' },
                    { key: 'cancelled', label: 'Cancelled' }
                  ].map((filter) => (
                    <button
                      key={filter.key}
                      onClick={() => setFilterStatus(filter.key)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        filterStatus === filter.key
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search bookings..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent w-full sm:w-64"
                  />
                </div>
              </div>
            </div>

            {/* Bookings List */}
            <div className="space-y-4">
              {filteredBookings.map((booking) => (
                <div key={booking.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={booking.image}
                        alt={booking.providerName}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {booking.service}
                        </h3>
                        <p className="text-primary-600 font-medium">{booking.providerName}</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{booking.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{booking.time}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{booking.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-6">
                      <div className="text-right">
                        <p className="text-lg font-semibold text-gray-900">
                          KES {booking.price.toLocaleString()}
                        </p>
                        <div className="flex items-center space-x-2 mb-2">
                          {getPaymentMethodIcon(booking.paymentMethod)}
                          <span className="text-sm text-gray-600">{booking.paymentMethod}</span>
                        </div>
                        <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm ${getStatusColor(booking.status)}`}>
                          {getStatusIcon(booking.status)}
                          <span className="capitalize">{booking.status}</span>
                        </div>
                        {booking.refundStatus && (
                          <div className="text-xs text-secondary-600 mt-1">
                            Refund {booking.refundStatus}
                          </div>
                        )}
                      </div>
                      
                      <div className="flex flex-col space-y-2">
                        {booking.status === 'confirmed' && (
                          <>
                            <button className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors">
                              <MessageCircle className="h-4 w-4" />
                              <span>Message</span>
                            </button>
                            <button className="flex items-center space-x-2 text-secondary-600 hover:text-secondary-700 transition-colors">
                              <Phone className="h-4 w-4" />
                              <span>Call</span>
                            </button>
                          </>
                        )}
                        
                        {booking.status === 'completed' && !booking.rating && (
                          <button className="flex items-center space-x-2 text-accent-600 hover:text-accent-700 transition-colors">
                            <Star className="h-4 w-4" />
                            <span>Rate</span>
                          </button>
                        )}
                        
                        {booking.status === 'completed' && booking.rating && (
                          <div className="flex items-center space-x-1">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < booking.rating!
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-600">Rated</span>
                          </div>
                        )}
                        
                        <div className="text-xs text-gray-500">
                          ID: {booking.transactionId}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredBookings.length === 0 && (
              <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No bookings found</h3>
                <p className="text-gray-600 mb-6">
                  {searchTerm ? 'Try adjusting your search terms' : 'Start by booking your first service'}
                </p>
                <Link
                  to="/services"
                  className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium"
                >
                  Book a Service
                </Link>
              </div>
            )}
          </>
        )}

        {activeTab === 'wallet' && <WalletDashboard />}
      </div>
    </div>
  );
};