const pc = require("../../app/controllers/pc");
const movie = require("../../app/controllers/movie");
const community = require("../controllers/community");

module.exports = {
    "/": pc.index,
    "/guess": community.guess,
    "/injurynba": community.injuryNBA,
    "/injurywnba": community.injuryWNBA,
    "/injurycba": community.injuryCBA,
    "/injurynbapc": community.injuryNBAPC,
    "/injurywnbapc": community.injuryWNBAPC,
    "/injurycbapc": community.injuryCBAPC,
    "/pc/home": pc.home,
    "/movie/index": movie.index,
    "/movie/login": movie.login,
    "/movie/register": movie.register,
    "/loginAccount": movie.loginAccount,
    "/addAccount": movie.addAccount,
    "/getCasesList": community.getCasesList,
    "/getProductsList": community.getProductsList,
    "/getCommentsList": community.getCommentsList
};
