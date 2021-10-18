const casesListHandler = require("../models/handles/casesListHandler.js");
const productsListHandler = require("../models/handles/productsListHandler.js");
const commentsListHandler = require("../models/handles/commentsListHandler.js");
const nideshopAdHandler = require("../models/handles/nideshopAdHandler.js");
const nbaData = require("../data/mydata_nba.js");

const getCasesList = async function (ctx, next) {
    return await (new casesListHandler()).handler(ctx, next);
};

const getProductsList = async function (ctx, next) {
    return await (new productsListHandler()).handler(ctx, next);
};

const getCommentsList = async function (ctx, next) {
    return await (new commentsListHandler()).handler(ctx, next);
};

const getNideshopAd = async function (ctx, next) {
    return await (new nideshopAdHandler()).handler(ctx, next);
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
    // console.log(ctx.state.path);
    // if(!(/nba/.test(ctx.href))){
    //     ctx.redirect('/injurynba');
    // }
    await ctx.render("community/injurynba", {
        title: "NBA伤病名单实时更新-篮彩老黑",
        keywords: "NBA,伤病,受伤,缺席,名单,篮彩,彩票",
        description: "24小时NBA伤病名单实时更新，伤病消息来源于各NBA俱乐部官方网站",
        nbaData
    });
    return next();
};

const injuryNBAIndex = async function (ctx, next) {
    const ua = ctx.request.header['user-agent'];
    if(!isMobile(ua)){
        await ctx.render("community/injurynbapc", {
            title: "NBA伤病名单实时更新-篮彩老黑",
            keywords: "NBA,伤病,受伤,缺席,名单,篮彩,彩票",
            description: "24小时NBA伤病名单实时更新，伤病消息来源于各NBA俱乐部官方网站",
            nbaData
        });
    }else{
        await ctx.render("community/injurynba", {
            title: "NBA伤病名单实时更新-篮彩老黑",
            keywords: "NBA,伤病,受伤,缺席,名单,篮彩,彩票",
            description: "24小时NBA伤病名单实时更新，伤病消息来源于各NBA俱乐部官方网站",
            nbaData
        });
    }
    return next();
};

const vote = async function (ctx, next) {
    const ua = ctx.request.header['user-agent'];
    if(!isMobile(ua)){
        ctx.redirect('/votepc');
    };
    await ctx.render("community/vote", {
        title: "NBA篮彩投注率实时更新-篮彩老黑",
        keywords: "NBA,投注率,热度,篮彩,彩票",
        description: "NBA篮彩投注率实时更新，投注率来源于拉斯维加斯博彩官网"
    });
    return next();
};

const votePC = async function (ctx, next) {
    const ua = ctx.request.header['user-agent'];
    if(isMobile(ua)){
        ctx.redirect('/vote');
    };
    await ctx.render("community/votepc", {
        title: "NBA篮彩投注率实时更新-篮彩老黑",
        keywords: "NBA,投注率,热度,篮彩,彩票",
        description: "NBA篮彩投注率实时更新，投注率来源于拉斯维加斯博彩官网"
    });
    return next();
};

const injuryWNBA = async function (ctx, next) {
    const ua = ctx.request.header['user-agent'];
    if(!isMobile(ua)){
        ctx.redirect('/injurywnbapc');
    };
    await ctx.render("community/injurywnba", {
        title: "WNBA伤病名单实时更新-篮彩老黑",
        keywords: "WNBA,伤病,受伤,缺席,名单,篮彩,彩票",
        description: "24小时WNBA伤病名单实时更新，伤病消息来源于各WNBA俱乐部官方网站"
    });
    return next();
};

const injuryCBA = async function (ctx, next) {
    const ua = ctx.request.header['user-agent'];
    if(!isMobile(ua)){
        ctx.redirect('/injurycbapc');
    };
    await ctx.render("community/injurycba", {
        title: "CBA伤病名单实时更新-篮彩老黑",
        keywords: "CBA,伤病,受伤,缺席,名单,篮彩,彩票",
        description: "24小时CBA伤病名单实时更新，伤病消息来源于各CBA俱乐部官方网站"
    });
    return next();
};

const injuryNBAPC = async function (ctx, next) {
    const ua = ctx.request.header['user-agent'];
    if(isMobile(ua)){
        ctx.redirect('/injurynba');
    };
    await ctx.render("community/injurynbapc", {
        title: "NBA伤病名单实时更新-篮彩老黑",
        keywords: "NBA,伤病,受伤,缺席,名单,篮彩,彩票",
        description: "24小时NBA伤病名单实时更新，伤病消息来源于各NBA俱乐部官方网站",
        nbaData
    });
    return next();
};

const injuryWNBAPC = async function (ctx, next) {
    const ua = ctx.request.header['user-agent'];
    if(isMobile(ua)){
        ctx.redirect('/injurywnba');
    };
    await ctx.render("community/injurywnbapc", {
        title: "WNBA伤病名单实时更新-篮彩老黑",
        keywords: "WNBA,伤病,受伤,缺席,名单,篮彩,彩票",
        description: "24小时WNBA伤病名单实时更新，伤病消息来源于各WNBA俱乐部官方网站"
    });
    return next();
};

const injuryCBAPC = async function (ctx, next) {
    const ua = ctx.request.header['user-agent'];
    if(isMobile(ua)){
        ctx.redirect('/injurycba');
    };
    await ctx.render("community/injurycbapc", {
        title: "CBA伤病名单实时更新-篮彩老黑",
        keywords: "CBA,伤病,受伤,缺席,名单,篮彩,彩票",
        description: "24小时CBA伤病名单实时更新，伤病消息来源于各CBA俱乐部官方网站"
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
    getNideshopAd,
    guess,
    injuryNBA,
    injuryNBAIndex,
    injuryWNBA,
    injuryCBA,
    injuryNBAPC,
    injuryWNBAPC,
    injuryCBAPC,
    vote,
    votePC
};
