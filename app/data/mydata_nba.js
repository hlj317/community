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
            'status':'出战',
            'detail':'可以出战周五对阵黄蜂的比赛',
            'important':true
        },{
            'name':'本.西蒙斯',
            'status':'缺阵',
            'detail':'臀部受伤，预计还要缺阵一段时间',
            'important':true
        },{
            'name':'小丹尼斯.史密斯',
            'status':'缺阵',
            'detail':'背部受伤，无法出战周五对阵黄蜂的比赛',
            'important':false
        },{
            'name':'罗伊斯.奥尼尔',
            'status':'缺阵',
            'detail':'臀部受伤，无法出战周五对阵黄蜂的比赛',
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
            'status':'缺阵',
            'detail':'脚踝严重扭伤，预计会缺阵较长一段时间',
            'important':true
        },{
            'name':'布兰登.米勒',
            'status':'缺阵',
            'detail':'腿部酸痛，无法出战周五对阵篮网的比赛',
            'important':false
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
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周五对阵雄鹿的比赛',
            'important':true
        },{
            'name':'卡鲁索',
            'status':'出战',
            'detail':'可以出战周五对阵雄鹿的比赛',
            'important':true
        },{
            'name':'德罗赞',
            'status':'缺阵',
            'detail':'脚踝扭伤，无法出战周五对阵雄鹿的比赛',
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
            'detail':'脚踝扭伤，还需要缺阵一段时间',
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
            'name':'小哈达威',
            'status':'出战存疑',
            'detail':'背部受伤，周六对阵灰熊的比赛出战存疑',
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
            'name':'贾马尔.默雷',
            'status':'出战存疑',
            'detail':'脚踝扭伤，周六对阵太阳的比赛出战存疑',
            'important':true
        },{
            'name':'阿隆.戈登',
            'status':'出战存疑',
            'detail':'脚后跟受伤，周六对阵太阳的比赛出战存疑',
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
            'name':'小佩顿',
            'status':'缺阵',
            'detail':'右小腿受伤，无法出战周五对阵快船的比赛',
            'important':false
        },{
            'name':'克里斯.保罗',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周五对阵快船的比赛',
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
        },{
            'name':'范弗利特',
            'status':'缺阵',
            'detail':'拇指受伤，无法出战周四对阵掘金的比赛',
            'important':true
        },{
            'name':'泰特',
            'status':'缺阵',
            'detail':'左膝受伤，无法出战周四对阵掘金的比赛',
            'important':false
        }
    ],
    //印第安纳步行者
    pacers:[
        {
            'name':'杰伦.史密斯',
            'status':'缺阵',
            'detail':'脚后跟受伤，预计至少缺阵一周的时间',
            'important':false
        },{
            'name':'TJ.麦克康奈尔',
            'status':'出战',
            'detail':'可以出战周五对阵热火的比赛',
            'important':false
        },{
            'name':'以赛亚.杰克逊',
            'status':'出战',
            'detail':'可以出战周五对阵热火的比赛',
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
        },{
            'name':'鲍威尔',
            'status':'出战存疑',
            'detail':'膝盖受伤，周五对阵勇士的比赛出战存疑',
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
            'name':'雷迪什',
            'status':'缺阵',
            'detail':'腹股沟拉伤，无法出战周五对阵雷霆的比赛',
            'important':false
        },{
            'name':'海斯',
            'status':'缺阵',
            'detail':'肘部拉伤，无法出战周五对阵雷霆的比赛',
            'important':false
        },{
            'name':'勒布朗.詹姆斯',
            'status':'出战',
            'detail':'可以出战周五对阵雷霆的比赛',
            'important':true
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
            'name':'巴特勒',
            'status':'出战',
            'detail':'可以出战周五对阵步行者的比赛',
            'important':true
        },{
            'name':'海史密斯',
            'status':'出战',
            'detail':'可以出战周五对阵步行者的比赛',
            'important':false
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
            'name':'康文顿',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战周五对阵公牛的比赛',
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
            'name':'麦克劳林',
            'status':'长期缺阵',
            'detail':'膝盖扭伤，预计至少缺阵1个月时间',
            'important':false
        },{
            'name':'麦克丹尼尔斯',
            'status':'缺阵',
            'detail':'脚踝扭伤，预计缺阵2-3周时间',
            'important':true
        },{
            'name':'爱德华兹',
            'status':'缺阵',
            'detail':'右臀部受伤，无法出战周五对阵爵士的比赛',
            'important':true
        }
    ],
    //新奥尔良鹈鹕
    pelicans:[
        {
            'name':'马特.里安',
            'status':'小概率出战',
            'detail':'右小腿受伤，小概率可以出战周六对阵马刺的比赛',
            'important':false
        },{
            'name':'特里.墨菲',
            'status':'出战存疑',
            'detail':'半月板受伤，周六对阵马刺的比赛出战存疑',
            'important':false
        },{
            'name':'阿尔瓦拉多',
            'status':'出战存疑',
            'detail':'脚踝扭伤，周六对阵马刺的比赛出战存疑',
            'important':true
        },{
            'name':'小拉里.南斯',
            'status':'长期缺阵',
            'detail':'身右肋骨受伤，预计至少要缺阵4-6周时间',
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
        }
    ],
    //俄克拉荷马城雷霆
    thunder:[
        {
            'name':'杰伦.威廉姆斯',
            'status':'出战',
            'detail':'可以出战周五对阵湖人的比赛',
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
            'detail':'左脚踝受伤，周六对阵奇才的比赛出战存疑',
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
            'status':'出战',
            'detail':'可以出战周六对阵凯尔特人的比赛',
            'important':false
        },{
            'name':'小丹尼尔.豪斯',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周六对阵凯尔特人的比赛',
            'important':false
        },{
            'name':'恩比德',
            'status':'出战存疑',
            'detail':'身体不适，周六对阵凯尔特人的比赛出战存疑',
            'important':true
        },{
            'name':'巴图姆',
            'status':'出战',
            'detail':'可以出战周六对阵凯尔特人的比赛',
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
            'name':'布克',
            'status':'出战存疑',
            'detail':'脚踝扭伤，周六对阵掘金的比赛出战存疑',
            'important':true
        },{
            'name':'格雷森.阿伦',
            'status':'出战',
            'detail':'可以出战周六对阵掘金的比赛',
            'important':false
        },{
            'name':'利特尔',
            'status':'出战',
            'detail':'可以出战周六对阵掘金的比赛',
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
            'name':'基根.默雷',
            'status':'缺阵',
            'detail':'背部受伤，无法出战周四对阵快船的比赛',
            'important':true
        }
    ],
    //圣安东尼奥马刺
    spurs:[
        {
            'name':'文班亚马',
            'status':'缺阵',
            'detail':'轮休一场，无法出战周六对阵鹈鹕的比赛',
            'important':true
        },{
            'name':'麦克德莫特',
            'status':'出战存疑',
            'detail':'身体不适，周六对阵鹈鹕的比赛出战存疑',
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
        }
    ],
    //犹它爵士
    jazz:[
        {
            'name':'马尔坎宁',
            'status':'缺阵',
            'detail':'左腿筋拉伤，无法出战周五对阵森林狼的比赛',
            'important':true
        },{
            'name':'邓恩',
            'status':'缺阵',
            'detail':'个人原因，无法出战周五对阵森林狼的比赛',
            'important':false
        },{
            'name':'克拉克森',
            'status':'缺阵',
            'detail':'腿筋拉伤，无法出战周五对阵森林狼的比赛',
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
            'detail':'膝盖受伤，还需要缺阵一段时间',
            'important':false
        }
    ]   
}

module.exports = nbaData;