import React, { useState } from 'react';
import { 
  Users, 
  Award, 
  TrendingUp, 
  MessageSquare, 
  Heart, 
  Share2,
  ChevronRight,
  Star,
  MapPin,
  Clock,
  CheckCircle,
  Crown,
  Zap,
  Target,
  Gift,
  Trophy,
  Sparkles,
  Brain,
  DollarSign
} from 'lucide-react';

const communityStats = [
  { label: 'Active Members', value: '15,420', icon: Users, color: 'bg-primary-500' },
  { label: 'Services Completed', value: '48,392', icon: CheckCircle, color: 'bg-secondary-500' },
  { label: 'Community Champions', value: '2,156', icon: Award, color: 'bg-accent-500' },
  { label: 'Economic Impact', value: 'KES 2.4M', icon: DollarSign, color: 'bg-purple-500' }
];

const leaderboard = [
  {
    id: 1,
    name: 'Hassan Mwangi',
    profession: 'Master Electrician',
    level: 15,
    xp: 24500,
    badge: 'Community Legend',
    avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400',
    achievements: ['First Responder', 'Quality Master', 'Community Builder'],
    impact: 'Empowered 340 customers, Mentored 12 fundis'
  },
  {
    id: 2,
    name: 'Grace Wanjiku',
    profession: 'Professional Plumber',
    level: 12,
    xp: 18200,
    badge: 'Rising Champion',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    achievements: ['Emergency Hero', 'Customer Favorite', 'Skill Expert'],
    impact: 'Solved 245 emergencies, 4.9 avg rating'
  },
  {
    id: 3,
    name: 'Catherine Njoki',
    profession: 'Community Coordinator',
    level: 18,
    xp: 31000,
    badge: 'Neighborhood Queen',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
    achievements: ['Ambassador Pro', 'Connection Catalyst', 'Growth Driver'],
    impact: 'Connected 500+ neighbors, Launched 3 programs'
  }
];

const communityPosts = [
  {
    id: 1,
    author: 'Sarah Ochieng',
    authorAvatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'Westlands',
    time: '2 hours ago',
    type: 'success_story',
    content: 'Hassan\'s AI-recommended maintenance saved my business from a major electrical failure! The predictive system suggested an inspection just in time. This platform is pure magic! ✨⚡',
    likes: 47,
    comments: 12,
    shares: 8,
    image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider: 'Hassan Mwangi',
    service: 'Predictive Maintenance',
    earnings: 'KES 15,000',
    badge: 'AI Success'
  },
  {
    id: 2,
    author: 'Michael Kimani',
    authorAvatar: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'Karen',
    time: '5 hours ago',
    type: 'community_challenge',
    content: 'Community Challenge Alert! 🏆 Let\'s help 50 new fundis get verified this month. Current progress: 23/50. Every referral earns 100 XP + community impact points!',
    likes: 89,
    comments: 34,
    shares: 21,
    image: null,
    challengeProgress: 46,
    reward: '500 XP + Premium Badge'
  },
  {
    id: 3,
    author: 'Faith Akinyi',
    authorAvatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'Lavington',
    time: '1 day ago',
    type: 'milestone',
    content: 'Celebrating my 1-year anniversary! From struggling to find clients to serving 380 happy customers. The growth academy courses transformed my business. Thank you, community! 🙏💪',
    likes: 156,
    comments: 45,
    shares: 28,
    image: 'https://images.pexels.com/photos/4099464/pexels-photo-4099464.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider: 'Faith Akinyi',
    milestone: '1 Year Anniversary',
    growth: '+300% income'
  }
];

const weeklyHighlights = [
  {
    title: 'Emergency Hero Week',
    description: 'Hassan responded to 12 emergencies in record time',
    icon: Zap,
    color: 'bg-red-500'
  },
  {
    title: 'Community Growth',
    description: '47 new members joined our neighborhood',
    icon: TrendingUp,
    color: 'bg-secondary-500'
  },
  {
    title: 'AI Predictions',
    description: 'Prevented 23 major home issues this week',
    icon: Brain,
    color: 'bg-primary-500'
  }
];

export const CommunityPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('feed');
  const [showCreatePost, setShowCreatePost] = useState(false);

  const getPostTypeIcon = (type: string) => {
    switch (type) {
      case 'success_story': return <Trophy className="h-5 w-5 text-accent-500" />;
      case 'community_challenge': return <Target className="h-5 w-5 text-purple-500" />;
      case 'milestone': return <Crown className="h-5 w-5 text-secondary-500" />;
      default: return <MessageSquare className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Header */}
      <div className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 left-20 w-32 h-32 bg-white/10 rounded-full animate-bounce-gentle"></div>
        <div className="absolute bottom-10 right-20 w-24 h-24 bg-white/10 rounded-full animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="h-8 w-8 text-accent-400" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Community Universe
              </h1>
              <Sparkles className="h-8 w-8 text-accent-400" />
            </div>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Where fundis become legends, customers become champions, and neighborhoods become economic powerhouses
            </p>
          </div>
          
          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {communityStats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
                <div className={`w-16 h-16 ${stat.color} rounded-2xl mx-auto mb-4 flex items-center justify-center`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <p className="text-sm text-blue-100">{stat.label}</p>
                <div className="mt-2 w-full bg-white/20 rounded-full h-2">
                  <div className="bg-accent-400 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Enhanced Navigation */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="flex space-x-8 border-b">
            {[
              { key: 'feed', label: 'Community Feed', icon: MessageSquare },
              { key: 'leaderboard', label: 'Legends Board', icon: Trophy },
              { key: 'challenges', label: 'Community Challenges', icon: Target }
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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {activeTab === 'feed' && (
              <div className="space-y-6">
                {/* Enhanced Create Post */}
                <div className="bg-white rounded-2xl shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                    <Sparkles className="h-5 w-5 text-accent-500" />
                    <span>Share Your Success Story</span>
                  </h3>
                  <div className="space-y-4">
                    <textarea
                      rows={3}
                      placeholder="Share your wins, help a neighbor, or celebrate a milestone..."
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors">
                          <span>📷</span>
                          <span>Add Photo</span>
                        </button>
                        <button className="flex items-center space-x-2 text-secondary-600 hover:text-secondary-700 transition-colors">
                          <Trophy className="h-4 w-4" />
                          <span>Share Achievement</span>
                        </button>
                        <button className="flex items-center space-x-2 text-accent-600 hover:text-accent-700 transition-colors">
                          <Target className="h-4 w-4" />
                          <span>Start Challenge</span>
                        </button>
                      </div>
                      <button className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-2 rounded-xl hover:shadow-lg transition-all">
                        Share & Earn XP
                      </button>
                    </div>
                  </div>
                </div>

                {/* Enhanced Community Posts */}
                <div className="space-y-6">
                  {communityPosts.map((post) => (
                    <div key={post.id} className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-all border border-gray-100">
                      <div className="flex items-center space-x-3 mb-4">
                        <img
                          src={post.authorAvatar}
                          alt={post.author}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-medium text-gray-900">{post.author}</h4>
                            {getPostTypeIcon(post.type)}
                            {post.badge && (
                              <span className="bg-accent-100 text-accent-700 px-2 py-1 rounded-full text-xs font-medium">
                                {post.badge}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <MapPin className="h-4 w-4" />
                            <span>{post.location}</span>
                            <span>•</span>
                            <Clock className="h-4 w-4" />
                            <span>{post.time}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4 leading-relaxed">{post.content}</p>
                      
                      {/* Special Post Elements */}
                      {post.type === 'community_challenge' && post.challengeProgress && (
                        <div className="bg-purple-50 rounded-xl p-4 mb-4 border border-purple-200">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-purple-700 font-medium">Challenge Progress</span>
                            <span className="text-purple-600 text-sm">{post.challengeProgress}% Complete</span>
                          </div>
                          <div className="w-full bg-purple-200 rounded-full h-3">
                            <div 
                              className="bg-purple-500 h-3 rounded-full transition-all duration-500"
                              style={{ width: `${post.challengeProgress}%` }}
                            ></div>
                          </div>
                          <p className="text-purple-600 text-sm mt-2">Reward: {post.reward}</p>
                        </div>
                      )}

                      {post.milestone && (
                        <div className="bg-secondary-50 rounded-xl p-4 mb-4 border border-secondary-200">
                          <div className="flex items-center space-x-2 mb-2">
                            <Crown className="h-5 w-5 text-secondary-600" />
                            <span className="text-secondary-700 font-medium">{post.milestone}</span>
                          </div>
                          <p className="text-secondary-600 text-sm">Growth: {post.growth}</p>
                        </div>
                      )}
                      
                      {post.image && (
                        <div className="mb-4">
                          <img
                            src={post.image}
                            alt="Post image"
                            className="w-full h-64 object-cover rounded-xl"
                          />
                        </div>
                      )}
                      
                      {post.provider && (
                        <div className="bg-gray-50 rounded-xl p-4 mb-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-600">Service by</p>
                              <p className="font-medium text-gray-900">{post.provider}</p>
                              <p className="text-sm text-primary-600">{post.service}</p>
                              {post.earnings && (
                                <p className="text-sm text-secondary-600 font-medium">Earned: {post.earnings}</p>
                              )}
                            </div>
                            <button className="text-primary-600 hover:text-primary-700 transition-colors">
                              <ChevronRight className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                          <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors">
                            <Heart className="h-5 w-5" />
                            <span>{post.likes}</span>
                          </button>
                          <button className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors">
                            <MessageSquare className="h-5 w-5" />
                            <span>{post.comments}</span>
                          </button>
                          <button className="flex items-center space-x-2 text-gray-600 hover:text-secondary-600 transition-colors">
                            <Share2 className="h-5 w-5" />
                            <span>{post.shares}</span>
                          </button>
                        </div>
                        <button className="text-accent-600 hover:text-accent-700 transition-colors text-sm font-medium">
                          +10 XP
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'leaderboard' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center space-x-2">
                    <Trophy className="h-6 w-6 text-accent-500" />
                    <span>Community Legends</span>
                  </h3>
                  <div className="space-y-6">
                    {leaderboard.map((member, index) => (
                      <div key={member.id} className="relative">
                        <div className={`flex items-center space-x-4 p-6 rounded-2xl border-2 transition-all hover:shadow-lg ${
                          index === 0 ? 'bg-gradient-to-r from-accent-50 to-accent-100 border-accent-200' :
                          index === 1 ? 'bg-gradient-to-r from-secondary-50 to-secondary-100 border-secondary-200' :
                          index === 2 ? 'bg-gradient-to-r from-primary-50 to-primary-100 border-primary-200' :
                          'bg-gray-50 border-gray-200'
                        }`}>
                          <div className="relative">
                            <img
                              src={member.avatar}
                              alt={member.name}
                              className="w-16 h-16 rounded-full object-cover"
                            />
                            <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                              index === 0 ? 'bg-accent-500' :
                              index === 1 ? 'bg-secondary-500' :
                              index === 2 ? 'bg-primary-500' :
                              'bg-gray-500'
                            }`}>
                              {index + 1}
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h4 className="font-semibold text-gray-900">{member.name}</h4>
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                index === 0 ? 'bg-accent-500 text-white' :
                                index === 1 ? 'bg-secondary-500 text-white' :
                                index === 2 ? 'bg-primary-500 text-white' :
                                'bg-gray-500 text-white'
                              }`}>
                                {member.badge}
                              </span>
                            </div>
                            <p className="text-primary-600 font-medium">{member.profession}</p>
                            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                              <div className="flex items-center space-x-1">
                                <Star className="h-4 w-4 text-yellow-400" />
                                <span>Level {member.level}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Zap className="h-4 w-4 text-accent-500" />
                                <span>{member.xp.toLocaleString()} XP</span>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {member.achievements.map((achievement, i) => (
                                <span key={i} className="bg-white/50 text-gray-700 px-2 py-1 rounded-full text-xs">
                                  {achievement}
                                </span>
                              ))}
                            </div>
                            <p className="text-sm text-gray-600 mt-2 italic">{member.impact}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'challenges' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center space-x-2">
                    <Target className="h-6 w-6 text-purple-500" />
                    <span>Active Community Challenges</span>
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-gray-900">Fundi Growth Challenge</h4>
                        <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Active
                        </span>
                      </div>
                      <p className="text-gray-700 mb-4">Help 50 new fundis get verified and start earning. Every successful referral earns community rewards!</p>
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span>Progress</span>
                          <span>23 / 50 fundis</span>
                        </div>
                        <div className="w-full bg-purple-200 rounded-full h-3">
                          <div className="bg-purple-500 h-3 rounded-full" style={{ width: '46%' }}></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-purple-700">
                          <strong>Rewards:</strong> 500 XP + Premium Badge + Community Recognition
                        </div>
                        <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors">
                          Join Challenge
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Enhanced Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <Sparkles className="h-5 w-5 text-accent-500" />
                <span>Weekly Highlights</span>
              </h3>
              <div className="space-y-4">
                {weeklyHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-10 h-10 ${highlight.color} rounded-lg flex items-center justify-center`}>
                      <highlight.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{highlight.title}</h4>
                      <p className="text-sm text-gray-600">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Community Guidelines</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-secondary-500 mt-0.5 flex-shrink-0" />
                  <span>Be respectful and supportive to all community members</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-secondary-500 mt-0.5 flex-shrink-0" />
                  <span>Share honest experiences and helpful insights</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-secondary-500 mt-0.5 flex-shrink-0" />
                  <span>Celebrate wins and support during challenges</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-secondary-500 mt-0.5 flex-shrink-0" />
                  <span>Help build economic opportunities for all</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6 border border-primary-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Community Impact</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Local Jobs Created</span>
                  <span className="font-bold text-primary-600">2,847</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Income Generated</span>
                  <span className="font-bold text-secondary-600">KES 12.4M</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Problems Solved</span>
                  <span className="font-bold text-accent-600">48,392</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-white/50 rounded-lg">
                <p className="text-sm text-gray-700 italic">
                  "Every connection creates opportunity. Every solution builds community. Together, we're transforming neighborhoods into thriving ecosystems."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};