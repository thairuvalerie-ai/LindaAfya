'use client'

import { useState } from 'react'
import { User, FileText, Calendar, Pill, Activity, Download, Eye, Lock, Bell, CheckCircle, AlertCircle, Clock } from 'lucide-react'

interface MedicalRecord {
  id: string
  type: string
  date: string
  doctor: string
  description: string
  status: 'normal' | 'attention' | 'critical'
}

interface Appointment {
  id: string
  doctor: string
  specialty: string
  date: string
  time: string
  status: 'upcoming' | 'completed' | 'cancelled'
}

interface Prescription {
  id: string
  medication: string
  dosage: string
  frequency: string
  prescribedBy: string
  date: string
  refills: number
}

export default function PatientPortalPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginData, setLoginData] = useState({ idNumber: '', phoneNumber: '' })

  const medicalRecords: MedicalRecord[] = [
    {
      id: '1',
      type: 'Lab Results',
      date: '2024-01-15',
      doctor: 'Dr. Sarah Kamau',
      description: 'Complete Blood Count (CBC) - Normal ranges',
      status: 'normal'
    },
    {
      id: '2',
      type: 'X-Ray',
      date: '2024-01-10',
      doctor: 'Dr. Peter Kimani',
      description: 'Chest X-Ray - No abnormalities detected',
      status: 'normal'
    },
    {
      id: '3',
      type: 'Blood Pressure',
      date: '2024-01-08',
      doctor: 'Dr. James Ochieng',
      description: 'Elevated blood pressure reading - Follow up recommended',
      status: 'attention'
    },
  ]

  const appointments: Appointment[] = [
    {
      id: '1',
      doctor: 'Dr. Mary Wanjiku',
      specialty: 'Obstetrics & Gynecology',
      date: '2024-02-01',
      time: '10:00 AM',
      status: 'upcoming'
    },
    {
      id: '2',
      doctor: 'Dr. Sarah Kamau',
      specialty: 'General Medicine',
      date: '2024-01-20',
      time: '02:00 PM',
      status: 'completed'
    },
  ]

  const prescriptions: Prescription[] = [
    {
      id: '1',
      medication: 'Amoxicillin 500mg',
      dosage: '1 tablet',
      frequency: '3 times daily',
      prescribedBy: 'Dr. Sarah Kamau',
      date: '2024-01-15',
      refills: 0
    },
    {
      id: '2',
      medication: 'Ibuprofen 400mg',
      dosage: '1 tablet',
      frequency: 'As needed for pain',
      prescribedBy: 'Dr. Peter Kimani',
      date: '2024-01-10',
      refills: 2
    },
  ]

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoggedIn(true)
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <Lock className="h-12 w-12 text-rose-600 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Patient Portal</h1>
            <p className="text-gray-600">Secure access to your medical records</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ID Number *
              </label>
              <input
                type="text"
                required
                value={loginData.idNumber}
                onChange={(e) => setLoginData({...loginData, idNumber: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                placeholder="Enter your national ID number"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={loginData.phoneNumber}
                onChange={(e) => setLoginData({...loginData, phoneNumber: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                placeholder="+254 7XX XXX XXX"
              />
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div className="text-sm text-blue-800">
                  Your medical information is protected with end-to-end encryption 
                  and is HIPAA compliant.
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-rose-600 text-white rounded-lg font-semibold hover:bg-rose-700 transition-colors"
            >
              Access Portal
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <button className="text-rose-600 font-medium hover:underline">
                Register here
              </button>
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Patient Portal</h1>
            <p className="text-gray-600">Welcome back, John Doe</p>
          </div>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="px-4 py-2 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Logout
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <Calendar className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">{appointments.filter(a => a.status === 'upcoming').length}</span>
            </div>
            <p className="text-gray-600 text-sm">Upcoming Appointments</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <FileText className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">{medicalRecords.length}</span>
            </div>
            <p className="text-gray-600 text-sm">Medical Records</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <Pill className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold text-gray-900">{prescriptions.length}</span>
            </div>
            <p className="text-gray-600 text-sm">Active Prescriptions</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <Activity className="h-8 w-8 text-rose-600" />
              <span className="text-2xl font-bold text-gray-900">3</span>
            </div>
            <p className="text-gray-600 text-sm">Recent Activities</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex">
              {['overview', 'records', 'appointments', 'prescriptions'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 font-medium transition-colors ${
                    activeTab === tab
                      ? 'bg-rose-50 text-rose-600 border-b-2 border-rose-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-rose-50 to-blue-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Upcoming Appointment</h3>
                  {appointments.find(a => a.status === 'upcoming') ? (
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-900">
                          {appointments.find(a => a.status === 'upcoming')?.doctor}
                        </p>
                        <p className="text-sm text-gray-600">
                          {appointments.find(a => a.status === 'upcoming')?.specialty}
                        </p>
                        <p className="text-sm text-gray-600">
                          {appointments.find(a => a.status === 'upcoming')?.date} at {appointments.find(a => a.status === 'upcoming')?.time}
                        </p>
                      </div>
                      <button className="px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors">
                        View Details
                      </button>
                    </div>
                  ) : (
                    <p className="text-gray-600">No upcoming appointments</p>
                  )}
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-4">Recent Medical Records</h3>
                  <div className="space-y-3">
                    {medicalRecords.slice(0, 3).map((record) => (
                      <div key={record.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <FileText className="h-5 w-5 text-rose-600 mr-3" />
                          <div>
                            <p className="font-medium text-gray-900">{record.type}</p>
                            <p className="text-sm text-gray-600">{record.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {record.status === 'attention' && (
                            <AlertCircle className="h-5 w-5 text-yellow-500" />
                          )}
                          <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                            <Eye className="h-5 w-5 text-gray-600" />
                          </button>
                          <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                            <Download className="h-5 w-5 text-gray-600" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Medical Records Tab */}
            {activeTab === 'records' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-gray-900">Medical Records</h3>
                  <button className="px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors text-sm">
                    Request New Records
                  </button>
                </div>
                <div className="space-y-4">
                  {medicalRecords.map((record) => (
                    <div key={record.id} className="border border-gray-200 rounded-xl p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start">
                          <div className={`p-3 rounded-lg mr-4 ${
                            record.status === 'normal' ? 'bg-green-100' : 
                            record.status === 'attention' ? 'bg-yellow-100' : 'bg-red-100'
                          }`}>
                            <FileText className={`h-6 w-6 ${
                              record.status === 'normal' ? 'text-green-600' : 
                              record.status === 'attention' ? 'text-yellow-600' : 'text-red-600'
                            }`} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{record.type}</h4>
                            <p className="text-sm text-gray-600 mt-1">{record.description}</p>
                            <div className="flex items-center mt-2 text-sm text-gray-500">
                              <span className="mr-4">Date: {record.date}</span>
                              <span>Doctor: {record.doctor}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {record.status === 'attention' && (
                            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                              Needs Attention
                            </span>
                          )}
                          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <Eye className="h-5 w-5 text-gray-600" />
                          </button>
                          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <Download className="h-5 w-5 text-gray-600" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Appointments Tab */}
            {activeTab === 'appointments' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-gray-900">Appointments</h3>
                  <button className="px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors text-sm">
                    Book New Appointment
                  </button>
                </div>
                <div className="space-y-4">
                  {appointments.map((appointment) => (
                    <div key={appointment.id} className="border border-gray-200 rounded-xl p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start">
                          <div className={`p-3 rounded-lg mr-4 ${
                            appointment.status === 'upcoming' ? 'bg-blue-100' : 
                            appointment.status === 'completed' ? 'bg-green-100' : 'bg-red-100'
                          }`}>
                            <Calendar className={`h-6 w-6 ${
                              appointment.status === 'upcoming' ? 'text-blue-600' : 
                              appointment.status === 'completed' ? 'text-green-600' : 'text-red-600'
                            }`} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{appointment.doctor}</h4>
                            <p className="text-sm text-gray-600">{appointment.specialty}</p>
                            <div className="flex items-center mt-2 text-sm text-gray-500">
                              <Clock className="h-4 w-4 mr-1" />
                              <span className="mr-4">{appointment.date}</span>
                              <span>{appointment.time}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            appointment.status === 'upcoming' ? 'bg-blue-100 text-blue-800' : 
                            appointment.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Prescriptions Tab */}
            {activeTab === 'prescriptions' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-gray-900">Active Prescriptions</h3>
                  <button className="px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors text-sm">
                    Request Refill
                  </button>
                </div>
                <div className="space-y-4">
                  {prescriptions.map((prescription) => (
                    <div key={prescription.id} className="border border-gray-200 rounded-xl p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start">
                          <div className="p-3 bg-purple-100 rounded-lg mr-4">
                            <Pill className="h-6 w-6 text-purple-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{prescription.medication}</h4>
                            <p className="text-sm text-gray-600 mt-1">
                              {prescription.dosage} - {prescription.frequency}
                            </p>
                            <div className="flex items-center mt-2 text-sm text-gray-500">
                              <span className="mr-4">Prescribed: {prescription.date}</span>
                              <span>By: {prescription.prescribedBy}</span>
                            </div>
                            <div className="mt-2 text-sm">
                              <span className="text-gray-600">Refills remaining: </span>
                              <span className="font-semibold text-gray-900">{prescription.refills}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors text-sm">
                            Request Refill
                          </button>
                          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <Download className="h-5 w-5 text-gray-600" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-6">
          <div className="flex items-start">
            <Lock className="h-6 w-6 text-green-600 mr-4 mt-0.5" />
            <div>
              <h3 className="font-bold text-green-900 mb-2">Your Data is Secure</h3>
              <p className="text-green-800 text-sm">
                All your medical information is encrypted and protected. We are fully HIPAA compliant 
                and follow strict data protection regulations to ensure your privacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
