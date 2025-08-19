import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  pincode: string;
  waterQualityIndex: string;
  referralCode?: string;
}

interface AuthError {
  message: string;
}

interface AuthContextType {
  user: User | null;
  session: any;
  signUp: (email: string, password: string, name: string, phone: string, pincode: string, waterQualityIndex: string, referralCode?: string) => Promise<{ error: AuthError | null }>;
  signIn: (emailOrPhone: string, password: string) => Promise<{ error: AuthError | null }>;
  signOut: () => Promise<void>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session in localStorage
    const savedUser = localStorage.getItem('mrom_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const signUp = async (
    email: string, 
    password: string, 
    name: string, 
    phone: string, 
    pincode: string, 
    waterQualityIndex: string, 
    referralCode?: string
  ) => {
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For now, just simulate successful signup
      // In a real app, you would make an API call to your backend here
      console.log('Sign up attempt:', { email, name, phone, pincode, waterQualityIndex, referralCode });
      
      const newUser = {
        id: Date.now().toString(),
        email,
        name,
        phone,
        pincode,
        waterQualityIndex,
        referralCode
      };
      
      setUser(newUser);
      localStorage.setItem('mrom_user', JSON.stringify(newUser));
      
      setIsLoading(false);
      return { error: null };
    } catch (error) {
      setIsLoading(false);
      return { 
        error: { 
          message: 'Signup failed. Please try again.' 
        } 
      };
    }
  };

  const signIn = async (emailOrPhone: string, password: string) => {
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For now, just simulate successful login for any email/phone and password
      // In a real app, you would validate credentials with your backend
      console.log('Sign in attempt:', { emailOrPhone });
      
      const authenticatedUser = {
        id: '1',
        email: emailOrPhone.includes('@') ? emailOrPhone : 'user@example.com',
        name: 'Demo User',
        phone: emailOrPhone.includes('@') ? '1234567890' : emailOrPhone,
        pincode: '110024',
        waterQualityIndex: 'Z1'
      };
      
      setUser(authenticatedUser);
      localStorage.setItem('mrom_user', JSON.stringify(authenticatedUser));
      
      setIsLoading(false);
      return { error: null };
    } catch (error) {
      setIsLoading(false);
      return { 
        error: { 
          message: 'Login failed. Please check your credentials and try again.' 
        } 
      };
    }
  };

  const signOut = async () => {
    setUser(null);
    localStorage.removeItem('mrom_user');
  };

  const value = {
    user,
    session: user ? { user } : null,
    signUp,
    signIn,
    signOut,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};