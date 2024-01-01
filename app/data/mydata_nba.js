const nbaData = {
    //亚特兰大老鹰
    hawks:[
        {
            'name':'巴夫金',
            'status':'长期缺阵',
            'detail':'拇指骨折，预计缺阵8-10周的时间',
            'important':false
        },{
            'name':'AJ.格里芬',
            'status':'缺阵',
            'detail':'个人原因，还需要缺阵几场比赛',
            'important':false
        },{
            'name':'奥孔古',
            'status':'缺阵',
            'detail':'身体不适，无法出战周一对阵奇才的比赛',
            'important':false
        },{
            'name':'特雷杨',
            'status':'出战',
            'detail':'可以出战周一对阵奇才的比赛',
            'important':true
        },{
            'name':'亨特',
            'status':'缺阵',
            'detail':'膝盖受伤，预计至少缺阵两周时间',
            'important':true
        }
    ],
    //波士顿凯尔特人
    celtics:[
        {
            'name':'朱.霍乐迪',
            'status':'缺阵',
            'detail':'右手肘受伤，无法出战周一对阵马刺的比赛',
            'important':true
        },{
            'name':'波尔津吉斯',
            'status':'出战',
            'detail':'可以出战周一对阵马刺的比赛',
            'important':true
        },{
            'name':'塔图姆',
            'status':'出战',
            'detail':'可以出战周一对阵马刺的比赛',
            'important':true
        },{
            'name':'AI.霍福德',
            'status':'出战',
            'detail':'可以出战周一对阵马刺的比赛',
            'important':false
        }
    ],
    //布鲁克林篮网
    nets:[
        {
            'name':'本.西蒙斯',
            'status':'缺阵',
            'detail':'臀部受伤，预计还要缺阵一段时间',
            'important':true
        },{
            'name':'朗尼.沃克',
            'status':'缺阵',
            'detail':'臀部受伤，预计至少会缺阵半个月时间',
            'important':false
        }
    ],
    //夏洛特黄蜂
    hornets:[
        {
            'name':'布克奈特',
            'status':'缺阵',
            'detail':'膝盖受伤，预计会缺阵一段时间',
            'important':false
        },{
            'name':'马克.威廉姆斯',
            'status':'缺阵',
            'detail':'膝盖受伤，还需要缺阵一段时间',
            'important':false
        },{
            'name':'海沃德',
            'status':'缺阵',
            'detail':'左腿筋拉伤，预计至少缺阵两周时间',
            'important':true
        },{
            'name':'拉梅洛.鲍尔',
            'status':'缺阵',
            'detail':'脚踝严重扭伤，预计会缺阵较长一段时间',
            'important':true
        }
    ],
    //芝加哥公牛
    bulls:[
        {
            'name':'郎佐.鲍尔',
            'status':'长期缺阵',
            'detail':'膝盖受伤，预计2023-2024赛季报销',
            'important':false
        },{
            'name':'扎克.拉文',
            'status':'长期缺阵',
            'detail':'腿部受伤，预计至少还要缺阵3-4周时间',
            'important':true
        },{
            'name':'克雷格',
            'status':'长期缺阵',
            'detail':'右脚后跟严重受伤，预计会缺阵4-6周时间',
            'important':false
        },{
            'name':'武切维奇',
            'status':'缺阵',
            'detail':'左内肌挫伤，预计缺阵7-10天时间',
            'important':true
        }
    ],
    //克利夫兰骑士
    cavaliers:[
        {
            'name':'卢比奥',
            'status':'长期缺阵',
            'detail':'患有抑郁症，预计会缺阵较长一段时间，归期未定',
            'important':false
        },{
            'name':'杰罗姆',
            'status':'缺阵',
            'detail':'脚踝扭伤，还需要缺阵几场比赛',
            'important':false
        },{
            'name':'埃文.莫布利',
            'status':'长期缺阵',
            'detail':'脚踝手术，预计会缺阵6-8周时间',
            'important':true
        },{
            'name':'加兰',
            'status':'长期缺阵',
            'detail':'面部骨折，预计会缺阵数周时间',
            'important':true
        }
    ],
    //达拉斯独行侠
    mavericks:[
        {
            'name':'克勒贝尔',
            'status':'缺阵',
            'detail':'脚趾受伤，预计至少缺阵两周时间',
            'important':false
        },{
            'name':'凯里.欧文',
            'status':'出战存疑',
            'detail':'右脚后跟受伤，周二对阵爵士的比赛出战存疑',
            'important':true
        },{
            'name':'赛斯.库里',
            'status':'出战存疑',
            'detail':'身体不适，周二对阵爵士的比赛出战存疑',
            'important':false
        }
    ],
    //丹佛掘金
    nuggets:[
        {
            'name':'钱查尔',
            'status':'长期缺阵',
            'detail':'夏天左膝严重受伤，新赛季归期未定',
            'important':false
        },{
            'name':'阿隆.戈登',
            'status':'出战',
            'detail':'可以出战周二对阵黄蜂的比赛',
            'important':true
        }
    ],
    //底特律活塞
    pistons:[
        {
            'name':'蒙特.莫里斯',
            'status':'缺阵',
            'detail':'背部拉伤，至少还需要缺阵3周时间',
            'important':false
        },{
            'name':'斯图尔特',
            'status':'缺阵',
            'detail':'脚趾受伤，预计至少还要缺阵10-14天时间',
            'important':true
        }
    ],
    //金州勇士
    warriors:[
        {
            'name':'小佩顿',
            'status':'出战',
            'detail':'可以出战周日对阵独行侠的比赛',
            'important':false
        },{
            'name':'凯文.鲁尼',
            'status':'出战',
            'detail':'可以出战周日对阵独行侠的比赛',
            'important':false
        },{
            'name':'追梦.格林',
            'status':'长期缺阵',
            'detail':'被无限期禁赛，归期未定',
            'important':true
        }
    ],
    //休斯顿火箭
    rockets:[
        {
            'name':'奥拉迪波',
            'status':'长期缺阵',
            'detail':'膝盖受伤，归期未定',
            'important':false
        },{
            'name':'狄龙.布鲁克斯',
            'status':'缺阵',
            'detail':'斜方肌拉伤，预计还需要缺阵一段时间',
            'important':true
        },{
            'name':'贾巴里.史密斯',
            'status':'出战存疑',
            'detail':'脚踝扭伤，周二对阵活塞的比赛出战存疑',
            'important':true
        },{
            'name':'伊森',
            'status':'出战存疑',
            'detail':'左小腿受伤，周二对阵活塞的比赛出战存疑',
            'important':false
        }
    ],
    //印第安纳步行者
    pacers:[
        {
            'name':'布鲁斯.布朗',
            'status':'缺阵',
            'detail':'右膝受伤，无法出战周二对阵雄鹿的比赛',
            'important':true
        }
    ],
    //洛杉矶快船
    clippers:[
        {
            'name':'普拉姆利',
            'status':'缺阵',
            'detail':'膝盖受伤，预计会缺阵一段时间',
            'important':false
        },{
            'name':'伦纳德',
            'status':'出战存疑',
            'detail':'臀部受伤，周二对阵热火的比赛出战存疑',
            'important':true
        }
    ],
    //洛杉矶湖人
    lakers:[
        {
            'name':'文森特',
            'status':'长期缺阵',
            'detail':'左膝手术，预计会缺阵两个月时间',
            'important':false
        },{
            'name':'詹姆斯',
            'status':'出战',
            'detail':'可以出战周一对阵鹈鹕的比赛',
            'important':true
        },{
            'name':'拉塞尔',
            'status':'缺阵',
            'detail':'臀部受伤，无法出战周一对阵鹈鹕的比赛',
            'important':false
        },{
            'name':'雷迪什',
            'status':'缺阵',
            'detail':'腹股沟拉伤，无法出战周一对阵鹈鹕的比赛',
            'important':false
        },{
            'name':'八村塁',
            'status':'出战存疑',
            'detail':'左小腿受伤，每日观察',
            'important':false
        }
    ],
    //孟菲斯灰熊
    grizzlies:[
        {
            'name':'布兰登.克拉克',
            'status':'长期缺阵',
            'detail':'跟腱受伤，还处在恢复之中，预计新赛季没有这么快回归球队',
            'important':false
        },{
            'name':'亚当斯',
            'status':'长期缺阵',
            'detail':'膝盖手术，2023-2024赛季报销',
            'important':true
        },{
            'name':'肯纳德',
            'status':'出战',
            'detail':'可以出战周一对阵国王的比赛',
            'important':false
        },{
            'name':'德里克.罗斯',
            'status':'出战',
            'detail':'可以出战周一对阵国王的比赛',
            'important':false
        },{
            'name':'莫兰特',
            'status':'出战',
            'detail':'可以出战周一对阵国王的比赛',
            'important':true
        },{
            'name':'康查尔',
            'status':'出战',
            'detail':'可以出战周一对阵国王的比赛',
            'important':false
        }
    ],
    //迈阿密热火
    heat:[
        {
            'name':'巴特勒',
            'status':'缺阵',
            'detail':'右腿受伤，无法出战周二对阵快船的比赛',
            'important':true
        },{
            'name':'约什.理查德森',
            'status':'出战存疑',
            'detail':'背部受伤，周二对阵快船的比赛出战存疑',
            'important':false
        },{
            'name':'克莱布.马丁',
            'status':'缺阵',
            'detail':'脚踝扭伤，无法出战周二对阵快船的比赛',
            'important':false
        },{
            'name':'海史密斯',
            'status':'缺阵',
            'detail':'下巴受伤，无法出战周二对阵快船的比赛',
            'important':false
        },{
            'name':'凯尔.洛瑞',
            'status':'出战存疑',
            'detail':'腿部受伤，周二对阵快船的比赛出战存疑',
            'important':true
        },{
            'name':'德鲁.史密斯',
            'status':'长期缺阵',
            'detail':'膝盖严重受伤，赛季报销',
            'important':false
        }
    ],
    //密尔沃基雄鹿
    bucks:[
        {
            'name':'杰.克劳德',
            'status':'长期缺阵',
            'detail':'腹股沟严重受伤，预计缺阵两个月时间',
            'important':false
        },{
            'name':'比彻姆',
            'status':'出战存疑',
            'detail':'身体不适，周二对阵步行者的比赛出战存疑',
            'important':false
        }
    ],
    //明尼苏达森林狼
    timberwolves:[
        {
            'name':'杰伦.克拉克',
            'status':'长期缺阵',
            'detail':'跟腱受伤，预计至少缺阵新赛季的3个月时间',
            'important':false
        },{
            'name':'唐斯',
            'status':'出战',
            'detail':'可以出战周二对阵尼克斯的比赛',
            'important':true
        }
    ],
    //新奥尔良鹈鹕
    pelicans:[
        {
            'name':'马特.里安',
            'status':'缺阵',
            'detail':'右小腿受伤，还需要缺阵一段时间',
            'important':false
        },{
            'name':'墨菲',
            'status':'缺阵',
            'detail':'左膝受伤，无法出战周一对阵湖人的比赛',
            'important':false
        }
    ],
    //纽约尼克斯
    knicks:[
        {
            'name':'小查理.布朗',
            'status':'缺阵',
            'detail':'腿部受伤，预计会缺阵一段时间',
            'important':false
        },{
            'name':'米切尔.罗宾逊',
            'status':'长期缺阵',
            'detail':'左脚踝严重扭伤，预计缺阵8-10周时间',
            'important':true
        },{
            'name':'西姆斯',
            'status':'缺阵',
            'detail':'脚踝扭伤，预计缺阵1-2周时间',
            'important':false
        },{
            'name':'格里姆斯',
            'status':'出战',
            'detail':'可以出战周二对阵森林狼的比赛',
            'important':false
        },{
            'name':'阿奴诺比',
            'status':'出战',
            'detail':'可以出战周二对阵森林狼的比赛',
            'important':true
        },{
            'name':'弗林',
            'status':'缺阵',
            'detail':'脚踝扭伤，无法出战周二对阵森林狼的比赛',
            'important':false
        },{
            'name':'阿丘瓦',
            'status':'出战',
            'detail':'可以出战周二对阵森林狼的比赛',
            'important':false
        }
    ],
    //俄克拉荷马城雷霆
    thunder:[
        {
            'name':'杰林.威廉姆斯',
            'status':'出战',
            'detail':'可以出战周一对阵篮网的比赛',
            'important':false
        }
    ],
    //奥兰多魔术
    magic:[
        {
            'name':'富尔茨',
            'status':'缺阵',
            'detail':'膝盖肿胀，还需要缺阵一段时间',
            'important':true
        },{
            'name':'英格尔斯',
            'status':'缺阵',
            'detail':'左脚踝扭伤，还需要缺阵一段时间',
            'important':false
        },{
            'name':'艾萨克',
            'status':'缺阵',
            'detail':'右腿筋拉伤，无法出战周一对阵太阳的比赛',
            'important':false
        },{
            'name':'加里.哈里斯',
            'status':'出战',
            'detail':'可以出战周一对阵太阳的比赛',
            'important':false
        },{
            'name':'温德勒.卡特',
            'status':'出战',
            'detail':'可以出战周一对阵太阳的比赛',
            'important':true
        }
    ],
    //费城76人
    seven6ers:[
        {
            'name':'恩比德',
            'status':'出战存疑',
            'detail':'脚踝扭伤，每日观察',
            'important':true
        }
    ],
    //菲尼克斯太阳
    suns:[
        {
            'name':'达米安.李',
            'status':'缺阵',
            'detail':'右膝受伤，预计会缺阵一段时间',
            'important':false
        },{
            'name':'奥科吉',
            'status':'出战',
            'detail':'可以出战周一对阵魔术的比赛',
            'important':false
        },{
            'name':'利特尔',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战周一对阵魔术的比赛',
            'important':false
        }
    ],
    //波特兰开拓者
    blazers:[
        {
            'name':'罗威',
            'status':'长期缺阵',
            'detail':'膝盖严重受伤，至少缺阵2-3个月时间',
            'important':false
        },{
            'name':'维恩莱特',
            'status':'长期缺阵',
            'detail':'膝盖扭伤，预计会缺阵4-6周时间',
            'important':false
        },{
            'name':'夏普',
            'status':'出战存疑',
            'detail':'腹股沟拉伤，周二对阵太阳的比赛出战存疑',
            'important':true
        },{
            'name':'艾顿',
            'status':'缺阵',
            'detail':'右膝受伤，无法出战周二对阵太阳的比赛',
            'important':true
        },{
            'name':'安芬尼.西蒙斯',
            'status':'缺阵',
            'detail':'身体不适，无法出战周二对阵太阳的比赛',
            'important':true
        },{
            'name':'里斯',
            'status':'出战存疑',
            'detail':'背部受伤，周二对阵太阳的比赛出战存疑',
            'important':false
        }
    ],
    //萨克拉门托国王
    kings:[
        {
            'name':'德拉维多瓦',
            'status':'长期缺阵',
            'detail':'做了右手食指骨折手术，归期未定',
            'important':false
        },{
            'name':'赫尔特',
            'status':'出战',
            'detail':'可以出战周一对阵灰熊的比赛',
            'important':false
        }
    ],
    //圣安东尼奥马刺
    spurs:[
        {
            'name':'巴锡',
            'status':'长期缺阵',
            'detail':'左膝ACL受伤，赛季报销',
            'important':false
        },{
            'name':'文班亚马',
            'status':'出战',
            'detail':'可以出战周一对阵凯尔特人的比赛',
            'important':true
        },{
            'name':'格拉汉姆',
            'status':'出战',
            'detail':'可以出战周一对阵凯尔特人的比赛',
            'important':false
        },{
            'name':'科林斯',
            'status':'缺阵',
            'detail':'脚踝扭伤，无法出战周一对阵凯尔特人的比赛',
            'important':false
        }
    ],
    //多伦多猛龙
    raptors:[
        {
            'name':'克洛克',
            'status':'缺阵',
            'detail':'腿部受伤，还需要缺阵一段时间',
            'important':false
        },{
            'name':'坦普尔',
            'status':'缺阵',
            'detail':'脚踝扭伤，还需要缺阵一段时间',
            'important':false
        },{
            'name':'奎克利',
            'status':'出战',
            'detail':'可以出战周二对阵骑士的比赛',
            'important':false
        },{
            'name':'巴雷特',
            'status':'出战',
            'detail':'可以出战周二对阵骑士的比赛',
            'important':true
        }
    ],
    //犹它爵士
    jazz:[
        {
            'name':'丰泰基奥',
            'status':'出战',
            'detail':'可以出战周日对阵热火的比赛',
            'important':false
        }        
    ],
    //华盛顿奇才
    wizards:[
        {
            'name':'约翰尼.戴维斯',
            'status':'缺阵',
            'detail':'颈部受伤，还需要缺阵一段时间',
            'important':false
        },{
            'name':'加里纳利',
            'status':'缺阵',
            'detail':'背部受伤，无法出战周一对阵老鹰的比赛',
            'important':false
        },{
            'name':'泰瑞斯.琼斯',
            'status':'出战',
            'detail':'可以出战周一对阵老鹰的比赛',
            'important':true
        }
    ]   
}

module.exports = nbaData;