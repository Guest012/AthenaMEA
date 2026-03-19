import { NextResponse } from 'next/server';

const INDEXNOW_KEY = '2ab824e6777247f986dd553a98aa7d33';
const SITE_URL = 'https://www.athenamea.com';

// All URLs to submit to search engines
const ALL_URLS = [
  '/',
  '/about-us',
  '/case-studies',
  '/faq',
  '/insights',
  '/privacy-policy',
  '/terms-of-service',
  '/services/market-entry-strategy',
  '/services/talent-discovery',
  '/services/compensation-benchmarking',
  '/services/competitive-intelligence',
  '/services/hr-due-diligence',
  '/services/strategic-consulting',
  '/insights/blog/regulatory-pitfalls-india-2026',
  '/insights/blog/uae-free-zone-vs-mainland-2026',
  '/insights/blog/uae-free-zone-vs-mainland',
  '/insights/blog/india-market-entry-guide-2025',
  '/insights/blog/hiring-leaders-india-middle-east',
  '/insights/blog/compensation-benchmarking-trends-2025',
];

export async function GET() {
  const urlList = ALL_URLS.map((path) => `${SITE_URL}${path}`);

  // Submit to Bing/Yandex/DuckDuckGo via IndexNow
  const engines = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow',
    'https://yandex.com/indexnow',
  ];

  const results = await Promise.allSettled(
    engines.map((engine) =>
      fetch(engine, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          host: 'www.athenamea.com',
          key: INDEXNOW_KEY,
          keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
          urlList,
        }),
      }).then(async (res) => ({
        engine,
        status: res.status,
        ok: res.ok,
      }))
    )
  );

  return NextResponse.json({
    submitted: urlList.length,
    urls: urlList,
    results: results.map((r) => (r.status === 'fulfilled' ? r.value : { error: String(r.reason) })),
  });
}
