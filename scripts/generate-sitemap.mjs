// Regenerates public/sitemap.xml from src/data/blog.ts so the sitemap
// never gets out of sync when articles are added, renamed, or removed.
//
// Usage: node scripts/generate-sitemap.mjs
// Recommended: run automatically before each build (see package.json "prebuild").
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_URL = 'https://www.asukacosmetics.cl';

const blogSource = readFileSync(join(__dirname, '../src/data/blog.ts'), 'utf-8');

// Extract slug + date pairs from the blogPosts array via simple regex parsing
// (avoids needing a TS/ESM loader just to read static data).
const postBlocks = blogSource.split(/\{\s*\r?\n\s*id:/).slice(1);
const posts = postBlocks.map(block => {
  const slugMatch = block.match(/slug:\s*'([^']+)'/);
  const dateMatch = block.match(/date:\s*'([^']+)'/);
  return {
    slug: slugMatch ? slugMatch[1] : null,
    date: dateMatch ? dateMatch[1] : null,
  };
}).filter(p => p.slug);

const urls = [
  { loc: `${SITE_URL}/`, changefreq: 'weekly', priority: '1.0' },
  ...posts.map(p => ({
    loc: `${SITE_URL}/blog/${p.slug}`,
    lastmod: p.date,
    changefreq: 'monthly',
    priority: '0.8',
  })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
${u.lastmod ? `    <lastmod>${u.lastmod}</lastmod>\n` : ''}    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

writeFileSync(join(__dirname, '../public/sitemap.xml'), xml);
console.log(`✓ sitemap.xml generado con ${urls.length} URLs (${posts.length} artículos + home)`);
