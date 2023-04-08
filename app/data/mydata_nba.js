const nbaData = {
    //亚特兰大老鹰
    hawks:[
        {
            'name':'亨特',
            'status':'出战',
            'detail':'可以出战周六对阵76人的比赛',
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
            'name':'布罗格登',
            'status':'缺阵',
            'detail':'背部受伤，无法出战周六对阵猛龙的比赛',
            'important':false
        },{        
            'name':'斯马特',
            'status':'缺阵',
            'detail':'颈部受伤，无法出战周六对阵猛龙的比赛',
            'important':true
        },{        
            'name':'杰伦.布朗',
            'status':'缺阵',
            'detail':'手指受伤，无法出战周六对阵猛龙的比赛',
            'important':true
        }
    ],
    //布鲁克林篮网
    nets:[
        {
            'name':'本.西蒙斯',
            'status':'缺阵',
            'detail':'膝盖受伤，还需要缺阵一段时间',
            'important':true
        },{
            'name':'芬尼-史密斯',
            'status':'出战',
            'detail':'可以出战周六对阵魔术的比赛',
            'important':false
        }
    ],
    //夏洛特黄蜂
    hornets:[
        {
            'name':'拉梅洛.鲍尔',
            'status':'长期缺阵',
            'detail':'脚踝严重受伤，本赛季报销',
            'important':true
        },{
            'name':'科迪.马丁',
            'status':'缺阵',
            'detail':'膝盖受伤，预计会缺阵一段时间',
            'important':false
        },{
            'name':'罗齐尔',
            'status':'缺阵',
            'detail':'脚踝受伤，还需要缺阵一段时间',
            'important':true
        },{
            'name':'乌布雷',
            'status':'缺阵',
            'detail':'伤病管理，还需要缺阵一段时间',
            'important':false
        },{
            'name':'海沃德',
            'status':'缺阵',
            'detail':'肋骨受伤，还需要缺阵一段时间',
            'important':true
        },{
            'name':'PJ.华盛顿',
            'status':'缺阵',
            'detail':'身体不适，还需要缺阵一段时间',
            'important':true
        },{
            'name':'丹尼斯.史密斯',
            'status':'缺阵',
            'detail':'身体不适，还需要缺阵一段时间',
            'important':false
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
            'name':'卡鲁索',
            'status':'出战',
            'detail':'可以出战周六对阵独行侠的比赛',
            'important':false
        },{
            'name':'德罗赞',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周六对阵独行侠的比赛',
            'important':true
        },{
            'name':'拉文',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周六对阵独行侠的比赛',
            'important':true
        },{
            'name':'贝弗利',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周六对阵独行侠的比赛',
            'important':false
        }
    ],
    //克利夫兰骑士
    cavaliers:[
        {
            'name':'温德勒',
            'status':'缺阵',
            'detail':'腿部受伤，预计会缺阵一段时间',
            'important':false
        },{
            'name':'奥克罗',
            'status':'缺阵',
            'detail':'膝盖受伤，预计会缺阵一段时间',
            'important':false
        },{
            'name':'阿伦',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周五对阵魔术的比赛',
            'important':true
        },{
            'name':'加兰',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周五对阵魔术的比赛',
            'important':true
        },{
            'name':'米切尔',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周五对阵魔术的比赛',
            'important':true
        },{
            'name':'阿伦',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周五对阵魔术的比赛',
            'important':true
        },{
            'name':'勒维尔',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周五对阵魔术的比赛',
            'important':false
        }
    ],
    //达拉斯独行侠
    mavericks:[
        {
            'name':'尼利基纳',
            'status':'出战存疑',
            'detail':'膝盖受伤，每日观察',
            'important':false
        },{
            'name':'东契奇',
            'status':'出战',
            'detail':'可以出战周六对阵公牛的比赛',
            'important':true
        },{
            'name':'欧文',
            'status':'出战',
            'detail':'可以出战周六对阵公牛的比赛',
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
            'name':'约基奇',
            'status':'出战存疑',
            'detail':'伤病管理，周六对阵爵士的比赛出战存疑',
            'important':true
        },{
            'name':'贾马尔.穆雷',
            'status':'出战存疑',
            'detail':'伤病管理，周六对阵爵士的比赛出战存疑',
            'important':true
        },{
            'name':'小迈克尔.波特',
            'status':'出战存疑',
            'detail':'伤病管理，周六对阵爵士的比赛出战存疑',
            'important':false
        },{
            'name':'阿隆.戈登',
            'status':'出战存疑',
            'detail':'伤病管理，周六对阵爵士的比赛出战存疑',
            'important':true
        },{
            'name':'波普',
            'status':'出战存疑',
            'detail':'伤病管理，周六对阵爵士的比赛出战存疑',
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
            'name':'斯图尔特',
            'status':'缺阵',
            'detail':'腿部受伤，还需要缺阵一段时间',
            'important':false
        },{        
            'name':'博扬',
            'status':'长期缺阵',
            'detail':'肌腱拉伤，预计本赛季报销',
            'important':true
        },{        
            'name':'伯克斯',
            'status':'缺阵',
            'detail':'腿部受伤，还需要缺阵一段时间',
            'important':false
        },{        
            'name':'迪亚洛',
            'status':'缺阵',
            'detail':'脚踝受伤，至少缺阵3-4周时间',
            'important':false
        },{        
            'name':'麦克格鲁',
            'status':'缺阵',
            'detail':'左腿受伤，还需要缺阵一段时间',
            'important':false
        }
    ],
    //金州勇士
    warriors:[
        {        
            'name':'维金斯',
            'status':'缺阵',
            'detail':'个人恢复训练过程中，预计常规赛不会出战',
            'important':true
        },{        
            'name':'伊戈达拉',
            'status':'长期缺阵',
            'detail':'左手腕受伤，归期未定',
            'important':false
        }
    ],
    //休斯顿火箭
    rockets:[
        {
            'name':'泰特',
            'status':'缺阵',
            'detail':'腿部受伤，还需要缺阵一段时间',
            'important':false
        }
    ],
    //印第安纳步行者
    pacers:[
        {
            'name':'肯德尔.布朗',
            'status':'缺阵',
            'detail':'右腿受伤，归期未定',
            'important':false
        },{
            'name':'哈利伯顿',
            'status':'缺阵',
            'detail':'脚踝受伤，还需要缺阵一段时间',
            'important':true
        },{
            'name':'特纳',
            'status':'缺阵',
            'detail':'背部受伤，还需要缺阵一段时间',
            'important':true
        },{
            'name':'杜阿尔特',
            'status':'缺阵',
            'detail':'左脚踝受伤，还需要缺阵一段时间',
            'important':false
        },{
            'name':'TJ.麦克康奈尔',
            'status':'缺阵',
            'detail':'臀部受伤，无法出战周六对阵活塞的比赛',
            'important':false
        },{
            'name':'杰伦.史密斯',
            'status':'缺阵',
            'detail':'臀部受伤，无法出战周六对阵活塞的比赛',
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
            'name':'乔治',
            'status':'长期缺阵',
            'detail':'膝盖受伤，预计至少缺阵3-4周时间',
            'important':true
        },{
            'name':'马库斯.莫里斯',
            'status':'缺阵',
            'detail':'身体不适，无法出战周日对阵开拓者的比赛',
            'important':false
        }
    ],
    //洛杉矶湖人
    lakers:[
        {
            'name':'安东尼.戴维斯',
            'status':'出战',
            'detail':'可以出战周六对阵太阳的比赛',
            'important':true
        },{
            'name':'詹姆斯',
            'status':'出战',
            'detail':'可以出战周六对阵太阳的比赛',
            'important':true
        }
    ],
    //孟菲斯灰熊
    grizzlies:[
        {
            'name':'亚当斯',
            'status':'缺阵',
            'detail':'膝盖扭伤，至少缺阵3-5周的时间',
            'important':true
        },{
            'name':'扎威',
            'status':'缺阵',
            'detail':'腿部受伤，还需要缺阵一段时间',
            'important':false
        },{
            'name':'克拉克',
            'status':'长期缺阵',
            'detail':'左肌腱严重拉伤，赛季报销',
            'important':false
        },{
            'name':'阿尔达玛',
            'status':'缺阵',
            'detail':'手肘受伤，无法出战周六对阵雄鹿的比赛',
            'important':false
        }
    ],
    //迈阿密热火
    heat:[
        {
            'name':'洛瑞',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周六对阵奇才的比赛',
            'important':false
        },{
            'name':'阿德巴约',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周六对阵奇才的比赛',
            'important':true
        },{
            'name':'希罗',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周六对阵奇才的比赛',
            'important':true
        },{
            'name':'巴特勒',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周六对阵奇才的比赛',
            'important':true
        }
    ],
    //密尔沃基雄鹿
    bucks:[
        {
            'name':'康文顿',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周六对阵灰熊的比赛',
            'important':false
        },{
            'name':'格雷森.阿伦',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战周六对阵灰熊的比赛',
            'important':false
        },{
            'name':'字母哥',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周六对阵灰熊的比赛',
            'important':true
        },{
            'name':'洛佩兹',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周六对阵灰熊的比赛',
            'important':true
        },{
            'name':'朱.霍乐迪',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周六对阵灰熊的比赛',
            'important':true
        },{
            'name':'米德尔顿',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周六对阵灰熊的比赛',
            'important':true
        }
    ],
    //明尼苏达森林狼
    timberwolves:[
        {
            'name':'唐斯',
            'status':'出战存疑',
            'detail':'伤病管理，周日对阵马刺的比赛出战存疑',
            'important':true
        },{
            'name':'诺埃尔',
            'status':'出战存疑',
            'detail':'左膝受伤，周日对阵马刺的比赛出战存疑',
            'important':false
        },{
            'name':'奥斯汀.里弗斯',
            'status':'出战存疑',
            'detail':'身体不适，周日对阵马刺的比赛出战存疑',
            'important':false
        },{
            'name':'纳兹.里德',
            'status':'长期缺阵',
            'detail':'手腕骨折，预计赛季报销',
            'important':false
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
            'name':'阿尔瓦拉多',
            'status':'缺阵',
            'detail':'腿部受伤，至少缺阵三周时间',
            'important':false
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
            'name':'兰德尔',
            'status':'缺阵',
            'detail':'脚踝受伤，预计至少缺阵两周时间',
            'important':true
        },{
            'name':'巴雷特',
            'status':'出战',
            'detail':'可以出战周六对阵鹈鹕的比赛',
            'important':true
        },{
            'name':'杰伦.布伦森',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周六对阵鹈鹕的比赛',
            'important':true
        },{
            'name':'米切尔.罗宾逊',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周六对阵鹈鹕的比赛',
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
            'name':'肯威',
            'status':'长期缺阵',
            'detail':'手腕手术，赛季报销',
            'important':false
        }
    ],
    //奥兰多魔术
    magic:[
        {
            'name':'艾萨克',
            'status':'长期缺阵',
            'detail':'腿筋严重拉伤，赛季报销',
            'important':false
        },{
            'name':'弗朗茨.瓦格纳',
            'status':'出战',
            'detail':'可以出战周六对阵篮网的比赛',
            'important':true
        },{
            'name':'班切罗',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周六对阵篮网的比赛',
            'important':true
        },{
            'name':'温德勒.卡特',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周六对阵篮网的比赛',
            'important':false
        },{
            'name':'富尔茨',
            'status':'出战',
            'detail':'可以出战周六对阵篮网的比赛',
            'important':false
        },{
            'name':'加里.哈里斯',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周六对阵篮网的比赛',
            'important':false
        },{
            'name':'莫里茨.瓦格纳',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战周六对阵篮网的比赛',
            'important':false
        }
    ],
    //费城76人
    seven6ers:[
        {        
            'name':'梅尔顿',
            'status':'缺阵',
            'detail':'右小腿受伤，无法出战周六对阵老鹰的比赛',
            'important':false
        },{        
            'name':'马克西',
            'status':'缺阵',
            'detail':'颈部受伤，无法出战周六对阵老鹰的比赛',
            'important':true
        },{        
            'name':'恩比德',
            'status':'缺阵',
            'detail':'身体不适，无法出战周六对阵老鹰的比赛',
            'important':true
        },{        
            'name':'哈登',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周六对阵老鹰的比赛',
            'important':true
        },{        
            'name':'哈里斯',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周六对阵老鹰的比赛',
            'important':true
        }
    ],
    //菲尼克斯太阳
    suns:[
        {
            'name':'萨宾.李',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        },{
            'name':'杜兰特',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周六对阵湖人的比赛',
            'important':true
        },{
            'name':'艾顿',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周六对阵湖人的比赛',
            'important':true
        },{
            'name':'保罗',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周六对阵湖人的比赛',
            'important':true
        },{
            'name':'布克',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周六对阵湖人的比赛',
            'important':true
        }
    ],
    //波特兰开拓者
    blazers:[
        {
            'name':'温斯洛',
            'status':'缺阵',
            'detail':'左脚踝受伤，归期未定',
            'important':false
        },{
            'name':'格兰特',
            'status':'缺阵',
            'detail':'腿部受伤，还需要缺阵一段时间',
            'important':true
        },{
            'name':'安芬尼.西蒙斯',
            'status':'缺阵',
            'detail':'身体不适，还需要缺阵一段时间',
            'important':true
        },{
            'name':'努尔基奇',
            'status':'缺阵',
            'detail':'膝盖受伤，还需要缺阵一段时间',
            'important':true
        },{
            'name':'利拉德',
            'status':'长期缺阵',
            'detail':'伤病管理，缺席本赛季所有的比赛',
            'important':true
        },{
            'name':'尤班克斯',
            'status':'出战存疑',
            'detail':'右脚踝受伤，周日对阵快船的比赛出战存疑',
            'important':false
        },{
            'name':'雷迪什',
            'status':'缺阵',
            'detail':'背部受伤，还需要缺阵一段时间',
            'important':false
        },{
            'name':'赛布尔',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战周五对阵马刺的比赛',
            'important':false
        },{
            'name':'利特尔',
            'status':'缺阵',
            'detail':'膝盖受伤，还需要缺阵一段时间',
            'important':false
        }
    ],
    //萨克拉门托国王
    kings:[
        {
            'name':'德拉维多瓦',
            'status':'缺阵',
            'detail':'腿部受伤，归期未定',
            'important':false
        },{
            'name':'小萨博尼斯',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周六对阵勇士的比赛',
            'important':true
        },{
            'name':'福克斯',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周六对阵勇士的比赛',
            'important':true
        },{
            'name':'赫尔特',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周六对阵勇士的比赛',
            'important':false
        },{
            'name':'马利克.蒙克',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周六对阵勇士的比赛',
            'important':false
        },{
            'name':'莱尔斯',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周六对阵勇士的比赛',
            'important':false
        },{
            'name':'基根.默里',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周六对阵勇士的比赛',
            'important':false
        }
    ],
    //圣安东尼奥马刺
    spurs:[
        {
            'name':'肯.伯奇',
            'status':'缺阵',
            'detail':'膝盖受伤，归期未定',
            'important':false
        },{
            'name':'巴斯',
            'status':'长期缺阵',
            'detail':'腿部严重受伤，赛季报销',
            'important':false
        },{
            'name':'索汉',
            'status':'缺阵',
            'detail':'膝盖受伤，还需要缺阵一段时间',
            'important':true
        },{
            'name':'凯尔登.约翰逊',
            'status':'出战存疑',
            'detail':'伤病管理，周日对阵森林狼的比赛出战存疑',
            'important':true
        },{
            'name':'瓦塞尔',
            'status':'缺阵',
            'detail':'左膝受伤，还需要缺阵一段时间',
            'important':true
        },{
            'name':'朗福德',
            'status':'出战存疑',
            'detail':'伤病管理，周日对阵森林狼的比赛出战存疑',
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
            'name':'塞克斯顿',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周日对阵掘金的比赛',
            'important':true
        },{
            'name':'克拉克森',
            'status':'缺阵',
            'detail':'手指受伤，还需要缺阵一段时间',
            'important':true
        },{
            'name':'马尔坎宁',
            'status':'缺阵',
            'detail':'手部受伤，无法出战周日对阵掘金的比赛',
            'important':true
        },{
            'name':'鲁迪.盖伊',
            'status':'缺阵',
            'detail':'背部受伤，还需要缺阵一段时间',
            'important':false
        },{
            'name':'凯斯勒',
            'status':'缺阵',
            'detail':'脑震荡症状，赛季报销',
            'important':false
        },{
            'name':'塔克',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战周日对阵掘金的比赛',
            'important':true
        }                      
    ],
    //华盛顿奇才
    wizards:[
        {
            'name':'库兹马',
            'status':'缺阵',
            'detail':'脚踝受伤，提前结束本赛季',
            'important':true
        },{
            'name':'比尔',
            'status':'缺阵',
            'detail':'腿部受伤，提前结束本赛季',
            'important':true
        },{
            'name':'波尔津吉斯',
            'status':'缺阵',
            'detail':'身体不适，提前结束本赛季',
            'important':true
        },{
            'name':'蒙特.莫里斯',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战周六对阵热火的比赛',
            'important':false
        },{
            'name':'阿夫迪亚',
            'status':'缺阵',
            'detail':'左手肘受伤，无法出战周六对阵热火的比赛',
            'important':false
        }
    ]   
}

module.exports = nbaData;