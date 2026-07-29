import Link from 'next/link'
import { Heart, Brain, Stethoscope, Baby, Calendar, MessageSquare, Shield, Users, ArrowRight, Phone, Clock } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-50 via-white to-blue-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Advanced Healthcare with 
                <span className="text-rose-600"> AI-Powered</span> Support
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Experience compassionate care combined with cutting-edge technology. 
                Register for government health programs, book appointments online, 
                and access 24/7 AI medical assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/appointments"
                  className="inline-flex items-center justify-center px-8 py-4 bg-rose-600 text-white rounded-lg font-semibold hover:bg-rose-700 transition-colors"
                >
                  Book Appointment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="/ai-assistant"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 border-2 border-gray-300 rounded-lg font-semibold hover:border-rose-600 transition-colors"
                >
                  <Brain className="mr-2 h-5 w-5" />
                  Try AI Assistant
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-rose-600" />
                  24/7 Emergency Services
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-rose-600" />
                  +254 700 000 000
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-rose-100 to-blue-100 rounded-2xl p-8 lg:p-12 relative overflow-hidden">
                {/* Decorative background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)" />
                  </svg>
                </div>
                
                <div className="relative z-10">
                  {/* Hospital illustration */}
                  <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-24 h-24 bg-gradient-to-br from-rose-400 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <Stethoscope className="h-12 w-12 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Linda Afya Hospital</h3>
                    <p className="text-sm text-gray-600 text-center">Modern Healthcare Excellence</p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <Heart className="h-8 w-8 text-rose-600 mb-3" />
                      <h3 className="font-semibold text-gray-900">Quality Care</h3>
                      <p className="text-sm text-gray-600 mt-1">Compassionate healthcare services</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <Brain className="h-8 w-8 text-blue-600 mb-3" />
                      <h3 className="font-semibold text-gray-900">AI Support</h3>
                      <p className="text-sm text-gray-600 mt-1">24/7 intelligent medical assistance</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <Shield className="h-8 w-8 text-green-600 mb-3" />
                      <h3 className="font-semibold text-gray-900">Government Programs</h3>
                      <p className="text-sm text-gray-600 mt-1">SHA, Linda Mama & more</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <Users className="h-8 w-8 text-purple-600 mb-3" />
                      <h3 className="font-semibold text-gray-900">Expert Doctors</h3>
                      <p className="text-sm text-gray-600 mt-1">Specialized medical professionals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Government Programs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Government Health Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Register for government-sponsored health programs and access affordable healthcare services
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/government-programs" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 hover:shadow-xl transition-shadow">
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">SHA Registration</h3>
                <p className="text-gray-600 mb-4">
                  Social Health Authority registration for comprehensive health coverage
                </p>
                <span className="text-blue-600 font-semibold group-hover:underline">
                  Register Now →
                </span>
              </div>
            </Link>
            <Link href="/government-programs" className="group">
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-8 hover:shadow-xl transition-shadow">
                <Baby className="h-12 w-12 text-pink-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Linda Mama</h3>
                <p className="text-gray-600 mb-4">
                  Maternal health program for expectant mothers and new parents
                </p>
                <span className="text-pink-600 font-semibold group-hover:underline">
                  Enroll Now →
                </span>
              </div>
            </Link>
            <Link href="/government-programs" className="group">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 hover:shadow-xl transition-shadow">
                <Users className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">NHIF Integration</h3>
                <p className="text-gray-600 mb-4">
                  National Hospital Insurance Fund for affordable healthcare access
                </p>
                <span className="text-green-600 font-semibold group-hover:underline">
                  Learn More →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare services designed to meet all your medical needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <Stethoscope className="h-10 w-10 text-rose-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">General Medicine</h3>
              <p className="text-sm text-gray-600">Primary care and routine checkups</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <Brain className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">AI Diagnosis</h3>
              <p className="text-sm text-gray-600">AI-powered symptom checking</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <Calendar className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Appointments</h3>
              <p className="text-sm text-gray-600">Online booking system</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <MessageSquare className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Telemedicine</h3>
              <p className="text-sm text-gray-600">Online doctor consultations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Women's Health Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Women's Health Hub
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Dedicated healthcare services for women including pregnancy support, 
                fertility guidance, and specialized care for women's health issues.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Baby className="h-6 w-6 text-rose-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Pregnancy Care</h4>
                    <p className="text-gray-600">Complete prenatal and postnatal support</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Heart className="h-6 w-6 text-rose-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Fertility Support</h4>
                    <p className="text-gray-600">Expert guidance and treatment options</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="h-6 w-6 text-rose-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Disease Education</h4>
                    <p className="text-gray-600">Information and prevention resources</p>
                  </div>
                </li>
              </ul>
              <Link 
                href="/womens-health"
                className="inline-flex items-center px-8 py-4 bg-rose-600 text-white rounded-lg font-semibold hover:bg-rose-700 transition-colors"
              >
                Explore Women's Health
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="text-center">
                <Baby className="h-16 w-16 text-rose-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Anonymous Q&A Forum</h3>
                <p className="text-gray-600 mb-6">
                  Ask questions anonymously and get answers from medical professionals
                </p>
                <Link 
                  href="/womens-health#forum"
                  className="inline-flex items-center px-6 py-3 bg-rose-100 text-rose-700 rounded-lg font-semibold hover:bg-rose-200 transition-colors"
                >
                  Visit Forum
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Experience Modern Healthcare?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of patients who trust Linda Afya Hospital for their healthcare needs. 
            Book an appointment today or try our AI-powered medical assistant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/appointments"
              className="inline-flex items-center justify-center px-8 py-4 bg-rose-600 text-white rounded-lg font-semibold hover:bg-rose-700 transition-colors"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Appointment
            </Link>
            <Link 
              href="/ai-assistant"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Brain className="mr-2 h-5 w-5" />
              Try AI Assistant
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
