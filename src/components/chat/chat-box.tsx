import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Send, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useChatStore } from '@/stores/chat-store';
import { Avatar } from '@/components/ui/avatar';

export function ChatBox() {
  const [message, setMessage] = useState('');
  const { messages, addMessage, isOpen, toggleChat } = useChatStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      addMessage({
        id: Date.now().toString(),
        content: message,
        sender: {
          name: 'Sarah Chen',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
        },
        timestamp: new Date()
      });
      setMessage('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-lg flex flex-col max-h-[500px] border border-gray-200 z-50">
      <div className="flex items-center justify-between p-3 border-b border-gray-200">
        <h3 className="font-semibold text-gray-900">Community Chat</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleChat}
          className="hover:bg-gray-100 p-1 h-auto"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className="flex items-start space-x-3">
            <Avatar src={msg.sender.avatar} alt={msg.sender.name} size="sm" />
            <div className="flex-1">
              <div className="flex items-baseline space-x-2">
                <span className="font-medium text-sm text-gray-900">
                  {msg.sender.name}
                </span>
                <span className="text-xs text-gray-500">
                  {formatDistanceToNow(new Date(msg.timestamp), { addSuffix: true })}
                </span>
              </div>
              <p className="text-gray-700 text-sm mt-1">{msg.content}</p>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 min-w-0 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <Button type="submit" size="sm" className="shrink-0">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
}