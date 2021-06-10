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

const injury = async function (ctx, next) {
    await ctx.render("community/injury", {
        title: "NBA伤病名单实时更新",
    });
    return next();
};

module.exports = {
    getCasesList,
    getProductsList,
    getCommentsList,
    guess,
    injury,
};
