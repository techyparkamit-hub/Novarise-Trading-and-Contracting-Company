import React, { useState } from 'react';
import { motion, Reorder } from 'motion/react';
import { Plus, Trash2, GripVertical, Settings, Eye, Code, Layout, Type, Image as ImageIcon, Briefcase, Mail } from 'lucide-react';

interface Block {
  id: string;
  type: string;
  content: any;
}

interface Page {
  id: string;
  slug: string;
  title: string;
  blocks: Block[];
}

interface PageBuilderProps {
  pages: Page[];
  onSave: (pages: Page[]) => void;
}

const BLOCK_TYPES = [
  { type: 'hero', icon: Layout, label: 'Hero Section' },
  { type: 'about', icon: Type, label: 'About Section' },
  { type: 'services', icon: Briefcase, label: 'Services' },
  { type: 'contact', icon: Mail, label: 'Contact Form' },
  { type: 'image', icon: ImageIcon, label: 'Image Block' },
];

export default function PageBuilder({ pages, onSave }: PageBuilderProps) {
  const [activePageId, setActivePageId] = useState<string | null>(pages[0]?.id || null);
  const [isAddingPage, setIsAddingPage] = useState(false);
  const [newPageTitle, setNewPageTitle] = useState('');

  const activePage = pages.find(p => p.id === activePageId);

  const handleAddPage = () => {
    if (!newPageTitle.trim()) return;
    const newPage: Page = {
      id: Math.random().toString(36).substr(2, 9),
      slug: newPageTitle.toLowerCase().replace(/\s+/g, '-'),
      title: newPageTitle,
      blocks: []
    };
    onSave([...pages, newPage]);
    setActivePageId(newPage.id);
    setNewPageTitle('');
    setIsAddingPage(false);
  };

  const handleDeletePage = (id: string) => {
    if (confirm('Are you sure you want to delete this page?')) {
      const updated = pages.filter(p => p.id !== id);
      onSave(updated);
      if (activePageId === id) setActivePageId(updated[0]?.id || null);
    }
  };

  const handleAddBlock = (type: string) => {
    if (!activePage) return;
    const newBlock: Block = {
      id: Math.random().toString(36).substr(2, 9),
      type,
      content: getDefaultContent(type)
    };
    const updatedPages = pages.map(p => 
      p.id === activePageId ? { ...p, blocks: [...p.blocks, newBlock] } : p
    );
    onSave(updatedPages);
  };

  const handleUpdateBlock = (blockId: string, content: any) => {
    if (!activePage) return;
    const updatedPages = pages.map(p => 
      p.id === activePageId ? {
        ...p,
        blocks: p.blocks.map(b => b.id === blockId ? { ...b, content } : b)
      } : p
    );
    onSave(updatedPages);
  };

  const handleDeleteBlock = (blockId: string) => {
    if (!activePage) return;
    const updatedPages = pages.map(p => 
      p.id === activePageId ? {
        ...p,
        blocks: p.blocks.filter(b => b.id !== blockId)
      } : p
    );
    onSave(updatedPages);
  };

  const handleReorderBlocks = (newBlocks: Block[]) => {
    if (!activePage) return;
    const updatedPages = pages.map(p => 
      p.id === activePageId ? { ...p, blocks: newBlocks } : p
    );
    onSave(updatedPages);
  };

  const getDefaultContent = (type: string) => {
    switch (type) {
      case 'hero': return { title: 'New Hero', subtitle: 'Subtitle', description: 'Description here' };
      case 'about': return { title: 'About Us', description: 'Our story...' };
      case 'services': return { title: 'Our Services', items: [] };
      case 'contact': return { title: 'Contact Us', email: 'contact@example.com' };
      case 'image': return { url: 'https://picsum.photos/seed/page/1200/600', caption: 'Image caption' };
      default: return {};
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Page List Sidebar */}
      <div className="lg:col-span-1 space-y-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-zinc-400 uppercase text-xs tracking-widest">Pages</h3>
          <button 
            onClick={() => setIsAddingPage(true)}
            className="p-1 hover:bg-zinc-800 rounded-lg text-novarise-orange transition-colors"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {isAddingPage && (
          <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 mb-4">
            <input 
              autoFocus
              type="text"
              placeholder="Page Title"
              value={newPageTitle}
              onChange={(e) => setNewPageTitle(e.target.value)}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm mb-2 focus:outline-none focus:border-novarise-orange"
            />
            <div className="flex gap-2">
              <button 
                onClick={handleAddPage}
                className="flex-1 bg-novarise-orange text-white text-xs py-2 rounded-lg font-bold"
              >
                Create
              </button>
              <button 
                onClick={() => setIsAddingPage(false)}
                className="flex-1 bg-zinc-800 text-zinc-400 text-xs py-2 rounded-lg font-bold"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        <div className="space-y-2">
          {pages.map(page => (
            <div 
              key={page.id}
              className={`group flex items-center justify-between p-3 rounded-xl transition-all cursor-pointer ${activePageId === page.id ? 'bg-novarise-orange text-white' : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800'}`}
              onClick={() => setActivePageId(page.id)}
            >
              <div className="flex items-center gap-3">
                <Layout className="w-4 h-4" />
                <span className="font-medium text-sm">{page.title}</span>
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); handleDeletePage(page.id); }}
                className={`opacity-0 group-hover:opacity-100 p-1 hover:bg-black/20 rounded transition-all ${activePageId === page.id ? 'text-white' : 'text-zinc-600'}`}
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Block Editor */}
      <div className="lg:col-span-3 space-y-8">
        {activePage ? (
          <>
            <div className="flex items-center justify-between bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
              <div>
                <h2 className="text-2xl font-bold">{activePage.title}</h2>
                <p className="text-zinc-500 text-sm">Slug: /{activePage.slug}</p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm font-medium transition-colors">
                  <Settings className="w-4 h-4" />
                  Settings
                </button>
                <a 
                  href={`/p/${activePage.slug}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm font-medium transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  Preview
                </a>
              </div>
            </div>

            <Reorder.Group axis="y" values={activePage.blocks} onReorder={handleReorderBlocks} className="space-y-4">
              {activePage.blocks.map(block => (
                <Reorder.Item 
                  key={block.id} 
                  value={block}
                  className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden group"
                >
                  <div className="flex items-center justify-between p-4 bg-zinc-800/50 border-b border-zinc-800">
                    <div className="flex items-center gap-4">
                      <div className="cursor-grab active:cursor-grabbing text-zinc-600 hover:text-zinc-400">
                        <GripVertical className="w-5 h-5" />
                      </div>
                      <div className="flex items-center gap-2">
                        {React.createElement(BLOCK_TYPES.find(t => t.type === block.type)?.icon || Layout, { className: "w-4 h-4 text-novarise-orange" })}
                        <span className="text-sm font-bold uppercase tracking-wider text-zinc-400">
                          {BLOCK_TYPES.find(t => t.type === block.type)?.label || block.type}
                        </span>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleDeleteBlock(block.id)}
                      className="p-2 text-zinc-600 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="p-6 space-y-4">
                    {block.type === 'hero' && (
                      <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2">
                          <label className="text-xs font-bold text-zinc-600 uppercase mb-1 block">Title</label>
                          <input 
                            type="text" 
                            value={block.content.title}
                            onChange={(e) => handleUpdateBlock(block.id, { ...block.content, title: e.target.value })}
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 focus:outline-none focus:border-novarise-orange"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-bold text-zinc-600 uppercase mb-1 block">Subtitle</label>
                          <input 
                            type="text" 
                            value={block.content.subtitle}
                            onChange={(e) => handleUpdateBlock(block.id, { ...block.content, subtitle: e.target.value })}
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 focus:outline-none focus:border-novarise-orange"
                          />
                        </div>
                        <div className="col-span-2">
                          <label className="text-xs font-bold text-zinc-600 uppercase mb-1 block">Description</label>
                          <textarea 
                            value={block.content.description}
                            onChange={(e) => handleUpdateBlock(block.id, { ...block.content, description: e.target.value })}
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 focus:outline-none focus:border-novarise-orange resize-none"
                            rows={3}
                          />
                        </div>
                      </div>
                    )}

                    {block.type === 'about' && (
                      <div className="space-y-4">
                        <div>
                          <label className="text-xs font-bold text-zinc-600 uppercase mb-1 block">Title</label>
                          <input 
                            type="text" 
                            value={block.content.title}
                            onChange={(e) => handleUpdateBlock(block.id, { ...block.content, title: e.target.value })}
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 focus:outline-none focus:border-novarise-orange"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-bold text-zinc-600 uppercase mb-1 block">Description</label>
                          <textarea 
                            value={block.content.description}
                            onChange={(e) => handleUpdateBlock(block.id, { ...block.content, description: e.target.value })}
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 focus:outline-none focus:border-novarise-orange resize-none"
                            rows={4}
                          />
                        </div>
                      </div>
                    )}

                    {block.type === 'image' && (
                      <div className="space-y-4">
                        <div>
                          <label className="text-xs font-bold text-zinc-600 uppercase mb-1 block">Image URL</label>
                          <input 
                            type="text" 
                            value={block.content.url}
                            onChange={(e) => handleUpdateBlock(block.id, { ...block.content, url: e.target.value })}
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 focus:outline-none focus:border-novarise-orange"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-bold text-zinc-600 uppercase mb-1 block">Caption</label>
                          <input 
                            type="text" 
                            value={block.content.caption}
                            onChange={(e) => handleUpdateBlock(block.id, { ...block.content, caption: e.target.value })}
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 focus:outline-none focus:border-novarise-orange"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </Reorder.Item>
              ))}
            </Reorder.Group>

            <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 border-dashed">
              <h3 className="text-center text-zinc-500 font-medium mb-6">Add a new block to this page</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {BLOCK_TYPES.map(type => (
                  <button 
                    key={type.type}
                    onClick={() => handleAddBlock(type.type)}
                    className="flex flex-col items-center gap-3 p-4 bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-all group"
                  >
                    <div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center text-zinc-400 group-hover:text-novarise-orange transition-colors">
                      <type.icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-zinc-400">{type.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="h-[60vh] flex flex-col items-center justify-center bg-zinc-900 rounded-2xl border border-zinc-800 border-dashed text-zinc-500">
            <Layout className="w-12 h-12 mb-4 opacity-20" />
            <p className="font-medium">Select a page to start building</p>
            <button 
              onClick={() => setIsAddingPage(true)}
              className="mt-4 text-novarise-orange font-bold hover:underline"
            >
              Or create a new one
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
