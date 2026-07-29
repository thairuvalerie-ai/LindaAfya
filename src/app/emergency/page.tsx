'use client'

import { Phone, Ambulance, AlertTriangle, Clock, Heart, Activity, Shield, MapPin, CheckCircle } from 'lucide-react'

interface EmergencyService {
  id: string
  title: string
  icon: any
  description: string
  responseTime: string
  available: boolean
  color: string
  bgColor: string
}

const emergencyServices: EmergencyService[] = [
  {
    id: 'ambulance',
    title: 'Ambulance Service',
    icon: Ambulance,
    description: '24/7 emergency ambulance service with advanced life support equipment and trained paramedics.',
    responseTime: '8-12 minutes',
    available: true,
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    id: 'trauma',
    title: 'Trauma Center',
    icon: Shield,
    description: 'Level I trauma center with specialized surgical teams and critical care units.',
    responseTime: 'Immediate',
    available: true,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    id: 'cardiac',
    title: 'Cardiac Emergency',
    icon: Heart,
    description: 'Emergency cardiac care with catheterization lab and cardiac surgery team on standby.',
    responseTime: '5-10 minutes',
    available: true,
    color: 'text-rose-600',
    bgColor: 'bg-rose-50'
  },
  {
    id: 'stroke',
    title: 'Stroke Unit',
    icon: Activity,
    description: 'Comprehensive stroke center with rapid response team and advanced imaging capabilities.',
    responseTime: '10-15 minutes',
    available: true,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
]

export default function EmergencyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Emergency Header */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 mb-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-12 w-12 mr-3" />
                <h1 className="text-4xl font-bold">Emergency Services</h1>
              </div>
              <p className="text-lg mb-6">
                24/7 emergency medical care with rapid response teams and state-of-the-art facilities.
                Our emergency department is always ready to handle critical situations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+254700000001"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                  <Phone className="mr-2 h-6 w-6" />
                  Call Emergency: +254 700 000 001
                </a>
                <a
                  href="tel:+254700000000"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-red-600 transition-colors"
                >
                  <Phone className="mr-2 h-6 w-6" />
                  Main Line: +254 700 000 000
                </a>
              </div>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                <Ambulance className="h-16 w-16 text-white" />
              </div>
              <p className="text-2xl font-bold">24/7 Available</p>
              <p className="text-sm opacity-90">Always Ready to Help</p>
            </div>
          </div>
        </div>

        {/* Emergency Services Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Emergency Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyServices.map((service) => (
              <div key={service.id} className={`${service.bgColor} rounded-2xl p-6 hover:shadow-xl transition-shadow`}>
                <service.icon className={`h-12 w-12 ${service.color} mb-4`} />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm">
                    <Clock className={`h-4 w-4 ${service.color} mr-1`} />
                    <span className="text-gray-700">{service.responseTime}</span>
                  </div>
                  {service.available && (
                    <div className="flex items-center text-green-600 text-sm">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Available
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What to Do in Emergency */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What to Do in a Medical Emergency</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">1. Call Immediately</h3>
              <p className="text-gray-600 text-sm">
                Call our emergency hotline at +254 700 000 001 or go directly to the nearest emergency room.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">2. Provide Location</h3>
              <p className="text-gray-600 text-sm">
                Clearly state your location and describe the emergency situation to the dispatcher.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">3. Stay Calm</h3>
              <p className="text-gray-600 text-sm">
                Follow the dispatcher's instructions and remain with the patient until help arrives.
              </p>
            </div>
          </div>
        </div>

        {/* Emergency Department Features */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Emergency Department Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                <Ambulance className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Rapid Response</h3>
                <p className="text-sm text-gray-600">Average response time under 10 minutes</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                <Activity className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Advanced Equipment</h3>
                <p className="text-sm text-gray-600">State-of-the-art diagnostic and treatment equipment</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                <Heart className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Specialized Teams</h3>
                <p className="text-sm text-gray-600">Board-certified emergency medicine specialists</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                <Shield className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Trauma Center</h3>
                <p className="text-sm text-gray-600">Level I trauma center accreditation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact Information */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center">
              <AlertTriangle className="h-8 w-8 mr-3" />
              Emergency Contacts
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">Emergency Hotline</p>
                  <p className="text-sm text-gray-600">24/7 Emergency Line</p>
                </div>
                <a href="tel:+254700000001" className="text-red-600 font-bold text-xl">
                  +254 700 000 001
                </a>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">Ambulance Service</p>
                  <p className="text-sm text-gray-600">Direct Ambulance Dispatch</p>
                </div>
                <a href="tel:+254700000002" className="text-red-600 font-bold text-xl">
                  +254 700 000 002
                </a>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">Poison Control</p>
                  <p className="text-sm text-gray-600">24/7 Poison Emergency</p>
                </div>
                <a href="tel:+254700000003" className="text-red-600 font-bold text-xl">
                  +254 700 000 003
                </a>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <MapPin className="h-8 w-8 mr-3" />
              Location & Directions
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Emergency Department Entrance</p>
                <p className="text-sm text-gray-600 mb-2">
                  123 Healthcare Avenue, Nairobi, Kenya
                </p>
                <p className="text-sm text-gray-600">
                  Use the dedicated emergency entrance on the north side of the hospital building.
                  Clear signage is visible from the main road.
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Parking</p>
                <p className="text-sm text-gray-600">
                  Free emergency parking available directly in front of the emergency entrance.
                  Valet parking available for critical situations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* When to Go to Emergency */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">When to Go to Emergency</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-red-600 mb-4 flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Go to Emergency For:
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                  Chest pain or pressure
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                  Difficulty breathing or shortness of breath
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                  Severe bleeding or deep wounds
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                  Sudden severe headache
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                  Loss of consciousness or fainting
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                  Severe abdominal pain
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                  Signs of stroke (face drooping, arm weakness, speech difficulty)
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                  Major burns or electrical injuries
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-green-600 mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Consider Urgent Care For:
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  Minor cuts and burns
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  Sprains and strains
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  Mild to moderate fever
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  Sore throat or minor infections
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  Rashes or allergic reactions (mild)
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  Earaches or toothaches
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  Minor broken bones (fingers, toes)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-red-100 border-2 border-red-300 rounded-xl p-6">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-red-600 mr-4 mt-0.5" />
            <div>
              <h3 className="font-bold text-red-900 mb-2">Critical Emergency Notice</h3>
              <p className="text-red-800">
                If you or someone else is experiencing a life-threatening emergency, 
                do not wait. Call our emergency hotline immediately at 
                <span className="font-bold"> +254 700 000 001</span> or go directly 
                to the nearest emergency room. Every second counts in a medical emergency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
