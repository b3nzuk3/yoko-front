export type ApiUser = {
  id: string
  name: string
  email: string
  role: 'user' | 'admin'
}

export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001'

export async function apiRequest<T>(
  path: string,
  options: RequestInit = {},
  token?: string
): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  })
  if (!res.ok) {
    const msg = (await res.json().catch(() => ({}))).message || res.statusText
    throw new Error(msg)
  }
  return res.json()
}
