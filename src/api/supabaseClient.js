// src/api/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL ||
  import.meta.env.NEXT_PUBLIC_SUPABASE_URL

const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    'Supabase URL or anon key is missing. Set VITE_SUPABASE_URL/VITE_SUPABASE_ANON_KEY or ensure the Vercel integration env vars are present.'
  )
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
