const nbaData = {
    //亚特兰大老鹰
    hawks:[
        {
            'name':'特雷杨',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周日对阵掘金的比赛',
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
            'status':'缺阵',
            'detail':'脚踝受伤，预计缺阵两周时间',
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
            'name':'T.J.沃伦',
            'status':'缺阵',
            'detail':'左手扭伤，无法出战周日对阵奇才的比赛',
            'important':false
        },{
            'name':'本.西蒙斯',
            'status':'出战存疑',
            'detail':'膝盖受伤，无法出战周日对阵奇才的比赛',
            'important':true
        },{
            'name':'欧文',
            'status':'缺阵',
            'detail':'小腿酸痛，无法出战周日对阵奇才的比赛',
            'important':true
        }
    ],
    //夏洛特黄蜂
    hornets:[
        {
            'name':'科迪.马丁',
            'status':'缺阵',
            'detail':'膝盖受伤，还需要缺阵一段时间',
            'important':false
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
            'name':'帕威',
            'status':'出战',
            'detail':'可以出战周日对阵开拓者的比赛',
            'important':false
        },{
            'name':'卡鲁索',
            'status':'缺阵',
            'detail':'身体不适，无法出战周日对阵开拓者的比赛',
            'important':true
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
            'name':'勒维尔',
            'status':'出战存疑',
            'detail':'身体不适，周一对阵步行者的比赛出战存疑',
            'important':true
        }
    ],
    //达拉斯独行侠
    mavericks:[
        {
            'name':'克勒贝尔',
            'status':'缺阵',
            'detail':'右膝受伤，归期未定',
            'important':true
        },{
            'name':'伍德',
            'status':'缺阵',
            'detail':'腿部受伤，还需要缺阵一段时间',
            'important':true
        },{
            'name':'贝尔坦斯',
            'status':'缺阵',
            'detail':'小腿受伤，无法出战周日对阵勇士的比赛',
            'important':false
        },{
            'name':'东契奇',
            'status':'缺阵',
            'detail':'脚后跟受伤，预计缺阵两周时间',
            'important':true
        },{
            'name':'丁威迪',
            'status':'出战',
            'detail':'可以出战周日对阵勇士的比赛',
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
            'name':'波普',
            'status':'出战存疑',
            'detail':'腿部受伤，周一对阵森林狼的比赛出战存疑',
            'important':true
        },{
            'name':'约基奇',
            'status':'出战存疑',
            'detail':'伤病管理，周一对阵森林狼的比赛出战存疑',
            'important':true
        },{
            'name':'贾马尔.穆雷',
            'status':'出战存疑',
            'detail':'伤病管理，周一对阵森林狼的比赛出战存疑',
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
            'name':'巴格利',
            'status':'长期缺阵',
            'detail':'手掌受伤，预计缺阵6-8周时间',
            'important':false
        },{        
            'name':'约瑟夫',
            'status':'缺阵',
            'detail':'背部受伤，还需要缺阵一段时间',
            'important':false
        }
    ],
    //金州勇士
    warriors:[
        {
            'name':'伊戈达拉',
            'status':'缺阵',
            'detail':'臀部受伤，还会缺阵一段时间',
            'important':false
        },{
            'name':'库里',
            'status':'出战存疑',
            'detail':'膝盖受伤，每日观察',
            'important':true
        }
    ],
    //休斯顿火箭
    rockets:[
        {
            'name':'小凯文.波特',
            'status':'缺阵',
            'detail':'腿部受伤，至少再缺阵一周时间',
            'important':true
        },{
            'name':'杰伦.格林',
            'status':'出战',
            'detail':'可以出战周日对阵雷霆的比赛',
            'important':true
        },{
            'name':'泰特',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周日对阵雷霆的比赛',
            'important':false
        },{
            'name':'埃里克.戈登',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周日对阵雷霆的比赛',
            'important':true
        }
    ],
    //印第安纳步行者
    pacers:[
        {
            'name':'丹尼尔.泰斯',
            'status':'出战存疑',
            'detail':'伤病管理，周一对阵骑士的比赛出战存疑',
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
            'name':'沃尔',
            'status':'长期缺阵',
            'detail':'腿部受伤，归期未定',
            'important':false
        }
    ],
    //洛杉矶湖人
    lakers:[
        {
            'name':'奥斯汀.里弗斯',
            'status':'缺阵',
            'detail':'腿筋拉伤，预计至少缺阵2周时间',
            'important':true
        },{
            'name':'安东尼.戴维斯',
            'status':'出战',
            'detail':'可以出战周日对阵鹈鹕的比赛',
            'important':true
        },{
            'name':'詹姆斯',
            'status':'出战',
            'detail':'可以出战周日对阵鹈鹕的比赛',
            'important':true
        }  
    ],
    //孟菲斯灰熊
    grizzlies:[
        {
            'name':'莫兰特',
            'status':'出战存疑',
            'detail':'右手腕受伤，周一对阵猛龙的比赛出战存疑',
            'important':false
        },{
            'name':'小贾伦.杰克逊',
            'status':'出战存疑',
            'detail':'伤病管理，周一对阵猛龙的比赛出战存疑',
            'important':true
        },{
            'name':'亚当斯',
            'status':'长期缺阵',
            'detail':'膝盖扭伤，至少缺阵3-5周的时间',
            'important':true
        },{
            'name':'狄龙.布鲁克斯',
            'status':'缺阵',
            'detail':'禁赛一场，无法出战周一对阵猛龙的比赛',
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
            'name':'文森特',
            'status':'出战',
            'detail':'可以出战周日对阵雄鹿的比赛',
            'important':false
        },{
            'name':'奥拉迪波',
            'status':'缺阵',
            'detail':'脚踝扭伤，无法出战周五对阵尼克斯的比赛',
            'important':true
        },{
            'name':'奥兰多.罗宾逊',
            'status':'缺阵',
            'detail':'右手拇指受伤，预计还会缺阵一段时间',
            'important':false
        },{
            'name':'洛瑞',
            'status':'缺阵',
            'detail':'左膝受伤，无法出战周五对阵尼克斯的比赛',
            'important':false
        }     
    ],
    //密尔沃基雄鹿
    bucks:[
        {
            'name':'波蒂斯',
            'status':'缺阵',
            'detail':'右膝受伤，至少缺阵两周时间',
            'important':true
        },{
            'name':'伊巴卡',
            'status':'缺阵',
            'detail':'个人原因，会缺阵一段时间',
            'important':false
        },{
            'name':'字母哥',
            'status':'出战',
            'detail':'可以出战周日对阵热火的比赛',
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
            'name':'凯尔.安德森',
            'status':'出战存疑',
            'detail':'背部受伤，周一对阵掘金的比赛出战存疑',
            'important':false
        },{
            'name':'戈贝尔',
            'status':'出战存疑',
            'detail':'腹股沟受伤，周一对阵掘金的比赛出战存疑',
            'important':true
        },{
            'name':'小里弗斯',
            'status':'缺阵',
            'detail':'因为打架，被禁赛三场',
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
            'name':'丹尼尔斯',
            'status':'缺阵',
            'detail':'脚踝受伤，需要缺阵一段时间',
            'important':false
        },{
            'name':'瓦兰丘纳斯',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战周一对阵国王的比赛',
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
            'name':'米切尔.罗宾逊',
            'status':'缺阵',
            'detail':'拇指受伤，至少恢复三周时间',
            'important':true
        },{
            'name':'杰伦.布伦森',
            'status':'出战',
            'detail':'可以出战周一对阵76人的比赛',
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
            'name':'多尔特',
            'status':'缺阵',
            'detail':'身体不适，还需要缺阵一段时间',
            'important':true
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
            'name':'奥吉吉',
            'status':'缺阵',
            'detail':'膝盖受伤，预计会缺阵一段时间',
            'important':false
        },{
            'name':'萨格斯',
            'status':'缺阵',
            'detail':'因为打架，被禁赛一场',
            'important':false
        },{
            'name':'班巴',
            'status':'缺阵',
            'detail':'因为打架，被禁赛四场',
            'important':false
        }
    ],
    //费城76人
    seven6ers:[
        {        
            'name':'恩比德',
            'status':'出战存疑',
            'detail':'伤病管理，周一对阵尼克斯的比赛出战存疑',
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
            'name':'沙梅特',
            'status':'缺阵',
            'detail':'腿部受伤，还需要缺阵一段时间',
            'important':false
        },{
            'name':'卡梅伦.约翰逊',
            'status':'出战',
            'detail':'可以出战周日对阵活塞的比赛',
            'important':true
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
            'name':'努尔基奇',
            'status':'缺阵',
            'detail':'左小腿受伤，预计要等全明星赛后才能复出',
            'important':true
        },{
            'name':'小佩顿',
            'status':'出战',
            'detail':'可以出战周日对阵公牛的比赛',
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
            'name':'福克斯',
            'status':'缺阵',
            'detail':'个人原因，无法出战周一对阵鹈鹕的比赛',
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
            'name':'朗福德',
            'status':'缺阵',
            'detail':'臀部受伤，无法出战周六对阵76人的比赛',
            'important':false
        },{
            'name':'索汉',
            'status':'缺阵',
            'detail':'背部受伤，无法出战周六对阵76人的比赛',
            'important':true
        },{
            'name':'特雷.琼斯',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周六对阵76人的比赛',
            'important':true
        }
    ],
    //多伦多猛龙
    raptors:[
        {
            'name':'奥托.波特',
            'status':'缺阵',
            'detail':'左脚受伤，预计会缺阵一段时间',
            'important':false
        },{
            'name':'阿奴诺比',
            'status':'缺阵',
            'detail':'腿部受伤，还需要缺阵一段时间',
            'important':true
        }
    ],
    //犹它爵士
    jazz:[
        {
            'name':'麦卡.波特',
            'status':'缺阵',
            'detail':'腿部受伤，会缺阵一段时间',
            'important':false
        }                      
    ],
    //华盛顿奇才
    wizards:[
        {
            'name':'吉尔',
            'status':'缺阵',
            'detail':'身体不适，无法出战周日对阵篮网的比赛',
            'important':false
        },{
            'name':'比尔',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周日对阵篮网的比赛',
            'important':true
        }
    ]   
}

module.exports = nbaData;