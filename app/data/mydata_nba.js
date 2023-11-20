const nbaData = {
    //亚特兰大老鹰
    hawks:[
        {
            'name':'巴夫金',
            'status':'长期缺阵',
            'detail':'拇指骨折，预计缺阵8-10周的时间',
            'important':false
        }
    ],
    //波士顿凯尔特人
    celtics:[
        {
            'name':'克塔',
            'status':'缺阵',
            'detail':'腿部受伤，预计会缺阵一段时间',
            'important':false
        }
    ],
    //布鲁克林篮网
    nets:[
        {
            'name':'达里克.怀特黑德',
            'status':'缺阵',
            'detail':'腿部受伤，预计还会缺阵一段时间，归期未定',
            'important':false
        },{
            'name':'卡姆.托马斯',
            'status':'缺阵',
            'detail':'脚踝受伤，至少缺阵两周时间',
            'important':true
        },{
            'name':'本.西蒙斯',
            'status':'缺阵',
            'detail':'臀部受伤，预计还要缺阵一段时间',
            'important':true
        },{
            'name':'小丹尼斯.史密斯',
            'status':'缺阵',
            'detail':'背部受伤，无法出战周一对阵76人的比赛',
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
            'name':'罗齐尔',
            'status':'缺阵',
            'detail':'腿部受伤，预计还会缺阵一段时间',
            'important':true
        },{
            'name':'理查德兹',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周二对阵凯尔特人的比赛',
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
            'name':'达伦.特里',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战周日对阵热火的比赛',
            'important':false
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
            'name':'奥克罗',
            'status':'缺阵',
            'detail':'左膝受伤，还需要缺阵一段时间',
            'important':false
        },{
            'name':'米切尔',
            'status':'缺阵',
            'detail':'右腿筋拉伤，无法出战周一对阵掘金的比赛',
            'important':true
        },{
            'name':'勒维尔',
            'status':'缺阵',
            'detail':'身体不适，无法出战周一对阵掘金的比赛',
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
            'name':'赛斯.库里',
            'status':'缺阵',
            'detail':'右臀受伤，无法出战周一对阵国王的比赛',
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
            'status':'缺阵',
            'detail':'腿筋拉伤，预计还会缺阵一段时间',
            'important':true
        }
    ],
    //底特律活塞
    pistons:[
        {
            'name':'以赛亚.里弗斯',
            'status':'出战存疑',
            'detail':'脚踝扭伤，周二对阵掘金的比赛出战存疑',
            'important':false
        },{
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
        },{
            'name':'杰伦.杜伦',
            'status':'出战存疑',
            'detail':'脚踝受伤，周二对阵掘金的比赛出战存疑',
            'important':true
        },{
            'name':'基里安.海耶斯',
            'status':'出战存疑',
            'detail':'肩膀受伤，周二对阵掘金的比赛出战存疑',
            'important':true
        }
    ],
    //金州勇士
    warriors:[
        {
            'name':'追梦.格林',
            'status':'缺阵',
            'detail':'殴打戈贝尔，被NBA官方禁赛五场比赛',
            'important':true
        },{
            'name':'小加里.佩顿',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战周二对阵火箭的比赛',
            'important':false
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
            'name':'伊森',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周二对阵勇士的比赛',
            'important':false
        }
    ],
    //印第安纳步行者
    pacers:[
        {
            'name':'内姆布哈德',
            'status':'缺阵',
            'detail':'背部受伤，无法出战周一对阵魔术的比赛',
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
            'name':'勒布朗.詹姆斯',
            'status':'出战',
            'detail':'可以出战周一对阵火箭的比赛',
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
            'name':'德里克.罗斯',
            'status':'缺阵',
            'detail':'左膝酸痛，无法出战周日对阵马刺的比赛',
            'important':false
        },{
            'name':'拉拉维',
            'status':'缺阵',
            'detail':'左眼受伤，无法出战周日对阵马刺的比赛',
            'important':false
        },{
            'name':'迪尔曼',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战周日对阵马刺的比赛',
            'important':false
        },{
            'name':'肯纳德',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战周日对阵马刺的比赛',
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
            'name':'克莱布.马丁',
            'status':'缺阵',
            'detail':'膝盖受伤，还需要缺阵一段时间',
            'important':false
        },{
            'name':'希罗',
            'status':'缺阵',
            'detail':'脚踝2级扭伤，预计缺阵2-3周的时间',
            'important':true
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
            'name':'克里斯.利文斯顿',
            'status':'缺阵',
            'detail':'脚踝扭伤，还需要缺阵一段时间',
            'important':false
        },{
            'name':'比彻姆',
            'status':'缺阵',
            'detail':'脚踝扭伤，无法出战周二对阵奇才的比赛',
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
        }
    ],
    //新奥尔良鹈鹕
    pelicans:[
        {
            'name':'阿尔瓦拉多',
            'status':'出战存疑',
            'detail':'腿部受伤，周二对阵国王的比赛出战存疑',
            'important':false
        },{
            'name':'马特.里安',
            'status':'出战存疑',
            'detail':'轮休一天，二对阵国王的比赛出战存疑',
            'important':false
        },{
            'name':'特里.墨菲',
            'status':'长期缺阵',
            'detail':'做了半月板切除手术，新赛季至少缺阵3-4个月时间',
            'important':false
        },{
            'name':'CJ.麦科勒姆',
            'status':'缺阵',
            'detail':'检查出右肺出了问题，归期未定',
            'important':true
        },{
            'name':'小拉里.南斯',
            'status':'缺阵',
            'detail':'右肋骨受伤，预计缺阵10-14天',
            'important':false
        }
    ],
    //纽约尼克斯
    knicks:[
        {
            'name':'格雷姆斯',
            'status':'出战存疑',
            'detail':'左手腕受伤，周二对阵森林狼的比赛出战存疑',
            'important':true
        },{
            'name':'富尼耶',
            'status':'出战存疑',
            'detail':'脚踝受伤，周二对阵森林狼的比赛出战存疑',
            'important':false
        }
    ],
    //俄克拉荷马城雷霆
    thunder:[
        {
            'name':'杰伦.威廉姆斯',
            'status':'缺阵',
            'detail':'臀部受伤，无法出战周一对阵开拓者的比赛',
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
        }
    ],
    //费城76人
    seven6ers:[
        {
            'name':'巴图姆',
            'status':'出战',
            'detail':'可以出战周一对阵篮网的比赛',
            'important':false
        },{
            'name':'恩比德',
            'status':'出战',
            'detail':'可以出战周一对阵篮网的比赛',
            'important':true
        },{
            'name':'乌布雷',
            'status':'长期缺阵',
            'detail':'被摩托车撞击车祸，归期未定',
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
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周一对阵爵士的比赛',
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
            'name':'亨德森',
            'status':'缺阵',
            'detail':'右脚踝扭伤，至少还要缺阵两周时间',
            'important':true
        },{
            'name':'罗威',
            'status':'长期缺阵',
            'detail':'膝盖严重受伤，至少缺阵2-3个月时间',
            'important':false
        },{
            'name':'布罗格登',
            'status':'缺阵',
            'detail':'左腿筋拉伤，还需要缺阵一段时间',
            'important':true
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
            'name':'莱尔斯',
            'status':'缺阵',
            'detail':'左小腿受伤，无法出战周二对阵鹈鹕的比赛',
            'important':false
        },{
            'name':'莱恩',
            'status':'缺阵',
            'detail':'脚踝扭伤，无法出战周二对阵鹈鹕的比赛',
            'important':false
        },{
            'name':'赫尔特',
            'status':'出战存疑',
            'detail':'脚踝扭伤，周二对阵鹈鹕的比赛出战存疑',
            'important':false
        }
    ],
    //圣安东尼奥马刺
    spurs:[
        {
            'name':'瓦塞尔',
            'status':'小概率出战',
            'detail':'腹股沟受伤，小概率可以出战周二对阵快船的比赛',
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
            'name':'凯斯勒',
            'status':'缺阵',
            'detail':'左手肘受伤，预计至少缺阵2周时间',
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
            'name':'约翰尼.戴维斯',
            'status':'出战存疑',
            'detail':'手肘受伤，周二对阵雄鹿的比赛出战存疑',
            'important':false
        }
    ]   
}

module.exports = nbaData;