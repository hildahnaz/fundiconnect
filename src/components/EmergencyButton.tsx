import React, { useState } from 'react';
import { AlertTriangle, Phone, Clock, MapPin, X, CheckCircle } from 'lucide-react';

interface EmergencyProvider {
  id: number;
  name: string;
  profession: string;
  rating: number;
  distance: string;
  responseTime: string;
  price: string;
  image: string;
  available: boolean;
}

const emergencyProviders: EmergencyProvider[] = [
  {
    id: 1,
    name: 'Hassan Mwangi',
    profession: 'Emergency Electrician',
    rating: 4.9,
    distance: '1.2km away',
    responseTime: '15 mins',
    price: 'KES 3,500/hour',
    image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400',
    available: true
  },
  {
    id: 2,
    name: 'Grace Wanjiku',
    profession: 'Emergency Plumber',
    rating: 4.8,
    distance: '2.1km away',
    responseTime: '20 mins',
    price: 'KES 3,000/hour',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    available: true
  }
];

export const EmergencyButton: React.FC = () => {
  const [showEmergency, setShowEmergency] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState<EmergencyProvider | null>(null);
  const [isBooking, setIsBooking] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);

  const handleEmergencyBooking = (provider: EmergencyProvider) => {
    setSelectedProvider(provider);
    setIsBooking(true);
    
    // Simulate booking process
    setTimeout(() => {
      setIsBooking(false);
      setBookingComplete(true);
    }, 2000);
  };

  if (bookingComplete && selectedProvider) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center animate-slide-up">
          <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Emergency Booked!</h2>
          <p className="text-gray-600 mb-4">
            {selectedProvider.name} is on the way and will arrive in approximately {selectedProvider.responseTime}.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Provider:</span>
              <span className="font-medium">{selectedProvider.name}</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">ETA:</span>
              <span className="font-medium text-accent-600">{selectedProvider.responseTime}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Rate:</span>
              <span className="font-medium">{selectedProvider.price}</span>
            </div>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={() => {
                setBookingComplete(false);
                setSelectedProvider(null);
                setShowEmergency(false);
              }}
              className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
            >
              Close
            </button>
            <button className="flex-1 bg-primary-600 text-white py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>Call {selectedProvider.name}</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Emergency Button */}
      <button
        onClick={() => setShowEmergency(true)}
        className="fixed bottom-6 left-6 bg-red-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 animate-pulse"
      >
        <AlertTriangle className="h-6 w-6" />
      </button>

      {/* Emergency Modal */}
      {showEmergency && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slide-up">
            {/* Header */}
            <div className="bg-red-600 text-white p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="h-8 w-8" />
                  <div>
                    <h2 className="text-2xl font-bold">Emergency Services</h2>
                    <p className="text-red-100">Get immediate help from verified providers</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowEmergency(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="p-6">
              {isBooking ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Booking Emergency Service</h3>
                  <p className="text-gray-600">Connecting you with {selectedProvider?.name}...</p>
                </div>
              ) : (
                <>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="h-5 w-5 text-yellow-600" />
                      <p className="text-sm text-yellow-800">
                        <strong>Emergency rates apply:</strong> Premium pricing for immediate response
                      </p>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Emergency Providers</h3>
                  
                  <div className="space-y-4">
                    {emergencyProviders.map((provider) => (
                      <div key={provider.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center space-x-4">
                          <img
                            src={provider.image}
                            alt={provider.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h4 className="font-semibold text-gray-900">{provider.name}</h4>
                              <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium">
                                Emergency
                              </span>
                            </div>
                            <p className="text-primary-600 font-medium">{provider.profession}</p>
                            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                              <div className="flex items-center space-x-1">
                                <MapPin className="h-4 w-4" />
                                <span>{provider.distance}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="h-4 w-4" />
                                <span>{provider.responseTime}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <span className="font-medium">{provider.price}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="flex items-center space-x-1 mb-2">
                              <span className="font-medium">{provider.rating}</span>
                              <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
                            </div>
                            <button
                              onClick={() => handleEmergencyBooking(provider)}
                              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium text-sm"
                            >
                              Book Emergency
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">What happens next?</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Provider receives instant notification</li>
                      <li>• Real-time location tracking</li>
                      <li>• Direct communication channel</li>
                      <li>• 24/7 support during emergency</li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};