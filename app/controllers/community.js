const casesListHandler = require("../models/handles/casesListHandler.js");
const productsListHandler = require("../models/handles/productsListHandler.js");
const commentsListHandler = require("../models/handles/commentsListHandler.js");
const nideshopAdHandler = require("../models/handles/nideshopAdHandler.js");
const nbaData = require("../data/mydata_nba.js");
const newsTitle = require("../data/news_title.json");
const fs = require("fs");
// const ProModel = require("../models/model/proModel.js");
// const proModel = ProModel.instance();

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
        title: "NBA伤病名单-篮彩老黑",
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
            title: "NBA伤病名单-篮彩老黑",
            keywords: "NBA,伤病,受伤,缺席,名单,篮彩,彩票",
            description: "24小时NBA伤病名单实时更新，伤病消息来源于各NBA俱乐部官方网站",
            nbaData
        });
    }else{
        await ctx.render("community/injurynba", {
            title: "NBA伤病名单-篮彩老黑",
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
        title: "NBA篮彩投注率-篮彩老黑",
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
        title: "NBA篮彩投注率-篮彩老黑",
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
        title: "WNBA伤病名单-篮彩老黑",
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
        title: "CBA伤病名单-篮彩老黑",
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
        title: "NBA伤病名单-篮彩老黑",
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
        title: "WNBA伤病名单-篮彩老黑",
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
        title: "CBA伤病名单-篮彩老黑",
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

//渲染新闻页面
const news = async function (ctx, next) {
    const url = ctx.url,
          num = url.substring(6,url.indexOf("."));
    await ctx.render("news/news-"+num, {
        title: newsTitle[num] + "-NBA伤病名单-篮彩老黑",
        keywords: "NBA,伤病,受伤,缺席,名单,篮彩,彩票",
        description: newsTitle[num] + "，24小时NBA伤病名单实时更新"
    });
    return next();
};

//批量生成新闻页面
const createNews = async function (ctx, next) {
    const startPage = parseInt(ctx.request.query.startpage);
    let result = await proModel.getNews();
    let data = JSON.parse(fs.readFileSync("/Users/huanglijun/Desktop/demo/community/app/data/news_title.json", "utf-8"));
    let dataNewsList = fs.readFileSync("/Users/huanglijun/Desktop/demo/community/app/views/layout/news_list.html", "utf-8");
    for(let i = 0;i < result.length;i++){
        fs.writeFileSync("/Users/huanglijun/Desktop/demo/community/app/views/news/news-"+(i+startPage)+".html", result[i].content);
        data[i+startPage] = result[i].title;
        dataNewsList += '<li><a href="/news-'+(i+startPage)+'.html">'+result[i].title+'</a></li>';
    }
    let str = JSON.stringify(data);
    fs.writeFileSync("/Users/huanglijun/Desktop/demo/community/app/data/news_title.json", str);
    fs.writeFileSync("/Users/huanglijun/Desktop/demo/community/app/views/layout/news_list.html", dataNewsList);
    ctx.body = {
        "message": "批量生成新闻页面成功",
        "statesCode": 200
    };
    return next();
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
    votePC,
    news,
    createNews
};
