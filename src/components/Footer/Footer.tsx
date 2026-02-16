// src/components/Footer.tsx
import Link from 'next/link'
import { 
  Milk, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Heart
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    products: [
      { name: "Fresh Milk", href: "/products/milk" },
      { name: "Yogurt", href: "/products/yogurt" },
      { name: "Cheese", href: "/products/cheese" },
      { name: "Butter", href: "/products/butter" },
      { name: "Cream", href: "/products/cream" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Farms", href: "/farms" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
      { name: "Blog", href: "/blog" },
    ],
    support: [
      { name: "Help Center", href: "/help" },
      { name: "Contact Us", href: "/contact" },
      { name: "FAQs", href: "/faq" },
      { name: "Delivery Info", href: "/delivery" },
      { name: "Returns", href: "/returns" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "Youtube" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left max-w-xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-3">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-green-100 text-lg">
                Get exclusive offers, new product alerts, and dairy tips delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="pl-12 pr-4 py-6 bg-white text-gray-900 rounded-full min-w-[300px] border-0 focus:ring-2 focus:ring-white/50"
                />
              </div>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8 py-6 font-semibold group">
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-2.5 rounded-full">
                <Milk className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold">KushmaDairy</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted source for fresh, premium dairy products. Delivering quality and nutrition to your doorstep since 2020.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a href="tel:1800123456" className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors">
                <Phone className="w-5 h-5" />
                1-800-DAIRY-99
              </a>
              <a href="mailto:hello@kushmadairy.com" className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors">
                <Mail className="w-5 h-5" />
                hello@kushmadairy.com
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-1" />
                123 Dairy Lane, Fresh City, FC 12345
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors group"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* App Download */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get the App</h4>
            <div className="space-y-3">
              <a href="#" className="block bg-gray-800 rounded-xl p-3 hover:bg-gray-700 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">🍎</div>
                  <div>
                    <div className="text-xs text-gray-400">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </div>
              </a>
              <a href="#" className="block bg-gray-800 rounded-xl p-3 hover:bg-gray-700 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">🤖</div>
                  <div>
                    <div className="text-xs text-gray-400">Get it on</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <span className="text-gray-400 text-sm">We accept:</span>
            {['VISA', 'MasterCard', 'PayPal', 'Apple Pay', 'Google Pay'].map((method, index) => (
              <div key={index} className="bg-gray-800 px-4 py-2 rounded-lg">
                <span className="text-sm font-semibold">{method}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} KushmaDairy. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for dairy lovers
          </p>
          <div className="flex gap-6 text-sm">
            {footerLinks.legal.map((link, index) => (
              <Link 
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer