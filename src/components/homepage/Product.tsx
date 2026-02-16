// src/components/ProductCarousel.tsx
'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Heart, ShoppingCart, Star, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  unit: string
  image: string
  badge?: string
  badgeColor?: string
  rating: number
  reviews: number
  inStock: boolean
}

const ProductCarousel = () => {
  const [wishlist, setWishlist] = useState<number[]>([])

  const products: Product[] = [
    {
      id: 1,
      name: "Farm Fresh Whole Milk",
      price: 4.99,
      originalPrice: 5.99,
      unit: "1 Liter",
      image: "🥛",
      badge: "Bestseller",
      badgeColor: "bg-green-500",
      rating: 4.8,
      reviews: 256,
      inStock: true
    },
    {
      id: 2,
      name: "Low Fat Skimmed Milk",
      price: 4.49,
      unit: "1 Liter",
      image: "🥛",
      badge: "Healthy",
      badgeColor: "bg-blue-500",
      rating: 4.5,
      reviews: 189,
      inStock: true
    },
    {
      id: 3,
      name: "Chocolate Flavored Milk",
      price: 5.99,
      originalPrice: 6.99,
      unit: "500ml",
      image: "🍫",
      badge: "Kids Favorite",
      badgeColor: "bg-amber-500",
      rating: 4.9,
      reviews: 342,
      inStock: true
    },
    {
      id: 4,
      name: "Organic Certified Milk",
      price: 6.99,
      unit: "1 Liter",
      image: "🌿",
      badge: "Organic",
      badgeColor: "bg-emerald-500",
      rating: 4.9,
      reviews: 198,
      inStock: true
    },
    {
      id: 5,
      name: "Lactose-Free Milk",
      price: 5.49,
      unit: "1 Liter",
      image: "🥛",
      badge: "Lactose Free",
      badgeColor: "bg-purple-500",
      rating: 4.6,
      reviews: 145,
      inStock: false
    },
    {
      id: 6,
      name: "Premium Buffalo Milk",
      price: 5.99,
      unit: "1 Liter",
      image: "🐃",
      badge: "Premium",
      badgeColor: "bg-orange-500",
      rating: 4.7,
      reviews: 167,
      inStock: true
    },
    {
      id: 7,
      name: "Greek Style Yogurt",
      price: 3.99,
      originalPrice: 4.99,
      unit: "200g",
      image: "🥣",
      badge: "Sale",
      badgeColor: "bg-red-500",
      rating: 4.8,
      reviews: 289,
      inStock: true
    },
    {
      id: 8,
      name: "Aged Cheddar Cheese",
      price: 8.99,
      unit: "250g",
      image: "🧀",
      badge: "Imported",
      badgeColor: "bg-indigo-500",
      rating: 4.9,
      reviews: 178,
      inStock: true
    },
  ]

  const toggleWishlist = (id: number) => {
    setWishlist(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              Our Products
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Fresh <span className="gradient-text">Dairy Products</span>
            </h2>
            <p className="text-gray-600 max-w-xl text-lg">
              Handpicked fresh dairy delivered to your doorstep every morning
            </p>
          </div>
          <Button 
            variant="outline" 
            className="mt-6 md:mt-0 rounded-full px-8 border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white transition-all"
          >
            View All Products
          </Button>
        </div>

        {/* Products Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          breakpoints={{
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-16"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-8 overflow-hidden">
                  {/* Badge */}
                  {product.badge && (
                    <Badge className={`absolute top-4 left-4 ${product.badgeColor} text-white px-3 py-1 z-10`}>
                      {product.badge}
                    </Badge>
                  )}

                  {/* Discount Badge */}
                  {product.originalPrice && (
                    <Badge className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 z-10">
                      -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </Badge>
                  )}

                  {/* Out of Stock Overlay */}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-20">
                      <span className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Out of Stock
                      </span>
                    </div>
                  )}

                  {/* Product Image */}
                  <div className="text-8xl text-center transform group-hover:scale-110 transition-transform duration-500">
                    {product.image}
                  </div>

                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <Button
                      size="icon"
                      variant="secondary"
                      className={`rounded-full shadow-lg ${
                        wishlist.includes(product.id) 
                          ? 'bg-red-500 text-white hover:bg-red-600' 
                          : 'bg-white hover:bg-red-50'
                      }`}
                      onClick={() => toggleWishlist(product.id)}
                    >
                      <Heart className={`w-4 h-4 ${wishlist.includes(product.id) ? 'fill-current' : ''}`} />
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-full bg-white shadow-lg hover:bg-blue-50"
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) 
                              ? 'text-yellow-400 fill-yellow-400' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">({product.reviews})</span>
                  </div>

                  {/* Name */}
                  <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1 group-hover:text-green-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{product.unit}</p>

                  {/* Price & Cart */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-green-600">
                        ${product.price.toFixed(2)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <Button
                      size="icon"
                      className={`rounded-full shadow-lg ${
                        product.inStock 
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600' 
                          : 'bg-gray-300 cursor-not-allowed'
                      }`}
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default ProductCarousel