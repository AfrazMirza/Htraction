import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-url-polyfill/auto';

const supabaseUrl = 'https://lrmbhnxqqbldkzkfwhqp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxybWJobnhxcWJsZGt6a2Z3aHFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxOTEwNjYsImV4cCI6MjA2MTc2NzA2Nn0.JBYXu7WYWJiNZOmh8ad-pIzsOMqRZqSlr1QNLPjty1o';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
    flowType: 'pkce', // Recommended for mobile apps
  },
});