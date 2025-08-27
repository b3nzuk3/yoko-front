import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import heroImage from '@/assets/hero-fashion.jpg'

const Hero = () => {
  return (
    <section className="relative h-[80vh] md:h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fashion model in elegant contemporary clothing"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center h-full">
          <div className="max-w-2xl">
            <h1 className="text-foreground mb-6 font-serif">
              Embrace Your
              <br />
              <span className="text-primary">Beautiful</span>
              <br />
              Authenticity
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light leading-relaxed">
              Discover pieces that celebrate your unique story. Fashion that
              feels like you, looks like confidence, and moves with your dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/collection">
                <Button variant="hero" size="xl">
                  Shop Collection
                </Button>
              </Link>
              <Button variant="outline" size="xl">
                Watch Our Story
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator (hidden on mobile) */}
      <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}

export default Hero
