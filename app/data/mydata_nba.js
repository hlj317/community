const nbaData = {
    //亚特兰大老鹰
    hawks:[
        {
            'name':'卡佩拉',
            'status':'缺阵',
            'detail':'小腿受伤，预计还要缺阵一段时间',
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
            'status':'出战存疑',
            'detail':'膝盖受伤，周四对阵鹈鹕的比赛出战存疑',
            'important':true
        },{        
            'name':'罗威',
            'status':'出战存疑',
            'detail':'膝盖受伤，周四对阵鹈鹕的比赛出战存疑',
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
        }
    ],
    //夏洛特黄蜂
    hornets:[
        {
            'name':'海沃德',
            'status':'缺阵',
            'detail':'腿筋拉伤，无法出战周三对阵猛龙的比赛',
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
            'status':'出战存疑',
            'detail':'腿部受伤，周四对阵奇才的比赛出战存疑',
            'important':true
        },{
            'name':'卡鲁索',
            'status':'出战存疑',
            'detail':'脚踝受伤，周四对阵奇才的比赛出战存疑',
            'important':true
        }
    ],
    //克利夫兰骑士
    cavaliers:[
        {
            'name':'卢比奥',
            'status':'长期缺阵',
            'detail':'膝盖受伤，归期未定',
            'important':false
        },{
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
            'name':'东契奇',
            'status':'出战',
            'detail':'可以出战周三对阵快船的比赛',
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
            'status':'大概率出战',
            'detail':'右脚踝受伤，大概率可以出战周四对阵森林狼的比赛',
            'important':true
        },{        
            'name':'博扬',
            'status':'大概率出战',
            'detail':'左小腿受伤，大概率可以出战周四对阵森林狼的比赛',
            'important':true
        },{        
            'name':'斯图尔特',
            'status':'大概率出战',
            'detail':'身体不适，大概率可以出战周四对阵森林狼的比赛',
            'important':true
        }    
    ],
    //金州勇士
    warriors:[
        {
            'name':'伊戈达拉',
            'status':'出战',
            'detail':'可以出战周日对阵魔术的比赛',
            'important':false
        },{
            'name':'库里',
            'status':'出战',
            'detail':'可以出战周三对阵太阳的比赛',
            'important':true
        },{
            'name':'杰迈克尔.格林',
            'status':'缺阵',
            'detail':'身体不适，预计会缺阵一段时间',
            'important':false
        },{
            'name':'怀斯曼',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战周四对阵活塞的比赛',
            'important':false
        },{
            'name':'库明加',
            'status':'缺阵',
            'detail':'右脚受伤，无法出战周四对阵活塞的比赛',
            'important':false
        },{
            'name':'汤普森',
            'status':'出战',
            'detail':'可以出战周三对阵太阳的比赛',
            'important':true
        }
    ],
    //休斯顿火箭
    rockets:[
        {
            'name':'泰特',
            'status':'出战',
            'detail':'可以出战周一对阵森林狼的比赛',
            'important':false
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
            'name':'TJ.麦克康奈尔',
            'status':'出战存疑',
            'detail':'肩部受伤，周四对阵尼克斯的比赛出战存疑',
            'important':false
        },{
            'name':'内史密斯',
            'status':'出战存疑',
            'detail':'身体不适，周四对阵尼克斯的比赛出战存疑',
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
            'name':'肯纳德',
            'status':'缺阵',
            'detail':'右小腿受伤，无法出战周三对阵独行侠的比赛',
            'important':false
        },{
            'name':'乔治',
            'status':'缺阵',
            'detail':'右腿筋拉伤，无法出战周三对阵独行侠的比赛',
            'important':true
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
            'name':'特洛伊.布朗',
            'status':'缺阵',
            'detail':'身体不适，无法出战周二对阵掘金的比赛',
            'important':false
        },{
            'name':'安东尼.戴维斯',
            'status':'长期缺阵',
            'detail':'腿部受伤，至少还需要缺阵一个月时间',
            'important':true
        },{
            'name':'詹姆斯',
            'status':'缺阵',
            'detail':'身体不适，无法出战周二对阵掘金的比赛',
            'important':true
        },{
            'name':'威斯布鲁克',
            'status':'出战',
            'detail':'可以出战周二对阵掘金的比赛',
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
            'name':'克拉克',
            'status':'缺阵',
            'detail':'臀部受伤，预计还会缺阵一段时间',
            'important':false
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
            'status':'缺阵',
            'detail':'身体不适，无法出战周三对阵雷霆的比赛',
            'important':false
        },{
            'name':'洛瑞',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战周三对阵雷霆的比赛',
            'important':true
        },{
            'name':'希罗',
            'status':'缺阵',
            'detail':'左肌腱拉伤，无法出战周三对阵雷霆的比赛',
            'important':true
        },{
            'name':'阿德巴约',
            'status':'缺阵',
            'detail':'左脚受伤，无法出战周三对阵雷霆的比赛',
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
            'detail':'个人原因，无法出战周二对阵尼克斯的比赛',
            'important':false
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
            'name':'爱德华兹',
            'status':'出战存疑',
            'detail':'身体不适，周四对阵活塞的比赛出战存疑',
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
            'status':'出战存疑',
            'detail':'背部受伤，周四对阵凯尔特人的比赛出战存疑',
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
            'name':'巴雷特',
            'status':'出战存疑',
            'detail':'腿部受伤，周四对阵步行者的比赛出战存疑',
            'important':true
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
            'detail':'膝盖受伤，归期未定',
            'important':false
        },{
            'name':'奥吉吉',
            'status':'缺阵',
            'detail':'膝盖受伤，预计会缺阵一段时间',
            'important':false
        },{
            'name':'波尔',
            'status':'出战',
            'detail':'可以出战周三对阵开拓者的比赛',
            'important':true
        }
    ],
    //费城76人
    seven6ers:[
        {        
            'name':'恩比德',
            'status':'出战',
            'detail':'可以出战周三对阵活塞的比赛',
            'important':true
        },{        
            'name':'PJ.塔克',
            'status':'出战',
            'detail':'可以出战周三对阵活塞的比赛',
            'important':false
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
            'detail':'臀部受伤，无法出战周四对阵掘金的比赛',
            'important':true
        },{
            'name':'克雷格',
            'status':'出战存疑',
            'detail':'腿部受伤，周四对对阵掘金的比赛出战存疑',
            'important':false
        },{
            'name':'沙梅特',
            'status':'出战存疑',
            'detail':'腿部受伤，周四对对阵掘金的比赛出战存疑',
            'important':false
        },{
            'name':'艾顿',
            'status':'出战存疑',
            'detail':'左脚踝受伤，周四对对阵掘金的比赛出战存疑',
            'important':true
        }
    ],
    //波特兰开拓者
    blazers:[
        {
            'name':'利特尔',
            'status':'长期缺阵',
            'detail':'臀部受伤，预计缺阵6周时间',
            'important':false
        },{
            'name':'温斯洛',
            'status':'缺阵',
            'detail':'左脚踝受伤，至少缺阵两周时间',
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
            'name':'凯尔登.约翰逊',
            'status':'出战存疑',
            'detail':'腿筋拉伤，周四对阵灰熊的比赛出战存疑',
            'important':true
        },{
            'name':'迪奥普',
            'status':'出战存疑',
            'detail':'右脚踝扭伤，周四对阵灰熊的比赛出战存疑',
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
            'detail':'腿筋拉伤，预计至少缺阵1周时间',
            'important':true
        },{
            'name':'奥利尼克',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周三对阵骑士的比赛',
            'important':true
        },{
            'name':'塔克',
            'status':'缺阵',
            'detail':'身体不适，无法出战周三对阵骑士的比赛',
            'important':false
        },{
            'name':'阿祖比亚克',
            'status':'缺阵',
            'detail':'身体不适，无法出战周三对阵骑士的比赛',
            'important':false
        }                               
    ],
    //华盛顿奇才
    wizards:[
        {
            'name':'比尔',
            'status':'缺阵',
            'detail':'腿筋拉伤，预计缺阵1周时间',
            'important':true
        },{
            'name':'吉尔伯特',
            'status':'出战存疑',
            'detail':'背部受伤，周四对阵公牛的比赛出战存疑',
            'important':false
        },{
            'name':'加福德',
            'status':'出战存疑',
            'detail':'脚踝扭伤，周四对阵公牛的比赛出战存疑',
            'important':false
        },{
            'name':'波尔津吉斯',
            'status':'出战存疑',
            'detail':'肋骨受伤，周四对阵公牛的比赛出战存疑',
            'important':true
        }
    ]   
}

module.exports = nbaData;