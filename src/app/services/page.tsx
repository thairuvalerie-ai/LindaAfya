import Link from 'next/link'
import { Stethoscope, Heart, Brain, Baby, Bone, Eye, Smile, Activity, ArrowRight, Clock, CheckCircle } from 'lucide-react'

interface Service {
  id: string
  title: string
  icon: any
  description: string
  features: string[]
  color: string
  bgColor: string
}

const services: Service[] = [
  {
    id: 'general-medicine',
    title: 'General Medicine',
    icon: Stethoscope,
    description: 'Comprehensive primary care services for routine checkups, preventive care, and treatment of common illnesses.',
    features: ['Routine Checkups', 'Preventive Care', 'Chronic Disease Management', 'Vaccinations', 'Health Screenings'],
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    id: 'cardiology',
    title: 'Cardiology',
    icon: Heart,
    description: 'Advanced cardiac care including diagnostics, treatment, and rehabilitation for heart conditions.',
    features: ['ECG & Echocardiogram', 'Stress Testing', 'Cardiac Catheterization', 'Heart Surgery', 'Rehabilitation'],
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    id: 'neurology',
    title: 'Neurology',
    icon: Brain,
    description: 'Expert diagnosis and treatment of neurological disorders including stroke, epilepsy, and Parkinson\'s disease.',
    features: ['EEG Testing', 'MRI & CT Scans', 'Stroke Treatment', 'Epilepsy Management', 'Memory Disorders'],
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    id: 'obstetrics-gynecology',
    title: 'Obstetrics & Gynecology',
    icon: Baby,
    description: 'Complete women\'s health services including prenatal care, delivery, and gynecological treatments.',
    features: ['Prenatal Care', 'Delivery Services', 'Fertility Treatment', 'Gynecological Surgery', 'Menopause Care'],
    color: 'text-pink-600',
    bgColor: 'bg-pink-50'
  },
  {
    id: 'orthopedics',
    title: 'Orthopedics',
    icon: Bone,
    description: 'Specialized care for bones, joints, and muscles including sports medicine and joint replacement surgery.',
    features: ['Joint Replacement', 'Sports Medicine', 'Fracture Treatment', 'Spine Surgery', 'Physical Therapy'],
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    id: 'ophthalmology',
    title: 'Ophthalmology',
    icon: Eye,
    description: 'Complete eye care services from routine exams to advanced surgical procedures.',
    features: ['Eye Exams', 'Cataract Surgery', 'Glaucoma Treatment', 'LASIK Surgery', 'Pediatric Eye Care'],
    color: 'text-teal-600',
    bgColor: 'bg-teal-50'
  },
  {
    id: 'dental',
    title: 'Dental Services',
    icon: Smile,
    description: 'Comprehensive dental care including preventive, cosmetic, and restorative dentistry.',
    features: ['General Dentistry', 'Orthodontics', 'Oral Surgery', 'Cosmetic Dentistry', 'Emergency Dental Care'],
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  },
  {
    id: 'emergency',
    title: 'Emergency Services',
    icon: Activity,
    description: '24/7 emergency medical care with rapid response team and advanced trauma center.',
    features: ['24/7 Emergency Room', 'Trauma Center', 'Ambulance Services', 'Critical Care', 'Fast Response Team'],
    color: 'text-rose-600',
    bgColor: 'bg-rose-50'
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Stethoscope className="h-12 w-12 text-rose-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Our Medical Services</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive healthcare services designed to meet all your medical needs with 
            state-of-the-art facilities and experienced professionals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className={`${service.bgColor} rounded-2xl p-6 hover:shadow-xl transition-shadow relative overflow-hidden`}
            >
              {/* Decorative background pattern */}
              <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id={`pattern-${service.id}`} width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="10" cy="10" r="2" fill="currentColor"/>
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill={`url(#pattern-${service.id})`} />
                </svg>
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-4">
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/doctors"
                  className="inline-flex items-center mt-4 text-rose-600 font-medium hover:underline text-sm"
                >
                  Find Specialists <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Linda Afya Hospital</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">24/7 Availability</h3>
              <p className="text-gray-600 text-sm">Round-the-clock emergency and critical care services</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Expert Doctors</h3>
              <p className="text-gray-600 text-sm">Board-certified specialists with years of experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Advanced Technology</h3>
              <p className="text-gray-600 text-sm">State-of-the-art medical equipment and facilities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Compassionate Care</h3>
              <p className="text-gray-600 text-sm">Patient-centered approach with personalized attention</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-rose-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Quality Healthcare?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Book an appointment with our specialists today and take the first step towards better health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointments"
              className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Book Appointment
            </Link>
            <Link
              href="/doctors"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center"
            >
              Find a Doctor
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
