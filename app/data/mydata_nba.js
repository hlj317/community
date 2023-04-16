const nbaData = {
    //亚特兰大老鹰
    hawks:[
        {
            'name':'亨特',
            'status':'出战',
            'detail':'可以出战周日对阵凯尔特人的比赛',
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
            'name':'无',
            'status':'无更新',
            'detail':'本赛季已结束'
        }
    ],
    //芝加哥公牛
    bulls:[
        {
            'name':'无',
            'status':'无更新',
            'detail':'本赛季已结束'
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
            'status':'出战',
            'detail':'可以出战周日对阵尼克斯的比赛',
            'important':false
        }
    ],
    //达拉斯独行侠
    mavericks:[
        {
            'name':'无',
            'status':'无更新',
            'detail':'本赛季已结束'
        }
    ],
    //丹佛掘金
    nuggets:[
        {
            'name':'科林·吉莱斯皮',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        }
    ],
    //底特律活塞
    pistons:[
        {
            'name':'无',
            'status':'无更新',
            'detail':'本赛季已结束'
        }
    ],
    //金州勇士
    warriors:[
        {        
            'name':'维金斯',
            'status':'出战',
            'detail':'可以出战周日对阵国王的比赛',
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
            'name':'无',
            'status':'无更新',
            'detail':'本赛季已结束'
        }
    ],
    //印第安纳步行者
    pacers:[
        {
            'name':'无',
            'status':'无更新',
            'detail':'本赛季已结束'
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
            'status':'出战',
            'detail':'可以出战周一对阵太阳的比赛',
            'important':false
        }
    ],
    //洛杉矶湖人
    lakers:[
        {
            'name':'安东尼.戴维斯',
            'status':'出战',
            'detail':'可以出战周一对阵灰熊的比赛',
            'important':true
        },{
            'name':'詹姆斯',
            'status':'出战',
            'detail':'可以出战周一对阵灰熊的比赛',
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
            'name':'克拉克',
            'status':'长期缺阵',
            'detail':'左肌腱严重拉伤，赛季报销',
            'important':false
        }
    ],
    //迈阿密热火
    heat:[
        {
            'name':'文森特',
            'status':'出战',
            'detail':'可以出战周一对阵雄鹿的比赛',
            'important':false
        }
    ],
    //密尔沃基雄鹿
    bucks:[
        {
            'name':'康文顿',
            'status':'出战存疑',
            'detail':'伤病管理，周一对阵热火的比赛出战存疑',
            'important':false
        },{
            'name':'格雷森.阿伦',
            'status':'出战存疑',
            'detail':'脚踝受伤，周一对阵热火的比赛出战存疑',
            'important':false
        },{
            'name':'米德尔顿',
            'status':'出战存疑',
            'detail':'脚踝受伤，周一对阵热火的比赛出战存疑',
            'important':true
        }
    ],
    //明尼苏达森林狼
    timberwolves:[
        {
            'name':'纳兹.里德',
            'status':'长期缺阵',
            'detail':'手腕骨折，预计赛季报销',
            'important':false
        }
    ],
    //新奥尔良鹈鹕
    pelicans:[
        {
            'name':'无',
            'status':'无更新',
            'detail':'本赛季已结束'
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
            'status':'出战',
            'detail':'可以出战周日对阵骑士的比赛',
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
            'name':'肯威',
            'status':'长期缺阵',
            'detail':'手腕手术，赛季报销',
            'important':false
        }
    ],
    //奥兰多魔术
    magic:[
        {
            'name':'无',
            'status':'无更新',
            'detail':'本赛季已结束'
        }
    ],
    //费城76人
    seven6ers:[
        {        
            'name':'尼昂',
            'status':'出战',
            'detail':'可以出战周日对阵篮网的比赛',
            'important':false
        }
    ],
    //菲尼克斯太阳
    suns:[
        {
            'name':'萨宾.李',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        }
    ],
    //波特兰开拓者
    blazers:[
        {
            'name':'无',
            'status':'无更新',
            'detail':'本赛季已结束'
        }
    ],
    //萨克拉门托国王
    kings:[
        {
            'name':'巴恩斯',
            'status':'出战',
            'detail':'可以出战周日对阵勇士的比赛',
            'important':true
        },{
            'name':'米切尔',
            'status':'出战',
            'detail':'可以出战周日对阵勇士的比赛',
            'important':false
        }
    ],
    //圣安东尼奥马刺
    spurs:[
        {
            'name':'无',
            'status':'无更新',
            'detail':'本赛季已结束'
        }
    ],
    //多伦多猛龙
    raptors:[
        {
            'name':'无',
            'status':'无更新',
            'detail':'本赛季已结束'
        }
    ],
    //犹它爵士
    jazz:[
        {
            'name':'无',
            'status':'无更新',
            'detail':'本赛季已结束'
        }                    
    ],
    //华盛顿奇才
    wizards:[
        {
            'name':'无',
            'status':'无更新',
            'detail':'本赛季已结束'
        }
    ]   
}

module.exports = nbaData;