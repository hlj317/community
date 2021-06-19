const casesListHandler = require("../models/handles/casesListHandler.js");
const productsListHandler = require("../models/handles/productsListHandler.js");
const commentsListHandler = require("../models/handles/commentsListHandler.js");

const getCasesList = async function (ctx, next) {
    return await (new casesListHandler()).handler(ctx, next);
};

const getProductsList = async function (ctx, next) {
    return await (new productsListHandler()).handler(ctx, next);
};

const getCommentsList = async function (ctx, next) {
    return await (new commentsListHandler()).handler(ctx, next);
};

const guess = async function (ctx, next) {
    await ctx.render("community/guess", {
        title: "猜价格赢好礼",
    });
    return next();
};

const injuryNBA = async function (ctx, next) {
    const ua = ctx.request.header['user-agent'];
    if(!isMobile(ua)){
        ctx.redirect('/injurynbapc');
    };
    if(!(/nba/.test(ctx.href))){
        ctx.redirect('/injurynba');
    }
    await ctx.render("community/injurynba", {
        title: "NBA伤病名单实时更新 - 篮彩老黑",
        keywords: "NBA伤病名单实时更新 - 篮彩老黑",
        description: "NBA伤病名单实时更新 - 篮彩老黑"
    });
    return next();
};

const injuryWNBA = async function (ctx, next) {
    const ua = ctx.request.header['user-agent'];
    if(!isMobile(ua)){
        ctx.redirect('/injurywnbapc');
    };
    await ctx.render("community/injurywnba", {
        title: "WNBA伤病名单实时更新 - 篮彩老黑",
        keywords: "WNBA伤病名单实时更新 - 篮彩老黑",
        description: "WNBA伤病名单实时更新 - 篮彩老黑"
    });
    return next();
};

const injuryCBA = async function (ctx, next) {
    const ua = ctx.request.header['user-agent'];
    if(!isMobile(ua)){
        ctx.redirect('/injurycbapc');
    };
    await ctx.render("community/injurycba", {
        title: "CBA伤病名单实时更新 - 篮彩老黑",
        keywords: "CBA伤病名单实时更新 - 篮彩老黑",
        description: "CBA伤病名单实时更新 - 篮彩老黑"
    });
    return next();
};

const injuryNBAPC = async function (ctx, next) {
    const ua = ctx.request.header['user-agent'];
    if(isMobile(ua)){
        ctx.redirect('/injurynba');
    };
    await ctx.render("community/injurynbapc", {
        title: "NBA伤病名单实时更新 - 篮彩老黑",
        keywords: "NBA伤病名单实时更新 - 篮彩老黑",
        description: "NBA伤病名单实时更新 - 篮彩老黑"
    });
    return next();
};

const injuryWNBAPC = async function (ctx, next) {
    const ua = ctx.request.header['user-agent'];
    if(isMobile(ua)){
        ctx.redirect('/injurywnba');
    };
    await ctx.render("community/injurywnbapc", {
        title: "WNBA伤病名单实时更新 - 篮彩老黑",
        keywords: "WNBA伤病名单实时更新 - 篮彩老黑",
        description: "WNBA伤病名单实时更新 - 篮彩老黑"
    });
    return next();
};

const injuryCBAPC = async function (ctx, next) {
    const ua = ctx.request.header['user-agent'];
    if(isMobile(ua)){
        ctx.redirect('/injurycba');
    };
    await ctx.render("community/injurycbapc", {
        title: "CBA伤病名单实时更新 - 篮彩老黑",
        keywords: "CBA伤病名单实时更新 - 篮彩老黑",
        description: "CBA伤病名单实时更新 - 篮彩老黑"
    });
    return next();
};

//判断是否设备是手机
const isMobile = function(userAgent){
    const u = userAgent;
    if( !!u.match(/AppleWebKit.*Mobile.*/)){
        return true;
    }else if(!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){
        return true;
    }else if(u.indexOf("Android") > -1 || u.indexOf("Linux") > -1){
        return true;
    }else if(u.indexOf("iPhone") > -1){
        return true;
    }else if(u.indexOf("iPad") > -1){
        return true;
    }else{
        return false;
    }
}

module.exports = {
    getCasesList,
    getProductsList,
    getCommentsList,
    guess,
    injuryNBA,
    injuryWNBA,
    injuryCBA,
    injuryNBAPC,
    injuryWNBAPC,
    injuryCBAPC
};
