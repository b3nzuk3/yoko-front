import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { API_URL, apiRequest, type ApiUser } from '@/lib/api'

type AuthCtx = {
  user: ApiUser | null
  token: string | null
  login: (email: string, password: string) => Promise<ApiUser>
  register: (name: string, email: string, password: string) => Promise<ApiUser>
  logout: () => void
}

const Ctx = createContext<AuthCtx | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<ApiUser | null>(null)
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem('auth_token')
  )

  useEffect(() => {
    if (!token) return
    apiRequest<{
      id: string
      name: string
      email: string
      role: 'user' | 'admin'
    }>(`/api/auth/me`, {}, token)
      .then((u) => setUser({ ...u }))
      .catch(() => logout())
  }, [token])

  const login = async (email: string, password: string) => {
    const res = await apiRequest<{ token: string; user: ApiUser }>(
      `/api/auth/login`,
      {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      }
    )
    localStorage.setItem('auth_token', res.token)
    setToken(res.token)
    setUser(res.user)
    return res.user
  }

  const register = async (name: string, email: string, password: string) => {
    const res = await apiRequest<{ token: string; user: ApiUser }>(
      `/api/auth/register`,
      {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
      }
    )
    localStorage.setItem('auth_token', res.token)
    setToken(res.token)
    setUser(res.user)
    return res.user
  }

  const logout = () => {
    localStorage.removeItem('auth_token')
    setToken(null)
    setUser(null)
  }

  const value = useMemo(
    () => ({ user, token, login, register, logout }),
    [user, token]
  )
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export const useAuth = () => {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
