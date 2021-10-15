const HtmlMinifier = require("koa-html-minifier");
const koaRewrite = require("koa-rewrite");
const koaResponseTime = require("koa-response-time");
const KoaMount = require("koa-mount");
const KoaStatic = require("koa-static");

/**
 * 默认首页
 *
 * @return {Function}
 */
let indexRewrite = () => koaRewrite(/^\/?$/, "/index.html");

/**
 * 内部重定向,代替原先nginx重定向
 *
 * @return {Function}
 */
let internalRewrite = () => koaRewrite(/^(\/[\w/]+)\.html(.*)/, "$1$2");

/**
 * HTML文件压缩
 *
 * @public
 * @return {HtmlMinifier}
 */
let htmlMinifier = () => HtmlMinifier({
    collapseWhitespace: true,
    removeComments: false,
});

/**
 * 响应时间中间件
 *
 * @public
 * @return {Function}
 */
let responseTime = () => koaResponseTime();

/**
 * 静态资源绑定
 *
 * @public
 * @return {Function}
 */
let staticMount = () => {
    const mount = KoaMount("/assets/", KoaStatic("./assets", {
        maxage: 300000,
    }));

    return mount;
};

const siteMapMount = () => {
    const mount = KoaMount('/sitemap.xml', async (ctx, next) => {
        ctx.body = `<?xml version='1.0' encoding='UTF-8'?><urlset><url><loc><![CDATA[https://www.lancailaohei.com]]></loc><lastmod>2021-10-15</lastmod><changefreq>weekly</changefreq></url><url><loc><![CDATA[https://www.lancailaohei.com/injurycbapc]]></loc><lastmod>2021-10-15</lastmod><changefreq>weekly</changefreq></url><url><loc><![CDATA[https://www.lancailaohei.com/injurynbapc]]></loc><lastmod>2021-10-15</lastmod><changefreq>weekly</changefreq>
        </url><url><loc><![CDATA[https://www.lancailaohei.com/injurywnbapc]]></loc><lastmod>2021-10-15</lastmod><changefreq>weekly</changefreq></url><url><loc><![CDATA[https://www.lancailaohei.com/votepc]]></loc><lastmod>2021-10-15</lastmod><changefreq>weekly</changefreq></url></urlset>`;
        await next();
    });

    return mount;
};

//百度爬虫协议
const robotsMount = () => {
    const mount = KoaMount('/robots.txt', async (ctx, next) => {
        ctx.body = `User-agent: *\nDisallow:\nSitemap: https://www.lancailaohei.com/sitemap.xml`;
        await next();
    });

    return mount;
};

/**
 * 页面CDN缓存中间件
 *
 * @public
 * @param ctx
 * @param next
 * @throws {Error}
 */
let pageCache = (ctx, next) => {
    ctx.cache = (maxAge) => {
        if (maxAge === false) {
            ctx.set("Cache-Control", "private, no-cache, no-store");
            return;
        }

        if (typeof maxAge === "number") {
            maxAge = Math.round(maxAge);
            ctx.set("Cache-Control", `max-age=30,s-maxage=${maxAge}`);
        } else {
            throw new Error(`invalid cache control value: ${maxAge}`);
        }
    };

    return next();
};

/**
 * 错误重定向
 *
 * @TODO 测试
 * @public
 * @param ctx
 * @param next
 * @return {Promise.<void>}
 */
let errorRedirect = async (ctx, next) => {
    try {
        await next();
        const status = ctx.response.status;
        if (status === 404) {
            ctx.status = 404;
            await ctx.render("error/404");
        }
    } catch (e) {
        ctx.cache(false);
        ctx.app.onerror(e);
        ctx.status = 500;
        await ctx.render("error/500");
    }
};


let handleError = async (ctx, next) => {
    try {
        await next();
    } catch (e) {
        ctx.body = "ok";
    }
};

module.exports = {
    indexRewrite,
    internalRewrite,
    pageCache,
    errorRedirect,
    responseTime,
    htmlMinifier,
    staticMount,
    siteMapMount,
    robotsMount,
    handleError
};
