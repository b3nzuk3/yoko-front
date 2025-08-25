import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-foreground font-serif mb-4">
            Join Our Community
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be the first to discover new collections, exclusive pieces, and stories from our global community of creators
          </p>

          {/* Newsletter Signup */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-12">
            <Input
              type="email"
              placeholder="Your email address"
              className="flex-1 h-12 rounded-full border-2 focus:border-primary"
            />
            <Button variant="hero" size="default" className="sm:w-auto">
              Subscribe
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mb-8">
            <p className="text-sm text-muted-foreground mb-4">
              Join 50,000+ fashion lovers worldwide
            </p>
            <div className="flex justify-center items-center gap-6">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-foreground font-serif">Free</div>
              <div className="text-sm text-muted-foreground">Shipping over $100</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground font-serif">30 Days</div>
              <div className="text-sm text-muted-foreground">Easy returns</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground font-serif">Secure</div>
              <div className="text-sm text-muted-foreground">Payment protection</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground font-serif">Support</div>
              <div className="text-sm text-muted-foreground">Expert styling advice</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;