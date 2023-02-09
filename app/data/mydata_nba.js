const nbaData = {
    //亚特兰大老鹰
    hawks:[
        {
            'name':'特雷杨',
            'status':'出战',
            'detail':'可以出战周五对阵太阳的比赛',
            'important':true
        }
    ],
    //波士顿凯尔特人
    celtics:[
        {        
            'name':'加里纳利',
            'status':'长期缺阵',
            'detail':'膝盖ACL伤病，赛季报销',
            'important':false
        },{        
            'name':'斯马特',
            'status':'缺阵',
            'detail':'脚踝受伤，预计缺阵两周时间',
            'important':true
        },{        
            'name':'AI霍福德',
            'status':'缺阵',
            'detail':'背部受伤，无法出战周四对阵76人的比赛',
            'important':true
        },{        
            'name':'罗威',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周四对阵76人的比赛',
            'important':true
        }
    ],
    //布鲁克林篮网
    nets:[
        {
            'name':'本.西蒙斯',
            'status':'出战',
            'detail':'可以出战周三对阵太阳的比赛',
            'important':true
        },{
            'name':'芬尼.史密斯',
            'status':'出战',
            'detail':'可以出战周五对阵公牛的比赛',
            'important':false
        },{
            'name':'塞斯.库里',
            'status':'缺阵',
            'detail':'腿部受伤，还需要缺阵一段时间',
            'important':false
        },{
            'name':'丁威迪',
            'status':'出战',
            'detail':'可以出战周五对阵公牛的比赛',
            'important':true
        },{
            'name':'渡边雄太',
            'status':'出战存疑',
            'detail':'身体不适，周五对阵公牛的比赛出战存疑',
            'important':false
        },{
            'name':'夏普',
            'status':'出战存疑',
            'detail':'腿部受伤，周五对阵公牛的比赛出战存疑',
            'important':false
        },{
            'name':'杜兰特',
            'status':'缺阵',
            'detail':'被球队交易去了湖人',
            'important':true
        },{
            'name':'TJ.沃伦',
            'status':'缺阵',
            'detail':'被球队交易去了湖人',
            'important':false
        }
    ],
    //夏洛特黄蜂
    hornets:[
        {
            'name':'科迪.马丁',
            'status':'缺阵',
            'detail':'膝盖受伤，还需要缺阵一段时间',
            'important':false
        },{
            'name':'乌布雷',
            'status':'长期缺阵',
            'detail':'手部受伤，预计缺阵4-6周时间',
            'important':true
        }
    ],
    //芝加哥公牛
    bulls:[
        {
            'name':'朗佐.鲍尔',
            'status':'长期缺阵',
            'detail':'膝盖手术，预计至少缺阵2个月时间',
            'important':true
        },{
            'name':'贾文特.格林',
            'status':'缺阵',
            'detail':'膝盖受伤，至少还要缺阵2周时间',
            'important':false
        },{
            'name':'德罗赞',
            'status':'出战存疑',
            'detail':'臀部受伤，周五对阵篮网的比赛出战存疑',
            'important':true
        },{
            'name':'帕威',
            'status':'出战存疑',
            'detail':'身体不适，周五对阵篮网的比赛出战存疑',
            'important':true
        }
    ],
    //克利夫兰骑士
    cavaliers:[
        {
            'name':'温德勒',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战',
            'important':false
        },{
            'name':'米切尔',
            'status':'缺阵',
            'detail':'身体不适，无法出战周四对阵活塞的比赛',
            'important':true
        },{
            'name':'加兰',
            'status':'缺阵',
            'detail':'身体不适，无法出战周四对阵活塞的比赛',
            'important':true
        }
    ],
    //达拉斯独行侠
    mavericks:[
        {
            'name':'克勒贝尔',
            'status':'缺阵',
            'detail':'右膝受伤，归期未定',
            'important':true
        },{
            'name':'贝尔坦斯',
            'status':'缺阵',
            'detail':'小腿受伤，还需要缺阵一段时间',
            'important':false
        },{
            'name':'东契奇',
            'status':'缺阵',
            'detail':'脚后跟受伤，预计缺阵两周时间',
            'important':true
        },{
            'name':'欧文',
            'status':'出战',
            'detail':'可以出战周四对阵快船的比赛',
            'important':true
        },{
            'name':'马基夫.莫里斯',
            'status':'出战',
            'detail':'可以出战周四对阵快船的比赛',
            'important':false
        }
    ],
    //丹佛掘金
    nuggets:[
        {
            'name':'科林·吉莱斯皮',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        },{
            'name':'贾马尔.穆雷',
            'status':'出战存疑',
            'detail':'伤病管理，周五对阵魔术的比赛出战存疑',
            'important':true
        },{
            'name':'纳吉',
            'status':'出战存疑',
            'detail':'肩膀受伤，周五对阵魔术的比赛出战存疑',
            'important':false
        }
    ],
    //底特律活塞
    pistons:[
        {        
            'name':'凯德.坎宁安',
            'status':'长期缺阵',
            'detail':'腿部手术，赛季报销',
            'important':true
        },{        
            'name':'巴格利',
            'status':'长期缺阵',
            'detail':'手掌受伤，预计缺阵6-8周时间',
            'important':false
        }
    ],
    //金州勇士
    warriors:[
        {
            'name':'伊戈达拉',
            'status':'缺阵',
            'detail':'臀部受伤，还会缺阵一段时间',
            'important':false
        },{
            'name':'库里',
            'status':'长期存疑',
            'detail':'左腿受伤，预计缺阵3-4周时间',
            'important':true
        }
    ],
    //休斯顿火箭
    rockets:[
        {
            'name':'小凯文.波特',
            'status':'缺阵',
            'detail':'腿部受伤，至少再缺阵一周时间',
            'important':true
        },{
            'name':'马修斯',
            'status':'缺阵',
            'detail':'大脚趾受伤，无法出战周四对阵国王的比赛',
            'important':false
        }
    ],
    //印第安纳步行者
    pacers:[
        {
            'name':'杜阿尔特',
            'status':'出战',
            'detail':'可以出战周四对阵热火的比赛',
            'important':false
        }
    ],
    //洛杉矶快船
    clippers:[
        {
            'name':'普雷斯頓',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        },{
            'name':'沃尔',
            'status':'长期缺阵',
            'detail':'腿部受伤，归期未定',
            'important':false
        }
    ],
    //洛杉矶湖人
    lakers:[
        {
            'name':'安东尼.戴维斯',
            'status':'出战存疑',
            'detail':'伤病管理，周五对阵雄鹿的比赛出战存疑',
            'important':true
        },{
            'name':'詹姆斯',
            'status':'出战存疑',
            'detail':'伤病管理，周五对阵雄鹿的比赛出战存疑',
            'important':true
        },{
            'name':'范德比尔特',
            'status':'缺阵',
            'detail':'刚被交易到球队，无法出战周五对阵雄鹿的比赛',
            'important':false
        },{
            'name':'拉塞尔',
            'status':'缺阵',
            'detail':'刚被交易到球队，无法出战周五对阵雄鹿的比赛',
            'important':true
        },{
            'name':'比斯利',
            'status':'缺阵',
            'detail':'刚被交易到球队，无法出战周五对阵雄鹿的比赛',
            'important':false
        },{
            'name':'威斯布鲁克',
            'status':'缺阵',
            'detail':'被球队交易去了爵士',
            'important':true
        },{
            'name':'达米安.琼斯',
            'status':'缺阵',
            'detail':'被球队交易去了爵士',
            'important':false
        },{
            'name':'托斯卡诺-安德森',
            'status':'缺阵',
            'detail':'被球队交易去了爵士',
            'important':false
        }  
    ],
    //孟菲斯灰熊
    grizzlies:[
        {
            'name':'亚当斯',
            'status':'长期缺阵',
            'detail':'膝盖扭伤，至少缺阵3-5周的时间',
            'important':true
        }
    ],
    //迈阿密热火
    heat:[
        {
            'name':'尤尔特塞文',
            'status':'缺阵',
            'detail':'脚踝受伤，归期未定',
            'important':false
        },{
            'name':'约维奇',
            'status':'长期缺阵',
            'detail':'背部受伤，预计缺阵1个月时间',
            'important':false
        },{
            'name':'邓肯.罗宾逊',
            'status':'长期缺阵',
            'detail':'手指骨裂，预计缺阵1个月的时间',
            'important':false
        },{
            'name':'文森特',
            'status':'出战',
            'detail':'可以出战周四对阵步行者的比赛',
            'important':false
        },{
            'name':'奥拉迪波',
            'status':'缺阵',
            'detail':'脚踝扭伤，无法出战周四对阵步行者的比赛',
            'important':true
        },{
            'name':'奥兰多.罗宾逊',
            'status':'出战',
            'detail':'可以出战周四对阵步行者的比赛',
            'important':false
        },{
            'name':'洛瑞',
            'status':'缺阵',
            'detail':'左膝受伤，还需要缺阵一段时间',
            'important':false
        }     
    ],
    //密尔沃基雄鹿
    bucks:[
        {
            'name':'波蒂斯',
            'status':'缺阵',
            'detail':'右膝受伤，至少缺阵两周时间',
            'important':true
        },{
            'name':'伊巴卡',
            'status':'缺阵',
            'detail':'个人原因，会缺阵一段时间',
            'important':false
        },{
            'name':'英格尔斯',
            'status':'缺阵',
            'detail':'身体不适，无法出战周五对阵湖人的比赛',
            'important':false
        },{
            'name':'洛佩兹',
            'status':'出战存疑',
            'detail':'身体不适，周五对阵湖人的比赛出战存疑',
            'important':true
        },{
            'name':'字母哥',
            'status':'出战',
            'detail':'可以出战周五对阵湖人的比赛',
            'important':true
        }
    ],
    //明尼苏达森林狼
    timberwolves:[
        {
            'name':'唐斯',
            'status':'长期缺阵',
            'detail':'小腿受伤，预计至少缺阵6周时间',
            'important':true
        },{
            'name':'凯尔.安德森',
            'status':'缺阵',
            'detail':'背部受伤，无法出战周四对阵爵士的比赛',
            'important':false
        },{
            'name':'戈贝尔',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周四对阵爵士的比赛',
            'important':true
        },{
            'name':'亚历山大沃克',
            'status':'出战存疑',
            'detail':'刚被交易到球队，每日观察',
            'important':false
        },{
            'name':'康利',
            'status':'出战存疑',
            'detail':'刚被交易到球队，每日观察',
            'important':true
        },{
            'name':'拉塞尔',
            'status':'缺阵',
            'detail':'被球队交易去了湖人',
            'important':true
        }
    ],
    //新奥尔良鹈鹕
    pelicans:[
        {
            'name':'锡安',
            'status':'缺阵',
            'detail':'腿筋拉伤，预计至少缺阵3周时间',
            'important':true
        },{
            'name':'丹尼尔斯',
            'status':'缺阵',
            'detail':'脚踝受伤，需要缺阵一段时间',
            'important':false
        },{
            'name':'瓦兰丘纳斯',
            'status':'出战',
            'detail':'可以出战周三对阵老鹰的比赛',
            'important':true
        },{
            'name':'英格拉姆',
            'status':'出战',
            'detail':'可以出战周三对阵老鹰的比赛',
            'important':true
        }
    ],
    //纽约尼克斯
    knicks:[
        {
            'name':'阿尔奇迪亚科诺',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        },{
            'name':'米切尔.罗宾逊',
            'status':'缺阵',
            'detail':'拇指受伤，至少恢复三周时间',
            'important':true
        },{
            'name':'哈特',
            'status':'出战存疑',
            'detail':'刚被交易到球队，每日观察',
            'important':false
        }
    ],
    //俄克拉荷马城雷霆
    thunder:[
        {
            'name':'切特.霍姆格伦',
            'status':'长期缺阵',
            'detail':'腿部受伤，赛季报销',
            'important':false
        },{
            'name':'多尔特',
            'status':'缺阵',
            'detail':'身体不适，还需要缺阵一段时间',
            'important':true
        },{
            'name':'波库',
            'status':'长期缺阵',
            'detail':'左腿严重受伤，预计缺阵至少6-8周',
            'important':true
        }
    ],
    //奥兰多魔术
    magic:[
        {
            'name':'奥吉吉',
            'status':'缺阵',
            'detail':'膝盖受伤，预计会缺阵一段时间',
            'important':false
        },{
            'name':'加里.哈里斯',
            'status':'出战存疑',
            'detail':'腿部受伤，周五对阵掘金的比赛出战存疑',
            'important':false
        }
    ],
    //费城76人
    seven6ers:[
        {        
            'name':'恩比德',
            'status':'出战',
            'detail':'可以出战周四对阵凯尔特人的比赛',
            'important':true
        }
    ],
    //菲尼克斯太阳
    suns:[
        {
            'name':'杰.克劳德',
            'status':'长期缺阵',
            'detail':'与球队闹矛盾，本赛季不会出战',
            'important':false
        },{
            'name':'布克',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周五对阵老鹰的比赛',
            'important':true
        },{
            'name':'佩恩',
            'status':'缺阵',
            'detail':'腿部受伤，至少缺阵两周时间',
            'important':false
        },{
            'name':'沙梅特',
            'status':'缺阵',
            'detail':'腿部受伤，还需要缺阵一段时间',
            'important':false
        },{
            'name':'布里奇斯',
            'status':'缺阵',
            'detail':'被球队交易去了篮网',
            'important':true
        },{
            'name':'卡梅伦.约翰逊',
            'status':'缺阵',
            'detail':'被球队交易去了篮网',
            'important':true
        },{
            'name':'杜兰特',
            'status':'缺阵',
            'detail':'被交易到球队，预计全明星赛后复出',
            'important':true
        },{
            'name':'TJ.沃伦',
            'status':'缺阵',
            'detail':'刚被交易到球队，无法出战周五对阵老鹰的比赛',
            'important':false
        },
    ],
    //波特兰开拓者
    blazers:[
        {
            'name':'温斯洛',
            'status':'缺阵',
            'detail':'左脚踝受伤，至少缺阵两周时间',
            'important':false
        },{
            'name':'努尔基奇',
            'status':'缺阵',
            'detail':'左小腿受伤，预计要等全明星赛后才能复出',
            'important':true
        },{
            'name':'小佩顿',
            'status':'出战',
            'detail':'可以出战周四对阵勇士的比赛',
            'important':false
        },{
            'name':'尤班克斯',
            'status':'出战',
            'detail':'可以出战周四对阵勇士的比赛',
            'important':false
        },{
            'name':'基翁.约翰逊',
            'status':'缺阵',
            'detail':'脚踝扭伤，无法出战周四对阵勇士的比赛',
            'important':false
        },{
            'name':'雷迪什',
            'status':'出战存疑',
            'detail':'刚被交易到球队，每日观察',
            'important':false
        },{
            'name':'哈特',
            'status':'缺阵',
            'detail':'被球队交易去了尼克斯',
            'important':false
        }
    ],
    //萨克拉门托国王
    kings:[
        {
            'name':'克塔',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        }
    ],
    //圣安东尼奥马刺
    spurs:[
        {
            'name':'瓦塞尔',
            'status':'长期缺阵',
            'detail':'左膝手术，预计缺阵一个月时间',
            'important':true
        },{
            'name':'朗福德',
            'status':'缺阵',
            'detail':'臀部受伤，无法出战周二对阵公牛的比赛',
            'important':false
        },{
            'name':'索汉',
            'status':'缺阵',
            'detail':'背部受伤，无法出战周四对阵猛龙的比赛',
            'important':true
        },{
            'name':'特雷.琼斯',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周四对阵猛龙的比赛',
            'important':true
        },{
            'name':'凯尔登.约翰逊',
            'status':'出战',
            'detail':'可以出战周四对阵猛龙的比赛',
            'important':true
        }
    ],
    //多伦多猛龙
    raptors:[
        {
            'name':'奥托.波特',
            'status':'缺阵',
            'detail':'左脚受伤，预计会缺阵一段时间',
            'important':false
        },{
            'name':'阿奴诺比',
            'status':'缺阵',
            'detail':'腿部受伤，还需要缺阵一段时间',
            'important':true
        }
    ],
    //犹它爵士
    jazz:[
        {
            'name':'麦卡.波特',
            'status':'缺阵',
            'detail':'腿部受伤，会缺阵一段时间',
            'important':false
        },{
            'name':'范德比尔特',
            'status':'缺阵',
            'detail':'已被球队交易到了湖人',
            'important':false
        },{
            'name':'比斯利',
            'status':'缺阵',
            'detail':'已被球队交易到了湖人',
            'important':false
        },{
            'name':'康利',
            'status':'缺阵',
            'detail':'已被球队交易到了湖人',
            'important':true
        },{
            'name':'托斯卡诺-安德森',
            'status':'出战存疑',
            'detail':'刚被交易到球队，每日观察',
            'important':false
        },{
            'name':'达米安.琼斯',
            'status':'出战存疑',
            'detail':'刚被交易到球队，每日观察',
            'important':false
        },{
            'name':'威斯布鲁克',
            'status':'缺阵',
            'detail':'刚被交易到球队，预计会被买断',
            'important':false
        }                       
    ],
    //华盛顿奇才
    wizards:[
        {
            'name':'比尔',
            'status':'出战',
            'detail':'可以出战周四对阵黄蜂的比赛',
            'important':true
        },{
            'name':'库兹马',
            'status':'出战存疑',
            'detail':'脚踝受伤，周四对阵黄蜂的比赛出战存疑',
            'important':true
        },{
            'name':'蒙特.莫里斯',
            'status':'出战存疑',
            'detail':'身体不适，无法出战周四对阵黄蜂的比赛',
            'important':false
        }
    ]   
}

module.exports = nbaData;