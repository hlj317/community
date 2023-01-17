const nbaData = {
    //亚特兰大老鹰
    hawks:[
        {
            'name':'卡佩拉',
            'status':'出战',
            'detail':'小腿受伤，可以出战周二对阵热火的比赛',
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
            'name':'杰伦.布朗',
            'status':'缺阵',
            'detail':'腿部受伤，预计缺阵1-2周时间',
            'important':true
        },{        
            'name':'德里克.怀特',
            'status':'出战',
            'detail':'可以出战周二对阵黄蜂的比赛',
            'important':true
        }
    ],
    //布鲁克林篮网
    nets:[
        {
            'name':'杜兰特',
            'status':'长期缺阵',
            'detail':'右膝扭伤，预计缺阵1个月时间',
            'important':true
        },{
            'name':'本.西蒙斯',
            'status':'出战',
            'detail':'可以出战周三对阵马刺的比赛',
            'important':true
        }
    ],
    //夏洛特黄蜂
    hornets:[
        {
            'name':'海沃德',
            'status':'缺阵',
            'detail':'腿筋拉伤，无法出战周二对阵凯尔特人的比赛',
            'important':true
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
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周一对阵勇士的比赛',
            'important':true
        },{
            'name':'布拉德利',
            'status':'出战',
            'detail':'可以出战周一对阵勇士的比赛',
            'important':false
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
            'name':'迪恩.韦德',
            'status':'缺阵',
            'detail':'肩膀受伤，预计会缺阵数周时间',
            'important':false
        }
    ],
    //达拉斯独行侠
    mavericks:[
        {
            'name':'尼利基纳',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        },{
            'name':'克勒贝尔',
            'status':'缺阵',
            'detail':'右膝受伤，归期未定',
            'important':true
        },{
            'name':'约什.格林',
            'status':'缺阵',
            'detail':'手肘受伤，还需要缺阵一段时间',
            'important':false
        },{
            'name':'芬尼.史密斯',
            'status':'缺阵',
            'detail':'臀部受伤，还需要缺阵一段时间',
            'important':true
        },{
            'name':'伍德',
            'status':'出战',
            'detail':'可以出战周一对阵开拓者的比赛',
            'important':true
        },{
            'name':'东契奇',
            'status':'缺阵',
            'detail':'身体不适，无法出战周一对阵开拓者的比赛',
            'important':true
        },{
            'name':'蒂姆.哈达威',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战周一对阵开拓者的比赛',
            'important':true
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
            'name':'杰夫.格林',
            'status':'长期缺阵',
            'detail':'手指骨裂，至少缺阵一个月时间',
            'important':false
        },{
            'name':'穆雷',
            'status':'出战',
            'detail':'可以出战周三对阵开拓者的比赛',
            'important':true
        },{
            'name':'海兰德',
            'status':'出战存疑',
            'detail':'脚踝受伤，周三对阵开拓者的比赛出战存疑',
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
            'name':'以赛亚.里弗斯',
            'status':'缺阵',
            'detail':'肩膀受伤，预计会缺阵一段时间',
            'important':false
        },{        
            'name':'巴格利',
            'status':'长期缺阵',
            'detail':'手掌受伤，预计缺阵6-8周时间',
            'important':false
        },{        
            'name':'杰伦.杜伦',
            'status':'缺阵',
            'detail':'右脚踝受伤，无法出战周一对阵尼克斯的比赛',
            'important':true
        },{        
            'name':'博扬',
            'status':'缺阵',
            'detail':'身体不适，无法出战周一对阵尼克斯的比赛',
            'important':true
        },{        
            'name':'诺埃尔',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周一对阵尼克斯的比赛',
            'important':false
        }    
    ],
    //金州勇士
    warriors:[
        {
            'name':'杰迈克尔.格林',
            'status':'缺阵',
            'detail':'身体不适，预计会缺阵一段时间',
            'important':false
        },{
            'name':'怀斯曼',
            'status':'缺阵',
            'detail':'脚踝受伤，预计还会缺阵几场比赛',
            'important':false
        },{
            'name':'库明加',
            'status':'缺阵',
            'detail':'右脚受伤，预计还会缺阵几场比赛',
            'important':false
        },{
            'name':'伊戈达拉',
            'status':'缺阵',
            'detail':'臀部受伤，无法出战周二对阵奇才的比赛',
            'important':false
        },{
            'name':'汤普森',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周二对阵奇才的比赛',
            'important':true
        }
    ],
    //休斯顿火箭
    rockets:[
        {
            'name':'小凯文.波特',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周二对阵湖人的比赛',
            'important':true
        }
    ],
    //印第安纳步行者
    pacers:[
        {
            'name':'丹尼尔.泰斯',
            'status':'缺阵',
            'detail':'右膝受伤，归期未定',
            'important':false
        },{
            'name':'比塔泽',
            'status':'出战',
            'detail':'可以出战周二对阵雄鹿的比赛',
            'important':false
        },{
            'name':'特纳',
            'status':'出战',
            'detail':'可以出战周二对阵雄鹿的比赛',
            'important':true
        },{
            'name':'哈里伯顿',
            'status':'缺阵',
            'detail':'膝盖受伤，预计缺阵2周时间',
            'important':true
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
            'name':'肯纳德',
            'status':'缺阵',
            'detail':'右小腿受伤，还需要缺阵一段时间',
            'important':false
        },{
            'name':'乔治',
            'status':'出战存疑',
            'detail':'右腿筋拉伤，周三对阵76人的比赛出战存疑',
            'important':true
        },{
            'name':'沃尔',
            'status':'缺阵',
            'detail':'腿部受伤，至少缺阵两周时间',
            'important':false
        }
    ],
    //洛杉矶湖人
    lakers:[
        {
            'name':'朗尼.沃克',
            'status':'缺阵',
            'detail':'膝盖受伤，预计至少缺阵2周时间',
            'important':true
        },{
            'name':'奥斯汀.里弗斯',
            'status':'缺阵',
            'detail':'腿筋拉伤，预计至少缺阵2周时间',
            'important':true
        },{
            'name':'安东尼.戴维斯',
            'status':'长期缺阵',
            'detail':'腿部受伤，至少还需要缺阵一个月时间',
            'important':true
        },{
            'name':'贝弗利',
            'status':'出战',
            'detail':'可以出战周二对阵火箭的比赛',
            'important':false
        },{
            'name':'詹姆斯',
            'status':'出战存疑',
            'detail':'伤病管理，周二对阵火箭的比赛出战存疑',
            'important':true
        }         
    ],
    //孟菲斯灰熊
    grizzlies:[
        {
            'name':'丹尼.格林',
            'status':'长期缺阵',
            'detail':'膝盖受伤，归期未定',
            'important':false
        },{
            'name':'康查尔',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周二对阵太阳的比赛',
            'important':false
        },{
            'name':'莫兰特',
            'status':'出战',
            'detail':'可以出战周二对阵太阳的比赛',
            'important':true
        },{
            'name':'狄龙.布鲁克斯',
            'status':'出战',
            'detail':'可以出战周二对阵太阳的比赛',
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
            'name':'克莱布.马丁',
            'status':'出战',
            'detail':'可以出战周二对阵老鹰的比赛',
            'important':false
        },{
            'name':'洛瑞',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战周二对阵老鹰的比赛',
            'important':true
        }        
    ],
    //密尔沃基雄鹿
    bucks:[
        {
            'name':'米德尔顿',
            'status':'缺阵',
            'detail':'伤病管理，预计还会缺阵一段时间',
            'important':true
        },{
            'name':'伊巴卡',
            'status':'缺阵',
            'detail':'个人原因，会缺阵一段时间',
            'important':false
        },{
            'name':'英格尔斯',
            'status':'出战存疑',
            'detail':'伤病管理，周三对阵猛龙的比赛出战存疑',
            'important':false
        },{
            'name':'字母哥',
            'status':'出战存疑',
            'detail':'膝盖受伤，周三对阵猛龙的比赛出战存疑',
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
            'name':'麦克劳林',
            'status':'缺阵',
            'detail':'小腿拉伤，还需要缺阵一段时间',
            'important':false
        },{
            'name':'普林斯',
            'status':'出战',
            'detail':'可以出战周二对阵爵士的比赛',
            'important':false
        },{
            'name':'爱德华兹',
            'status':'出战',
            'detail':'可以出战周二对阵爵士的比赛',
            'important':true
        },{
            'name':'戈贝尔',
            'status':'出战',
            'detail':'可以出战周二对阵爵士的比赛',
            'important':true
        }
    ],
    //新奥尔良鹈鹕
    pelicans:[
        {
            'name':'小刘易斯',
            'status':'长期缺阵',
            'detail':'膝盖受伤，归期未定',
            'important':false
        },{
            'name':'英格拉姆',
            'status':'缺阵',
            'detail':'脚趾受伤，至少再缺阵一周时间',
            'important':true
        },{
            'name':'锡安',
            'status':'缺阵',
            'detail':'腿筋拉伤，预计至少缺阵3周时间',
            'important':true
        },{
            'name':'赫伯特.琼斯',
            'status':'缺阵',
            'detail':'背部受伤，无法出战周二对阵骑士的比赛',
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
            'name':'罗兵逊-厄尔',
            'status':'缺阵',
            'detail':'脚踝受伤，预计至少还要缺阵一周时间',
            'important':false
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
            'name':'艾萨克',
            'status':'缺阵',
            'detail':'下放到发展联盟慢慢恢复状态，归期未定',
            'important':false
        },{
            'name':'奥吉吉',
            'status':'缺阵',
            'detail':'膝盖受伤，预计会缺阵一段时间',
            'important':false
        }
    ],
    //费城76人
    seven6ers:[
        {        
            'name':'哈里斯',
            'status':'出战存疑',
            'detail':'膝盖受伤，周一对阵湖人的比赛出战存疑',
            'important':true
        },{        
            'name':'哈登',
            'status':'出战存疑',
            'detail':'伤病管理，周一对阵湖人的比赛出战存疑',
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
            'name':'卡梅伦.约翰逊',
            'status':'长期缺阵',
            'detail':'右膝半月板撕裂，预计缺阵2个月时间',
            'important':true
        },{
            'name':'布克',
            'status':'长期缺阵',
            'detail':'腹股沟受伤，至少缺阵一个月时间',
            'important':true
        },{
            'name':'佩恩',
            'status':'缺阵',
            'detail':'腿部受伤，至少缺阵两周时间',
            'important':false
        },{
            'name':'保罗',
            'status':'缺阵',
            'detail':'臀部受伤，还需要缺阵一段时间',
            'important':true
        },{
            'name':'沙梅特',
            'status':'出战',
            'detail':'可以出战周二对阵灰熊的比赛',
            'important':false
        }
    ],
    //波特兰开拓者
    blazers:[
        {
            'name':'温斯洛',
            'status':'缺阵',
            'detail':'左脚踝受伤，至少缺阵两周时间',
            'important':false
        },{
            'name':'小佩顿',
            'status':'出战存疑',
            'detail':'伤病管理，周三对阵掘金的比赛出战存疑',
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
        },{
            'name':'赫尔特',
            'status':'出战',
            'detail':'腿部受伤，可以出战周一对阵马刺的比赛',
            'important':true
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
            'name':'麦克德莫特',
            'status':'出战存疑',
            'detail':'背部受伤，周三对阵篮网的比赛出战存疑',
            'important':false
        }
    ],
    //多伦多猛龙
    raptors:[
        {
            'name':'奥托.波特',
            'status':'缺阵',
            'detail':'左脚受伤，预计会缺阵一段时间',
            'important':false
        }
    ],
    //犹它爵士
    jazz:[
        {
            'name':'奥利尼克',
            'status':'缺阵',
            'detail':'腿部受伤，还需要缺阵1周时间',
            'important':true
        },{
            'name':'盖伊',
            'status':'出战',
            'detail':'可以出战周二对阵森林狼的比赛',
            'important':false
        },{
            'name':'马尔坎宁',
            'status':'缺阵',
            'detail':'身体不适，无法出战周二对阵森林狼的比赛',
            'important':true
        }                             
    ],
    //华盛顿奇才
    wizards:[
        {
            'name':'比尔',
            'status':'缺阵',
            'detail':'腿筋拉伤，无法出战周二对阵勇士的比赛',
            'important':true
        },{
            'name':'蒙特.莫里斯',
            'status':'出战',
            'detail':'可以出战周二对阵勇士的比赛',
            'important':true
        }
    ]   
}

module.exports = nbaData;