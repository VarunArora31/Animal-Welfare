import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { 
  Heart, 
  Search, 
  DollarSign, 
  Building2, 
  MessageCircle, 
  MapPin
} from 'lucide-react'

export const Home = () => {
  const { user } = useAuth()

  const features = [
    {
      name: 'Find Nearby Help',
      description: 'Locate NGOs and veterinary services near you with our geolocation-based search.',
      icon: MapPin,
      href: '/find-help',
      color: 'bg-blue-500'
    },
    {
      name: 'Make a Donation',
      description: 'Support animal welfare organizations with secure online donations.',
      icon: DollarSign,
      href: '/donate',
      color: 'bg-green-500'
    },
    {
      name: 'Browse NGOs',
      description: 'Discover verified animal welfare organizations and their work.',
      icon: Building2,
      href: '/ngos',
      color: 'bg-purple-500'
    },
    {
      name: 'Emergency Chat',
      description: 'Get immediate AI-powered assistance for animal emergencies.',
      icon: MessageCircle,
      href: '/emergency-chat',
      color: 'bg-red-500'
    }
  ]

  const stats = [
    { name: 'Animals Helped', value: '10,000+' },
    { name: 'Partner NGOs', value: '500+' },
    { name: 'Veterinarians', value: '1,200+' },
    { name: 'Donations Raised', value: '$2M+' }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-red-100 dark:bg-red-900/30 rounded-full">
                <Heart className="h-16 w-16 text-red-500" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Helping Animals,
              <span className="text-red-600 dark:text-red-400"> One Life at a Time</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Connect with NGOs, find veterinary help, donate to causes, and get emergency assistance 
              for animals in need. Your compassion can make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {user ? (
                <Link
                  to="/find-help"
                  className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
                >
                  <Search className="mr-2 h-5 w-5" />
                  Find Help Now
                </Link>
              ) : (
                <Link
                  to="/register"
                  className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
                >
                  Get Started
                </Link>
              )}
              <Link
                to="/emergency-chat"
                className="inline-flex items-center px-8 py-4 border-2 border-red-600 text-lg font-medium rounded-md text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Emergency Help
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How We Help Animals
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our platform provides multiple ways to support animal welfare and get help when you need it most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Link
                  key={feature.name}
                  to={feature.href}
                  className="group bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-600"
                >
                  <div className={`inline-flex p-3 rounded-lg ${feature.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.name} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-red-100 font-medium">
                  {stat.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of animal lovers who are making a positive impact. Every action counts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/donate"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
              >
                <DollarSign className="mr-2 h-5 w-5" />
                Donate Now
              </Link>
              <Link
                to="/ngos"
                className="inline-flex items-center px-8 py-4 border-2 border-red-600 text-lg font-medium rounded-md text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
              >
                <Building2 className="mr-2 h-5 w-5" />
                Find NGOs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
