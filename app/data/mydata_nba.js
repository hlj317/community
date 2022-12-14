const nbaData = {
    //亚特兰大老鹰
    hawks:[
        {
            'name':'科林斯',
            'status':'缺阵',
            'detail':'左脚踝受伤，至少缺阵两周时间',
            'important':true
        },{
            'name':'德章泰.默里',
            'status':'缺阵',
            'detail':'脚踝受伤，预计缺阵两周时间',
            'important':true
        },{
            'name':'卡佩拉',
            'status':'出战',
            'detail':'可以出战周四对阵魔术的比赛',
            'important':true
        },{
            'name':'特雷杨',
            'status':'出战存疑',
            'detail':'背部受伤，周四对阵魔术的比赛出战存疑',
            'important':true
        },{
            'name':'博格丹',
            'status':'出战',
            'detail':'可以出战周四对阵魔术的比赛',
            'important':true
        }
    ],
    //波士顿凯尔特人
    celtics:[
        {        
            'name':'加里纳利',
            'status':'长期缺阵',
            'detail':'膝盖ACL伤病，赛季报销',
            'important':false
        },{        
            'name':'罗威',
            'status':'长期缺阵',
            'detail':'膝盖手术，预计缺阵2个月时间',
            'important':true
        },{        
            'name':'AI.霍福德',
            'status':'缺阵',
            'detail':'因为健康安全协议，需要缺阵数场比赛',
            'important':true
        }
    ],
    //布鲁克林篮网
    nets:[
        {
            'name':'克拉克斯顿',
            'status':'出战',
            'detail':'可以出战周二对阵奇才的比赛',
            'important':true
        },{
            'name':'罗伊斯.奥尼尔',
            'status':'缺阵',
            'detail':'身体不适，无法出战周二对阵奇才的比赛',
            'important':true
        }
    ],
    //夏洛特黄蜂
    hornets:[
        {
            'name':'科迪.马丁',
            'status':'长期缺阵',
            'detail':'小腿受伤，归期未定',
            'important':false
        },{
            'name':'拉梅洛.鲍尔',
            'status':'缺阵',
            'detail':'脚踝受伤，归期未定',
            'important':true
        },{
            'name':'丹尼斯.史密斯',
            'status':'缺阵',
            'detail':'脚踝受伤，预计还要缺阵几场比赛',
            'important':false
        },{
            'name':'海沃德',
            'status':'缺阵',
            'detail':'肩膀受伤，归期未定',
            'important':true
        }
    ],
    //芝加哥公牛
    bulls:[
        {
            'name':'朗佐.鲍尔',
            'status':'长期缺阵',
            'detail':'膝盖手术，预计至少缺阵2个月时间',
            'important':true
        },{
            'name':'卡鲁索',
            'status':'出战',
            'detail':'可以出战周四对阵尼克斯的比赛',
            'important':true
        }
    ],
    //克利夫兰骑士
    cavaliers:[
        {
            'name':'卢比奥',
            'status':'长期缺阵',
            'detail':'膝盖受伤，归期未定',
            'important':false
        },{
            'name':'温德勒',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战',
            'important':false
        },{
            'name':'迪恩.韦德',
            'status':'缺阵',
            'detail':'肩膀受伤，预计会缺阵数周时间',
            'important':false
        }
    ],
    //达拉斯独行侠
    mavericks:[
        {
            'name':'尼利基纳',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        },{
            'name':'克勒贝尔',
            'status':'出战存疑',
            'detail':'右膝受伤，周四对阵骑士的比赛出战存疑',
            'important':true
        },{
            'name':'约什.格林',
            'status':'缺阵',
            'detail':'手肘受伤，无法出战周四对阵骑士的比赛',
            'important':false
        }
    ],
    //丹佛掘金
    nuggets:[
        {
            'name':'科林·吉莱斯皮',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        },{
            'name':'小波特',
            'status':'缺阵',
            'detail':'脚后跟受伤，归期未定',
            'important':true
        }
    ],
    //底特律活塞
    pistons:[
        {        
            'name':'凯德.坎宁安',
            'status':'缺阵',
            'detail':'腿部受伤，归期未定',
            'important':true
        },{        
            'name':'以赛亚.里弗斯',
            'status':'缺阵',
            'detail':'肩膀受伤，预计会缺阵一段时间',
            'important':false
        }    
    ],
    //金州勇士
    warriors:[
        {
            'name':'伊戈达拉',
            'status':'长期缺阵',
            'detail':'臀部受伤，无法出战',
            'important':false
        },{
            'name':'维金斯',
            'status':'缺阵',
            'detail':'腿筋拉伤，无法出战周四对阵步行者的比赛',
            'important':true
        },{
            'name':'汤普森',
            'status':'轮休',
            'detail':'身体不适，无法出战周四对阵步行者的比赛',
            'important':true
        }
    ],
    //休斯顿火箭
    rockets:[
        {
            'name':'泰特',
            'status':'缺阵',
            'detail':'脚踝受伤，预计会缺阵一段时间',
            'important':true
        },{
            'name':'费尔南多',
            'status':'出战',
            'detail':'可以出战周一对阵雄鹿的比赛',
            'important':false
        }
    ],
    //印第安纳步行者
    pacers:[
        {
            'name':'丹尼尔.泰斯',
            'status':'缺阵',
            'detail':'身体不适，无法出战',
            'important':false
        },{
            'name':'杜阿尔特',
            'status':'缺阵',
            'detail':'脚踝受伤，预计还要缺阵几场比赛',
            'important':false
        },{
            'name':'内史密斯',
            'status':'出战存疑',
            'detail':'肩膀受伤，周四对阵勇士的比赛出战存疑',
            'important':false
        }
    ],
    //洛杉矶快船
    clippers:[
        {
            'name':'普雷斯頓',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        },{
            'name':'鲍威尔',
            'status':'缺阵',
            'detail':'身体不适，预计还会缺阵一段时间',
            'important':true
        }
    ],
    //洛杉矶湖人
    lakers:[
        {
            'name':'安德森',
            'status':'缺阵',
            'detail':'脚踝受伤，至少还要缺阵两周时间',
            'important':false
        },{
            'name':'加布里埃尔',
            'status':'缺阵',
            'detail':'左肩受伤，无法出战周三对阵凯尔特人的比赛',
            'important':false
        },{
            'name':'詹姆斯',
            'status':'出战',
            'detail':'可以出战周三对阵凯尔特人的比赛',
            'important':true
        },{
            'name':'安东尼.戴维斯',
            'status':'出战',
            'detail':'可以出战周三对阵凯尔特人的比赛',
            'important':true
        },{
            'name':'科尔.施威德',
            'status':'缺阵',
            'detail':'身体不适，无法出战',
            'important':false
        }          
    ],
    //孟菲斯灰熊
    grizzlies:[
        {
            'name':'丹尼.格林',
            'status':'长期缺阵',
            'detail':'膝盖受伤，归期未定',
            'important':false
        },{
            'name':'贝恩',
            'status':'缺阵',
            'detail':'右脚趾受伤，至少要缺阵3周时间',
            'important':true
        },{
            'name':'拉拉维',
            'status':'出战',
            'detail':'可以出战周二对阵老鹰的比赛',
            'important':false
        },{
            'name':'莫兰特',
            'status':'缺阵',
            'detail':'腿筋拉伤，无法出战周二对阵老鹰的比赛',
            'important':true
        },{
            'name':'亚当斯',
            'status':'缺阵',
            'detail':'身体不适，无法出战周二对阵老鹰的比赛',
            'important':true
        }
    ],
    //迈阿密热火
    heat:[
        {
            'name':'尤尔特塞文',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战',
            'important':false
        },{
            'name':'文森特',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战周四对阵雷霆的比赛',
            'important':false
        },{
            'name':'戴德蒙',
            'status':'出战存疑',
            'detail':'腿部受伤，周四对阵雷霆的比赛出战存疑',
            'important':false
        },{
            'name':'巴特勒',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周四对阵雷霆的比赛',
            'important':true
        }                        
    ],
    //密尔沃基雄鹿
    bucks:[
        {
            'name':'英格尔斯',
            'status':'长期缺阵',
            'detail':'ACL膝盖受伤，归期未定',
            'important':false
        },{
            'name':'马修斯',
            'status':'出战',
            'detail':'可以出战周三对阵勇士的比赛',
            'important':false
        },{
            'name':'朱.霍乐迪',
            'status':'缺阵',
            'detail':'身体不适，无法出战周三对阵勇士的比赛',
            'important':true
        }   
    ],
    //明尼苏达森林狼
    timberwolves:[
        {
            'name':'加尔扎',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        },{
            'name':'普林斯',
            'status':'缺阵',
            'detail':'右肩受伤，预计还要缺阵1-2周的时间',
            'important':false
        },{
            'name':'唐斯',
            'status':'长期缺阵',
            'detail':'小腿受伤，预计至少缺阵6周时间',
            'important':true
        },{
            'name':'麦克劳林',
            'status':'缺阵',
            'detail':'小腿拉伤，无法出战周四对阵快船的比赛',
            'important':false
        },{
            'name':'拉塞尔',
            'status':'出战存疑',
            'detail':'腿部受伤，周四对阵快船的比赛出战存疑',
            'important':true
        }
    ],
    //新奥尔良鹈鹕
    pelicans:[
        {
            'name':'小刘易斯',
            'status':'长期缺阵',
            'detail':'膝盖受伤，归期未定',
            'important':false
        },{
            'name':'赫伯特.琼斯',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战周三对阵爵士的比赛',
            'important':true
        },{
            'name':'英格拉姆',
            'status':'缺阵',
            'detail':'脚趾受伤，无法出战周三对阵爵士的比赛',
            'important':true
        }
    ],
    //纽约尼克斯
    knicks:[
        {
            'name':'阿尔奇迪亚科诺',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        },{
            'name':'托平',
            'status':'缺阵',
            'detail':'膝盖受伤，至少缺阵2-3周时间',
            'important':false
        },{
            'name':'杰伦.布伦森',
            'status':'出战存疑',
            'detail':'腿部受伤，周四对阵公牛的比赛出战存疑',
            'important':true
        }
    ],
    //俄克拉荷马城雷霆
    thunder:[
        {
            'name':'切特.霍姆格伦',
            'status':'长期缺阵',
            'detail':'腿部受伤，赛季报销',
            'important':false
        },{
            'name':'肯里奇.威廉姆斯',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战周四对阵热火的比赛',
            'important':false
        },{
            'name':'罗兵逊-厄尔',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战周四对阵热火的比赛',
            'important':false
        }
    ],
    //奥兰多魔术
    magic:[
        {
            'name':'加里.哈里斯',
            'status':'缺阵',
            'detail':'腿筋拉伤，预计会缺阵几场比赛',
            'important':false
        },{
            'name':'艾萨克',
            'status':'缺阵',
            'detail':'膝盖受伤，归期未定',
            'important':false
        },{
            'name':'温德勒.卡特',
            'status':'缺阵',
            'detail':'腿部受伤，预计至少还要缺阵1-2周时间',
            'important':true
        },{
            'name':'奥吉吉',
            'status':'缺阵',
            'detail':'膝盖受伤，预计会缺阵一段时间',
            'important':false
        },{
            'name':'萨格斯',
            'status':'缺阵',
            'detail':'脚踝受伤，预计会缺阵一段时间',
            'important':true
        }
    ],
    //费城76人
    seven6ers:[
        {        
            'name':'豪斯',
            'status':'缺阵',
            'detail':'身体不适，无法出战周三对阵国王的比赛',
            'important':false
        },{        
            'name':'梅尔顿',
            'status':'缺阵',
            'detail':'身体不适，无法出战周三对阵国王的比赛',
            'important':true
        },{        
            'name':'马克西',
            'status':'长期缺阵',
            'detail':'左脚受伤，至少缺阵3-4周时间',
            'important':true
        }
    ],
    //菲尼克斯太阳
    suns:[
        {
            'name':'杰.克劳德',
            'status':'长期缺阵',
            'detail':'与球队闹矛盾，本赛季不会出战',
            'important':false
        },{
            'name':'卡梅伦.约翰逊',
            'status':'长期缺阵',
            'detail':'右膝半月板撕裂，预计缺阵2个月时间',
            'important':true
        },{
            'name':'德文.布克',
            'status':'缺阵',
            'detail':'腿筋拉伤，无法出战周三对阵火箭的比赛',
            'important':true
        }
    ],
    //波特兰开拓者
    blazers:[
        {
            'name':'小加里.佩顿',
            'status':'缺阵',
            'detail':'腹部受伤，预计还需要缺阵一段时间',
            'important':false
        },{
            'name':'利特尔',
            'status':'长期缺阵',
            'detail':'臀部受伤，预计缺阵6周时间',
            'important':false
        },{
            'name':'哈特',
            'status':'出战存疑',
            'detail':'腿部受伤，周四对阵马刺的比赛出战存疑',
            'important':true
        }
    ],
    //萨克拉门托国王
    kings:[
        {
            'name':'克塔',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        }
    ],
    //圣安东尼奥马刺
    spurs:[
        {
            'name':'布雷克.威斯利',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        },{
            'name':'珀尔特尔',
            'status':'缺阵',
            'detail':'膝盖受伤，至少还要缺阵一周的时间',
            'important':true
        },{
            'name':'迪奥普',
            'status':'出战存疑',
            'detail':'腿部受伤，周四对阵开拓者的比赛出战存疑',
            'important':false
        },{
            'name':'扎克.科林斯',
            'status':'出战存疑',
            'detail':'脚踝受伤，周四对阵开拓者的比赛出战存疑',
            'important':true
        },{
            'name':'约什.理查德森',
            'status':'出战存疑',
            'detail':'右手受伤，周四对阵开拓者的比赛出战存疑',
            'important':true
        },{
            'name':'朗福德',
            'status':'出战存疑',
            'detail':'右手受伤，周四对阵开拓者的比赛出战存疑',
            'important':true
        }
    ],
    //多伦多猛龙
    raptors:[
        {
            'name':'阿丘瓦',
            'status':'缺阵',
            'detail':'右脚踝受伤，归期未定',
            'important':false
        },{
            'name':'奥托.波特',
            'status':'缺阵',
            'detail':'左脚受伤，预计会缺阵接下来几场比赛',
            'important':false
        },{
            'name':'埃尔南戈麦斯',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战周四对阵国王的比赛',
            'important':false
        },{
            'name':'阿奴诺比',
            'status':'缺阵',
            'detail':'左臀受伤，无法出战周四对阵国王的比赛',
            'important':true
        }
    ],
    //犹它爵士
    jazz:[
        {
            'name':'马尔坎宁',
            'status':'出战',
            'detail':'可以出战周三对阵鹈鹕的比赛',
            'important':true
        },{
            'name':'丰泰基奥',
            'status':'缺阵',
            'detail':'身体不适，无法出战周三对阵鹈鹕的比赛',
            'important':false
        },{
            'name':'塞克斯顿',
            'status':'缺阵',
            'detail':'腿筋拉伤，至少缺阵1-2周时间',
            'important':true
        }                                
    ],
    //华盛顿奇才
    wizards:[
        {
            'name':'八村塁',
            'status':'缺阵',
            'detail':'脚踝扭伤，预计还需要缺阵1-2周时间',
            'important':false
        },{
            'name':'德隆.赖特',
            'status':'长期缺阵',
            'detail':'腿筋二级拉伤，归期未定',
            'important':false
        },{
            'name':'比尔',
            'status':'出战存疑',
            'detail':'大腿拉伤，周四对阵掘金的比赛出战存疑',
            'important':true
        },{
            'name':'安东尼.吉尔',
            'status':'出战存疑',
            'detail':'腿部受伤，周四对阵掘金的比赛出战存疑',
            'important':false
        },{
            'name':'蒙特.莫里斯',
            'status':'出战存疑',
            'detail':'身体不适，周四对阵掘金的比赛出战存疑',
            'important':true
        },{
            'name':'波尔津吉斯',
            'status':'出战存疑',
            'detail':'背部受伤，周四对阵掘金的比赛出战存疑',
            'important':true
        }
    ]   
}

module.exports = nbaData;