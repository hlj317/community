const wnbaData = {
    //亚特兰大梦想
    dream:[
        {
            'name':'海耶斯',
            'status':'长期缺阵',
            'detail':'膝盖受伤，归期未定；2021场均数据：14.7分/3.2篮板/3.0助攻/1.6抢断',
            'important':true
        },{
            'name':'艾丽卡.维勒',
            'status':'出战存疑',
            'detail':'左脚扭伤，每日观察；2022场均数据：9.7分/3.3篮板/3.8助攻/1.3抢断',
            'important':true
        },{
            'name':'基亚.沃恩',
            'status':'出战存疑',
            'detail':'身体不适，每日观察；2022场均数据：2.8分/2.4篮板/1.0助攻/0.3抢断',
            'important':false
        },{
            'name':'尼娅.科菲',
            'status':'出战存疑',
            'detail':'膝盖受伤，每日观察；2022场均数据：6.5分/5.5篮板/0.9助攻/0.6抢断',
            'important':true
        },{
            'name':'克里斯蒂.华莱士',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察；2022场均数据：8.3分/2.9篮板/2.3助攻/1.0抢断',
            'important':false
        }
    ],
    //芝加哥天空
    sky:[
        {        
            'name':'露西.赫伯德',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察；2022场均数据：3.1分/3.8篮板/0.6助攻/0.5抢断',
            'important':false
        },{        
            'name':'库铂',
            'status':'缺阵',
            'detail':'背部受伤，无法出战周一对阵山猫的比赛；2022场均数据：14.0分/5.5篮板/2.0助攻/0.5抢断',
            'important':true
        }
    ],
    //康涅狄克阳光
    sun:[
        {        
            'name':'杰斯明.托马斯',
            'status':'长期缺阵',
            'detail':'膝盖受伤，赛季报销；2021场均数据：10.6分/2.4篮板/4.0助攻/1.3抢断',
            'important':true
        }
    ],
    //达拉斯飞翼
    wings:[
        {
            'name':'迪克伊',
            'status':'出战存疑',
            'detail':'身体不适，每日观察；新秀无数据',
            'important':false
        },{
            'name':'萨巴利',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战；2022场均数据：11.6分/5.4篮板/2.1助攻/0.3抢断',
            'important':true
        },{
            'name':'阿丽莎.格雷',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战；2022场均数据：14.5分/5.6篮板/2.2助攻/1.1抢断',
            'important':true
        }
    ],
    //印第安纳狂热
    fever:[
        {
            'name':'莱西.赫尔',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察；2022场均数据：1.4分/0.9篮板/0.3助攻/0.2抢断',
            'important':false
        }
    ],
    //拉斯维加斯王牌
    aces:[
        {
            'name':'里乔娜.威廉姆斯',
            'status':'缺阵',
            'detail':'腿部受伤，归期未定；2022场均数据：9.0分/2.0篮板/1.0助攻/0.5抢断',
            'important':false
        },{
            'name':'格雷',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察；2022场均数据：10.2分/3.6篮板/4.5助攻/1.1抢断',
            'important':true
        }
    ],
    //洛杉矶火花
    sparks:[
        {
            'name':'蕾.布瑞尔',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战；2022场均数据：1.7分/1.0篮板/0.3助攻/0.7抢断',
            'important':false
        },{
            'name':'奇妮.欧古米克',
            'status':'出战',
            'detail':'可以出战周二对阵王牌的比赛；2022场均数据：6.6分/4.8篮板/0.8助攻/0.8抢断',
            'important':false
        },{
            'name':'乔丁.卡娜达',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周二对阵王牌的比赛；2022场均数据：9.6分/2.2篮板/5.1助攻/1.1抢断',
            'important':true
        }
    ],
    //明尼苏达山猫
    lynx:[
        {
            'name':'科利尔',
            'status':'长期缺阵',
            'detail':'怀孕预计会缺阵整个2022赛季；2021场均数据：16.2分/6.6篮板/3.2助攻/1.3抢断',
            'important':true
        }    
    ],
    //纽约自由人
    liberty:[
        {        
            'name':'韩旭',
            'status':'出战',
            'detail':'可以出战周六对阵梦想的比赛；2022场均数据：10.4分/4.4篮板/0.5助攻/0.8抢断',
            'important':true
        },{        
            'name':'贝妮佳.兰妮',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战；2022场均数据：13.3分/3.8篮板/4.3助攻/0.5抢断',
            'important':true
        },{        
            'name':'丽贝卡.阿伦',
            'status':'缺阵',
            'detail':'身体不适，无法出战；2022场均数据：8.7分/3.6篮板/1.5助攻/0.抢断',
            'important':false
        },{        
            'name':'萨巴利',
            'status':'长期缺阵',
            'detail':'右膝受伤，会缺阵较长一段时间；2022年新秀，无数据',
            'important':false
        },{        
            'name':'西卡.科恩',
            'status':'缺阵',
            'detail':'暂时没有跟球队会合的打算；2022年新秀，无数据',
            'important':false
        },{        
            'name':'乔斯林.威洛比',
            'status':'长期缺阵',
            'detail':'膝盖受伤，预期缺阵六周；2022场均数据：6.8分/2.8篮板/0.5助攻/1.0抢断',
            'important':false
        }
    ],
    //菲尼克斯水星
    mercury:[
        {
            'name':'格里娜',
            'status':'长期缺阵',
            'detail':'在俄罗斯被拘捕，暂时无法回国；2021场均数据：20.5分/9.5篮板/2.7助攻/0.4抢断',
            'important':true
        },{
            'name':'纳斯',
            'status':'缺阵',
            'detail':'膝盖受伤，还在恢复中；2021场均数据：9.5分/3.5篮板/1.8助攻/0.5抢断',
            'important':false
        },{
            'name':'蒂娜.查尔斯',
            'status':'确定离队',
            'detail':'与水星解约，预计接下来会和风暴签约；2022场均数据：16.3分/6.6篮板/2.1助攻/0.8抢断',
            'important':true
        }
    ],
    //西雅图风暴
    storm:[
        {
            'name':'拉塞尔',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战；2022场均数据：2.0分/1.8篮板/0.2助攻/0.0抢断',
            'important':false
        }
    ],
    //华盛顿神秘人
    mystics:[
        {
            'name':'伊丽莎白.威廉姆斯',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察；6.5分/4.4篮板/0.6助攻/0.5抢断',
            'important':false
        }
    ]  
}

module.exports = wnbaData;