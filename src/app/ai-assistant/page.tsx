'use client'

import { useState } from 'react'
import { Brain, Send, User, Bot, AlertTriangle, Stethoscope, Heart, Baby } from 'lucide-react'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export default function AIAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hello! I am your AI Medical Assistant. I can help you with symptom checking, medical information, medication guidance, and general health questions. Please note that I am not a substitute for professional medical advice. How can I help you today?',
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const quickActions = [
    { icon: AlertTriangle, label: 'Check Symptoms', color: 'text-red-600', bgColor: 'bg-red-50' },
    { icon: Stethoscope, label: 'Medical Info', color: 'text-blue-600', bgColor: 'bg-blue-50' },
    { icon: Heart, label: 'Medication Help', color: 'text-rose-600', bgColor: 'bg-rose-50' },
    { icon: Baby, label: 'Pregnancy Q&A', color: 'text-pink-600', bgColor: 'bg-pink-50' },
  ]

  const handleSendMessage = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: generateAIResponse(input),
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiResponse])
      setIsLoading(false)
    }, 1500)
  }

  const generateAIResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase()
    
    if (lowerInput.includes('headache') || lowerInput.includes('pain')) {
      return 'I understand you\'re experiencing pain. Based on your symptoms, I recommend: 1) Rest in a quiet, dark room, 2) Stay hydrated, 3) Consider over-the-counter pain relief. However, if the pain is severe, persistent, or accompanied by other symptoms like fever or vision changes, please consult a doctor immediately. Would you like me to help you book an appointment?'
    }
    
    if (lowerInput.includes('pregnant') || lowerInput.includes('pregnancy')) {
      return 'Congratulations on your pregnancy! For prenatal care, I recommend: 1) Schedule your first prenatal appointment, 2) Start taking prenatal vitamins with folic acid, 3) Avoid alcohol, smoking, and certain medications, 4) Eat a balanced diet. Our Women\'s Health Hub offers specialized pregnancy care. Would you like more information about our maternity services?'
    }
    
    if (lowerInput.includes('fever') || lowerInput.includes('temperature')) {
      return 'For fever management: 1) Rest and stay hydrated, 2) Use a cool compress, 3) Take appropriate fever-reducing medication. Seek immediate medical attention if fever exceeds 103°F (39.4°C), lasts more than 3 days, or is accompanied by severe symptoms. Should I help you contact a doctor?'
    }
    
    if (lowerInput.includes('appointment') || lowerInput.includes('book')) {
      return 'I\'d be happy to help you book an appointment! You can book online through our appointment system, or I can guide you through the process. What type of appointment do you need - general checkup, specialist consultation, or follow-up visit?'
    }
    
    return 'Thank you for your question. Based on general medical information, I recommend consulting with one of our healthcare professionals for personalized advice. Our hospital has specialists in various fields who can provide expert guidance. Would you like me to help you find the right specialist or book an appointment?'
  }

  const handleQuickAction = (action: string) => {
    setInput(action)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-rose-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Brain className="h-12 w-12 text-rose-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">AI Medical Assistant</h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get instant health guidance, symptom checking, and medical information 24/7. 
            Always consult with healthcare professionals for serious medical concerns.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5" />
            <div className="text-sm text-yellow-800">
              <strong>Medical Disclaimer:</strong> This AI assistant provides general health information only 
              and is not a substitute for professional medical advice, diagnosis, or treatment. 
              Always seek the advice of your physician or qualified health provider.
            </div>
          </div>
        </div>

        {/* Chat Container */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-6">
          {/* Messages Area */}
          <div className="h-[500px] overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`flex items-start max-w-[80%] ${
                    message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      message.role === 'user' ? 'bg-rose-600 ml-3' : 'bg-blue-600 mr-3'
                    }`}
                  >
                    {message.role === 'user' ? (
                      <User className="h-5 w-5 text-white" />
                    ) : (
                      <Bot className="h-5 w-5 text-white" />
                    )}
                  </div>
                  <div
                    className={`rounded-2xl px-4 py-3 ${
                      message.role === 'user'
                        ? 'bg-rose-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    <p className="text-xs mt-1 opacity-70">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 mr-3 flex items-center justify-center">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                  <div className="bg-gray-100 rounded-2xl px-4 py-3">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your health question or describe symptoms..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                disabled={!input.trim() || isLoading}
                className="px-6 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action) => (
              <button
                key={action.label}
                onClick={() => handleQuickAction(`Tell me about ${action.label.toLowerCase()}`)}
                className={`${action.bgColor} rounded-xl p-4 hover:shadow-md transition-shadow text-center`}
              >
                <action.icon className={`h-8 w-8 ${action.color} mx-auto mb-2`} />
                <span className="text-sm font-medium text-gray-900">{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center">
            <AlertTriangle className="h-6 w-6 text-red-600 mr-3" />
            <div>
              <h4 className="font-semibold text-red-900">Medical Emergency?</h4>
              <p className="text-red-700 text-sm">
                If you're experiencing a medical emergency, please call our emergency hotline: 
                <span className="font-bold"> +254 700 000 000</span> or go to the nearest emergency room.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
