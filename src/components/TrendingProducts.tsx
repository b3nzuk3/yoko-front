import ProductCard from "./ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const trendingProducts = [
  {
    id: 1,
    title: "Silk Harmony Scarf",
    price: 89,
    originalPrice: 120,
    image: product1,
    colors: ["#ff6ba6", "#ff9ccf", "#000000"],
  },
  {
    id: 2,
    title: "Minimalist Leather Tote",
    price: 245,
    image: product2,
    colors: ["#fff5e6", "#ff6ba6", "#000000"],
  },
  {
    id: 3,
    title: "Rose Gold Statement Ring",
    price: 156,
    image: product3,
    colors: ["#ffd700", "#ff6ba6"],
  },
  {
    id: 4,
    title: "Contemporary Sunglasses",
    price: 128,
    originalPrice: 160,
    image: product4,
    colors: ["#000000", "#ff6ba6"],
  },
  {
    id: 5,
    title: "Elegant Chain Necklace",
    price: 198,
    image: product3,
    colors: ["#ffd700", "#c0c0c0"],
  },
  {
    id: 6,
    title: "Structured Crossbody",
    price: 189,
    image: product2,
    colors: ["#000000", "#fff5e6", "#ff6ba6"],
  },
];

const TrendingProducts = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-foreground font-serif mb-4">
            Trending Now
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The pieces everyone's talking about – discover what's capturing hearts and turning heads
          </p>
        </div>

        {/* Products Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {trendingProducts.map((product, index) => (
            <div
              key={product.id}
              className={`${
                index === 0 || index === 3 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                originalPrice={product.originalPrice}
                colors={product.colors}
              />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="text-foreground hover:text-primary font-medium border-b-2 border-transparent hover:border-primary smooth-transition">
            View All Products →
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;