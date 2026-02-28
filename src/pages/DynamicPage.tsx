import React from 'react';
import { useParams } from 'react-router-dom';
import { useContent } from '../context/ContentContext';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function DynamicPage() {
  const { slug } = useParams<{ slug: string }>();
  const { content, loading } = useContent();

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-novarise-orange border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const page = content.pages?.find(p => p.slug === slug);

  if (!page) {
    return (
      <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center text-white">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-zinc-500 mb-8">Page not found</p>
        <a href="/" className="bg-novarise-orange px-6 py-3 rounded-xl font-bold">Go Home</a>
      </div>
    );
  }

  return (
    <div className="bg-zinc-950 min-h-screen text-white">
      <Header />
      <main className="pt-20">
        {page.blocks.map((block) => {
          switch (block.type) {
            case 'hero':
              return (
                <React.Fragment key={block.id}>
                  <Hero 
                    title={block.content.title}
                    subtitle={block.content.subtitle}
                    description={block.content.description}
                  />
                </React.Fragment>
              );
            case 'about':
              return (
                <React.Fragment key={block.id}>
                  <About 
                    title={block.content.title}
                    description={block.content.description}
                  />
                </React.Fragment>
              );
            case 'services':
              return <Services key={block.id} />;
            case 'image':
              return (
                <section key={block.id} className="py-20 px-6">
                  <div className="max-w-7xl mx-auto">
                    <img 
                      src={block.content.url} 
                      alt={block.content.caption} 
                      className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
                      referrerPolicy="no-referrer"
                    />
                    {block.content.caption && (
                      <p className="text-center mt-4 text-zinc-500 italic">{block.content.caption}</p>
                    )}
                  </div>
                </section>
              );
            default:
              return null;
          }
        })}
      </main>
      <Footer />
    </div>
  );
}
