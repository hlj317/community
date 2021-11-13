const nbaData = {
    //亚特兰大老鹰
    hawks:[
        {
            'name':'博格丹',
            'status':'出战存疑',
            'detail':'脚踝受伤，每日观察',
            'important':true
        },{
            'name':'德安德鲁.亨特',
            'status':'出战存疑',
            'detail':'手腕受伤，每日观察',
            'important':true
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
            'name':'杰伦.布朗',
            'status':'缺阵',
            'detail':'肌腱受伤，预计会伤停1-2周',
            'important':true
        },{
            'name':'罗密欧.兰福德',
            'status':'缺阵',
            'detail':'腿筋受伤，预计会伤停几周',
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
            'name':'PJ.华盛顿',
            'status':'缺阵',
            'detail':'肘部受伤，预计一周后恢复',
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
            'name':'武切维奇',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵至少10天',
            'important':true
        }
    ],
    //克利夫兰骑士
    cavaliers:[
        {
            'name':'塞克斯顿',
            'status':'缺阵',
            'detail':'左膝受伤，无法出战',
            'important':true
        },{
            'name':'马尔坎宁',
            'status':'缺阵',
            'detail':'触发健康协议，需要缺阵数场比赛',
            'important':true
        },{
            'name':'凯文.乐福',
            'status':'缺阵',
            'detail':'触发健康协议，需要缺阵数场比赛',
            'important':true
        }    
    ],
    //达拉斯独行侠
    mavericks:[
        {
            'name':'克勒贝尔',
            'status':'缺阵',
            'detail':'背部受伤，需要缺阵数场比赛',
            'important':false
        },{
            'name':'伯克',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        }
    ],
    //丹佛掘金
    nuggets:[
        {
            'name':'小波特',
            'status':'缺阵',
            'detail':'背部伤势，无法出战',
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
            'name':'达米恩.李',
            'status':'出战存疑',
            'detail':'臀部受伤，每日观察',
            'important':false
        },{
            'name':'格林',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':true
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
            'name':'约翰.沃尔',
            'status':'长期缺阵',
            'detail':'跟球队协商后决定，新赛季不会为火箭出场比赛，但工资照拿',
            'important':true
        }     
    ],
    //印第安纳步行者
    pacers:[
        {
            'name':'勒维尔',
            'status':'出战存疑',
            'detail':'背部受伤，每日观察',
            'important':true
        },{
            'name':'以赛亚.杰克逊',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
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
            'detail':'腹股沟拉伤，预计缺阵至少一周',
            'important':true
        },{
            'name':'奥斯汀.里弗斯',
            'status':'缺阵',
            'detail':'腿部肌腱拉伤，至少缺席两周',
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
            'name':'基利安.蒂利',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        },{
            'name':'狄龙布鲁克斯',
            'status':'出战存疑',
            'detail':'右脚踝受伤，每日观察',
            'important':true
        } 
    ],
    //迈阿密热火
    heat:[
        {
            'name':'巴特勒',
            'status':'出战存疑',
            'detail':'脚踝扭伤，每日观察',
            'important':true
        },{
            'name':'马基夫.莫里斯',
            'status':'出战存疑',
            'detail':'身体不适，每日观察',
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
            'name':'莱曼',
            'status':'出战存疑',
            'detail':'脚踝受伤，每日观察',
            'important':false
        } 
    ],
    //密尔沃基雄鹿
    bucks:[
        {
            'name':'字母哥',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战',
            'important':true
        },{
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
            'status':'缺阵',
            'detail':'出现脑震荡症状，无法出战',
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
            'name':'诺埃尔',
            'status':'出战存疑',
            'detail':'右膝受伤，每日观察',
            'important':false
        },{
            'name':'沙马尼奇',
            'status':'出战存疑',
            'detail':'身体不适，无法出战',
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
            'name':'恩比德',
            'status':'缺阵',
            'detail':'触发健康安全协议，会缺阵数场比赛',
            'important':true
        },{
            'name':'以赛亚.乔',
            'status':'缺阵',
            'detail':'触发健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'赛布尔',
            'status':'缺阵',
            'detail':'触发健康安全协议，会缺阵数场比赛',
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
            'name':'艾顿',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
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
            'name':'斯内尔',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        },{
            'name':'鲍威尔',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        }     
    ],
    //萨克拉门托国王
    kings:[
        {
            'name':'特伦斯.戴维斯',
            'status':'出战存疑',
            'detail':'脚踝受伤，每日观察',
            'important':false
        },{
            'name':'哈里伯顿',
            'status':'出战存疑',
            'detail':'背部受伤，每日观察',
            'important':true
        },{
            'name':'巴格利',
            'status':'出战存疑',
            'detail':'身体不适，每日观察',
            'important':false
        }
    ],
    //圣安东尼奥马刺
    spurs:[
        {
            'name':'兰代尔',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战',
            'important':false
        },{
            'name':'珀尔特尔',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':true
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
            'name':'肯.伯奇',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战',
            'important':false
        },{
            'name':'阿丘瓦',
            'status':'出战存疑',
            'detail':'肩膀受伤，出战存疑',
            'important':false
        }       
    ],
    //犹它爵士
    jazz:[
        {
            'name':'鲁迪.盖伊',
            'status':'长期缺阵',
            'detail':'腿部受伤，目前还没有做好参加新赛季的准备',
            'important':false
        }      
    ],
    //华盛顿奇才
    wizards:[
        {
            'name':'比尔',
            'status':'缺阵',
            'detail':'悼念祖母去世，无法出战周日对阵魔术的比赛',
            'important':true
        },{
            'name':'贝尔坦斯',
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