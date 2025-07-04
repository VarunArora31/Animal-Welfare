import { Building2, MapPin, Phone, Mail, Globe, Star, Search } from 'lucide-react'

export const NGOList = () => {
  const ngos = [
    {
      id: 1,
      name: "Animal Rescue Foundation",
      description: "Dedicated to rescuing and rehabilitating abandoned and injured animals across the city.",
      address: "123 Rescue Street, City Center",
      phone: "+1 (555) 123-4567",
      email: "contact@animalrescue.org",
      website: "www.animalrescue.org",
      rating: 4.8,
      verified: true,
      image: "https://via.placeholder.com/300x200"
    },
    {
      id: 2,
      name: "Wildlife Protection Society",
      description: "Working to protect wildlife habitats and endangered species through conservation efforts.",
      address: "456 Conservation Ave, Green District",
      phone: "+1 (555) 987-6543",
      email: "info@wildlifeprotection.org",
      website: "www.wildlifeprotection.org",
      rating: 4.9,
      verified: true,
      image: "https://via.placeholder.com/300x200"
    },
    {
      id: 3,
      name: "Street Animals Care",
      description: "Providing medical care, food, and shelter for street animals in urban areas.",
      address: "789 Care Boulevard, Suburb Area",
      phone: "+1 (555) 456-7890",
      email: "help@streetanimalscare.org",
      website: "www.streetanimalscare.org",
      rating: 4.7,
      verified: true,
      image: "https://via.placeholder.com/300x200"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Animal Welfare NGOs
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover verified organizations working tirelessly to improve animal welfare and find ways to support their mission.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search NGOs by name or location..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>
            <div>
              <select className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-red-500 focus:border-red-500">
                <option value="">All Categories</option>
                <option value="rescue">Animal Rescue</option>
                <option value="wildlife">Wildlife Conservation</option>
                <option value="pets">Pet Care</option>
                <option value="medical">Medical Aid</option>
              </select>
            </div>
          </div>
        </div>

        {/* NGO Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ngos.map((ngo) => (
            <div key={ngo.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <Building2 className="h-12 w-12 text-gray-400" />
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {ngo.name}
                  </h3>
                  {ngo.verified && (
                    <div className="flex items-center gap-1 px-2 py-1 bg-green-100 dark:bg-green-900/30 rounded-full">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-green-700 dark:text-green-300">Verified</span>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center gap-1 mb-3">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">{ngo.rating}</span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {ngo.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <MapPin className="h-4 w-4" />
                    <span>{ngo.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Phone className="h-4 w-4" />
                    <span>{ngo.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Mail className="h-4 w-4" />
                    <span>{ngo.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Globe className="h-4 w-4" />
                    <span>{ngo.website}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                    Donate
                  </button>
                  <button className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    Contact
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            Load More NGOs
          </button>
        </div>
      </div>
    </div>
  )
}
