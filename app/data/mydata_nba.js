const nbaData = {
    //亚特兰大老鹰
    hawks:[
        {
            'name':'博格丹',
            'status':'出战存疑',
            'detail':'膝盖受伤，周四对阵魔术的比赛出战存疑',
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
            'name':'杰伦.布朗',
            'status':'出战存疑',
            'detail':'颈部受伤，周四对阵热火的比赛出战存疑',
            'important':true
        },{        
            'name':'霍福德',
            'status':'出战',
            'detail':'可以出战周四对阵热火的比赛',
            'important':true
        }
    ],
    //布鲁克林篮网
    nets:[
        {
            'name':'T.J.沃伦',
            'status':'长期缺阵',
            'detail':'腿部受伤，归期未定',
            'important':false
        },{
            'name':'渡边雄太',
            'status':'缺阵',
            'detail':'腿部受伤，预计至少还要缺阵一周',
            'important':false
        },{
            'name':'本.西蒙斯',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战周四对阵奇才的比赛',
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
        },{
            'name':'罗齐尔',
            'status':'缺阵',
            'detail':'身体不适，每日观察',
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
            'name':'乐福',
            'status':'缺阵',
            'detail':'腿筋拉伤，预计会缺阵1-2周时间',
            'important':true
        },{
            'name':'斯蒂文斯',
            'status':'出战存疑',
            'detail':'身体不适，周四对阵76人的比赛出战存疑',
            'important':false
        },{
            'name':'阿伦',
            'status':'缺阵',
            'detail':'臀部受伤，无法出战周四对阵76人的比赛',
            'important':true
        }
    ],
    //达拉斯独行侠
    mavericks:[
        {
            'name':'尼利基纳',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
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
            'name':'海兰德',
            'status':'出战存疑',
            'detail':'身体不适，周四对阵火箭的比赛出战存疑',
            'important':true
        },{
            'name':'纳吉',
            'status':'出战存疑',
            'detail':'身体不适，周四对阵火箭的比赛出战存疑',
            'important':true
        },{
            'name':'小波特',
            'status':'缺阵',
            'detail':'脚后跟受伤，无法出战周四对阵火箭的比赛',
            'important':true
        },{
            'name':'杰夫.格林',
            'status':'长期缺阵',
            'detail':'膝盖受伤，归期未定，有可能会选择退役',
            'important':false
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
            'name':'斯图尔特',
            'status':'出战',
            'detail':'可以出战周三对阵尼克斯的比赛',
            'important':true
        },{        
            'name':'巴格利',
            'status':'出战',
            'detail':'可以出战周三对阵尼克斯的比赛',
            'important':true
        },{        
            'name':'博扬',
            'status':'出战',
            'detail':'可以出战周三对阵尼克斯的比赛',
            'important':true
        },{        
            'name':'杰登.艾维',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战周三对阵尼克斯的比赛',
            'important':true
        }    
    ],
    //金州勇士
    warriors:[
        {
            'name':'伊戈达拉',
            'status':'长期缺阵',
            'detail':'臀部受伤，无法出战',
            'important':false
        }
    ],
    //休斯顿火箭
    rockets:[
        {
            'name':'泰特',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战',
            'important':true
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
            'detail':'脚踝受伤，无法出战周二对阵湖人的比赛',
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
            'name':'肯纳德',
            'status':'缺阵',
            'detail':'小腿受伤，归期未定',
            'important':false
        },{
            'name':'保罗.乔治',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战周四对阵爵士的比赛',
            'important':true
        },{
            'name':'伦纳德',
            'status':'出战存疑',
            'detail':'伤病管理，周四对阵爵士的比赛出战存疑',
            'important':true
        },{
            'name':'沃尔',
            'status':'出战存疑',
            'detail':'伤病管理，周四对阵爵士的比赛出战存疑',
            'important':true
        }
    ],
    //洛杉矶湖人
    lakers:[
        {
            'name':'詹姆斯',
            'status':'出战存疑',
            'detail':'脚踝受伤，周四对阵开拓者的比赛出战存疑',
            'important':true
        },{
            'name':'安东尼.戴维斯',
            'status':'出战',
            'detail':'可以出战周四对阵开拓者的比赛',
            'important':true
        },{
            'name':'贝弗利',
            'status':'出战',
            'detail':'禁赛结束，可以出战周四对阵开拓者的比赛',
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
            'name':'扎伊尔.威廉姆斯',
            'status':'长期缺阵',
            'detail':'膝盖受伤，归期未定',
            'important':false
        },{
            'name':'贝恩',
            'status':'缺阵',
            'detail':'右脚趾受伤，至少要缺阵3周时间',
            'important':true
        },{
            'name':'狄龙.布鲁克斯',
            'status':'出战存疑',
            'detail':'身体不适，周四对阵森林狼的比赛出战存疑',
            'important':true
        },{
            'name':'拉拉维',
            'status':'出战存疑',
            'detail':'左脚受伤，周四对阵森林狼的比赛出战存疑',
            'important':false
        }
    ],
    //迈阿密热火
    heat:[
        {
            'name':'奥拉迪波',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':true
        },{
            'name':'尤尔特塞文',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战',
            'important':false
        },{
            'name':'希罗',
            'status':'出战存疑',
            'detail':'身体不适，周四对阵凯尔特人的比赛出战存疑',
            'important':true
        },{
            'name':'巴特勒',
            'status':'缺阵',
            'detail':'膝盖受伤，预计还要缺阵几场比赛',
            'important':true
        },{
            'name':'邓肯.罗宾逊',
            'status':'出战存疑',
            'detail':'脚踝受伤，周四对阵凯尔特人的比赛出战存疑',
            'important':false
        },{
            'name':'文森特',
            'status':'出战存疑',
            'detail':'身体不适，周四对阵凯尔特人的比赛出战存疑',
            'important':false
        },{
            'name':'斯特鲁斯',
            'status':'出战存疑',
            'detail':'身体不适，周四对阵凯尔特人的比赛出战存疑',
            'important':true
        },{
            'name':'戴德蒙',
            'status':'出战存疑',
            'detail':'身体不适，周四对阵凯尔特人的比赛出战存疑',
            'important':false
        },{
            'name':'克莱布.马丁',
            'status':'出战存疑',
            'detail':'身体不适，周四对阵凯尔特人的比赛出战存疑',
            'important':true
        },{
            'name':'约维奇',
            'status':'出战存疑',
            'detail':'身体不适，周四对阵凯尔特人的比赛出战存疑',
            'important':false
        }                               
    ],
    //密尔沃基雄鹿
    bucks:[
        {
            'name':'米德尔顿',
            'status':'缺阵',
            'detail':'手腕受伤，预计还需要缺阵几周时间',
            'important':true
        },{
            'name':'英格尔斯',
            'status':'长期缺阵',
            'detail':'ACL膝盖受伤，归期未定',
            'important':false
        },{
            'name':'伊巴卡',
            'status':'缺阵',
            'detail':'身体不适，无法出战周四对阵尼克斯的比赛',
            'important':false
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
            'name':'麦克劳林',
            'status':'缺阵',
            'detail':'小腿受伤，无法出战周四对阵灰熊的比赛',
            'important':false
        },{
            'name':'普林斯',
            'status':'缺阵',
            'detail':'右肩受伤，预计还要缺阵1-2周的时间',
            'important':false
        },{
            'name':'麦克丹尼尔斯',
            'status':'出战存疑',
            'detail':'身体不适，周四对阵灰熊的比赛出战存疑',
            'important':true
        },{
            'name':'唐斯',
            'status':'长期缺阵',
            'detail':'小腿受伤，预计至少缺阵6周时间',
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
            'name':'小南斯',
            'status':'出战存疑',
            'detail':'肩膀受伤，周四对阵猛龙的比赛出战存疑',
            'important':false
        },{
            'name':'马绍尔',
            'status':'出战存疑',
            'detail':'身体不适，周四对阵猛龙的比赛出战存疑',
            'important':false
        },{
            'name':'英格拉姆',
            'status':'缺阵',
            'detail':'脚趾受伤，无法出战周四对阵猛龙的比赛',
            'important':true
        },{
            'name':'CJ.麦科勒姆',
            'status':'出战存疑',
            'detail':'身体不适，周四对阵猛龙的比赛出战存疑',
            'important':true
        }     
    ],
    //纽约尼克斯
    knicks:[
        {
            'name':'奎克利',
            'status':'出战',
            'detail':'可以出战周三对阵活塞的比赛',
            'important':false
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
            'name':'穆斯卡拉',
            'status':'缺阵',
            'detail':'手指受伤，预计需要缺阵两周时间',
            'important':false
        },{
            'name':'亚历山大',
            'status':'出战存疑',
            'detail':'左臀受伤，周四对阵马刺的比赛出战存疑',
            'important':true
        }
    ],
    //奥兰多魔术
    magic:[
        {
            'name':'富尔茨',
            'status':'出战',
            'detail':'可以出战周四对阵老鹰的比赛',
            'important':true
        },{
            'name':'科尔.安东尼',
            'status':'出战',
            'detail':'可以出战周四对阵老鹰的比赛',
            'important':true
        },{
            'name':'艾萨克',
            'status':'缺阵',
            'detail':'膝盖受伤，归期未定',
            'important':false
        },{
            'name':'温德勒.卡特',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周四对阵老鹰的比赛',
            'important':true
        },{
            'name':'奥吉吉',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战周四对阵老鹰的比赛',
            'important':false
        },{
            'name':'萨格斯',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战周四对阵老鹰的比赛',
            'important':true
        },{
            'name':'班巴',
            'status':'出战存疑',
            'detail':'背部受伤，周四对阵老鹰的比赛出战存疑',
            'important':false
        }
    ],
    //费城76人
    seven6ers:[
        {        
            'name':'哈登',
            'status':'长期缺阵',
            'detail':'腿部受伤，预计缺阵一个月的时间',
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
            'name':'克里斯.保罗',
            'status':'缺阵',
            'detail':'脚后跟受伤，无法出战周四对阵公牛的比赛',
            'important':true
        },{
            'name':'卡梅伦.约翰逊',
            'status':'长期缺阵',
            'detail':'右膝半月板撕裂，预计缺阵2个月时间',
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
            'name':'基翁.约翰逊',
            'status':'缺阵',
            'detail':'左臀受伤，无法出战周三对阵快船的比赛',
            'important':false
        },{
            'name':'利拉德',
            'status':'缺阵',
            'detail':'小腿受伤，预计需要缺阵1-2周时间',
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
        },{
            'name':'莱尔斯',
            'status':'出战存疑',
            'detail':'身体不适，周四对阵步行者的比赛出战存疑',
            'important':false
        },{
            'name':'蒙克',
            'status':'出战存疑',
            'detail':'身体不适，周四对阵步行者的比赛出战存疑',
            'important':true
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
            'name':'约什.理查德森',
            'status':'出战存疑',
            'detail':'脚踝受伤，周四对阵雷霆的比赛出战存疑',
            'important':true
        },{
            'name':'迪奥普',
            'status':'出战存疑',
            'detail':'腿部受伤，周四对阵雷霆的比赛出战存疑',
            'important':false
        },{
            'name':'朗福德',
            'status':'出战存疑',
            'detail':'身体不适，周四对阵雷霆的比赛出战存疑',
            'important':false
        },{
            'name':'索汉',
            'status':'缺阵',
            'detail':'四头肌受伤，无法出战周四对阵雷霆的比赛',
            'important':true
        },{
            'name':'珀尔特尔',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战周四对阵雷霆的比赛',
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
        }
    ],
    //犹它爵士
    jazz:[
        {
            'name':'鲁迪.盖伊',
            'status':'缺阵',
            'detail':'左手受伤，至少还需要缺阵两周的时间',
            'important':false
        },{
            'name':'康利',
            'status':'缺阵',
            'detail':'膝盖受伤，预计需要缺阵两周的时间',
            'important':true
        }                            
    ],
    //华盛顿奇才
    wizards:[
        {
            'name':'八村塁',
            'status':'缺阵',
            'detail':'脚踝扭伤，无法出战周四对阵篮网的比赛',
            'important':false
        },{
            'name':'德隆.赖特',
            'status':'长期缺阵',
            'detail':'腿筋二级拉伤，归期未定',
            'important':false
        }
    ]   
}

module.exports = nbaData;