import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface Message {
  id: string;
  content: string;
  sender: {
    name: string;
    avatar: string;
  };
  timestamp: Date;
}

interface ChatState {
  messages: Message[];
  isOpen: boolean;
}

interface ChatActions {
  addMessage: (message: Message) => void;
  toggleChat: () => void;
}

export const useChatStore = create<ChatState & ChatActions>()(
  persist(
    (set) => ({
      messages: [
        {
          id: '1',
          content: 'Hey everyone! Anyone working on an AI project?',
          sender: {
            name: 'Emily Rodriguez',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
          },
          timestamp: new Date(Date.now() - 1000 * 60 * 5)
        },
        {
          id: '2',
          content: "Yes! I'm developing an AI study assistant. Would love to collaborate!",
          sender: {
            name: 'Sarah Chen',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
          },
          timestamp: new Date(Date.now() - 1000 * 60 * 2)
        }
      ],
      isOpen: false,
      addMessage: (message) =>
        set((state) => ({
          messages: [...state.messages, message]
        })),
      toggleChat: () =>
        set((state) => ({
          isOpen: !state.isOpen
        }))
    }),
    {
      name: 'chat-storage',
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        messages: state.messages,
        isOpen: state.isOpen
      })
    }
  )
);