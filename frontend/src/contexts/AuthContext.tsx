import { createContext, useContext, useEffect, useState } from 'react'
import type { User, Session } from '@supabase/supabase-js'
import { supabase, hasSupabaseConfig } from '../lib/supabase'
import type { Database } from '../types/database.types'

type Profile = Database['public']['Tables']['profiles']['Row']

interface AuthContextType {
  user: User | null
  profile: Profile | null
  session: Session | null
  loading: boolean
  signUp: (email: string, password: string, fullName?: string) => Promise<void>
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  updateProfile: (updates: Partial<Profile>) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Only try to get session if we have real Supabase config
    if (!hasSupabaseConfig) {
      // Load mock user from localStorage
      const mockUser = localStorage.getItem('mockUser')
      const mockProfile = localStorage.getItem('mockProfile')
      
      if (mockUser && mockProfile) {
        setUser(JSON.parse(mockUser))
        setProfile(JSON.parse(mockProfile))
      }
      
      setLoading(false)
      return
    }

    // Get initial session
    const getSession = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession()

        setSession(session)
        setUser(session?.user ?? null)

        if (session?.user) {
          await fetchProfile(session.user.id)
        }
      } catch (error) {
        console.warn('Supabase not configured:', error)
      }
      setLoading(false)
    }

    getSession()

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_, session) => {
      setSession(session)
      setUser(session?.user ?? null)

      if (session?.user) {
        await fetchProfile(session.user.id)
      } else {
        setProfile(null)
      }

      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  const fetchProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single()

      if (error) {
        console.error('Error fetching profile:', error)
        return
      }

      setProfile(data)
    } catch (error) {
      console.error('Error fetching profile:', error)
    }
  }

  const signUp = async (email: string, password: string, fullName?: string) => {
    if (!hasSupabaseConfig) {
      // Mock authentication for demo
      const mockUser = {
        id: `mock-${Date.now()}`,
        email,
        created_at: new Date().toISOString(),
        app_metadata: {},
        user_metadata: { full_name: fullName },
        aud: 'authenticated',
        confirmation_sent_at: new Date().toISOString()
      } as User

      const mockProfile = {
        id: mockUser.id,
        email,
        full_name: fullName || null,
        avatar_url: null,
        role: 'user' as const,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }

      // Store user in mock database
      const existingUsers = JSON.parse(localStorage.getItem('mockUsers') || '[]')
      const newUser = {
        id: mockUser.id,
        email,
        password, // In real app, this would be hashed
        full_name: fullName,
        created_at: mockUser.created_at
      }
      existingUsers.push(newUser)
      localStorage.setItem('mockUsers', JSON.stringify(existingUsers))

      setUser(mockUser)
      setProfile(mockProfile)
      localStorage.setItem('mockUser', JSON.stringify(mockUser))
      localStorage.setItem('mockProfile', JSON.stringify(mockProfile))
      return
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) throw error

    // Create profile if user was created
    if (data.user) {
      const { error: profileError } = await supabase
        .from('profiles')
        .insert([
          {
            id: data.user.id,
            email: data.user.email!,
            full_name: fullName || null,
            role: 'user',
          },
        ])

      if (profileError) {
        console.error('Error creating profile:', profileError)
      }
    }
  }

  const signIn = async (email: string, password: string) => {
    if (!hasSupabaseConfig) {
      // Mock authentication for demo
      // Check if user exists in localStorage
      const existingUsers = JSON.parse(localStorage.getItem('mockUsers') || '[]')
      const existingUser = existingUsers.find((u: any) => u.email === email)
      
      if (!existingUser) {
        throw new Error('User not found. Please sign up first.')
      }
      
      if (existingUser.password !== password) {
        throw new Error('Invalid password')
      }

      const mockUser = {
        id: existingUser.id,
        email: existingUser.email,
        created_at: existingUser.created_at,
        app_metadata: {},
        user_metadata: { full_name: existingUser.full_name },
        aud: 'authenticated',
        confirmation_sent_at: existingUser.created_at
      } as User

      const mockProfile = {
        id: existingUser.id,
        email: existingUser.email,
        full_name: existingUser.full_name,
        avatar_url: null,
        role: 'user' as const,
        created_at: existingUser.created_at,
        updated_at: new Date().toISOString()
      }

      setUser(mockUser)
      setProfile(mockProfile)
      localStorage.setItem('mockUser', JSON.stringify(mockUser))
      localStorage.setItem('mockProfile', JSON.stringify(mockProfile))
      return
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) throw error
  }

  const signOut = async () => {
    if (!hasSupabaseConfig) {
      // Mock sign out
      setUser(null)
      setProfile(null)
      localStorage.removeItem('mockUser')
      localStorage.removeItem('mockProfile')
      return
    }

    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }

  const updateProfile = async (updates: Partial<Profile>) => {
    if (!user) throw new Error('No user logged in')

    const { error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', user.id)

    if (error) throw error

    await fetchProfile(user.id)
  }

  const value = {
    user,
    profile,
    session,
    loading,
    signUp,
    signIn,
    signOut,
    updateProfile,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
