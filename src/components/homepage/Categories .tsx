// src/components/Categories.tsx
'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const Categories = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const categories = [
    { 
      id: 1, 
      name: "Fresh Milk", 
      icon: "🥛", 
      count: "12 Products",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
      description: "Pure & Fresh"
    },
    { 
      id: 2, 
      name: "Yogurt", 
      icon: "🥣", 
      count: "8 Products",
      color: "from-pink-400 to-pink-600",
      bgColor: "bg-pink-50",
      description: "Probiotic Rich"
    },
    { 
      id: 3, 
      name: "Cheese", 
      icon: "🧀", 
      count: "15 Products",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50",
      description: "Variety Collection"
    },
    { 
      id: 4, 
      name: "Butter", 
      icon: "🧈", 
      count: "6 Products",
      color: "from-amber-400 to-amber-600",
      bgColor: "bg-amber-50",
      description: "Creamy & Smooth"
    },
    { 
      id: 5, 
      name: "Cream", 
      icon: "🍦", 
      count: "10 Products",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50",
      description: "Heavy & Light"
    },
    { 
      id: 6, 
      name: "Desserts", 
      icon: "🍮", 
      count: "18 Products",
      color: "from-green-400 to-emerald-600",
      bgColor: "bg-green-50",
      description: "Sweet Treats"
    },
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-50 rounded-full translate-x-1/2 translate-y-1/2 opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            Categories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Shop by <span className="gradient-text">Category</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our wide range of fresh dairy products. Quality guaranteed from farm to your table.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link 
              href={`/category/${category.name.toLowerCase().replace(' ', '-')}`}
              key={category.id}
              className="group"
              onMouseEnter={() => setHoveredId(category.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className={`relative flex flex-col items-center justify-center p-6 md:p-8 ${category.bgColor} rounded-3xl transition-all duration-500 cursor-pointer overflow-hidden ${
                hoveredId === category.id ? 'scale-105 shadow-2xl' : 'hover:shadow-xl'
              }`}>
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`text-5xl md:text-6xl mb-4 transform transition-transform duration-500 ${
                  hoveredId === category.id ? 'scale-125 -rotate-12' : 'group-hover:scale-110'
                }`}>
                  {category.icon}
                </div>

                {/* Content */}
                <h3 className="font-bold text-gray-900 text-sm md:text-base text-center mb-1">
                  {category.name}
                </h3>
                <p className="text-xs text-gray-500 mb-2">{category.description}</p>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-white shadow-sm`}>
                  {category.count}
                </span>

                {/* Arrow on Hover */}
                <div className={`absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center transform transition-all duration-300 ${
                  hoveredId === category.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}>
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories