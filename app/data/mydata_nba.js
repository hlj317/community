const nbaData = {
    //亚特兰大老鹰
    hawks:[
        {
            'name':'迪昂',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'所罗门.希尔',
            'status':'赛季报销',
            'detail':'腿筋撕裂，赛季报销',
            'important':false
        },{
            'name':'德安德鲁.亨特',
            'status':'长期缺阵',
            'detail':'手腕受伤，无法出战，预期缺席至少八周',
            'important':false
        }
    ],
    //波士顿凯尔特人
    celtics:[
        {
            'name':'布罗德里克.托马斯',
            'status':'缺阵',
            'detail':'脚趾受伤，无法出战',
            'important':false
        },{
            'name':'普里查德',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
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
            'status':'主场缺阵，客场出战',
            'detail':'暂时只能出战客场的比赛，主场休战',
            'important':true
        }
    ],
    //夏洛特黄蜂
    hornets:[
        {
            'name':'斯科特.刘易斯',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        }
    ],
    //芝加哥公牛
    bulls:[
        {
            'name':'贾文特.格林',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'卡鲁索',
            'status':'缺阵',
            'detail':'腿部受伤，至少休战7-10天',
            'important':true
        },{
            'name':'帕特里克.威廉姆斯',
            'status':'缺阵',
            'detail':'腕部受伤，无法出战',
            'important':false
        }
    ],
    //克利夫兰骑士
    cavaliers:[
        {
            'name':'卢比奥',
            'status':'长期缺阵',
            'detail':'左膝前叉韧带断裂，赛季报销',
            'important':true
        },{
            'name':'奥克罗',
            'status':'缺阵',
            'detail':'左肘受伤，预计要恢复2-3周',
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
            'name':'波尔津吉斯',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':true
        },{
            'name':'东契奇',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战',
            'important':true
        },{
            'name':'以赛亚.托马斯',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'博班',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'特雷.伯克',
            'status':'缺阵',
            'detail':'新冠刚转阴性，无法出战',
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
            'name':'钱查尔',
            'status':'缺阵',
            'detail':'身体不适，无法出战',
            'important':false
        },{
            'name':'杰夫.格林',
            'status':'出战存疑',
            'detail':'新冠刚转阴性，每日观察',
            'important':false
        },{
            'name':'马库斯.霍华德',
            'status':'缺阵',
            'detail':'膝盖受伤，至少缺阵六周',
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
            'name':'以赛亚.里弗斯',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        },{
            'name':'克里斯.史密斯',
            'status':'缺阵',
            'detail':'左膝受伤，无法出战',
            'important':false
        },{
            'name':'弗兰克.杰克逊',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'奥利尼克',
            'status':'缺阵',
            'detail':'左膝受伤，无法出战',
            'important':false
        }
    ],
    //金州勇士
    warriors:[
        {
            'name':'库里',
            'status':'缺阵',
            'detail':'腿部挫伤，无法出战',
            'important':true
        },{
            'name':'安德森',
            'status':'缺阵',
            'detail':'左脚踝受伤，无法出战',
            'important':false
        },{
            'name':'格林',
            'status':'缺阵',
            'detail':'左臀受伤，无法出战',
            'important':true
        },{
            'name':'怀斯曼',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
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
            'name':'申京',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战',
            'important':false
        },{
            'name':'加鲁巴',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
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
            'name':'克雷格',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'勒维尔',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':true
        },{
            'name':'比塔泽',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'布罗格登',
            'status':'缺阵',
            'detail':'新冠刚转阴性，无法出战',
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
            'name':'肯纳德',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':true
        },{
            'name':'哈腾',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战',
            'important':false
        },{
            'name':'保罗.乔治',
            'status':'长期缺阵',
            'detail':'手肘撕裂，预计缺阵四周',
            'important':true
        },{
            'name':'小波士顿',
            'status':'缺阵',
            'detail':'身体不适，无法出战',
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
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':true
        },{
            'name':'贝恩',
            'status':'出战存疑',
            'detail':'四头肌受伤，每日观察',
            'important':true
        },{
            'name':'狄龙布鲁克斯',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':true
        },{
            'name':'凯尔.安德森',
            'status':'缺阵',
            'detail':'背部受伤，无法出战',
            'important':false
        },{
            'name':'莫兰特',
            'status':'缺阵',
            'detail':'大腿受伤，无法出战',
            'important':true
        },{
            'name':'蒂尔曼',
            'status':'出战存疑',
            'detail':'新冠刚转阴性，每日观察',
            'important':false
        },{
            'name':'康查尔',
            'status':'出战存疑',
            'detail':'新冠刚转阴性，每日观察',
            'important':false
        },{
            'name':'伊夫·庞斯',
            'status':'出战存疑',
            'detail':'脚踝受伤，每日观察',
            'important':false
        }
    ],
    //迈阿密热火
    heat:[
        {
            'name':'奥克帕拉',
            'status':'缺阵',
            'detail':'手腕受伤，无法出战',
            'important':false
        },{
            'name':'戴德蒙',
            'status':'缺阵',
            'detail':'膝盖受伤，至少要康复2周',
            'important':false
        },{
            'name':'吉米.巴特勒',
            'status':'出战存疑',
            'detail':'脚踝受伤，每日观察',
            'important':true
        },{
            'name':'马库斯.加勒特',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'文森特',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'斯特鲁斯',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'阿德巴约',
            'status':'长期缺阵',
            'detail':'右手拇指撕裂需要动手术，归期未定',
            'important':true
        },{
            'name':'马基夫.莫里斯',
            'status':'缺阵',
            'detail':'颈部受伤，无法出战',
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
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'朱.霍乐迪',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':true
        },{
            'name':'迪文琴佐',
            'status':'缺阵',
            'detail':'左脚踝受伤，无法出战',
            'important':true
        },{
            'name':'洛佩兹',
            'status':'长期缺阵',
            'detail':'背部手术，归期未定',
            'important':true
        },{
            'name':'康诺顿',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'格雷森艾伦',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':true
        }
    ],
    //明尼苏达森林狼
    timberwolves:[
        {
            'name':'贝弗利',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':true
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
            'name':'萨托兰斯基',
            'status':'缺阵',
            'detail':'身体不适，每日观察',
            'important':false
        },{
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
            'name':'富尼耶',
            'status':'缺阵',
            'detail':'身体不适，无法出战',
            'important':true
        },{
            'name':'德里克.罗斯',
            'status':'长期缺阵',
            'detail':'右脚踝受伤，至少缺阵8周',
            'important':true
        },{
            'name':'肯巴.沃克',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战',
            'important':true
        },{
            'name':'诺埃尔',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        }
    ],
    //俄克拉荷马城雷霆
    thunder:[
        {
            'name':'以赛亚.罗比',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'费沃斯',
            'status':'缺阵',
            'detail':'背部受伤，无法出战',
            'important':false
        }
    ],
    //奥兰多魔术
    magic:[
        {
            'name':'温德尔.卡特',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':true
        },{
            'name':'莫里茨·瓦格纳',
            'status':'出战存疑',
            'detail':'身体不适，每日观察',
            'important':false
        },{
            'name':'罗宾.洛佩兹',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':true
        },{
            'name':'BJ.约翰逊',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
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
            'name':'丹尼.格林',
            'status':'出战存疑',
            'detail':'小腿受伤，每日观察',
            'important':false
        },{
            'name':'米尔顿',
            'status':'缺阵',
            'detail':'背部受伤，无法出战',
            'important':false
        },{
            'name':'马克西',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
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
            'name':'沙梅特',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
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
            'name':'利拉德',
            'status':'缺阵',
            'detail':'腹股沟受伤，至少缺阵接下来的三场比赛',
            'important':true
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
            'name':'梅图',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'霍姆斯',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':true
        }
    ],
    //圣安东尼奥马刺
    spurs:[
        {
            'name':'麦克戴莫特',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':true
        },{
            'name':'怀特',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':true
        },{
            'name':'凯尔登约翰逊',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':true
        },{
            'name':'特雷.琼斯',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'赛迪斯.杨',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'瓦塞尔',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
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
            'detail':'因为健康安全协议，会缺阵数场比赛',
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
            'name':'阿祖比亚克',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战',
            'important':false
        },{
            'name':'怀特塞德',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        },{
            'name':'戈贝尔',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':true
        },{
            'name':'英格尔斯',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        }                       
    ],
    //华盛顿奇才
    wizards:[
        {
            'name':'安东尼.吉尔',
            'status':'出战存疑',
            'detail':'新冠刚转阴性，每日观察',
            'important':false
        },{
            'name':'沃特斯',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'沃纳.梅克',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'托马斯.布兰恩特',
            'status':'缺阵',
            'detail':'膝盖受伤，预计12月底复出',
            'important':false
        },{
            'name':'八村塁',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        },{
            'name':'哈雷尔',
            'status':'缺阵',
            'detail':'身体不适，无法出战',
            'important':true
        },{
            'name':'贝尔坦斯',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        }      
    ]   
}

module.exports = nbaData;