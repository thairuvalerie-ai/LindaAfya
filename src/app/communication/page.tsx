'use client'

import { useState } from 'react'
import { MessageSquare, Send, Phone, Video, Clock, User, Bot, CheckCircle, AlertCircle, Paperclip, MoreVertical } from 'lucide-react'

interface Message {
  id: string
  sender: 'user' | 'doctor' | 'system'
  content: string
  timestamp: Date
  senderName?: string
  attachment?: string
}

interface Conversation {
  id: string
  doctorName: string
  specialty: string
  lastMessage: string
  timestamp: string
  unread: number
  online: boolean
}

export default function CommunicationPage() {
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null)
  const [messageInput, setMessageInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'system',
      content: 'You are now connected with Dr. Sarah Kamau. Messages are end-to-end encrypted.',
      timestamp: new Date(Date.now() - 3600000)
    },
    {
      id: '2',
      sender: 'doctor',
      content: 'Hello! I received your appointment request. How can I help you today?',
      timestamp: new Date(Date.now() - 3500000),
      senderName: 'Dr. Sarah Kamau'
    }
  ])
  const [showSMSModal, setShowSMSModal] = useState(false)
  const [smsNumber, setSmsNumber] = useState('')
  const [smsMessage, setSmsMessage] = useState('')
  const [smsSent, setSmsSent] = useState(false)

  const conversations: Conversation[] = [
    {
      id: '1',
      doctorName: 'Dr. Sarah Kamau',
      specialty: 'General Medicine',
      lastMessage: 'Hello! I received your appointment request...',
      timestamp: '10:30 AM',
      unread: 1,
      online: true
    },
    {
      id: '2',
      doctorName: 'Dr. Mary Wanjiku',
      specialty: 'Obstetrics & Gynecology',
      lastMessage: 'Your test results are normal. No concerns.',
      timestamp: 'Yesterday',
      unread: 0,
      online: false
    },
    {
      id: '3',
      doctorName: 'Dr. Peter Kimani',
      specialty: 'Cardiology',
      lastMessage: 'Please schedule a follow-up next week.',
      timestamp: '2 days ago',
      unread: 0,
      online: true
    },
  ]

  const handleSendMessage = () => {
    if (!messageInput.trim()) return

    const newMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      content: messageInput,
      timestamp: new Date()
    }

    setMessages([...messages, newMessage])
    setMessageInput('')

    // Simulate doctor response
    setTimeout(() => {
      const doctorResponse: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'doctor',
        content: 'Thank you for your message. I will review this and get back to you shortly.',
        timestamp: new Date(),
        senderName: 'Dr. Sarah Kamau'
      }
      setMessages(prev => [...prev, doctorResponse])
    }, 2000)
  }

  const handleSendSMS = () => {
    if (smsNumber && smsMessage) {
      setSmsSent(true)
      setTimeout(() => {
        setSmsSent(false)
        setShowSMSModal(false)
        setSmsNumber('')
        setSmsMessage('')
      }, 3000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <MessageSquare className="h-12 w-12 text-rose-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Patient-Doctor Communication</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Communicate securely with your healthcare providers through online messaging, 
            video calls, and SMS notifications.
          </p>
        </div>

        {/* Communication Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <MessageSquare className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">Secure Messaging</h3>
            <p className="text-gray-600 text-sm mb-4">
              End-to-end encrypted messaging with your doctors for private health discussions
            </p>
            <div className="flex items-center text-green-600 text-sm">
              <CheckCircle className="h-4 w-4 mr-1" />
              HIPAA Compliant
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <Video className="h-10 w-10 text-purple-600 mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">Video Consultations</h3>
            <p className="text-gray-600 text-sm mb-4">
              Face-to-face virtual consultations with specialists from the comfort of your home
            </p>
            <div className="flex items-center text-green-600 text-sm">
              <CheckCircle className="h-4 w-4 mr-1" />
              HD Quality
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <Phone className="h-10 w-10 text-rose-600 mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">SMS Notifications</h3>
            <p className="text-gray-600 text-sm mb-4">
              Receive appointment reminders, test results, and health updates via SMS
            </p>
            <div className="flex items-center text-green-600 text-sm">
              <CheckCircle className="h-4 w-4 mr-1" />
              Instant Delivery
            </div>
          </div>
        </div>

        {/* Main Communication Interface */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-3 h-[600px]">
            {/* Conversations List */}
            <div className="border-r border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <h2 className="font-bold text-gray-900">Messages</h2>
              </div>
              <div className="overflow-y-auto h-[calc(600px-65px)]">
                {conversations.map((conv) => (
                  <button
                    key={conv.id}
                    onClick={() => setSelectedConversation(conv.id)}
                    className={`w-full p-4 text-left hover:bg-gray-50 transition-colors border-b border-gray-100 ${
                      selectedConversation === conv.id ? 'bg-rose-50' : ''
                    }`}
                  >
                    <div className="flex items-start">
                      <div className="relative">
                        <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                          <User className="h-6 w-6 text-rose-600" />
                        </div>
                        {conv.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                        )}
                      </div>
                      <div className="ml-3 flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-gray-900">{conv.doctorName}</h3>
                          <span className="text-xs text-gray-500">{conv.timestamp}</span>
                        </div>
                        <p className="text-sm text-gray-600">{conv.specialty}</p>
                        <p className="text-sm text-gray-500 truncate mt-1">{conv.lastMessage}</p>
                      </div>
                      {conv.unread > 0 && (
                        <div className="ml-2 w-5 h-5 bg-rose-600 rounded-full flex items-center justify-center">
                          <span className="text-xs text-white">{conv.unread}</span>
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="md:col-span-2 flex flex-col">
              {selectedConversation ? (
                <>
                  {/* Chat Header */}
                  <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center mr-3">
                        <User className="h-5 w-5 text-rose-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Dr. Sarah Kamau</h3>
                        <p className="text-sm text-gray-600">General Medicine</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Phone className="h-5 w-5 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Video className="h-5 w-5 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <MoreVertical className="h-5 w-5 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                            message.sender === 'user'
                              ? 'bg-rose-600 text-white'
                              : message.sender === 'system'
                              ? 'bg-gray-100 text-gray-600 text-sm text-center'
                              : 'bg-gray-100 text-gray-900'
                          }`}
                        >
                          {message.sender === 'doctor' && (
                            <p className="text-xs font-semibold mb-1">{message.senderName}</p>
                          )}
                          <p className="text-sm">{message.content}</p>
                          <p className={`text-xs mt-1 ${
                            message.sender === 'user' ? 'text-rose-200' : 'text-gray-500'
                          }`}>
                            {message.timestamp.toLocaleTimeString([], {
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <div className="p-4 border-t border-gray-200">
                    <div className="flex items-center space-x-3">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Paperclip className="h-5 w-5 text-gray-600" />
                      </button>
                      <input
                        type="text"
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Type your message..."
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                      />
                      <button
                        onClick={handleSendMessage}
                        className="p-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors"
                      >
                        <Send className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <MessageSquare className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Select a Conversation</h3>
                    <p className="text-gray-600">Choose a doctor from the list to start messaging</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* SMS Notification Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowSMSModal(true)}
            className="px-8 py-4 bg-rose-600 text-white rounded-lg font-semibold hover:bg-rose-700 transition-colors inline-flex items-center"
          >
            <Phone className="h-5 w-5 mr-2" />
            Send SMS Notification
          </button>
        </div>

        {/* SMS Modal */}
        {showSMSModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Send SMS Notification</h2>
                <button
                  onClick={() => setShowSMSModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <MoreVertical className="h-6 w-6" />
                </button>
              </div>

              {!smsSent ? (
                <>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={smsNumber}
                      onChange={(e) => setSmsNumber(e.target.value)}
                      placeholder="+254 7XX XXX XXX"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      value={smsMessage}
                      onChange={(e) => setSmsMessage(e.target.value)}
                      rows={4}
                      placeholder="Type your message..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <div className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                      <div className="text-sm text-blue-800">
                        SMS notifications are sent instantly. Standard SMS rates may apply 
                        depending on your mobile service provider.
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleSendSMS}
                    disabled={!smsNumber || !smsMessage}
                    className="w-full px-6 py-3 bg-rose-600 text-white rounded-lg font-semibold hover:bg-rose-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    Send SMS
                  </button>
                </>
              ) : (
                <div className="text-center">
                  <CheckCircle className="h-20 w-20 text-green-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">SMS Sent Successfully!</h3>
                  <p className="text-gray-600 mb-6">
                    Your message has been delivered to {smsNumber}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Important Notice */}
        <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <div className="flex items-start">
            <AlertCircle className="h-6 w-6 text-yellow-600 mr-4 mt-0.5" />
            <div>
              <h3 className="font-bold text-yellow-900 mb-2">Important Notice</h3>
              <p className="text-yellow-800 text-sm">
                This communication platform is for non-emergency medical consultations only. 
                In case of medical emergency, please call our emergency hotline immediately: 
                <span className="font-bold"> +254 700 000 000</span> or visit the nearest emergency room.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
