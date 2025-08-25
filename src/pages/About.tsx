import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  Heart,
  Leaf,
  Sparkles,
  Pencil,
  Scissors,
  Camera,
  Globe2,
  Ruler,
  Truck,
} from 'lucide-react'

const About = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1">
        {/* Intro + Designer */}
        <section className="grid lg:grid-cols-3 gap-10 items-start mb-12">
          <div className="lg:col-span-2 space-y-6">
            <h1 className="font-serif font-bold">About Yoko</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              We’re a fashion house committed to representation and editorial
              storytelling. Our pieces are designed to feel lovable—confident,
              playful, and timeless—crafted with care for people and planet.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="rounded-[12px] bg-card p-6 card-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="h-5 w-5 text-primary" />
                  <div className="text-2xl font-serif font-bold">Inclusive</div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Diverse models, inclusive sizing, and fit-first design.
                </p>
              </div>
              <div className="rounded-[12px] bg-card p-6 card-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <Leaf className="h-5 w-5 text-primary" />
                  <div className="text-2xl font-serif font-bold">Conscious</div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Responsible materials and small-batch production.
                </p>
              </div>
              <div className="rounded-[12px] bg-card p-6 card-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <div className="text-2xl font-serif font-bold">Crafted</div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Attention to detail with an editorial point of view.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-secondary/30 p-4 rounded-[12px]">
              <div className="text-center">
                <div className="text-2xl font-serif font-bold">10+</div>
                <div className="text-xs text-muted-foreground">
                  Years in craft
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-serif font-bold">500+</div>
                <div className="text-xs text-muted-foreground">
                  Pieces released
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-serif font-bold">XXS–4X</div>
                <div className="text-xs text-muted-foreground">Size range</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-serif font-bold">40+</div>
                <div className="text-xs text-muted-foreground">
                  Countries shipped
                </div>
              </div>
            </div>
          </div>

          <aside className="rounded-[12px] bg-card p-6 card-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4">
                <img
                  src="/placeholder.svg"
                  alt="Creative Director portrait"
                  className="h-32 w-32 rounded-full object-cover ring-4 ring-primary/30"
                />
              </div>
              <div className="font-serif text-2xl font-bold">R. Beaumont</div>
              <div className="text-sm text-muted-foreground mb-3">
                Creative Director
              </div>
              <p className="text-sm text-muted-foreground italic">
                “Fashion should feel like self-love. Every silhouette is
                designed to honor you.”
              </p>
            </div>
          </aside>
        </section>

        <section className="mb-12">
          <h3 className="font-semibold mb-4">Our Process</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="rounded-[12px] bg-card p-6 card-shadow">
              <div className="flex items-center gap-2 mb-2">
                <Pencil className="h-5 w-5 text-primary" />
                <span className="font-medium">Sketch</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Every piece begins with research, drape studies, and hand
                sketches.
              </p>
            </div>
            <div className="rounded-[12px] bg-card p-6 card-shadow">
              <div className="flex items-center gap-2 mb-2">
                <Scissors className="h-5 w-5 text-primary" />
                <span className="font-medium">Craft</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Small-batch cutting and finishing using responsible materials.
              </p>
            </div>
            <div className="rounded-[12px] bg-card p-6 card-shadow">
              <div className="flex items-center gap-2 mb-2">
                <Camera className="h-5 w-5 text-primary" />
                <span className="font-medium">Editorial</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Story-led campaigns highlighting diverse bodies and
                perspectives.
              </p>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-[12px] bg-card p-6 card-shadow">
            <div className="flex items-center gap-2 mb-2">
              <Globe2 className="h-5 w-5 text-primary" />
              <span className="font-medium">Representation</span>
            </div>
            <p className="text-muted-foreground text-sm">
              We partner with a global community of creatives to ensure our
              campaigns reflect the world we live in—celebrating identity,
              culture, and individuality.
            </p>
          </div>
          <div className="rounded-[12px] bg-card p-6 card-shadow">
            <div className="flex items-center gap-2 mb-2">
              <Ruler className="h-5 w-5 text-primary" />
              <span className="font-medium">Sizing & Fit</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Inclusive sizing with a transparent size guide and personal
              styling support.
            </p>
          </div>
          <div className="rounded-[12px] bg-card p-6 card-shadow">
            <div className="flex items-center gap-2 mb-2">
              <Truck className="h-5 w-5 text-primary" />
              <span className="font-medium">Shipping & Returns</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Fast global shipping and 30-day free returns on all orders.
            </p>
          </div>
          <div className="rounded-[12px] bg-card p-6 card-shadow">
            <div className="flex items-center gap-2 mb-2">
              <Leaf className="h-5 w-5 text-primary" />
              <span className="font-medium">Materials</span>
            </div>
            <p className="text-muted-foreground text-sm">
              We prioritize recycled, organic, and low-impact textiles where
              possible.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default About
