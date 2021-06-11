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
    await ctx.render("community/injurynba", {
        title: "NBA伤病名单实时更新 - 篮彩老黑",
        keywords: "NBA伤病名单实时更新 - 篮彩老黑",
        description: "NBA伤病名单实时更新 - 篮彩老黑"
    });
    return next();
};

const injuryWNBA = async function (ctx, next) {
    await ctx.render("community/injurywnba", {
        title: "WNBA伤病名单实时更新 - 篮彩老黑",
        keywords: "WNBA伤病名单实时更新 - 篮彩老黑",
        description: "WNBA伤病名单实时更新 - 篮彩老黑"
    });
    return next();
};

const injuryCBA = async function (ctx, next) {
    await ctx.render("community/injurycba", {
        title: "CBA伤病名单实时更新 - 篮彩老黑",
        keywords: "CBA伤病名单实时更新 - 篮彩老黑",
        description: "CBA伤病名单实时更新 - 篮彩老黑"
    });
    return next();
};

module.exports = {
    getCasesList,
    getProductsList,
    getCommentsList,
    guess,
    injuryNBA,
    injuryWNBA,
    injuryCBA
};
