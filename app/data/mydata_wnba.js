const wnbaData = {
    //亚特兰大梦想
    dream:[
        {
            'name':'海耶斯',
            'status':'缺阵',
            'detail':'仍在海外，无法出战；2021场均数据：14.7分/3.2篮板/3.0助攻/1.6抢断',
            'important':true
        },{
            'name':'比林斯',
            'status':'缺阵',
            'detail':'身体不适，无法出战周三对阵狂热的比赛；2022场均数据：7.8分/8.0篮板/0.5助攻/0.8抢断',
            'important':true
        },{
            'name':'弗恩',
            'status':'出战',
            'detail':'可以出战周三对阵狂热的比赛；2021场均数据：4.6分/2.7篮板/1.3助攻/0.2抢断',
            'important':false
        }
    ],
    //芝加哥天空
    sky:[
        {        
            'name':'阿尔曼德',
            'status':'缺阵',
            'detail':'暂时无法出战，在伤停名单中；2021场均数据：8.5分/4.5篮板/5.8助攻/1.1抢断',
            'important':true
        },{        
            'name':'库铂',
            'status':'缺阵',
            'detail':'仍在海外参加比赛，会缺阵一段时间；2021场均数据：14.4分/4.2篮板/1.8助攻/0.9抢断',
            'important':true
        },{        
            'name':'李月汝',
            'status':'缺阵',
            'detail':'预计在6月前与天空会合；2021未参赛，无数据',
            'important':true
        }
    ],
    //康涅狄克阳光
    sun:[
        {        
            'name':'基艾拉.史密斯',
            'status':'缺阵',
            'detail':'暂时无法出战比赛；2022年新秀，无数据',
            'important':false
        },{
            'name':'考特尼威廉斯',
            'status':'出战',
            'detail':'可以出战周三对阵自由人的比赛；2021场均数据：16.5分/6.8篮板/4.0助攻/1.1抢断',
            'important':true
        },{
            'name':'邦纳',
            'status':'出战',
            'detail':'可以出战周三对阵自由人的比赛；2021场均数据：15.2分/6.4篮板/3.4助攻/1.3抢断',
            'important':true
        }
    ],
    //达拉斯飞翼
    wings:[
        {
            'name':'亚瑟.哈里斯',
            'status':'出战',
            'detail':'可以出战周五对阵水星的比赛；2021场均数据：4.0分/1.0篮板/5.5助攻/1.0抢断',
            'important':false
        },{
            'name':'萨图.萨巴利',
            'status':'缺阵',
            'detail':'仍在海外参加比赛，会缺阵一段时间；2021场均数据：11.9分/5.9篮板/2.8助攻/0.2抢断',
            'important':true
        }
    ],
    //印第安纳狂热
    fever:[
        {
            'name':'蒂凡尼.米切尔',
            'status':'出战',
            'detail':'可以出战周三对阵梦想的比赛；2022场均数据：4.8分/1.8篮板/0.8助攻/0.8抢断',
            'important':false
        },{
            'name':'纳莉莎史密斯',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周三对阵梦想的比赛；2022场均数据：13.0分/10.0篮板/1.6助攻/0.6抢断',
            'important':true
        },{
            'name':'哈特利',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周三对阵梦想的比赛；2021场均数据：3.7分/0.7篮板/0.8助攻/0.2抢断',
            'important':false
        }
    ],
    //拉斯维加斯王牌
    aces:[
        {
            'name':'斯托克斯',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察；2021场均数据：1.7分/4.2篮板/0.6助攻/0.4抢断',
            'important':false
        },{
            'name':'里乔娜.威廉姆斯',
            'status':'缺阵',
            'detail':'身体不适，无法出战周五对阵山猫的比赛；2022场均数据：9.0分/2.0篮板/1.0助攻/0.5抢断',
            'important':false
        }
    ],
    //洛杉矶火花
    sparks:[
        {
            'name':'蕾.布瑞尔',
            'status':'缺阵',
            'detail':'身体不适，无法出战；2022场均数据：1.7分/1.0篮板/0.3助攻/0.7抢断',
            'important':false
        },{
            'name':'塞缪尔森',
            'status':'出战',
            'detail':'可以出战周三对阵山猫的比赛；2021场均数据：7.0分/3.5篮板/1.7助攻/0.7抢断',
            'important':false
        },{
            'name':'托利弗',
            'status':'缺阵',
            'detail':'因为在NBA当助教，暂时无法出战；2021场均数据：9.4分/1.4篮板/2.9助攻/0.7抢断',
            'important':true
        },{
            'name':'奥多达',
            'status':'缺阵',
            'detail':'身体不适，无法出战；新秀无数据',
            'important':false
        }
    ],
    //明尼苏达山猫
    lynx:[
        {
            'name':'阿卓娃',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战；新秀无数据',
            'important':false
        },{
            'name':'丹特斯',
            'status':'缺阵',
            'detail':'腿部受伤，预计还要缺阵2-3周；2021场均数据：7.7分/4.0篮板/2.3助攻/0.4抢断',
            'important':false
        },{
            'name':'科利尔',
            'status':'长期缺阵',
            'detail':'怀孕预计会缺阵整个2022赛季；2021场均数据：16.2分/6.6篮板/3.2助攻/1.3抢断',
            'important':true
        }    
    ],
    //纽约自由人
    liberty:[
        {        
            'name':'丽贝卡.阿伦',
            'status':'出战',
            'detail':'可以出战周三对阵阳光的比赛；2021场均数据：9.2分/3.7篮板/1.1助攻/1.6抢断',
            'important':true
        },{        
            'name':'理查德兹',
            'status':'缺阵',
            'detail':'无法出战周三对阵阳光的比赛；2021场均数据：2.3分/1.1篮板/0.8助攻/0.5抢断',
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
            'status':'缺阵',
            'detail':'膝盖受伤，无法出战周三对阵阳光的比赛；2022场均数据：6.8分/2.8篮板/0.5助攻/1.0抢断',
            'important':false
        },{        
            'name':'韩旭',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周三对阵阳光的比赛；2022场均数据：10.0分/1.0篮板/1.5助攻/1.0抢断',
            'important':true
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
        }
    ],
    //西雅图风暴
    storm:[
        {
            'name':'梅赛德斯.拉塞尔',
            'status':'缺阵',
            'detail':'腿部受伤，预计缺阵3-5周；2021场均数据：7.3分/6.1篮板/1.6助攻/0.9抢断',
            'important':false
        },{
            'name':'斯图尔特',
            'status':'出战',
            'detail':'可以出战周四对阵天空的比赛；2021场均数据：19.0分/8.0篮板/2.5助攻/2.0抢断',
            'important':true
        },{
            'name':'普林斯',
            'status':'出战',
            'detail':'可以出战周四对阵天空的比赛；2021场均数据：12.0分/0.5篮板/1.0助攻/1.5抢断',
            'important':true
        }
    ],
    //华盛顿神秘人
    mystics:[
        {
            'name':'伊丽莎白.威廉姆斯',
            'status':'缺阵',
            'detail':'仍在海外，预计缺阵3-4周；2021场均数据：5.8分/4.9篮板/1.2助攻/1.1抢断',
            'important':false
        },{
            'name':'肯尼迪.伯克',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察；2021场均数据：2.9分/0.8篮板/0.3助攻/0.3抢断',
            'important':false
        },{
            'name':'娜塔莎克劳德',
            'status':'出战',
            'detail':'可以出战周三对阵飞翼的比赛；2021场均数据：18.0分/5.0篮板/6.0助攻/1.0抢断',
            'important':true
        }
    ]  
}

module.exports = wnbaData;