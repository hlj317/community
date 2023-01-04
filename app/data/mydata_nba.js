const nbaData = {
    //亚特兰大老鹰
    hawks:[
        {
            'name':'卡佩拉',
            'status':'缺阵',
            'detail':'小腿受伤，预计还要缺阵一段时间',
            'important':true
        },{
            'name':'亨特',
            'status':'出战存疑',
            'detail':'脚踝受伤，周二对阵勇士的比赛出战存疑',
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
            'name':'罗威',
            'status':'缺阵',
            'detail':'左膝伤病管理，无法出战周三对阵雷霆的比赛',
            'important':true
        }
    ],
    //布鲁克林篮网
    nets:[
        {
            'name':'罗伊斯.奥尼尔',
            'status':'出战存疑',
            'detail':'身体不适，周二对阵马刺的比赛出战存疑',
            'important':true
        },{
            'name':'马基夫.莫里斯',
            'status':'缺阵',
            'detail':'身体不适，无法出战周二对阵马刺的比赛',
            'important':false
        }
    ],
    //夏洛特黄蜂
    hornets:[
        {
            'name':'科迪.马丁',
            'status':'长期缺阵',
            'detail':'小腿受伤，归期未定',
            'important':false
        },{
            'name':'丹尼斯.史密斯',
            'status':'出战',
            'detail':'可以出战周二对阵湖人的比赛',
            'important':false
        },{
            'name':'乌布雷',
            'status':'缺阵',
            'detail':'手部受伤，无法出战周二对阵湖人的比赛',
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
            'name':'德里克.琼斯',
            'status':'出战',
            'detail':'可以出战周二对阵骑士的比赛',
            'important':false
        },{
            'name':'贾文特.格林',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战周二对阵骑士的比赛',
            'important':false
        },{
            'name':'卡鲁索',
            'status':'出战',
            'detail':'可以出战周二对阵骑士的比赛',
            'important':true
        },{
            'name':'布拉德利',
            'status':'缺阵',
            'detail':'个人原因，无法出战周二对阵骑士的比赛',
            'important':false
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
        },{
            'name':'加兰',
            'status':'缺阵',
            'detail':'拇指受伤，无法出战周二对阵公牛的比赛',
            'important':true
        },{
            'name':'莫布利',
            'status':'缺阵',
            'detail':'右脚踝受伤，无法出战周二对阵公牛的比赛',
            'important':true
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
            'name':'贾马尔.穆雷',
            'status':'出战',
            'detail':'可以出战周二对阵森林狼的比赛',
            'important':true
        },{
            'name':'约基奇',
            'status':'出战',
            'detail':'可以出战周二对阵森林狼的比赛',
            'important':true
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
            'name':'海耶斯',
            'status':'缺阵',
            'detail':'因为在与魔术的比赛中打架，禁赛三场',
            'important':true
        }    
    ],
    //金州勇士
    warriors:[
        {
            'name':'伊戈达拉',
            'status':'长期缺阵',
            'detail':'臀部受伤，无法出战',
            'important':false
        },{
            'name':'维金斯',
            'status':'缺阵',
            'detail':'腹股沟受伤，预计会缺阵一段时间',
            'important':true
        },{
            'name':'库里',
            'status':'长期缺阵',
            'detail':'肩膀拉伤，预计缺阵1个月时间',
            'important':true
        },{
            'name':'杰迈克尔.格林',
            'status':'缺阵',
            'detail':'身体不适，预计会缺阵一段时间',
            'important':false
        },{
            'name':'怀斯曼',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战周二对阵老鹰的比赛',
            'important':false
        },{
            'name':'库明加',
            'status':'缺阵',
            'detail':'右脚受伤，无法出战周二对阵老鹰的比赛',
            'important':false
        }
    ],
    //休斯顿火箭
    rockets:[
        {
            'name':'泰特',
            'status':'缺阵',
            'detail':'脚踝受伤，归期未定',
            'important':false
        },{
            'name':'申京',
            'status':'出战',
            'detail':'可以出战周二对阵独行侠的比赛',
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
            'name':'巴图姆',
            'status':'出战存疑',
            'detail':'左脚踝受伤，周二对阵热火的比赛出战存疑',
            'important':false
        },{
            'name':'伦纳德',
            'status':'出战存疑',
            'detail':'身体不适，周二对阵热火的比赛出战存疑',
            'important':true
        }
    ],
    //洛杉矶湖人
    lakers:[
        {
            'name':'朗尼.沃克',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战周二对阵黄蜂的比赛',
            'important':true
        },{
            'name':'安东尼.戴维斯',
            'status':'长期缺阵',
            'detail':'腿部受伤，至少还需要缺阵一个月时间',
            'important':true
        },{
            'name':'詹姆斯',
            'status':'出战',
            'detail':'可以出战周二对阵黄蜂的比赛',
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
            'name':'阿尔达马',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战周一对阵国王的比赛',
            'important':false
        },{
            'name':'扎伊尔.威廉姆斯',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周一对阵国王的比赛',
            'important':false
        },{
            'name':'贝恩',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周一对阵国王的比赛',
            'important':true
        },{
            'name':'克拉克',
            'status':'缺阵',
            'detail':'臀部受伤，无法出战周一对阵国王的比赛',
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
            'name':'戴德蒙',
            'status':'出战存疑',
            'detail':'身体不适，周二对阵快船的比赛出战存疑',
            'important':false
        },{
            'name':'克莱布.马丁',
            'status':'出战存疑',
            'detail':'脚踝受伤，周二对阵快船的比赛出战存疑',
            'important':false
        },{
            'name':'邓肯.罗宾逊',
            'status':'出战存疑',
            'detail':'脚踝受伤，周二对阵快船的比赛出战存疑',
            'important':false
        },{
            'name':'文森特',
            'status':'出战存疑',
            'detail':'膝盖受伤，周二对阵快船的比赛出战存疑',
            'important':false
        },{
            'name':'巴特勒',
            'status':'出战',
            'detail':'可以出战周二对阵快船的比赛',
            'important':true
        }                      
    ],
    //密尔沃基雄鹿
    bucks:[
        {
            'name':'米德尔顿',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周三对阵奇才的比赛',
            'important':true
        },{
            'name':'朱.霍乐迪',
            'status':'出战',
            'detail':'可以出战周三对阵奇才的比赛',
            'important':true
        },{
            'name':'字母哥',
            'status':'出战',
            'detail':'可以出战周三对阵奇才的比赛',
            'important':true
        },{
            'name':'乔治.希尔',
            'status':'缺阵',
            'detail':'身体不适，无法出战周三对阵奇才的比赛',
            'important':false
        } 
    ],
    //明尼苏达森林狼
    timberwolves:[
        {
            'name':'加尔扎',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        },{
            'name':'普林斯',
            'status':'缺阵',
            'detail':'右肩受伤，预计还要缺阵1-2周的时间',
            'important':false
        },{
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
            'name':'戈贝尔',
            'status':'出战',
            'detail':'可以出战周二对阵掘金的比赛',
            'important':true
        },{
            'name':'拉塞尔',
            'status':'出战存疑',
            'detail':'身体不适，周二对阵掘金的比赛出战存疑',
            'important':true
        },{
            'name':'纳兹.里德',
            'status':'出战存疑',
            'detail':'身体不适，周二对阵掘金的比赛出战存疑',
            'important':false
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
            'name':'小南斯',
            'status':'缺阵',
            'detail':'颈部受伤，无法出战周二对阵76人的比赛',
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
            'name':'托平',
            'status':'缺阵',
            'detail':'膝盖受伤，至少缺阵2-3周时间',
            'important':false
        },{
            'name':'杰伦.布伦森',
            'status':'出战',
            'detail':'可以出战周二对阵太阳的比赛',
            'important':true
        },{
            'name':'巴雷特',
            'status':'缺阵',
            'detail':'腿部受伤，预计还需要缺阵一段时间',
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
        },{
            'name':'亚历山大',
            'status':'缺阵',
            'detail':'身体不适，无法出战周三对阵凯尔特人的比赛',
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
            'name':'萨格斯',
            'status':'缺阵',
            'detail':'脚踝受伤，预计会缺阵一段时间',
            'important':true
        },{
            'name':'班巴',
            'status':'缺阵',
            'detail':'因为在与活塞的比赛中参与冲突，禁赛一场',
            'important':false
        },{
            'name':'莫里茨.瓦格纳',
            'status':'缺阵',
            'detail':'因为在与活塞的比赛中参与冲突，禁赛两场',
            'important':false
        },{
            'name':'科尔.安东尼',
            'status':'缺阵',
            'detail':'因为在与活塞的比赛中参与冲突，禁赛一场',
            'important':false
        },{
            'name':'加里.哈里斯',
            'status':'缺阵',
            'detail':'因为在与活塞的比赛中参与冲突，禁赛一场',
            'important':false
        },{
            'name':'温德勒.卡特',
            'status':'缺阵',
            'detail':'因为在与活塞的比赛中参与冲突，禁赛一场',
            'important':true
        },{
            'name':'弗朗茨.瓦格纳',
            'status':'出战',
            'detail':'可以出战周六对阵奇才的比赛，下一场禁赛',
            'important':true
        },{
            'name':'RJ.汉普顿',
            'status':'缺阵',
            'detail':'因为在与活塞的比赛中参与冲突，禁赛一场',
            'important':false
        },{
            'name':'凯文.哈里斯',
            'status':'出战',
            'detail':'可以出战周六对阵奇才的比赛，下一场禁赛',
            'important':false
        },{
            'name':'斯科菲尔德',
            'status':'出战',
            'detail':'可以出战周六对阵奇才的比赛，下一场禁赛',
            'important':false
        }
    ],
    //费城76人
    seven6ers:[
        {        
            'name':'哈登',
            'status':'出战',
            'detail':'可以出战周二对阵鹈鹕的比赛',
            'important':true
        },{        
            'name':'PJ.塔克',
            'status':'出战',
            'detail':'可以出战周二对阵鹈鹕的比赛',
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
            'name':'卡梅伦.佩恩',
            'status':'出战',
            'detail':'可以出战周二对阵尼克斯的比赛',
            'important':false
        },{
            'name':'沙梅特',
            'status':'出战',
            'detail':'可以出战周二对阵尼克斯的比赛',
            'important':false
        }
    ],
    //波特兰开拓者
    blazers:[
        {
            'name':'小加里.佩顿',
            'status':'缺阵',
            'detail':'腹部受伤，预计还需要缺阵一段时间',
            'important':false
        },{
            'name':'利特尔',
            'status':'长期缺阵',
            'detail':'臀部受伤，预计缺阵6周时间',
            'important':false
        },{
            'name':'温斯洛',
            'status':'缺阵',
            'detail':'左脚踝受伤，至少缺阵两周时间',
            'important':false
        },{
            'name':'努尔基奇',
            'status':'出战存疑',
            'detail':'小腿受伤，周二对阵活塞的比赛出战存疑',
            'important':true
        },{
            'name':'基翁.约翰逊',
            'status':'出战存疑',
            'detail':'身体不适，周二对阵活塞的比赛出战存疑',
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
            'name':'马利克.蒙克',
            'status':'出战',
            'detail':'可以出战周三对阵爵士的比赛',
            'important':false
        },{
            'name':'凯文.赫尔特',
            'status':'出战',
            'detail':'可以出战周三对阵爵士的比赛',
            'important':true
        }
    ],
    //圣安东尼奥马刺
    spurs:[
        {
            'name':'布雷克.威斯利',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        },{
            'name':'瓦塞尔',
            'status':'出战',
            'detail':'可以出战周二对阵篮网的比赛',
            'important':true
        },{
            'name':'迪奥普',
            'status':'缺阵',
            'detail':'身体不适，无法出战周二对阵篮网的比赛',
            'important':false
        }
    ],
    //多伦多猛龙
    raptors:[
        {
            'name':'阿丘瓦',
            'status':'出战',
            'detail':'可以出战周二对阵步行者的比赛',
            'important':false
        },{
            'name':'范弗利特',
            'status':'出战',
            'detail':'可以出战周二对阵步行者的比赛',
            'important':true
        },{
            'name':'奥托.波特',
            'status':'缺阵',
            'detail':'左脚受伤，预计会缺阵接下来几场比赛',
            'important':false
        }
    ],
    //犹它爵士
    jazz:[
        {
            'name':'阿巴基',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        },{
            'name':'塞克斯顿',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周三对阵国王的比赛',
            'important':true
        }                               
    ],
    //华盛顿奇才
    wizards:[
        {
            'name':'比尔',
            'status':'缺阵',
            'detail':'腿筋拉伤，无法出战周三对阵雄鹿的比赛',
            'important':true
        },{
            'name':'泰.吉布森',
            'status':'缺阵',
            'detail':'腹股沟受伤，无法出战周三对阵雄鹿的比赛',
            'important':false
        },{
            'name':'加福德',
            'status':'出战',
            'detail':'可以出战周三对阵雄鹿的比赛',
            'important':true
        }
    ]   
}

module.exports = nbaData;