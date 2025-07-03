import React, { useState } from 'react';
import { 
  TrendingUp, 
  Users, 
  Star, 
  Calendar, 
  DollarSign,
  BookOpen,
  Award,
  Target,
  BarChart3,
  MessageSquare,
  Clock,
  CheckCircle
} from 'lucide-react';

interface GrowthMetric {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'stable';
  icon: React.ComponentType<any>;
}

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  progress: number;
  certificate: boolean;
}

const growthMetrics: GrowthMetric[] = [
  {
    label: 'Monthly Revenue',
    value: 'KES 45,600',
    change: '+23%',
    trend: 'up',
    icon: DollarSign
  },
  {
    label: 'New Customers',
    value: '18',
    change: '+35%',
    trend: 'up',
    icon: Users
  },
  {
    label: 'Average Rating',
    value: '4.9',
    change: '+0.2',
    trend: 'up',
    icon: Star
  },
  {
    label: 'Response Time',
    value: '12 mins',
    change: '-8 mins',
    trend: 'up',
    icon: Clock
  }
];

const courses: Course[] = [
  {
    id: '1',
    title: 'Digital Marketing for Service Providers',
    description: 'Learn to market your services online and attract more customers',
    duration: '4 weeks',
    difficulty: 'Beginner',
    progress: 65,
    certificate: false
  },
  {
    id: '2',
    title: 'Customer Service Excellence',
    description: 'Master the art of exceptional customer service and build loyalty',
    duration: '2 weeks',
    difficulty: 'Intermediate',
    progress: 90,
    certificate: true
  },
  {
    id: '3',
    title: 'Advanced Electrical Systems',
    description: 'Stay updated with latest electrical technologies and safety standards',
    duration: '6 weeks',
    difficulty: 'Advanced',
    progress: 30,
    certificate: false
  }
];

export const ProviderGrowthDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('metrics');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-2">Growth Center</h2>
        <p className="text-blue-100">Track your progress and grow your business</p>
      </div>

      {/* Navigation */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex space-x-6 border-b">
          {[
            { key: 'metrics', label: 'Performance Metrics', icon: BarChart3 },
            { key: 'academy', label: 'Skill Academy', icon: BookOpen },
            { key: 'goals', label: 'Business Goals', icon: Target }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
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
      {activeTab === 'metrics' && (
        <div className="space-y-6">
          {/* Metrics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {growthMetrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    metric.trend === 'up' ? 'bg-secondary-100 text-secondary-600' : 'bg-gray-100 text-gray-600'
                  }`}>
                    <metric.icon className="h-5 w-5" />
                  </div>
                  <div className={`flex items-center space-x-1 text-sm font-medium ${
                    metric.trend === 'up' ? 'text-secondary-600' : 'text-red-600'
                  }`}>
                    <TrendingUp className="h-4 w-4" />
                    <span>{metric.change}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
                <p className="text-gray-600 text-sm">{metric.label}</p>
              </div>
            ))}
          </div>

          {/* Revenue Chart */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Trend</h3>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">Interactive chart coming soon</p>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-secondary-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-secondary-600" />
                <div>
                  <p className="font-medium text-gray-900">Job completed for Maria Wanjiku</p>
                  <p className="text-sm text-gray-600">Electrical repair • KES 3,200 • 2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                <Star className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">New 5-star review received</p>
                  <p className="text-sm text-gray-600">"Excellent work and very professional" • 4 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-accent-50 rounded-lg">
                <Calendar className="h-5 w-5 text-accent-600" />
                <div>
                  <p className="font-medium text-gray-900">New booking request</p>
                  <p className="text-sm text-gray-600">Solar panel installation • Tomorrow 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'academy' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Skill Development</h3>
            <div className="space-y-4">
              {courses.map((course) => (
                <div key={course.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-medium text-gray-900">{course.title}</h4>
                        {course.certificate && (
                          <span className="bg-secondary-100 text-secondary-700 px-2 py-1 rounded-full text-xs font-medium">
                            Certificate
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{course.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{course.duration}</span>
                        <span className={`px-2 py-1 rounded ${
                          course.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                          course.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {course.difficulty}
                        </span>
                      </div>
                    </div>
                    <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors text-sm">
                      {course.progress > 0 ? 'Continue' : 'Start Course'}
                    </button>
                  </div>
                  
                  {course.progress > 0 && (
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Certification Benefits</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Award className="h-6 w-6 text-primary-600" />
                </div>
                <h4 className="font-medium text-gray-900">Credibility Boost</h4>
                <p className="text-sm text-gray-600">Stand out with verified skills</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <TrendingUp className="h-6 w-6 text-secondary-600" />
                </div>
                <h4 className="font-medium text-gray-900">Higher Rates</h4>
                <p className="text-sm text-gray-600">Charge premium for expertise</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Users className="h-6 w-6 text-accent-600" />
                </div>
                <h4 className="font-medium text-gray-900">More Bookings</h4>
                <p className="text-sm text-gray-600">Attract quality customers</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'goals' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Goals</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-900">Revenue Target: KES 50,000</span>
                  <span className="text-sm text-gray-600">KES 45,600 / KES 50,000</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-primary-600 h-3 rounded-full" style={{ width: '91%' }}></div>
                </div>
                <p className="text-sm text-gray-600 mt-1">91% complete • KES 4,400 to go</p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-900">New Customers: 20</span>
                  <span className="text-sm text-gray-600">18 / 20</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-secondary-600 h-3 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <p className="text-sm text-gray-600 mt-1">90% complete • 2 more customers needed</p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-900">Maintain 4.8+ Rating</span>
                  <span className="text-sm text-gray-600">Current: 4.9</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-accent-600 h-3 rounded-full" style={{ width: '100%' }}></div>
                </div>
                <p className="text-sm text-secondary-600 mt-1">✓ Goal achieved!</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Growth Recommendations</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                <MessageSquare className="h-5 w-5 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">Improve Response Time</h4>
                  <p className="text-sm text-gray-600">Responding within 5 minutes increases booking by 40%</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 bg-secondary-50 rounded-lg">
                <Star className="h-5 w-5 text-secondary-600 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">Request More Reviews</h4>
                  <p className="text-sm text-gray-600">Follow up with recent customers for testimonials</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 bg-accent-50 rounded-lg">
                <BookOpen className="h-5 w-5 text-accent-600 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">Complete Solar Certification</h4>
                  <p className="text-sm text-gray-600">High demand skill in your area with 30% price premium</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};