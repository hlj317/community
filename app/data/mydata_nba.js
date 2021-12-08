const nbaData = {
    //亚特兰大老鹰
    hawks:[
        {
            'name':'所罗门.希尔',
            'status':'缺阵',
            'detail':'右腿肌腱受伤，无法出战',
            'important':false
        },{
            'name':'德安德鲁.亨特',
            'status':'长期缺阵',
            'detail':'手腕受伤，无法出战，预期缺席至少八周',
            'important':false
        },{
            'name':'雷迪什',
            'status':'缺阵',
            'detail':'身体不适，无法出战',
            'important':true
        },{
            'name':'博格丹',
            'status':'缺阵',
            'detail':'右脚踝受伤，无法出战',
            'important':true
        }
    ],
    //波士顿凯尔特人
    celtics:[
        {
            'name':'布鲁诺.费尔南多',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        },{
            'name':'贾巴里.帕克',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        },{
            'name':'杰伦.布朗',
            'status':'缺阵',
            'detail':'伤病管理，无法出战',
            'important':true
        }
    ],
    //布鲁克林篮网
    nets:[
        {
            'name':'乔.哈里斯',
            'status':'长期缺阵',
            'detail':'左脚踝手术，预计缺阵4-8周',
            'important':true
        },{
            'name':'凯里.欧文',
            'status':'缺阵',
            'detail':'由于未打疫苗，不确定何时可以回归球队',
            'important':true
        }
    ],
    //夏洛特黄蜂
    hornets:[
        {
            'name':'伊斯梅尔.史密斯',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'麦克丹尼尔斯',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'普拉姆利',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':true
        },{
            'name':'罗齐尔',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':true
        },{
            'name':'拉梅洛.鲍尔',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':true
        }
    ],
    //芝加哥公牛
    bulls:[
        {
            'name':'德罗赞',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':true
        },{
            'name':'卡鲁索',
            'status':'缺阵',
            'detail':'腿部肌腱受伤，无法出战',
            'important':true
        },{
            'name':'贾文特.格林',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'帕特里克.威廉姆斯',
            'status':'缺阵',
            'detail':'腕部受伤，无法出战',
            'important':false
        },{
            'name':'科比.怀特',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        }
    ],
    //克利夫兰骑士
    cavaliers:[
        {
            'name':'迪恩.韦德',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        },{
            'name':'塞克斯顿',
            'status':'缺阵',
            'detail':'左膝受伤，无法出战',
            'important':true
        }
    ],
    //达拉斯独行侠
    mavericks:[
        {
            'name':'斯特林.布朗',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        },{
            'name':'考利斯坦',
            'status':'缺阵',
            'detail':'个人原因，无法出战',
            'important':false
        }
    ],
    //丹佛掘金
    nuggets:[
        {
            'name':'约基奇',
            'status':'出战存疑',
            'detail':'手腕受伤，每日观察',
            'important':true
        },{
            'name':'波尔',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'海兰德',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'奥斯汀.里弗斯',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
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
        },{
            'name':'PJ.多齐尔',
            'status':'长期缺阵',
            'detail':'遭受ACL膝伤，本赛季报销',
            'important':false
        }      
    ],
    //底特律活塞
    pistons:[
        {
            'name':'迪亚洛',
            'status':'出战存疑',
            'detail':'面部受伤，每日观察',
            'important':false
        },{
            'name':'约瑟夫',
            'status':'出战存疑',
            'detail':'膝盖受伤，每日观察',
            'important':false
        },{
            'name':'奥克利尼',
            'status':'缺阵',
            'detail':'腿部受伤，预计缺席6周',
            'important':false
        },{
            'name':'克里斯.史密斯',
            'status':'缺阵',
            'detail':'左膝受伤，无法出战',
            'important':false
        }
    ],
    //金州勇士
    warriors:[
        {
            'name':'伊戈达拉',
            'status':'缺阵',
            'detail':'身体不适，无法出战',
            'important':false
        },{
            'name':'怀斯曼',
            'status':'缺阵',
            'detail':'膝盖受伤，归期未定',
            'important':false
        },{
            'name':'克莱.汤普森',
            'status':'长期缺阵',
            'detail':'跟腱受伤，即将复出，敬请期待',
            'important':true
        }       
    ],
    //休斯顿火箭
    rockets:[
        {
            'name':'丹尼尔.豪斯',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        },{
            'name':'凯文.波特',
            'status':'缺阵',
            'detail':'大腿受伤，无法出战',
            'important':true
        },{
            'name':'贾伦.格林',
            'status':'缺阵',
            'detail':'大腿拉伤，无法出战',
            'important':true
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
            'name':'TJ.麦克康奈尔',
            'status':'长期缺阵',
            'detail':'手腕手术，预计明年三月份后回归',
            'important':false
        },{
            'name':'贾斯汀.霍乐迪',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':true
        },{
            'name':'TJ.沃伦',
            'status':'长期缺阵',
            'detail':'腿部受伤，三周之后重新接受医疗评估',
            'important':false
        }     
    ],
    //洛杉矶快船
    clippers:[
        {
            'name':'巴图姆',
            'status':'缺阵',
            'detail':'身体不适，无法出战',
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
            'name':'纳恩',
            'status':'缺阵',
            'detail':'右脚踝受伤，无法出战',
            'important':false
        },{
            'name':'阿里扎',
            'status':'长期缺阵',
            'detail':'接受了脚踝手术，预计至少将缺席8周的比赛',
            'important':false
        }     
    ],
    //孟菲斯灰熊
    grizzlies:[
        {
            'name':'宰伊尔.威廉姆斯',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        },{
            'name':'布兰登.克拉克',
            'status':'缺阵',
            'detail':'右膝受伤，无法出战',
            'important':false
        },{
            'name':'凯尔.安德森',
            'status':'缺阵',
            'detail':'背部受伤，无法出战',
            'important':false
        },{
            'name':'萨姆.梅里尔',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战',
            'important':false
        },{
            'name':'莫兰特',
            'status':'长期缺阵',
            'detail':'膝盖扭伤，归期不明',
            'important':true
        }
    ],
    //迈阿密热火
    heat:[
        {
            'name':'阿德巴约',
            'status':'长期缺阵',
            'detail':'右手拇指撕裂需要动手术，归期未定',
            'important':true
        },{
            'name':'吉米.巴特勒',
            'status':'缺阵',
            'detail':'尾椎受伤，无法出战',
            'important':true
        },{
            'name':'马基夫.莫里斯',
            'status':'缺阵',
            'detail':'身体不适，无法出战',
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
            'name':'乔治.希尔',
            'status':'出战存疑',
            'detail':'膝盖受伤，每日观察',
            'important':false
        },{
            'name':'塞米.奥莱杰',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        },{
            'name':'洛佩兹',
            'status':'长期缺阵',
            'detail':'背部手术，归期未定',
            'important':true
        },{
            'name':'迪文琴佐',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        }  
    ],
    //明尼苏达森林狼
    timberwolves:[
        {
            'name':'拉塞尔',
            'status':'出战存疑',
            'detail':'身体不适，每日观察',
            'important':true
        },{
            'name':'唐斯',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':true
        },{
            'name':'杰伦.诺埃尔',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        },{
            'name':'贝弗利',
            'status':'缺阵',
            'detail':'腹股沟受伤，预计缺阵数周',
            'important':true
        }
    ],
    //新奥尔良鹈鹕
    pelicans:[
        {
            'name':'约什.哈特',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战',
            'important':true
        },{
            'name':'达顿.霍姆斯',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        },{
            'name':'锡安.威廉森',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':true
        }     
    ],
    //纽约尼克斯
    knicks:[
        {
            'name':'杰里科.西姆斯',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        }
    ],
    //俄克拉荷马城雷霆
    thunder:[
        {
            'name':'加夫列尔.德克',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        }     
    ],
    //奥兰多魔术
    magic:[
        {
            'name':'萨格斯',
            'status':'缺阵',
            'detail':'手指受伤，预计至少缺阵2周',
            'important':false
        },{
            'name':'摩尔',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
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
            'detail':'本周一做了左脚踝韧带手术，没有回归时间',
            'important':false
        }  
    ],
    //费城76人
    seven6ers:[
        {
            'name':'马克西',
            'status':'出战存疑',
            'detail':'身体不适，每日观察',
            'important':true
        },{
            'name':'哈里斯',
            'status':'出战',
            'detail':'可以出战周二对阵黄蜂的比赛',
            'important':true
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
            'name':'德文.布克',
            'status':'缺阵',
            'detail':'大腿拉伤，预计会缺阵几场比赛',
            'important':true
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
            'name':'科迪.泽勒',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        },{
            'name':'CJ.麦科勒姆',
            'status':'缺阵',
            'detail':'肋骨挫伤，无法出战',
            'important':true
        },{
            'name':'本.麦克勒莫',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        },{
            'name':'利特尔',
            'status':'缺阵',
            'detail':'脚踝受伤，至少休息一周',
            'important':false
        },{
            'name':'利拉德',
            'status':'缺阵',
            'detail':'腹部受伤，至少休息十天以上才能恢复',
            'important':true
        },{
            'name':'安芬尼.西蒙斯',
            'status':'出战存疑',
            'detail':'脚踝受伤，每日观察',
            'important':true
        } 
    ],
    //萨克拉门托国王
    kings:[
        {
            'name':'哈克里斯',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战',
            'important':false
        }
    ],
    //圣安东尼奥马刺
    spurs:[
        {
            'name':'凯尔登.约翰逊',
            'status':'出战存疑',
            'detail':'膝盖受伤，每日观察',
            'important':true
        },{
            'name':'瓦塞尔',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        },{
            'name':'查克.科林斯',
            'status':'长期缺阵',
            'detail':'腿部严重受伤，预计至少到今年圣诞节后才会复出',
            'important':false
        }  
    ],
    //多伦多猛龙
    raptors:[
        {
            'name':'肯.伯奇',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        },{
            'name':'德拉季奇',
            'status':'缺阵',
            'detail':'个人原因，无法出战',
            'important':false
        },{
            'name':'阿奴诺比',
            'status':'缺阵',
            'detail':'臀部受伤，无法出战',
            'important':true
        }        
    ],
    //犹它爵士
    jazz:[
        {
            'name':'怀特塞德',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        },{
            'name':'阿祖比亚克',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战',
            'important':false
        }      
    ],
    //华盛顿奇才
    wizards:[
        ,{
            'name':'贝尔坦斯',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        },{
            'name':'托马斯.布兰恩特',
            'status':'长期缺阵',
            'detail':'膝盖受伤，预计今年12月份复出',
            'important':false
        }     
    ]   
}

module.exports = nbaData;