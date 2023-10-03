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
            'name':'小尼克.史密斯',
            'status':'缺阵',
            'detail':'腿部受伤，归期未定',
            'important':false
        },{
            'name':'罗齐尔',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
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
            'name':'贾斯汀.刘易斯',
            'status':'出战存疑',
            'detail':'脚踝受伤，每日观察',
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
        }  
    ],
    //达拉斯独行侠
    mavericks:[
        {
            'name':'东契奇',
            'status':'缺阵',
            'detail':'参加世界杯期间大腿受伤，预计会缺席新赛季训练营和部分季前赛',
            'important':true
        },{
            'name':'格兰特.威廉姆斯',
            'status':'出战存疑',
            'detail':'休赛期刚从凯尔特人转会到独行侠，腿部轻微挫伤，每日观察',
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
        }
    ],
    //底特律活塞
    pistons:[
        {
            'name':'以赛亚.里弗斯',
            'status':'长期缺阵',
            'detail':'左脚踝3级扭伤，预计缺阵6-8周时间',
            'important':false
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
        }
    ],
    //休斯顿火箭
    rockets:[
        {
            'name':'小凯文.波特',
            'status':'预计被裁',
            'detail':'因为个人家暴事件，预计会被球队裁掉，已确定无法回归球队',
            'important':false
        },{
            'name':'泰特',
            'status':'出战存疑',
            'detail':'膝盖受伤，每日观察',
            'important':false
        }
    ],
    //印第安纳步行者
    pacers:[
        {
            'name':'贾雷斯.沃克',
            'status':'出战存疑',
            'detail':'右手肘挫伤，但应该问题不大，预计可以赶上新赛季的训练营',
            'important':false
        }
    ],
    //洛杉矶快船
    clippers:[
        {
            'name':'普利莫',
            'status':'出战存疑',
            'detail':'跟快船签下了一份双向合同，腿部轻微挫伤，每日观察',
            'important':false
        }
    ],
    //洛杉矶湖人
    lakers:[
        {
            'name':'无',
            'status':'全员健康',
            'detail':'全员健康'
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
        }
    ],
    //迈阿密热火
    heat:[
        {
            'name':'无',
            'status':'全员健康',
            'detail':'全员健康'
        }
    ],
    //密尔沃基雄鹿
    bucks:[
        {
            'name':'米德尔顿',
            'status':'出战存疑',
            'detail':'右膝轻微挫伤，每日观察',
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
            'name':'纳兹.里德',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        }
    ],
    //新奥尔良鹈鹕
    pelicans:[
        {
            'name':'阿尔瓦拉多',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        },{
            'name':'小拉里.南斯',
            'status':'出战存疑',
            'detail':'腿部轻微挫伤，每日观察',
            'important':false
        },{
            'name':'英格拉姆',
            'status':'出战存疑',
            'detail':'身体不适，每日观察',
            'important':true
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
            'name':'雅各布.托平',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        },{
            'name':'迪伦.温德勒',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        },{
            'name':'杰里科.西姆斯',
            'status':'出战存疑',
            'detail':'右肩受伤，每日观察',
            'important':false
        },{
            'name':'奎格利',
            'status':'出战存疑',
            'detail':'脚踝轻微扭伤，每日观察',
            'important':false
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
            'status':'出战存疑',
            'detail':'身体状态恢复中，预计不会参加雷霆的训练营',
            'important':false
        },{
            'name':'特雷.曼恩',
            'status':'缺阵',
            'detail':'手指受伤，至少还需要2周的恢复时间',
            'important':false
        },{
            'name':'肯里奇.威廉姆斯',
            'status':'长期缺阵',
            'detail':'手腕手术恢复中，归期未定',
            'important':false
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
            'detail':'跟球队管理层闹矛盾中，没有出现在训练营，归期未定',
            'important':true
        },{
            'name':'哈雷尔',
            'status':'长期缺阵',
            'detail':'遭受ACL伤病，预计2023-2024赛季报销',
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
            'name':'乔丹.德古温',
            'status':'出战存疑',
            'detail':'膝盖受伤，每日观察',
            'important':false
        }
    ],
    //波特兰开拓者
    blazers:[
        {
            'name':'温斯洛',
            'status':'出战存疑',
            'detail':'休赛期接受了左脚踝手术，预计会为新赛季做好准备，每日观察',
            'important':false
        }
    ],
    //萨克拉门托国王
    kings:[
        {
            'name':'乔丹.福特',
            'status':'出战存疑',
            'detail':'跟球队签了双向合同，身体状态恢复中，每日观察',
            'important':false
        },{
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
            'name':'查尔斯.巴斯',
            'status':'出战存疑',
            'detail':'上赛季左髌骨骨折，目前身体恢复中，每日观察',
            'important':false
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
            'name':'小奥托.波特',
            'status':'出战存疑',
            'detail':'脚踝受伤，每日观察',
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
            'name':'沙玛尼奇',
            'status':'出战存疑',
            'detail':'背部受伤，每日观察',
            'important':false
        },{
            'name':'阿巴基',
            'status':'出战存疑',
            'detail':'背部受伤，每日观察',
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
            'name':'加里纳利',
            'status':'出战存疑',
            'detail':'被凯尔特人交易到奇才，目前状态恢复中，每日观察',
            'important':false
        }
    ]   
}

module.exports = nbaData;