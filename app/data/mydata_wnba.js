const wnbaData = {
    //亚特兰大梦想
    dream:[
        {
            'name':'鲁珀特',
            'status':'缺阵',
            'detail':'腿部受伤，合同已被梦想中止；2022场均数据：3.8分/2.3篮板/0.9助攻/0.4抢断',
            'important':false
        },{
            'name':'麦克唐纳德',
            'status':'缺阵',
            'detail':'腿部受伤，预计会缺阵3周时间以上；2023场均数据：6.0分/2.4篮板/3.8助攻/0.2抢断',
            'important':false
        }
    ],
    //芝加哥天空
    sky:[
        {        
            'name':'丽贝卡.加德纳',
            'status':'缺阵',
            'detail':'腿部手术，预计会缺阵一段时间；2023场均数据：7.0分/3.7篮板/2.3助攻/2.0抢断',
            'important':true
        },{        
            'name':'哈里森',
            'status':'缺阵',
            'detail':'膝盖受伤，预计仍会缺阵接下来几场比赛；2023场均数据：13.0分/3.0篮板/1.0助攻/1.0抢断',
            'important':true
        },{        
            'name':'赫伯德',
            'status':'缺阵',
            'detail':'腿部受伤，归期未定；2023场均数据：4.0分/5.0篮板/0.1助攻/2.0抢断',
            'important':false
        }
    ],
    //康涅狄克阳光
    sun:[
        {        
            'name':'布里奥娜.琼斯',
            'status':'长期缺阵',
            'detail':'跟腱断裂，赛季报销；2023场均数据：15.9分/8.2篮板/2.4助攻/1.8抢断',
            'important':true
        }
    ],
    //达拉斯飞翼
    wings:[
        {
            'name':'德希尔兹',
            'status':'长期缺阵',
            'detail':'膝盖受伤，至少缺阵3个月时间；2022场均数据：5.0分/2.0篮板/2.0助攻/2.0抢断',
            'important':false
        },{
            'name':'塞内沙尔',
            'status':'缺阵',
            'detail':'腿部受伤，归期未定；2023年新秀，首轮第5位',
            'important':false
        }
    ],
    //印第安纳狂热
    fever:[
        {
            'name':'博纳戴特.哈特',
            'status':'长期缺阵',
            'detail':'脚踝受伤，归期未定；2022场均数据：4.9分/2.6篮板/0.3助攻/0.4抢断',
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
            'name':'克莱伦敦',
            'status':'长期缺阵',
            'detail':'腿部受伤，预计缺阵4-6周时间；2023场均数据：7.8分/3.0篮板/3.7助攻/1.7抢断',
            'important':true
        },{
            'name':'莱斯利.布朗',
            'status':'缺阵',
            'detail':'身体不适，还需要缺阵一段时间；2023场均数据：13.3分/2.0篮板/2.9助攻/1.2抢断',
            'important':true
        },{
            'name':'尼娅.克莱登',
            'status':'缺阵',
            'detail':'膝盖受伤，还需要缺阵一段时间；2023场均数据：1.6分/0.4篮板/1.8助攻/0.1抢断',
            'important':false
        },{
            'name':'塞缪尔森',
            'status':'长期缺阵',
            'detail':'腿部受伤，归期未定；2022场均数据：7.5分/6.5篮板/1.0助攻/0.5抢断',
            'important':true
        },{
            'name':'乔丁.肯娜达',
            'status':'出战存疑',
            'detail':'肩部受伤，周一对阵梦想的比赛出战存疑；2023场均数据：13.0分/3.2篮板/5.7助攻/1.9抢断',
            'important':true
        },{
            'name':'奇妮.奥古米克',
            'status':'出战存疑',
            'detail':'腿部受伤，无法出战周一对阵梦想的比赛；2023场均数据：8.4分/4.3篮板/1.3助攻/1.3抢断',
            'important':false
        }
    ],
    //明尼苏达山猫
    lynx:[
        {
            'name':'蒂芙尼.米切尔',
            'status':'缺阵',
            'detail':'左手腕受伤，至少缺阵三周时间；2023场均数据：10.5分/3.3篮板/2.5助攻/0.7抢断',
            'important':true
        },{
            'name':'鲍尔斯',
            'status':'缺阵',
            'detail':'腿部受伤，还需要缺阵一段时间；2023场均数据：5.4分/2.1篮板/0.4助攻/0.3抢断',
            'important':false
        },{
            'name':'谢波德',
            'status':'缺阵',
            'detail':'身体不适，还需要缺阵一段时间；2023场均数据：9.3分/9.1篮板/4.3助攻/0.6抢断',
            'important':true
        },{
            'name':'阿卓娃',
            'status':'缺阵',
            'detail':'个人原因，归期未定；2022场均数据：4.5分/3.5篮板/2.0助攻/0.2抢断',
            'important':false
        }    
    ],
    //纽约自由人
    liberty:[
        {        
            'name':'道尔森',
            'status':'缺阵',
            'detail':'腿部受伤，预计还会再缺阵几周时间；2023场均数据：3.4分/2.0篮板/1.5助攻/0.1抢断',
            'important':false
        },{        
            'name':'乔斯林.威洛比',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察；2022场均数据：1.1分/0.3篮板/0.5助攻/0.1抢断',
            'important':false
        },{        
            'name':'韩旭',
            'status':'缺阵',
            'detail':'出战亚洲杯，离队一段时间；2023场均数据：0.8分/0.4篮板/0.1助攻/0.2抢断',
            'important':false
        }
    ],
    //菲尼克斯水星
    mercury:[
        {
            'name':'迪金斯-史密斯',
            'status':'长期缺阵',
            'detail':'怀孕哺乳期内，归期未定；2022场均数据：17.8分/6.0篮板/8.0助攻/1.2抢断',
            'important':true
        },{        
            'name':'古斯塔夫森',
            'status':'出战',
            'detail':'可以出战周日对阵山猫的比赛；2023场均数据：4.7分/3.1篮板/0.3助攻/0.2抢断',
            'important':false
        },{        
            'name':'坎宁安',
            'status':'缺阵',
            'detail':'头部受伤，无法出战周日对阵山猫的比赛；2023场均数据：13.5分/2.4篮板/2.1助攻/0.7抢断',
            'important':true
        },{        
            'name':'杰弗森',
            'status':'出战',
            'detail':'可以出战周日对阵山猫的比赛；2023场均数据：8.9分/1.4篮板/2.0助攻/0.8抢断',
            'important':false
        },{        
            'name':'谢伊.佩迪',
            'status':'缺阵',
            'detail':'跟腱受伤，还需要缺阵一段时间；2023场均数据：5.3分/1.0篮板/2.3助攻/0.8抢断',
            'important':false
        }
    ],
    //西雅图风暴
    storm:[
        {
            'name':'阿蕾拉.圭兰特斯',
            'status':'出战存疑',
            'detail':'腹部受伤，每日观察；2023场均数据：2.3分/1.0篮板/0.3助攻/0.1抢断',
            'important':false
        },{
            'name':'杰登.休士敦',
            'status':'出战存疑',
            'detail':'腿部受伤，周一对阵自由人的比赛出战存疑；2023场均数据：7.5分/5.8篮板/1.1助攻/1.1抢断',
            'important':false
        }
    ],
    //华盛顿神秘人
    mystics:[
        {
            'name':'托利佛',
            'status':'缺阵',
            'detail':'腿部受伤，预计缺阵2周时间；2023场均数据：4.4分/0.6篮板/0.9助攻/0.4抢断',
            'important':false
        },{
            'name':'李梦',
            'status':'缺阵',
            'detail':'离队参加亚洲杯，预计7月初回归球队；2023场均数据：4.6分/1.3篮板/0.6助攻/0.2抢断',
            'important':false
        },{
            'name':'奥斯汀',
            'status':'缺阵',
            'detail':'左髋关节拉伤，至少缺阵三周时间；2023场均数据：11.4分/7.8篮板/0.9助攻/0.8抢断',
            'important':true
        },{
            'name':'多恩',
            'status':'出战存疑',
            'detail':'脚踝受伤，周一对阵飞翼的比赛出战存疑；2023场均数据：19.5分/6.3篮板/2.6助攻/0.7抢断',
            'important':true
        }
    ]  
}

module.exports = wnbaData;