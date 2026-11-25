import { serverQueryContent } from '#content/server';

// 作品詳細頁為動態路由，sitemap 無法自動發現，由 Content 取得 slug 補上
export default defineSitemapEventHandler(async (event) => {
    const works = await serverQueryContent<{ slug?: string }>(event, '/works')
        .only(['slug'])
        .find();

    return works
        .filter(work => Boolean(work.slug))
        .map(work => ({ loc: `/works/${work.slug}` }));
});
