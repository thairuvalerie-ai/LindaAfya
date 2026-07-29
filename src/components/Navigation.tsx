'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Heart, Phone, Mail } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Doctors', href: '/doctors' },
    { name: 'AI Assistant', href: '/ai-assistant' },
    { name: 'Appointments', href: '/appointments' },
    { name: 'Government Programs', href: '/government-programs' },
    { name: 'Women\'s Health', href: '/womens-health' },
    { name: 'Patient Portal', href: '/patient-portal' },
    { name: 'Pharmacy', href: '/pharmacy' },
    { name: 'Emergency', href: '/emergency' },
    { name: 'Communication', href: '/communication' },
    { name: 'News', href: '/news' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-rose-600" />
              <div>
                <span className="text-2xl font-bold text-gray-900">Linda Afya</span>
                <span className="block text-xs text-gray-500">Hospital</span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-rose-600 hover:bg-rose-50 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+254700000000" className="flex items-center text-gray-600 hover:text-rose-600">
              <Phone className="h-4 w-4 mr-1" />
              <span className="text-sm">Emergency: 700-000-000</span>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-rose-600 hover:bg-rose-50 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-rose-600 hover:bg-rose-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t">
              <a href="tel:+254700000000" className="flex items-center text-gray-600 hover:text-rose-600 px-3 py-2">
                <Phone className="h-4 w-4 mr-2" />
                <span>Emergency: 700-000-000</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
