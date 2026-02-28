import React, { createContext, useContext, useState, useEffect } from 'react';

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

interface SiteContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  about: {
    title: string;
    description: string;
  };
  pages: Page[];
}

const defaultContent: SiteContent = {
  hero: {
    title: "NOVARISE",
    subtitle: "Trading and Contracting Company",
    description: "A leading force in Saudi Arabia's industrial landscape, delivering excellence across construction, power, and specialized trading for over a decade."
  },
  about: {
    title: "A Decade of Excellence in the Kingdom",
    description: "Founded on the principles of reliability and innovation, Novarise Trading and Contracting Company has grown from a specialized trading firm into a multi-disciplinary industrial powerhouse."
  },
  pages: []
};

interface ContentContextType {
  content: SiteContent;
  updateContent: (newContent: SiteContent) => Promise<void>;
  loading: boolean;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => {
        if (data && Object.keys(data).length > 0) {
          setContent(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load content:', err);
        setLoading(false);
      });
  }, []);

  const updateContent = async (newContent: SiteContent) => {
    try {
      const response = await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newContent),
      });
      if (response.ok) {
        setContent(newContent);
      }
    } catch (err) {
      console.error('Failed to update content:', err);
    }
  };

  return (
    <ContentContext.Provider value={{ content, updateContent, loading }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
}
