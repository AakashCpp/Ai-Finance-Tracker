import React from 'react';
import { 
  LineChart, 
  ArrowUpRight, 
  Shield, 
  PieChart, 
  Brain, 
  Wallet,
  ChevronRight,
  Github,
  Twitter,
  Linkedin
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Navbar */}
      <nav className="fixed w-full bg-slate-900/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Brain className="w-8 h-8 text-purple-500" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                FinanceAI
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="hover:text-purple-400 transition-colors">About</button>
              <button className="hover:text-purple-400 transition-colors">Features</button>
              <button className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg transition-colors">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent mb-6">
              Take Control of Your Finances with AI
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Track income & expenses effortlessly with AI insights and smart analytics. 
              Let artificial intelligence guide your financial decisions.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity flex items-center mx-auto">
              Get Started Now
              <ChevronRight className="ml-2" />
            </button>
          </div>
        </div>

        {/* Background Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-lg opacity-30 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
            <p className="text-gray-400">Everything you need to master your finances</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Wallet className="w-6 h-6 text-purple-400" />,
                title: "Income Tracking",
                description: "Monitor your earnings and income sources with AI-powered categorization"
              },
              {
                icon: <LineChart className="w-6 h-6 text-blue-400" />,
                title: "Smart Budgeting",
                description: "Get personalized budget recommendations based on your spending patterns"
              },
              {
                icon: <PieChart className="w-6 h-6 text-purple-400" />,
                title: "Real-time Analytics",
                description: "Visual insights and reports to understand your financial health"
              },
              {
                icon: <Brain className="w-6 h-6 text-blue-400" />,
                title: "AI Insights",
                description: "Advanced algorithms analyze your finances to provide smart recommendations"
              },
              {
                icon: <ArrowUpRight className="w-6 h-6 text-purple-400" />,
                title: "Growth Tracking",
                description: "Monitor your investments and track financial growth over time"
              },
              {
                icon: <Shield className="w-6 h-6 text-blue-400" />,
                title: "Bank-Level Security",
                description: "Your data is protected with enterprise-grade encryption"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700/50 transition-colors">
                <div className="bg-slate-700/50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-gray-400">Join thousands of satisfied users</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Small Business Owner",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                quote: "FinanceAI has transformed how I manage my business finances. The AI insights are incredibly valuable."
              },
              {
                name: "Michael Chen",
                role: "Investment Analyst",
                image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                quote: "The real-time analytics and AI-powered insights have helped me make better investment decisions."
              },
              {
                name: "Emily Rodriguez",
                role: "Freelancer",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                quote: "As a freelancer, tracking multiple income sources was a challenge. FinanceAI makes it effortless."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-slate-800/50">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Start Your AI Finance Journey Today</h2>
          <p className="text-gray-400 mb-8">
            Join thousands of users who are already managing their finances smarter with AI.
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity">
            Get Started Free
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <Brain className="w-6 h-6 text-purple-500" />
                <span className="ml-2 text-lg font-bold">FinanceAI</span>
              </div>
              <p className="mt-4 text-gray-400">
                AI-powered finance tracking for the modern era.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 flex items-center justify-between">
            <p className="text-gray-400">© 2025 FinanceAI. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;