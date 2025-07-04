import { useState } from 'react'
import { Building2, MapPin, Phone, Mail, Globe, Star, Search } from 'lucide-react'

export const NGOList = () => {
  const allNgos = [
    {
      id: 1,
      name: "People For Animals (PFA)",
      description: "India's largest animal rights organization founded by Maneka Gandhi, working for animal welfare and rescue operations across the country.",
      address: "B-2/7 Safdarjung Enclave, New Delhi - 110029",
      phone: "+91-11-2619-4545",
      email: "info@peopleforanimalsindia.org",
      website: "www.peopleforanimalsindia.org",
      rating: 4.8,
      verified: true,
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      name: "Animal Aid Unlimited",
      description: "Rescuing and treating the street animals of Udaipur, India. Operating an animal hospital and sanctuary for disabled animals.",
      address: "Badi Village, Udaipur, Rajasthan - 313001",
      phone: "+91-294-2431-026",
      email: "info@animalaidunlimited.org",
      website: "www.animalaidunlimited.org",
      rating: 4.9,
      verified: true,
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "Karuna Society for Animals & Nature",
      description: "Working for animal welfare, wildlife conservation, and environmental protection in Bangalore and surrounding areas.",
      address: "#23, 4th Cross, Wilson Garden, Bangalore - 560027",
      phone: "+91-80-2222-0544",
      email: "karunasociety@gmail.com",
      website: "www.karunasociety.org",
      rating: 4.7,
      verified: true,
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      name: "Friendicoes SECA",
      description: "Delhi-based organization providing shelter, medical care, and rehabilitation for stray and abandoned animals.",
      address: "Jangpura Extension, New Delhi - 110014",
      phone: "+91-11-2431-1299",
      email: "info@friendicoes.org",
      website: "www.friendicoes.org",
      rating: 4.6,
      verified: true,
      image: "https://images.unsplash.com/photo-1601758003122-479da08ce1b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 5,
      name: "World For All Animal Care & Adoptions",
      description: "Mumbai-based NGO focused on street animal welfare, adoptions, and creating awareness about animal rights.",
      address: "Goregaon East, Mumbai, Maharashtra - 400063",
      phone: "+91-98-2020-7777",
      email: "info@worldforall.co",
      website: "www.worldforall.co",
      rating: 4.8,
      verified: true,
      image: "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 6,
      name: "Blue Cross of India",
      description: "Chennai's premier animal welfare organization providing veterinary care, rescue operations, and shelter services.",
      address: "#4, 4th Street, Shenoy Nagar, Chennai - 600030",
      phone: "+91-44-2663-1589",
      email: "bluecrossofindia@gmail.com",
      website: "www.bluecrossofindia.org",
      rating: 4.5,
      verified: true,
      image: "https://images.unsplash.com/photo-1570018144666-186f575b8d10?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 7,
      name: "Sanjay Gandhi Animal Care Centre",
      description: "Delhi NCR based animal hospital and rescue center providing free treatment and shelter for injured street animals.",
      address: "Alaknanda, New Delhi - 110019",
      phone: "+91-11-2602-3644",
      email: "sgacc@delhi.com",
      website: "www.sgacc.org",
      rating: 4.4,
      verified: true,
      image: "https://images.unsplash.com/photo-1559190394-df5a28aab5c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 8,
      name: "PAWS Mumbai",
      description: "Protecting animals and wildlife through rescue, rehabilitation, and advocacy work in Mumbai and Maharashtra.",
      address: "Bandra West, Mumbai, Maharashtra - 400050",
      phone: "+91-98-9033-4433",
      email: "info@pawsmumbai.org",
      website: "www.pawsmumbai.org",
      rating: 4.7,
      verified: true,
      image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 9,
      name: "Charlie's Animal Rescue Centre",
      description: "Bangalore-based rescue organization providing shelter, medical care, and adoption services for abandoned animals.",
      address: "Doddballapur, Bangalore, Karnataka - 561203",
      phone: "+91-80-2847-5911",
      email: "info@charliesanimalrescue.org",
      website: "www.charliesanimalrescue.org",
      rating: 4.6,
      verified: true,
      image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ]

  const [displayedNgos, setDisplayedNgos] = useState(allNgos.slice(0, 6))
  const [hasMore, setHasMore] = useState(allNgos.length > 6)

  const loadMore = () => {
    const currentCount = displayedNgos.length
    const nextBatch = allNgos.slice(currentCount, currentCount + 3)
    const newDisplayed = [...displayedNgos, ...nextBatch]
    setDisplayedNgos(newDisplayed)
    setHasMore(newDisplayed.length < allNgos.length)
  }

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
          {displayedNgos.map((ngo) => (
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
                  <button 
                    onClick={() => window.open(`tel:${ngo.phone}`, '_self')}
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Call Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          {hasMore && (
            <button
              onClick={loadMore}
              className="px-8 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              Load More NGOs
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
