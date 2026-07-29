'use client'

import { Calendar, Clock, User, ArrowRight, Heart, Brain, Baby, Activity } from 'lucide-react'

interface Article {
  id: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  category: string
  image: string
}

const articles: Article[] = [
  {
    id: '1',
    title: 'New AI-Powered Diagnostic Tools Now Available',
    excerpt: 'Linda Afya Hospital introduces cutting-edge AI diagnostic technology that can detect diseases earlier and more accurately than ever before.',
    author: 'Dr. Sarah Kamau',
    date: '2024-01-20',
    readTime: '5 min read',
    category: 'Technology',
    image: ''
  },
  {
    id: '2',
    title: 'Understanding Women\'s Health: A Comprehensive Guide',
    excerpt: 'Learn about the importance of regular checkups, preventive care, and the latest advances in women\'s health treatments.',
    author: 'Dr. Mary Wanjiku',
    date: '2024-01-18',
    readTime: '8 min read',
    category: 'Women\'s Health',
    image: ''
  },
  {
    id: '3',
    title: '10 Tips for Maintaining Heart Health',
    excerpt: 'Cardiovascular disease is the leading cause of death globally. Discover simple lifestyle changes that can significantly improve your heart health.',
    author: 'Dr. Peter Kimani',
    date: '2024-01-15',
    readTime: '6 min read',
    category: 'Cardiology',
    image: ''
  },
  {
    id: '4',
    title: 'The Importance of Mental Health in Overall Wellness',
    excerpt: 'Mental health is just as important as physical health. Learn about the connection between mind and body and how to maintain psychological well-being.',
    author: 'Dr. James Ochieng',
    date: '2024-01-12',
    readTime: '7 min read',
    category: 'Mental Health',
    image: ''
  },
  {
    id: '5',
    title: 'Child Nutrition: Building Healthy Habits Early',
    excerpt: 'Proper nutrition in childhood sets the foundation for lifelong health. Expert tips on ensuring your children get the nutrients they need.',
    author: 'Dr. Grace Achieng',
    date: '2024-01-10',
    readTime: '5 min read',
    category: 'Pediatrics',
    image: ''
  },
  {
    id: '6',
    title: 'Advances in Diabetes Management',
    excerpt: 'New treatments and technologies are making diabetes management easier and more effective. Stay informed about the latest developments.',
    author: 'Dr. John Mwangi',
    date: '2024-01-08',
    readTime: '6 min read',
    category: 'Diabetes',
    image: ''
  },
]

const categories = ['All', 'Technology', 'Women\'s Health', 'Cardiology', 'Mental Health', 'Pediatrics', 'Diabetes']

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Health News & Articles</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed with the latest health news, medical advances, and wellness tips from our expert healthcare professionals.
          </p>
        </div>

        {/* Featured Article */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="grid md:grid-cols-2">
            <div className="bg-gradient-to-br from-rose-100 to-blue-100 p-12 flex items-center justify-center">
              <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                <Brain className="h-24 w-24 text-rose-600" />
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="inline-block px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-medium mb-4 w-fit">
                Featured
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                New AI-Powered Diagnostic Tools Now Available
              </h2>
              <p className="text-gray-600 mb-6">
                Linda Afya Hospital introduces cutting-edge AI diagnostic technology that can detect diseases earlier and more accurately than ever before, revolutionizing patient care.
              </p>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <User className="h-4 w-4 mr-2" />
                  Dr. Sarah Kamau
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  Jan 20, 2024
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  5 min read
                </div>
              </div>
              <button className="inline-flex items-center px-6 py-3 bg-rose-600 text-white rounded-lg font-semibold hover:bg-rose-700 transition-colors">
                Read Article
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:border-rose-600 hover:text-rose-600 transition-colors text-sm font-medium"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.slice(1).map((article) => (
            <article key={article.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className={`bg-gradient-to-br ${
                article.category === 'Women\'s Health' ? 'from-pink-100 to-rose-100' :
                article.category === 'Cardiology' ? 'from-red-100 to-orange-100' :
                article.category === 'Mental Health' ? 'from-purple-100 to-blue-100' :
                article.category === 'Pediatrics' ? 'from-green-100 to-teal-100' :
                'from-blue-100 to-indigo-100'
              } p-8 flex items-center justify-center`}>
                <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  {article.category === 'Women\'s Health' && <Baby className="h-16 w-16 text-pink-600" />}
                  {article.category === 'Cardiology' && <Heart className="h-16 w-16 text-red-600" />}
                  {article.category === 'Mental Health' && <Brain className="h-16 w-16 text-purple-600" />}
                  {article.category === 'Pediatrics' && <Activity className="h-16 w-16 text-green-600" />}
                  {article.category === 'Diabetes' && <Activity className="h-16 w-16 text-blue-600" />}
                  {article.category === 'Technology' && <Brain className="h-16 w-16 text-indigo-600" />}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {article.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-rose-600 to-blue-600 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-lg mb-6">
                Get the latest health news, tips, and updates delivered directly to your inbox.
              </p>
            </div>
            <div>
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
