import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, User, Sparkles, Loader2, Bot, Trash2 } from 'lucide-react';
import OpenAI from 'openai';
import { useLanguage } from '../App';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const STORAGE_KEY = 'VITE_GEMINI_API_KEY';

const ChatBot: React.FC = () => {
  const { t, lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedHistory = localStorage.getItem(STORAGE_KEY);
    if (savedHistory) {
      try {
        const parsed = JSON.parse(savedHistory);
        if (Array.isArray(parsed)) setMessages(parsed);
      } catch (error) {
        console.error("Failed to parse chat history", error);
      }
    }
  }, []);

  useEffect(() => {
    if (messages.length > 0) localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isTyping]);

  const clearChat = () => {
    if (window.confirm(lang === 'ar' ? 'هل أنت متأكد من مسح المحادثة؟' : lang === 'zh' ? '您确定要清除聊天记录吗？' : 'Are you sure you want to clear the chat history?')) {
      setMessages([]);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const handleSend = async (text: string = input) => {
    if (!text.trim() || isTyping) return;

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    console.log("Is API Key defined?", !!apiKey);
    if (!apiKey) {
      console.error("API Key is missing! Check .env.local");
      alert("API Key is missing");
      return;
    }

    const userMsg: Message = { role: 'user', content: text };

    const updatedMessages = [...messages, userMsg];

    setMessages(updatedMessages);
    setInput('');
    setIsTyping(true);

    try {
      const openai = new OpenAI({
        baseURL: "https://openrouter.ai/api/v1",
        apiKey: apiKey,
        dangerouslyAllowBrowser: true
      });


      const projectsContext = t.projects.items.map(p =>
        `- ${p.title}: ${p.description}\n  Tech: ${p.tech.join(', ')}\n  Live Demo: ${p.link}\n  GitHub: ${p.github}`
      ).join('\n\n');

      const systemInstruction = `
        You are the virtual assistant of Eng. Afraa, a professional Front-End Developer. 
        Your goal is to provide detailed information about Afraa's skills, professional background, and specific projects.
        
        Information about Afraa:
        - Name: ${t.hero.name}
        - Title: ${t.hero.title}
        - Bio: ${t.hero.bio}
        - About: ${t.about.description}
        - Experience: 5+ years specializing in complex data-driven applications.
        - Core Skills: React.js, Next.js, TypeScript, Tailwind CSS, C# (.NET), SQL Server.
        - Contact: eng.afraa.saleh@gmail.com
        - Location: Latakia, Syria .

        Detailed Projects Information:
        ${projectsContext}
        
        Instructions:
        - Be friendly, professional, and enthusiastic about Afraa's work.
        - Answer in ${lang === 'ar' ? 'Arabic' : lang === 'zh' ? 'Chinese' : 'English'}.
        - When asked about projects, mention the technologies used and PROACTIVELY provide the GitHub or demo links.
        - Keep responses concise but highly informative.
        - Encourage visitors to reach out for business inquiries.
      `;


      const stream = await openai.chat.completions.create({
        model: "tngtech/deepseek-r1t2-chimera:free",
        messages: [
          { role: "system", content: systemInstruction },
          ...updatedMessages.map(m => ({ role: m.role, content: m.content }))
        ],
        stream: true,
      });

      let fullResponse = '';
      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

      for await (const chunk of stream) {
        const chunkText = chunk.choices[0]?.delta?.content || '';
        fullResponse += chunkText;
        setMessages(prev => {
          const newMsgs = [...prev];
          newMsgs[newMsgs.length - 1].content = fullResponse;
          return newMsgs;
        });
      }

    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: lang === 'ar' ? 'عذراً، حدث خطأ في النظام.' : 'Sorry, a system error occurred.'
      }]);
    } finally {
      setIsTyping(false);
    }
  };
  const suggestions = [t.chat.suggested1, t.chat.suggested2, t.chat.suggested3];

  return (
    <div className={`fixed bottom-6 z-[60] ${lang === 'ar' ? 'left-6' : 'right-6'}`}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className={`absolute bottom-20 ${lang === 'ar' ? 'left-0' : 'right-0'} w-[90vw] sm:w-[400px] h-[450px] bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col`}
          >
            {/* Header */}
            <div className="p-4 bg-pink-300 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                  >
                    <Sparkles size={20} />
                  </motion.div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-pink-200 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-sm leading-tight">{t.chat.title}</h3>
                  <p className="text-[10px] opacity-80 uppercase tracking-widest">{t.chat.online}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {messages.length > 0 && (
                  <button
                    onClick={clearChat}
                    className="hover:bg-white/10 p-1.5 rounded-lg transition-colors text-white/80 hover:text-white"
                    title={lang === 'ar' ? 'مسح المحادثة' : 'Clear chat'}
                  >
                    <Trash2 size={18} />
                  </button>
                )}
                <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-lg transition-colors">
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-6 bg-slate-50/50">
              {messages.length === 0 && (
                <div className="text-center py-8">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-16 h-16 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  >
                    <Bot size={32} />
                  </motion.div>
                  <p className="text-slate-600 font-medium px-4">{t.chat.welcome}</p>
                </div>
              )}

              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-end gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  {/* Avatar Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${msg.role === 'user' ? 'bg-slate-200 text-slate-600' : 'bg-pink-600 text-white shadow-lg shadow-pink-100'
                      }`}
                  >
                    {msg.role === 'user' ? <User size={14} /> : <Sparkles size={14} />}
                  </motion.div>

                  {/* Message Bubble */}
                  <div className={`max-w-[75%] p-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'user'
                    ? 'bg-pink-600 text-white rounded-br-none shadow-md shadow-pink-100'
                    : 'bg-white text-slate-800 shadow-sm border border-slate-100 rounded-tl-none'
                    }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {isTyping && messages[messages.length - 1]?.role !== 'assistant' && (
                <div className="flex items-end gap-2 flex-row">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-600 text-white shadow-lg shadow-pink-100 flex items-center justify-center"
                  >
                    <Sparkles size={14} className="animate-pulse" />
                  </motion.div>
                  <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 rounded-bl-none">
                    <Loader2 size={16} className="animate-spin text-pink-600" />
                  </div>
                </div>
              )}
            </div>

            {/* Suggestions */}
            {messages.length === 0 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {suggestions.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(s)}
                    className="text-[11px] bg-pink-50 text-pink-700 px-3 py-1.5 rounded-full hover:bg-pink-100 transition-colors border border-pink-100 font-medium"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 border-t border-slate-100 bg-white">
              <form
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t.chat.placeholder}
                  className="flex-1 bg-slate-100 border-none rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-pink-600 outline-none"
                />
                <button
                  type="submit"
                  disabled={isTyping || !input.trim()}
                  className="w-10 h-10 bg-pink-600 text-white rounded-xl flex items-center justify-center disabled:opacity-50 hover:bg-pink-700 transition-colors shadow-lg shadow-pink-100"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-pink-500 text-white rounded-full shadow-2xl shadow-pink-400 flex items-center justify-center transition-transform relative"
      >
        {isOpen ? <X size={28} /> : (
          <>
            <MessageCircle size={28} />
            <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-white rounded-full animate-ping"></span>
            <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-white rounded-full"></span>
          </>
        )}
      </motion.button>
    </div>
  );
};

export default ChatBot;
