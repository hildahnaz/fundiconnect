import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  MapPin, 
  Star, 
  Clock,
  Shield,
  MessageCircle,
  Phone,
  Calendar,
  Award,
  Heart,
  Verified
} from 'lucide-react';

const providers = [
  {
    id: 1,
    name: 'Hassan Mwangi',
    profession: 'Master Electrician',
    rating: 4.9,
    reviews: 127,
    completedJobs: 340,
    experience: '8 years',
    location: 'Kiambu, 2.3km away',
    price: 'KES 2,500/hour',
    availability: 'Available today',
    verified: true,
    premium: true,
    image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400',
    skills: ['Wiring', 'Solar Installation', 'Electrical Repair'],
    responseTime: '< 1 hour',
    languages: ['English', 'Swahili', 'Kikuyu']
  },
  {
    id: 2,
    name: 'Grace Wanjiku',
    profession: 'Professional Plumber',
    rating: 4.8,
    reviews: 89,
    completedJobs: 245,
    experience: '5 years',
    location: 'Westlands, 3.1km away',
    price: 'KES 2,000/hour',
    availability: 'Available tomorrow',
    verified: true,
    premium: false,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    skills: ['Pipe Repair', 'Drain Cleaning', 'Bathroom Installation'],
    responseTime: '< 2 hours',
    languages: ['English', 'Swahili']
  },
  {
    id: 3,
    name: 'David Ochieng',
    profession: 'Carpenter & Joiner',
    rating: 4.7,
    reviews: 156,
    completedJobs: 290,
    experience: '12 years',
    location: 'Karen, 4.2km away',
    price: 'KES 1,800/hour',
    availability: 'Available now',
    verified: true,
    premium: true,
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
    skills: ['Custom Furniture', 'Door Installation', 'Wood Repair'],
    responseTime: '< 30 minutes',
    languages: ['English', 'Swahili', 'Luo']
  },
  {
    id: 4,
    name: 'Mary Njeri',
    profession: 'House Painter',
    rating: 4.6,
    reviews: 78,
    completedJobs: 134,
    experience: '6 years',
    location: 'Kasarani, 5.8km away',
    price: 'KES 1,500/hour',
    availability: 'Available this week',
    verified: true,
    premium: false,
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
    skills: ['Interior Painting', 'Exterior Painting', 'Color Consultation'],
    responseTime: '< 3 hours',
    languages: ['English', 'Swahili', 'Kikuyu']
  },
  {
    id: 5,
    name: 'Samuel Kamau',
    profession: 'Auto Mechanic',
    rating: 4.8,
    reviews: 203,
    completedJobs: 420,
    experience: '10 years',
    location: 'Industrial Area, 6.2km away',
    price: 'KES 3,000/hour',
    availability: 'Available today',
    verified: true,
    premium: true,
    image: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=400',
    skills: ['Engine Repair', 'Brake Service', 'Transmission'],
    responseTime: '< 1 hour',
    languages: ['English', 'Swahili']
  },
  {
    id: 6,
    name: 'Faith Akinyi',
    profession: 'Cleaning Specialist',
    rating: 4.9,
    reviews: 167,
    completedJobs: 380,
    experience: '7 years',
    location: 'Lavington, 2.8km away',
    price: 'KES 1,200/hour',
    availability: 'Available today',
    verified: true,
    premium: false,
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
    skills: ['Deep Cleaning', 'Carpet Cleaning', 'Office Cleaning'],
    responseTime: '< 2 hours',
    languages: ['English', 'Swahili', 'Luo']
  }
];

export const ProvidersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const handleBookmark = (providerId: number) => {
    // Handle bookmark functionality
    console.log(`Bookmarked provider ${providerId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                Find Your Perfect Fundi
              </h1>
              <p className="text-gray-600 mt-1">
                Connect with skilled professionals in your area
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative flex-1 lg:flex-none lg:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search providers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Filter className="h-5 w-5" />
                <span>Filters</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Tabs */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex flex-wrap gap-2">
            {[
              { key: 'all', label: 'All Providers' },
              { key: 'available', label: 'Available Now' },
              { key: 'premium', label: 'Premium' },
              { key: 'top-rated', label: 'Top Rated' },
              { key: 'nearby', label: 'Nearby' }
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setSelectedFilter(filter.key)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedFilter === filter.key
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Providers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {providers.map((provider) => (
            <div key={provider.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative">
                <img
                  src={provider.image}
                  alt={provider.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 flex space-x-2">
                  {provider.premium && (
                    <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Premium
                    </span>
                  )}
                  {provider.verified && (
                    <span className="bg-secondary-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Verified className="h-3 w-3" />
                      <span>Verified</span>
                    </span>
                  )}
                </div>
                <button
                  onClick={() => handleBookmark(provider.id)}
                  className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                >
                  <Heart className="h-5 w-5 text-gray-600" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {provider.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700">
                      {provider.rating}
                    </span>
                  </div>
                </div>
                
                <p className="text-primary-600 font-medium mb-2">
                  {provider.profession}
                </p>
                
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                  <MapPin className="h-4 w-4" />
                  <span>{provider.location}</span>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {provider.skills.slice(0, 3).map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                  <div>
                    <span className="font-medium">{provider.completedJobs}</span>
                    <span className="text-gray-500"> jobs</span>
                  </div>
                  <div>
                    <span className="font-medium">{provider.experience}</span>
                    <span className="text-gray-500"> exp</span>
                  </div>
                  <div>
                    <span className="font-medium">{provider.reviews}</span>
                    <span className="text-gray-500"> reviews</span>
                  </div>
                  <div>
                    <Clock className="h-4 w-4 inline mr-1" />
                    <span className="text-gray-500">{provider.responseTime}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-sm text-gray-500">Starting from</span>
                    <div className="text-lg font-semibold text-gray-900">
                      {provider.price}
                    </div>
                  </div>
                  <span className={`text-sm px-3 py-1 rounded-full ${
                    provider.availability === 'Available now' || provider.availability === 'Available today'
                      ? 'bg-secondary-100 text-secondary-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {provider.availability}
                  </span>
                </div>
                
                <div className="flex space-x-2">
                  <Link
                    to={`/provider/${provider.id}`}
                    className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors font-medium text-center"
                  >
                    View Profile
                  </Link>
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <MessageCircle className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Phone className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
            Load More Providers
          </button>
        </div>
      </div>
    </div>
  );
};