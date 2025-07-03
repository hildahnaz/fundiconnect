import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Star, 
  MapPin, 
  Clock, 
  Shield, 
  MessageCircle, 
  Phone, 
  Calendar,
  Award,
  CheckCircle,
  Camera,
  Heart,
  Share2,
  Flag,
  Verified,
  CreditCard,
  Wallet
} from 'lucide-react';

const providerData = {
  id: 1,
  name: 'Hassan Mwangi',
  profession: 'Master Electrician',
  rating: 4.9,
  reviewCount: 127,
  completedJobs: 340,
  experience: '8 years',
  location: 'Kiambu, 2.3km away',
  price: 'KES 2,500/hour',
  availability: 'Available today',
  verified: true,
  premium: true,
  image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600',
  skills: ['Wiring', 'Solar Installation', 'Electrical Repair', 'Panel Upgrades', 'LED Installation'],
  responseTime: '< 1 hour',
  languages: ['English', 'Swahili', 'Kikuyu'],
  bio: 'With over 8 years of experience in electrical work, I specialize in residential and commercial electrical installations. I am certified in solar panel installation and energy-efficient lighting systems. My priority is safety and quality workmanship.',
  certifications: ['Licensed Electrician', 'Solar Installation Certified', 'Safety Training Certified'],
  paymentMethods: ['M-Pesa', 'Bank Transfer', 'Cash', 'Fundi Wallet'],
  portfolio: [
    {
      title: 'Modern Kitchen Lighting',
      image: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Complete LED lighting installation in modern kitchen'
    },
    {
      title: 'Solar Panel Installation',
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: '5kW solar system installation for residential home'
    },
    {
      title: 'Electrical Panel Upgrade',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Complete electrical panel upgrade to 200A service'
    }
  ],
  reviews: [
    {
      id: 1,
      name: 'Maria Wanjiku',
      rating: 5,
      date: '2 days ago',
      comment: 'Hassan did an excellent job installing our solar panels. Professional, punctual, and very knowledgeable. Highly recommend!',
      verified: true
    },
    {
      id: 2,
      name: 'David Kimani',
      rating: 5,
      date: '1 week ago',
      comment: 'Quick response for an emergency electrical issue. Fixed the problem efficiently and explained everything clearly.',
      verified: true
    },
    {
      id: 3,
      name: 'Grace Muthoni',
      rating: 4,
      date: '2 weeks ago',
      comment: 'Great work on our kitchen lighting. The quality is excellent and the price was fair.',
      verified: true
    }
  ]
};

export const ProviderProfile: React.FC = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [showContact, setShowContact] = useState(false);

  const provider = providerData; // In real app, fetch by ID

  const getPaymentMethodIcon = (method: string) => {
    switch (method.toLowerCase()) {
      case 'm-pesa':
        return <Phone className="h-4 w-4 text-green-600" />;
      case 'fundi wallet':
        return <Wallet className="h-4 w-4 text-purple-600" />;
      case 'bank transfer':
        return <CreditCard className="h-4 w-4 text-blue-600" />;
      case 'cash':
        return <CreditCard className="h-4 w-4 text-gray-600" />;
      default:
        return <CreditCard className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="relative">
              <img
                src={provider.image}
                alt={provider.name}
                className="w-32 h-32 rounded-2xl object-cover shadow-md"
              />
              <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-md">
                <div className="w-6 h-6 bg-secondary-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {provider.name}
                    </h1>
                    {provider.verified && (
                      <span className="bg-secondary-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                        <Verified className="h-3 w-3" />
                        <span>Verified</span>
                      </span>
                    )}
                    {provider.premium && (
                      <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Premium
                      </span>
                    )}
                  </div>
                  <p className="text-lg text-primary-600 font-medium mb-2">
                    {provider.profession}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="font-medium">{provider.rating}</span>
                      <span>({provider.reviewCount} reviews)</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{provider.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{provider.responseTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      provider.availability === 'Available now' || provider.availability === 'Available today'
                        ? 'bg-secondary-100 text-secondary-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {provider.availability}
                    </span>
                    <span className="text-lg font-semibold text-gray-900">
                      {provider.price}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Heart className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Share2 className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Flag className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {provider.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-3">
                <Link
                  to={`/booking/${provider.id}`}
                  className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium"
                >
                  Book Now
                </Link>
                <button 
                  className="bg-secondary-600 text-white px-6 py-2 rounded-lg hover:bg-secondary-700 transition-colors font-medium"
                  onClick={() => setShowContact(true)}
                >
                  Contact
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {[
              { key: 'overview', label: 'Overview' },
              { key: 'portfolio', label: 'Portfolio' },
              { key: 'reviews', label: 'Reviews' },
              { key: 'availability', label: 'Availability' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.key
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">About</h2>
                  <p className="text-gray-700 leading-relaxed">{provider.bio}</p>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Certifications</h2>
                  <div className="space-y-3">
                    {provider.certifications.map((cert, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-secondary-100 rounded-full flex items-center justify-center">
                          <Award className="h-4 w-4 text-secondary-600" />
                        </div>
                        <span className="text-gray-700">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Payment Methods Accepted</h2>
                  <div className="grid grid-cols-2 gap-3">
                    {provider.paymentMethods.map((method, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                        {getPaymentMethodIcon(method)}
                        <span className="text-gray-700 font-medium">{method}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-5 w-5 text-blue-600" />
                      <span className="font-medium text-blue-800">Secure Payments</span>
                    </div>
                    <p className="text-sm text-blue-700 mt-1">
                      All payments are protected by our secure payment system with money-back guarantee.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'portfolio' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Work</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {provider.portfolio.map((work, index) => (
                      <div key={index} className="rounded-lg overflow-hidden shadow-sm">
                        <img
                          src={work.image}
                          alt={work.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4 bg-gray-50">
                          <h3 className="font-medium text-gray-900 mb-2">{work.title}</h3>
                          <p className="text-sm text-gray-600">{work.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Customer Reviews</h2>
                  <div className="space-y-6">
                    {provider.reviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                        <div className="flex items-center space-x-4 mb-3">
                          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                            <span className="font-medium text-gray-700">
                              {review.name.charAt(0)}
                            </span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <span className="font-medium text-gray-900">{review.name}</span>
                              {review.verified && (
                                <CheckCircle className="h-4 w-4 text-secondary-500" />
                              )}
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < review.rating
                                        ? 'text-yellow-400 fill-current'
                                        : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-gray-500">{review.date}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'availability' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Availability Calendar</h2>
                  <div className="bg-gray-50 rounded-lg p-8 text-center">
                    <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Calendar integration coming soon</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Contact {provider.name} directly to check availability
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Completed Jobs</span>
                  <span className="font-medium">{provider.completedJobs}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Experience</span>
                  <span className="font-medium">{provider.experience}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Response Time</span>
                  <span className="font-medium">{provider.responseTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Languages</span>
                  <span className="font-medium">{provider.languages.join(', ')}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Info</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center space-x-2 bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors">
                  <MessageCircle className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Location</h3>
              <div className="bg-gray-200 rounded-lg h-32 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-gray-400" />
              </div>
              <p className="text-sm text-gray-600 mt-2">{provider.location}</p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6 border border-primary-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Protection</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-primary-600" />
                  <span className="text-gray-700">Secure payment processing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-secondary-600" />
                  <span className="text-gray-700">Money-back guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Wallet className="h-4 w-4 text-purple-600" />
                  <span className="text-gray-700">Multiple payment options</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};