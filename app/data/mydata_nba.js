const nbaData = {
    //亚特兰大老鹰
    hawks:[
        {
            'name':'威斯利.马修斯',
            'status':'缺阵',
            'detail':'小腿受伤，还需要缺阵一段时间',
            'important':false
        }
    ],
    //波士顿凯尔特人
    celtics:[
        {
            'name':'无',
            'status':'全员健康',
            'detail':'全员健康'
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
            'name':'克拉克斯顿',
            'status':'缺阵',
            'detail':'左脚踝受伤，无法出战周六对阵独行侠的比赛',
            'important':true
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
            'status':'出战',
            'detail':'可以出战周日对阵活塞的比赛',
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
            'name':'贾勒特.阿伦',
            'status':'缺阵',
            'detail':'左脚踝受伤，至少还要缺阵两周时间',
            'important':true
        },{
            'name':'加兰',
            'status':'缺阵',
            'detail':'左腿筋拉伤，无法出战周日对阵步行者的比赛',
            'important':true
        },{
            'name':'米切尔',
            'status':'缺阵',
            'detail':'腿筋拉伤，无法出战周日对阵步行者的比赛',
            'important':true
        },{
            'name':'杰罗姆',
            'status':'缺阵',
            'detail':'脚踝扭伤，无法出战周日对阵步行者的比赛',
            'important':false
        }
    ],
    //达拉斯独行侠
    mavericks:[
        {
            'name':'无',
            'status':'全员健康',
            'detail':'全员健康'
        }
    ],
    //丹佛掘金
    nuggets:[
        {
            'name':'钱查尔',
            'status':'长期缺阵',
            'detail':'夏天左膝严重受伤，新赛季归期未定',
            'important':false
        }
    ],
    //底特律活塞
    pistons:[
        {
            'name':'以赛亚.里弗斯',
            'status':'长期缺阵',
            'detail':'左脚踝3级扭伤，预计缺阵6-8周时间',
            'important':false
        },{
            'name':'博扬',
            'status':'缺阵',
            'detail':'右小腿拉伤，至少还需要缺阵4周时间',
            'important':true
        },{
            'name':'蒙特.莫里斯',
            'status':'缺阵',
            'detail':'背部拉伤，至少还需要缺阵3周时间',
            'important':false
        }
    ],
    //金州勇士
    warriors:[
        {
            'name':'追梦.格林',
            'status':'出战',
            'detail':'可以出战周一对阵火箭的比赛',
            'important':true
        },{
            'name':'库里',
            'status':'出战存疑',
            'detail':'左脚受伤，周一对阵火箭的比赛出战存疑',
            'important':true
        },{
            'name':'库明加',
            'status':'出战存疑',
            'detail':'腿部受伤，周一对阵火箭的比赛出战存疑',
            'important':false
        }
    ],
    //休斯顿火箭
    rockets:[
        {
            'name':'塔里.伊森',
            'status':'缺阵',
            'detail':'左腿受伤，预计会缺阵2-3周的时间',
            'important':false
        },{
            'name':'兰代尔',
            'status':'缺阵',
            'detail':'身体不适，预计还会缺阵几场比赛',
            'important':false
        }
    ],
    //印第安纳步行者
    pacers:[
        {
            'name':'哈里伯顿',
            'status':'出战',
            'detail':'可以出战周日对阵骑士的比赛',
            'important':true
        }
    ],
    //洛杉矶快船
    clippers:[
        {
            'name':'曼恩',
            'status':'出战存疑',
            'detail':'脚踝扭伤，周日对阵马刺的比赛出战存疑',
            'important':true
        },{
            'name':'小布兰登.波士顿',
            'status':'缺阵',
            'detail':'左腿受伤，周日对阵马刺的比赛出战存疑',
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
            'name':'阿尔达玛',
            'status':'缺阵',
            'detail':'脚踝扭伤，无法出战周日对阵奇才的比赛',
            'important':false
        },{
            'name':'肯纳德',
            'status':'缺阵',
            'detail':'因为触发脑震荡协议，无法出战周日对阵奇才的比赛',
            'important':false
        }
    ],
    //迈阿密热火
    heat:[
        {
            'name':'海史密斯',
            'status':'缺阵',
            'detail':'腿部受伤，还需要缺阵一段时间',
            'important':false
        },{
            'name':'约什.理查德森',
            'status':'缺阵',
            'detail':'背部受伤，还需要缺阵一段时间',
            'important':false
        },{
            'name':'巴特勒',
            'status':'缺阵',
            'detail':'轮休一场，无法出战周日对阵森林狼的比赛',
            'important':true
        },{
            'name':'乐福',
            'status':'缺阵',
            'detail':'肩膀受伤，无法出战周日对阵森林狼的比赛',
            'important':false
        },{
            'name':'克莱布.马丁',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战周日对阵森林狼的比赛',
            'important':false
        }
    ],
    //密尔沃基雄鹿
    bucks:[
        ,{
            'name':'米德尔顿',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战周一对阵老鹰的比赛',
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
            'name':'麦克丹尼尔斯',
            'status':'缺阵',
            'detail':'小腿受伤，无法出战周日对阵热火的比赛',
            'important':true
        }
    ],
    //新奥尔良鹈鹕
    pelicans:[
        {
            'name':'阿尔瓦拉多',
            'status':'缺阵',
            'detail':'腿部受伤，至少还需要缺阵两周时间',
            'important':false
        },{
            'name':'马绍尔',
            'status':'缺阵',
            'detail':'膝盖受伤，至少还需要缺阵两周时间',
            'important':false
        },{
            'name':'特里.墨菲',
            'status':'长期缺阵',
            'detail':'做了半月板切除手术，新赛季至少缺阵3-4个月时间',
            'important':false
        }
    ],
    //纽约尼克斯
    knicks:[
        {
            'name':'无',
            'status':'全员健康',
            'detail':'全员健康'
        }
    ],
    //俄克拉荷马城雷霆
    thunder:[
        {  
            'name':'杰林.威廉姆斯',
            'status':'缺阵',
            'detail':'腿筋拉伤，至少还要缺阵两周时间',
            'important':false
        },{
            'name':'肯里奇.威廉姆斯',
            'status':'缺阵',
            'detail':'背部受伤，归期未定',
            'important':false
        }
    ],
    //奥兰多魔术
    magic:[
        {
            'name':'凯文.哈里斯',
            'status':'缺阵',
            'detail':'膝盖受伤，还需要缺阵一段时间',
            'important':false
        }
    ],
    //费城76人
    seven6ers:[
        {
            'name':'詹姆斯.哈登',
            'status':'缺阵',
            'detail':'跟球队管理层闹矛盾中，预计会缺阵一段时间，归期未定',
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
            'name':'比尔',
            'status':'缺阵',
            'detail':'背部拉伤，无法出战周日对阵爵士的比赛',
            'important':true
        },{
            'name':'布克',
            'status':'缺阵',
            'detail':'脚趾受伤，无法出战周日对阵爵士的比赛',
            'important':true
        }
    ],
    //波特兰开拓者
    blazers:[
        {
            'name':'维恩莱特',
            'status':'缺阵',
            'detail':'小腿受伤，还需要缺阵一段时间',
            'important':false
        },{
            'name':'安芬尼.西蒙斯',
            'status':'长期缺阵',
            'detail':'手指撕裂，预计缺阵4-6周时间',
            'important':true
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
            'detail':'左小腿受伤，还需要缺阵几场比赛',
            'important':false
        }
    ],
    //圣安东尼奥马刺
    spurs:[
        {
            'name':'无',
            'status':'全员健康',
            'detail':'全员健康'
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
            'name':'阿奴诺比',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周日对阵76人的比赛',
            'important':true
        }
    ],
    //犹它爵士
    jazz:[
        {
            'name':'无',
            'status':'全员健康',
            'detail':'全员健康'
        }                  
    ],
    //华盛顿奇才
    wizards:[
        {
            'name':'沙梅特',
            'status':'缺阵',
            'detail':'大脚趾骨折，预计缺阵2-4周时间',
            'important':false
        },{
            'name':'约翰.戴维斯',
            'status':'缺阵',
            'detail':'左手肘受伤，预计还会缺阵一段时间',
            'important':false
        }
    ]   
}

module.exports = nbaData;