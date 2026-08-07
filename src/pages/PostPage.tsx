import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import { getPostBySlug, WPPost } from '../lib/wp';
import FadeInUp from '../components/FadeInUp';
import Footer from '../components/Footer';

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<WPPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      getPostBySlug(slug).then(data => {
        setPost(data);
        setLoading(false);
      });
    }
  }, [slug]);

  if (loading) {
    return (
      <section className="pt-32 pb-24 px-4 bg-rauvia-bg min-h-screen">
        <div className="max-w-3xl mx-auto animate-pulse">
          <div className="h-8 bg-rauvia-card w-1/4 rounded mb-8"></div>
          <div className="h-12 bg-rauvia-card w-full rounded mb-6"></div>
          <div className="h-4 bg-rauvia-card w-1/3 rounded mb-12"></div>
          <div className="space-y-4">
            <div className="h-4 bg-rauvia-card w-full rounded"></div>
            <div className="h-4 bg-rauvia-card w-full rounded"></div>
            <div className="h-4 bg-rauvia-card w-5/6 rounded"></div>
          </div>
        </div>
      </section>
    );
  }

  if (!post) {
    return (
      <section className="pt-32 pb-24 px-4 bg-rauvia-bg min-h-screen">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-display text-rauvia-text mb-6">Artículo no encontrado</h1>
          <p className="text-rauvia-gray mb-8">El recurso que buscas no existe o ha sido movido.</p>
          <Link to="/recursos" className="inline-flex items-center gap-2 text-rauvia-accent hover:text-rauvia-accent/80 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a recursos</span>
          </Link>
        </div>
      </section>
    );
  }

  const cleanExcerpt = post.excerpt.rendered.replace(/<[^>]*>?/gm, '').trim();
  const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const authorName = post._embedded?.author?.[0]?.name || 'Raúl Morales';
  const authorUrl = "https://rauvia.com.mx/nosotros";
  const postUrl = `https://rauvia.com.mx/recursos/${post.slug}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${postUrl}/#webpage`
    },
    "headline": post.title.rendered.replace(/<[^>]*>?/gm, ''),
    "description": cleanExcerpt,
    "image": featuredMedia || "https://rauvia.com.mx/media/article-cover.jpg",
    "author": {
      "@type": "Person",
      "name": authorName,
      "url": authorUrl
    },
    "publisher": {
      "@id": "https://rauvia.com.mx/#organization"
    },
    "datePublished": post.date,
    "dateModified": post.modified
  };

  return (
    <>
      <SEO 
        title={`${post.title.rendered.replace(/<[^>]*>?/gm, '')} | RAUVIA`}
        description={cleanExcerpt}
        canonicalUrl={postUrl}
      />
      <JsonLd data={structuredData} />

      <article className="pt-32 pb-24 px-4 bg-rauvia-bg min-h-screen">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <Link to="/recursos" className="inline-flex items-center gap-2 text-rauvia-gray hover:text-rauvia-accent transition-colors mb-8 text-sm">
              <ArrowLeft className="w-4 h-4" />
              <span>Todos los recursos</span>
            </Link>

            <h1 
              className="text-4xl md:text-5xl font-display text-rauvia-text mb-6 leading-tight"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            
            <div className="flex items-center gap-4 text-sm text-rauvia-gray mb-12 pb-8 border-b border-rauvia-border/50">
              <span className="font-medium">{authorName}</span>
              <span>•</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
            </div>
          </FadeInUp>

          {featuredMedia && (
            <FadeInUp delay={0.1}>
              <div className="w-full aspect-video rounded-xl overflow-hidden mb-12 bg-rauvia-card">
                <img 
                  src={featuredMedia} 
                  alt={post.title.rendered.replace(/<[^>]*>?/gm, '')} 
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeInUp>
          )}

          <FadeInUp delay={0.2}>
            <div 
              className="prose prose-rauvia max-w-none prose-img:rounded-lg prose-a:text-rauvia-accent hover:prose-a:text-rauvia-accent/80 prose-headings:font-display prose-headings:font-normal prose-h2:text-3xl prose-h3:text-2xl prose-p:text-rauvia-gray prose-p:leading-relaxed prose-strong:text-rauvia-text prose-li:text-rauvia-gray"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </FadeInUp>
        </div>
      </article>

      <Footer />
    </>
  );
}
