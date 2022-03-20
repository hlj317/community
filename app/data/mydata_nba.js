const nbaData = {
    //亚特兰大老鹰
    hawks:[
        {
            'name':'特雷杨',
            'status':'出战存疑',
            'detail':'小腿受伤，周一对阵鹈鹕的比赛出战存疑',
            'important':true
        },{
            'name':'约翰.科林斯',
            'status':'长期缺阵',
            'detail':'右脚足底筋膜撕裂，归期未定',
            'important':true
        }
    ],
    //波士顿凯尔特人
    celtics:[
        {        
            'name':'内史密斯',
            'status':'缺阵',
            'detail':'脚踝受伤，归期未定',
            'important':false
        }
    ],
    //布鲁克林篮网
    nets:[
        {        
            'name':'大卫.杜克',
            'status':'缺阵',
            'detail':'脚踝受伤，归期未定',
            'important':false
        },{        
            'name':'阿尔德里奇',
            'status':'缺阵',
            'detail':'臀部受伤，预计还要缺阵一周',
            'important':true
        },{        
            'name':'本.西蒙斯',
            'status':'长期缺阵',
            'detail':'背部受伤，归期未定',
            'important':true
        },{
            'name':'乔.哈里斯',
            'status':'长期缺阵',
            'detail':'左脚踝二次手术，赛季报销',
            'important':true
        },{
            'name':'凯里.欧文',
            'status':'视主客场而定',
            'detail':'客场出战，主场缺阵',
            'important':true
        }
    ],
    //夏洛特黄蜂
    hornets:[
        {
            'name':'海沃德',
            'status':'长期缺阵',
            'detail':'左膝韧带扭伤，预计两周后复出',
            'important':true
        }
    ],
    //芝加哥公牛
    bulls:[
        {
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
            'name':'贾勒特.艾伦',
            'status':'缺阵',
            'detail':'手指骨折，归期未定',
            'important':true
        },{
            'name':'迪恩.韦德',
            'status':'缺阵',
            'detail':'膝盖受伤，归期未定',
            'important':false
        },{
            'name':'隆多',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战周日对阵活塞的比赛',
            'important':false
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
            'name':'小哈达威',
            'status':'长期缺阵',
            'detail':'腿部手术，归期未定',
            'important':true
        },{
            'name':'布洛克',
            'status':'缺阵',
            'detail':'个人原因，无法出战周日对阵黄蜂的比赛',
            'important':false
        },{
            'name':'丁威迪',
            'status':'轮休',
            'detail':'伤病管理，无法出战周日对阵黄蜂的比赛',
            'important':true
        },{
            'name':'西奥.平森',
            'status':'缺阵',
            'detail':'手指受伤，归期未定',
            'important':false
        }
    ],
    //丹佛掘金
    nuggets:[
        {
            'name':'齐克.纳吉',
            'status':'缺阵',
            'detail':'膝盖受伤，归期未定',
            'important':false
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
            'name':'迪亚洛',
            'status':'缺阵',
            'detail':'左手指受伤，无法出战周日对阵骑士的比赛',
            'important':false
        },{        
            'name':'弗兰克.杰克逊',
            'status':'缺阵',
            'detail':'背部受伤，至少缺阵1-2周',
            'important':false
        },{        
            'name':'坎宁安',
            'status':'出战',
            'detail':'可以出战周日对阵骑士的比赛',
            'important':true
        }
    ],
    //金州勇士
    warriors:[
        {
            'name':'佩顿二世',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战周一对阵马刺的比赛',
            'important':false
        },{
            'name':'伊戈达拉',
            'status':'缺阵',
            'detail':'臀部受伤，归期未定',
            'important':false
        },{
            'name':'库里',
            'status':'长期缺阵',
            'detail':'左脚韧带受伤，归期未定',
            'important':true
        },{
            'name':'别利察',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        },{
            'name':'穆迪',
            'status':'缺阵',
            'detail':'肩膀脱臼，归期未定',
            'important':false
        }   
    ],
    //休斯顿火箭
    rockets:[
        {
            'name':'埃里克.戈登',
            'status':'出战存疑',
            'detail':'身体不适，周一对阵灰熊的比赛出战存疑',
            'important':true
        },{
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
            'name':'杰伦.史密斯',
            'status':'出战存疑',
            'detail':'头部受伤，周一对阵开拓者的比赛出战存疑',
            'important':false
        },{
            'name':'比塔泽',
            'status':'出战存疑',
            'detail':'腿部受伤，周一对阵开拓者的比赛出战存疑',
            'important':false
        },{
            'name':'杜阿尔特',
            'status':'出战存疑',
            'detail':'左脚趾受伤，周一对阵开拓者的比赛出战存疑',
            'important':false
        },{
            'name':'迈尔斯.特纳',
            'status':'长期缺阵',
            'detail':'左脚受伤，预计还要缺阵3-4周',
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
            'name':'以赛亚.杰克逊',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周一对阵开拓者的比赛',
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
        }
    ],
    //洛杉矶湖人
    lakers:[
        {
            'name':'安东尼戴维斯',
            'status':'长期缺阵',
            'detail':'脚踝扭伤，至少缺阵一个月时间',
            'important':true
        },{
            'name':'纳恩',
            'status':'缺阵',
            'detail':'膝盖受伤，归期未定',
            'important':false
        },{
            'name':'詹姆斯',
            'status':'出战存疑',
            'detail':'左膝酸痛，周日对阵奇才的比赛出战存疑',
            'important':true
        },{
            'name':'艾灵顿',
            'status':'缺阵',
            'detail':'身体不适，无法出战周日对阵奇才的比赛',
            'important':false
        }        
    ],
    //孟菲斯灰熊
    grizzlies:[
        {
            'name':'贾.莫兰特',
            'status':'缺阵',
            'detail':'膝盖酸痛，无法出战周一对阵火箭的比赛',
            'important':true
        },{
            'name':'基利安.蒂利',
            'status':'缺阵',
            'detail':'膝盖受伤，归期未定',
            'important':false
        }
    ],
    //迈阿密热火
    heat:[
        {
            'name':'巴特勒',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战周六对阵雷霆的比赛',
            'important':true
        },{
            'name':'奥拉迪波',
            'status':'缺阵',
            'detail':'背部受伤，无法出战周六对阵雷霆的比赛',
            'important':false
        }        
    ],
    //密尔沃基雄鹿
    bucks:[
        {
            'name':'本布里',
            'status':'长期缺阵',
            'detail':'膝盖韧带撕裂，赛季报销',
            'important':false
        },{
            'name':'字母哥',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战周一对阵森林狼的比赛',
            'important':true
        }
    ],
    //明尼苏达森林狼
    timberwolves:[
        {
            'name':'麦克丹尼尔斯',
            'status':'长期缺阵',
            'detail':'脚踝受伤，归期未定',
            'important':false
        }
    ],
    //新奥尔良鹈鹕
    pelicans:[
        {
            'name':'格拉汉姆',
            'status':'出战存疑',
            'detail':'臀部受伤，周一对阵老鹰的比赛出战存疑',
            'important':true
        },{
            'name':'英格拉姆',
            'status':'缺阵',
            'detail':'右腿筋受伤，预计缺阵7-10天',
            'important':true
        },{
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
            'name':'诺埃尔',
            'status':'长期缺阵',
            'detail':'腿部受伤，本赛季有可能赛季报销',
            'important':false
        },{
            'name':'雷迪什',
            'status':'缺阵',
            'detail':'肩膀受伤，归期未定',
            'important':false
        },{
            'name':'德里克.罗斯',
            'status':'长期缺阵',
            'detail':'右脚踝二次手术，预计两周之后回归球队',
            'important':true
        },{
            'name':'肯巴.沃克',
            'status':'长期缺阵',
            'detail':'跟球队友好协商，将会缺席本赛季剩余比赛',
            'important':false
        }
    ],
    //俄克拉荷马城雷霆
    thunder:[
        {
            'name':'亚历山大',
            'status':'出战存疑',
            'detail':'脚踝受伤，周一对阵魔术的比赛出战存疑',
            'important':true
        },{
            'name':'费沃斯',
            'status':'缺阵',
            'detail':'背部受伤，归期未定',
            'important':false
        },{
            'name':'泰.杰罗姆',
            'status':'缺阵',
            'detail':'臀部受伤，归期未定',
            'important':false
        },{
            'name':'肯里奇.威廉姆斯',
            'status':'缺阵',
            'detail':'膝盖受伤，归期未定',
            'important':false
        },{
            'name':'多尔特',
            'status':'长期缺阵',
            'detail':'肩膀受伤，赛季报销',
            'important':true
        },{
            'name':'约什.吉迪',
            'status':'长期缺阵',
            'detail':'臀部受伤，至少还要缺阵1个月时间',
            'important':true
        },{
            'name':'穆斯卡拉',
            'status':'缺阵',
            'detail':'脚踝受伤，归期未定',
            'important':false
        },{
            'name':'厄尔',
            'status':'缺阵',
            'detail':'腿部受伤，归期未定',
            'important':false
        }
    ],
    //奥兰多魔术
    magic:[
        {
            'name':'萨格斯',
            'status':'出战存疑',
            'detail':'脚踝受伤，周一对阵雷霆的比赛出战存疑',
            'important':true
        },{
            'name':'艾萨克',
            'status':'长期缺阵',
            'detail':'左膝ACL伤病，赛季报销',
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
            'name':'斯普林格',
            'status':'缺阵',
            'detail':'左膝受伤，归期未定',
            'important':false
        },{        
            'name':'恩比德',
            'status':'出战存疑',
            'detail':'背部受伤，周一对阵猛龙的比赛出战存疑',
            'important':true
        }
    ],
    //菲尼克斯太阳
    suns:[
        {
            'name':'卡明斯基',
            'status':'长期缺阵',
            'detail':'右膝受伤，归期不明',
            'important':false
        },{
            'name':'沙里奇',
            'status':'长期缺阵',
            'detail':'右膝ACL伤病，预计本赛季不会回归',
            'important':false
        },{
            'name':'克里斯.保罗',
            'status':'长期缺阵',
            'detail':'右拇指韧带撕裂，手术后需要6-8周恢复期',
            'important':true
        },{
            'name':'卡梅伦.约翰逊',
            'status':'缺阵',
            'detail':'腿部受伤，归期未定',
            'important':true
        },{
            'name':'杰.克劳德',
            'status':'出战存疑',
            'detail':'腹股沟受伤，周六对阵公牛的比赛出战存疑',
            'important':true
        }
    ],
    //波特兰开拓者
    blazers:[
        {
            'name':'安芬尼.西蒙斯',
            'status':'缺阵',
            'detail':'腿部受伤，预计缺阵1-2周',
            'important':true
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
            'detail':'腿部受伤，归期未定',
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
        },{
            'name':'努尔基奇',
            'status':'长期缺阵',
            'detail':'足底肌膜炎，至少需要缺阵1个月',
            'important':true
        }
    ],
    //萨克拉门托国王
    kings:[
        {
            'name':'福克斯',
            'status':'出战存疑',
            'detail':'右手受伤，周一对阵太阳的比赛出战存疑',
            'important':true
        },{
            'name':'霍姆斯',
            'status':'缺阵',
            'detail':'个人原因，无法出战周一对阵太阳的比赛',
            'important':false
        },{
            'name':'特伦斯.戴维斯',
            'status':'缺阵',
            'detail':'手腕受伤，归期未定',
            'important':false
        }
    ],
    //圣安东尼奥马刺
    spurs:[
        {
            'name':'朗尼.沃克',
            'status':'缺阵',
            'detail':'背部受伤，无法出战周一对阵勇士的比赛',
            'important':false
        },{
            'name':'约什.理查德森',
            'status':'出战存疑',
            'detail':'背部受伤，周一对阵勇士的比赛出战存疑',
            'important':false
        },{
            'name':'科考克',
            'status':'缺阵',
            'detail':'腿部受伤，归期未定',
            'important':false
        },{
            'name':'兰福德',
            'status':'缺阵',
            'detail':'肌腱受伤，归期未定',
            'important':false
        },{
            'name':'迪奥普',
            'status':'出战存疑',
            'detail':'背部受伤，周一对阵勇士的比赛出战存疑',
            'important':false
        },{
            'name':'麦克德莫特',
            'status':'长期缺阵',
            'detail':'脚踝受伤，缺席本赛季常规赛剩余的赛程',
            'important':true
        }
    ],
    //多伦多猛龙
    raptors:[
        {
            'name':'阿奴诺比',
            'status':'缺阵',
            'detail':'右手指受伤，预期至少还要缺阵两周',
            'important':true
        },{
            'name':'弗林',
            'status':'缺阵',
            'detail':'左腿筋受伤，预计至少缺阵10天',
            'important':false
        }  
    ],
    //犹它爵士
    jazz:[
        {
            'name':'米切尔',
            'status':'出战',
            'detail':'可以出战周一对阵尼克斯的比赛',
            'important':true
        },{
            'name':'康利',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周一对阵尼克斯的比赛',
            'important':true
        },{
            'name':'博扬',
            'status':'缺阵',
            'detail':'小腿受伤，无法出战周一对阵尼克斯的比赛',
            'important':true
        },{
            'name':'丹尼尔.豪斯',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战周一对阵尼克斯的比赛',
            'important':false
        },{
            'name':'阿祖布伊克',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战周一对阵尼克斯的比赛',
            'important':false
        },{
            'name':'福里斯特',
            'status':'出战存疑',
            'detail':'手腕受伤，周一对阵尼克斯的比赛出战存疑',
            'important':false
        },{
            'name':'怀特塞德',
            'status':'出战存疑',
            'detail':'小腿受伤，周一对阵尼克斯的比赛出战存疑',
            'important':false
        }                           
    ],
    //华盛顿奇才
    wizards:[
        {
            'name':'库兹马',
            'status':'出战存疑',
            'detail':'肌腱受伤，每日观察',
            'important':true
        },{
            'name':'比尔',
            'status':'长期缺阵',
            'detail':'左手腕手术，赛季报销',
            'important':true
        }
    ]   
}

module.exports = nbaData;