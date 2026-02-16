// src/components/SubscriptionSection.tsx
import { Check, ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const SubscriptionSection = () => {
  const plans = [
    {
      name: "Basic",
      description: "Perfect for individuals",
      price: 29,
      period: "month",
      features: [
        "2L Fresh Milk Daily",
        "Free Delivery",
        "Flexible Schedule",
        "Cancel Anytime"
      ],
      popular: false,
      color: "border-gray-200"
    },
    {
      name: "Family",
      description: "Ideal for families of 4",
      price: 59,
      period: "month",
      features: [
        "4L Fresh Milk Daily",
        "Weekly Yogurt Pack",
        "Priority Delivery",
        "20% Off Add-ons",
        "Exclusive Products",
        "Family Support"
      ],
      popular: true,
      color: "border-green-500"
    },
    {
      name: "Premium",
      description: "For the dairy enthusiasts",
      price: 99,
      period: "month",
      features: [
        "6L Fresh Milk Daily",
        "Full Dairy Selection",
        "Same Hour Delivery",
        "30% Off Everything",
        "Personal Account Manager",
        "Early Access to New Products"
      ],
      popular: false,
      color: "border-purple-500"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Save up to 20%
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Subscription Plan</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Subscribe and save on your daily dairy needs. Flexible plans to suit every household.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-3xl p-8 transition-all duration-500 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-green-500 to-emerald-600 transform md:-translate-y-4 shadow-2xl shadow-green-500/25' 
                  : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-yellow-900 px-4 py-1">
                  Most Popular
                </Badge>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.popular ? 'text-green-100' : 'text-gray-400'}`}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-1">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-white'}`}>
                    $
                  </span>
                  <span className={`text-6xl font-bold ${plan.popular ? 'text-white' : 'text-white'}`}>
                    {plan.price}
                  </span>
                </div>
                <span className={`text-sm ${plan.popular ? 'text-green-100' : 'text-gray-400'}`}>
                  per {plan.period}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.popular ? 'bg-white/20' : 'bg-green-500/20'
                    }`}>
                      <Check className={`w-3 h-3 ${plan.popular ? 'text-white' : 'text-green-400'}`} />
                    </div>
                    <span className={plan.popular ? 'text-white' : 'text-gray-300'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button 
                className={`w-full py-6 rounded-xl font-semibold group ${
                  plan.popular 
                    ? 'bg-white text-green-600 hover:bg-green-50' 
                    : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600'
                }`}
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12 text-gray-400">
          <p>All plans include a 7-day free trial. No credit card required.</p>
        </div>
      </div>
    </section>
  )
}

export default SubscriptionSection