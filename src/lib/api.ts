import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add response interceptor for better error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.error || error.message || 'An error occurred';
    throw new Error(message);
  }
);

export const auth = {
  login: async (email: string, password: string) => {
    const { data } = await api.post('/auth/login', { email, password });
    return data;
  },
  
  register: async (userData: {
    email: string;
    password: string;
    name: string;
    phone: string;
    department: string;
  }) => {
    const { data } = await api.post('/auth/register', userData);
    return data;
  },

  verifyOTP: async (userId: string, otp: string) => {
    const { data } = await api.post('/auth/verify-otp', { userId, otp });
    return data;
  },

  resendOTP: async (userId: string) => {
    const { data } = await api.post('/auth/resend-otp', { userId });
    return data;
  },
  
  logout: async () => {
    const { data } = await api.post('/auth/logout');
    return data;
  }
};