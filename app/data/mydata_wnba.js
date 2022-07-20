const wnbaData = {
    //亚特兰大梦想
    dream:[
        {
            'name':'尼娅.科菲',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战周三对阵王牌的比赛；2022场均数据：6.5分/5.5篮板/0.9助攻/0.6抢断',
            'important':true
        },{
            'name':'莱恩.霍华德',
            'status':'出战',
            'detail':'可以出战周三对阵王牌的比赛；2022场均数据：14.7分/4.4篮板/2.7助攻/1.5抢断',
            'important':true
        },{
            'name':'比林斯',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战周三对阵王牌的比赛；2022场均数据：6.2分/6.2篮板/1.0助攻/0.9抢断',
            'important':true
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
            'name':'范德斯洛特',
            'status':'缺阵',
            'detail':'身体不适，无法出战周四对阵风暴的比赛；2022场均数据：10.8分/3.8篮板/6.2助攻/1.0抢断',
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
        },{        
            'name':'琼奎尔.琼斯',
            'status':'缺阵',
            'detail':'身体不适，无法出战周二对阵自由人的比赛；2021场均数据：15.1分/9.0篮板/1.8助攻/1.1抢断',
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
            'status':'出战存疑',
            'detail':'脚踝扭伤，周日对阵天空的比赛出战存疑；2022场均数据：11.3分/4.8篮板/2.1助攻/0.5抢断',
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
            'name':'吉尔斯坦.贝尔',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察；2022场均数据：1.4分/0.6篮板/0.3助攻/0.3抢断',
            'important':false
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
            'name':'钱内迪.卡特',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战；2022场均数据：7.8分/1.6篮板/2.0助攻/0.5抢断',
            'important':false
        },{
            'name':'托利弗',
            'status':'缺阵',
            'detail':'小腿受伤，无法出战周三对阵狂热的比赛；2022场均数据：5.8分/0.8篮板/3.6助攻/0.4抢断',
            'important':false
        },{
            'name':'坎贝奇',
            'status':'缺阵',
            'detail':'身体不适，无法出战周三对阵狂热的比赛；2022场均数据：13.3分/6.5篮板/2.2助攻/0.6抢断',
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
            'name':'贝妮佳.兰妮',
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战；2022场均数据：13.3分/3.8篮板/4.3助攻/0.5抢断',
            'important':true
        },{        
            'name':'乔斯林.威洛比',
            'status':'出战',
            'detail':'可以出战周二对阵阳光的比赛；2022场均数据：6.8分/2.8篮板/0.5助攻/1.0抢断',
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
            'name':'德希尔茨',
            'status':'缺阵',
            'detail':'臀部受伤，无法出战周一对阵梦想的比赛；2021场均数据：12.5分/3.9篮板/2.0助攻/1.0抢断',
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
            'name':'多恩',
            'status':'出战',
            'detail':'可以出战周一对阵山猫的比赛；2022场均数据：15.3分/5.9篮板/2.1助攻/0.6抢断',
            'important':true
        }
    ]  
}

module.exports = wnbaData;