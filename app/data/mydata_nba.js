const nbaData = {
    //亚特兰大老鹰
    hawks:[
        {
            'name':'博格丹',
            'status':'长期缺阵',
            'detail':'膝盖受伤，归期未定',
            'important':true
        },{
            'name':'杰伦.约翰逊',
            'status':'出战存疑',
            'detail':'腿部受伤，周五对阵76人的比赛出战存疑',
            'important':false
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
            'detail':'脚踝受伤，无法出战周四对阵尼克斯的比赛',
            'important':false
        },{
            'name':'欧文',
            'status':'缺阵',
            'detail':'被球队禁赛五场',
            'important':true
        }
    ],
    //夏洛特黄蜂
    hornets:[
        {
            'name':'拉梅洛.鲍尔',
            'status':'缺阵',
            'detail':'脚踝受伤，预计要缺阵2周时间',
            'important':true
        },{
            'name':'科迪.马丁',
            'status':'缺阵',
            'detail':'小腿受伤，无法出战周五对阵热火的比赛',
            'important':false
        },{
            'name':'海沃德',
            'status':'缺阵',
            'detail':'肩膀受伤，无法出战周五对阵热火的比赛',
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
            'name':'科比.怀特',
            'status':'缺阵',
            'detail':'四头肌受伤，无法出战周四对阵鹈鹕的比赛',
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
        }
    ],
    //达拉斯独行侠
    mavericks:[
        {
            'name':'贝尔坦斯',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战',
            'important':false
        },{
            'name':'伍德',
            'status':'缺阵',
            'detail':'左膝受伤，无法出战周五对阵奇才的比赛',
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
            'name':'纳吉',
            'status':'大概率出战',
            'detail':'脚踝受伤，大概率可以出战周四对阵步行者的比赛',
            'important':false
        },{
            'name':'伊斯梅尔.史密斯',
            'status':'缺阵',
            'detail':'小腿受伤，无法出战周四对阵步行者的比赛',
            'important':false
        }
    ],
    //底特律活塞
    pistons:[
        {        
            'name':'伯克斯',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周四对阵凯尔特人的比赛',
            'important':false
        },{        
            'name':'巴格利',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战周四对阵凯尔特人的比赛',
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
        },{
            'name':'迪文琴佐',
            'status':'缺阵',
            'detail':'腿筋拉伤，预计要恢复一周的时间',
            'important':false
        }
    ],
    //休斯顿火箭
    rockets:[
        {
            'name':'费尔南多',
            'status':'缺阵',
            'detail':'膝盖受伤，归期未定',
            'important':false
        },{
            'name':'泰特',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战周四对阵猛龙的比赛',
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
            'name':'内史密斯',
            'status':'出战',
            'detail':'可以出战周四对阵掘金的比赛',
            'important':false
        },{
            'name':'杜阿尔特',
            'status':'长期缺阵',
            'detail':'脚踝受伤，预计缺阵4-6周时间',
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
            'name':'伦纳德',
            'status':'缺阵',
            'detail':'伤病管理，归期未定',
            'important':true
        }
    ],
    //洛杉矶湖人
    lakers:[
        {
            'name':'施罗德',
            'status':'缺阵',
            'detail':'拇指受伤，预计缺阵3-4周',
            'important':false
        },{
            'name':'贝弗利',
            'status':'出战',
            'detail':'可以出战周四对阵快船的比赛',
            'important':true
        },{
            'name':'朗尼.沃克',
            'status':'缺阵',
            'detail':'身体不适，无法出战周四对阵快船的比赛',
            'important':true
        },{
            'name':'安东尼.戴维斯',
            'status':'出战存疑',
            'detail':'背部伤病管理，周四对阵快船的比赛出战存疑',
            'important':true
        },{
            'name':'詹姆斯',
            'status':'出战',
            'detail':'可以出战周四对阵快船的比赛',
            'important':true
        },{
            'name':'托马斯.布莱恩特',
            'status':'缺阵',
            'detail':'左肋骨受伤，预计还需要缺阵三周时间',
            'important':false
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
            'name':'贾伦.杰克逊',
            'status':'长期缺阵',
            'detail':'腿部受伤，预计4-6个月才能回归球队',
            'important':true
        },{
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
            'name':'史蒂夫.亚当斯',
            'status':'出战存疑',
            'detail':'脚踝受伤，周四对阵马刺的比赛出战存疑',
            'important':true
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
            'detail':'小腿受伤，周五对阵黄蜂的比赛出战存疑',
            'important':true
        },{
            'name':'克莱布.马丁',
            'status':'出战存疑',
            'detail':'左脚踝受伤，周五对阵黄蜂的比赛出战存疑',
            'important':true
        }              
    ],
    //密尔沃基雄鹿
    bucks:[
        {
            'name':'康文顿',
            'status':'缺阵',
            'detail':'小腿受伤，预计还需要缺阵三周时间',
            'important':false
        },{
            'name':'A.J.格林',
            'status':'缺阵',
            'detail':'腿部受伤，归期未定',
            'important':false
        },{
            'name':'米德尔顿',
            'status':'缺阵',
            'detail':'手腕受伤，预计还需要缺阵几周时间',
            'important':true
        },{
            'name':'朱.霍乐迪',
            'status':'缺阵',
            'detail':'右脚踝受伤，无法出战周四对阵雷霆的比赛',
            'important':true
        },{
            'name':'字母哥',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战周四对阵雷霆的比赛',
            'important':true
        },{
            'name':'英格尔斯',
            'status':'长期缺阵',
            'detail':'ACL膝盖受伤，归期未定',
            'important':false
        }
    ],
    //明尼苏达森林狼
    timberwolves:[
        {
            'name':'戈贝尔',
            'status':'出战',
            'detail':'可以出战周四对阵太阳的比赛',
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
            'name':'南斯',
            'status':'出战存疑',
            'detail':'膝盖受伤，周五对阵开拓者的比赛出战存疑',
            'important':false
        },{
            'name':'坦普尔',
            'status':'出战',
            'detail':'可以出战周五对阵开拓者的比赛',
            'important':false
        }  
    ],
    //纽约尼克斯
    knicks:[
        {
            'name':'格兰姆斯',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        },{
            'name':'米切尔.罗宾逊',
            'status':'缺阵',
            'detail':'右膝受伤，无法出战周四对阵篮网的比赛',
            'important':true
        }
    ],
    //俄克拉荷马城雷霆
    thunder:[
        {
            'name':'切特.霍姆格伦',
            'status':'出战',
            'detail':'可以出战周四对阵雄鹿的比赛',
            'important':false
        },{
            'name':'波库',
            'status':'出战存疑',
            'detail':'肩膀受伤，周四对阵雄鹿的比赛出战存疑',
            'important':true
        }
    ],
    //奥兰多魔术
    magic:[
        {
            'name':'莫里茨.瓦格纳',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战',
            'important':false
        },{
            'name':'富尔茨',
            'status':'长期缺阵',
            'detail':'脚趾受伤，归期未定',
            'important':false
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
            'name':'加里.哈里斯',
            'status':'缺阵',
            'detail':'膝盖受伤，归期未定',
            'important':true
        },{
            'name':'班切罗',
            'status':'出战存疑',
            'detail':'左脚踝受伤，周四对阵独行侠的比赛出战存疑',
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
            'name':'PJ.塔克',
            'status':'出战存疑',
            'detail':'左臀受伤，周五对阵76人的比赛出战存疑',
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
            'name':'佩恩',
            'status':'出战',
            'detail':'可以出战周四对阵森林狼的比赛',
            'important':false
        },{
            'name':'克里斯.保罗',
            'status':'缺阵',
            'detail':'脚后跟受伤，无法出战周四对阵森林狼的比赛',
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
            'detail':'腹部受伤，无法出战',
            'important':true
        },{
            'name':'基翁.约翰逊',
            'status':'出战存疑',
            'detail':'左臀受伤，周五对阵鹈鹕的比赛出战存疑',
            'important':false
        },{
            'name':'努尔基奇',
            'status':'出战存疑',
            'detail':'身体不适，周五对阵鹈鹕的比赛出战存疑',
            'important':true
        },{
            'name':'格兰特',
            'status':'出战存疑',
            'detail':'身体不适，周五对阵鹈鹕的比赛出战存疑',
            'important':true
        },{
            'name':'利拉德',
            'status':'轮休',
            'detail':'身体不适，无法出战周五对阵鹈鹕的比赛',
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
            'name':'马利克.蒙克',
            'status':'出战',
            'detail':'可以出战周四对阵骑士的比赛',
            'important':false
        }
    ],
    //圣安东尼奥马刺
    spurs:[
        {
            'name':'扎克.科林斯',
            'status':'长期缺阵',
            'detail':'腿部手术，预计缺阵两个月时间',
            'important':false
        },{
            'name':'布雷克.威斯利',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
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
            'name':'肯.伯奇',
            'status':'缺阵',
            'detail':'右膝受伤，无法出战周四对阵火箭的比赛',
            'important':false
        }
    ],
    //犹它爵士
    jazz:[
        {
            'name':'范泽比尔特',
            'status':'出战存疑',
            'detail':'腿部受伤，周四对阵老鹰的比赛出战存疑',
            'important':true
        },{
            'name':'丰泰基奥',
            'status':'出战存疑',
            'detail':'身体不适，每日观察',
            'important':false
        }                      
    ],
    //华盛顿奇才
    wizards:[
        {
            'name':'泰.吉布森',
            'status':'出战存疑',
            'detail':'头痛不适，无法出战周五对阵独行侠的比赛',
            'important':false
        },{
            'name':'波尔津吉斯',
            'status':'缺阵',
            'detail':'身体不适，无法出战周五对阵独行侠的比赛',
            'important':true
        },{
            'name':'比尔',
            'status':'缺阵',
            'detail':'身体不适，无法出战周五对阵独行侠的比赛',
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