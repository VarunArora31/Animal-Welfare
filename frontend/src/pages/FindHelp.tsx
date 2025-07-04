import { useState } from 'react'
import { MapPin, Search, Phone, Clock, Star } from 'lucide-react'

export const FindHelp = () => {
  const [searchType, setSearchType] = useState<'ngo' | 'vet'>('ngo')
  const [location, setLocation] = useState('')

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Find Help Near You
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Locate nearby NGOs and veterinary services to help animals in need.
          </p>
        </div>

        {/* Search Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                What are you looking for?
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => setSearchType('ngo')}
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${
                    searchType === 'ngo'
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  NGOs
                </button>
                <button
                  onClick={() => setSearchType('vet')}
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${
                    searchType === 'vet'
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  Veterinarians
                </button>
              </div>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Location
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Enter your location"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-red-500 focus:border-red-500"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-end">
              <button className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors flex items-center gap-2">
                <Search className="h-5 w-5" />
                Search
              </button>
            </div>
          </div>

          <button className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 text-sm font-medium flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            Use my current location
          </button>
        </div>

        {/* Results Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map placeholder */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Map View
            </h3>
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">Map integration coming soon</p>
            </div>
          </div>

          {/* Results list */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {searchType === 'ngo' ? 'Nearby NGOs' : 'Nearby Veterinarians'}
            </h3>
            
            {/* Sample results */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {searchType === 'ngo' ? `Animal Welfare NGO ${item}` : `Veterinary Clinic ${item}`}
                  </h4>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">4.{item + 2}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {searchType === 'ngo' 
                    ? 'Dedicated to animal rescue and rehabilitation services.'
                    : 'Full-service veterinary clinic with emergency care available.'
                  }
                </p>
                
                <div className="flex flex-col sm:flex-row gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>2.{item} km away</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>Open 24/7</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors flex items-center gap-1">
                    <Phone className="h-4 w-4" />
                    Call Now
                  </button>
                  <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
