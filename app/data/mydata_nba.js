const nbaData = {
    //亚特兰大老鹰
    hawks:[
        {
            'name':'杰伦.约翰逊',
            'status':'缺阵',
            'detail':'腿筋拉伤，至少缺阵一周时间',
            'important':false
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
            'name':'普理查德',
            'status':'缺阵',
            'detail':'脚踝受伤，还需要缺阵一段时间',
            'important':false
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
            'name':'萨姆纳',
            'status':'出战存疑',
            'detail':'臀部受伤，周四对阵火箭的比赛出战存疑',
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
            'detail':'脚踝受伤，无法出战周三对阵雷霆的比赛',
            'important':true
        },{
            'name':'马克.威廉姆斯',
            'status':'缺阵',
            'detail':'身体不适，无法出战周三对阵雷霆的比赛',
            'important':false
        },{
            'name':'乌布雷',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周三对阵雷霆的比赛',
            'important':false
        },{
            'name':'海沃德',
            'status':'缺阵',
            'detail':'肋骨受伤，无法出战周三对阵雷霆的比赛',
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
            'status':'出战存疑',
            'detail':'膝盖受伤，周四对阵湖人的比赛出战存疑',
            'important':false
        },{
            'name':'卡鲁索',
            'status':'出战存疑',
            'detail':'腿部受伤，周四对阵湖人的比赛出战存疑',
            'important':false
        }
    ],
    //克利夫兰骑士
    cavaliers:[
        {
            'name':'内托',
            'status':'缺阵',
            'detail':'左腿筋拉伤，无法出战周三对阵老鹰的比赛',
            'important':false
        },{
            'name':'迪恩.韦德',
            'status':'出战存疑',
            'detail':'腿部受伤，无法出战周三对阵老鹰的比赛',
            'important':false
        },{
            'name':'奥克罗',
            'status':'出战存疑',
            'detail':'膝盖受伤，无法出战周三对阵老鹰的比赛',
            'important':false
        },{
            'name':'阿伦',
            'status':'出战存疑',
            'detail':'腹股沟受伤，无法出战周三对阵老鹰的比赛',
            'important':true
        },{
            'name':'丹尼.格林',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周三对阵老鹰的比赛',
            'important':false
        }
    ],
    //达拉斯独行侠
    mavericks:[
        {
            'name':'克勒贝尔',
            'status':'出战存疑',
            'detail':'腿筋拉伤，周四对阵76人的比赛出战存疑',
            'important':false
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
            'name':'小波特',
            'status':'出战存疑',
            'detail':'左脚后跟受伤，周二对阵76人的比赛出战存疑',
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
            'name':'以赛亚.里弗斯',
            'status':'缺阵',
            'detail':'臀部受伤，还需要缺阵一段时间',
            'important':false
        },{        
            'name':'麦克格鲁',
            'status':'出战存疑',
            'detail':'左腿受伤，每日观察',
            'important':false
        },{        
            'name':'约瑟夫',
            'status':'出战存疑',
            'detail':'身体不适，每日观察',
            'important':false
        }
    ],
    //金州勇士
    warriors:[
        {        
            'name':'小佩顿',
            'status':'出战',
            'detail':'可以出战周一对阵森林狼的比赛',
            'important':false
        },{        
            'name':'维金斯',
            'status':'缺阵',
            'detail':'个人原因，归期未定',
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
            'status':'出战存疑',
            'detail':'背部受伤，周四对阵雄鹿的比赛出战存疑',
            'important':true
        },{
            'name':'杜阿尔特',
            'status':'缺阵',
            'detail':'左脚踝受伤，还需要缺阵一段时间',
            'important':false
        },{
            'name':'希尔德',
            'status':'缺阵',
            'detail':'身体不适，无法出战周二对阵独行侠的比赛',
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
            'name':'鲍威尔',
            'status':'缺阵',
            'detail':'伤病管理，预计至少缺阵1-2周时间',
            'important':true
        },{
            'name':'乔治',
            'status':'长期缺阵',
            'detail':'膝盖受伤，预计至少缺阵3-4周时间',
            'important':true
        },{
            'name':'马库斯.莫里斯',
            'status':'缺阵',
            'detail':'身体不适，还需要缺阵一段时间',
            'important':false
        }
    ],
    //洛杉矶湖人
    lakers:[
        {
            'name':'拉塞尔',
            'status':'出战',
            'detail':'可以出战周三对阵公牛的比赛',
            'important':true
        },{
            'name':'安东尼.戴维斯',
            'status':'出战',
            'detail':'可以出战周三对阵公牛的比赛',
            'important':true
        },{
            'name':'班巴',
            'status':'缺阵',
            'detail':'脚踝受伤，预计会缺阵3-4周时间',
            'important':false
        },{
            'name':'詹姆斯',
            'status':'出战存疑',
            'detail':'腿部受伤，周四对阵公牛的比赛出战存疑',
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
            'name':'莫兰特',
            'status':'出战存疑',
            'detail':'身体不适，周四对阵快船的比赛出战存疑',
            'important':true
        }
    ],
    //迈阿密热火
    heat:[
        {
            'name':'巴特勒',
            'status':'出战存疑',
            'detail':'颈部受伤，周四对阵尼克斯的比赛出战存疑',
            'important':true
        },{
            'name':'洛瑞',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周四对阵尼克斯的比赛',
            'important':false
        }
    ],
    //密尔沃基雄鹿
    bucks:[
        {
            'name':'克劳德',
            'status':'缺阵',
            'detail':'伤病管理，无法周四对阵雄鹿的比赛',
            'important':false
        },{
            'name':'德拉季奇',
            'status':'出战',
            'detail':'可以出战周四对阵步行者的比赛',
            'important':false
        },{
            'name':'字母哥',
            'status':'出战',
            'detail':'可以出战周四对阵步行者的比赛',
            'important':true
        },{
            'name':'霍乐迪',
            'status':'出战',
            'detail':'可以出战周四对阵步行者的比赛',
            'important':true
        },{
            'name':'米德尔顿',
            'status':'出战存疑',
            'detail':'伤病管理，周四对阵步行者的比赛出战存疑',
            'important':true
        }
    ],
    //明尼苏达森林狼
    timberwolves:[
        {
            'name':'唐斯',
            'status':'出战',
            'detail':'可以出战周四对阵太阳的比赛',
            'important':true
        },{
            'name':'爱德华兹',
            'status':'出战',
            'detail':'可以出战周四对阵太阳的比赛',
            'important':true
        },{
            'name':'诺埃尔',
            'status':'出战存疑',
            'detail':'左膝受伤，周四对阵太阳的比赛出战存疑',
            'important':false
        },{
            'name':'普林斯',
            'status':'出战存疑',
            'detail':'身体不适，周四对阵太阳的比赛出战存疑',
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
        },{
            'name':'墨菲',
            'status':'出战存疑',
            'detail':'身体不适，周日对阵快船的比赛出战存疑',
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
            'name':'杰伦.布伦森',
            'status':'出战存疑',
            'detail':'手部受伤，周四对阵热火的比赛出战存疑',
            'important':true
        },{
            'name':'德里克.罗斯',
            'status':'出战存疑',
            'detail':'身体不适，周四对阵热火的比赛出战存疑',
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
        },{
            'name':'亚历山大',
            'status':'出战存疑',
            'detail':'脚踝扭伤，周四对阵活塞的比赛出战存疑',
            'important':true
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
            'name':'凯文.哈里斯',
            'status':'缺阵',
            'detail':'手肘受伤，无法出战周三对阵灰熊的比赛',
            'important':false
        }
    ],
    //费城76人
    seven6ers:[
        {        
            'name':'哈登',
            'status':'出战存疑',
            'detail':'小腿酸痛，周四对阵独行侠的比赛出战存疑',
            'important':true
        },{        
            'name':'恩比德',
            'status':'出战存疑',
            'detail':'腿筋拉伤，周四对阵独行侠的比赛出战存疑',
            'important':true
        }
    ],
    //菲尼克斯太阳
    suns:[
        {
            'name':'杜兰特',
            'status':'出战',
            'detail':'可以出战周四对阵森林狼的比赛',
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
            'name':'沃特福德',
            'status':'出战存疑',
            'detail':'右脚踝受伤，周四对阵国王的比赛出战存疑',
            'important':false
        },{
            'name':'雷迪什',
            'status':'出战存疑',
            'detail':'背部受伤，周四对阵国王的比赛出战存疑',
            'important':false
        }
    ],
    //萨克拉门托国王
    kings:[
        {
            'name':'福克斯',
            'status':'出战',
            'detail':'可以出战周二对阵森林狼的比赛',
            'important':true
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
            'status':'缺阵',
            'detail':'腿部受伤，还需要缺阵一段时间',
            'important':true
        },{
            'name':'瓦塞尔',
            'status':'缺阵',
            'detail':'左膝受伤，还需要缺阵一段时间',
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
            'name':'班顿',
            'status':'缺阵',
            'detail':'拇指受伤，还需要缺阵一段时间',
            'important':false
        },{
            'name':'小特伦特',
            'status':'缺阵',
            'detail':'肘部受伤，无法出战周三对阵热火的比赛',
            'important':false
        },{
            'name':'威尔.巴顿',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战周三对阵热火的比赛',
            'important':false
        }
    ],
    //犹它爵士
    jazz:[
        {
            'name':'塞克斯顿',
            'status':'缺阵',
            'detail':'腿筋拉伤，还需要缺阵一段时间',
            'important':true
        },{
            'name':'克拉克森',
            'status':'缺阵',
            'detail':'手指受伤，还需要缺阵一段时间',
            'important':true
        },{
            'name':'马尔坎宁',
            'status':'出战存疑',
            'detail':'手部受伤，周四对阵马刺的比赛出战存疑',
            'important':true
        },{
            'name':'丰泰奇奥',
            'status':'出战存疑',
            'detail':'脚趾受伤，周四对阵马刺的比赛出战存疑',
            'important':true
        },{
            'name':'鲁迪.盖伊',
            'status':'缺阵',
            'detail':'背部受伤，还需要缺阵一段时间',
            'important':false
        }                     
    ],
    //华盛顿奇才
    wizards:[
        {
            'name':'库兹马',
            'status':'缺阵',
            'detail':'脚踝受伤，还需要缺阵一段时间',
            'important':true
        },{
            'name':'比尔',
            'status':'缺阵',
            'detail':'腿部受伤，还需要缺阵一段时间',
            'important':true
        },{
            'name':'加福德',
            'status':'缺阵',
            'detail':'左腿受伤，无法出战周三对阵凯尔特人的比赛',
            'important':false
        }
    ]   
}

module.exports = nbaData;