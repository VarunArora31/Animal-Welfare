export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          role: 'user' | 'ngo_volunteer' | 'admin'
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          role?: 'user' | 'ngo_volunteer' | 'admin'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          role?: 'user' | 'ngo_volunteer' | 'admin'
          created_at?: string
          updated_at?: string
        }
      }
      ngos: {
        Row: {
          id: string
          name: string
          description: string | null
          address: string
          latitude: number
          longitude: number
          phone: string | null
          email: string | null
          website: string | null
          verified: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          address: string
          latitude: number
          longitude: number
          phone?: string | null
          email?: string | null
          website?: string | null
          verified?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          address?: string
          latitude?: number
          longitude?: number
          phone?: string | null
          email?: string | null
          website?: string | null
          verified?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      veterinarians: {
        Row: {
          id: string
          name: string
          specialization: string | null
          address: string
          latitude: number
          longitude: number
          phone: string | null
          email: string | null
          available_24_7: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          specialization?: string | null
          address: string
          latitude: number
          longitude: number
          phone?: string | null
          email?: string | null
          available_24_7?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          specialization?: string | null
          address?: string
          latitude?: number
          longitude?: number
          phone?: string | null
          email?: string | null
          available_24_7?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      donations: {
        Row: {
          id: string
          user_id: string
          amount: number
          currency: string
          payment_method: string
          payment_status: 'pending' | 'completed' | 'failed'
          ngo_id: string | null
          message: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          amount: number
          currency?: string
          payment_method: string
          payment_status?: 'pending' | 'completed' | 'failed'
          ngo_id?: string | null
          message?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          amount?: number
          currency?: string
          payment_method?: string
          payment_status?: 'pending' | 'completed' | 'failed'
          ngo_id?: string | null
          message?: string | null
          created_at?: string
        }
      }
    }
  }
}
