'use client'

import { useState } from 'react'
import { Calendar, Clock, User, Stethoscope, CheckCircle, Phone, Mail, MapPin, AlertCircle } from 'lucide-react'

interface Doctor {
  id: string
  name: string
  specialty: string
  experience: string
  rating: number
  availability: string[]
}

interface TimeSlot {
  time: string
  available: boolean
}

const doctors: Doctor[] = [
  { id: '1', name: 'Dr. Sarah Kamau', specialty: 'General Medicine', experience: '15 years', rating: 4.9, availability: ['Mon', 'Wed', 'Fri'] },
  { id: '2', name: 'Dr. James Ochieng', specialty: 'Pediatrics', experience: '12 years', rating: 4.8, availability: ['Tue', 'Thu', 'Sat'] },
  { id: '3', name: 'Dr. Mary Wanjiku', specialty: 'Obstetrics & Gynecology', experience: '18 years', rating: 4.9, availability: ['Mon', 'Tue', 'Thu'] },
  { id: '4', name: 'Dr. Peter Kimani', specialty: 'Cardiology', experience: '20 years', rating: 5.0, availability: ['Wed', 'Fri'] },
  { id: '5', name: 'Dr. Grace Achieng', specialty: 'Dermatology', experience: '10 years', rating: 4.7, availability: ['Mon', 'Wed', 'Thu', 'Fri'] },
  { id: '6', name: 'Dr. John Mwangi', specialty: 'Orthopedics', experience: '14 years', rating: 4.8, availability: ['Tue', 'Thu', 'Sat'] },
]

const departments = [
  'General Medicine',
  'Pediatrics',
  'Obstetrics & Gynecology',
  'Cardiology',
  'Dermatology',
  'Orthopedics',
  'Neurology',
  'Ophthalmology',
]

const timeSlots: TimeSlot[] = [
  { time: '08:00 AM', available: true },
  { time: '09:00 AM', available: true },
  { time: '10:00 AM', available: false },
  { time: '11:00 AM', available: true },
  { time: '12:00 PM', available: true },
  { time: '02:00 PM', available: true },
  { time: '03:00 PM', available: false },
  { time: '04:00 PM', available: true },
]

export default function AppointmentsPage() {
  const [step, setStep] = useState(1)
  const [selectedDepartment, setSelectedDepartment] = useState('')
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [patientInfo, setPatientInfo] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    dateOfBirth: '',
    reason: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleDepartmentSelect = (dept: string) => {
    setSelectedDepartment(dept)
    setStep(2)
  }

  const handleDoctorSelect = (doctor: Doctor) => {
    setSelectedDoctor(doctor)
    setStep(3)
  }

  const handleDateTimeSelect = () => {
    if (selectedDate && selectedTime) {
      setStep(4)
    }
  }

  const handlePatientInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const resetBooking = () => {
    setStep(1)
    setSelectedDepartment('')
    setSelectedDoctor(null)
    setSelectedDate('')
    setSelectedTime('')
    setPatientInfo({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      dateOfBirth: '',
      reason: '',
    })
    setIsSubmitted(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="h-12 w-12 text-rose-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Book an Appointment</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Schedule your visit with our experienced healthcare professionals. 
            Choose your preferred department, doctor, and time slot.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step >= stepNumber ? 'bg-rose-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {stepNumber}
                </div>
                {stepNumber < 4 && (
                  <div
                    className={`w-16 h-1 mx-2 ${
                      step > stepNumber ? 'bg-rose-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-2 text-sm text-gray-600">
            <span className="w-24 text-center">Department</span>
            <span className="w-16 text-center">Doctor</span>
            <span className="w-16 text-center">Date/Time</span>
            <span className="w-24 text-center">Your Info</span>
          </div>
        </div>

        {!isSubmitted ? (
          <>
            {/* Step 1: Department Selection */}
            {step === 1 && (
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Department</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {departments.map((dept) => (
                    <button
                      key={dept}
                      onClick={() => handleDepartmentSelect(dept)}
                      className="p-6 border-2 border-gray-200 rounded-xl hover:border-rose-600 hover:bg-rose-50 transition-all text-left group"
                    >
                      <Stethoscope className="h-8 w-8 text-rose-600 mb-3 group-hover:scale-110 transition-transform" />
                      <h3 className="font-semibold text-gray-900">{dept}</h3>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Doctor Selection */}
            {step === 2 && (
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <button
                  onClick={() => setStep(1)}
                  className="text-gray-600 hover:text-gray-900 mb-6 flex items-center"
                >
                  ← Back to Departments
                </button>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Doctor</h2>
                <p className="text-gray-600 mb-6">Department: {selectedDepartment}</p>
                <div className="grid md:grid-cols-2 gap-6">
                  {doctors
                    .filter(doc => doc.specialty === selectedDepartment || selectedDepartment === 'General Medicine')
                    .map((doctor) => (
                      <button
                        key={doctor.id}
                        onClick={() => handleDoctorSelect(doctor)}
                        className="p-6 border-2 border-gray-200 rounded-xl hover:border-rose-600 hover:bg-rose-50 transition-all text-left group"
                      >
                        <div className="flex items-start mb-4">
                          <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mr-4">
                            <User className="h-6 w-6 text-rose-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-900">{doctor.name}</h3>
                            <p className="text-sm text-gray-600">{doctor.specialty}</p>
                          </div>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center text-gray-600">
                            <Clock className="h-4 w-4 mr-2" />
                            {doctor.experience} experience
                          </div>
                          <div className="flex items-center text-gray-600">
                            <CheckCircle className="h-4 w-4 mr-2 text-yellow-500" />
                            Rating: {doctor.rating}/5.0
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Calendar className="h-4 w-4 mr-2" />
                            Available: {doctor.availability.join(', ')}
                          </div>
                        </div>
                      </button>
                    ))}
                </div>
              </div>
            )}

            {/* Step 3: Date and Time Selection */}
            {step === 3 && (
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <button
                  onClick={() => setStep(2)}
                  className="text-gray-600 hover:text-gray-900 mb-6 flex items-center"
                >
                  ← Back to Doctors
                </button>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Date and Time</h2>
                
                {selectedDoctor && (
                  <div className="bg-rose-50 rounded-xl p-4 mb-6">
                    <div className="flex items-center">
                      <User className="h-6 w-6 text-rose-600 mr-3" />
                      <div>
                        <p className="font-semibold text-gray-900">{selectedDoctor.name}</p>
                        <p className="text-sm text-gray-600">{selectedDoctor.specialty}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Date *
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Time *
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot.time}
                          onClick={() => slot.available && setSelectedTime(slot.time)}
                          disabled={!slot.available}
                          className={`px-4 py-3 rounded-lg border-2 transition-all ${
                            selectedTime === slot.time
                              ? 'border-rose-600 bg-rose-600 text-white'
                              : slot.available
                              ? 'border-gray-200 hover:border-rose-600 hover:bg-rose-50'
                              : 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                          }`}
                        >
                          {slot.time}
                          {!slot.available && ' (Booked)'}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleDateTimeSelect}
                  disabled={!selectedDate || !selectedTime}
                  className="mt-8 w-full px-8 py-4 bg-rose-600 text-white rounded-lg font-semibold hover:bg-rose-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Continue to Patient Information
                </button>
              </div>
            )}

            {/* Step 4: Patient Information */}
            {step === 4 && (
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <button
                  onClick={() => setStep(3)}
                  className="text-gray-600 hover:text-gray-900 mb-6 flex items-center"
                >
                  ← Back to Date/Time
                </button>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Patient Information</h2>

                {/* Booking Summary */}
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h3 className="font-bold text-gray-900 mb-4">Booking Summary</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Doctor</p>
                      <p className="font-semibold text-gray-900">{selectedDoctor?.name}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Department</p>
                      <p className="font-semibold text-gray-900">{selectedDepartment}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Date</p>
                      <p className="font-semibold text-gray-900">{selectedDate}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Time</p>
                      <p className="font-semibold text-gray-900">{selectedTime}</p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handlePatientInfoSubmit}>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={patientInfo.firstName}
                        onChange={(e) => setPatientInfo({...patientInfo, firstName: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={patientInfo.lastName}
                        onChange={(e) => setPatientInfo({...patientInfo, lastName: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={patientInfo.phoneNumber}
                        onChange={(e) => setPatientInfo({...patientInfo, phoneNumber: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={patientInfo.email}
                        onChange={(e) => setPatientInfo({...patientInfo, email: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      required
                      value={patientInfo.dateOfBirth}
                      onChange={(e) => setPatientInfo({...patientInfo, dateOfBirth: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Reason for Visit *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={patientInfo.reason}
                      onChange={(e) => setPatientInfo({...patientInfo, reason: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                      placeholder="Please describe your symptoms or reason for the appointment..."
                    />
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <div className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                      <div className="text-sm text-blue-800">
                        <strong>SMS & Email Reminders:</strong> You will receive appointment reminders 
                        via SMS and email 24 hours before your scheduled appointment.
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-rose-600 text-white rounded-lg font-semibold hover:bg-rose-700 transition-colors"
                  >
                    Confirm Appointment
                  </button>
                </form>
              </div>
            )}
          </>
        ) : (
          /* Success Message */
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <CheckCircle className="h-20 w-20 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Appointment Confirmed!</h2>
            <p className="text-lg text-gray-600 mb-6">
              Your appointment has been successfully booked. You will receive a confirmation 
              SMS and email shortly with all the details.
            </p>

            <div className="bg-green-50 rounded-xl p-6 mb-6 max-w-md mx-auto text-left">
              <h3 className="font-bold text-gray-900 mb-4">Appointment Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Doctor:</span>
                  <span className="font-semibold text-gray-900">{selectedDoctor?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Department:</span>
                  <span className="font-semibold text-gray-900">{selectedDepartment}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-semibold text-gray-900">{selectedDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-semibold text-gray-900">{selectedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Patient:</span>
                  <span className="font-semibold text-gray-900">{patientInfo.firstName} {patientInfo.lastName}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={resetBooking}
                className="px-8 py-3 bg-rose-600 text-white rounded-lg font-semibold hover:bg-rose-700 transition-colors"
              >
                Book Another Appointment
              </button>
              <a
                href="tel:+254700000000"
                className="px-8 py-3 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition-colors flex items-center justify-center"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call for Questions
              </a>
            </div>
          </div>
        )}

        {/* Contact Information */}
        <div className="mt-12 bg-gray-100 rounded-xl p-6">
          <h3 className="font-bold text-gray-900 mb-4">Need Help Booking?</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-rose-600 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Call us</p>
                <p className="font-semibold text-gray-900">+254 700 000 000</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-rose-600 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Email us</p>
                <p className="font-semibold text-gray-900">appointments@lindaafya.co.ke</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-rose-600 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Visit us</p>
                <p className="font-semibold text-gray-900">123 Healthcare Ave, Nairobi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
