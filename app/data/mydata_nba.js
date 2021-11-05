const nbaData = {
    //亚特兰大老鹰
    hawks:[
        {
            'name':'奥孔古',
            'status':'长期缺阵',
            'detail':'预计12月份回归球队',
            'important':false
        }
    ],
    //波士顿凯尔特人
    celtics:[
        {
            'name':'理查德森',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        }
    ],
    //布鲁克林篮网
    nets:[
        {
            'name':'克拉克斯顿',
            'status':'缺阵',
            'detail':'身体不适，无法出战',
            'important':false
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
            'name':'拉梅洛.鲍尔',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        },{
            'name':'PJ.华盛顿',
            'status':'出战存疑',
            'detail':'肘部受伤，每日观察',
            'important':false
        }
    ],
    //芝加哥公牛
    bulls:[
        {
            'name':'帕特里克.威廉姆斯',
            'status':'缺阵',
            'detail':'腕部受伤，无法出战',
            'important':false
        },{
            'name':'科比.怀特',
            'status':'长期缺阵',
            'detail':'肩部伤势，预计11月份回归球队',
            'important':false
        }
    ],
    //克利夫兰骑士
    cavaliers:[
        {
            'name':'马尔坎宁',
            'status':'缺阵',
            'detail':'触发健康协议，需要缺阵数场比赛',
            'important':true
        },{
            'name':'凯文.乐福',
            'status':'缺阵',
            'detail':'触发健康协议，需要缺阵数场比赛',
            'important':true
        },{
            'name':'奥克罗',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        }     
    ],
    //达拉斯独行侠
    mavericks:[
        {
            'name':'波尔津吉斯',
            'status':'缺阵',
            'detail':'背部受伤，无法出战',
            'important':true
        },{
            'name':'克勒贝尔',
            'status':'缺阵',
            'detail':'背部受伤，需要缺阵数场比赛',
            'important':false
        },{
            'name':'伯克',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },
    ],
    //丹佛掘金
    nuggets:[
        {
            'name':'贾马尔.默里',
            'status':'长期缺阵',
            'detail':'遭受ACL膝伤，目前没有明确的复出时间',
            'important':true
        }     
    ],
    //底特律活塞
    pistons:[
        {
            'name':'克里斯.史密斯',
            'status':'缺阵',
            'detail':'左膝受伤，无法出战',
            'important':false
        }
    ],
    //金州勇士
    warriors:[
        {
            'name':'佩顿二世',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        },{
            'name':'怀斯曼',
            'status':'缺阵',
            'detail':'膝盖受伤，归期未定',
            'important':false
        },{
            'name':'克莱.汤普森',
            'status':'长期缺阵',
            'detail':'左膝ACL受伤，归期未定',
            'important':true
        }       
    ],
    //休斯顿火箭
    rockets:[
        {
            'name':'埃里克.戈登',
            'status':'出战',
            'detail':'可以出战周五对阵太阳的比赛',
            'important':false
        },{
            'name':'泰斯',
            'status':'缺阵',
            'detail':'脚趾受伤，无法出战',
            'important':false
        },{
            'name':'豪斯',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        },{
            'name':'约翰.沃尔',
            'status':'长期缺阵',
            'detail':'跟球队协商后决定，新赛季不会为火箭出场比赛，但工资照拿',
            'important':true
        }     
    ],
    //印第安纳步行者
    pacers:[
        {
            'name':'以赛亚.杰克逊',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        },{
            'name':'兰姆',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
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
            'name':'马库斯.莫里斯',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战',
            'important':false
        },{
            'name':'伊巴卡',
            'status':'缺阵',
            'detail':'背部受伤，归期未定',
            'important':false
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
            'name':'塔克',
            'status':'长期缺阵',
            'detail':'拇指韧带撕裂，将接受手术',
            'important':false
        },{
            'name':'詹姆斯',
            'status':'缺阵',
            'detail':'腹股沟拉伤，预计缺阵一周',
            'important':true
        },{
            'name':'埃灵顿',
            'status':'缺阵',
            'detail':'腿部伤势，无法出战',
            'important':false
        },{
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
            'name':'狄龙.布鲁克斯',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战，预计还需要2周的恢复时间',
            'important':false
        } 
    ],
    //迈阿密热火
    heat:[
        {
            'name':'洛瑞',
            'status':'缺阵',
            'detail':'左脚踝受伤，无法出战',
            'important':true
        },{
            'name':'斯特鲁斯',
            'status':'缺阵',
            'detail':'左膝受伤，无法出战',
            'important':false
        },{
            'name':'奥拉迪波',
            'status':'长期缺阵',
            'detail':'股四头肌受伤，归期未定',
            'important':false
        }        
    ],
    //明尼苏达森林狼
    timberwolves:[
        {
            'name':'拉塞尔',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战',
            'important':true
        } 
    ],
    //密尔沃基雄鹿
    bucks:[
        {
            'name':'米德尔顿',
            'status':'缺阵',
            'detail':'身体不适，无法出战',
            'important':true
        },{
            'name':'洛佩兹',
            'status':'缺阵',
            'detail':'背部受伤，无法出战',
            'important':false
        },{
            'name':'霍乐迪',
            'status':'出战',
            'detail':'可以出战周六对阵尼克斯的比赛',
            'important':true
        },{
            'name':'迪文琴佐',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        }  
    ],
    //新奥尔良鹈鹕
    pelicans:[
        {
            'name':'英格拉姆',
            'status':'出战存疑',
            'detail':'臀部受伤，每日观察',
            'important':true
        },{
            'name':'赫伯特.琼斯',
            'status':'出战存疑',
            'detail':'出现脑震荡症状，每日观察',
            'important':false
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
            'name':'吉布森',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        }  
    ],
    //俄克拉荷马城雷霆
    thunder:[
        {
            'name':'多尔特',
            'status':'出战',
            'detail':'可以出战周五对阵湖人的比赛',
            'important':true
        }     
    ],
    //奥兰多魔术
    magic:[
        {
            'name':'加里.哈里斯',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
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
            'name':'丹尼.格林',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        },{
            'name':'哈里斯',
            'status':'缺阵',
            'detail':'触发健康安全协议，会缺阵数场比赛',
            'important':true
        },{
            'name':'格兰特.瑞',
            'status':'缺阵',
            'detail':'左膝半月板撕裂，两周后重新接受医疗评估',
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
            'name':'佩恩',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
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
            'name':'斯内尔',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        }     
    ],
    //萨克拉门托国王
    kings:[
        {
            'name':'巴格利',
            'status':'出战存疑',
            'detail':'身体不适，每日观察',
            'important':false
        }
    ],
    //圣安东尼奥马刺
    spurs:[
        {
            'name':'麦克德蒙德',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战',
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
            'name':'巴恩斯',
            'status':'大概率出战',
            'detail':'大概率可以出战周六对阵骑士的比赛',
            'important':true
        },{
            'name':'渡边雄太',
            'status':'缺阵',
            'detail':'小腿受伤，无法出战',
            'important':false
        },{
            'name':'西亚卡姆',
            'status':'缺阵',
            'detail':'肩膀受伤，目前没有明确复出时间',
            'important':true
        }      
    ],
    //犹它爵士
    jazz:[
        {
            'name':'米切尔',
            'status':'缺阵',
            'detail':'右脚踝受伤，无法出战周五对阵老鹰的比赛',
            'important':true
        },{
            'name':'鲁迪.盖伊',
            'status':'长期缺阵',
            'detail':'腿部受伤，目前还没有做好参加新赛季的准备',
            'important':false
        }      
    ],
    //华盛顿奇才
    wizards:[
        {
            'name':'贝尔坦斯',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        },{
            'name':'安东尼.吉尔',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        },{
            'name':'卡修斯.温斯顿',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        },{
            'name':'八村塁',
            'status':'缺阵',
            'detail':'个人原因，无法出战',
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