const nbaData = {
    //亚特兰大老鹰
    hawks:[
        {
            'name':'巴夫金',
            'status':'长期缺阵',
            'detail':'拇指骨折，预计缺阵8-10周的时间',
            'important':false
        },{
            'name':'亨特',
            'status':'缺阵',
            'detail':'膝盖受伤，预计至少缺阵两周时间',
            'important':true
        },{
            'name':'加里森.马修斯',
            'status':'缺阵',
            'detail':'左脚踝扭伤，预计缺阵1-2周时间',
            'important':true
        },{
            'name':'卡佩拉',
            'status':'出战',
            'detail':'可以出战周六对阵步行者的比赛',
            'important':true
        },{
            'name':'威斯利.马修斯',
            'status':'缺阵',
            'detail':'小腿受伤，无法出战周六对阵步行者的比赛',
            'important':false
        }
    ],
    //波士顿凯尔特人
    celtics:[
        {
            'name':'豪瑟',
            'status':'出战',
            'detail':'可以出战周五对阵雄鹿的比赛',
            'important':false
        },{
            'name':'塔图姆',
            'status':'出战',
            'detail':'可以出战周五对阵雄鹿的比赛',
            'important':true
        },{
            'name':'波尔津吉斯',
            'status':'出战',
            'detail':'可以出战周五对阵雄鹿的比赛',
            'important':true
        },{
            'name':'朱.霍乐迪',
            'status':'出战',
            'detail':'可以出战周五对阵雄鹿的比赛',
            'important':true
        },{
            'name':'霍福德',
            'status':'缺阵',
            'detail':'轮休一场，无法出战周五对阵雄鹿的比赛',
            'important':false
        }
    ],
    //布鲁克林篮网
    nets:[
        {
            'name':'本.西蒙斯',
            'status':'缺阵',
            'detail':'臀部受伤，预计还要缺阵一段时间',
            'important':true
        },{
            'name':'罗恩.夏普',
            'status':'缺阵',
            'detail':'左膝受伤，预计缺阵两周时间',
            'important':false
        }
    ],
    //夏洛特黄蜂
    hornets:[
        {
            'name':'布克奈特',
            'status':'缺阵',
            'detail':'膝盖受伤，预计会缺阵一段时间',
            'important':false
        },{
            'name':'马克.威廉姆斯',
            'status':'缺阵',
            'detail':'膝盖受伤，还需要缺阵一段时间',
            'important':false
        },{
            'name':'PJ.华盛顿',
            'status':'出战存疑',
            'detail':'腿部受伤，周六对阵马刺的比赛出战存疑',
            'important':false
        },{
            'name':'科迪.马丁',
            'status':'出战存疑',
            'detail':'身体不适，周六对阵马刺的比赛出战存疑',
            'important':false
        },{
            'name':'海沃德',
            'status':'缺阵',
            'detail':'左腿筋拉伤，预计至少缺阵两周时间',
            'important':true
        },{
            'name':'拉梅洛.鲍尔',
            'status':'出战存疑',
            'detail':'脚踝扭伤，周六对阵马刺的比赛出战存疑',
            'important':true
        }
    ],
    //芝加哥公牛
    bulls:[
        {
            'name':'郎佐.鲍尔',
            'status':'长期缺阵',
            'detail':'膝盖受伤，预计2023-2024赛季报销',
            'important':false
        },{
            'name':'克雷格',
            'status':'长期缺阵',
            'detail':'右脚后跟严重受伤，预计会缺阵4-6周时间',
            'important':false
        }
    ],
    //克利夫兰骑士
    cavaliers:[
        {
            'name':'杰罗姆',
            'status':'缺阵',
            'detail':'脚踝扭伤，还需要缺阵几场比赛',
            'important':false
        },{
            'name':'埃文.莫布利',
            'status':'长期缺阵',
            'detail':'脚踝手术，预计会缺阵6-8周时间',
            'important':true
        },{
            'name':'加兰',
            'status':'长期缺阵',
            'detail':'面部骨折，预计会缺阵数周时间',
            'important':true
        }
    ],
    //达拉斯独行侠
    mavericks:[
        {
            'name':'克勒贝尔',
            'status':'缺阵',
            'detail':'脚趾受伤，预计至少缺阵两周时间',
            'important':false
        },{
            'name':'艾克萨姆',
            'status':'缺阵',
            'detail':'右脚后跟受伤，还需要缺阵一段时间',
            'important':false
        },{
            'name':'莱福利',
            'status':'缺阵',
            'detail':'脚踝扭伤，无法出战周五对阵尼克斯的比赛',
            'important':true
        },{
            'name':'东契奇',
            'status':'缺阵',
            'detail':'右脚踝扭伤，无法出战周五对阵尼克斯的比赛',
            'important':true
        },{
            'name':'格兰特.威廉姆斯',
            'status':'出战',
            'detail':'可以出战周五对阵尼克斯的比赛',
            'important':false
        }
    ],
    //丹佛掘金
    nuggets:[
        {
            'name':'钱查尔',
            'status':'长期缺阵',
            'detail':'夏天左膝严重受伤，新赛季归期未定',
            'important':false
        },{
            'name':'斯特劳瑟',
            'status':'缺阵',
            'detail':'膝盖受伤，预计会缺阵一段时间',
            'important':false
        }
    ],
    //底特律活塞
    pistons:[
        {
            'name':'蒙特.莫里斯',
            'status':'缺阵',
            'detail':'背部拉伤，至少还需要缺阵3周时间',
            'important':false
        },{
            'name':'斯图尔特',
            'status':'出战',
            'detail':'可以出战周六对阵火箭的比赛',
            'important':true
        },{
            'name':'坎宁安',
            'status':'缺阵',
            'detail':'左膝受伤，预计会缺阵一段时间',
            'important':true
        }
    ],
    //金州勇士
    warriors:[
        {
            'name':'追梦.格林',
            'status':'缺阵',
            'detail':'当前在跟队训练中，无法出战周六对阵公牛的比赛',
            'important':true
        },{
            'name':'小佩顿',
            'status':'缺阵',
            'detail':'左腿筋拉伤，预计至少要缺阵3周时间',
            'important':false
        },{
            'name':'穆迪',
            'status':'缺阵',
            'detail':'小腿受伤，无法出战周六对阵公牛的比赛',
            'important':false
        },{
            'name':'保罗',
            'status':'长期缺阵',
            'detail':'手腕骨折，预计至少缺阵4-6周时间',
            'important':true
        }
    ],
    //休斯顿火箭
    rockets:[
        {
            'name':'奥拉迪波',
            'status':'长期缺阵',
            'detail':'膝盖受伤，归期未定',
            'important':false
        },{
            'name':'狄龙.布鲁克斯',
            'status':'缺阵',
            'detail':'斜方肌拉伤，预计还需要缺阵一段时间',
            'important':true
        },{
            'name':'伊森',
            'status':'缺阵',
            'detail':'腿部受伤，预计至少缺阵两周时间',
            'important':false
        }
    ],
    //印第安纳步行者
    pacers:[
        {
            'name':'哈里伯顿',
            'status':'缺阵',
            'detail':'左腿筋拉伤，预计会缺阵两周时间',
            'important':true
        },{
            'name':'杰伦.史密斯',
            'status':'出战存疑',
            'detail':'背部受伤，周六对阵老鹰的比赛出战存疑',
            'important':false
        },{
            'name':'贾雷斯.沃克',
            'status':'缺阵',
            'detail':'身体不适，无法出战周六对阵老鹰的比赛',
            'important':false
        }
    ],
    //洛杉矶快船
    clippers:[
        {
            'name':'普拉姆利',
            'status':'缺阵',
            'detail':'膝盖受伤，预计会缺阵一段时间',
            'important':false
        }
    ],
    //洛杉矶湖人
    lakers:[
        {
            'name':'文森特',
            'status':'长期缺阵',
            'detail':'左膝手术，预计会缺阵两个月时间',
            'important':false
        },{
            'name':'雷迪什',
            'status':'出战',
            'detail':'可以出战周五对阵太阳的比赛',
            'important':false
        },{
            'name':'八村塁',
            'status':'缺阵',
            'detail':'左小腿受伤，无法出战周五对阵太阳的比赛',
            'important':false
        },{
            'name':'伍德',
            'status':'缺阵',
            'detail':'身体不适，无法出战周五对阵太阳的比赛',
            'important':false
        }
    ],
    //孟菲斯灰熊
    grizzlies:[
        {
            'name':'布兰登.克拉克',
            'status':'长期缺阵',
            'detail':'跟腱受伤，还处在恢复之中，预计新赛季没有这么快回归球队',
            'important':false
        },{
            'name':'亚当斯',
            'status':'长期缺阵',
            'detail':'膝盖手术，2023-2024赛季报销',
            'important':true
        },{
            'name':'德里克.罗斯',
            'status':'缺阵',
            'detail':'左腿筋拉伤，还需要缺阵一段时间',
            'important':false
        },{
            'name':'阿尔达玛',
            'status':'缺阵',
            'detail':'左膝受伤，无法出战周六对阵快船的比赛',
            'important':false
        },{
            'name':'斯马特',
            'status':'长期缺阵',
            'detail':'右手手指撕裂，预计至少缺阵6周时间',
            'important':true
        },{
            'name':'小贾伦.杰克逊',
            'status':'出战',
            'detail':'可以出战周六对阵快船的比赛',
            'important':true
        },{
            'name':'贾.莫兰特',
            'status':'长期缺阵',
            'detail':'右肩严重撕裂，需要动手术恢复，赛季报销',
            'important':true
        }
    ],
    //迈阿密热火
    heat:[
        {
            'name':'巴特勒',
            'status':'缺阵',
            'detail':'右腿受伤，还需要缺阵一段时间',
            'important':true
        },{
            'name':'克莱布.马丁',
            'status':'出战存疑',
            'detail':'脚踝扭伤，周六对阵魔术的比赛出战存疑',
            'important':false
        },{
            'name':'泰勒.希罗',
            'status':'出战存疑',
            'detail':'肩部受伤，周六对阵魔术的比赛出战存疑',
            'important':true
        },{
            'name':'洛瑞',
            'status':'缺阵',
            'detail':'手部受伤，无法出战周六对阵魔术的比赛',
            'important':false
        },{
            'name':'德鲁.史密斯',
            'status':'长期缺阵',
            'detail':'膝盖严重受伤，赛季报销',
            'important':false
        }
    ],
    //密尔沃基雄鹿
    bucks:[
        {
            'name':'杰.克劳德',
            'status':'长期缺阵',
            'detail':'腹股沟严重受伤，预计缺阵两个月时间',
            'important':false
        },{
            'name':'利拉德',
            'status':'出战',
            'detail':'可以出战周五对阵凯尔特人的比赛',
            'important':true
        },{
            'name':'卡梅伦.佩恩',
            'status':'出战',
            'detail':'可以出战周五对阵凯尔特人的比赛',
            'important':false
        }
    ],
    //明尼苏达森林狼
    timberwolves:[
        {
            'name':'杰伦.克拉克',
            'status':'长期缺阵',
            'detail':'跟腱受伤，预计至少缺阵新赛季的3个月时间',
            'important':false
        },{
            'name':'戈贝尔',
            'status':'出战存疑',
            'detail':'臀部受伤，周六对阵开拓者的比赛出战存疑',
            'important':true
        },{
            'name':'康利',
            'status':'出战',
            'detail':'可以出战周六对阵开拓者的比赛',
            'important':true
        }
    ],
    //新奥尔良鹈鹕
    pelicans:[
        {
            'name':'马特.里安',
            'status':'缺阵',
            'detail':'右小腿受伤，还需要缺阵一段时间',
            'important':false
        },{
            'name':'锡安',
            'status':'出战存疑',
            'detail':'腿部受伤，周六对阵掘金的比赛出战存疑',
            'important':true
        },{
            'name':'CJ.麦科勒姆',
            'status':'出战存疑',
            'detail':'右脚踝扭伤，周六对阵掘金的比赛出战存疑',
            'important':true
        },{
            'name':'英格拉姆',
            'status':'出战存疑',
            'detail':'右肌腱受伤，周六对阵掘金的比赛出战存疑',
            'important':true
        },{
            'name':'墨菲',
            'status':'出战存疑',
            'detail':'左膝受伤，周六对阵掘金的比赛出战存疑',
            'important':false
        }
    ],
    //纽约尼克斯
    knicks:[
        {
            'name':'小查理.布朗',
            'status':'缺阵',
            'detail':'腿部受伤，预计会缺阵一段时间',
            'important':false
        },{
            'name':'米切尔.罗宾逊',
            'status':'长期缺阵',
            'detail':'左脚踝严重扭伤，预计缺阵8-10周时间',
            'important':true
        }
    ],
    //俄克拉荷马城雷霆
    thunder:[
        {
            'name':'贝尔坦斯',
            'status':'出战存疑',
            'detail':'身体不适，每日观察',
            'important':false
        }
    ],
    //奥兰多魔术
    magic:[
        {
            'name':'英格尔斯',
            'status':'出战',
            'detail':'可以出战周六对阵热火的比赛',
            'important':false
        },{
            'name':'艾萨克',
            'status':'缺阵',
            'detail':'右腿筋拉伤，还需要缺阵一段时间',
            'important':false
        },{
            'name':'弗朗茨.瓦格纳',
            'status':'缺阵',
            'detail':'脚踝扭伤，还需要缺阵一段时间',
            'important':true
        },{
            'name':'加里.哈里斯',
            'status':'缺阵',
            'detail':'小腿受伤，无法出战周六对阵热火的比赛',
            'important':false
        },{
            'name':'温德勒.卡特',
            'status':'出战存疑',
            'detail':'右膝受伤，周六对阵热火的比赛出战存疑',
            'important':false
        },{
            'name':'斯科菲尔德',
            'status':'出战',
            'detail':'可以出战周六对阵热火的比赛',
            'important':false
        }
    ],
    //费城76人
    seven6ers:[
        {
            'name':'科文顿',
            'status':'缺阵',
            'detail':'左膝受伤，无法出战周六对阵国王的比赛',
            'important':false
        },{
            'name':'恩比德',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战周六对阵国王的比赛',
            'important':true
        }
    ],
    //菲尼克斯太阳
    suns:[
        {
            'name':'达米安.李',
            'status':'缺阵',
            'detail':'右膝受伤，预计会缺阵一段时间',
            'important':false
        },{
            'name':'利特尔',
            'status':'出战',
            'detail':'可以出战周五对阵湖人的比赛',
            'important':false
        },{
            'name':'鲍尔.波尔',
            'status':'出战',
            'detail':'可以出战周五对阵湖人的比赛',
            'important':false
        },{
            'name':'阿祖比亚克',
            'status':'出战',
            'detail':'可以出战周五对阵湖人的比赛',
            'important':false
        },{
            'name':'尤班克斯',
            'status':'缺阵',
            'detail':'身体不适，无法出战周五对阵湖人的比赛',
            'important':false
        }
    ],
    //波特兰开拓者
    blazers:[
        {
            'name':'罗威',
            'status':'长期缺阵',
            'detail':'膝盖严重受伤，至少缺阵2-3个月时间',
            'important':false
        },{
            'name':'艾顿',
            'status':'缺阵',
            'detail':'右膝受伤，还需要缺阵一段时间',
            'important':true
        },{
            'name':'贾巴里.沃克',
            'status':'出战存疑',
            'detail':'膝盖受伤，周六对阵森林狼的比赛出战存疑',
            'important':false
        },{
            'name':'布罗格登',
            'status':'出战存疑',
            'detail':'身体不适，周六对阵森林狼的比赛出战存疑',
            'important':true
        },{
            'name':'夏普',
            'status':'出战存疑',
            'detail':'腿部受伤，周六对阵森林狼的比赛出战存疑',
            'important':true
        },{
            'name':'摩西.布朗',
            'status':'缺阵',
            'detail':'左手腕受伤，还需要缺阵一段时间',
            'important':false
        }
    ],
    //萨克拉门托国王
    kings:[
        {
            'name':'德拉维多瓦',
            'status':'长期缺阵',
            'detail':'做了右手食指骨折手术，归期未定',
            'important':false
        },{
            'name':'赫尔特',
            'status':'出战存疑',
            'detail':'左脚踝扭伤，周六对阵76人的比赛出战存疑',
            'important':false
        }
    ],
    //圣安东尼奥马刺
    spurs:[
        {
            'name':'巴锡',
            'status':'长期缺阵',
            'detail':'左膝ACL受伤，赛季报销',
            'important':false
        },{
            'name':'科林斯',
            'status':'缺阵',
            'detail':'脚踝扭伤，预计缺阵2-4周时间',
            'important':false
        }
    ],
    //多伦多猛龙
    raptors:[
        {
            'name':'克洛克',
            'status':'缺阵',
            'detail':'腿部受伤，还需要缺阵一段时间',
            'important':false
        },{
            'name':'奥托.波特',
            'status':'缺阵',
            'detail':'膝盖受伤，还需要缺阵一段时间',
            'important':false
        },{
            'name':'珀尔特尔',
            'status':'缺阵',
            'detail':'膝盖受伤，预计至少需要缺阵两周时间',
            'important':true
        },{
            'name':'西亚卡姆',
            'status':'出战存疑',
            'detail':'背部受伤，周六对阵爵士的比赛出战存疑',
            'important':true
        }
    ],
    //犹它爵士
    jazz:[
        {
            'name':'丰泰基奥',
            'status':'出战',
            'detail':'可以出战周六对阵猛龙的比赛',
            'important':false
        }        
    ],
    //华盛顿奇才
    wizards:[
        {
            'name':'约翰尼.戴维斯',
            'status':'缺阵',
            'detail':'颈部受伤，还需要缺阵一段时间',
            'important':false
        },{
            'name':'沙梅特',
            'status':'缺阵',
            'detail':'个人原因，无法出战周四对战步行者的比赛',
            'important':false
        }
    ]   
}

module.exports = nbaData;