import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useAuth } from '@/contexts/AuthContext'
import { apiRequest } from '@/lib/api'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Search,
  Package,
  Users,
  ShoppingCart,
  BarChart3,
  Edit,
  Trash2,
  Plus,
  LogOut,
} from 'lucide-react'

type AdminUser = {
  id: string
  name: string
  email: string
  role: 'user' | 'admin'
}

type Product = {
  _id: string
  title: string
  price: number
  active: boolean
  originalPrice?: number
  category?: string
  images?: string[]
}

type TabType = 'products' | 'users' | 'orders' | 'settings'

const Dashboard = () => {
  const { user, token, logout } = useAuth()
  const [users, setUsers] = useState<AdminUser[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [activeTab, setActiveTab] = useState<TabType>('products')
  const [searchQuery, setSearchQuery] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState<{
    id?: string
    title: string
    price: string
    originalPrice: string
    category: string
    images: string
  }>({ title: '', price: '', originalPrice: '', category: '', images: '' })

  useEffect(() => {
    if (!token) return
    // Load users and products in parallel
    Promise.all([
      apiRequest<AdminUser[]>(`/api/users`, {}, token).catch(() => []),
      apiRequest<Product[]>(`/api/products`, {}, token).catch(() => []),
    ]).then(([u, p]) => {
      setUsers(u)
      setProducts(p)
    })
  }, [token])

  const resetForm = () =>
    setForm({
      title: '',
      price: '',
      originalPrice: '',
      category: '',
      images: '',
    })

  const saveProduct = async () => {
    if (!token) return
    const payload: any = {
      title: form.title,
      price: Number(form.price),
      originalPrice: form.originalPrice
        ? Number(form.originalPrice)
        : undefined,
      category: form.category,
      images: form.images ? form.images.split(',').map((s) => s.trim()) : [],
    }
    const path = form.id ? `/api/products/${form.id}` : '/api/products'
    const method = form.id ? 'PATCH' : 'POST'
    await apiRequest<Product>(
      path,
      { method, body: JSON.stringify(payload) },
      token
    )
    const updated = await apiRequest<Product[]>(`/api/products`, {}, token)
    setProducts(updated)
    resetForm()
    setShowForm(false)
  }

  const editProduct = (p: Product) => {
    setForm({
      id: p._id,
      title: p.title,
      price: String(p.price),
      originalPrice: p.originalPrice ? String(p.originalPrice) : '',
      category: p.category || '',
      images: (p.images || []).join(', '),
    })
    setShowForm(true)
  }

  const deleteProduct = async (id: string) => {
    if (!token) return
    await apiRequest(`/api/products/${id}`, { method: 'DELETE' }, token)
    setProducts((prev) => prev.filter((x) => x._id !== id))
  }

  const filteredProducts = products.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const isAdmin = user?.role === 'admin'

  const summaryCards = [
    {
      title: 'Total Products',
      value: products.length.toString(),
      icon: Package,
      color: 'text-pink-500',
    },
    {
      title: 'Total Users',
      value: users.length.toString(),
      icon: Users,
      color: 'text-pink-500',
    },
    {
      title: 'Total Orders',
      value: '0',
      icon: ShoppingCart,
      color: 'text-pink-500',
    },
    {
      title: 'Revenue',
      value: '$0',
      icon: BarChart3,
      color: 'text-pink-500',
    },
  ]

  const tabs: { id: TabType; label: string }[] = [
    { id: 'products', label: 'Products' },
    { id: 'users', label: 'Users' },
    { id: 'orders', label: 'Orders' },
    { id: 'settings', label: 'Settings' },
  ]

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1">
          <p className="text-muted-foreground">
            You must be an admin to view this page.
          </p>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="font-serif font-bold text-4xl mb-2">
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground text-lg">
              Manage your store, products, and users.
            </p>
          </div>
          <Button
            variant="outline"
            onClick={logout}
            className="flex items-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {summaryCards.map((card) => (
            <div
              key={card.title}
              className="rounded-[12px] bg-card p-6 card-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {card.title}
                  </p>
                  <p className="text-2xl font-bold">{card.value}</p>
                </div>
                <card.icon className={`w-8 h-8 ${card.color}`} />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-muted rounded-lg p-1 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'products' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Product Management</h2>
              <Button
                onClick={() => setShowForm(true)}
                variant="hero"
                className="flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Product
              </Button>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Product Form */}
            {showForm && (
              <div className="rounded-[12px] bg-card p-6 card-shadow">
                <h3 className="font-semibold mb-4">
                  {form.id ? 'Edit Product' : 'Add New Product'}
                </h3>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <Input
                    placeholder="Title"
                    value={form.title}
                    onChange={(e) =>
                      setForm({ ...form, title: e.target.value })
                    }
                  />
                  <Input
                    placeholder="Price"
                    value={form.price}
                    onChange={(e) =>
                      setForm({ ...form, price: e.target.value })
                    }
                  />
                  <Input
                    placeholder="Original price"
                    value={form.originalPrice}
                    onChange={(e) =>
                      setForm({ ...form, originalPrice: e.target.value })
                    }
                  />
                  <Input
                    placeholder="Category"
                    value={form.category}
                    onChange={(e) =>
                      setForm({ ...form, category: e.target.value })
                    }
                  />
                  <Input
                    placeholder="Images (comma separated URLs)"
                    className="md:col-span-2"
                    value={form.images}
                    onChange={(e) =>
                      setForm({ ...form, images: e.target.value })
                    }
                  />
                </div>
                <div className="flex gap-3">
                  <Button onClick={saveProduct} variant="hero">
                    {form.id ? 'Update' : 'Create'} Product
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      resetForm()
                      setShowForm(false)
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}

            {/* Product List */}
            <div className="space-y-3">
              {filteredProducts.map((p) => (
                <div
                  key={p._id}
                  className="rounded-[12px] bg-card p-4 card-shadow"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                      {p.images && p.images[0] ? (
                        <img
                          src={p.images[0]}
                          alt={p.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      ) : (
                        <Package className="w-8 h-8 text-muted-foreground" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{p.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {p.category || 'Uncategorized'}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        ${p.price}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => editProduct(p)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => deleteProduct(p._id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              {filteredProducts.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  {searchQuery
                    ? 'No products found matching your search.'
                    : 'No products yet. Create your first product!'}
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'users' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">User Management</h2>
            <div className="rounded-[12px] bg-card p-6 card-shadow">
              <div className="overflow-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-muted-foreground">
                      <th className="py-2">Name</th>
                      <th className="py-2">Email</th>
                      <th className="py-2">Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((u) => (
                      <tr key={u.id} className="border-t border-border">
                        <td className="py-2">{u.name}</td>
                        <td className="py-2">{u.email}</td>
                        <td className="py-2">{u.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Order Management</h2>
            <div className="rounded-[12px] bg-card p-6 card-shadow">
              <p className="text-muted-foreground">No orders yet.</p>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Settings</h2>
            <div className="rounded-[12px] bg-card p-6 card-shadow">
              <p className="text-muted-foreground">
                Settings panel coming soon.
              </p>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default Dashboard
