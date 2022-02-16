const nbaData = {
    //亚特兰大老鹰
    hawks:[
        {
            'name':'科林斯',
            'status':'缺阵',
            'detail':'右脚受伤，直到全明星赛后才能复出',
            'important':true
        },{
            'name':'博格丹',
            'status':'大概率出战',
            'detail':'左脚踝受伤，大概率出战周三对阵骑士的比赛',
            'important':true
        },{
            'name':'德隆.赖特',
            'status':'大概率出战',
            'detail':'左侧腹股沟受伤，大概率出战周三对阵骑士的比赛',
            'important':false
        }
    ],
    //波士顿凯尔特人
    celtics:[
        {        
            'name':'丹尼尔.泰斯',
            'status':'出战',
            'detail':'可以出战周三对阵76人的比赛',
            'important':false
        },{        
            'name':'罗伯特.威廉姆斯',
            'status':'出战存疑',
            'detail':'小腿受伤，周三对阵76人的比赛出战存疑',
            'important':false
        },{        
            'name':'斯马特',
            'status':'出战存疑',
            'detail':'身体不适，周三对阵76人的比赛出战存疑',
            'important':true
        }
    ],
    //布鲁克林篮网
    nets:[
        {        
            'name':'本.西蒙斯',
            'status':'缺阵',
            'detail':'刚被交易到篮网，还未做好出战准备',
            'important':true
        },{
            'name':'乔.哈里斯',
            'status':'长期缺阵',
            'detail':'左脚踝手术，预计缺阵4-8周',
            'important':true
        },{
            'name':'凯文.杜兰特',
            'status':'长期缺阵',
            'detail':'左膝扭伤，预计缺阵4-6周',
            'important':true
        },{
            'name':'凯里.欧文',
            'status':'视主客场而定',
            'detail':'主场缺阵，客场出战',
            'important':true
        }
    ],
    //夏洛特黄蜂
    hornets:[
        {
            'name':'海沃德',
            'status':'长期缺阵',
            'detail':'左膝韧带扭伤，归期未定',
            'important':true
        },{
            'name':'科迪.马丁',
            'status':'缺阵',
            'detail':'左脚踝受伤，无法出战周日对阵灰熊的比赛',
            'important':false
        },{
            'name':'麦克丹尼尔斯',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战周日对阵灰熊的比赛',
            'important':false
        }
    ],
    //芝加哥公牛
    bulls:[
        {
            'name':'拉文',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战周二对阵马刺的比赛',
            'important':true
        },{
            'name':'卡鲁索',
            'status':'长期缺阵',
            'detail':'手腕骨折，预计缺阵4-6周',
            'important':true
        },{
            'name':'朗佐.鲍尔',
            'status':'长期缺阵',
            'detail':'膝盖手术，预计缺阵4-6周',
            'important':true
        },{
            'name':'帕特里克.威廉姆斯',
            'status':'缺阵',
            'detail':'腕部受伤，归期未定',
            'important':false
        }
    ],
    //克利夫兰骑士
    cavaliers:[
        {
            'name':'马尔坎宁',
            'status':'缺阵',
            'detail':'腿部受伤，预计至少缺阵几周',
            'important':true
        },{
            'name':'塞克斯顿',
            'status':'缺阵',
            'detail':'左膝受伤，归期未定',
            'important':true
        }
    ],
    //达拉斯独行侠
    mavericks:[
        {        
            'name':'丁威迪',
            'status':'出战',
            'detail':'可以出战周三对阵热火的比赛',
            'important':false
        },{        
            'name':'贝尔坦斯',
            'status':'出战',
            'detail':'可以出战周三对阵热火的比赛',
            'important':false
        },{
            'name':'小哈达威',
            'status':'长期缺阵',
            'detail':'腿部手术，归期未定',
            'important':true
        },{
            'name':'马基斯.克里斯',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战周三对阵热火的比赛',
            'important':false
        },{
            'name':'特雷.伯克',
            'status':'出战存疑',
            'detail':'肩膀受伤，周三对阵热火的比赛出战存疑',
            'important':false
        },{
            'name':'布洛克',
            'status':'出战存疑',
            'detail':'腿部受伤，周三对阵热火的比赛出战存疑',
            'important':false
        }
    ],
    //丹佛掘金
    nuggets:[
        {
            'name':'齐克.纳吉',
            'status':'缺阵',
            'detail':'肌腱受伤，无法出战周二对阵魔术的比赛',
            'important':false
        },{
            'name':'蒙特.莫里斯',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周二对阵魔术的比赛',
            'important':true
        },{
            'name':'钱查尔',
            'status':'缺阵',
            'detail':'腿部受伤，归期未定',
            'important':false
        },{
            'name':'小波特',
            'status':'长期缺阵',
            'detail':'背部受伤，预计会赛季报销',
            'important':true
        },{
            'name':'贾马尔.默里',
            'status':'长期缺阵',
            'detail':'遭受ACL膝伤，目前没有明确的复出时间',
            'important':true
        }    
    ],
    //底特律活塞
    pistons:[
        {        
            'name':'弗兰克.杰克逊',
            'status':'缺阵',
            'detail':'背部受伤，无法出战周二对阵奇才的比赛',
            'important':false
        },{
            'name':'以赛亚.里弗斯',
            'status':'缺阵',
            'detail':'腿部受伤，归期未定',
            'important':false
        }
    ],
    //金州勇士
    warriors:[
        {
            'name':'伊戈达拉',
            'status':'缺阵',
            'detail':'臀部受伤，归期未定',
            'important':false
        },{
            'name':'怀斯曼',
            'status':'缺阵',
            'detail':'膝盖受伤，归期未定',
            'important':false
        },{
            'name':'格林',
            'status':'缺阵',
            'detail':'小腿拉伤，预计全明星赛后复出',
            'important':true
        }       
    ],
    //休斯顿火箭
    rockets:[
       {
            'name':'加鲁巴',
            'status':'长期缺阵',
            'detail':'膝盖受伤，预计缺阵6-8周',
            'important':false
        },{
            'name':'约翰.沃尔',
            'status':'长期缺阵',
            'detail':'跟球队协商后决定，新赛季不会为火箭出场比赛，但工资照拿',
            'important':false
        }
    ],
    //印第安纳步行者
    pacers:[
        {
            'name':'杜阿尔特',
            'status':'缺阵',
            'detail':'脚趾受伤，预计缺席几场比赛养伤',
            'important':true
        },{
            'name':'以赛亚.杰克逊',
            'status':'缺阵',
            'detail':'脚踝受伤，预计缺席几场比赛养伤',
            'important':false
        },{
            'name':'布罗格登',
            'status':'出战存疑',
            'detail':'跟腱受伤，周三对阵雄鹿的比赛出战存疑',
            'important':true
        },{
            'name':'迈尔斯.特纳',
            'status':'缺阵',
            'detail':'左脚受伤，预计全明星赛后复出',
            'important':true
        },{
            'name':'卢比奥',
            'status':'长期缺阵',
            'detail':'左膝前叉韧带断裂，赛季报销',
            'important':false
        },{
            'name':'TJ.麦克康奈尔',
            'status':'长期缺阵',
            'detail':'手腕手术，预计明年三月份后回归',
            'important':false
        },{
            'name':'TJ.沃伦',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        }
    ],
    //洛杉矶快船
    clippers:[
        {
            'name':'卢克.肯纳德',
            'status':'出战存疑',
            'detail':'脚踝受伤，周三对阵太阳的比赛出战存疑',
            'important':true
        },{
            'name':'鲍威尔',
            'status':'长期缺阵',
            'detail':'腿部骨折，归期未定',
            'important':true
        },{
            'name':'保罗.乔治',
            'status':'长期缺阵',
            'detail':'手肘撕裂，预计缺阵四周',
            'important':true
        },{
            'name':'科怀.伦纳德',
            'status':'长期缺阵',
            'detail':'遭受膝盖ACL伤病，预计将缺阵整个赛季',
            'important':true
        },{
            'name':'普雷斯頓',
            'status':'长期缺阵',
            'detail':'本周四腿部接受了手术，本赛季将长期缺阵',
            'important':false
        },{        
            'name':'奥杰来',
            'status':'出战存疑',
            'detail':'刚被交易到快船，每日观察',
            'important':false
        }
    ],
    //洛杉矶湖人
    lakers:[
        {
            'name':'安东尼',
            'status':'缺阵',
            'detail':'肌腱受伤，无法出战周日对阵勇士的比赛',
            'important':true
        },{
            'name':'纳恩',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战',
            'important':false
        }  
    ],
    //孟菲斯灰熊
    grizzlies:[
        {
            'name':'蒂尔曼',
            'status':'缺阵',
            'detail':'腿部受伤，归期未定',
            'important':false
        },{
            'name':'贾.莫兰特',
            'status':'出战存疑',
            'detail':'左脚踝受伤，周三对阵鹈鹕的比赛出战存疑',
            'important':true
        },{
            'name':'狄龙布鲁克斯',
            'status':'缺阵',
            'detail':'脚踝受伤，预计缺阵3-5周',
            'important':true
        }
    ],
    //迈阿密热火
    heat:[
           {
            'name':'戴德蒙',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周三对阵独行侠的比赛',
            'important':false
        },{
            'name':'凯莱布.马丁',
            'status':'缺阵',
            'detail':'肌腱受伤，无法出战周三对阵独行侠的比赛',
            'important':false
        },{
            'name':'希罗',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战周三对阵独行侠的比赛',
            'important':true
        },{
            'name':'吉米.巴特勒',
            'status':'出战存疑',
            'detail':'右肩受伤，周三对阵独行侠的比赛出战存疑',
            'important':true
        },{
            'name':'马基夫.莫里斯',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'奥拉迪波',
            'status':'长期缺阵',
            'detail':'股四头肌受伤，归期未定',
            'important':false
        }        
    ],
    //密尔沃基雄鹿
    bucks:[
        {
            'name':'字母哥',
            'status':'大概率出战',
            'detail':'脚踝受伤，大概率出战周三对阵步行者的比赛',
            'important':true
        },{
            'name':'康诺顿',
            'status':'长期缺阵',
            'detail':'腿部受伤，归期未定',
            'important':false
        },{
            'name':'马修斯',
            'status':'缺阵',
            'detail':'右脚趾受伤，无法出战周三对阵步行者的比赛',
            'important':false
        },{
            'name':'乔治.希尔',
            'status':'缺阵',
            'detail':'腿部受伤，归期未定',
            'important':false
        },{
            'name':'洛佩兹',
            'status':'长期缺阵',
            'detail':'背部手术，归期未定',
            'important':true
        }
    ],
    //明尼苏达森林狼
    timberwolves:[
        {
            'name':'莱特',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        }
    ],
    //新奥尔良鹈鹕
    pelicans:[
        {
            'name':'南斯',
            'status':'缺阵',
            'detail':'腿部受伤，归期不定',
            'important':false
        },{
            'name':'小刘易斯',
            'status':'长期缺阵',
            'detail':'右膝前叉十字韧带撕裂，赛季报销',
            'important':false
        },{
            'name':'锡安.威廉森',
            'status':'长期缺阵',
            'detail':'腿部受伤，归期不定',
            'important':true
        }     
    ],
    //纽约尼克斯
    knicks:[
        {
            'name':'RJ.巴雷特',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战周二对阵雷霆的比赛',
            'important':true
        },{
            'name':'诺埃尔',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战周二对阵雷霆的比赛',
            'important':false
        },{
            'name':'德里克.罗斯',
            'status':'缺阵',
            'detail':'右脚踝受伤，预计马上复出',
            'important':true
        }
    ],
    //俄克拉荷马城雷霆
    thunder:[
        {
            'name':'多尔特',
            'status':'缺阵',
            'detail':'肩膀受伤，无法出战周二对阵尼克斯的比赛',
            'important':true
        },{
            'name':'穆斯卡拉',
            'status':'长期缺阵',
            'detail':'脚踝受伤，预计全明星后才能复出',
            'important':false
        },{
            'name':'厄尔',
            'status':'缺阵',
            'detail':'腿部受伤，归期未定',
            'important':false
        },{
            'name':'亚历山大',
            'status':'缺阵',
            'detail':'脚踝受伤，归期未定',
            'important':true
        }
    ],
    //奥兰多魔术
    magic:[
        {
            'name':'大瓦格纳',
            'status':'缺阵',
            'detail':'腿部受伤，归期未定',
            'important':false
        },{
            'name':'RJ.汉普顿',
            'status':'缺阵',
            'detail':'膝盖受伤，预计缺阵2-4周',
            'important':false
        },{
            'name':'艾萨克',
            'status':'长期缺阵',
            'detail':'左膝ACL伤病，没有回归时间',
            'important':true
        },{
            'name':'富尔茨',
            'status':'长期缺阵',
            'detail':'膝盖受伤，没有回归时间',
            'important':true
        },{
            'name':'波尔',
            'status':'缺阵',
            'detail':'膝盖受伤，归期未定',
            'important':false
        }
    ],
    //费城76人
    seven6ers:[
        {        
            'name':'詹姆斯.哈登',
            'status':'缺阵',
            'detail':'肌腱受伤，预计全明星赛后复出',
            'important':true
        }
    ],
    //菲尼克斯太阳
    suns:[
        {
            'name':'沙梅特',
            'status':'缺阵',
            'detail':'脚踝受伤，归期未定',
            'important':false
        },{
            'name':'卡梅隆.佩恩',
            'status':'缺阵',
            'detail':'手腕受伤，至少缺阵两周',
            'important':false
        },{
            'name':'卡明斯基',
            'status':'长期缺阵',
            'detail':'右膝受伤，归期不明',
            'important':false
        },{
            'name':'沙里奇',
            'status':'长期缺阵',
            'detail':'右膝ACL伤病，预计本赛季不会回归',
            'important':false
        } 
    ],
    //波特兰开拓者
    blazers:[
        {
            'name':'丹尼斯.史密斯',
            'status':'缺阵',
            'detail':'肘部受伤，无法出战周二对阵雄鹿的比赛',
            'important':false
        },{
            'name':'基翁.约翰逊',
            'status':'缺阵',
            'detail':'刚被交易到开拓者，不确定何时可以出战',
            'important':false
        },{
            'name':'布莱德索',
            'status':'缺阵',
            'detail':'刚被交易到开拓者，不确定何时可以出战',
            'important':false
        },{
            'name':'利特尔',
            'status':'缺阵',
            'detail':'肩膀受伤，大概率赛季报销',
            'important':true
        },{
            'name':'泽勒',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周二对阵魔术的比赛',
            'important':false
        },{
            'name':'利拉德',
            'status':'长期缺阵',
            'detail':'腹股沟受伤，有可能会赛季报销，六周之后再评估',
            'important':true
        },{
            'name':'英格尔斯',
            'status':'长期缺阵',
            'detail':'左膝ACL伤病，赛季报销',
            'important':false
        }
    ],
    //萨克拉门托国王
    kings:[
        {
            'name':'兰姆',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战周二对阵篮网的比赛',
            'important':false
        },{
            'name':'特伦斯.戴维斯',
            'status':'缺阵',
            'detail':'头部受伤，归期未定',
            'important':false
        }
    ],
    //圣安东尼奥马刺
    spurs:[
        {
            'name':'戈兰.德拉季奇',
            'status':'长期缺阵',
            'detail':'个人原因，等待被球队买断',
            'important':false
        }
    ],
    //多伦多猛龙
    raptors:[
        {
            'name':'大卫.约翰逊',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        }       
    ],
    //犹它爵士
    jazz:[
        {
            'name':'鲁迪.盖伊',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战周二对阵火箭的比赛',
            'important':false
        }                 
    ],
    //华盛顿奇才
    wizards:[
        {
            'name':'八村塁',
            'status':'出战存疑',
            'detail':'右脚踝受伤，每日观察',
            'important':false
        },{
            'name':'加福德',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'比尔',
            'status':'长期缺阵',
            'detail':'左手腕手术，赛季报销',
            'important':true
        },{        
            'name':'波尔津吉斯',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战周二对阵活塞的比赛',
            'important':true
        }
    ]   
}

module.exports = nbaData;