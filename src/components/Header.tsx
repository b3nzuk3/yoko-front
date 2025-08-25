import { Search, User, ShoppingBag, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import { useCart } from '@/contexts/CartContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0
      const delta = y - lastY.current
      const scrollingDown = delta > 5
      const scrollingUp = delta < -5

      if (y < 80) {
        setIsHidden(false)
      } else if (scrollingDown) {
        setIsHidden(true)
      } else if (scrollingUp) {
        setIsHidden(false)
      }

      lastY.current = y
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const { itemCount, setIsOpen } = useCart()
  const { user } = useAuth()

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border transition-transform duration-300 ${
        isHidden && !isMenuOpen ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-2xl font-bold text-foreground font-serif">
                Yoko
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/new"
              className="text-foreground hover:text-primary smooth-transition font-medium"
            >
              New Arrivals
            </Link>
            <Link
              to="/collection"
              className="text-foreground hover:text-primary smooth-transition font-medium"
            >
              Collections
            </Link>
            <Link
              to="/lookbook"
              className="text-foreground hover:text-primary smooth-transition font-medium"
            >
              Lookbook
            </Link>
            <Link
              to="/about"
              className="text-foreground hover:text-primary smooth-transition font-medium"
            >
              About
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Link to={user ? '/profile' : '/login'}>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => setIsOpen(true)}
            >
              <ShoppingBag className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-primary rounded-full text-xs text-primary-foreground flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <nav className="py-4 space-y-4">
              <Link
                to="/new"
                className="block text-foreground hover:text-primary smooth-transition font-medium"
              >
                New Arrivals
              </Link>
              <Link
                to="/collection"
                className="block text-foreground hover:text-primary smooth-transition font-medium"
              >
                Collections
              </Link>
              <Link
                to="/lookbook"
                className="block text-foreground hover:text-primary smooth-transition font-medium"
              >
                Lookbook
              </Link>
              <Link
                to="/about"
                className="block text-foreground hover:text-primary smooth-transition font-medium"
              >
                About
              </Link>
              <Link
                to={user ? '/profile' : '/login'}
                className="block text-foreground hover:text-primary smooth-transition font-medium"
              >
                {user ? 'Profile' : 'Sign in'}
              </Link>
              <div className="pt-2">
                <Button variant="ghost" className="w-full justify-start">
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
