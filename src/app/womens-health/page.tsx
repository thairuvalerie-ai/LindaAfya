'use client'

import { useState } from 'react'
import { Baby, Heart, Shield, MessageSquare, Calendar, User, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'

interface Topic {
  id: string
  title: string
  icon: any
  color: string
  bgColor: string
  description: string
  articles: number
}

interface ForumPost {
  id: string
  author: string
  question: string
  answer: string
  doctor: string
  likes: number
  timestamp: string
}

const topics: Topic[] = [
  {
    id: 'pregnancy',
    title: 'Pregnancy Care',
    icon: Baby,
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
    description: 'Complete guide to prenatal and postnatal care',
    articles: 24
  },
  {
    id: 'fertility',
    title: 'Fertility & Conception',
    icon: Heart,
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
    description: 'Understanding fertility and family planning',
    articles: 18
  },
  {
    id: 'diseases',
    title: 'Women\'s Diseases',
    icon: Shield,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    description: 'Information about women-specific health conditions',
    articles: 32
  },
  {
    id: 'menopause',
    title: 'Menopause & Aging',
    icon: Clock,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    description: 'Navigating menopause and healthy aging',
    articles: 15
  },
]

const forumPosts: ForumPost[] = [
  {
    id: '1',
    author: 'Anonymous',
    question: 'Is it normal to have spotting during early pregnancy?',
    answer: 'Light spotting can occur in early pregnancy and is often normal, especially around the time your period would be due. However, if the spotting becomes heavy, is accompanied by cramping, or you\'re concerned, it\'s important to consult your healthcare provider for proper evaluation.',
    doctor: 'Dr. Mary Wanjiku',
    likes: 45,
    timestamp: '2 days ago'
  },
  {
    id: '2',
    author: 'Anonymous',
    question: 'What are the first signs of pregnancy I should look for?',
    answer: 'Common early pregnancy signs include missed period, nausea (morning sickness), breast tenderness, fatigue, frequent urination, and food aversions or cravings. However, the only way to confirm pregnancy is through a pregnancy test or medical examination.',
    doctor: 'Dr. Grace Achieng',
    likes: 67,
    timestamp: '5 days ago'
  },
  {
    id: '3',
    author: 'Anonymous',
    question: 'How can I manage morning sickness naturally?',
    answer: 'Natural remedies for morning sickness include eating small, frequent meals, avoiding strong odors, staying hydrated, trying ginger tea or candies, getting adequate rest, and eating crackers before getting out of bed. If symptoms are severe, consult your doctor about additional treatments.',
    doctor: 'Dr. Sarah Kamau',
    likes: 52,
    timestamp: '1 week ago'
  },
]

export default function WomensHealthPage() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)
  const [showForum, setShowForum] = useState(false)
  const [newQuestion, setNewQuestion] = useState('')
  const [submittedQuestion, setSubmittedQuestion] = useState(false)

  const handleTopicClick = (topicId: string) => {
    setSelectedTopic(topicId)
  }

  const handleAskQuestion = () => {
    if (newQuestion.trim()) {
      setSubmittedQuestion(true)
      setNewQuestion('')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Baby className="h-12 w-12 text-rose-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Women's Health Hub</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dedicated healthcare resources for women including pregnancy support, fertility guidance, 
            and specialized care for women's health issues.
          </p>
        </div>

        {/* Health Topics */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Health Topics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => handleTopicClick(topic.id)}
                className={`${topic.bgColor} rounded-xl p-6 hover:shadow-xl transition-shadow text-left group relative overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-5">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <pattern id={`pattern-${topic.id}`} width="12" height="12" patternUnits="userSpaceOnUse">
                        <circle cx="6" cy="6" r="1.5" fill="currentColor"/>
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill={`url(#pattern-${topic.id})`} />
                  </svg>
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-4">
                    <topic.icon className={`h-7 w-7 ${topic.color} group-hover:scale-110 transition-transform`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{topic.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{topic.description}</p>
                  <span className="text-xs font-medium text-gray-500">{topic.articles} articles</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Topic Detail Modal */}
        {selectedTopic && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <button
              onClick={() => setSelectedTopic(null)}
              className="text-gray-600 hover:text-gray-900 mb-6 flex items-center"
            >
              ← Back to Topics
            </button>
            {(() => {
              const topic = topics.find(t => t.id === selectedTopic)
              if (!topic) return null
              return (
                <>
                  <div className="flex items-center mb-6">
                    <topic.icon className={`h-12 w-12 ${topic.color} mr-4`} />
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{topic.title}</h2>
                      <p className="text-gray-600">{topic.description}</p>
                    </div>
                  </div>

                  <div className={`${topic.bgColor} rounded-xl p-6 mb-8`}>
                    <h3 className="font-bold text-gray-900 mb-4">Key Information</h3>
                    <ul className="space-y-3">
                      {topic.id === 'pregnancy' && (
                        <>
                          <li className="flex items-start text-gray-700">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                            <span>Regular prenatal checkups are essential for monitoring baby's development</span>
                          </li>
                          <li className="flex items-start text-gray-700">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                            <span>Take prenatal vitamins with folic acid before and during pregnancy</span>
                          </li>
                          <li className="flex items-start text-gray-700">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                            <span>Maintain a balanced diet with adequate protein, iron, and calcium</span>
                          </li>
                          <li className="flex items-start text-gray-700">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                            <span>Stay hydrated and avoid alcohol, smoking, and certain medications</span>
                          </li>
                        </>
                      )}
                      {topic.id === 'fertility' && (
                        <>
                          <li className="flex items-start text-gray-700">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                            <span>Track your menstrual cycle to identify fertile windows</span>
                          </li>
                          <li className="flex items-start text-gray-700">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                            <span>Maintain a healthy weight and exercise regularly</span>
                          </li>
                          <li className="flex items-start text-gray-700">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                            <span>Reduce stress through relaxation techniques and adequate sleep</span>
                          </li>
                          <li className="flex items-start text-gray-700">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                            <span>Consult a fertility specialist if conception doesn't occur after 12 months</span>
                          </li>
                        </>
                      )}
                      {topic.id === 'diseases' && (
                        <>
                          <li className="flex items-start text-gray-700">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                            <span>Regular screenings: Pap smears, mammograms, and HPV tests</span>
                          </li>
                          <li className="flex items-start text-gray-700">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                            <span>Know your family history and genetic risk factors</span>
                          </li>
                          <li className="flex items-start text-gray-700">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                            <span>Recognize symptoms of common conditions: PCOS, endometriosis, fibroids</span>
                          </li>
                          <li className="flex items-start text-gray-700">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                            <span>Practice breast self-exams monthly</span>
                          </li>
                        </>
                      )}
                      {topic.id === 'menopause' && (
                        <>
                          <li className="flex items-start text-gray-700">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                            <span>Understand the stages: perimenopause, menopause, postmenopause</span>
                          </li>
                          <li className="flex items-start text-gray-700">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                            <span>Manage symptoms through lifestyle changes and medical treatments</span>
                          </li>
                          <li className="flex items-start text-gray-700">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                            <span>Maintain bone health with calcium and vitamin D</span>
                          </li>
                          <li className="flex items-start text-gray-700">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                            <span>Discuss hormone therapy options with your healthcare provider</span>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>

                  <div className="flex gap-4">
                    <button className="flex-1 px-6 py-3 bg-rose-600 text-white rounded-lg font-semibold hover:bg-rose-700 transition-colors flex items-center justify-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      Book Appointment
                    </button>
                    <button className="flex-1 px-6 py-3 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition-colors flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 mr-2" />
                      Ask a Question
                    </button>
                  </div>
                </>
              )
            })()}
          </div>
        )}

        {/* Anonymous Q&A Forum */}
        <div id="forum" className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <MessageSquare className="h-10 w-10 text-rose-600 mr-3" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Anonymous Q&A Forum</h2>
                <p className="text-gray-600">Ask questions anonymously and get answers from medical professionals</p>
              </div>
            </div>
            <button
              onClick={() => setShowForum(!showForum)}
              className="px-4 py-2 bg-rose-100 text-rose-700 rounded-lg hover:bg-rose-200 transition-colors"
            >
              {showForum ? 'Hide Forum' : 'Show Forum'}
            </button>
          </div>

          {showForum && (
            <>
              {/* Ask Question Form */}
              <div className="bg-rose-50 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-gray-900 mb-4">Ask a Question</h3>
                <div className="flex gap-4">
                  <input
                    type="text"
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                    placeholder="Type your health question anonymously..."
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                  <button
                    onClick={handleAskQuestion}
                    className="px-6 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors flex items-center"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Submit
                  </button>
                </div>
                {submittedQuestion && (
                  <div className="mt-4 bg-green-100 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      <span className="text-green-800">Your question has been submitted. A doctor will respond shortly.</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Forum Posts */}
              <div className="space-y-6">
                {forumPosts.map((post) => (
                  <div key={post.id} className="border border-gray-200 rounded-xl p-6">
                    <div className="flex items-start mb-4">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                        <User className="h-5 w-5 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-gray-900">{post.author}</span>
                          <span className="text-sm text-gray-500">{post.timestamp}</span>
                        </div>
                        <p className="text-gray-700 mt-1">{post.question}</p>
                      </div>
                    </div>

                    <div className="border-l-4 border-rose-600 pl-4 ml-5">
                      <div className="flex items-center mb-2">
                        <Shield className="h-4 w-4 text-rose-600 mr-2" />
                        <span className="font-semibold text-gray-900">{post.doctor}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{post.answer}</p>
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Heart className="h-4 w-4 mr-1" />
                        {post.likes} helpful
                      </div>
                      <button className="text-rose-600 text-sm font-medium hover:underline">
                        View Discussion
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Quick Services */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <Calendar className="h-10 w-10 text-rose-600 mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">Book Appointment</h3>
            <p className="text-gray-600 text-sm mb-4">Schedule a consultation with our women's health specialists</p>
            <button className="text-rose-600 font-semibold hover:underline text-sm">
              Book Now →
            </button>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <MessageSquare className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">Online Consultation</h3>
            <p className="text-gray-600 text-sm mb-4">Connect with doctors via video call from the comfort of your home</p>
            <button className="text-blue-600 font-semibold hover:underline text-sm">
              Start Consultation →
            </button>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <Shield className="h-10 w-10 text-green-600 mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">Emergency Support</h3>
            <p className="text-gray-600 text-sm mb-4">24/7 emergency hotline for urgent women's health concerns</p>
            <button className="text-green-600 font-semibold hover:underline text-sm">
              Call +254 700 000 000
            </button>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <div className="flex items-start">
            <AlertCircle className="h-6 w-6 text-yellow-600 mr-4 mt-0.5" />
            <div>
              <h3 className="font-bold text-yellow-900 mb-2">Important Medical Disclaimer</h3>
              <p className="text-yellow-800 text-sm">
                The information provided in this Women's Health Hub is for educational purposes only 
                and is not a substitute for professional medical advice, diagnosis, or treatment. 
                Always seek the advice of your physician or qualified health provider with any questions 
                you may have regarding a medical condition. In case of emergency, please call our 
                emergency hotline: +254 700 000 000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
