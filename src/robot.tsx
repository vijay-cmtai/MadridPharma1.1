import React from "react";
import { productSitemap } from "./sidemap";

const siteUrl = "https://www.madridpharma.com";

export default function Robots() {
  // Generate sitemap entries
  const sitemapEntries = productSitemap.map((uri) => `${siteUrl}${uri}`);
  const robotsContent = `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml`;
  const jsonLd = sitemapEntries.map((url) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    url: url,
  }));

  return (
    <>
      {/* Robots.txt meta tag for SEO crawlers */}
      <meta name="robots" content="index, follow" />
      {/* Structured data for each product */}
      {jsonLd.map((data, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}
