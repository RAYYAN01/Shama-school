
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: 'Hello! I am your SVS AI Assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: [...messages.map(m => ({ role: m.role === 'user' ? 'user' : 'model', parts: [{ text: m.text }] })), { role: 'user', parts: [{ text: userMessage }] }],
        config: {
          systemInstruction: "You are the helpful AI assistant for Shama Vidya Shalaa (SVS), a school in Bengaluru founded in 1968. You provide friendly and professional information about admissions, academics (State Board), and the school's calm earthy atmosphere. Keep responses concise and encouraging.",
        },
      });

      setMessages(prev => [...prev, { role: 'model', text: response.text || "I'm sorry, I couldn't process that. Please try again." }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having a little trouble connecting. Please try again in a moment." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Bubble */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-[#3e3a8f] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform relative group"
        >
          <i className="fa-solid fa-robot text-2xl"></i>
          <span className="absolute -top-12 right-0 bg-white text-[#3e3a8f] px-3 py-1 rounded-lg text-xs font-bold shadow-md border border-yellow-100 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Ask SVS Assistant
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 md:w-96 bg-white rounded-[2.5rem] shadow-2xl border border-yellow-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-[#3e3a8f] p-4 text-white flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-xl p-1">
                <img src="logo-1.png" alt="SVS" className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="font-bold text-sm">SVS Assistant</p>
                <p className="text-[10px] text-emerald-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-1.5 animate-pulse"></span>
                  Online
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div 
            ref={chatRef}
            className="h-96 overflow-y-auto p-4 bg-[#fefce8]/30 space-y-4 scroll-smooth"
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm font-medium shadow-sm ${
                  msg.role === 'user' 
                  ? 'bg-[#3e3a8f] text-white rounded-tr-none' 
                  : 'bg-white text-stone-700 border border-yellow-50 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none shadow-sm border border-yellow-50">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-stone-300 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-stone-300 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-2 h-2 bg-stone-300 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-yellow-50 bg-white">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="flex-grow px-5 py-4 rounded-2xl bg-stone-50 border border-transparent text-stone-700 font-bold placeholder:text-stone-300 focus:outline-none focus:bg-white focus:ring-4 focus:ring-[#3e3a8f]/5 focus:border-[#3e3a8f] transition-all text-sm"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="w-14 h-14 bg-[#3e3a8f] text-white rounded-2xl flex items-center justify-center hover:bg-[#2d2a6a] transition-all disabled:opacity-50 shadow-lg active:scale-95"
              >
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatbot;
