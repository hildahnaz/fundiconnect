import React, { useState, useEffect } from 'react';
import { 
  Trophy, 
  Star, 
  Target, 
  Zap, 
  Crown, 
  Gift,
  Sparkles,
  TrendingUp,
  Award,
  Users
} from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  progress: number;
  maxProgress: number;
  completed: boolean;
  reward: string;
  color: string;
}

interface UserStats {
  level: number;
  xp: number;
  nextLevelXp: number;
  totalBookings: number;
  reviewsLeft: number;
  communityRank: number;
  streakDays: number;
}

const achievements: Achievement[] = [
  {
    id: 'first-booking',
    title: 'First Timer',
    description: 'Complete your first service booking',
    icon: Target,
    progress: 1,
    maxProgress: 1,
    completed: true,
    reward: '50 XP + Welcome Badge',
    color: 'bg-blue-500'
  },
  {
    id: 'reviewer',
    title: 'Community Voice',
    description: 'Leave 5 helpful reviews',
    icon: Star,
    progress: 3,
    maxProgress: 5,
    completed: false,
    reward: '100 XP + Reviewer Badge',
    color: 'bg-yellow-500'
  },
  {
    id: 'loyal-customer',
    title: 'Loyal Customer',
    description: 'Book 10 different services',
    icon: Crown,
    progress: 7,
    maxProgress: 10,
    completed: false,
    reward: '200 XP + Premium Discount',
    color: 'bg-purple-500'
  },
  {
    id: 'community-champion',
    title: 'Community Champion',
    description: 'Help 20 neighbors find services',
    icon: Users,
    progress: 12,
    maxProgress: 20,
    completed: false,
    reward: '300 XP + Ambassador Status',
    color: 'bg-secondary-500'
  }
];

const userStats: UserStats = {
  level: 3,
  xp: 750,
  nextLevelXp: 1000,
  totalBookings: 12,
  reviewsLeft: 8,
  communityRank: 47,
  streakDays: 5
};

export const GamefiedProgress: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [celebrateAchievement, setCelebrateAchievement] = useState<Achievement | null>(null);

  const xpProgress = (userStats.xp / userStats.nextLevelXp) * 100;

  useEffect(() => {
    // Simulate achievement unlock
    const timer = setTimeout(() => {
      const unlockedAchievement = achievements.find(a => a.id === 'first-booking');
      if (unlockedAchievement) {
        setCelebrateAchievement(unlockedAchievement);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Progress Widget */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Trophy className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Level {userStats.level}</h3>
              <p className="text-blue-100">Community Member</p>
            </div>
          </div>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="bg-white/20 hover:bg-white/30 transition-colors rounded-lg p-2"
          >
            <Sparkles className="h-5 w-5" />
          </button>
        </div>

        {/* XP Progress */}
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span>Experience Points</span>
            <span>{userStats.xp} / {userStats.nextLevelXp} XP</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-3">
            <div 
              className="bg-accent-400 h-3 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${xpProgress}%` }}
            ></div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold">{userStats.streakDays}</div>
            <div className="text-xs text-blue-100">Day Streak</div>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold">#{userStats.communityRank}</div>
            <div className="text-xs text-blue-100">Community Rank</div>
          </div>
        </div>

        {/* Detailed View */}
        {showDetails && (
          <div className="mt-6 space-y-4 animate-fade-in">
            <h4 className="font-semibold text-lg">Your Achievements</h4>
            <div className="space-y-3">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="bg-white/10 rounded-lg p-3">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 ${achievement.color} rounded-lg flex items-center justify-center`}>
                      <achievement.icon className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-medium">{achievement.title}</h5>
                      <p className="text-xs text-blue-100">{achievement.description}</p>
                      <div className="mt-2">
                        <div className="flex justify-between text-xs mb-1">
                          <span>Progress</span>
                          <span>{achievement.progress} / {achievement.maxProgress}</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div 
                            className="bg-accent-400 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${(achievement.progress / achievement.maxProgress) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    {achievement.completed && (
                      <div className="text-accent-400">
                        <Trophy className="h-5 w-5" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/10 rounded-lg p-4">
              <h5 className="font-medium mb-2">Next Level Rewards</h5>
              <ul className="text-sm text-blue-100 space-y-1">
                <li>• 15% discount on all services</li>
                <li>• Priority customer support</li>
                <li>• Early access to new features</li>
                <li>• Exclusive community events</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Achievement Celebration Modal */}
      {celebrateAchievement && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center animate-slide-up">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-accent-400 to-accent-600 rounded-full flex items-center justify-center mx-auto">
                <Trophy className="h-10 w-10 text-white" />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-400 to-accent-600 animate-ping opacity-25"></div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-2">🎉 Achievement Unlocked!</h2>
            <h3 className="text-xl font-semibold text-primary-600 mb-2">{celebrateAchievement.title}</h3>
            <p className="text-gray-600 mb-4">{celebrateAchievement.description}</p>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h4 className="font-medium text-gray-900 mb-2">Reward Earned:</h4>
              <p className="text-primary-600 font-semibold">{celebrateAchievement.reward}</p>
            </div>

            <button
              onClick={() => setCelebrateAchievement(null)}
              className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              Awesome!
            </button>
          </div>
        </div>
      )}
    </>
  );
};