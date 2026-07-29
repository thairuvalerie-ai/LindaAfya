import { Heart, Users, Award, Target, Clock, CheckCircle, ArrowRight, Calendar } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-12 w-12 text-rose-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">About Linda Afya Hospital</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            For over 20 years, Linda Afya Hospital has been at the forefront of healthcare excellence, 
            providing compassionate care combined with cutting-edge medical technology to serve our community.
          </p>
        </div>

        {/* Our Story */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2004, Linda Afya Hospital began as a small clinic with a big vision: to provide 
                accessible, high-quality healthcare to all members of our community. What started with just 
                5 doctors and 10 nurses has grown into a comprehensive medical center serving over 15,000 
                patients annually.
              </p>
              <p className="text-gray-600 mb-4">
                Our journey has been marked by continuous innovation and expansion. From introducing the first 
                AI-powered diagnostic tools in the region to establishing specialized centers for cardiac care, 
                pediatrics, and women's health, we have consistently pushed the boundaries of what's possible 
                in healthcare delivery.
              </p>
              <p className="text-gray-600">
                Today, we stand as a beacon of hope and healing, combining the warmth of compassionate care 
                with the precision of advanced medical technology. Our commitment to excellence has earned us 
                recognition as one of the leading healthcare institutions in the region.
              </p>
            </div>
            <div className="bg-gradient-to-br from-rose-100 to-blue-100 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Heart className="h-16 w-16 text-rose-600" />
                </div>
                <div className="text-5xl font-bold text-gray-900 mb-2">20+</div>
                <p className="text-gray-600">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="w-16 h-16 bg-rose-100 rounded-xl flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-rose-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide exceptional healthcare services that are accessible, affordable, and delivered 
              with compassion and dignity to every patient who walks through our doors.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <Award className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading healthcare institution in the region, recognized for clinical excellence, 
              innovation, and unwavering commitment to patient-centered care.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <Heart className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p className="text-gray-600">
              Compassion, Integrity, Excellence, Innovation, and Teamwork guide everything we do, 
              ensuring every patient receives the highest standard of care.
            </p>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="bg-gradient-to-r from-rose-600 to-blue-600 rounded-2xl p-8 mb-12 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">Our Impact by the Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">15,000+</div>
              <p className="text-lg opacity-90">Patients Served Annually</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">50+</div>
              <p className="text-lg opacity-90">Specialist Doctors</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">200+</div>
              <p className="text-lg opacity-90">Medical Staff</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">25+</div>
              <p className="text-lg opacity-90">Specialized Departments</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Linda Afya Hospital</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <Users className="h-6 w-6 text-rose-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Expert Medical Team</h3>
                <p className="text-gray-600">
                  Our board-certified specialists bring years of experience and expertise across 
                  all major medical disciplines.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Advanced Technology</h3>
                <p className="text-gray-600">
                  State-of-the-art medical equipment and AI-powered diagnostic tools ensure 
                  accurate and timely treatment.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <Heart className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Compassionate Care</h3>
                <p className="text-gray-600">
                  We treat every patient with dignity, respect, and the personalized attention 
                  they deserve.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">24/7 Emergency Services</h3>
                <p className="text-gray-600">
                  Our emergency department is always ready with rapid response teams and 
                  critical care facilities.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Affordable Healthcare</h3>
                <p className="text-gray-600">
                  We work with government programs and insurance providers to make quality 
                  healthcare accessible to all.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <Target className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Continuum of Care</h3>
                <p className="text-gray-600">
                  From prevention to treatment to rehabilitation, we provide comprehensive 
                  care throughout your health journey.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-12 w-12 text-white" />
              </div>
              <h3 className="font-bold text-gray-900">Dr. Ann Kamau</h3>
              <p className="text-rose-600 mb-2">Chief Executive Officer</p>
              <p className="text-sm text-gray-600">
                25 years of healthcare leadership experience with a passion for innovation and patient-centered care.
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-12 w-12 text-white" />
              </div>
              <h3 className="font-bold text-gray-900">Dr. James Ochieng</h3>
              <p className="text-blue-600 mb-2">Medical Director</p>
              <p className="text-sm text-gray-600">
                Renowned specialist with expertise in internal medicine and hospital administration.
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-12 w-12 text-white" />
              </div>
              <h3 className="font-bold text-gray-900">Mary Wanjiku</h3>
              <p className="text-green-600 mb-2">Director of Nursing</p>
              <p className="text-sm text-gray-600">
                20 years of nursing experience dedicated to improving patient care and nursing excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Accreditations */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Accreditations & Partnerships</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <Award className="h-12 w-12 text-rose-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">ISO 9001:2015</h3>
              <p className="text-sm text-gray-600">Quality Management</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">Joint Commission</h3>
              <p className="text-sm text-gray-600">International Accreditation</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <Heart className="h-12 w-12 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">Ministry of Health</h3>
              <p className="text-sm text-gray-600">Licensed Facility</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">Medical Board</h3>
              <p className="text-sm text-gray-600">Certified Providers</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-rose-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Join Our Healthcare Family</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Whether you're seeking medical care or looking to join our team, Linda Afya Hospital welcomes you. 
            Experience healthcare that puts you first.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
              <Calendar className="mr-2 h-5 w-5" />
              Book Appointment
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center">
              <ArrowRight className="mr-2 h-5 w-5" />
              Explore Careers
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
