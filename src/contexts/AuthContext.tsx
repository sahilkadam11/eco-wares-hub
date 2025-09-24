import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '@/types/product';
import { toast } from 'sonner';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('eco-mart-user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('eco-mart-user', JSON.stringify(user));
    } else {
      localStorage.removeItem('eco-mart-user');
    }
  }, [user]);

  const login = async (email: string, password: string) => {
    // Mock authentication - in production, this would call a backend API
    if (email && password) {
      const mockUser: User = {
        id: 1,
        name: email.split('@')[0],
        email: email,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`
      };
      setUser(mockUser);
      toast.success('Welcome back! 🌿');
    } else {
      toast.error('Invalid credentials');
      throw new Error('Invalid credentials');
    }
  };

  const register = async (name: string, email: string, password: string) => {
    // Mock registration - in production, this would call a backend API
    if (name && email && password) {
      const mockUser: User = {
        id: Date.now(),
        name: name,
        email: email,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`
      };
      setUser(mockUser);
      toast.success('Welcome to Eco-Mart! 🌱');
    } else {
      toast.error('Registration failed');
      throw new Error('Registration failed');
    }
  };

  const logout = () => {
    setUser(null);
    toast.success('See you soon! 👋');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};