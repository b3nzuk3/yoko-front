import Header from '@/components/Header'
import Footer from '@/components/Footer'
import collection1 from '@/assets/collection-1.jpg'
import collection2 from '@/assets/collection-2.jpg'
import hero from '@/assets/hero-fashion.jpg'

const shots = [
  { id: 1, src: hero, caption: 'Editorial 01 — Soft light, bold attitude' },
  { id: 2, src: collection1, caption: 'Statement textures with cream accents' },
  { id: 3, src: collection2, caption: 'Sculptural bags and playful pinks' },
  { id: 4, src: collection1, caption: 'Effortless tailoring for every body' },
]

const Lookbook = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1">
        <div className="mb-10 text-center">
          <h1 className="font-serif font-bold mb-4">Lookbook</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Editorial storytelling featuring diverse models. Tap shots to shop
            the vibe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {shots.map((s) => (
            <figure
              key={s.id}
              className="group overflow-hidden rounded-[12px] bg-card card-shadow"
            >
              <img
                src={s.src}
                alt={s.caption}
                className="w-full h-[420px] object-cover group-hover:scale-105 slow-transition"
              />
              <figcaption className="p-4 text-sm text-muted-foreground">
                {s.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">More editorials coming soon.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Lookbook
