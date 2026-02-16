// src/components/Testimonials.tsx
'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Star, Quote } from 'lucide-react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Mother of 2",
      avatar: "👩",
      rating: 5,
      text: "The quality of milk is exceptional! My kids love the taste and I feel confident knowing they're getting the best nutrition. The delivery is always on time.",
      location: "New York"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Health Enthusiast",
      avatar: "👨",
      rating: 5,
      text: "As someone who's particular about organic products, KushmaDairy exceeds my expectations. The organic milk tastes incredibly fresh and pure.",
      location: "Los Angeles"
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Chef",
      avatar: "👩‍🍳",
      rating: 5,
      text: "I use their dairy products in my restaurant. The consistency and quality are unmatched. My customers always compliment the dishes made with their cream and butter.",
      location: "Chicago"
    },
    {
      id: 4,
      name: "Robert Williams",
      role: "Fitness Trainer",
      avatar: "💪",
      rating: 5,
      text: "The protein-rich milk options are perfect for my clients. Clean ingredients, great taste, and reliable delivery - everything a health-conscious person needs.",
      location: "Miami"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Café Owner",
      avatar: "☕",
      rating: 5,
      text: "Switched to KushmaDairy for my café 6 months ago. Best decision ever! The milk froths perfectly for lattes and the customers have noticed the difference.",
      location: "Seattle"
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 text-9xl opacity-5">❝</div>
      <div className="absolute bottom-20 right-10 text-9xl opacity-5 rotate-180">❝</div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-white text-green-700 rounded-full text-sm font-semibold mb-4 shadow-sm">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Join thousands of happy customers who trust us for their daily dairy needs
          </p>
        </div>

        {/* Testimonials Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-600 leading-relaxed flex-grow mb-6 text-lg">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center text-3xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                    <p className="text-xs text-green-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { value: "50K+", label: "Happy Customers" },
            { value: "4.9", label: "Average Rating" },
            { value: "99%", label: "Satisfaction Rate" },
            { value: "15K+", label: "5-Star Reviews" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials