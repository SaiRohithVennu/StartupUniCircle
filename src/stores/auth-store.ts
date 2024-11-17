import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { auth } from '@/lib/api';

interface User {
  id: string;
  name: string;
  email: string;
  department: string;
  isPhoneVerified: boolean;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (userData: {
    email: string;
    password: string;
    name: string;
    phone: string;
    department: string;
  }) => Promise<{ userId: string }>;
  verifyOTP: (userId: string, otp: string) => Promise<void>;
  resendOTP: (userId: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()((set) => ({
  user: null,
  isAuthenticated: false,

  login: async (email: string, password: string) => {
    try {
      const response = await auth.login(email, password);
      
      if (response.userId) {
        return { userId: response.userId };
      }

      set({ user: response.user, isAuthenticated: true });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Login failed';
      throw new Error(message);
    }
  },

  signup: async (userData) => {
    try {
      const response = await auth.register(userData);
      return { userId: response.userId };
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Registration failed';
      throw new Error(message);
    }
  },

  verifyOTP: async (userId: string, otp: string) => {
    try {
      const response = await auth.verifyOTP(userId, otp);
      set({ user: response.user, isAuthenticated: true });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'OTP verification failed';
      throw new Error(message);
    }
  },

  resendOTP: async (userId: string) => {
    try {
      await auth.resendOTP(userId);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to resend OTP';
      throw new Error(message);
    }
  },

  logout: async () => {
    try {
      await auth.logout();
    } finally {
      set({ user: null, isAuthenticated: false });
    }
  }
}));