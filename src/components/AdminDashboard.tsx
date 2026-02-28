import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Save, Layout, Type, Image as ImageIcon, Sparkles, ArrowLeft, Loader2, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '../context/ContentContext';
import { GoogleGenAI } from "@google/genai";
import PageBuilder from './PageBuilder';

export default function AdminDashboard() {
  const { content, updateContent } = useContent();
  const [localContent, setLocalContent] = useState(content);
  const [isSaving, setIsSaving] = useState(false);
  const [aiPrompt, setAiPrompt] = useState('');
  const [isAiProcessing, setIsAiProcessing] = useState(false);
  const [activeTab, setActiveTab] = useState<'general' | 'pages'>('general');

  const handleSave = async () => {
    setIsSaving(true);
    await updateContent(localContent);
    setIsSaving(false);
  };

  const handleAiAssist = async () => {
    if (!aiPrompt.trim()) return;
    setIsAiProcessing(true);
    
    try {
      const ai = new GoogleGenAI({ apiKey: (process.env.GEMINI_API_KEY as string) });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `You are a professional copywriter and web designer. 
        Current site content: ${JSON.stringify(localContent)}
        User request: ${aiPrompt}
        
        Return ONLY the updated JSON content for the entire site. Do not include any other text.`,
        config: {
          responseMimeType: "application/json"
        }
      });

      const updatedJson = JSON.parse(response.text || '{}');
      setLocalContent(updatedJson);
      setAiPrompt('');
    } catch (err) {
      console.error('AI Assist failed:', err);
      alert('AI Assistant failed to process your request. Please try again.');
    } finally {
      setIsAiProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-zinc-900 border-r border-zinc-800 p-6">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 bg-novarise-orange rounded-xl flex items-center justify-center font-bold text-xl">
            R
          </div>
          <span className="font-bold text-xl tracking-tight">Admin Panel</span>
        </div>

        <nav className="space-y-2">
          <button 
            onClick={() => setActiveTab('general')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${activeTab === 'general' ? 'bg-novarise-orange text-white' : 'text-zinc-400 hover:bg-zinc-800'}`}
          >
            <Layout className="w-5 h-5" />
            General Content
          </button>
          <button 
            onClick={() => setActiveTab('pages')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${activeTab === 'pages' ? 'bg-novarise-orange text-white' : 'text-zinc-400 hover:bg-zinc-800'}`}
          >
            <Layers className="w-5 h-5" />
            Page Builder
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:bg-zinc-800 transition-colors font-medium">
            <ImageIcon className="w-5 h-5" />
            Media Assets
          </button>
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <Link to="/" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Website
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-12">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              {activeTab === 'general' ? 'Site Content' : 'Visual Page Builder'}
            </h1>
            <p className="text-zinc-500">
              {activeTab === 'general' ? 'Manage your website\'s text and core information.' : 'Create and manage custom pages for your website.'}
            </p>
          </div>
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className="flex items-center gap-2 bg-novarise-orange hover:bg-novarise-orange/90 disabled:opacity-50 px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-novarise-orange/20"
          >
            {isSaving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
            {isSaving ? 'Saving...' : 'Save Changes'}
          </button>
        </header>

        {activeTab === 'general' ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Editor Section */}
            <div className="lg:col-span-2 space-y-8">
              <section className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Layout className="w-5 h-5 text-novarise-orange" />
                  Hero Section
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-500 mb-2 uppercase tracking-wider">Subtitle</label>
                    <input 
                      type="text" 
                      value={localContent.hero.subtitle}
                      onChange={(e) => setLocalContent({...localContent, hero: {...localContent.hero, subtitle: e.target.value}})}
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-novarise-orange transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-500 mb-2 uppercase tracking-wider">Main Title</label>
                    <input 
                      type="text" 
                      value={localContent.hero.title}
                      onChange={(e) => setLocalContent({...localContent, hero: {...localContent.hero, title: e.target.value}})}
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-novarise-orange transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-500 mb-2 uppercase tracking-wider">Description</label>
                    <textarea 
                      rows={4}
                      value={localContent.hero.description}
                      onChange={(e) => setLocalContent({...localContent, hero: {...localContent.hero, description: e.target.value}})}
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-novarise-orange transition-colors resize-none"
                    />
                  </div>
                </div>
              </section>

              <section className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Layout className="w-5 h-5 text-novarise-orange" />
                  About Section
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-500 mb-2 uppercase tracking-wider">Title</label>
                    <input 
                      type="text" 
                      value={localContent.about.title}
                      onChange={(e) => setLocalContent({...localContent, about: {...localContent.about, title: e.target.value}})}
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-novarise-orange transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-500 mb-2 uppercase tracking-wider">Description</label>
                    <textarea 
                      rows={4}
                      value={localContent.about.description}
                      onChange={(e) => setLocalContent({...localContent, about: {...localContent.about, description: e.target.value}})}
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-novarise-orange transition-colors resize-none"
                    />
                  </div>
                </div>
              </section>
            </div>

            {/* AI Assistant Section */}
            <div className="space-y-8">
              <section className="bg-novarise-blue rounded-2xl p-8 border border-white/10 relative overflow-hidden group">
                <div className="absolute -right-12 -top-12 w-48 h-48 bg-novarise-orange/20 rounded-full blur-3xl group-hover:bg-novarise-orange/30 transition-all duration-700" />
                
                <div className="relative z-10">
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-novarise-orange" />
                    Smart AI Assistant
                  </h2>
                  <p className="text-zinc-300 text-sm mb-6">
                    Describe the changes you want to make (e.g., "Make the hero section more professional" or "Rewrite the about description to focus on sustainability").
                  </p>
                  
                  <textarea 
                    rows={4}
                    value={aiPrompt}
                    onChange={(e) => setAiPrompt(e.target.value)}
                    placeholder="Tell AI what to change..."
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-novarise-orange transition-colors placeholder:text-white/30 mb-4 resize-none"
                  />
                  
                  <button 
                    onClick={handleAiAssist}
                    disabled={isAiProcessing || !aiPrompt.trim()}
                    className="w-full flex items-center justify-center gap-2 bg-white text-novarise-blue hover:bg-novarise-orange hover:text-white disabled:opacity-50 py-3 rounded-xl font-bold transition-all"
                  >
                    {isAiProcessing ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
                    {isAiProcessing ? 'Processing...' : 'Apply AI Suggestions'}
                  </button>
                </div>
              </section>

              <section className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
                <h3 className="font-bold mb-4">Quick Tips</h3>
                <ul className="space-y-3 text-sm text-zinc-500">
                  <li className="flex gap-2">
                    <span className="text-novarise-orange">•</span>
                    Changes are saved instantly to the database.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-novarise-orange">•</span>
                    Use the AI Assistant for creative copywriting.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-novarise-orange">•</span>
                    Preview changes on the site before publishing.
                  </li>
                </ul>
              </section>
            </div>
          </div>
        ) : (
          <PageBuilder 
            pages={localContent.pages || []} 
            onSave={(updatedPages) => setLocalContent({ ...localContent, pages: updatedPages })} 
          />
        )}
      </div>
    </div>
  );
}
