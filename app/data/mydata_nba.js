const nbaData = {
    //亚特兰大老鹰
    hawks:[
        {
            'name':'巴夫金',
            'status':'长期缺阵',
            'detail':'拇指骨折，预计缺阵8-10周的时间',
            'important':false
        },{
            'name':'杰伦.约翰逊',
            'status':'长期缺阵',
            'detail':'左手腕骨折，预计至少要缺阵3-4周时间',
            'important':true
        }
    ],
    //波士顿凯尔特人
    celtics:[
        {
            'name':'霍乐迪',
            'status':'出战存疑',
            'detail':'脚踝扭伤，周三对阵公牛的比赛出战存疑',
            'important':true
        },{
            'name':'波尔津吉斯',
            'status':'缺阵',
            'detail':'腿部受伤，预计至少缺阵一周时间',
            'important':true
        }
    ],
    //布鲁克林篮网
    nets:[
        {
            'name':'卡姆.托马斯',
            'status':'小概率出战',
            'detail':'脚踝受伤，小概率可以出战周三对阵猛龙的比赛',
            'important':true
        },{
            'name':'本.西蒙斯',
            'status':'缺阵',
            'detail':'臀部受伤，预计还要缺阵一段时间',
            'important':true
        },{
            'name':'小丹尼斯.史密斯',
            'status':'出战存疑',
            'detail':'背部受伤，周三对阵猛龙的比赛出战存疑',
            'important':false
        },{
            'name':'克拉克斯顿',
            'status':'出战存疑',
            'detail':'脚踝扭伤，周三对阵猛龙的比赛出战存疑',
            'important':true
        },{
            'name':'卡梅伦.约翰逊',
            'status':'出战',
            'detail':'可以出战周三对阵猛龙的比赛',
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
            'name':'科迪.马丁',
            'status':'缺阵',
            'detail':'腿部受伤，预计会缺阵一段时间',
            'important':false
        },{
            'name':'理查德兹',
            'status':'缺阵',
            'detail':'腿部受伤，还需要缺阵一段时间',
            'important':false
        },{
            'name':'拉梅洛.鲍尔',
            'status':'出战存疑',
            'detail':'脚踝扭伤，周三对阵尼克斯的比赛出战存疑',
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
            'status':'出战存疑',
            'detail':'右腿受伤，周三对阵凯尔特人的比赛出战存疑',
            'important':true
        },{
            'name':'卡鲁索',
            'status':'出战存疑',
            'detail':'腿部受伤，周三对阵凯尔特人的比赛出战存疑',
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
            'name':'迪恩.韦德',
            'status':'缺阵',
            'detail':'脚踝扭伤，无法出战周三对阵老鹰的比赛',
            'important':false
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
            'name':'莱福利',
            'status':'出战存疑',
            'detail':'背部受伤，周三对阵火箭的比赛出战存疑',
            'important':true
        },{
            'name':'东契奇',
            'status':'出战',
            'detail':'可以出战周三对阵火箭的比赛',
            'important':true
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
            'name':'贾马尔.默雷',
            'status':'缺阵',
            'detail':'腿筋拉伤，预计还会缺阵一段时间',
            'important':true
        },{
            'name':'阿隆.戈登',
            'status':'缺阵',
            'detail':'脚后跟受伤，无法出战周二对阵快船的比赛',
            'important':true
        },{
            'name':'约基奇',
            'status':'缺阵',
            'detail':'背部受伤，无法出战周二对阵快船的比赛',
            'important':true
        }
    ],
    //底特律活塞
    pistons:[
        {
            'name':'博扬',
            'status':'长期缺阵',
            'detail':'右小腿拉伤，至少还需要缺阵4周时间',
            'important':true
        },{
            'name':'蒙特.莫里斯',
            'status':'缺阵',
            'detail':'背部拉伤，至少还需要缺阵3周时间',
            'important':false
        },{
            'name':'乔.哈里斯',
            'status':'缺阵',
            'detail':'右肩受伤，预计会缺阵1-2周时间',
            'important':false
        }
    ],
    //金州勇士
    warriors:[
        {
            'name':'追梦.格林',
            'status':'缺阵',
            'detail':'殴打戈贝尔，被NBA官方禁赛五场比赛',
            'important':true
        }
    ],
    //休斯顿火箭
    rockets:[
        {
            'name':'阿门.汤普森',
            'status':'缺阵',
            'detail':'脚踝二级扭伤，预计会缺阵一段时间',
            'important':false
        },{
            'name':'奥拉迪波',
            'status':'长期缺阵',
            'detail':'膝盖受伤，归期未定',
            'important':false
        }
    ],
    //印第安纳步行者
    pacers:[
        {
            'name':'内史密斯',
            'status':'出战',
            'detail':'可以出战周二对阵开拓者的比赛',
            'important':false
        }
    ],
    //洛杉矶快船
    clippers:[
        {
            'name':'小布兰登.波士顿',
            'status':'缺阵',
            'detail':'左腿受伤，还会缺阵一段时间',
            'important':false
        },{
            'name':'普拉姆利',
            'status':'缺阵',
            'detail':'膝盖受伤，预计会缺阵一段时间',
            'important':false
        }
    ],
    //洛杉矶湖人
    lakers:[
        {
            'name':'范德比尔特',
            'status':'缺阵',
            'detail':'脚踝受伤，预计至少还要缺阵两周时间',
            'important':false
        },{
            'name':'文森特',
            'status':'缺阵',
            'detail':'膝盖受伤，至少还要缺阵两周时间',
            'important':false
        },{
            'name':'八村塁',
            'status':'缺阵',
            'detail':'腿部受伤，预计至少缺阵一周时间',
            'important':true
        },{
            'name':'勒布朗.詹姆斯',
            'status':'出战',
            'detail':'可以出战周二对阵76人的比赛',
            'important':true
        },{
            'name':'雷迪什',
            'status':'缺阵',
            'detail':'腹股沟拉伤，无法出战周二对阵76人的比赛',
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
            'name':'贾.莫兰特',
            'status':'长期缺阵',
            'detail':'因为休赛期的持枪事件，新赛季被联盟禁赛25场比赛',
            'important':true
        },{
            'name':'亚当斯',
            'status':'长期缺阵',
            'detail':'膝盖手术，2023-2024赛季报销',
            'important':true
        },{
            'name':'拉拉维',
            'status':'缺阵',
            'detail':'左眼受伤，预计缺阵2-3周时间',
            'important':false
        },{
            'name':'迪尔曼',
            'status':'缺阵',
            'detail':'膝盖受伤，还需要缺阵一段时间',
            'important':false
        },{
            'name':'肯纳德',
            'status':'缺阵',
            'detail':'膝盖受伤，预计至少缺阵两周时间',
            'important':false
        },{
            'name':'斯马特',
            'status':'长期缺阵',
            'detail':'左脚受伤，预计缺阵3-5周时间',
            'important':true
        }
    ],
    //迈阿密热火
    heat:[
        {
            'name':'希罗',
            'status':'缺阵',
            'detail':'脚踝2级扭伤，预计缺阵2-3周的时间',
            'important':true
        },{
            'name':'邓肯.罗宾逊',
            'status':'出战',
            'detail':'可以出战周三对阵雄鹿的比赛',
            'important':true
        },{
            'name':'巴特勒',
            'status':'出战存疑',
            'detail':'脚踝扭伤，周三对阵雄鹿的比赛出战存疑',
            'important':true
        },{
            'name':'海史密斯',
            'status':'出战存疑',
            'detail':'背部受伤，周三对阵雄鹿的比赛出战存疑',
            'important':false
        },{
            'name':'阿德巴约',
            'status':'出战',
            'detail':'可以出战周三对阵雄鹿的比赛',
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
            'name':'米德尔顿',
            'status':'出战存疑',
            'detail':'肌腱拉伤，周三对阵热火的比赛出战存疑',
            'important':true
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
            'name':'麦克劳林',
            'status':'长期缺阵',
            'detail':'膝盖扭伤，预计至少缺阵1个月时间',
            'important':false
        },{
            'name':'麦克丹尼尔斯',
            'status':'缺阵',
            'detail':'脚踝扭伤，预计缺阵2-3周时间',
            'important':true
        }
    ],
    //新奥尔良鹈鹕
    pelicans:[
        {
            'name':'马特.里安',
            'status':'缺阵',
            'detail':'右小腿受伤，预计缺阵10-14天时间',
            'important':false
        },{
            'name':'特里.墨菲',
            'status':'长期缺阵',
            'detail':'做了半月板切除手术，新赛季至少缺阵3-4个月时间',
            'important':false
        },{
            'name':'CJ.麦科勒姆',
            'status':'缺阵',
            'detail':'右肺病情有所好转，无法出战周二对阵爵士的比赛',
            'important':true
        },{
            'name':'锡安',
            'status':'出战',
            'detail':'可以出战周二对阵爵士的比赛',
            'important':true
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
            'status':'出战',
            'detail':'可以出战周三对阵黄蜂的比赛',
            'important':true
        }
    ],
    //俄克拉荷马城雷霆
    thunder:[
        {
            'name':'杰伦.威廉姆斯',
            'status':'出战',
            'detail':'可以出战周三对阵森林狼的比赛',
            'important':true
        }
    ],
    //奥兰多魔术
    magic:[
        {
            'name':'温德勒.卡特',
            'status':'长期缺阵',
            'detail':'左手掌骨裂，归期未定',
            'important':true
        },{
            'name':'富尔茨',
            'status':'缺阵',
            'detail':'膝盖肿胀，预计还需要缺阵一段时间',
            'important':true
        },{
            'name':'艾萨克',
            'status':'出战存疑',
            'detail':'左脚踝受伤，每日观察',
            'important':false
        }
    ],
    //费城76人
    seven6ers:[
        {
            'name':'乌布雷',
            'status':'缺阵',
            'detail':'被摩托车撞击车祸，预计还要缺阵一周时间',
            'important':false
        },{
            'name':'斯普林格',
            'status':'缺阵',
            'detail':'身体不适，无法出战周二对阵湖人的比赛',
            'important':false
        },{
            'name':'小丹尼尔.豪斯',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周二对阵湖人的比赛',
            'important':false
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
            'name':'比尔',
            'status':'缺阵',
            'detail':'背部受伤，预计需要缺阵三周时间',
            'important':true
        },{
            'name':'渡边雄太',
            'status':'出战存疑',
            'detail':'腿部受伤，周一对阵尼克斯的比赛出战存疑',
            'important':false
        },{
            'name':'尤班克斯',
            'status':'出战',
            'detail':'可以出战周一对阵尼克斯的比赛',
            'important':false
        },{
            'name':'杜兰特',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周一对阵尼克斯的比赛',
            'important':true
        },{
            'name':'格雷森.阿伦',
            'status':'缺阵',
            'detail':'身体不适，无法出战周一对阵尼克斯的比赛',
            'important':false
        }
    ],
    //波特兰开拓者
    blazers:[
        {
            'name':'安芬尼.西蒙斯',
            'status':'长期缺阵',
            'detail':'手指撕裂，预计缺阵4-6周时间',
            'important':true
        },{
            'name':'罗威',
            'status':'长期缺阵',
            'detail':'膝盖严重受伤，至少缺阵2-3个月时间',
            'important':false
        },{
            'name':'维恩莱特',
            'status':'长期缺阵',
            'detail':'膝盖扭伤，预计会缺阵4-6周时间',
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
            'name':'莱恩',
            'status':'长期缺阵',
            'detail':'脚踝严重扭伤，预计缺阵8周时间',
            'important':false
        },{
            'name':'科恩.艾丽斯',
            'status':'缺阵',
            'detail':'脚踝扭伤，预计会缺阵一段时间',
            'important':false
        },{
            'name':'基根.默雷',
            'status':'小概率出战',
            'detail':'小概率可以出战周三对阵勇士的比赛',
            'important':true
        }
    ],
    //圣安东尼奥马刺
    spurs:[
        {
            'name':'索汉',
            'status':'出战存疑',
            'detail':'膝盖受伤，每日观察',
            'important':true
        }
    ],
    //多伦多猛龙
    raptors:[
        {
            'name':'克洛克',
            'status':'缺阵',
            'detail':'腿部受伤，还需要缺阵一段时间',
            'important':false
        }
    ],
    //犹它爵士
    jazz:[
        {
            'name':'马尔坎宁',
            'status':'缺阵',
            'detail':'左腿筋拉伤，无法出战周二对阵鹈鹕的比赛',
            'important':true
        },{
            'name':'克拉克森',
            'status':'出战',
            'detail':'可以出战周二对阵鹈鹕的比赛',
            'important':true
        }                 
    ],
    //华盛顿奇才
    wizards:[
        {
            'name':'迪朗.赖特',
            'status':'长期缺阵',
            'detail':'膝盖严重扭伤，预计缺阵4-6周时间',
            'important':false
        },{
            'name':'罗林斯',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战周日对阵老鹰的比赛',
            'important':false
        },{
            'name':'乔丹.普尔',
            'status':'出战',
            'detail':'可以出战周二对阵活塞的比赛',
            'important':true
        }
    ]   
}

module.exports = nbaData;