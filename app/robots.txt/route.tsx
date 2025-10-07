// app/robots.txt/route.tsx
export async function GET() {
  const robots = `# https://www.robots-txt.org/robots-txt.html
User-agent: *
Allow: /

# Sitemap
Sitemap: https://caseconvertertool.vercel.app/sitemap.xml

# Allow all major crawlers
User-agent: Googlebot
Allow: /
Disallow: /api/

User-agent: Bingbot
Allow: /
Disallow: /api/

User-agent: Slurp
Allow: /
Disallow: /api/

User-agent: DuckDuckBot
Allow: /
Disallow: /api/

User-agent: Baiduspider
Allow: /
Disallow: /api/

User-agent: YandexBot
Allow: /
Disallow: /api/

# Block AI crawlers (optional - remove if you want AI indexing)
User-agent: ChatGPT-User
Disallow: /

User-agent: GPTBot
Disallow: /

User-agent: CCBot
Disallow: /

# Block sensitive directories
Disallow: /api/
Disallow: /admin/
Disallow: /private/

# Allow all pages to be indexed
Allow: /about
Allow: /contact
Allow: /privacy-policy
Allow: /terms-of-service
Allow: /blog/

# Crawl delay (optional)
Crawl-delay: 1`;

  return new Response(robots, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
