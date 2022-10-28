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
        },{        
            'name':'格威',
            'status':'缺阵',
            'detail':'违反联盟规定，停赛一场',
            'important':false
        }
    ],
    //布鲁克林篮网
    nets:[
        {
            'name':'塞斯.库里',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战周五对阵独行侠的比赛',
            'important':true
        },{
            'name':'马基夫.莫里斯',
            'status':'大概率出战',
            'detail':'大概率可以出战周五对阵独行侠的比赛',
            'important':false
        },{
            'name':'乔.哈里斯',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战周五对阵独行侠的比赛',
            'important':false
        },{
            'name':'T.J.沃伦',
            'status':'长期缺阵',
            'detail':'腿部受伤，归期未定',
            'important':false
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
            'status':'缺阵',
            'detail':'小腿受伤，无法出战周六对阵魔术的比赛',
            'important':false
        },{
            'name':'罗齐尔',
            'status':'缺阵',
            'detail':'右脚踝受伤，无法出战周六对阵魔术的比赛',
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
            'status':'缺阵',
            'detail':'左膝伤病管理，无法出战周六对阵马刺的比赛',
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
            'name':'加兰',
            'status':'缺阵',
            'detail':'眼睛受伤，无法出战周六对阵凯尔特人的比赛',
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
        },{
            'name':'小哈达威',
            'status':'出战',
            'detail':'可以出战周五对阵篮网的比赛',
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
            'name':'小波特',
            'status':'出战',
            'detail':'预计出战周六对阵爵士的比赛',
            'important':true
        },{
            'name':'波普',
            'status':'出战存疑',
            'detail':'脚踝受伤，周六对阵爵士的比赛出战存疑',
            'important':true
        },{
            'name':'里德',
            'status':'出战存疑',
            'detail':'腿部受伤，周六对阵爵士的比赛出战存疑',
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
            'name':'艾维',
            'status':'出战',
            'detail':'可以出战周六对阵活塞的比赛',
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
            'name':'申京',
            'status':'出战',
            'detail':'预计可以出战周六对阵开拓者的比赛',
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
            'detail':'伤病管理，无法出战周五对阵雷霆的比赛',
            'important':true
        },{
            'name':'马库斯.莫里斯',
            'status':'缺阵',
            'detail':'个人原因，无法出战周五对阵雷霆的比赛',
            'important':true
        }
    ],
    //洛杉矶湖人
    lakers:[
        {
            'name':'威斯布鲁克',
            'status':'出战',
            'detail':'可以出战周六对阵森林狼的比赛',
            'important':true
        },{
            'name':'安东尼.戴维斯',
            'status':'缺阵',
            'detail':'后背受伤，无法出战周六对阵森林狼的比赛',
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
            'detail':'身体不适，无法出战周六对阵森林狼的比赛',
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
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战',
            'important':false
        },{
            'name':'康查尔',
            'status':'出战存疑',
            'detail':'左肩受伤，周五对阵国王的比赛出战存疑',
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
            'status':'缺阵',
            'detail':'背部受伤，无法出战周六对阵湖人的比赛',
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
            'status':'出战存疑',
            'detail':'膝盖受伤，周六对阵太阳的比赛出战存疑',
            'important':true
        },{
            'name':'锡安',
            'status':'出战存疑',
            'detail':'臀部受伤，周六对阵太阳的比赛出战存疑',
            'important':true
        },{
            'name':'英格拉姆',
            'status':'缺阵',
            'detail':'脑震荡治疗，无法出战周六对阵太阳的比赛',
            'important':true
        },{
            'name':'阿尔瓦拉多',
            'status':'出战存疑',
            'detail':'背部受伤，周六对阵太阳的比赛出战存疑',
            'important':true
        },{
            'name':'CJ.麦科勒姆',
            'status':'出战存疑',
            'detail':'腿部受伤，周六对阵太阳的比赛出战存疑',
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
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        },{
            'name':'约什.吉迪',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周五对阵快船的比赛',
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
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战周六对阵猛龙的比赛',
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
            'detail':'腿部受伤，无法出战周六对阵公牛的比赛',
            'important':true
        },{
            'name':'普利莫',
            'status':'缺阵',
            'detail':'臀部受伤，无法出战周六对阵公牛的比赛',
            'important':false
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
            'name':'阿祖比亚克',
            'status':'出战',
            'detail':'预计可以出战周六对阵掘金的比赛',
            'important':false
        },{
            'name':'塞克斯顿',
            'status':'出战存疑',
            'detail':'腿部受伤，周六对阵掘金的比赛出战存疑',
            'important':true
        },{
            'name':'鲁迪.盖伊',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周六对阵掘金的比赛',
            'important':false
        },{
            'name':'丰泰基奥',
            'status':'缺阵',
            'detail':'因为安全健康协议，无法出战周六对阵掘金的比赛',
            'important':false
        },{
            'name':'凯斯勒',
            'status':'出战存疑',
            'detail':'身体不适，周六对阵掘金的比赛出战存疑',
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