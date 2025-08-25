import { Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-foreground text-background mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Top region: brand left, links right on desktop */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-10">
          {/* Masthead + blurb */}
          <div className="mb-10 md:mb-12 lg:mb-0 lg:col-span-5">
            <h3 className="font-serif text-4xl md:text-5xl tracking-wider text-center md:text-left">
              Yoko
            </h3>
            <p className="mt-3 max-w-2xl text-center md:text-left mx-auto md:mx-0 text-background/80 text-sm leading-relaxed">
              Fashion that celebrates authenticity, embraces diversity, and
              empowers you to express your beautiful, unique self.
            </p>
            <div className="mt-6 flex justify-center md:justify-start gap-6">
              <Instagram className="h-6 w-6 md:h-7 md:w-7 cursor-pointer hover:text-primary smooth-transition" />
              <Facebook className="h-6 w-6 md:h-7 md:w-7 cursor-pointer hover:text-primary smooth-transition" />
              <Twitter className="h-6 w-6 md:h-7 md:w-7 cursor-pointer hover:text-primary smooth-transition" />
            </div>
          </div>

          {/* Link columns (sit to the right on desktop) */}
          <div className="lg:col-span-7">
            {/* Divider visible only on mobile to separate blocks */}
            <div className="border-t border-background/20 pt-10 lg:pt-0 lg:border-0" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center sm:text-left">
              {/* Shop */}
              <div>
                <h4 className="text-xs uppercase tracking-widest mb-4 text-center sm:text-left">
                  Shop
                </h4>
                <ul className="space-y-3 text-[13px] text-center sm:text-left">
                  <li>
                    <a
                      href="#"
                      className="text-background/80 hover:text-background smooth-transition"
                    >
                      New Arrivals
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-background/80 hover:text-background smooth-transition"
                    >
                      Collections
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-background/80 hover:text-background smooth-transition"
                    >
                      Accessories
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-background/80 hover:text-background smooth-transition"
                    >
                      Sale
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-background/80 hover:text-background smooth-transition"
                    >
                      Gift Cards
                    </a>
                  </li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="text-xs uppercase tracking-widest mb-4 text-center sm:text-left">
                  Support
                </h4>
                <ul className="space-y-3 text-[13px] text-center sm:text-left">
                  <li>
                    <a
                      href="#"
                      className="text-background/80 hover:text-background smooth-transition"
                    >
                      Size Guide
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-background/80 hover:text-background smooth-transition"
                    >
                      Shipping & Returns
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-background/80 hover:text-background smooth-transition"
                    >
                      Care Instructions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-background/80 hover:text-background smooth-transition"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-background/80 hover:text-background smooth-transition"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-xs uppercase tracking-widest mb-4 text-center sm:text-left">
                  Company
                </h4>
                <ul className="space-y-3 text-[13px] text-center sm:text-left">
                  <li>
                    <a
                      href="#"
                      className="text-background/80 hover:text-background smooth-transition"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-background/80 hover:text-background smooth-transition"
                    >
                      Sustainability
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-background/80 hover:text-background smooth-transition"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-background/80 hover:text-background smooth-transition"
                    >
                      Press
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-background/80 hover:text-background smooth-transition"
                    >
                      Affiliate Program
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 md:mt-12 border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="text-xs uppercase tracking-widest text-background/60">
              © 2024 Yoko Fashion. All rights reserved.
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex items-center gap-6 text-xs uppercase tracking-widest">
                <a
                  href="#"
                  className="text-background/60 hover:text-background smooth-transition"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-background/60 hover:text-background smooth-transition"
                >
                  Terms of Service
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-background/60 text-xs uppercase tracking-widest">
                  Payment:
                </span>
                <div className="flex gap-1">
                  <div className="w-9 h-6 bg-background/20 rounded text-[10px] flex items-center justify-center">
                    VISA
                  </div>
                  <div className="w-9 h-6 bg-background/20 rounded text-[10px] flex items-center justify-center">
                    MC
                  </div>
                  <div className="w-9 h-6 bg-background/20 rounded text-[10px] flex items-center justify-center">
                    PP
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
