// src/components/HeroBanner.tsx
'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import { ArrowRight, Star, Truck, Shield, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const HeroBanner = () => {
  const banners = [
    {
      id: 1,
      title: "Fresh Farm Milk",
      titleHighlight: "Delivered Daily",
      subtitle: "100% Pure & Natural",
      description: "Start your day with nutritious milk straight from local farms. No preservatives, just pure goodness.",
      buttonText: "Order Now",
      buttonLink: "/products",
      image: "🥛",
      bgGradient: "from-green-50 via-emerald-50 to-teal-50",
      accentColor: "green",
      stats: [
        { label: "Happy Customers", value: "50K+" },
        { label: "Daily Deliveries", value: "10K+" },
        { label: "Farm Partners", value: "100+" },
      ]
    },
    {
      id: 2,
      title: "Premium Quality",
      titleHighlight: "Dairy Products",
      subtitle: "From Farm to Your Doorstep",
      description: "Subscribe & Save 20% on all monthly orders. Fresh dairy products delivered at your convenience.",
      buttonText: "Subscribe Today",
      buttonLink: "/subscription",
      image: "🧀",
      bgGradient: "from-amber-50 via-orange-50 to-yellow-50",
      accentColor: "orange",
      stats: [
        { label: "Products", value: "200+" },
        { label: "Cities", value: "50+" },
        { label: "Rating", value: "4.9⭐" },
      ]
    },
    {
      id: 3,
      title: "Organic &",
      titleHighlight: "Hormone-Free",
      subtitle: "Healthy Choice for Your Family",
      description: "100% organic, ethically sourced dairy. Because your family deserves the best.",
      buttonText: "Shop Organic",
      buttonLink: "/products/organic",
      image: "🐄",
      bgGradient: "from-blue-50 via-indigo-50 to-purple-50",
      accentColor: "blue",
      stats: [
        { label: "Organic Farms", value: "25+" },
        { label: "Certifications", value: "10+" },
        { label: "Years", value: "15+" },
      ]
    }
  ]

  const features = [
    { icon: Truck, text: "Free Delivery" },
    { icon: Shield, text: "Quality Assured" },
    { icon: Clock, text: "Fresh Daily" },
  ]

  return (
    <section className="relative overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        loop
        className="h-[600px] md:h-[700px] lg:h-[800px]"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={banner.id}>
            <div className={`relative h-full bg-gradient-to-br ${banner.bgGradient}`}>
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500"></div>
              </div>

              <div className="container mx-auto px-4 h-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full py-12 lg:py-0">
                  {/* Content */}
                  <div className="text-center lg:text-left space-y-6 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      <span className="text-sm font-semibold text-gray-700">{banner.subtitle}</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                      {banner.title}
                      <span className="block gradient-text">{banner.titleHighlight}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
                      {banner.description}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                      <Button 
                        size="lg"
                        className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl shadow-green-500/25 group"
                      >
                        {banner.buttonText}
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg"
                        className="rounded-full px-8 py-6 text-lg font-semibold border-2 hover:bg-gray-50"
                      >
                        Learn More
                      </Button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 pt-8">
                      {banner.stats.map((stat, i) => (
                        <div key={i} className="text-center lg:text-left">
                          <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</div>
                          <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image/Icon */}
                  <div className="relative hidden lg:flex items-center justify-center">
                    <div className="relative">
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-3xl opacity-30 scale-75"></div>
                      
                      {/* Main Circle */}
                      <div className="relative w-[400px] h-[400px] xl:w-[500px] xl:h-[500px] bg-white rounded-full shadow-2xl flex items-center justify-center animate-float">
                        <span className="text-[150px] xl:text-[200px]">{banner.image}</span>
                      </div>

                      {/* Floating Elements */}
                      <div className="absolute top-0 right-0 bg-white p-4 rounded-2xl shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                        <div className="flex items-center gap-2">
                          <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                          <span className="font-bold">4.9</span>
                          <span className="text-gray-500 text-sm">(2.5k)</span>
                        </div>
                      </div>

                      <div className="absolute bottom-10 -left-10 bg-white p-4 rounded-2xl shadow-xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                        <div className="flex items-center gap-2">
                          <Truck className="w-5 h-5 text-green-500" />
                          <span className="font-semibold text-sm">Free Delivery</span>
                        </div>
                      </div>

                      <div className="absolute top-1/2 -right-16 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-2xl shadow-xl animate-pulse">
                        <div className="text-center">
                          <div className="text-2xl font-bold">20%</div>
                          <div className="text-xs">OFF</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Features Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-t-3xl shadow-2xl p-6 grid grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center justify-center gap-3 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-green-600" />
                </div>
                <span className="font-semibold text-gray-800 hidden sm:block">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner