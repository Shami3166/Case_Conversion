// app/sitemap.xml/route.ts
export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- 🏠 Home / Tool Page -->
  <url>
    <loc>https://case-conversion.vercel.app/</loc>
    <lastmod>2025-10-05</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- ℹ️ About Page -->
  <url>
    <loc>https://case-conversion.vercel.app/about</loc>
    <lastmod>2025-10-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- 📞 Contact Page -->
  <url>
    <loc>https://case-conversion.vercel.app/contact</loc>
    <lastmod>2025-10-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- 🔒 Privacy Policy -->
  <url>
    <loc>https://case-conversion.vercel.app/privacy-policy</loc>
    <lastmod>2025-10-05</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>

  <!-- 📜 Terms of Service -->
  <url>
    <loc>https://case-conversion.vercel.app/terms-of-service</loc>
    <lastmod>2025-10-05</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>

  <!-- 📝 BLOG PAGES -->
  <url>
    <loc>https://case-conversion.vercel.app/blogs/how-to-change-text-case-google-docs</loc>
    <lastmod>2025-10-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://case-conversion.vercel.app/blogs/how-to-change-text-case-google-sheets</loc>
    <lastmod>2025-10-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://case-conversion.vercel.app/blogs/how-to-change-text-case-microsoft-word</loc>
    <lastmod>2025-10-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://case-conversion.vercel.app/blogs/common-text-case-mistakes</loc>
    <lastmod>2025-10-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://case-conversion.vercel.app/blogs/why-proper-capitalization-matters</loc>
    <lastmod>2025-10-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://case-conversion.vercel.app/blogs/how-to-change-text-case-mobile</loc>
    <lastmod>2025-10-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  });
}