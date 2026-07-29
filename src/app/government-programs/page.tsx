'use client'

import { useState } from 'react'
import { Shield, Baby, Users, Upload, CheckCircle, AlertCircle, FileText, Phone, Mail } from 'lucide-react'

interface Program {
  id: string
  name: string
  icon: any
  color: string
  bgColor: string
  description: string
  benefits: string[]
}

const programs: Program[] = [
  {
    id: 'sha',
    name: 'SHA Registration',
    icon: Shield,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    description: 'Social Health Authority provides comprehensive health coverage for all Kenyan citizens, ensuring access to quality healthcare services.',
    benefits: ['Outpatient coverage', 'Inpatient services', 'Maternal care', 'Emergency services', 'Chronic disease management']
  },
  {
    id: 'linda-mama',
    name: 'Linda Mama',
    icon: Baby,
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
    description: 'Maternal health program providing free maternity services for expectant mothers and new parents.',
    benefits: ['Free antenatal care', 'Free delivery services', 'Postnatal care', 'Immunization', 'Nutritional support']
  },
  {
    id: 'nhif',
    name: 'NHIF Integration',
    icon: Users,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    description: 'National Hospital Insurance Fund integration for affordable healthcare access and medical expense coverage.',
    benefits: ['Monthly contributions', 'Family coverage', 'Specialized treatment', 'Hospital admission', 'Drug coverage']
  }
]

export default function GovernmentProgramsPage() {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    idNumber: '',
    phoneNumber: '',
    email: '',
    dateOfBirth: '',
    address: '',
    programType: '',
    documents: [] as File[]
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        documents: [...formData.documents, ...Array.from(e.target.files)]
      })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    // In a real application, this would submit to an API
  }

  const selectedProgramData = programs.find(p => p.id === selectedProgram)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Government Health Programs</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Register for government-sponsored health programs and access affordable, quality healthcare services
          </p>
        </div>

        {!isSubmitted ? (
          <>
            {/* Program Selection */}
            {!selectedProgram && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Select a Program</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {programs.map((program) => (
                    <button
                      key={program.id}
                      onClick={() => setSelectedProgram(program.id)}
                      className={`${program.bgColor} rounded-xl p-6 hover:shadow-xl transition-shadow text-left group relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 opacity-5">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <defs>
                            <pattern id={`pattern-${program.id}`} width="15" height="15" patternUnits="userSpaceOnUse">
                              <circle cx="7.5" cy="7.5" r="2" fill="currentColor"/>
                            </pattern>
                          </defs>
                          <rect width="100" height="100" fill={`url(#pattern-${program.id})`} />
                        </svg>
                      </div>
                      <div className="relative z-10">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-4">
                          <program.icon className={`h-8 w-8 ${program.color}`} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{program.name}</h3>
                        <p className="text-gray-600 text-sm mb-4">{program.description}</p>
                        <div className="text-sm font-medium text-gray-900 group-hover:underline">
                          Learn More →
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Registration Form */}
            {selectedProgram && selectedProgramData && (
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="text-gray-600 hover:text-gray-900 mb-6 flex items-center"
                >
                  ← Back to Programs
                </button>

                <div className="flex items-center mb-6">
                  <selectedProgramData.icon className={`h-10 w-10 ${selectedProgramData.color} mr-3`} />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedProgramData.name} Registration</h2>
                    <p className="text-gray-600">{selectedProgramData.description}</p>
                  </div>
                </div>

                {/* Benefits */}
                <div className={`${selectedProgramData.bgColor} rounded-xl p-6 mb-8`}>
                  <h3 className="font-bold text-gray-900 mb-4">Program Benefits</h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {selectedProgramData.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Registration Form */}
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        ID Number *
                      </label>
                      <input
                        type="text"
                        name="idNumber"
                        required
                        value={formData.idNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        required
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        required
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Physical Address *
                    </label>
                    <textarea
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>

                  {/* Document Upload */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Required Documents
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-rose-500 transition-colors">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">
                        Drag and drop files here, or click to select
                      </p>
                      <p className="text-sm text-gray-500 mb-4">
                        Accepted formats: PDF, JPG, PNG (Max 5MB each)
                      </p>
                      <input
                        type="file"
                        multiple
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                      />
                      <label
                        htmlFor="file-upload"
                        className="inline-block px-6 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors cursor-pointer"
                      >
                        Select Files
                      </label>
                      {formData.documents.length > 0 && (
                        <div className="mt-4 text-left">
                          <p className="text-sm font-medium text-gray-700 mb-2">
                            Uploaded Files:
                          </p>
                          {formData.documents.map((file, index) => (
                            <div key={index} className="flex items-center text-sm text-gray-600 mb-1">
                              <FileText className="h-4 w-4 mr-2" />
                              {file.name}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="mb-6">
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        required
                        className="mt-1 mr-3 h-4 w-4 text-rose-600 focus:ring-rose-500"
                      />
                      <span className="text-sm text-gray-600">
                        I agree to the terms and conditions of the {selectedProgramData.name} program 
                        and consent to the processing of my personal data for healthcare purposes.
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-rose-600 text-white rounded-lg font-semibold hover:bg-rose-700 transition-colors"
                  >
                    Submit Registration
                  </button>
                </form>
              </div>
            )}
          </>
        ) : (
          /* Success Message */
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <CheckCircle className="h-20 w-20 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Registration Submitted!</h2>
            <p className="text-lg text-gray-600 mb-6">
              Your {selectedProgramData?.name} registration has been submitted successfully. 
              You will receive a confirmation SMS and email shortly.
            </p>
            <div className="bg-green-50 rounded-xl p-6 mb-6 max-w-md mx-auto">
              <h3 className="font-bold text-gray-900 mb-2">What's Next?</h3>
              <ul className="text-left text-sm text-gray-700 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                  Verification of your documents (1-3 business days)
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                  Approval notification via SMS and email
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                  Receive your program identification number
                </li>
              </ul>
            </div>
            <button
              onClick={() => {
                setIsSubmitted(false)
                setSelectedProgram(null)
                setFormData({
                  firstName: '',
                  lastName: '',
                  idNumber: '',
                  phoneNumber: '',
                  email: '',
                  dateOfBirth: '',
                  address: '',
                  programType: '',
                  documents: []
                })
              }}
              className="px-8 py-3 bg-rose-600 text-white rounded-lg font-semibold hover:bg-rose-700 transition-colors"
            >
              Register Another Person
            </button>
          </div>
        )}

        {/* Contact Information */}
        <div className="mt-12 bg-gray-100 rounded-xl p-6">
          <h3 className="font-bold text-gray-900 mb-4">Need Help?</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-rose-600 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Call our support team</p>
                <p className="font-semibold text-gray-900">+254 700 000 000</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-rose-600 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Email us</p>
                <p className="font-semibold text-gray-900">support@lindaafya.co.ke</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
