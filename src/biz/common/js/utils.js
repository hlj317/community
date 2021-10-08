import {parse} from "./httpurl";
const params = parse().params;
console.log(params);

export const isSupportCopy = document.queryCommandSupported && document.queryCommandSupported("copy");

export const getFormatDate = (timestamp) => {
	if (!timestamp) {
		return "";
	}
	const format = (num) => (num >= 10 ? num : `0${num}`);

	const date = new Date(+timestamp);
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const hour = date.getHours();
	const minute = date.getMinutes();
	const second = date.getSeconds();

	return `${year}-${month}-${day} ${format(hour)}:${format(minute)}:${format(second)}`;
};

export const getFormatPrice = (price) => {
	price = String(price);
	return price.replace(/\d\d$/, (patt) => `.${patt}`);
};

export const getTeam = (key) => {
	const nbaTeam = {
        hawks:{
            name:'亚特兰大老鹰',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/hawks.jpeg'
        },
        celtics:{
            name:'波士顿凯尔特人',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/celtics.jpeg'
        },
        nets:{
            name:'布鲁克林篮网',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/nets.jpeg'
        },
        hornets:{
            name:'夏洛特黄蜂',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/hornets.jpeg'
        },
        bulls:{
            name:'芝加哥公牛',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/bulls.jpeg'
        },
        cavaliers:{
            name:'克利夫兰骑士',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/cavaliers.jpeg'
        },
        mavericks:{
            name:'达拉斯独行侠',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/mavericks.jpeg'
        },
        nuggets:{
            name:'丹佛掘金',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/nuggets.jpeg'
        },
        pistons:{
            name:'底特律活塞',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/pistons.jpeg'
        },
        warriors:{
            name:'金州勇士',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/warriors.jpeg'
        },
        rockets:{
            name:'休斯顿火箭',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/rockets.jpeg'
        },
        pacers:{
            name:'印第安纳步行者',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/pacers.jpeg'
        },
        clippers:{
            name:'洛杉矶快船',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/clippers.jpeg'
        },
        lakers:{
            name:'洛杉矶湖人',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/lakers.jpeg'
        },
        grizzlies:{
            name:'孟菲斯灰熊',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/grizzlies.jpeg'
        },
        heat:{
            name:'迈阿密热火',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/heat.jpeg'
        },
        timberwolves:{
            name:'明尼苏达森林狼',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/timberwolves.jpeg'
        },
        bucks:{
            name:'密尔沃基雄鹿',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/bucks.jpeg'
        },
        pelicans:{
            name:'新奥尔良鹈鹕',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/pelicans.jpeg'
        },
        knicks:{
            name:'纽约尼克斯',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/knicks.jpeg'
        },
        thunder:{
            name:'俄克拉荷马城雷霆',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/thunder.jpeg'
        },
        magic:{
            name:'奥兰多魔术',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/magic.jpeg'
        },
        seven6ers:{
            name:'费城76人',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/76ers.jpeg'
        },
        suns:{
            name:'菲尼克斯太阳',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/suns.jpeg'
        },
        blazers:{
            name:'波特兰开拓者',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/blazers.jpeg'
        },
        kings:{
            name:'萨克拉门托国王',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/kings.jpeg'
        },
        spurs:{
            name:'圣安东尼奥马刺',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/spurs.jpeg'
        },
        raptors:{
            name:'多伦多猛龙',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/raptors.jpeg'
        },
        jazz:{
            name:'犹他爵士',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/jazz.jpeg'
        },
        wizards:{
            name:'华盛顿奇才',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/wizards.jpeg'
        }
    }
    return nbaTeam[key];
};
