import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  Lightbulb, 
  MapPin, 
  Clock,
  Star,
  ChevronDown
} from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  suggestions?: string[];
  serviceRecommendations?: any[];
}

const predefinedSuggestions = [
  "I need urgent plumbing help",
  "Find me a reliable electrician",
  "Home cleaning service needed",
  "Car repair recommendations",
  "Looking for a painter"
];

const serviceRecommendations = [
  {
    id: 1,
    title: "Emergency Plumbing",
    provider: "Grace Wanjiku",
    rating: 4.8,
    distance: "1.2km away",
    available: "Available now",
    price: "KES 2,000/hour"
  },
  {
    id: 2,
    title: "Electrical Repair",
    provider: "Hassan Mwangi",
    rating: 4.9,
    distance: "2.3km away", 
    available: "Available in 30 mins",
    price: "KES 2,500/hour"
  }
];

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: "Hi! I'm your Fundi Concierge 🤖 I can help you find the perfect service provider, predict your home maintenance needs, or connect you with your community. What can I help you with today?",
      timestamp: new Date(),
      suggestions: predefinedSuggestions
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: generateAIResponse(content),
        timestamp: new Date(),
        serviceRecommendations: content.toLowerCase().includes('plumb') || content.toLowerCase().includes('electric') ? serviceRecommendations : undefined
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('plumb')) {
      return "I found 3 excellent plumbers near you! Grace Wanjiku is available right now and has amazing reviews for emergency repairs. Based on your location and the current weather patterns, I also notice it's a common time for pipe issues. Would you like me to book Grace for you?";
    }
    
    if (input.includes('electric')) {
      return "Perfect timing! Hassan Mwangi is one of our top-rated electricians and he's just 2.3km from you. I see from community posts that he recently completed a solar installation nearby with excellent results. Plus, he offers a 30-day guarantee. Shall I connect you?";
    }
    
    if (input.includes('clean')) {
      return "I've got just the person! Faith Akinyi specializes in deep cleaning and has a 4.9 rating. Interesting insight: based on community data, homes in your area typically need deep cleaning every 3-4 months. I can also set up a subscription plan to save you 20%. What do you think?";
    }
    
    return "That's a great question! Let me analyze your needs and find the perfect providers in your area. I'm checking availability, ratings, and community recommendations now... 🔍";
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
        >
          <MessageCircle className="h-6 w-6" />
          <div className="absolute -top-2 -right-2 bg-accent-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold animate-pulse">
            AI
          </div>
        </button>
      )}

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-50 animate-slide-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Fundi Concierge</h3>
                <p className="text-xs text-blue-100">AI-Powered Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs rounded-lg p-3 ${
                  message.type === 'user' 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-100 text-gray-900'
                }`}>
                  <p className="text-sm">{message.content}</p>
                  
                  {/* Suggestions */}
                  {message.suggestions && (
                    <div className="mt-3 space-y-2">
                      {message.suggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => handleSendMessage(suggestion)}
                          className="block w-full text-left text-xs bg-white/10 hover:bg-white/20 rounded p-2 transition-colors"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                  
                  {/* Service Recommendations */}
                  {message.serviceRecommendations && (
                    <div className="mt-3 space-y-2">
                      {message.serviceRecommendations.map((service) => (
                        <div key={service.id} className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-gray-900 text-sm">{service.title}</h4>
                            <div className="flex items-center space-x-1">
                              <Star className="h-3 w-3 text-yellow-400 fill-current" />
                              <span className="text-xs text-gray-600">{service.rating}</span>
                            </div>
                          </div>
                          <p className="text-xs text-primary-600 font-medium">{service.provider}</p>
                          <div className="flex items-center justify-between mt-2 text-xs text-gray-600">
                            <span>{service.distance}</span>
                            <span className="text-secondary-600">{service.available}</span>
                          </div>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs font-medium text-gray-900">{service.price}</span>
                            <button className="bg-primary-600 text-white px-3 py-1 rounded text-xs hover:bg-primary-700 transition-colors">
                              Book Now
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && inputValue.trim() && handleSendMessage(inputValue)}
                placeholder="Ask me anything..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                onClick={() => inputValue.trim() && handleSendMessage(inputValue)}
                disabled={!inputValue.trim()}
                className="bg-primary-600 text-white p-2 rounded-lg hover:bg-primary-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};