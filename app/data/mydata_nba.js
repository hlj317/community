const nbaData = {
    //亚特兰大老鹰
    hawks:[
        {
            'name':'博格丹',
            'status':'长期缺阵',
            'detail':'膝盖受伤，归期未定',
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
            'name':'赛斯.库里',
            'status':'出战存疑',
            'detail':'脚踝受伤，周二对阵步行者的比赛出战存疑',
            'important':true
        }
    ],
    //夏洛特黄蜂
    hornets:[
        {
            'name':'拉梅洛.鲍尔',
            'status':'缺阵',
            'detail':'脚踝受伤，预计要缺阵1-2周时间',
            'important':true
        },{
            'name':'科迪.马丁',
            'status':'出战存疑',
            'detail':'小腿受伤，周二对阵国王的比赛出战存疑',
            'important':false
        },{
            'name':'罗齐尔',
            'status':'出战存疑',
            'detail':'右脚踝受伤，周二对阵国王的比赛出战存疑',
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
            'name':'扎克.拉文',
            'status':'出战',
            'detail':'可以出战周日对阵76人的比赛',
            'important':true
        },{
            'name':'德拉蒙德',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周日对阵76人的比赛',
            'important':false
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
            'name':'加兰',
            'status':'缺阵',
            'detail':'眼睛受伤，无法出战周一对阵尼克斯的比赛',
            'important':true
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
            'name':'尼利基纳',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战',
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
            'name':'波普',
            'status':'出战',
            'detail':'可以出战周一对阵湖人的比赛',
            'important':true
        },{
            'name':'里德',
            'status':'出战存疑',
            'detail':'个人原因，周一对阵湖人的比赛出战存疑',
            'important':false
        }
    ],
    //底特律活塞
    pistons:[
        {        
            'name':'伯克斯',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        },{        
            'name':'巴格利',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战',
            'important':true
        },{        
            'name':'杰伦.杜伦',
            'status':'出战存疑',
            'detail':'腿部受伤，周二对阵雄鹿的比赛出战存疑',
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
            'name':'迪文琴佐',
            'status':'缺阵',
            'detail':'腿筋拉伤，预计要恢复一周的时间',
            'important':false
        },{
            'name':'汤普森',
            'status':'轮休',
            'detail':'伤病管理，无法出战周一对阵活塞的比赛',
            'important':true
        }
    ],
    //休斯顿火箭
    rockets:[
        {
            'name':'小华盛顿',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战',
            'important':false
        },{
            'name':'费尔南多',
            'status':'缺阵',
            'detail':'膝盖受伤，归期未定',
            'important':false
        },{
            'name':'埃里克.戈登',
            'status':'出战存疑',
            'detail':'身体不适，周二对阵快船的比赛出战存疑',
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
            'name':'麦克康奈尔',
            'status':'出战存疑',
            'detail':'膝盖受伤，周二对阵篮网的比赛出战存疑',
            'important':false
        },{
            'name':'特纳',
            'status':'出战',
            'detail':'可以出战周二对阵篮网的比赛',
            'important':true
        },{
            'name':'内史密斯',
            'status':'出战存疑',
            'detail':'腿部受伤，周二对阵篮网的比赛出战存疑',
            'important':true
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
            'detail':'伤病管理，无法出战周二对阵火箭的比赛',
            'important':true
        },{
            'name':'沃尔',
            'status':'出战存疑',
            'detail':'腿部受伤，周二对阵火箭的比赛出战存疑',
            'important':true
        },{
            'name':'考文顿',
            'status':'缺阵',
            'detail':'触发联盟新冠疫情协议，无法出战周二对阵火箭的比赛',
            'important':true
        }
    ],
    //洛杉矶湖人
    lakers:[
        {
            'name':'安东尼.戴维斯',
            'status':'出战',
            'detail':'可以出战周一对阵掘金的比赛',
            'important':true
        },{
            'name':'施罗德',
            'status':'缺阵',
            'detail':'拇指受伤，预计缺阵3-4周',
            'important':false
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
        },{
            'name':'安德森',
            'status':'缺阵',
            'detail':'身体不适，无法出战周一对阵掘金的比赛',
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
            'name':'拉拉维',
            'status':'出战存疑',
            'detail':'身体不适，周二对阵爵士的比赛出战存疑',
            'important':false
        },{
            'name':'莫兰特',
            'status':'出战存疑',
            'detail':'身体不适，周二对阵爵士的比赛出战存疑',
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
            'name':'戴德蒙',
            'status':'缺阵',
            'detail':'身体不适，无法出战周日对阵国王的比赛',
            'important':false
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
            'detail':'腿部受伤，周二对阵活塞的比赛出战存疑',
            'important':false
        },{
            'name':'米德尔顿',
            'status':'缺阵',
            'detail':'手腕受伤，预计还需要缺阵几周时间',
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
            'name':'凯尔.安德森',
            'status':'出战',
            'detail':'可以出战周一对阵马刺的比赛',
            'important':false
        },{
            'name':'麦克劳林',
            'status':'缺阵',
            'detail':'脚后跟受伤，无法出战周一对阵马刺的比赛',
            'important':false
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
            'detail':'膝盖受伤，无法出战周一对阵快船的比赛',
            'important':true
        },{
            'name':'锡安',
            'status':'大概率出战',
            'detail':'臀部受伤，周一对阵快船的比赛出战存疑',
            'important':true
        },{
            'name':'丹尼尔斯',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战周一对阵快船的比赛',
            'important':false
        },{
            'name':'英格拉姆',
            'status':'缺阵',
            'detail':'脑震荡治疗，无法出战周一对阵快船的比赛',
            'important':true
        }     
    ],
    //纽约尼克斯
    knicks:[
        {
            'name':'格兰姆斯',
            'status':'缺阵',
            'detail':'腿部受伤，归期未定',
            'important':false
        }
    ],
    //俄克拉荷马城雷霆
    thunder:[
        {
            'name':'切特.霍姆格伦',
            'status':'长期缺阵',
            'detail':'腿部受伤，归期未定',
            'important':false
        },{
            'name':'杰伦.威廉姆斯',
            'status':'出战',
            'detail':'可以出战周日对阵独行侠的比赛',
            'important':false
        },{
            'name':'约什.吉迪',
            'status':'缺阵',
            'detail':'腿部受伤，归期未定',
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
            'name':'萨格斯',
            'status':'缺阵',
            'detail':'脚踝受伤，归期未定',
            'important':true
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
        }
    ],
    //费城76人
    seven6ers:[
        {        
            'name':'斯普林格',
            'status':'出战存疑',
            'detail':'左膝受伤，每日观察',
            'important':false
        },{        
            'name':'恩比德',
            'status':'出战存疑',
            'detail':'身体不适，周二对阵奇才的比赛出战存疑',
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
            'name':'艾顿',
            'status':'缺阵',
            'detail':'脚踝受伤，至少缺阵一周时间',
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
            'name':'沃特福德',
            'status':'缺阵',
            'detail':'臀部受伤，无法出战',
            'important':false
        },{
            'name':'利拉德',
            'status':'缺阵',
            'detail':'小腿受伤，预计需要恢复1-2周时间',
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
            'name':'巴洛',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        },{
            'name':'瓦塞尔',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周一对阵森林狼的比赛',
            'important':true
        },{
            'name':'约什.理查德森',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周一对阵森林狼的比赛',
            'important':true
        },{
            'name':'索汉',
            'status':'缺阵',
            'detail':'身体不适，无法出战周一对阵森林狼的比赛',
            'important':true
        }
    ],
    //多伦多猛龙
    raptors:[
        {
            'name':'奥托.波特',
            'status':'缺阵',
            'detail':'腿筋拉伤，归期未定',
            'important':false
        }
    ],
    //犹它爵士
    jazz:[
        {
            'name':'鲁迪.盖伊',
            'status':'出战存疑',
            'detail':'腿部受伤，周二对阵灰熊的比赛出战存疑',
            'important':false
        },{
            'name':'丰泰基奥',
            'status':'出战存疑',
            'detail':'触发安全健康协议，周二对阵灰熊的比赛出战存疑',
            'important':false
        },{
            'name':'凯斯勒',
            'status':'出战存疑',
            'detail':'腿部受伤，周二对阵灰熊的比赛出战存疑',
            'important':false
        }                      
    ],
    //华盛顿奇才
    wizards:[
        {
            'name':'基斯珀特',
            'status':'长期缺阵',
            'detail':'左脚踝受伤，预计缺阵4-6周的时间',
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