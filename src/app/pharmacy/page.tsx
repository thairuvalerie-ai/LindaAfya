'use client'

import { useState } from 'react'
import { Pill, Clock, Truck, Shield, CheckCircle, Search, ShoppingCart, Phone, Mail, AlertCircle } from 'lucide-react'

interface Medication {
  id: string
  name: string
  generic: string
  category: string
  price: string
  prescription: boolean
  stock: number
  description: string
}

const medications: Medication[] = [
  {
    id: '1',
    name: 'Amoxicillin 500mg',
    generic: 'Amoxicillin Trihydrate',
    category: 'Antibiotics',
    price: 'KES 850',
    prescription: true,
    stock: 150,
    description: 'Broad-spectrum antibiotic for bacterial infections'
  },
  {
    id: '2',
    name: 'Ibuprofen 400mg',
    generic: 'Ibuprofen',
    category: 'Pain Relief',
    price: 'KES 320',
    prescription: false,
    stock: 200,
    description: 'NSAID for pain relief and inflammation reduction'
  },
  {
    id: '3',
    name: 'Omeprazole 20mg',
    generic: 'Omeprazole',
    category: 'Gastric',
    price: 'KES 450',
    prescription: false,
    stock: 120,
    description: 'Proton pump inhibitor for acid reflux and ulcers'
  },
  {
    id: '4',
    name: 'Metformin 500mg',
    generic: 'Metformin Hydrochloride',
    category: 'Diabetes',
    price: 'KES 280',
    prescription: true,
    stock: 180,
    description: 'First-line medication for type 2 diabetes'
  },
  {
    id: '5',
    name: 'Lisinopril 10mg',
    generic: 'Lisinopril',
    category: 'Cardiovascular',
    price: 'KES 520',
    prescription: true,
    stock: 90,
    description: 'ACE inhibitor for high blood pressure'
  },
  {
    id: '6',
    name: 'Vitamin D3 1000IU',
    generic: 'Cholecalciferol',
    category: 'Supplements',
    price: 'KES 650',
    prescription: false,
    stock: 250,
    description: 'Vitamin D supplement for bone health'
  },
]

const categories = ['All', 'Antibiotics', 'Pain Relief', 'Gastric', 'Diabetes', 'Cardiovascular', 'Supplements']

export default function PharmacyPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [cart, setCart] = useState<string[]>([])
  const [showPrescriptionModal, setShowPrescriptionModal] = useState(false)

  const filteredMedications = medications.filter(med => {
    const matchesCategory = selectedCategory === 'All' || med.category === selectedCategory
    const matchesSearch = med.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         med.generic.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const addToCart = (medId: string) => {
    if (!cart.includes(medId)) {
      setCart([...cart, medId])
    }
  }

  const removeFromCart = (medId: string) => {
    setCart(cart.filter(id => id !== medId))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Pill className="h-12 w-12 text-green-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Hospital Pharmacy</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your trusted source for prescription medications, over-the-counter drugs, 
            and health supplements with expert pharmacist consultation.
          </p>
        </div>

        {/* Services Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <Truck className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">Free Delivery</h3>
            <p className="text-gray-600 text-sm">Free delivery on orders over KES 2,000</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <Clock className="h-10 w-10 text-green-600 mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">24/7 Service</h3>
            <p className="text-gray-600 text-sm">Round-the-clock pharmacy services</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <Shield className="h-10 w-10 text-purple-600 mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">Quality Assured</h3>
            <p className="text-gray-600 text-sm">Only genuine medications from certified suppliers</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <CheckCircle className="h-10 w-10 text-rose-600 mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">Expert Advice</h3>
            <p className="text-gray-600 text-sm">Consult with qualified pharmacists</p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search medications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="flex items-center space-x-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Medications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredMedications.map((med) => (
            <div key={med.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 p-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <Pill className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{med.name}</h3>
                  {med.prescription && (
                    <span className="px-2 py-1 bg-rose-100 text-rose-700 rounded-full text-xs font-medium">
                      Rx
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-2">{med.generic}</p>
                <p className="text-xs text-gray-500 mb-4">{med.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-lg font-bold text-green-600">{med.price}</p>
                    <p className="text-xs text-gray-500">{med.stock} in stock</p>
                  </div>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                    {med.category}
                  </span>
                </div>

                <button
                  onClick={() => addToCart(med.id)}
                  disabled={cart.includes(med.id)}
                  className={`w-full py-3 rounded-lg font-medium transition-colors ${
                    cart.includes(med.id)
                      ? 'bg-gray-200 text-gray-600 cursor-not-allowed'
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  {cart.includes(med.id) ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        {cart.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Shopping Cart ({cart.length})</h2>
              <button className="text-rose-600 hover:underline text-sm">Clear Cart</button>
            </div>
            <div className="space-y-3 mb-4">
              {cart.map(id => {
                const med = medications.find(m => m.id === id)
                if (!med) return null
                return (
                  <div key={id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-gray-900">{med.name}</p>
                      <p className="text-sm text-gray-600">{med.price}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(id)}
                      className="text-rose-600 hover:text-rose-800"
                    >
                      Remove
                    </button>
                  </div>
                )
              })}
            </div>
            <div className="border-t border-gray-200 pt-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-bold text-gray-900">Total:</span>
                <span className="text-lg font-bold text-green-600">
                  KES {cart.reduce((total, id) => {
                    const med = medications.find(m => m.id === id)
                    return total + (med ? parseInt(med.price.replace('KES ', '').replace(',', '')) : 0)
                  }, 0).toLocaleString()}
                </span>
              </div>
              <button className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}

        {/* Prescription Services */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Prescription Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Upload Prescription</h3>
              <p className="text-gray-600 mb-4">
                Upload your doctor's prescription and we'll prepare your medication for pickup or delivery.
              </p>
              <button
                onClick={() => setShowPrescriptionModal(true)}
                className="px-6 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors"
              >
                Upload Prescription
              </button>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Refill Prescription</h3>
              <p className="text-gray-600 mb-4">
                Quick refill for your existing prescriptions on file with us.
              </p>
              <button className="px-6 py-3 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors">
                Request Refill
              </button>
            </div>
          </div>
        </div>

        {/* Pharmacist Consultation */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Talk to a Pharmacist</h2>
              <p className="text-lg mb-6">
                Get expert advice about your medications, potential drug interactions, 
                and proper usage from our qualified pharmacists.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+254700000002" className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Pharmacy
                </a>
                <a href="mailto:pharmacy@lindaafya.co.ke" className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors flex items-center justify-center">
                  <Mail className="h-5 w-5 mr-2" />
                  Email Us
                </a>
              </div>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Pill className="h-16 w-16 text-white" />
              </div>
              <p className="text-sm opacity-90">Available 24/7</p>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <div className="flex items-start">
            <AlertCircle className="h-6 w-6 text-yellow-600 mr-4 mt-0.5" />
            <div>
              <h3 className="font-bold text-yellow-900 mb-2">Important Notice</h3>
              <p className="text-yellow-800 text-sm">
                Always consult with a healthcare professional before starting any medication. 
                Some medications require a valid prescription. Our pharmacists are available 
                to answer your questions and provide guidance on proper medication use.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Prescription Upload Modal */}
      {showPrescriptionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Upload Prescription</h2>
              <button
                onClick={() => setShowPrescriptionModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6">
              <Pill className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-2">Drag and drop your prescription here</p>
              <p className="text-sm text-gray-500 mb-4">or click to browse files</p>
              <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Select Files
              </button>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Notes
              </label>
              <textarea
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Any special instructions or questions..."
              />
            </div>
            <button className="w-full px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Submit Prescription
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
