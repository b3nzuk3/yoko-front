import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        <h1 className="font-serif font-bold mb-6">Profile</h1>
        {!user ? (
          <div className="space-y-4">
            <p className="text-muted-foreground">You're not signed in.</p>
            <div className="flex gap-3">
              <Button onClick={() => navigate('/admin/login')}>Sign in</Button>
              <Button variant="secondary" onClick={() => navigate('/signup')}>
                Create account
              </Button>
              <Button variant="outline" onClick={() => navigate('/new')}>
                Continue shopping
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <div className="text-sm text-muted-foreground">Name</div>
              <div className="font-medium">{user.name}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Email</div>
              <div className="font-medium">{user.email}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Role</div>
              <div className="font-medium">{user.role}</div>
            </div>
            <div className="flex gap-3 pt-2">
              {user.role === 'admin' && (
                <Button variant="secondary" onClick={() => navigate('/admin')}>
                  Open Admin
                </Button>
              )}
              <Button variant="outline" onClick={handleLogout}>
                Sign out
              </Button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default Profile
