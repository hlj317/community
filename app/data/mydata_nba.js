const nbaData = {
    //亚特兰大老鹰
    hawks:[
        {
            'name':'博格丹',
            'status':'长期缺阵',
            'detail':'膝盖受伤，归期未定',
            'important':true
        },{
            'name':'卡佩拉',
            'status':'缺阵',
            'detail':'牙齿疼痛，无法出战周一对阵热火的比赛',
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
            'name':'塔图姆',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战周日对阵奇才的比赛',
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
            'detail':'腿部受伤，预计至少还要缺阵两场比赛',
            'important':false
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
            'detail':'脚踝受伤，无法出战周六对阵森林狼的比赛',
            'important':false
        },{
            'name':'海沃德',
            'status':'区镇',
            'detail':'肩膀受伤，无法出战周六对阵森林狼的比赛',
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
            'name':'勒维尔',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战周一对阵活塞的比赛',
            'important':true
        },{
            'name':'斯蒂文斯',
            'status':'缺阵',
            'detail':'身体不适，无法出战周一对阵活塞的比赛',
            'important':false
        },{
            'name':'阿伦',
            'status':'缺阵',
            'detail':'臀部受伤，无法出战周一对阵活塞的比赛',
            'important':true
        }
    ],
    //达拉斯独行侠
    mavericks:[
        {
            'name':'布洛克',
            'status':'轮休',
            'detail':'身体不适，无法出战周一对阵雄鹿的比赛',
            'important':true
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
            'name':'伊斯梅尔.史密斯',
            'status':'出战存疑',
            'detail':'小腿受伤，周六对阵快船的比赛出战存疑',
            'important':false
        },{
            'name':'海兰德',
            'status':'缺阵',
            'detail':'身体不适，无法出战周六对阵快船的比赛',
            'important':true
        },{
            'name':'小波特',
            'status':'出战存疑',
            'detail':'脚后跟受伤，周六对阵快船的比赛出战存疑',
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
            'status':'缺阵',
            'detail':'脚趾受伤，至少还需要2-3周的恢复时间',
            'important':true
        },{        
            'name':'萨迪克.贝',
            'status':'出战',
            'detail':'可以出战周六对阵太阳的比赛',
            'important':true
        },{        
            'name':'博扬',
            'status':'缺阵',
            'detail':'右膝受伤，无法出战周一对阵骑士的比赛',
            'important':true
        },{        
            'name':'迪亚洛',
            'status':'出战',
            'detail':'可以出战周一对阵骑士的比赛',
            'important':false
        },{        
            'name':'杰登.艾维',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战周一对阵骑士的比赛',
            'important':true
        },{        
            'name':'约瑟夫',
            'status':'出战',
            'detail':'可以出战周一对阵骑士的比赛',
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
            'name':'申京',
            'status':'出战',
            'detail':'可以出战周日对阵雷霆的比赛',
            'important':true
        },{
            'name':'戈登',
            'status':'出战',
            'detail':'可以出战周日对阵雷霆的比赛',
            'important':true
        },{
            'name':'泰特',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战',
            'important':true
        },{
            'name':'费尔南多',
            'status':'缺阵',
            'detail':'伤病管理，无法出战出战周日对阵雷霆的比赛',
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
            'status':'长期缺阵',
            'detail':'脚踝受伤，预计缺阵4-6周时间',
            'important':false
        },{
            'name':'内姆布哈德',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战周一对阵快船的比赛',
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
            'detail':'膝盖受伤，无法出战周一对阵步行者的比赛',
            'important':true
        },{
            'name':'伦纳德',
            'status':'缺阵',
            'detail':'伤病管理，无法出战周一对阵步行者的比赛',
            'important':true
        }
    ],
    //洛杉矶湖人
    lakers:[
        {
            'name':'詹姆斯',
            'status':'出战存疑',
            'detail':'伤病管理，周日对阵马刺的比赛出战存疑',
            'important':true
        },{
            'name':'贝弗利',
            'status':'缺阵',
            'detail':'被NBA官方禁赛三场',
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
            'name':'蒂尔曼',
            'status':'出战',
            'detail':'可以出战周一对阵尼克斯的比赛',
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
            'status':'出战',
            'detail':'可以出战周一对阵老鹰的比赛',
            'important':true
        },{
            'name':'巴特勒',
            'status':'缺阵',
            'detail':'膝盖受伤，预计还要缺阵几场比赛',
            'important':true
        },{
            'name':'邓肯.罗宾逊',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战周一对阵老鹰的比赛',
            'important':false
        },{
            'name':'文森特',
            'status':'出战',
            'detail':'可以出战周一对阵老鹰的比赛',
            'important':false
        },{
            'name':'斯特鲁斯',
            'status':'出战',
            'detail':'可以出战周一对阵老鹰的比赛',
            'important':true
        },{
            'name':'戴德蒙',
            'status':'出战',
            'detail':'可以出战周一对阵老鹰的比赛',
            'important':false
        },{
            'name':'克莱布.马丁',
            'status':'出战',
            'detail':'可以出战周一对阵老鹰的比赛',
            'important':true
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
            'detail':'身体不适，无法出战周一对阵独行侠的比赛',
            'important':false
        },{
            'name':'康文顿',
            'status':'出战',
            'detail':'可以出战周一对阵独行侠的比赛',
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
            'detail':'小腿受伤，无法出战周一对阵勇士的比赛',
            'important':false
        },{
            'name':'普林斯',
            'status':'缺阵',
            'detail':'右肩受伤，预计还要缺阵1-2周的时间',
            'important':false
        },{
            'name':'麦克丹尼尔斯',
            'status':'缺阵',
            'detail':'身体不适，无法出战周一对阵勇士的比赛',
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
            'name':'墨菲',
            'status':'出战',
            'detail':'可以出战周六对阵灰熊的比赛',
            'important':false
        },{
            'name':'CJ.麦科勒姆',
            'status':'缺阵',
            'detail':'因为联盟新冠协议，会缺阵几场比赛',
            'important':true
        }     
    ],
    //纽约尼克斯
    knicks:[
        {
            'name':'罗斯',
            'status':'出战',
            'detail':'可以出战周一对阵灰熊的比赛',
            'important':false
        },{
            'name':'雷迪什',
            'status':'出战',
            'detail':'可以出战周一对阵灰熊的比赛',
            'important':true
        },{
            'name':'杰伦.布伦森',
            'status':'出战',
            'detail':'可以出战周一对阵灰熊的比赛',
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
            'name':'穆斯卡拉',
            'status':'缺阵',
            'detail':'手指受伤，预计需要缺阵两周时间',
            'important':false
        }
    ],
    //奥兰多魔术
    magic:[
        {
            'name':'莫里茨.瓦格纳',
            'status':'出战',
            'detail':'可以出战周六对阵76人的比赛',
            'important':false
        },{
            'name':'富尔茨',
            'status':'缺阵',
            'detail':'脚趾受伤，无法出战周一对阵76人的比赛',
            'important':true
        },{
            'name':'科尔.安东尼',
            'status':'缺阵',
            'detail':'右内斜肌损伤，归期未定',
            'important':true
        },{
            'name':'艾萨克',
            'status':'缺阵',
            'detail':'膝盖受伤，归期未定',
            'important':false
        },{
            'name':'温德勒.卡特',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周一对阵76人的比赛出战存疑',
            'important':true
        },{
            'name':'奥吉吉',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战周一对阵76人的比赛出战存疑',
            'important':false
        },{
            'name':'萨格斯',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战周一对阵76人的比赛出战存疑',
            'important':true
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
        },{        
            'name':'恩比德',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周一对阵魔术的比赛',
            'important':true
        },{        
            'name':'赛布尔',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战周一对阵魔术的比赛',
            'important':false
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
            'detail':'脚后跟受伤，无法出战周日对阵爵士的比赛',
            'important':true
        },{
            'name':'卡梅伦.约翰逊',
            'status':'长期缺阵',
            'detail':'右膝半月板撕裂，预计缺阵2个月时间',
            'important':true
        },{
            'name':'沙梅特',
            'status':'出战',
            'detail':'可以出战周日对阵爵士的比赛',
            'important':false
        }
    ],
    //波特兰开拓者
    blazers:[
        {
            'name':'小加里.佩顿',
            'status':'缺阵',
            'detail':'腹部受伤，无法出战',
            'important':true
        },{
            'name':'基翁.约翰逊',
            'status':'缺阵',
            'detail':'左臀受伤，无法出战周一对阵篮网的比赛',
            'important':false
        },{
            'name':'利拉德',
            'status':'缺阵',
            'detail':'小腿受伤，预计需要缺阵1-2周时间',
            'important':true
        },{
            'name':'尤班克斯',
            'status':'出战',
            'detail':'可以出战周一对阵篮网的比赛',
            'important':false
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
            'name':'约什.理查德森',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周日对阵湖人的比赛',
            'important':true
        },{
            'name':'迪奥普',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周日对阵湖人的比赛',
            'important':false
        },{
            'name':'麦克德莫特',
            'status':'出战',
            'detail':'可以出战周日对阵湖人的比赛',
            'important':true
        }
    ],
    //多伦多猛龙
    raptors:[
        {
            'name':'西亚卡姆',
            'status':'长期缺阵',
            'detail':'腹股沟受伤，预计会缺阵一个月时间',
            'important':true
        },{
            'name':'班顿',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战周六对阵独行侠的比赛',
            'important':false
        },{
            'name':'斯科蒂.巴恩斯',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战周六对阵独行侠的比赛',
            'important':true
        },{
            'name':'范弗利特',
            'status':'出战',
            'detail':'可以出战周六对阵独行侠的比赛',
            'important':true
        },{
            'name':'阿丘瓦',
            'status':'缺阵',
            'detail':'右脚踝受伤，归期未定',
            'important':false
        },{
            'name':'小特伦特',
            'status':'出战',
            'detail':'可以出战周四对阵篮网的比赛',
            'important':true
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
            'name':'蒙特.莫里斯',
            'status':'出战',
            'detail':'可以出战周一对阵凯尔特人的比赛',
            'important':true
        },{
            'name':'八村塁',
            'status':'缺阵',
            'detail':'脚踝扭伤，无法出战周一对阵凯尔特人的比赛',
            'important':false
        },{
            'name':'库兹马',
            'status':'缺阵',
            'detail':'背部受伤，无法出战周一对阵凯尔特人的比赛',
            'important':true
        },{
            'name':'德隆.赖特',
            'status':'长期缺阵',
            'detail':'腿筋二级拉伤，归期未定',
            'important':false
        }
    ]   
}

module.exports = nbaData;