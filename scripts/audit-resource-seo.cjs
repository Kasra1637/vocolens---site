/** Read-only SSR regression audit. Run against dev or production preview:
 * BASE_URL=http://127.0.0.1:8797 node scripts/audit-resource-seo.cjs
 */
const assert = require("node:assert/strict");
const { load } = require("cheerio");
const base = process.env.BASE_URL || "http://127.0.0.1:8797";
const origin = "https://vocolens.com";
async function get(route) {
  const res = await fetch(base + route, { signal: AbortSignal.timeout(30000) });
  assert.equal(res.status, 200, `${route}: HTTP ${res.status}`);
  assert(!/noindex/i.test(res.headers.get("x-robots-tag") || ""), `${route}: X-Robots-Tag`);
  return await res.text();
}
(async () => {
  const hub = load(await get("/resources"));
  const paths = [
    ...new Set(
      hub('a[href^="/resources/"]')
        .toArray()
        .map((e) => hub(e).attr("href")),
    ),
  ];
  const expected = process.env.EXPECTED_ARTICLES
    ? Number(process.env.EXPECTED_ARTICLES)
    : require("node:fs")
        .readdirSync(require("node:path").join(__dirname, "../src/routes"))
        .filter(
          (name) =>
            name.startsWith("resources.") &&
            name.endsWith(".tsx") &&
            name !== "resources.index.tsx" &&
            name !== "resources.tsx",
        ).length;
  assert.equal(paths.length, expected, "resource hub must expose every article route");
  const xml = load(await get("/sitemap.xml"), { xmlMode: true });
  const sitemap = xml("loc")
    .toArray()
    .map((e) => xml(e).text());
  assert.match(await get("/robots.txt"), /Allow: \/[\r\n]/);
  const titles = new Set(),
    descriptions = new Set();
  const cache = new Map();
  const results = [];
  for (const route of paths) {
    const $ = load(await get(route));
    assert.equal($("h1").length, 1, `${route}: one H1`);
    const title = $("title").text();
    const description = $('meta[name="description"]').attr("content");
    assert(title && !titles.has(title), `${route}: unique title`);
    assert(description && !descriptions.has(description), `${route}: unique description`);
    titles.add(title);
    descriptions.add(description);
    assert.equal($('link[rel="canonical"]').length, 1, `${route}: one canonical`);
    assert.equal($('link[rel="canonical"]').attr("href"), origin + route);
    assert(!/noindex/i.test($('meta[name="robots"]').attr("content") || ""));
    assert(sitemap.includes(origin + route), `${route}: sitemap inclusion`);
    assert($("#article-root").text().trim().length > 1500, `${route}: initial SSR article text`);
    const schemas = $('script[type="application/ld+json"]')
      .toArray()
      .map((e) => JSON.parse($(e).text()));
    const article = schemas.find((s) => s["@type"] === "Article");
    assert(
      article && article.headline && article.datePublished && article.dateModified,
      `${route}: Article fields`,
    );
    assert.equal(article.mainEntityOfPage["@id"], origin + route);
    assert(article.dateModified >= article.datePublished, `${route}: chronological dates`);
    assert.equal(article.breadcrumb["@type"], "BreadcrumbList");
    const faq = schemas.find((s) => s["@type"] === "FAQPage");
    assert(faq && faq.mainEntity.length > 0, `${route}: FAQ schema`);
    const details = $("details").toArray();
    for (const q of faq.mainEntity) {
      const detail = details.find((e) => $(e).find("summary").text().trim() === q.name);
      assert(detail, `${route}: FAQ question matches visible content`);
      assert.equal(
        $(detail).find("summary").next().text().trim(),
        q.acceptedAnswer.text,
        `${route}: FAQ answer matches`,
      );
    }
    for (const link of $('a[href^="/"]').toArray()) {
      const target = $(link).attr("href").split("#")[0];
      if (!cache.has(target)) cache.set(target, get(target));
      await cache.get(target);
    }
    if (
      process.env.BASELINE !== "1" &&
      (route.endsWith("emotional-awareness-patterns") || route.endsWith("science-of-reflection"))
    ) {
      assert.equal(article.headline, $("h1").text().trim());
      assert.equal(article.dateModified, "2026-10-06");
      assert.equal($('time[itemprop="dateModified"]').attr("datetime"), article.dateModified);
      assert($('#article-root a[href="/resources/emotional-granularity"]').length);
      assert($('#article-root a[href="/resources/alexithymia-emotional-vocabulary"]').length);
      assert($("#section-faq").closest("section").is("[data-listen-exclude]"));
      assert(
        !/proves|rewires neural pathways|up to 50%/i.test($("article").text()),
        `${route}: unsupported claim regression`,
      );
      const slug = route.split("/").pop();
      const manifest = require("../public/audio/manifest.json")[slug];
      const normalize = (s) =>
        s
          .replace(/\s*&\s*/g, " and ")
          .replace(/[<>]/g, " ")
          .replace(/\s+/g, " ")
          .trim();
      const blocks = [
        $("#article-root").children().first(),
        ...$("#article-root section[aria-labelledby]:not([data-listen-exclude])")
          .toArray()
          .map((e) => $(e)),
      ];
      const text = blocks
        .map((b) =>
          b
            .find("h2,h3,p,li")
            .toArray()
            .map((e) => normalize($(e).text()))
            .filter(Boolean)
            .join("\n\n"),
        )
        .join("\n\n");
      assert.equal(
        require("node:crypto").createHash("sha256").update(text).digest("hex").slice(0, 16),
        manifest.hash,
        `${route}: narration content hash`,
      );
    }
    results.push({
      route,
      status: 200,
      title,
      h1: $("h1").text().trim(),
      articleModified: article.dateModified,
      sitemapModified: xml("url")
        .filter((_, e) => xml(e).find("loc").text() === origin + route)
        .find("lastmod")
        .text(),
      schemaTypes: schemas.map((s) => s["@type"]),
      internalLinks: $('a[href^="/"]').length,
    });
    console.log("PASS " + route);
  }
  console.log(JSON.stringify(results, null, 2));
})().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
