import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  MapPin, 
  Star, 
  Users, 
  Shield, 
  Clock,
  Wrench,
  Zap,
  Paintbrush,
  Hammer,
  ArrowRight,
  Play,
  CheckCircle,
  Brain,
  Heart,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import { AIAssistant } from '../components/AIAssistant';
import { EmergencyButton } from '../components/EmergencyButton';
import { GamefiedProgress } from '../components/GamefiedProgress';

const services = [
  { icon: Wrench, name: 'Plumbing', providers: 245, color: 'bg-blue-100 text-blue-600' },
  { icon: Zap, name: 'Electrical', providers: 189, color: 'bg-yellow-100 text-yellow-600' },
  { icon: Paintbrush, name: 'Painting', providers: 156, color: 'bg-purple-100 text-purple-600' },
  { icon: Hammer, name: 'Carpentry', providers: 203, color: 'bg-orange-100 text-orange-600' },
];

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Matching',
    description: 'Our smart concierge learns your preferences and predicts your service needs before you even know them'
  },
  {
    icon: Shield,
    title: 'Trust & Verification',
    description: 'Multi-layer verification system with community reviews and background checks for complete peace of mind'
  },
  {
    icon: Heart,
    title: 'Community-Driven',
    description: 'Local ambassadors and neighborhood champions ensure quality and strengthen community bonds'
  },
  {
    icon: Clock,
    title: 'Instant Response',
    description: 'Emergency services, real-time tracking, and predictive availability for when you need help most'
  }
];

const testimonials = [
  {
    name: 'Maria Wanjiku',
    role: 'Busy Professional, Nairobi',
    content: 'The AI assistant predicted I needed plumbing maintenance before my pipe burst! Hassan was at my door in 15 minutes. This platform is life-changing.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    badge: 'Community Champion'
  },
  {
    name: 'Hassan Mwangi',
    role: 'Electrician, Kiambu',
    content: 'My income tripled in 6 months! The platform helped me get certified, grow my skills, and connect with customers who value quality work.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400',
    badge: 'Rising Star Provider'
  },
  {
    name: 'Catherine Njoki',
    role: 'Community Coordinator, Westlands',
    content: 'Our neighborhood transformed! Local fundis are thriving, residents are happy, and we\'ve built real connections. It\'s an economic revolution.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
    badge: 'Neighborhood Champion'
  }
];

const innovativeFeatures = [
  {
    title: 'Predictive Maintenance',
    description: 'AI analyzes patterns to suggest services before issues occur',
    icon: Brain,
    color: 'bg-primary-500'
  },
  {
    title: 'Emergency Response',
    description: 'Deploy verified providers within 15 minutes for urgent needs',
    icon: Clock,
    color: 'bg-red-500'
  },
  {
    title: 'Service Subscriptions',
    description: 'Monthly plans for regular maintenance with preferred providers',
    icon: Star,
    color: 'bg-accent-500'
  },
  {
    title: 'Community Impact',
    description: 'Track local economic growth and social development',
    icon: TrendingUp,
    color: 'bg-secondary-500'
  }
];

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with AI Magic */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-accent-400/20 rounded-full animate-bounce-gentle"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-secondary-400/20 rounded-full animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-slide-up">
              <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
                <Sparkles className="h-6 w-6 text-accent-400" />
                <span className="bg-accent-500/20 text-accent-200 px-3 py-1 rounded-full text-sm font-medium">
                  AI-Powered Revolution
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                From Invisible to
                <span className="text-accent-400"> Invaluable</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
                The AI concierge that transforms how Maria finds trusted fundis like Hassan. 
                Experience service discovery that predicts, connects, and empowers communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Link
                  to="/services"
                  className="bg-accent-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  <Brain className="h-5 w-5" />
                  <span>Experience AI Magic</span>
                </Link>
                <Link
                  to="/providers"
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center justify-center space-x-2"
                >
                  <TrendingUp className="h-5 w-5" />
                  <span>Grow Your Business</span>
                </Link>
              </div>
              
              {/* Quick Demo */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center">
                    <Brain className="h-3 w-3 text-white" />
                  </div>
                  <span className="font-medium">AI Prediction Active</span>
                </div>
                <p className="text-blue-100">
                  "Based on weather patterns and your home age, you might need plumbing maintenance soon. 
                  Hassan Mwangi (4.9⭐) is available this week."
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-secondary-500 p-3 rounded-full animate-pulse">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Smart Service Discovery</h3>
                      <p className="text-blue-100">AI-powered matching in action</p>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4 transform hover:scale-105 transition-transform">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-secondary-500 rounded-full flex items-center justify-center">
                        <Wrench className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">Hassan Mwangi</p>
                        <p className="text-sm text-blue-100">Master Electrician • 2.3km away</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-blue-100">4.9 (127 reviews)</span>
                      <span className="bg-accent-500 text-white px-2 py-1 rounded-full text-xs">
                        Available Now
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div className="bg-white/10 rounded p-2 text-center">
                        <div className="text-lg font-bold">340</div>
                        <div className="text-xs text-blue-100">Jobs Done</div>
                      </div>
                      <div className="bg-white/10 rounded p-2 text-center">
                        <div className="text-lg font-bold">&lt; 15min</div>
                        <div className="text-xs text-blue-100">Response</div>
                      </div>
                    </div>
                    <button className="w-full bg-secondary-500 text-white py-2 rounded-lg font-semibold hover:bg-secondary-600 transition-colors">
                      Smart Match & Book
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Economic Revolution in Numbers
            </h2>
            <p className="text-xl text-gray-600">Real impact, real transformation</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center transform hover:scale-105 transition-transform">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">2,500+</div>
              <div className="text-gray-600">Fundis Empowered</div>
              <div className="text-sm text-secondary-600 mt-1">+300% income growth</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform">
              <div className="text-4xl md:text-5xl font-bold text-secondary-600 mb-2">15,000+</div>
              <div className="text-gray-600">Lives Transformed</div>
              <div className="text-sm text-secondary-600 mt-1">Daily active users</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform">
              <div className="text-4xl md:text-5xl font-bold text-accent-600 mb-2">&lt; 15min</div>
              <div className="text-gray-600">Response Time</div>
              <div className="text-sm text-secondary-600 mt-1">Emergency services</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">96%</div>
              <div className="text-gray-600">Satisfaction</div>
              <div className="text-sm text-secondary-600 mt-1">Community happiness</div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Beyond Basic Booking
            </h2>
            <p className="text-xl text-gray-600">
              Revolutionary features that create an economic ecosystem
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {innovativeFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 group">
                <div className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the most requested services powered by community intelligence
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                to={`/services?category=${service.name.toLowerCase()}`}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 group border border-gray-100"
              >
                <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{service.providers} verified providers</p>
                <div className="flex items-center text-primary-600 text-sm font-medium">
                  <span>Explore</span>
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Secret Sauce
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What makes Fundi Connect irresistible to both Marias and Hassans
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-50 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <feature.icon className="h-10 w-10 text-primary-600 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with Social Proof */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Life-Changing Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real transformations from real people in your community
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                  <div className="ml-auto">
                    <span className="bg-accent-100 text-accent-700 px-2 py-1 rounded-full text-xs font-medium">
                      {testimonial.badge}
                    </span>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce-gentle"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Community?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join the economic revolution that's empowering fundis and delighting customers across Africa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
            >
              <Brain className="h-5 w-5" />
              <span>Experience AI Magic</span>
            </Link>
            <Link
              to="/providers"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30 flex items-center justify-center space-x-2"
            >
              <TrendingUp className="h-5 w-5" />
              <span>Grow Your Empire</span>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Assistant */}
      <AIAssistant />
      
      {/* Emergency Button */}
      <EmergencyButton />
      
      {/* Gamified Progress for logged in users */}
      <div className="fixed bottom-24 right-6 z-40">
        <GamefiedProgress />
      </div>
    </div>
  );
};