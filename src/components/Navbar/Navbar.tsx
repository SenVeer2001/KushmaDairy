// src/components/Navbar.tsx
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ShoppingCart, 
  User, 
  Search, 
  Menu, 
  X,
  MapPin,
  ChevronDown,
  Heart,
  Package,
  LogOut,
  Settings,
  Milk,
  Phone,
  Clock,
  Truck
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [cartItemsCount] = useState(3)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const categories = [
    {
      title: "Milk Products",
      icon: "🥛",
      items: [
        { name: "Whole Milk", description: "Rich and creamy full-fat milk", href: "/products/whole-milk", price: "$4.99" },
        { name: "Skimmed Milk", description: "Low fat healthy option", href: "/products/skimmed-milk", price: "$4.49" },
        { name: "Lactose Free", description: "Easy to digest", href: "/products/lactose-free", price: "$5.49" },
        { name: "Organic Milk", description: "100% natural & organic", href: "/products/organic", price: "$6.99" },
      ]
    },
    {
      title: "Dairy Products",
      icon: "🧀",
      items: [
        { name: "Fresh Yogurt", description: "Probiotic rich yogurt", href: "/products/yogurt", price: "$3.99" },
        { name: "Cheese Collection", description: "Various types of cheese", href: "/products/cheese", price: "$7.99" },
        { name: "Fresh Butter", description: "Creamy & delicious", href: "/products/butter", price: "$5.99" },
        { name: "Heavy Cream", description: "Perfect for cooking", href: "/products/cream", price: "$4.99" },
      ]
    }
  ]

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products', hasDropdown: true },
    { name: 'Subscription', href: '/subscription', badge: 'Save 20%' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 text-white py-2 text-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 flex justify-between items-center relative z-10">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 cursor-pointer hover:text-green-100 transition-colors">
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline">Deliver to:</span>
              <strong>New York, 10001</strong>
              <ChevronDown className="w-4 h-4" />
            </span>
            <div className="hidden md:flex items-center gap-4 text-green-100">
              <span className="flex items-center gap-1">
                <Truck className="w-4 h-4" />
                Free delivery over $30
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                Delivery: 6AM - 8PM
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/track-order" className="hover:text-green-100 transition-colors flex items-center gap-1">
              <Package className="w-4 h-4" />
              <span className="hidden sm:inline">Track Order</span>
            </Link>
            <a href="tel:1800123456" className="hover:text-green-100 transition-colors flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">1-800-DAIRY</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg py-2' 
          : 'bg-white py-4 border-b'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-green-400 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-green-500 to-green-600 p-2.5 rounded-full shadow-lg group-hover:shadow-green-300 transition-shadow">
                  <Milk className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold gradient-text">KushmaDairy</span>
                <span className="text-xs text-gray-500 -mt-1">Fresh & Pure</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <NavigationMenu>
                <NavigationMenuList className="gap-1">
                  <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                      <NavigationMenuLink className="px-4 py-2 rounded-full text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all font-medium">
                        Home
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="px-4 py-2 rounded-full text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all font-medium bg-transparent">
                      Products
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[700px] p-6 bg-white rounded-2xl shadow-2xl border">
                        <div className="grid grid-cols-2 gap-6">
                          {categories.map((category) => (
                            <div key={category.title} className="space-y-4">
                              <div className="flex items-center gap-2 pb-2 border-b border-green-100">
                                <span className="text-2xl">{category.icon}</span>
                                <h3 className="font-bold text-lg text-gray-900">{category.title}</h3>
                              </div>
                              <ul className="space-y-1">
                                {category.items.map((item) => (
                                  <li key={item.name}>
                                    <Link
                                      href={item.href}
                                      className="flex items-center justify-between p-3 rounded-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all group"
                                    >
                                      <div>
                                        <div className="font-semibold text-gray-800 group-hover:text-green-700">{item.name}</div>
                                        <div className="text-sm text-gray-500">{item.description}</div>
                                      </div>
                                      <span className="text-green-600 font-bold">{item.price}</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 pt-4 border-t border-green-100">
                          <Link 
                            href="/products" 
                            className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all"
                          >
                            View All Products
                            <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                          </Link>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/subscription" legacyBehavior passHref>
                      <NavigationMenuLink className="px-4 py-2 rounded-full text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all font-medium flex items-center gap-2">
                        Subscription
                        <Badge className="bg-gradient-to-r from-orange-400 to-red-500 text-white text-[10px] px-2 py-0.5 animate-pulse">
                          Save 20%
                        </Badge>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                      <NavigationMenuLink className="px-4 py-2 rounded-full text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all font-medium">
                        About Us
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/contact" legacyBehavior passHref>
                      <NavigationMenuLink className="px-4 py-2 rounded-full text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all font-medium">
                        Contact
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-green-500 transition-colors" />
                <Input
                  type="search"
                  placeholder="Search milk, yogurt, cheese..."
                  className="pl-12 pr-4 py-6 w-full rounded-full border-2 border-gray-100 focus:border-green-500 focus:ring-green-500/20 transition-all bg-gray-50 focus:bg-white"
                />
                <Button 
                  size="sm" 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-green-500 hover:bg-green-600 px-6"
                >
                  Search
                </Button>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* Mobile Search */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden rounded-full hover:bg-green-50"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                {searchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
              </Button>

              {/* Wishlist */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative rounded-full hover:bg-red-50 hover:text-red-500 transition-colors hidden sm:flex"
              >
                <Heart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center bg-red-500 text-white text-xs rounded-full font-bold">
                  2
                </span>
              </Button>

              {/* Cart */}
              <Link href="/cart">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="relative rounded-full hover:bg-green-50 hover:text-green-600 transition-colors"
                >
                  <ShoppingCart className="w-5 h-5" />
                  {cartItemsCount > 0 && (
                    <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs rounded-full font-bold animate-pulse">
                      {cartItemsCount}
                    </span>
                  )}
                </Button>
              </Link>

              {/* User Account */}
              {isLoggedIn ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-green-50">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white font-semibold">
                        J
                      </div>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-64 p-2 rounded-xl">
                    <DropdownMenuLabel className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold text-lg">
                          J
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">John Doe</p>
                          <p className="text-sm text-gray-500">john@example.com</p>
                        </div>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="py-3 px-3 rounded-lg cursor-pointer hover:bg-green-50">
                      <User className="mr-3 h-4 w-4 text-green-600" />
                      My Account
                    </DropdownMenuItem>
                    <DropdownMenuItem className="py-3 px-3 rounded-lg cursor-pointer hover:bg-green-50">
                      <Package className="mr-3 h-4 w-4 text-green-600" />
                      My Orders
                    </DropdownMenuItem>
                    <DropdownMenuItem className="py-3 px-3 rounded-lg cursor-pointer hover:bg-green-50">
                      <Heart className="mr-3 h-4 w-4 text-green-600" />
                      Wishlist
                    </DropdownMenuItem>
                    <DropdownMenuItem className="py-3 px-3 rounded-lg cursor-pointer hover:bg-green-50">
                      <Settings className="mr-3 h-4 w-4 text-green-600" />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="py-3 px-3 rounded-lg cursor-pointer hover:bg-red-50 text-red-600">
                      <LogOut className="mr-3 h-4 w-4" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button 
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-full px-6 shadow-lg shadow-green-500/25 hidden sm:flex"
                  onClick={() => setIsLoggedIn(true)}
                >
                  Sign In
                </Button>
              )}

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden rounded-full hover:bg-green-50">
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-[320px] sm:w-[400px] p-0">
                  <div className="h-full flex flex-col">
                    <SheetHeader className="p-6 bg-gradient-to-r from-green-500 to-emerald-500">
                      <SheetTitle className="flex items-center gap-3 text-white">
                        <div className="bg-white/20 p-2 rounded-full">
                          <Milk className="w-6 h-6" />
                        </div>
                        KushmaDairy
                      </SheetTitle>
                    </SheetHeader>
                    <MobileMenu />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
            searchOpen ? 'max-h-20 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-12 pr-4 py-3 w-full rounded-full border-2 focus:border-green-500"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

// Mobile Menu Component
const MobileMenu = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(null)

  const menuItems = [
    { name: 'Home', href: '/', icon: '🏠' },
    {
      name: 'Products',
      icon: '🛒',
      subItems: [
        { name: 'All Products', href: '/products' },
        { name: 'Fresh Milk', href: '/products/milk' },
        { name: 'Yogurt', href: '/products/yogurt' },
        { name: 'Cheese', href: '/products/cheese' },
        { name: 'Butter', href: '/products/butter' },
        { name: 'Cream', href: '/products/cream' },
      ]
    },
    { name: 'Subscription', href: '/subscription', icon: '📦', badge: 'Save 20%' },
    { name: 'About Us', href: '/about', icon: 'ℹ️' },
    { name: 'Contact', href: '/contact', icon: '📞' },
  ]

  return (
    <div className="flex-1 overflow-auto">
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              {item.subItems ? (
                <div>
                  <button
                    className="flex items-center justify-between w-full p-4 hover:bg-green-50 rounded-xl transition-colors"
                    onClick={() => setOpenCategory(openCategory === item.name ? null : item.name)}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-xl">{item.icon}</span>
                      <span className="font-medium">{item.name}</span>
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                        openCategory === item.name ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${
                    openCategory === item.name ? 'max-h-96' : 'max-h-0'
                  }`}>
                    <ul className="ml-12 mt-2 space-y-1 border-l-2 border-green-100">
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <SheetClose asChild>
                            <Link
                              href={subItem.href}
                              className="block py-3 px-4 hover:bg-green-50 rounded-r-lg text-gray-600 hover:text-green-600 transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <SheetClose asChild>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between p-4 hover:bg-green-50 rounded-xl transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-xl">{item.icon}</span>
                      <span className="font-medium">{item.name}</span>
                    </span>
                    {item.badge && (
                      <Badge className="bg-gradient-to-r from-orange-400 to-red-500 text-white">
                        {item.badge}
                      </Badge>
                    )}
                  </Link>
                </SheetClose>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 mt-auto border-t">
        <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-xl py-6 text-lg font-semibold shadow-lg">
          Sign In / Sign Up
        </Button>
        
        <div className="mt-6 space-y-3 text-center">
          <p className="text-sm text-gray-500">Need Help?</p>
          <a href="tel:1800123456" className="flex items-center justify-center gap-2 text-green-600 font-semibold">
            <Phone className="w-4 h-4" />
            1-800-DAIRY
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar