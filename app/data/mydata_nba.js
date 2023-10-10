const nbaData = {
    //亚特兰大老鹰
    hawks:[
        {
            'name':'无',
            'status':'全员健康',
            'detail':'全员健康'
        }
    ],
    //波士顿凯尔特人
    celtics:[
        {
            'name':'塔图姆',
            'status':'缺阵',
            'detail':'轮休一场，无法出战周二对阵尼克斯的季前赛',
            'important':true
        },{
            'name':'杰伦.布朗',
            'status':'缺阵',
            'detail':'轮休一场，无法出战周二对阵尼克斯的季前赛',
            'important':true
        },{
            'name':'德里克.怀特',
            'status':'缺阵',
            'detail':'轮休一场，无法出战周二对阵尼克斯的季前赛',
            'important':true
        },{
            'name':'波尔津吉斯',
            'status':'缺阵',
            'detail':'轮休一场，无法出战周二对阵尼克斯的季前赛',
            'important':true
        },{
            'name':'AI.霍福德',
            'status':'缺阵',
            'detail':'轮休一场，无法出战周二对阵尼克斯的季前赛',
            'important':true
        },{
            'name':'霍乐迪',
            'status':'缺阵',
            'detail':'轮休一场，无法出战周二对阵尼克斯的季前赛',
            'important':true
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
            'name':'卡梅伦.约翰逊',
            'status':'缺阵',
            'detail':'左小腿拉伤，预计会缺席新赛季训练营和部分季前赛，归期未定',
            'important':true
        }
    ],
    //夏洛特黄蜂
    hornets:[
        {
            'name':'凯.琼斯',
            'status':'缺阵',
            'detail':'个人原因，暂时离开球队，归期未定',
            'important':false
        },{
            'name':'布克奈特',
            'status':'缺阵',
            'detail':'膝盖受伤，预计会缺阵一段时间',
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
            'detail':'左脚踝受伤，至少还要缺阵两周时间，预计季前赛都不会打',
            'important':true
        }  
    ],
    //达拉斯独行侠
    mavericks:[
        {
            'name':'赛斯.库里',
            'status':'出战存疑',
            'detail':'身体不适，周三对阵皇家马德里的季前赛出战存疑',
            'important':false
        },{
            'name':'马基夫.莫里斯',
            'status':'出战存疑',
            'detail':'左脚踝受伤，周三对阵皇家马德里的季前赛出战存疑',
            'important':false
        },{
            'name':'凯里.欧文',
            'status':'缺阵',
            'detail':'腹股沟受伤，无法出战周三对阵皇家马德里的季前赛',
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
            'name':'迈克尔.波特',
            'status':'缺阵',
            'detail':'脚踝受伤，预计还会缺阵一段时间',
            'important':true
        },{
            'name':'贾马尔.默里',
            'status':'出战存疑',
            'detail':'腿筋拉伤，周三对阵太阳的季前赛出战存疑',
            'important':true
        },{
            'name':'布劳恩',
            'status':'出战存疑',
            'detail':'小腿受伤，周三对阵太阳的季前赛出战存疑',
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
            'detail':'右小腿拉伤，无法出战周一对阵太阳的季前赛',
            'important':true
        }
    ],
    //金州勇士
    warriors:[
        {
            'name':'约瑟夫',
            'status':'缺阵',
            'detail':'后背拉伤，至少缺阵2周时间，估计赶不上新赛季季前赛了',
            'important':false
        },{
            'name':'追梦.格林',
            'status':'缺阵',
            'detail':'左脚踝受伤，至少缺阵2周时间，估计赶不上新赛季季前赛了',
            'important':true
        },{
            'name':'麦克鲁德',
            'status':'缺阵',
            'detail':'脑震荡保护协议，预计会缺阵新赛季的前几场季前赛',
            'important':false
        }
    ],
    //休斯顿火箭
    rockets:[
        {
            'name':'小凯文.波特',
            'status':'预计被裁',
            'detail':'因为个人家暴事件，预计会被球队裁掉，已确定无法回归球队',
            'important':false
        }
    ],
    //印第安纳步行者
    pacers:[
        {
            'name':'内姆布哈德',
            'status':'缺阵',
            'detail':'颈部受伤，无法出战周一对阵灰熊的季前赛和周三对阵火箭的比赛',
            'important':false
        },{
            'name':'丹尼尔.泰斯',
            'status':'大概率出战',
            'detail':'大概率可以出战周三对阵火箭的比赛',
            'important':false
        },{
            'name':'哈里伯顿',
            'status':'大概率出战',
            'detail':'大概率可以出战周三对阵火箭的比赛',
            'important':true
        }
    ],
    //洛杉矶快船
    clippers:[
        {
            'name':'普利莫',
            'status':'出战存疑',
            'detail':'跟快船签下了一份双向合同，腿部轻微挫伤，每日观察',
            'important':false
        },{
            'name':'威斯布鲁克',
            'status':'出战',
            'detail':'可以出战周三对阵爵士的季前赛',
            'important':true
        },{
            'name':'马库斯.莫里斯',
            'status':'缺阵',
            'detail':'腹股沟受伤，无法出战周三对阵爵士的季前赛',
            'important':false
        },{
            'name':'小布兰登.波士顿',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战周三对阵爵士的季前赛',
            'important':false
        }
    ],
    //洛杉矶湖人
    lakers:[
        {
            'name':'詹姆斯',
            'status':'出战',
            'detail':'可以出战周二对阵篮网的季前赛',
            'important':true
        },{
            'name':'里弗斯',
            'status':'出战',
            'detail':'可以出战周二对阵篮网的季前赛',
            'important':true
        },{
            'name':'雷迪什',
            'status':'缺阵',
            'detail':'脚踝受伤，无法周二对阵篮网的季前赛',
            'important':false
        },{
            'name':'范德比尔特',
            'status':'缺阵',
            'detail':'脚踝受伤，无法周二对阵篮网的季前赛',
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
            'name':'斯马特',
            'status':'出战存疑',
            'detail':'腹部受伤，周三对阵雄鹿的季前赛出战存疑',
            'important':true
        }
    ],
    //迈阿密热火
    heat:[
        {
            'name':'凯尔布.马丁',
            'status':'出战存疑',
            'detail':'左膝受伤，周三对阵黄蜂的比赛出战存疑',
            'important':false
        }
    ],
    //密尔沃基雄鹿
    bucks:[
        {
            'name':'米德尔顿',
            'status':'大概率出战',
            'detail':'大概率出战可以出战周三对阵灰熊的季前赛',
            'important':true
        },{
            'name':'利拉德',
            'status':'大概率出战',
            'detail':'大概率出战可以出战周三对阵灰熊的季前赛',
            'important':true
        },{
            'name':'字母哥',
            'status':'大概率出战',
            'detail':'大概率出战可以出战周三对阵灰熊的季前赛',
            'important':true
        },{
            'name':'AJ.格林',
            'status':'大概率出战',
            'detail':'大概率出战可以出战周三对阵灰熊的季前赛',
            'important':false
        },{
            'name':'卡梅隆.佩恩',
            'status':'大概率出战',
            'detail':'大概率出战可以出战周三对阵灰熊的季前赛',
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
            'name':'爱德华兹',
            'status':'出战',
            'detail':'可以出战周日对阵独行侠的季前赛',
            'important':true
        },{
            'name':'麦克丹尼尔斯',
            'status':'缺阵',
            'detail':'左小腿拉伤，无法出战周日对阵独行侠的季前赛',
            'important':true
        }
    ],
    //新奥尔良鹈鹕
    pelicans:[
        {
            'name':'阿尔瓦拉多',
            'status':'大概率出战',
            'detail':'大概率可以出战周三对阵魔术的比赛',
            'important':false
        },{
            'name':'小拉里.南斯',
            'status':'大概率出战',
            'detail':'大概率可以出战周三对阵魔术的比赛',
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
            'name':'迪伦.温德勒',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        },{
            'name':'哈特',
            'status':'缺阵',
            'detail':'轮休一场，无法出战周二对阵凯尔特人的季前赛',
            'important':true
        }
    ],
    //俄克拉荷马城雷霆
    thunder:[
        {
            'name':'波库',
            'status':'长期缺阵',
            'detail':'胳膊严重扭伤，预计至少缺阵6周时间',
            'important':false
        },{
            'name':'奥拉迪波',
            'status':'缺阵',
            'detail':'身体状态恢复中，预计不会参加雷霆的训练营',
            'important':false
        },{
            'name':'亚历山大',
            'status':'缺阵',
            'detail':'轮休一场，无法出战周二对阵马刺的季前赛',
            'important':true
        }
    ],
    //奥兰多魔术
    magic:[
        {
            'name':'无',
            'status':'全员健康',
            'detail':'全员健康'
        }
    ],
    //费城76人
    seven6ers:[
        {
            'name':'詹姆斯.哈登',
            'status':'缺阵',
            'detail':'跟球队管理层闹矛盾中，无法出战周一对阵凯尔特人的季前赛',
            'important':true
        },{
            'name':'哈雷尔',
            'status':'长期缺阵',
            'detail':'遭受ACL伤病，预计2023-2024赛季报销',
            'important':false
        },{
            'name':'恩比德',
            'status':'缺阵',
            'detail':'轮休一场，无法出战周一对阵凯尔特人的季前赛',
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
            'name':'古德温',
            'status':'缺阵',
            'detail':'腿筋拉伤，无法出战周三对阵掘金的季前赛',
            'important':false
        },{
            'name':'维恩莱特',
            'status':'缺阵',
            'detail':'小腿受伤，无法出战周三对阵掘金的季前赛',
            'important':false
        }
    ],
    //波特兰开拓者
    blazers:[
        {
            'name':'无',
            'status':'全员健康',
            'detail':'全员健康'
        }
    ],
    //萨克拉门托国王
    kings:[
        {
            'name':'德拉维多瓦',
            'status':'长期缺阵',
            'detail':'做了右手食指骨折手术，归期未定',
            'important':false
        }
    ],
    //圣安东尼奥马刺
    spurs:[
        {
            'name':'格拉汉姆',
            'status':'缺阵',
            'detail':'因为被指控驾驶事故，联盟停赛两场',
            'important':false
        },{
            'name':'索汉',
            'status':'缺阵',
            'detail':'轮休一场，无法出战周二对阵雷霆的季前赛',
            'important':true
        },{
            'name':'KJ.约翰逊',
            'status':'缺阵',
            'detail':'全身酸痛，无法出战周二对阵雷霆的季前赛',
            'important':true
        }
    ],
    //多伦多猛龙
    raptors:[
        {
            'name':'科洛科',
            'status':'缺阵',
            'detail':'身体不适，预计不会参加新赛季猛龙队的训练营',
            'important':false
        },{
            'name':'小杰夫.道丁',
            'status':'出战存疑',
            'detail':'脚踝受伤，每日观察',
            'important':false
        },{
            'name':'小罗恩.哈珀',
            'status':'出战存疑',
            'detail':'刚跟球队签订了一份双向合同，肩膀受伤，每日观察',
            'important':false
        },{
            'name':'阿丘瓦',
            'status':'缺阵',
            'detail':'腹股沟拉伤，无法出战周一对阵国王的季前赛',
            'important':false
        },{
            'name':'小奥托.波特',
            'status':'缺阵',
            'detail':'脚趾拉伤，无法出战周一对阵国王的季前赛',
            'important':false
        }
    ],
    //犹它爵士
    jazz:[
        {
            'name':'约翰尼.朱赞',
            'status':'出战存疑',
            'detail':'股四头肌受伤，每日观察',
            'important':false
        },{
            'name':'豪瑟',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        }                   
    ],
    //华盛顿奇才
    wizards:[
        {
            'name':'加福德',
            'status':'缺阵',
            'detail':'在最近的一场热身赛中肘部受伤，预计缺阵2-4周时间',
            'important':true
        },{
            'name':'沙梅特',
            'status':'缺阵',
            'detail':'大脚趾骨折，预计缺阵2-4周时间',
            'important':false
        },{
            'name':'小鲍德温',
            'status':'出战存疑',
            'detail':'右膝酸痛，周三对阵坎斯大班的季前赛出战存疑',
            'important':false
        },{
            'name':'阿夫迪亚',
            'status':'出战存疑',
            'detail':'背部受伤，周三对阵坎斯大班的季前赛出战存疑',
            'important':false
        },{
            'name':'泰.杰布森',
            'status':'出战存疑',
            'detail':'腹股沟受伤，周三对阵坎斯大班的季前赛出战存疑',
            'important':false
        }
    ]   
}

module.exports = nbaData;