import { useAuth } from '../contexts/AuthContext'
import { 
  User, 
  Heart, 
  DollarSign, 
  Building2, 
  MessageCircle, 
  Settings,
  Bell,
  TrendingUp,
  Award
} from 'lucide-react'

export const Dashboard = () => {
  const { user, profile } = useAuth()

  const stats = [
    { name: 'Total Donations', value: '₹5,000', icon: DollarSign, change: '+12%' },
    { name: 'NGOs Supported', value: '3', icon: Building2, change: '+1' },
    { name: 'Emergency Chats', value: '7', icon: MessageCircle, change: '+2' },
    { name: 'Animals Helped', value: '15', icon: Heart, change: '+5' }
  ]

  const recentActivity = [
    {
      id: 1,
      type: 'donation',
      description: 'Donated $50 to Animal Rescue Foundation',
      date: '2 hours ago',
      icon: DollarSign
    },
    {
      id: 2,
      type: 'chat',
      description: 'Used emergency chat for injured cat',
      date: '1 day ago',
      icon: MessageCircle
    },
    {
      id: 3,
      type: 'ngo',
      description: 'Connected with Wildlife Protection Society',
      date: '3 days ago',
      icon: Building2
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Welcome back, {profile?.full_name || user?.email}!
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Here's what's happening with your animal welfare activities.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                <Bell className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                <Settings className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.name} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {stat.name}
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </p>
                  </div>
                  <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full">
                    <Icon className="h-6 w-6 text-red-500" />
                  </div>
                </div>
                <div className="mt-2 flex items-center text-sm">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-600 dark:text-green-400">{stat.change}</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-1">from last month</span>
                </div>
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                Recent Activity
              </h3>
              <div className="space-y-4">
                {recentActivity.map((activity) => {
                  const Icon = activity.icon
                  return (
                    <div key={activity.id} className="flex items-start gap-3">
                      <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                        <Icon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-900 dark:text-white">{activity.description}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{activity.date}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
              <button className="mt-6 w-full text-center text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-medium">
                View all activity
              </button>
            </div>
          </div>

          {/* Profile & Quick Actions */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full">
                  <User className="h-8 w-8 text-red-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {profile?.full_name || 'User'}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                    {profile?.role || 'user'}
                  </p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Email:</span>
                  <span className="text-gray-900 dark:text-white">{user?.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Member since:</span>
                  <span className="text-gray-900 dark:text-white">Jan 2024</span>
                </div>
              </div>
              <button className="mt-4 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                Edit Profile
              </button>
            </div>

            {/* Achievements */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Achievements
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <Award className="h-5 w-5 text-yellow-500" />
                  <div>
                    <p className="font-medium text-yellow-800 dark:text-yellow-200">First Donation</p>
                    <p className="text-xs text-yellow-600 dark:text-yellow-400">Made your first donation</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <Award className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="font-medium text-green-800 dark:text-green-200">Helper</p>
                    <p className="text-xs text-green-600 dark:text-green-400">Used emergency chat 5 times</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Quick Actions
              </h3>
              <div className="space-y-2">
                <button className="w-full px-4 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Make a Donation
                </button>
                <button className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  Emergency Chat
                </button>
                <button className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  Find NGOs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
