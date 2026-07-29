'use client'

import { useState } from 'react'
import { Star, Quote, User, Calendar, CheckCircle, ArrowRight } from 'lucide-react'

interface Testimonial {
  id: string
  name: string
  treatment: string
  doctor: string
  rating: number
  date: string
  content: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Jane Wanjiku',
    treatment: 'Maternity Care',
    doctor: 'Dr. Mary Wanjiku',
    rating: 5,
    date: '2024-01-15',
    content: 'The care I received during my pregnancy and delivery was exceptional. Dr. Mary and her team made me feel safe and supported throughout. The facilities were modern and clean. I couldn\'t have asked for a better experience.',
    avatar: ''
  },
  {
    id: '2',
    name: 'John Ochieng',
    treatment: 'Cardiac Surgery',
    doctor: 'Dr. Peter Kimani',
    rating: 5,
    date: '2024-01-10',
    content: 'After my heart surgery, I was amazed by the level of care and attention I received. Dr. Peter is an incredible surgeon, and the nursing staff was attentive and compassionate. I\'m now living a healthier life thanks to Linda Afya Hospital.',
    avatar: ''
  },
  {
    id: '3',
    name: 'Grace Kamau',
    treatment: 'Pediatric Care',
    doctor: 'Dr. James Ochieng',
    rating: 5,
    date: '2024-01-08',
    content: 'Dr. James has been taking care of my children for years. He\'s patient, knowledgeable, and always takes the time to explain everything. The pediatric department is child-friendly and well-equipped. Highly recommend!',
    avatar: ''
  },
  {
    id: '4',
    name: 'Michael Mwangi',
    treatment: 'Orthopedic Surgery',
    doctor: 'Dr. John Mwangi',
    rating: 4,
    date: '2024-01-05',
    content: 'I had knee replacement surgery and the recovery process was smooth. The physical therapy team was excellent, and Dr. John followed up regularly. The hospital\'s modern equipment made a big difference in my recovery.',
    avatar: ''
  },
  {
    id: '5',
    name: 'Sarah Achieng',
    treatment: 'Dermatology Treatment',
    doctor: 'Dr. Grace Achieng',
    rating: 5,
    date: '2024-01-02',
    content: 'Dr. Grace helped me with a chronic skin condition that other doctors couldn\'t diagnose. Her expertise and modern treatment options finally gave me relief. The dermatology department is top-notch.',
    avatar: ''
  },
  {
    id: '6',
    name: 'David Kimani',
    treatment: 'Emergency Care',
    doctor: 'Emergency Team',
    rating: 5,
    date: '2023-12-28',
    content: 'When I had a medical emergency late at night, the response was incredible. The emergency team was professional, quick, and saved my life. I\'m forever grateful to the entire emergency department staff.',
    avatar: ''
  },
]

export default function TestimonialsPage() {
  const [filter, setFilter] = useState('all')

  const filteredTestimonials = filter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.rating === parseInt(filter))

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Quote className="h-12 w-12 text-rose-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Patient Testimonials</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Read what our patients have to say about their experiences at Linda Afya Hospital. 
            Their stories reflect our commitment to exceptional healthcare.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl font-bold text-rose-600 mb-2">4.9</div>
            <div className="flex items-center justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 text-sm">Average Rating</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">15,000+</div>
            <p className="text-gray-600 text-sm">Happy Patients</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
            <p className="text-gray-600 text-sm">Satisfaction Rate</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">20+</div>
            <p className="text-gray-600 text-sm">Years of Service</p>
          </div>
        </div>

        {/* Filter */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-lg shadow-md p-1">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                filter === 'all' ? 'bg-rose-600 text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Reviews
            </button>
            <button
              onClick={() => setFilter('5')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                filter === '5' ? 'bg-rose-600 text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              5 Stars
            </button>
            <button
              onClick={() => setFilter('4')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                filter === '4' ? 'bg-rose-600 text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              4 Stars
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-5">
                <svg className="w-32 h-32" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id={`pattern-test-${testimonial.id}`} width="10" height="10" patternUnits="userSpaceOnUse">
                      <circle cx="5" cy="5" r="1" fill="currentColor"/>
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill={`url(#pattern-test-${testimonial.id})`} />
                </svg>
              </div>
              <div className="relative z-10">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.treatment}</p>
                    <p className="text-xs text-gray-500">with {testimonial.doctor}</p>
                  </div>
                </div>

              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-4 line-clamp-4">"{testimonial.content}"</p>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(testimonial.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </div>
                <div className="flex items-center text-green-600">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  Verified
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <div className="bg-gradient-to-r from-rose-600 to-blue-600 rounded-2xl p-8 mb-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Quote className="h-16 w-16 mb-6 opacity-50" />
              <p className="text-2xl font-medium mb-6 leading-relaxed">
                "Linda Afya Hospital saved my life. The emergency response was incredible, 
                and the follow-up care has been exceptional. I can't thank the team enough 
                for their dedication and expertise."
              </p>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                  <User className="h-8 w-8 text-white" />
                </div>
                <div>
                  <p className="font-bold">David Kimani</p>
                  <p className="text-sm opacity-90">Emergency Care Patient</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 text-yellow-300 fill-current" />
                ))}
              </div>
              <p className="text-5xl font-bold mb-2">5.0</p>
              <p className="text-lg opacity-90">Featured Review</p>
            </div>
          </div>
        </div>

        {/* Share Your Experience */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Share Your Experience</h2>
              <p className="text-gray-600 mb-6">
                Have you been a patient at Linda Afya Hospital? We'd love to hear about your experience. 
                Your feedback helps us improve our services and helps other patients make informed decisions.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <span>Your review helps other patients choose the right healthcare</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <span>Your feedback helps us improve our services</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <span>All reviews are verified for authenticity</span>
                </li>
              </ul>
              <button className="px-8 py-3 bg-rose-600 text-white rounded-lg font-semibold hover:bg-rose-700 transition-colors inline-flex items-center">
                Write a Review
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 text-center">
              <Quote className="h-16 w-16 text-purple-600 mx-auto mb-4" />
              <p className="text-gray-700 mb-4">
                "Your voice matters. Help us build a healthier community by sharing your experience."
              </p>
              <div className="flex items-center justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-gray-400" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
