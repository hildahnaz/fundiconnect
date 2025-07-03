import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  MapPin, 
  Star, 
  Clock,
  Shield,
  Wrench,
  Zap,
  Paintbrush,
  Hammer,
  Car,
  Laptop,
  Home,
  Camera
} from 'lucide-react';

const categories = [
  { icon: Wrench, name: 'Plumbing', count: 245 },
  { icon: Zap, name: 'Electrical', count: 189 },
  { icon: Paintbrush, name: 'Painting', count: 156 },
  { icon: Hammer, name: 'Carpentry', count: 203 },
  { icon: Car, name: 'Automotive', count: 98 },
  { icon: Laptop, name: 'Electronics', count: 134 },
  { icon: Home, name: 'Cleaning', count: 287 },
  { icon: Camera, name: 'Photography', count: 67 }
];

const services = [
  {
    id: 1,
    title: 'Emergency Plumbing Repair',
    description: 'Burst pipes, leaks, and emergency plumbing issues',
    category: 'Plumbing',
    providers: 23,
    avgPrice: 'KES 2,500',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 2,
    title: 'Home Electrical Installation',
    description: 'Wiring, outlets, switches, and electrical upgrades',
    category: 'Electrical',
    providers: 18,
    avgPrice: 'KES 3,200',
    rating: 4.9,
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 3,
    title: 'Interior & Exterior Painting',
    description: 'Professional painting services for homes and offices',
    category: 'Painting',
    providers: 31,
    avgPrice: 'KES 15,000',
    rating: 4.7,
    image: 'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 4,
    title: 'Custom Furniture & Carpentry',
    description: 'Handcrafted furniture, repairs, and woodworking',
    category: 'Carpentry',
    providers: 15,
    avgPrice: 'KES 8,500',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 5,
    title: 'Deep Cleaning Services',
    description: 'Professional home and office cleaning',
    category: 'Cleaning',
    providers: 42,
    avgPrice: 'KES 4,000',
    rating: 4.6,
    image: 'https://images.pexels.com/photos/4099464/pexels-photo-4099464.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 6,
    title: 'Car Maintenance & Repair',
    description: 'Engine repair, maintenance, and automotive services',
    category: 'Automotive',
    providers: 26,
    avgPrice: 'KES 5,500',
    rating: 4.5,
    image: 'https://images.pexels.com/photos/279949/pexels-photo-279949.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                Discover Services
              </h1>
              <p className="text-gray-600 mt-1">
                Find trusted local providers for all your needs
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative flex-1 lg:flex-none lg:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
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
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Service Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors ${
                      selectedCategory === category.name
                        ? 'bg-primary-50 text-primary-600 border border-primary-200'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <category.icon className="h-5 w-5" />
                    <span className="font-medium">{category.name}</span>
                    <span className="ml-auto text-sm text-gray-500">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Location Filter */}
            <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Location
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter your location"
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Within radius
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    <option>5 km</option>
                    <option>10 km</option>
                    <option>25 km</option>
                    <option>50 km</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm text-gray-600">
                Showing {services.length} services
                {selectedCategory && ` in ${selectedCategory}`}
              </div>
              <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option>Sort by: Most Popular</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating: Highest</option>
                <option>Newest</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service) => (
                <div key={service.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-gray-700">
                          {service.rating}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Shield className="h-4 w-4 text-secondary-500" />
                        <span className="text-sm text-gray-600">
                          {service.providers} verified providers
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm text-gray-500">Starting from</span>
                        <div className="text-lg font-semibold text-gray-900">
                          {service.avgPrice}
                        </div>
                      </div>
                      <Link
                        to={`/providers?service=${service.id}`}
                        className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium"
                      >
                        View Providers
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                Load More Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};