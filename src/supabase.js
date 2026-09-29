import { createClient } from '@supabase/supabase-js';

const envUrl = import.meta.env.VITE_SUPABASE_URL;
const envKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY;

const savedUrl = localStorage.getItem('supabase_url');
const savedKey = localStorage.getItem('supabase_anon_key');

const supabaseUrl = envUrl || savedUrl || '';
const supabaseAnonKey = envKey || savedKey || '';

// Only create Supabase client if valid URL and key are provided (avoiding 401 errors on Render when env vars are missing)
export const supabase = (supabaseUrl && supabaseAnonKey && !localStorage.getItem('iris_supabase_disabled'))
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;
