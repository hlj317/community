const nbaData = {
    //亚特兰大老鹰
    hawks:[
        {
            'name':'加里纳利',
            'status':'出战存疑',
            'detail':'右脚跟腱受伤，周一对阵黄蜂的比赛出战存疑',
            'important':false
        },{
            'name':'赫尔特',
            'status':'出战存疑',
            'detail':'臀部受伤，周一对阵黄蜂的比赛出战存疑',
            'important':true
        },{
            'name':'博格丹',
            'status':'缺阵',
            'detail':'右膝受伤，周一对阵黄蜂的比赛出战存疑',
            'important':true
        }
    ],
    //波士顿凯尔特人
    celtics:[
        {        
            'name':'内史密斯',
            'status':'大概率出战',
            'detail':'大概率可以出战周一对阵奇才的比赛',
            'important':false
        },{
            'name':'斯马特',
            'status':'大概率出战',
            'detail':'大概率可以出战周一对阵奇才的比赛',
            'important':true
        },{        
            'name':'波尔',
            'status':'缺阵',
            'detail':'腿部受伤，暂时没有复出时间',
            'important':false
        }
    ],
    //布鲁克林篮网
    nets:[
        {
            'name':'米尔萨普',
            'status':'缺阵',
            'detail':'个人原因，无法出战周六对阵马刺的比赛，可能会被交易',
            'important':false
        },{
            'name':'克拉克斯顿',
            'status':'出战存疑',
            'detail':'腿部肌腱受伤，周一对阵森林狼的比赛出战存疑',
            'important':false
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
            'name':'麦克丹尼尔斯',
            'status':'缺阵',
            'detail':'身体不适，无法出战周一对阵老鹰的比赛',
            'important':false
        }
    ],
    //芝加哥公牛
    bulls:[
        {
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
            'name':'拉文',
            'status':'出战存疑',
            'detail':'膝盖肿胀，周二对阵雷霆的比赛出战存疑',
            'important':true
        },{
            'name':'小琼斯',
            'status':'长期缺阵',
            'detail':'膝盖扭伤，预计4周后复查',
            'important':false
        },{
            'name':'贾文特.格林',
            'status':'缺阵',
            'detail':'腿部受伤，至少休战2-4周',
            'important':false
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
            'detail':'腿部受伤，无法出战周二对阵尼克斯的比赛',
            'important':true
        },{
            'name':'卢比奥',
            'status':'长期缺阵',
            'detail':'左膝前叉韧带断裂，赛季报销',
            'important':true
        },{
            'name':'塞克斯顿',
            'status':'缺阵',
            'detail':'左膝受伤，归期未定',
            'important':true
        },{
            'name':'隆多',
            'status':'出战存疑',
            'detail':'肌腱受伤，周二对阵尼克斯的比赛出战存疑',
            'important':false
        }
    ],
    //达拉斯独行侠
    mavericks:[
        {
            'name':'斯特林.布朗',
            'status':'缺阵',
            'detail':'身体不适，无法出战周五对阵太阳的比赛',
            'important':false
        }
    ],
    //丹佛掘金
    nuggets:[
        {
            'name':'杰夫.格林',
            'status':'出战存疑',
            'detail':'腿部受伤，周一对阵活塞的比赛出战存疑',
            'important':false
        },{
            'name':'杰迈克尔.格林',
            'status':'出战存疑',
            'detail':'新冠刚转阴性，周一对阵活塞的比赛出战存疑',
            'important':false
        },{
            'name':'钱查尔',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
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
            'name':'格兰特',
            'status':'长期缺阵',
            'detail':'右手拇指受伤，归期未定',
            'important':true
        },{
            'name':'基利安.海斯',
            'status':'出战存疑',
            'detail':'髋部受伤，周一对阵掘金的比赛出战存疑',
            'important':false
        },{
            'name':'以赛亚.里弗斯',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        },{
            'name':'弗兰克.杰克逊',
            'status':'缺阵',
            'detail':'新冠刚转阴性，无法出战',
            'important':false
        },{
            'name':'奥利尼克',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        }
    ],
    //金州勇士
    warriors:[
        {
            'name':'伊戈达拉',
            'status':'轮休',
            'detail':'身体不适，无法出战周一对阵爵士的比赛',
            'important':false
        },{
            'name':'怀斯曼',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战',
            'important':false
        },{
            'name':'格林',
            'status':'缺阵',
            'detail':'小腿拉伤，预计缺阵至少两周',
            'important':true
        }       
    ],
    //休斯顿火箭
    rockets:[
        {
            'name':'约翰.沃尔',
            'status':'长期缺阵',
            'detail':'跟球队协商后决定，新赛季不会为火箭出场比赛，但工资照拿',
            'important':false
        }     
    ],
    //印第安纳步行者
    pacers:[
        {
            'name':'萨博尼斯',
            'status':'缺阵',
            'detail':'脚踝受伤，无法周二对阵鹈鹕的比赛',
            'important':true
        },{
            'name':'勒维尔',
            'status':'出战存疑',
            'detail':'腿部受伤，周二对阵鹈鹕的比赛出战存疑',
            'important':true
        },{
            'name':'布罗格登',
            'status':'缺阵',
            'detail':'跟腱受伤，至少缺阵10天',
            'important':true
        },{
            'name':'特纳',
            'status':'缺阵',
            'detail':'左脚受伤，预计缺阵两周',
            'important':true
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
        }  
    ],
    //洛杉矶湖人
    lakers:[
        {
            'name':'安东尼戴维斯',
            'status':'长期缺阵',
            'detail':'膝盖韧带拉伤，至少缺阵四周',
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
            'name':'亚当斯',
            'status':'出战存疑',
            'detail':'腿部受伤，周一对阵独行侠的比赛出战存疑',
            'important':true
        },{
            'name':'克拉克',
            'status':'出战存疑',
            'detail':'背部受伤，周一对阵独行侠的比赛出战存疑',
            'important':false
        },{
            'name':'凯尔.安德森',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'贝恩',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':true
        },{
            'name':'泰厄斯.琼斯',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
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
            'name':'泰勒.希罗',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':true
        },{
            'name':'奥克帕拉',
            'status':'缺阵',
            'detail':'手腕受伤，归期未定',
            'important':false
        },{
            'name':'PJ.塔克',
            'status':'出战存疑',
            'detail':'小腿受伤，周一对阵湖人的比赛出战存疑',
            'important':true
        },{
            'name':'洛瑞',
            'status':'缺阵',
            'detail':'个人原因，无法出战周一对阵湖人的比赛',
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
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战周日对阵国王的比赛',
            'important':true
        },{
            'name':'格雷森.阿伦',
            'status':'缺阵',
            'detail':'臀部受伤，无法出战周日对阵国王的比赛',
            'important':true
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
            'name':'贝弗利',
            'status':'出战存疑',
            'detail':'脚踝受伤，周一对阵篮网的比赛出战存疑',
            'important':true
        },{
            'name':'麦克劳克林',
            'status':'缺阵',
            'detail':'身体不适，无法出战',
            'important':false
        },{
            'name':'莱特',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        }
    ],
    //新奥尔良鹈鹕
    pelicans:[
        {
            'name':'格拉汉姆',
            'status':'出战存疑',
            'detail':'左脚踝受伤，周二对阵步行者的比赛出战存疑',
            'important':true
        },{
            'name':'英格拉姆',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周二对阵步行者的比赛',
            'important':true
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
            'name':'肯巴.沃克',
            'status':'出战存疑',
            'detail':'腿部受伤，周二对阵骑士的比赛出战存疑',
            'important':true
        },{
            'name':'米切尔罗宾逊',
            'status':'出战存疑',
            'detail':'左脚踝受伤，周二对阵骑士的比赛出战存疑',
            'important':true
        },{
            'name':'诺埃尔',
            'status':'出战',
            'detail':'可以出战周二对阵骑士的比赛',
            'important':false
        },{
            'name':'德里克.罗斯',
            'status':'长期缺阵',
            'detail':'右脚踝受伤，至少缺阵8周',
            'important':true
        }
    ],
    //俄克拉荷马城雷霆
    thunder:[
        {
            'name':'费沃斯',
            'status':'缺阵',
            'detail':'背部受伤，无法出战周二对阵公牛的比赛',
            'important':false
        },{
            'name':'克雷伊奇',
            'status':'缺阵',
            'detail':'脚踝受伤，归期未定',
            'important':false
        }
    ],
    //奥兰多魔术
    magic:[
        {
            'name':'特伦斯·罗斯',
            'status':'出战存疑',
            'detail':'膝盖受伤，周一对阵公牛的比赛出战存疑',
            'important':true
        },{
            'name':'RJ.汉普顿',
            'status':'缺阵',
            'detail':'膝盖受伤，预计缺阵2-4周',
            'important':false
        },{
            'name':'摩尔',
            'status':'缺阵',
            'detail':'腿部受伤，归期未定',
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
            'name':'迈卡威',
            'status':'长期缺阵',
            'detail':'左脚踝韧带手术，没有回归时间',
            'important':false
        }  
    ],
    //费城76人
    seven6ers:[
        {
            'name':'赛斯.库里',
            'status':'缺阵',
            'detail':'左脚踝受伤，无法出战周一对阵马刺的比赛',
            'important':true
        },{
            'name':'赛布尔',
            'status':'缺阵',
            'detail':'肩膀受伤，至少缺阵一周',
            'important':true
        },{
            'name':'米尔顿',
            'status':'缺阵',
            'detail':'背部受伤，无法出战周六对阵快船的比赛',
            'important':false
        },{
            'name':'丹尼.格林',
            'status':'缺阵',
            'detail':'右臀受伤，无法出战周四对阵魔术的比赛',
            'important':false
        },{
            'name':'本.西蒙斯',
            'status':'缺阵',
            'detail':'不想上场比赛，只想白拿工资',
            'important':true
        }    
    ],
    //菲尼克斯太阳
    suns:[
        {
            'name':'卡梅隆.佩恩',
            'status':'缺阵',
            'detail':'手腕受伤，无法出战周二对阵爵士的比赛',
            'important':false
        },{
            'name':'杰.克劳德',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周二对阵爵士的比赛',
            'important':true
        },{
            'name':'艾顿',
            'status':'出战存疑',
            'detail':'右脚踝受伤，周二对阵爵士的比赛出战存疑',
            'important':true
        },{
            'name':'纳达尔',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战',
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
            'name':'南斯',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'鲍威尔',
            'status':'缺阵',
            'detail':'个人原因，无法出战周四对阵热火的比赛',
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
        }
    ],
    //萨克拉门托国王
    kings:[
        {
            'name':'福克斯',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战周日对阵雄鹿的比赛',
            'important':true
        }
    ],
    //圣安东尼奥马刺
    spurs:[
        {
            'name':'埃尔南戈麦斯',
            'status':'出战存疑',
            'detail':'身体不适，每日观察',
            'important':false
        }
    ],
    //多伦多猛龙
    raptors:[
        {
            'name':'肯.伯奇',
            'status':'缺阵',
            'detail':'鼻子受伤，预计缺阵10-14天',
            'important':false
        },{
            'name':'德拉季奇',
            'status':'缺阵',
            'detail':'个人原因，无法出战',
            'important':false
        }       
    ],
    //犹它爵士
    jazz:[
        {
            'name':'怀特塞德',
            'status':'缺阵',
            'detail':'背部受伤，无法出战周二对阵太阳的比赛',
            'important':false
        },{
            'name':'米切尔',
            'status':'缺阵',
            'detail':'遭受脑震荡，无法出战周二对阵太阳的比赛',
            'important':true
        },{
            'name':'戈贝尔',
            'status':'缺阵',
            'detail':'小腿拉伤，无法出战周二对阵太阳的比赛',
            'important':true
        },{
            'name':'博扬',
            'status':'出战存疑',
            'detail':'右膝受伤，周二对阵太阳的比赛出战存疑',
            'important':true
        }                          
    ],
    //华盛顿奇才
    wizards:[
        {
            'name':'温斯顿',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        }
    ]   
}

module.exports = nbaData;