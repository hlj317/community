const nbaData = {
    //亚特兰大老鹰
    hawks:[
        {
            'name':'科林斯',
            'status':'出战',
            'detail':'可以出战周一对阵篮网的比赛',
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
            'detail':'个人原因，无法出战周二对阵尼克斯的比赛',
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
            'name':'PJ.华盛顿',
            'status':'出战存疑',
            'detail':'腿部受伤，周二对阵活塞的比赛出战存疑',
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
            'name':'德拉季奇',
            'status':'缺阵',
            'detail':'伤病管理，还需要缺阵一段时间',
            'important':false
        }
    ],
    //克利夫兰骑士
    cavaliers:[
        {
            'name':'卢比奥',
            'status':'出战',
            'detail':'可以出战周六对阵老鹰的比赛',
            'important':false
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
            'name':'贝尔坦斯',
            'status':'缺阵',
            'detail':'小腿受伤，还需要缺阵一段时间',
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
            'detail':'肩膀受伤，还会缺阵一段时间',
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
            'status':'出战存疑',
            'detail':'腿部受伤，周二对阵黄蜂的比赛出战存疑',
            'important':false
        },{        
            'name':'博扬',
            'status':'出战存疑',
            'detail':'身体不适，周二对阵黄蜂的比赛出战存疑',
            'important':true
        },{        
            'name':'诺埃尔',
            'status':'缺阵',
            'detail':'个人原因，无法出战周日对阵猛龙的比赛',
            'important':false
        },{        
            'name':'杜伦',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周日对阵猛龙的比赛',
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
            'status':'长期存疑',
            'detail':'左腿受伤，预计缺阵3-4周时间',
            'important':true
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
        },{        
            'name':'德拉蒙德.格林',
            'status':'出战存疑',
            'detail':'膝盖受伤，周一对阵森林狼的比赛出战存疑',
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
            'status':'缺阵',
            'detail':'腹股沟受伤，无法出战周六对阵勇士的比赛',
            'important':true
        }
    ],
    //印第安纳步行者
    pacers:[
        {
            'name':'肯德尔.布朗',
            'status':'出战存疑',
            'detail':'身体不适，周日对阵魔术的比赛出战存疑',
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
            'name':'祖巴茨',
            'status':'缺阵',
            'detail':'小腿受伤，无法出战周一对阵掘金的比赛',
            'important':false
        }
    ],
    //洛杉矶湖人
    lakers:[
        {
            'name':'拉塞尔',
            'status':'出战存疑',
            'detail':'脚踝受伤，周一对阵独行侠的比赛出战存疑',
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
            'name':'肯纳德',
            'status':'出战',
            'detail':'可以出战周日对阵掘金的比赛',
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
            'name':'洛瑞',
            'status':'出战存疑',
            'detail':'左膝受伤，周二对阵76人的比赛出战存疑',
            'important':false
        },{
            'name':'希罗',
            'status':'出战存疑',
            'detail':'右肋骨受伤，周二对阵76人的比赛出战存疑',
            'important':true
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
            'name':'字母哥',
            'status':'出战存疑',
            'detail':'膝盖受伤，周一对阵太阳的比赛出战存疑',
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
            'name':'普林斯',
            'status':'出战存疑',
            'detail':'个人原因，周一对阵勇士的比赛出战存疑',
            'important':false
        },{
            'name':'诺埃尔',
            'status':'出战存疑',
            'detail':'左膝受伤，周一对阵勇士的比赛出战存疑',
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
            'name':'富尼耶',
            'status':'缺阵',
            'detail':'腿部受伤，还需要缺阵一段时间',
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
            'name':'波库',
            'status':'长期缺阵',
            'detail':'左腿严重受伤，预计缺阵至少6-8周',
            'important':true
        },{
            'name':'亚历山大',
            'status':'缺阵',
            'detail':'右脚踝受伤，无法出战周一对阵国王的比赛',
            'important':true
        }
    ],
    //奥兰多魔术
    magic:[
        {
            'name':'艾萨克',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周二对阵鹈鹕的比赛',
            'important':false
        }
    ],
    //费城76人
    seven6ers:[
        {        
            'name':'戴德蒙',
            'status':'缺阵',
            'detail':'臀部受伤，还需要缺阵一段时间',
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
        },{
            'name':'杜兰特',
            'status':'长期缺阵',
            'detail':'腿部伤势，预计全明星赛后复出',
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
            'name':'安芬尼.西蒙斯',
            'status':'缺阵',
            'detail':'脚踝受伤，归期未定',
            'important':true
        }
    ],
    //萨克拉门托国王
    kings:[
        {
            'name':'奥克帕拉',
            'status':'缺阵',
            'detail':'膝盖受伤，预计会缺阵一段时间',
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
            'name':'朗福德',
            'status':'缺阵',
            'detail':'臀部受伤，还需要缺阵一段时间',
            'important':false
        },{
            'name':'特雷.琼斯',
            'status':'出战存疑',
            'detail':'腿部受伤，周日对阵爵士的比赛出战存疑',
            'important':true
        },{
            'name':'索汉',
            'status':'出战存疑',
            'detail':'腿部受伤，周日对阵爵士的比赛出战存疑',
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
            'name':'范弗利特',
            'status':'缺阵',
            'detail':'个人原因，无法出战周日对阵活塞的比赛',
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
        },{
            'name':'塞克斯顿',
            'status':'缺阵',
            'detail':'腿筋拉伤，预计会缺阵一段时间',
            'important':true
        }                      
    ],
    //华盛顿奇才
    wizards:[
        {
            'name':'波尔津吉斯',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周一对阵公牛的比赛',
            'important':true
        }
    ]   
}

module.exports = nbaData;