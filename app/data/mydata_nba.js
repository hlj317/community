const nbaData = {
    //亚特兰大老鹰
    hawks:[
        {
            'name':'路易斯.威廉姆斯',
            'status':'缺阵',
            'detail':'右脚踝受伤，无法出战',
            'important':false
        },{
            'name':'加里纳利',
            'status':'复出',
            'detail':'肩膀受伤，可以出战下一场比赛',
            'important':false
        },{
            'name':'亨特',
            'status':'复出',
            'detail':'身体好转，可以出战下一场比赛',
            'important':false
        },{
            'name':'奥孔古',
            'status':'长期缺阵',
            'detail':'预计12月份回归球队',
            'important':false
        }
    ],
    //波士顿凯尔特人
    celtics:[
        {
            'name':'霍福德',
            'status':'复出',
            'detail':'臀部受伤，可以出战下一场比赛',
            'important':false
        },{
            'name':'兰福德',
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
            'detail':'腿部受伤，无法出战',
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
            'name':'罗齐尔',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':true
        },{
            'name':'PJ.华盛顿',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战周四对阵魔术的比赛',
            'important':false
        }
    ],
    //芝加哥公牛
    bulls:[
        {
            'name':'拉文',
            'status':'大概率出战',
            'detail':'拇指韧带撕裂，大概率会带伤出战',
            'important':true
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
            'name':'奥克罗',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        }     
    ],
    //达拉斯独行侠
    mavericks:[
        {
            'name':'雷吉.布洛克',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        }
    ],
    //丹佛掘金
    nuggets:[
        {
            'name':'约基奇',
            'status':'出战存疑',
            'detail':'膝盖受伤，每日观察',
            'important':true
        },{
            'name':'多齐尔',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
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
            'status':'缺阵',
            'detail':'左肘伤势，无法出战',
            'important':true
        },{
            'name':'克里斯.史密斯',
            'status':'缺阵',
            'detail':'左膝受伤，无法出战',
            'important':false
        },{
            'name':'伊赛亚.里弗斯',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        },{
            'name':'凯德.坎宁安',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战',
            'important':true
        }   
    ],
    //金州勇士
    warriors:[
        {
            'name':'伊戈达拉',
            'status':'大概率出战',
            'detail':'臀部受伤，大概率出战周三对阵雷霆的比赛',
            'important':false
        },{
            'name':'库明加',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
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
            'name':'柯兰.马丁',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        },{
            'name':'勒维尔',
            'status':'缺阵',
            'detail':'背部受伤，无法出战',
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
            'name':'马库斯.莫里斯',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战',
            'important':false
        },{
            'name':'基恩.约翰逊',
            'status':'缺阵',
            'detail':'身体不适，无法出战',
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
            'name':'安东尼.戴维斯',
            'status':'大概率出战',
            'detail':'膝盖受伤，大概率可以出战下一场比赛',
            'important':true
        },{
            'name':'詹姆斯',
            'status':'缺阵',
            'detail':'右脚踝扭伤，无法出战',
            'important':true
        },{
            'name':'塔克',
            'status':'长期缺阵',
            'detail':'拇指韧带撕裂，将接受手术',
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
            'status':'复出',
            'detail':'可以出战周四对阵篮网的比赛',
            'important':true
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
            'name':'乔丹.麦劳福林',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        }     
    ],
    //密尔沃基雄鹿
    bucks:[
        {
            'name':'洛佩兹',
            'status':'缺阵',
            'detail':'背部受伤，无法出战',
            'important':false
        },{
            'name':'霍乐迪',
            'status':'缺阵',
            'detail':'脚踝扭伤，无法出战',
            'important':true
        },{
            'name':'赛米.奥杰莱伊',
            'status':'出战',
            'detail':'可以出战周四对阵森林狼的比赛',
            'important':false
        },{
            'name':'波蒂斯',
            'status':'出战',
            'detail':'可以出战周四对阵森林狼的比赛',
            'important':false
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
            'name':'哈特',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':true
        },{
            'name':'锡安.威廉姆森',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':true
        }     
    ],
    //纽约尼克斯
    knicks:[
        {
            'name':'诺埃尔',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        }    
    ],
    //俄克拉荷马城雷霆
    thunder:[
        {
            'name':'穆斯卡拉',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        }     
    ],
    //奥兰多魔术
    magic:[
        {
            'name':'楚玛.奥克',
            'status':'缺阵',
            'detail':'臀部受伤，每日观察',
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
            'name':'米尔顿',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
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
            'name':'诺曼.鲍威尔',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':true
        },{
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
            'status':'出战存疑',
            'detail':'脚踝受伤，每日观察',
            'important':false
        },{
            'name':'科考克',
            'status':'出战存疑',
            'detail':'脚踝受伤，每日观察',
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
            'name':'奥尼',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
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
            'name':'内托',
            'status':'出战存疑',
            'detail':'腿部伤势，每日观察',
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