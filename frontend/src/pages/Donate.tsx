import { useState } from 'react'
import { DollarSign, Heart, CreditCard, Building2 } from 'lucide-react'

export const Donate = () => {
  const [amount, setAmount] = useState('')
  const [donationType, setDonationType] = useState<'general' | 'ngo'>('general')

  const presetAmounts = [100, 500, 1000, 2000, 5000, 10000]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-red-100 dark:bg-red-900/30 rounded-full">
              <Heart className="h-16 w-16 text-red-500" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Make a Donation
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your contribution helps us save more animals and support organizations working tirelessly for animal welfare.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          {/* Donation Type */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Choose donation type
            </h3>
            <div className="flex gap-4">
              <button
                onClick={() => setDonationType('general')}
                className={`flex-1 p-4 rounded-lg border-2 transition-colors ${
                  donationType === 'general'
                    ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                    : 'border-gray-200 dark:border-gray-600 hover:border-red-300'
                }`}
              >
                <DollarSign className="h-8 w-8 text-red-500 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900 dark:text-white">General Fund</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Support overall animal welfare initiatives
                </p>
              </button>
              <button
                onClick={() => setDonationType('ngo')}
                className={`flex-1 p-4 rounded-lg border-2 transition-colors ${
                  donationType === 'ngo'
                    ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                    : 'border-gray-200 dark:border-gray-600 hover:border-red-300'
                }`}
              >
                <Building2 className="h-8 w-8 text-red-500 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900 dark:text-white">Specific NGO</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Donate directly to a chosen organization
                </p>
              </button>
            </div>
          </div>

          {/* Amount Selection */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Donation amount
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-4">
              {presetAmounts.map((preset) => (
                <button
                  key={preset}
                  onClick={() => setAmount(preset.toString())}
                  className={`p-3 rounded-lg border-2 transition-colors ${
                    amount === preset.toString()
                      ? 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400'
                      : 'border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-red-300'
                  }`}
                >
                  ₹{preset}
                </button>
              ))}
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <DollarSign className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="number"
                placeholder="Enter custom amount"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-md placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-red-500 focus:border-red-500"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>

          {/* NGO Selection */}
          {donationType === 'ngo' && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Select NGO
              </h3>
              <select className="block w-full px-3 py-3 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-red-500 focus:border-red-500">
                <option value="">Choose an NGO...</option>
                <option value="ngo1">Animal Rescue Foundation</option>
                <option value="ngo2">Wildlife Protection Society</option>
                <option value="ngo3">Street Animals Care</option>
                <option value="ngo4">Pet Rehabilitation Center</option>
              </select>
            </div>
          )}

          {/* Message */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Leave a message (optional)
            </h3>
            <textarea
              rows={4}
              placeholder="Share why you're donating or any special message..."
              className="block w-full px-3 py-3 border border-gray-300 dark:border-gray-600 rounded-md placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-red-500 focus:border-red-500"
            />
          </div>

          {/* Payment Method */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Payment method
            </h3>
            <div className="space-y-3">
              <div className="flex items-center p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                <input
                  id="card"
                  name="payment"
                  type="radio"
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300"
                  defaultChecked
                />
                <label htmlFor="card" className="ml-3 flex items-center">
                  <CreditCard className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-900 dark:text-white">Credit/Debit Card</span>
                </label>
              </div>
              <div className="flex items-center p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                <input
                  id="razorpay"
                  name="payment"
                  type="radio"
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300"
                />
                <label htmlFor="razorpay" className="ml-3 flex items-center">
                  <div className="h-5 w-5 bg-blue-600 rounded mr-2"></div>
                  <span className="text-gray-900 dark:text-white">Razorpay</span>
                </label>
              </div>
            </div>
          </div>

          {/* Donation Summary */}
          {amount && (
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Donation Summary
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Donation Amount:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">₹{amount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Processing Fee:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">₹0.00</span>
                </div>
                <hr className="border-gray-200 dark:border-gray-600" />
                <div className="flex justify-between text-lg">
                  <span className="font-semibold text-gray-900 dark:text-white">Total:</span>
                  <span className="font-bold text-red-600 dark:text-red-400">₹{amount}</span>
                </div>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            disabled={!amount}
            onClick={() => {
              if (!amount) return
              alert(`Processing donation of ₹${amount}. In a real app, this would integrate with Razorpay/Stripe payment gateway.`)
            }}
            className="w-full py-4 px-6 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
          >
            <Heart className="h-5 w-5" />
            Donate Now
          </button>

          <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
            Your donation is secure and will be processed through our trusted payment partners.
          </p>
        </div>
      </div>
    </div>
  )
}
