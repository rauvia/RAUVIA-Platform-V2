import { WP_CONFIG } from '../config/wordpress';

export interface WPPost {
  id: number;
  date: string;
  modified: string;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  _embedded?: {
    author?: Array<{
      name: string;
      link: string;
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
      taxonomy: string;
    }>>;
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

export async function getPosts(): Promise<WPPost[]> {
  try {
    const proxyRes = await fetch('/api/wp/posts');
    if (proxyRes.ok) {
      const data = await proxyRes.json();
      if (Array.isArray(data) && data.length > 0) {
        return data;
      }
    }
  } catch (e) {
    // Proxy fetch failed, fall back
  }

  try {
    const response = await fetch(`${WP_CONFIG.endpoints.posts}?_embed&status=publish`);
    if (!response.ok) throw new Error('Failed to fetch posts');
    return await response.json();
  } catch (error) {
    console.error('Error fetching WP posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  try {
    const proxyRes = await fetch(`/api/wp/posts?slug=${encodeURIComponent(slug)}`);
    if (proxyRes.ok) {
      const posts = await proxyRes.json();
      if (Array.isArray(posts) && posts.length > 0) {
        return posts[0];
      }
    }
  } catch (e) {
    // Proxy fetch failed, fall back
  }

  try {
    const response = await fetch(`${WP_CONFIG.endpoints.posts}?slug=${slug}&_embed&status=publish`);
    if (!response.ok) throw new Error('Failed to fetch post');
    const posts = await response.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error(`Error fetching WP post ${slug}:`, error);
    return null;
  }
}
