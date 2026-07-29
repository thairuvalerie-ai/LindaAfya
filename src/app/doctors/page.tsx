'use client'

import { useState } from 'react'
import { User, Stethoscope, Star, Clock, MapPin, Calendar, Phone, Mail, Filter, Search } from 'lucide-react'

interface Doctor {
  id: string
  name: string
  specialty: string
  department: string
  experience: string
  rating: number
  reviews: number
  availability: string[]
  education: string[]
  languages: string[]
  image: string
  consultationFee: string
}

const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Kamau',
    specialty: 'General Medicine',
    department: 'General Medicine',
    experience: '15 years',
    rating: 4.9,
    reviews: 124,
    availability: ['Mon', 'Wed', 'Fri'],
    education: ['MBChB - University of Nairobi', 'MPH - Kenyatta University'],
    languages: ['English', 'Swahili', 'Kikuyu'],
    image: '',
    consultationFee: 'KES 2,500'
  },
  {
    id: '2',
    name: 'Dr. James Ochieng',
    specialty: 'Pediatrics',
    department: 'Pediatrics',
    experience: '12 years',
    rating: 4.8,
    reviews: 98,
    availability: ['Tue', 'Thu', 'Sat'],
    education: ['MBChB - Moi University', 'MMed Pediatrics - KNH'],
    languages: ['English', 'Swahili', 'Luo'],
    image: '',
    consultationFee: 'KES 3,000'
  },
  {
    id: '3',
    name: 'Dr. Mary Wanjiku',
    specialty: 'Obstetrics & Gynecology',
    department: 'Obstetrics & Gynecology',
    experience: '18 years',
    rating: 4.9,
    reviews: 156,
    availability: ['Mon', 'Tue', 'Thu'],
    education: ['MBChB - University of Nairobi', 'MMed OBGYN - KNH'],
    languages: ['English', 'Swahili', 'Kikuyu'],
    image: '',
    consultationFee: 'KES 3,500'
  },
  {
    id: '4',
    name: 'Dr. Peter Kimani',
    specialty: 'Cardiology',
    department: 'Cardiology',
    experience: '20 years',
    rating: 5.0,
    reviews: 89,
    availability: ['Wed', 'Fri'],
    education: ['MBChB - University of Nairobi', 'MMed Cardiology - India'],
    languages: ['English', 'Swahili'],
    image: '',
    consultationFee: 'KES 5,000'
  },
  {
    id: '5',
    name: 'Dr. Grace Achieng',
    specialty: 'Dermatology',
    department: 'Dermatology',
    experience: '10 years',
    rating: 4.7,
    reviews: 67,
    availability: ['Mon', 'Wed', 'Thu', 'Fri'],
    education: ['MBChB - Egerton University', 'MMed Dermatology - South Africa'],
    languages: ['English', 'Swahili', 'Luo'],
    image: '',
    consultationFee: 'KES 3,000'
  },
  {
    id: '6',
    name: 'Dr. John Mwangi',
    specialty: 'Orthopedics',
    department: 'Orthopedics',
    experience: '14 years',
    rating: 4.8,
    reviews: 78,
    availability: ['Tue', 'Thu', 'Sat'],
    education: ['MBChB - JKUAT', 'MMed Orthopedics - KNH'],
    languages: ['English', 'Swahili', 'Kikuyu'],
    image: '',
    consultationFee: 'KES 4,000'
  },
]

const departments = ['All Departments', 'General Medicine', 'Pediatrics', 'Obstetrics & Gynecology', 'Cardiology', 'Dermatology', 'Orthopedics']

export default function DoctorsPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null)

  const filteredDoctors = doctors.filter(doctor => {
    const matchesDepartment = selectedDepartment === 'All Departments' || doctor.department === selectedDepartment
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesDepartment && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <User className="h-12 w-12 text-rose-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Our Doctors</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our team of experienced healthcare professionals dedicated to providing 
            compassionate and comprehensive medical care.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search doctors by name or specialty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Doctor Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-br from-rose-100 to-blue-100 p-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <pattern id={`pattern-doc-${doctor.id}`} width="15" height="15" patternUnits="userSpaceOnUse">
                        <circle cx="7.5" cy="7.5" r="1.5" fill="currentColor"/>
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill={`url(#pattern-doc-${doctor.id})`} />
                  </svg>
                </div>
                <div className="relative z-10 flex justify-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <User className="h-12 w-12 text-rose-600" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 text-center mb-1">{doctor.name}</h3>
                <p className="text-rose-600 text-center font-medium mb-4">{doctor.specialty}</p>
                
                <div className="flex items-center justify-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(doctor.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">{doctor.rating} ({doctor.reviews} reviews)</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Stethoscope className="h-4 w-4 mr-2 text-rose-600" />
                    {doctor.department}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-rose-600" />
                    {doctor.experience} experience
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-rose-600" />
                    Available: {doctor.availability.join(', ')}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedDoctor(doctor)}
                    className="flex-1 px-4 py-2 bg-rose-100 text-rose-700 rounded-lg hover:bg-rose-200 transition-colors text-sm font-medium"
                  >
                    View Profile
                  </button>
                  <button className="flex-1 px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors text-sm font-medium">
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Doctor Profile Modal */}
        {selectedDoctor && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="bg-gradient-to-br from-rose-100 to-blue-100 p-8">
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg mr-4">
                      <User className="h-10 w-10 text-rose-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{selectedDoctor.name}</h2>
                      <p className="text-rose-600 font-medium">{selectedDoctor.specialty}</p>
                      <div className="flex items-center mt-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-sm text-gray-600">{selectedDoctor.rating} ({selectedDoctor.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedDoctor(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">About</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start">
                        <Stethoscope className="h-4 w-4 text-rose-600 mr-2 mt-0.5" />
                        <div>
                          <span className="text-gray-600">Department:</span>
                          <span className="text-gray-900 ml-1">{selectedDoctor.department}</span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-4 w-4 text-rose-600 mr-2 mt-0.5" />
                        <div>
                          <span className="text-gray-600">Experience:</span>
                          <span className="text-gray-900 ml-1">{selectedDoctor.experience}</span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Calendar className="h-4 w-4 text-rose-600 mr-2 mt-0.5" />
                        <div>
                          <span className="text-gray-600">Availability:</span>
                          <span className="text-gray-900 ml-1">{selectedDoctor.availability.join(', ')}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">Consultation Fee</h3>
                    <div className="bg-rose-50 rounded-lg p-4">
                      <p className="text-2xl font-bold text-rose-600">{selectedDoctor.consultationFee}</p>
                      <p className="text-sm text-gray-600">per consultation</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="font-bold text-gray-900 mb-3">Education</h3>
                  <ul className="space-y-2">
                    {selectedDoctor.education.map((edu, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-700">
                        <div className="w-2 h-2 bg-rose-600 rounded-full mr-3 mt-1.5" />
                        {edu}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="font-bold text-gray-900 mb-3">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedDoctor.languages.map((lang, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 px-6 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors font-semibold flex items-center justify-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Book Appointment
                  </button>
                  <button className="px-6 py-3 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors font-semibold flex items-center justify-center">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Clinic
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Departments Overview */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Departments</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {departments.slice().map((dept, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
                <Stethoscope className="h-8 w-8 text-rose-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">{dept}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Expert care provided by specialized medical professionals
                </p>
                <button className="text-rose-600 font-medium hover:underline text-sm">
                  View Doctors →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
