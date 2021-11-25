const nbaData = {
    //亚特兰大老鹰
    hawks:[
        {
            'name':'德安德鲁.亨特',
            'status':'长期缺阵',
            'detail':'手腕受伤，无法出战，预期缺席至少八周',
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
            'name':'杰伦.布朗',
            'status':'出战存疑',
            'detail':'伤病管理，每日观察',
            'important':true
        },{
            'name':'约翰.理查德森',
            'status':'缺阵',
            'detail':'身体不适，无法出战',
            'important':false
        }
    ],
    //布鲁克林篮网
    nets:[
        {
            'name':'布鲁斯.布朗',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        },{
            'name':'乔.哈里斯',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':true
        },{
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
            'status':'出战存疑',
            'detail':'肘部受伤，每日观察',
            'important':false
        }
    ],
    //芝加哥公牛
    bulls:[
        {
            'name':'卡鲁索',
            'status':'出战',
            'detail':'可以出战周四对阵火箭的比赛',
            'important':true
        },{
            'name':'帕特里克.威廉姆斯',
            'status':'缺阵',
            'detail':'腕部受伤，无法出战',
            'important':false
        },{
            'name':'武切维奇',
            'status':'复出',
            'detail':'可以出战周四对阵火箭的比赛',
            'important':true
        }
    ],
    //克利夫兰骑士
    cavaliers:[
        {
            'name':'奥斯曼',
            'status':'大概率出战',
            'detail':'大概率可以出战周四与太阳的比赛',
            'important':false
        },{
            'name':'莫布利',
            'status':'缺阵',
            'detail':'右肘扭伤，预计缺阵2-4周',
            'important':true
        },{
            'name':'塞克斯顿',
            'status':'缺阵',
            'detail':'左膝受伤，无法出战',
            'important':true
        },{
            'name':'加兰',
            'status':'出战',
            'detail':'可以出战周四对阵太阳的比赛',
            'important':true
        }  
    ],
    //达拉斯独行侠
    mavericks:[
        {
            'name':'布洛克',
            'status':'缺阵',
            'detail':'身体不适，无法出战',
            'important':false
        },{
            'name':'尼利基纳',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        },{
            'name':'杰伦.布伦森',
            'status':'出战存疑',
            'detail':'脚踝受伤，每日观察',
            'important':false
        }
    ],
    //丹佛掘金
    nuggets:[
        {
            'name':'海兰德',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战',
            'important':false
        },{
            'name':'约基奇',
            'status':'缺阵',
            'detail':'右手腕受伤，无法出战',
            'important':true
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
            'name':'斯图尔特',
            'status':'缺阵',
            'detail':'联盟处罚，禁赛两场',
            'important':true
        },{
            'name':'海耶斯',
            'status':'缺阵',
            'detail':'拇指受伤，无法出战',
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
            'status':'出战',
            'detail':'可以出战周四对阵湖人的比赛',
            'important':true
        },{
            'name':'TJ.沃伦',
            'status':'长期缺阵',
            'detail':'腿部受伤，三周之后重新接受医疗评估',
            'important':true
        }     
    ],
    //洛杉矶快船
    clippers:[
        {
            'name':'巴图姆',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
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
            'name':'詹姆斯',
            'status':'出战',
            'detail':'可以出战周四对阵步行者的比赛',
            'important':true
        },{
            'name':'安东尼戴维斯',
            'status':'缺阵',
            'detail':'身体不适，无法出战',
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
            'name':'萨姆.梅里尔',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战',
            'important':false
        },{
            'name':'梅尔顿',
            'status':'缺阵',
            'detail':'腹股沟受伤，无法出战',
            'important':false
        },{
            'name':'狄龙布鲁克斯',
            'status':'出战存疑',
            'detail':'右腿筋拉伤，每日观察',
            'important':true
        }
    ],
    //迈阿密热火
    heat:[
        {
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
    //明尼苏达森林狼
    timberwolves:[
        {
            'name':'奥科吉',
            'status':'缺阵',
            'detail':'背部受伤，无法出战',
            'important':false
        }
    ],
    //密尔沃基雄鹿
    bucks:[
        {
            'name':'塞米.奥莱杰',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        },{
            'name':'洛佩兹',
            'status':'缺阵',
            'detail':'背部受伤，无法出战',
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
            'name':'格拉汉姆',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':true
        },{
            'name':'席尔瓦',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
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
            'name':'德里克.罗斯',
            'status':'出战存疑',
            'detail':'脚踝受伤，每日观察',
            'important':true
        },{
            'name':'米切尔罗宾逊',
            'status':'出战存疑',
            'detail':'鼻梁受伤，每日观察',
            'important':true
        },{
            'name':'泰吉布森',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        }
    ],
    //俄克拉荷马城雷霆
    thunder:[
        {
            'name':'亚历山大',
            'status':'缺阵',
            'detail':'右脚踝受伤，无法出战',
            'important':true
        },{
            'name':'加夫列尔.德克',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        }     
    ],
    //奥兰多魔术
    magic:[
        {
            'name':'泰伦斯.罗斯',
            'status':'缺阵',
            'detail':'背部拉伤，无法出战',
            'important':false
        },{
            'name':'科尔.安东尼',
            'status':'缺阵',
            'detail':'右脚踝受伤，无法出战',
            'important':true
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
            'name':'赛斯.库里',
            'status':'出战存疑',
            'detail':'背部受伤，每日观察',
            'important':true
        },{
            'name':'哈里斯',
            'status':'出战存疑',
            'detail':'臀部受伤，每日观察',
            'important':true
        },{
            'name':'丹尼.格林',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        },{
            'name':'乔尔.恩比德',
            'status':'缺阵',
            'detail':'预计在本周日对阵森林狼的比赛中复出',
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
            'status':'出战存疑',
            'detail':'膝盖受伤，每日观察',
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
            'name':'斯内尔',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
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
            'name':'麦克德莫特',
            'status':'出战存疑',
            'detail':'膝盖受伤，每日观察',
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
            'name':'阿丘瓦',
            'status':'出战存疑',
            'detail':'肩膀受伤，每日观察',
            'important':false
        },{
            'name':'渡边雄太',
            'status':'缺阵',
            'detail':'小腿受伤，无法出战',
            'important':false
        },{
            'name':'阿奴诺比',
            'status':'出战存疑',
            'detail':'臀部受伤，每日观察',
            'important':true
        }        
    ],
    //犹它爵士
    jazz:[
        {
            'name':'伊莱贾.休斯',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        }      
    ],
    //华盛顿奇才
    wizards:[
        {
            'name':'贝尔坦斯',
            'status':'复出',
            'detail':'可以出战周四对阵鹈鹕的比赛',
            'important':false
        },{
            'name':'八村塁',
            'status':'出战存疑',
            'detail':'不确定当前身体状态是否达到出场的准备，每日观察',
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