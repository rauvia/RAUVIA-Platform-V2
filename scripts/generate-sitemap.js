import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.resolve(__dirname, '../dist');
const publicPath = path.resolve(__dirname, '../public');

const SITE_URL = 'https://rauvia.com.mx';

// Standard public pages
const staticPages = [
  '/',
  '/nosotros',
  '/soluciones',
  '/aethryon',
  '/recursos'
];

async function fetchWordPressPosts() {
  // Assuming the blog is hosted under /blog or main domain, standard WP API
  // Using the live domain for posts if possible
  const wpApiUrl = process.env.WP_API_URL || `${SITE_URL}/blog/wp-json/wp/v2/posts?status=publish&per_page=100`;
  try {
    const response = await fetch(wpApiUrl);
    if (!response.ok) return [];
    const posts = await response.json();
    return posts.map(post => {
      return {
        url: `/recursos/${post.slug}`,
        lastmod: post.modified ? post.modified.split('T')[0] : null
      };
    });
  } catch (err) {
    console.error('Warning: Could not fetch WP posts for sitemap', err.message);
    return [];
  }
}

async function generateSitemap() {
  console.log('Generating sitemap...');
  const wpPosts = await fetchWordPressPosts();
  
  const today = new Date().toISOString().split('T')[0];

  const urls = [
    ...staticPages.map(url => ({ url, lastmod: today })),
    ...wpPosts
  ];

  let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  urls.forEach(({ url, lastmod }) => {
    sitemapXml += `  <url>\n`;
    sitemapXml += `    <loc>${SITE_URL}${url}</loc>\n`;
    if (lastmod) {
      sitemapXml += `    <lastmod>${lastmod}</lastmod>\n`;
    }
    sitemapXml += `  </url>\n`;
  });

  sitemapXml += `</urlset>`;

  // Write to both public and dist just in case it runs at different stages
  await fs.writeFile(path.join(publicPath, 'sitemap.xml'), sitemapXml);
  
  try {
    await fs.mkdir(distPath, { recursive: true });
    await fs.writeFile(path.join(distPath, 'sitemap.xml'), sitemapXml);
  } catch (e) {
    // Dist might not exist yet if run before build
  }

  console.log('Sitemap generated successfully.');
}

generateSitemap().catch(err => {
  console.error('Sitemap generation failed:', err);
  process.exit(1);
});
