import { useState } from 'react'
import { MessageCircle, Send, AlertTriangle, Phone, MapPin } from 'lucide-react'

export const EmergencyChat = () => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI Emergency Assistant. I'm here to help you with animal emergencies. Please describe the situation you're facing.",
      sender: 'ai',
      timestamp: new Date().toLocaleTimeString()
    }
  ])

  const handleSendMessage = () => {
    if (!message.trim()) return

    const userMessage = {
      id: messages.length + 1,
      text: message,
      sender: 'user' as const,
      timestamp: new Date().toLocaleTimeString()
    }

    setMessages([...messages, userMessage])
    setMessage('')

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        text: "I understand you're dealing with an emergency situation. Based on what you've described, here are my recommendations:\n\n1. Ensure your safety first\n2. If the animal is injured, avoid direct contact unless you're trained\n3. Contact your nearest veterinary emergency service\n\nWould you like me to help you find nearby veterinary services or provide more specific guidance?",
        sender: 'ai' as const,
        timestamp: new Date().toLocaleTimeString()
      }
      setMessages(prev => [...prev, aiResponse])
    }, 1000)
  }

  const quickActions = [
    { text: "Animal is injured", icon: AlertTriangle },
    { text: "Animal seems sick", icon: AlertTriangle },
    { text: "Lost pet", icon: MapPin },
    { text: "Animal in danger", icon: AlertTriangle }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Emergency Banner */}
      <div className="bg-red-600 text-white p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6" />
            <span className="font-semibold">Emergency Mode Active</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-red-700 hover:bg-red-800 rounded-md transition-colors">
              <Phone className="h-4 w-4" />
              Call Emergency Vet
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-red-700 hover:bg-red-800 rounded-md transition-colors">
              <MapPin className="h-4 w-4" />
              Find Nearby Help
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-[calc(100vh-200px)] flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-full">
                <MessageCircle className="h-6 w-6 text-red-500" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  AI Emergency Assistant
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Get immediate guidance for animal emergencies
                </p>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Online</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    msg.sender === 'user'
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                  <p className={`text-xs mt-1 ${
                    msg.sender === 'user' ? 'text-red-100' : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    {msg.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-2 gap-2 mb-4">
              {quickActions.map((action, index) => {
                const Icon = action.icon
                return (
                  <button
                    key={index}
                    onClick={() => setMessage(action.text)}
                    className="flex items-center gap-2 p-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                    {action.text}
                  </button>
                )
              })}
            </div>

            {/* Message Input */}
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Describe the emergency situation..."
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-red-500 focus:border-red-500"
              />
              <button
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
            <div>
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-200">
                Important Notice
              </h3>
              <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                This AI assistant provides general guidance only. For serious emergencies, 
                please contact your local veterinary emergency services immediately. 
                Do not rely solely on AI advice for critical situations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
