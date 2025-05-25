import { useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigation } from '@react-navigation/native';

const AuthHandler = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Check existing session when component mounts
    const checkSession = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      
      if (error) {
        console.error('Error getting session:', error);
        navigation.navigate('SignIn');
        return;
      }
      
      if (session) {
        navigation.navigate('MainTabs');
      } else {
        navigation.navigate('SignIn');
      }
    };
    
    checkSession();
    
    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
        navigation.navigate('MainTabs');
      } else if (event === 'SIGNED_OUT') {
        navigation.navigate('SignIn');
      }
    });
    
    return () => subscription?.unsubscribe();
  }, [navigation]);

  return null;
};

export default AuthHandler;