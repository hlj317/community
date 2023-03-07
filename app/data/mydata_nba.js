const nbaData = {
    //亚特兰大老鹰
    hawks:[
        {
            'name':'特雷杨',
            'status':'出战',
            'detail':'可以出战周二对阵热火的比赛',
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
            'detail':'腿筋拉伤，至少还需要缺阵一周时间',
            'important':false
        },{        
            'name':'布罗格登',
            'status':'出战存疑',
            'detail':'脚踝受伤，周二对阵骑士的比赛出战存疑',
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
            'name':'萨姆纳',
            'status':'出战',
            'detail':'可以出战周三对阵火箭的比赛',
            'important':false
        },{
            'name':'渡边雄太',
            'status':'出战',
            'detail':'可以出战周三对阵火箭的比赛',
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
        }
    ],
    //克利夫兰骑士
    cavaliers:[
        {
            'name':'米切尔',
            'status':'出战',
            'detail':'可以出战周二对阵凯尔特人的比赛',
            'important':true
        }
    ],
    //达拉斯独行侠
    mavericks:[
        {
            'name':'克勒贝尔',
            'status':'出战存疑',
            'detail':'腿筋拉伤，周三对阵爵士的比赛出战存疑',
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
            'name':'纳吉',
            'status':'缺阵',
            'detail':'肩膀受伤，至少还需要缺阵两周时间',
            'important':false
        },{
            'name':'钱查尔',
            'status':'缺阵',
            'detail':'手腕受伤，无法出战周二对阵猛龙的比赛',
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
            'name':'杜伦',
            'status':'缺阵',
            'detail':'腿部受伤，需要缺阵一段时间',
            'important':false
        },{        
            'name':'博扬',
            'status':'出战存疑',
            'detail':'伤病管理，周三对阵奇才的比赛出战存疑',
            'important':true
        },{        
            'name':'海斯',
            'status':'出战存疑',
            'detail':'左手受伤，周三对阵奇才的比赛出战存疑',
            'important':false
        },{        
            'name':'迪亚洛',
            'status':'出战存疑',
            'detail':'脚踝受伤，周三对阵奇才的比赛出战存疑',
            'important':false
        }
    ],
    //金州勇士
    warriors:[
        {
            'name':'伊戈达拉',
            'status':'出战',
            'detail':'可以出战周三对阵雷霆的比赛',
            'important':false
        },{        
            'name':'小佩顿',
            'status':'缺阵',
            'detail':'腿部受伤，预计会缺阵一段时间',
            'important':false
        },{        
            'name':'维金斯',
            'status':'缺阵',
            'detail':'个人原因，归期未定',
            'important':true
        }
    ],
    //休斯顿火箭
    rockets:[
        {
            'name':'泰特',
            'status':'出战',
            'detail':'可以出战周三对阵篮网的比赛',
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
            'name':'内史密斯',
            'status':'缺阵',
            'detail':'左臀受伤，无法出战周二对阵76人的比赛',
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
            'detail':'伤病管理，预计至少缺阵1周时间',
            'important':true
        }
    ],
    //洛杉矶湖人
    lakers:[
        {
            'name':'拉塞尔',
            'status':'出战存疑',
            'detail':'脚踝受伤，周三对阵灰熊的比赛出战存疑',
            'important':true
        },{
            'name':'安东尼.戴维斯',
            'status':'出战存疑',
            'detail':'伤病管理，周三对阵灰熊的比赛出战存疑',
            'important':true
        },{
            'name':'詹姆斯',
            'status':'缺阵',
            'detail':'脚踝受伤，至少需要缺阵三周时间',
            'important':true
        },{
            'name':'班巴',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战周三对阵灰熊的比赛',
            'important':false
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
            'name':'莫兰特',
            'status':'缺阵',
            'detail':'做出违规行为，被联盟禁赛两场比赛',
            'important':true
        },{
            'name':'克拉克',
            'status':'长期缺阵',
            'detail':'左肌腱严重拉伤，赛季报销',
            'important':false
        }
    ],
    //迈阿密热火
    heat:[
        {
            'name':'尤尔特塞文',
            'status':'长期缺阵',
            'detail':'腿部受伤，归期未定',
            'important':false
        },{
            'name':'约维奇',
            'status':'长期缺阵',
            'detail':'背部受伤，预计缺阵1个月时间',
            'important':false
        },{
            'name':'洛瑞',
            'status':'缺阵',
            'detail':'左膝受伤，还需要缺阵一段时间',
            'important':false
        }
    ],
    //密尔沃基雄鹿
    bucks:[
        {
            'name':'马修斯',
            'status':'缺阵',
            'detail':'小腿受伤，还需要缺阵一段时间',
            'important':false
        },{
            'name':'霍乐迪',
            'status':'出战存疑',
            'detail':'伤病管理，周三对阵魔术的比赛出战存疑',
            'important':true
        },{
            'name':'德拉季奇',
            'status':'出战存疑',
            'detail':'膝盖受伤，无法出战周三对阵魔术的比赛',
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
            'name':'诺埃尔',
            'status':'缺阵',
            'detail':'左膝受伤，无法出战周三对阵76人的比赛',
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
            'name':'小南斯',
            'status':'缺阵',
            'detail':'身体不适，至少缺阵两周时间',
            'important':false
        },{
            'name':'瓦兰丘纳斯',
            'status':'出战',
            'detail':'可以出战周二对阵国王的比赛',
            'important':true
        },{
            'name':'阿尔瓦拉多',
            'status':'缺阵',
            'detail':'腿部受伤，至少缺阵三周时间',
            'important':false
        },{
            'name':'约什.理查德森',
            'status':'缺阵',
            'detail':'个人原因，无法出战周二对阵国王的比赛',
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
            'detail':'左脚受伤，周三对阵黄蜂的比赛出战存疑',
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
            'name':'波库',
            'status':'长期缺阵',
            'detail':'左腿严重受伤，预计缺阵至少6-8周',
            'important':true
        },{
            'name':'杰伦.威廉姆斯',
            'status':'出战存疑',
            'detail':'右手腕受伤，周三对阵勇士的比赛出战存疑',
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
            'name':'加里.哈里斯',
            'status':'出战存疑',
            'detail':'腿部受伤，周三对阵雄鹿的比赛出战存疑',
            'important':false
        },{
            'name':'温德勒.卡特',
            'status':'出战存疑',
            'detail':'腿部受伤，周三对阵雄鹿的比赛出战存疑',
            'important':true
        }
    ],
    //费城76人
    seven6ers:[
        {        
            'name':'戴德蒙',
            'status':'缺阵',
            'detail':'臀部受伤，还需要缺阵一段时间',
            'important':false
        },{        
            'name':'哈里斯',
            'status':'出战存疑',
            'detail':'小腿受伤，周三对阵森林狼的比赛出战存疑',
            'important':true
        },{        
            'name':'PJ.塔克',
            'status':'出战存疑',
            'detail':'背部受伤，周三对阵森林狼的比赛出战存疑',
            'important':false
        }
    ],
    //菲尼克斯太阳
    suns:[
        {
            'name':'沙梅特',
            'status':'缺阵',
            'detail':'腿部受伤，还需要缺阵一段时间',
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
            'name':'努尔基奇',
            'status':'缺阵',
            'detail':'左小腿受伤，预计还要缺阵一段时间',
            'important':true
        },{
            'name':'安芬尼.西蒙斯',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战周一对阵魔术的比赛',
            'important':true
        }
    ],
    //萨克拉门托国王
    kings:[
        {
            'name':'霍姆斯',
            'status':'出战',
            'detail':'可以出战周二对阵鹈鹕的比赛',
            'important':false
        },{
            'name':'福克斯',
            'status':'缺阵',
            'detail':'腿筋拉伤，无法出战周二对阵鹈鹕的比赛',
            'important':true
        }
    ],
    //圣安东尼奥马刺
    spurs:[
        {
            'name':'瓦塞尔',
            'status':'出战',
            'detail':'可以出战周一对阵火箭的比赛',
            'important':true
        },{
            'name':'肯.伯奇',
            'status':'缺阵',
            'detail':'膝盖受伤，预计全明星赛后复出',
            'important':false
        },{
            'name':'罗比',
            'status':'缺阵',
            'detail':'身体不适，会缺阵一段时间',
            'important':false
        },{
            'name':'凯尔登.约翰逊',
            'status':'出战',
            'detail':'可以出战周一对阵火箭的比赛',
            'important':true
        },{
            'name':'扎克.科林斯',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周一对阵火箭的比赛',
            'important':false
        },{
            'name':'索汉',
            'status':'缺阵',
            'detail':'右膝受伤，无法出战周一对阵火箭的比赛',
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
            'detail':'身体不适，无法出战周二对阵掘金的比赛',
            'important':false
        }
    ],
    //犹它爵士
    jazz:[
        {
            'name':'塞克斯顿',
            'status':'缺阵',
            'detail':'腿筋拉伤，预计会缺阵一段时间',
            'important':true
        },{
            'name':'马尔坎宁',
            'status':'出战',
            'detail':'可以无法出战周三对阵独行侠的比赛',
            'important':true
        }                      
    ],
    //华盛顿奇才
    wizards:[
        {
            'name':'蒙特.莫里斯',
            'status':'出战存疑',
            'detail':'背部受伤，周三对阵活塞的比赛出战存疑',
            'important':false
        },{
            'name':'库兹马',
            'status':'出战存疑',
            'detail':'膝盖受伤，周三对阵活塞的比赛出战存疑',
            'important':true
        }
    ]   
}

module.exports = nbaData;