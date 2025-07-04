import { Link } from 'react-router-dom'
import { 
  Heart, 
  Building2, 
  Bot,
  MapPin,
  Clock,
  Users
} from 'lucide-react'

export const Home = () => {
  const features = [
    {
      name: 'NGO Directory',
      description: 'Discover verified animal welfare organizations and connect with them.',
      icon: Building2,
      href: '/ngos',
      color: 'bg-blue-500'
    },
    {
      name: 'AI Animal Help',
      description: 'Get immediate AI-powered guidance for animal care and emergencies.',
      icon: Bot,
      href: '/ai-help',
      color: 'bg-green-500'
    }
  ]

  const stats = [
    { name: 'Animals Helped', value: '10,000+' },
    { name: 'Partner NGOs', value: '500+' },
    { name: 'AI Consultations', value: '25,000+' },
    { name: 'Cities Covered', value: '100+' }
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
              <Link
                to="/ngos"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
              >
                <Building2 className="mr-2 h-5 w-5" />
                Browse NGOs
              </Link>
              <Link
                to="/ai-help"
                className="inline-flex items-center px-8 py-4 border-2 border-red-600 text-lg font-medium rounded-md text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
              >
                <Bot className="mr-2 h-5 w-5" />
                Get AI Help
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                to="/ngos"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
              >
                <Building2 className="mr-2 h-5 w-5" />
                Explore NGOs
              </Link>
              <Link
                to="/ai-help"
                className="inline-flex items-center px-8 py-4 border-2 border-red-600 text-lg font-medium rounded-md text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
              >
                <Bot className="mr-2 h-5 w-5" />
                Try AI Assistant
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
