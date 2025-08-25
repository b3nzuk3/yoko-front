import { Button } from "@/components/ui/button";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";

const collections = [
  {
    id: 1,
    title: "Spring Essentials",
    description: "Light, airy pieces for effortless elegance",
    image: collection1,
    itemCount: 24,
  },
  {
    id: 2,
    title: "Statement Accessories",
    description: "Bold pieces that tell your story",
    image: collection2,
    itemCount: 18,
  },
  {
    id: 3,
    title: "Sustainable Luxury",
    description: "Consciously crafted, beautifully designed",
    image: collection1,
    itemCount: 32,
  },
];

const FeaturedCollections = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-foreground font-serif mb-4">
            Curated Collections
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughtfully designed pieces that work together to create your perfect wardrobe
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-card fashion-shadow hover:card-shadow smooth-transition">
                {/* Collection Image */}
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 slow-transition"
                  />
                </div>

                {/* Collection Info Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-6 flex flex-col justify-end">
                  <div className="text-white">
                    <p className="text-sm opacity-90 mb-1">
                      {collection.itemCount} pieces
                    </p>
                    <h3 className="text-2xl font-serif font-semibold mb-2">
                      {collection.title}
                    </h3>
                    <p className="text-sm opacity-90 mb-4">
                      {collection.description}
                    </p>
                    <Button 
                      variant="secondary" 
                      size="sm"
                      className="bg-white/90 text-black hover:bg-white"
                    >
                      Explore Collection
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;