import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'

const Checkout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="font-serif mb-8">Checkout</h1>
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <section className="space-y-4">
              <h3 className="font-semibold">Contact</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="First name" />
                <Input placeholder="Last name" />
                <Input
                  className="sm:col-span-2"
                  type="email"
                  placeholder="Email"
                />
              </div>
            </section>

            <Separator />

            <section className="space-y-4">
              <h3 className="font-semibold">Shipping</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Address" className="sm:col-span-2" />
                <Input placeholder="City" />
                <Input placeholder="Postal code" />
                <Input placeholder="Country" className="sm:col-span-2" />
              </div>
            </section>

            <Separator />

            <section className="space-y-4">
              <h3 className="font-semibold">Payment</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Card number" />
                <Input placeholder="Name on card" />
                <Input placeholder="Expiry (MM/YY)" />
                <Input placeholder="CVC" />
              </div>
            </section>

            <div className="pt-4">
              <Button className="w-full sm:w-auto">Pay now</Button>
            </div>
          </div>

          <aside className="space-y-4 h-max bg-card p-6 rounded-[12px] card-shadow">
            <h3 className="font-semibold">Order Summary</h3>
            <div className="flex justify-between text-sm">
              <span>Items</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Shipping</span>
              <span>Calculated at next step</span>
            </div>
            <Separator />
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>$0.00</span>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Checkout
