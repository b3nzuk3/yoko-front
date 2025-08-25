import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAuth } from '@/contexts/AuthContext'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      if (password !== confirm) throw new Error('Passwords do not match')
      await register(name, email, password)
      navigate('/login')
    } catch (err: any) {
      setError(err.message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1">
        <div className="max-w-md mx-auto rounded-[12px] bg-card p-6 md:p-8 card-shadow">
          <h1 className="font-serif font-bold text-center mb-6">
            Create Account
          </h1>
          <form onSubmit={onSubmit} className="space-y-4">
            <Input
              className="h-12 rounded-[12px]"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              className="h-12 rounded-[12px]"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              className="h-12 rounded-[12px]"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              className="h-12 rounded-[12px]"
              placeholder="Confirm Password"
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
            {error && <div className="text-sm text-destructive">{error}</div>}
            <Button
              type="submit"
              disabled={loading}
              className="w-full"
              variant="hero"
            >
              {loading ? 'Creating...' : 'Sign Up'}
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Register
