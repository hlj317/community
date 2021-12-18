const nbaData = {
    //亚特兰大老鹰
    hawks:[
        {
            'name':'所罗门.希尔',
            'status':'赛季报销',
            'detail':'腿筋撕裂，赛季报销',
            'important':false
        },{
            'name':'德安德鲁.亨特',
            'status':'长期缺阵',
            'detail':'手腕受伤，无法出战，预期缺席至少八周',
            'important':false
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
            'name':'埃尔南戈麦斯',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'格兰特.威廉姆斯',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'AI.霍福德',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':true
        },{
            'name':'施罗德',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':true
        },{
            'name':'埃尔南戈麦斯',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },
        {
            'name':'布鲁诺.费尔南多',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        },{
            'name':'贾巴里.帕克',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        }
    ],
    //布鲁克林篮网
    nets:[
        {
            'name':'布鲁斯.布朗',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'哈登',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':true
        },{
            'name':'阿尔德里奇',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':true
        },{
            'name':'杰文.卡特',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'本布里',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'詹姆斯.约翰逊',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'米尔萨普',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
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
            'status':'大概率出战',
            'detail':'大概率可以出战周六对阵开拓者的比赛',
            'important':false
        },{
            'name':'拉梅洛.鲍尔',
            'status':'大概率出战',
            'detail':'大概率可以出战周六对阵开拓者的比赛',
            'important':true
        }
    ],
    //芝加哥公牛
    bulls:[
        {
            'name':'小德里克.琼斯',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'拉文',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':true
        },{
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
            'name':'马特.托马斯',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'特洛伊.布朗',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'马特.托马斯',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'帕特里克.威廉姆斯',
            'status':'缺阵',
            'detail':'腕部受伤，无法出战',
            'important':false
        },{
            'name':'阿利兹.约翰逊',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        }
    ],
    //克利夫兰骑士
    cavaliers:[
        {
            'name':'奥克罗',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':true
        },{
            'name':'莫布利',
            'status':'出战存疑',
            'detail':'臀部受伤，每日观察',
            'important':true
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
            'name':'东契奇',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战',
            'important':true
        },{
            'name':'斯特林.布朗',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
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
            'name':'马库斯.霍华德',
            'status':'缺阵',
            'detail':'膝盖受伤，至少缺阵六周',
            'important':false
        },{
            'name':'杰迈克尔.格林',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战',
            'important':false
        },{
            'name':'波尔',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'奥斯汀.里弗斯',
            'status':'大概率出战',
            'detail':'大概率可以出战周六对阵老鹰的比赛',
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
            'name':'格兰特',
            'status':'长期缺阵',
            'detail':'右手拇指受伤，归期未定',
            'important':true
        },{
            'name':'斯特林.布朗',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
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
            'name':'乔丹.普尔',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':true
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
            'name':'阿尔莫尼-布鲁克斯',
            'status':'出战存疑',
            'detail':'左脚踝受伤，每日观察',
            'important':false
        },{
            'name':'伍德',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战',
            'important':true
        },{
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
            'name':'布罗格登',
            'status':'出战存疑',
            'detail':'身体不适，每日观察',
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
            'name':'伊巴卡',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':true
        },{
            'name':'巴图姆',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战',
            'important':true
        },{
            'name':'保罗.乔治',
            'status':'缺阵',
            'detail':'肘部受伤，无法出战',
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
            'name':'威斯布鲁克',
            'status':'大概率出战',
            'detail':'大概率可以出战周六对阵森林狼的比赛',
            'important':true
        },{
            'name':'奥斯汀.里弗斯',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'布拉德利',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'蒙克',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'德怀特.霍华德',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'塔伦.塔克',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'詹姆斯',
            'status':'大概率出战',
            'detail':'大概率出战周六对阵森林狼的比赛',
            'important':true
        },{
            'name':'安东尼.戴维斯',
            'status':'大概率出战',
            'detail':'大概率出战周六对阵森林狼的比赛',
            'important':true
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
            'name':'亚当斯',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':true
        },{
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
            'name':'泰勒.希罗',
            'status':'缺阵',
            'detail':'肱四头肌受伤，无法出战',
            'important':true
        },{
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
            'name':'凯莱布.马丁',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
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
            'name':'米德尔顿',
            'status':'缺阵',
            'detail':'身体不适，无法出战',
            'important':true
        },{
            'name':'字母哥',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':true
        },{
            'name':'波蒂斯',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':true
        },{
            'name':'马修斯',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
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
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        }  
    ],
    //明尼苏达森林狼
    timberwolves:[
        {
            'name':'爱德华兹',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':true
        },{
            'name':'莱曼',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        }
    ],
    //新奥尔良鹈鹕
    pelicans:[
        {
            'name':'小刘易斯',
            'status':'长期缺阵',
            'detail':'右膝前叉十字韧带撕裂，赛季报销',
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
            'detail':'右脚踝受伤，每日观察',
            'important':true
        },{
            'name':'格兰姆斯',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'RJ巴雷特',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':true
        },{
            'name':'诺克斯',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'托平',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'杰里科.西姆斯',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        }
    ],
    //俄克拉荷马城雷霆
    thunder:[
        {
            'name':'多尔特',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
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
            'name':'科尔.安东尼',
            'status':'缺阵',
            'detail':'右脚踝受伤，无法出战',
            'important':true
        },{
            'name':'小瓦格纳',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':true
        },{
            'name':'班巴',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':true
        },{
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
            'name':'尼昂',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'科尔克马兹',
            'status':'缺阵',
            'detail':'身体不适，无法出战',
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
            'name':'斯内尔',
            'status':'缺阵',
            'detail':'个人原因，无法出战',
            'important':false
        },{
            'name':'丹尼.史密斯',
            'status':'出战存疑',
            'detail':'膝盖受伤，每日观察',
            'important':false
        },{
            'name':'科迪.泽勒',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        },{
            'name':'CJ.麦科勒姆',
            'status':'缺阵',
            'detail':'气胸治疗，无法出战',
            'important':true
        }
    ],
    //萨克拉门托国王
    kings:[
        {
            'name':'米切尔',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'巴格利',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'霍姆斯',
            'status':'出战存疑',
            'detail':'眼部受伤，每日观察',
            'important':true
        },{
            'name':'莱恩',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':true
        },{
            'name':'福克斯',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':true
        },{
            'name':'梅图',
            'status':'出战存疑',
            'detail':'膝盖受伤，每日观察',
            'important':true
        },{
            'name':'哈里伯顿',
            'status':'出战存疑',
            'detail':'身体不适，每日观察',
            'important':true
        }
    ],
    //圣安东尼奥马刺
    spurs:[
        {
            'name':'查克.科林斯',
            'status':'长期缺阵',
            'detail':'腿部严重受伤，预计至少到今年圣诞节后才会复出',
            'important':false
        }  
    ],
    //多伦多猛龙
    raptors:[
        {
            'name':'大卫.约翰逊',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        },{
            'name':'阿丘瓦',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':true
        },{
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
            'name':'贾里德.巴特勒',
            'status':'出战存疑',
            'detail':'膝盖受伤，每日观察',
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
        {
            'name':'托马斯.布兰恩特',
            'status':'长期缺阵',
            'detail':'膝盖受伤，预计12月底复出',
            'important':false
        },{
            'name':'八村塁',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        }   
    ]   
}

module.exports = nbaData;