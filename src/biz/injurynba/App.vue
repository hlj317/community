<template>
  <div id="injury"
       class="injury-page">
    <div class="top-part">
        <div class="top-menu">
            <div class="portait-img">
                <img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/common/portait.png"/>
            </div>
            <div class="portait-text">
                <div class="text-name">请关注微信公众号：<strong>[篮彩老黑]</strong></div>
                <div class="text-notice">NBA伤病名单实时更新/WNBA伤病名单实时更新/CBA伤病名单实时更新</div>
            </div>
        </div>
        <div class="clear"></div>
        <ul class="nav">
            <li><a href="#">NBA</a><span class="selected"></span></li>
            <li><a href="injurywnba">WNBA</a></li>
            <li><a href="/injurycba">CBA</a></li>
            <li class="vote-ratio"><a href="/vote">NBA投注率</a></li>
        </ul>
    </div>
    <div class="clear"></div>
    <div class="updatetime">最近更新时间：<strong>{{udpatetime}}</strong>（每日不定期更新，敬请关注）</div>
    <table class="list" border="0" cellspacing="1" cellpadding="0">

        <!-----A----亚特兰大老鹰------>
        <tr>  
            <th colspan="4" class="team-name hawks">[A]亚特兰大老鹰<span class="en-name">Atlanta Hawks</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="8" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/hawks.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>德隆.赖特</td>
            <td>出战存疑</td>
            <td>腿部受伤，每日观察</td>
        </tr> 
        <tr>  
            <td>特雷.杨<span class="important">重要</span></td>
            <td>缺阵</td>
            <td>轮休</td>
        </tr> 
        <tr>  
            <td>加里纳利</td>
            <td>缺阵</td>
            <td>轮休</td>
        </tr> 
        <tr>  
            <td>所罗门.希尔</td>
            <td>缺阵</td>
            <td>不会出战周四对骑士的比赛</td>
        </tr> 
        <tr>  
            <td>卡佩拉<span class="important">重要</span></td>
            <td>缺阵</td>
            <td>脚踝受伤</td>
        </tr> 
        <tr>  
            <td>博格达诺维奇</td>
            <td>缺阵</td>
            <td>不会出战周四对骑士的比赛</td>
        </tr> 
        <tr>  
            <td>奥孔古</td>
            <td>长期缺阵</td>
            <td>预计12月份回归球队</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----B--波士顿凯尔特人------>
        <tr>  
            <th colspan="4" class="team-name celtics">[B]波士顿凯尔特人<span class="en-name">Boston Celtics</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="2" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/celtics.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>朱万.摩根</td>
            <td>缺阵</td>
            <td>不会出战周二对魔术的比赛</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----B----布鲁克林篮网------>
        <tr>  
            <th colspan="4" class="team-name nets">[B]布鲁克林篮网<span class="en-name">Brooklyn Nets</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="9" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/nets.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>凯里.欧文<span class="important">重要</span></td>
            <td>归期未定</td>
            <td>由于未达疫苗，不确定何时可以回归球队</td>
        </tr> 
        <tr>  
            <td>埃德蒙.萨姆纳</td>
            <td>缺阵</td>
            <td>预计马上会被球队放弃</td>
        </tr> 
        <tr>  
            <td>帕蒂.米尔斯</td>
            <td>出战存疑</td>
            <td>出战存疑，明日比赛出场待定</td>
        </tr> 
        <tr>  
            <td>詹姆斯.约翰逊</td>
            <td>出战存疑</td>
            <td>出战存疑，明日比赛出场待定</td>
        </tr> 
        <tr>  
            <td>乔.哈里斯</td>
            <td>出战存疑</td>
            <td>出战存疑，明日比赛出场待定</td>
        </tr> 
        <tr>  
            <td>詹姆斯.哈登<span class="important">重要</span></td>
            <td>出战存疑</td>
            <td>出战存疑，明日比赛出场待定</td>
        </tr> 
        <tr>  
            <td>布雷克.格里芬</td>
            <td>出战存疑</td>
            <td>出战存疑，明日比赛出场待定</td>
        </tr> 
        <tr>  
            <td>凯文.杜兰特<span class="important">重要</span></td>
            <td>出战存疑</td>
            <td>出战存疑，明日比赛出场待定</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----C----夏洛特黄蜂------>
        <tr>  
            <th colspan="4" class="team-name hornets">[C]夏洛特黄蜂<span class="en-name">Charlotte Hornets</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="5" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/hornets.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>梅森.普拉姆利</td>
            <td>缺阵</td>
            <td>由于触犯了疫情防疫政策，暂时无法出场，归期未定</td>
        </tr> 
        <tr>  
            <td>海沃德<span class="important">重要</span></td>
            <td>缺阵</td>
            <td>由于触犯了疫情防疫政策，暂时无法出场，归期未定</td>
        </tr> 
        <tr>  
            <td>乌布雷</td>
            <td>缺阵</td>
            <td>脚踝受伤，无法出战周五对阵灰熊的比赛</td>
        </tr> 
        <tr>  
            <td>DJ.卡顿</td>
            <td>缺阵</td>
            <td>腿部受伤，无法出战</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----C--芝加哥公牛------>
        <tr>  
            <th colspan="4" class="team-name bulls">[C]芝加哥公牛<span class="en-name">Chicago Bulls</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="5" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/bulls.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>德里克.琼斯JR</td>
            <td>出战存疑</td>
            <td>出战存疑，每日观察</td>
        </tr> 
        <tr>  
            <td>西蒙诺维奇</td>
            <td>缺阵</td>
            <td>腿部受伤，无法出战</td>
        </tr> 
        <tr>  
            <td>帕特里克.威廉姆斯</td>
            <td>长期缺阵</td>
            <td>脚部伤势，预计缺阵4-6周</td>
        </tr> 
        <tr>  
            <td>科比.怀特</td>
            <td>缺阵</td>
            <td>肩部伤势，预计11月份回归球队</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>

        <!-----C--克利夫兰骑士------>
        <tr>  
            <th colspan="4" class="team-name cavaliers">[C]克利夫兰骑士<span class="en-name">Cleveland Cavaliers</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="3" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/cavaliers.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>塔克.法尔</td>
            <td>缺阵</td>
            <td>个人原因缺阵</td>
        </tr> 
        <tr>  
            <td>温德勒</td>
            <td>缺阵</td>
            <td>膝盖受伤缺阵</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>

        <!-----D----达拉斯独行侠------>
        <tr>  
            <th colspan="4" class="team-name mavericks">[D]达拉斯独行侠<span class="en-name">Dallas Mavericks</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="5" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/mavericks.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>德怀特.鲍威尔</td>
            <td>出战存疑</td>
            <td>出战存疑，每日观察</td>
        </tr> 
        <tr>  
            <td>芬尼.史密斯</td>
            <td>缺阵</td>
            <td>不会出战周四对爵士的比赛</td>
        </tr> 
        <tr>  
            <td>尼利基纳</td>
            <td>缺阵</td>
            <td>不会出战周四对爵士的比赛</td>
        </tr> 
        <tr>  
            <td>泰瑞尔.特里</td>
            <td>出战存疑</td>
            <td>出战存疑，每日观察</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----D----丹佛掘金------>
        <tr>  
            <th colspan="4" class="team-name nuggets">[D]丹佛掘金<span class="en-name">Denver Nuggets</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="4" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/nuggets.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>小迈克尔.波特<span class="important">重要</span></td>
            <td>出战存疑</td>
            <td>膝盖受伤，明日出战森林狼出战存疑</td>
        </tr> 
        <tr>  
            <td>威尔.巴顿</td>
            <td>出战存疑</td>
            <td>脚踝受伤，明日出战森林狼出战存疑</td>
        </tr> 
        <tr>  
            <td>贾马尔.默里<span class="important">重要</span></td>
            <td>长期缺阵</td>
            <td>遭受ACL膝伤，目前没有明确的复出时间</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  


        <!-----D----底特律活塞------>
        <tr>  
            <th colspan="4" class="team-name pistons">[D]底特律活塞<span class="en-name">Detroit Pistons</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="9" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/pistons.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>基利.海耶斯</td>
            <td>缺阵</td>
            <td>腿部受伤，无法出战</td>
        </tr> 
        <tr>  
            <td>德瑞克.沃尔顿JR</td>
            <td>缺阵</td>
            <td>偏头痛，无法出战周四对阵马刺的比赛</td>
        </tr> 
        <tr>  
            <td>卡修斯.史丹利</td>
            <td>缺阵</td>
            <td>右膝受伤，无法出战周四对阵马刺的比赛</td>
        </tr> 
        <tr>  
            <td>贾里德.坎宁安</td>
            <td>缺阵</td>
            <td>腿部受伤，无法出战</td>
        </tr> 
        <tr>  
            <td>克里斯.史密斯</td>
            <td>缺阵</td>
            <td>左膝受伤，无法出战周四对阵马刺的比赛</td>
        </tr> 
        <tr>  
            <td>伊赛亚.里弗斯</td>
            <td>缺阵</td>
            <td>腿部受伤，无法出战</td>
        </tr> 
        <tr>  
            <td>凯德.坎宁安<span class="important">重要</span></td>
            <td>缺阵</td>
            <td>脚踝受伤，无法出战周四对阵马刺的比赛</td>
        </tr> 
        <tr>  
            <td>弗兰克.杰克逊</td>
            <td>缺阵</td>
            <td>脚踝受伤，无法出战</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----G----金州勇士------>
        <tr>  
            <th colspan="4" class="team-name warriors">[G]金州勇士<span class="en-name">Detroit Pistons</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="7" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/warriors.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>威金斯<span class="important">重要</span></td>
            <td>缺阵</td>
            <td>身体酸痛，需要保养一下，大概率无法出战周五对阵湖人的比赛</td>
        </tr> 
        <tr>  
            <td>库明加</td>
            <td>缺阵</td>
            <td>膝盖受伤，无法出战，一周之后再接受医疗评估</td>
        </tr> 
        <tr>  
            <td>伊戈达拉</td>
            <td>出战存疑</td>
            <td>出战存疑，每日观察</td>
        </tr> 
        <tr>  
            <td>加里.佩顿二世</td>
            <td>缺阵</td>
            <td>当前在从休赛期的疝气手术中恢复，归期未定</td>
        </tr> 
        <tr>  
            <td>怀斯曼</td>
            <td>缺阵</td>
            <td>膝盖受伤，归期未定</td>
        </tr> 
        <tr>  
            <td>克莱.汤普森<span class="important">重要</span></td>
            <td>长期缺阵</td>
            <td>左膝ACL受伤，归期未定</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----H----休斯顿火箭------>
        <tr>  
            <th colspan="4" class="team-name rockets">[H]休斯顿火箭<span class="en-name">Houston Rockets</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="3" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/rockets.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>埃里克.戈登<span class="important">重要</span></td>
            <td>缺阵</td>
            <td>腿部受伤，无法出战</td>
        </tr> 
        <tr>  
            <td>约翰.沃尔<span class="important">重要</span></td>
            <td>长期缺席</td>
            <td>跟球队协商后决定，新赛季不会为火箭出场比赛，但工资照拿</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----I----印第安纳步行者------>
        <tr>  
            <th colspan="4" class="team-name pacers">[I]印第安纳步行者<span class="en-name">Indiana Pacers</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="4" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/pacers.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>凯弗.赛克斯</td>
            <td>出战存疑</td>
            <td>右脚踝受伤，出战存疑</td>
        </tr> 
        <tr>  
            <td>勒维尔<span class="important">重要</span></td>
            <td>缺阵</td>
            <td>腿部受伤，无法出战</td>
        </tr> 
        <tr>  
            <td>贾里德.杜德利</td>
            <td>缺席</td>
            <td>3月14日，右膝内侧副韧带撕裂，归期未定</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----L--洛杉矶快船------>
        <tr>  
            <th colspan="4" class="team-name clippers">[L]洛杉矶快船<span class="en-name">Los Angeles Clippers</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="8" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/clippers.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>马库斯.莫里斯</td>
            <td>缺阵</td>
            <td>身体不适，不会出战周六对阵独行侠的比赛</td>
        </tr> 
        <tr>  
            <td>巴图姆</td>
            <td>缺阵</td>
            <td>身体不适，不会出战周六对阵独行侠的比赛</td>
        </tr> 
        <tr>  
            <td>祖巴茨</td>
            <td>出战存疑</td>
            <td>右肩受伤，出战存疑</td>
        </tr> 
        <tr>  
            <td>普雷斯頓</td>
            <td>缺阵</td>
            <td>本周四腿部接受了手术，本赛季将长期缺阵</td>
        </tr> 
        <tr>  
            <td>科怀.伦纳德<span class="important">重要</span></td>
            <td>长期缺阵</td>
            <td>遭受膝盖ACL伤病，预计将缺阵整个赛季</td>
        </tr> 
        <tr>  
            <td>温斯洛</td>
            <td>出战存疑</td>
            <td>每日观察，出战存疑</td>
        </tr> 
        <tr>  
            <td>伊巴卡</td>
            <td>缺阵</td>
            <td>背部受伤，归期未定</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr> 

        <!-----L----洛杉矶湖人------>
        <tr>  
            <th colspan="4" class="team-name lakers">[L]洛杉矶湖人<span class="en-name">Los Angeles Lakers</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="5" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/lakers.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>威斯布鲁克<span class="important">重要</span></td>
            <td>出战概率大</td>
            <td>每日观察中，大概率出战周六对阵勇士的比赛</td>
        </tr> 
        <tr>  
            <td>勒布朗.詹姆斯<span class="important">重要</span></td>
            <td>出战概率大</td>
            <td>每日观察中，大概率出战周六对阵勇士的比赛</td>
        </tr> 
        <tr>  
            <td>德怀特.霍华德</td>
            <td>出战概率大</td>
            <td>每日观察中，大概率出战周六对阵勇士的比赛</td>
        </tr> 
        <tr>  
            <td>阿里扎</td>
            <td>缺阵</td>
            <td>本周三接受了脚踝手术，预计至少将缺席8周的比赛</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----M----孟菲斯灰熊------>
        <tr>  
            <th colspan="4" class="team-name grizzlies">[M]孟菲斯灰熊<span class="en-name">Memphis Grizzlies</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="6" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/grizzlies.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>基利安.迪力</td>
            <td>缺阵</td>
            <td>腿部受伤，无法出战</td>
        </tr> 
        <tr>  
            <td>狄龙.布鲁克斯<span class="important">重要</span></td>
            <td>缺阵</td>
            <td>腿部受伤，无法出战</td>
        </tr> 
        <tr>  
            <td>麦克德莫特</td>
            <td>缺阵</td>
            <td>身体不适，无法出战</td>
        </tr> 
        <tr>  
            <td>邓恩</td>
            <td>缺阵</td>
            <td>腿部受伤，无法出战</td>
        </tr> 
        <tr>  
            <td>山姆.麦瑞尔</td>
            <td>缺阵</td>
            <td>脚踝受伤，无法出战周四对阵黄蜂的比赛</td>
        </tr>
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----M----迈阿密热火------>
        <tr>  
            <th colspan="4" class="team-name heat">[M]迈阿密热火<span class="en-name">Miami Heat</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="6" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/heat.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>马库斯.加勒特</td>
            <td>缺阵</td>
            <td>腿部受伤，无法出战</td>
        </tr> 
        <tr>  
            <td>文森特</td>
            <td>缺阵</td>
            <td>腹股沟受伤，无法出战周五对阵火箭的比赛</td>
        </tr> 
        <tr>  
            <td>凯莱布.马丁</td>
            <td>缺阵</td>
            <td>脚踝受伤，无法出战周五对阵火箭的比赛</td>
        </tr> 
        <tr>  
            <td>哈斯勒姆</td>
            <td>缺阵</td>
            <td>身体不适，无法出战</td>
        </tr> 
        <tr>  
            <td>奥拉迪波</td>
            <td>长期缺阵</td>
            <td>股四头肌受伤，归期未定</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  


        <!-----M----明尼苏达森林狼------>
        <tr>  
            <th colspan="4" class="team-name timberwolves">[M]明尼苏达森林狼<span class="en-name">Minnesota Timberwolves</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="3" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/timberwolves.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>内森.奈特</td>
            <td>出战存疑</td>
            <td>每日观察，出战存疑</td>
        </tr> 
        <tr>  
            <td>贝弗利</td>
            <td>缺阵</td>
            <td>腿部受伤，无法出战</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  


        <!-----M--密尔沃基雄鹿------>
        <tr>  
            <th colspan="4" class="team-name bucks">[M]密尔沃基雄鹿<span class="en-name">Milwaukee Bucks</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="9" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/bucks.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>格雷森.艾伦</td>
            <td>出战存疑</td>
            <td>膝盖受伤，出战存疑</td>
        </tr> 
        <tr>  
            <td>朱.霍乐迪<span class="important">重要</span></td>
            <td>出战存疑</td>
            <td>左膝受伤，出战存疑</td>
        </tr> 
        <tr>  
            <td>赛米.奥杰莱伊</td>
            <td>缺阵</td>
            <td>腿部受伤，无法出战</td>
        </tr> 
        <tr>  
            <td>罗德尼.胡德</td>
            <td>缺阵</td>
            <td>腿部受伤，无法出战</td>
        </tr> 
        <tr>  
            <td>波蒂斯</td>
            <td>缺阵</td>
            <td>身体不适，无法出战周六对阵篮网的比赛</td>
        </tr> 
        <tr>  
            <td>字母哥<span class="important">重要</span></td>
            <td>缺阵</td>
            <td>膝盖受伤，无法出战周六对阵篮网的比赛</td>
        </tr> 
        <tr>  
            <td>米德尔顿<span class="important">重要</span></td>
            <td>缺阵</td>
            <td>腿部受伤，无法出战周六对阵篮网的比赛</td>
        </tr> 
        <tr>  
            <td>迪文琴佐</td>
            <td>缺阵</td>
            <td>腿部受伤，无法出战</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>

        <!-----N----新奥尔良鹈鹕------>
        <tr>  
            <th colspan="4" class="team-name pelicans">[N]新奥尔良鹈鹕<span class="en-name">New Orleans Pelicans</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="5" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/pelicans.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>格拉汉姆</td>
            <td>出战存疑</td>
            <td>出战存疑，每日观察</td>
        </tr> 
        <tr>  
            <td>英格拉姆<span class="important">重要</span></td>
            <td>出战存疑</td>
            <td>腿部受伤，出战存疑</td>
        </tr> 
        <tr>  
            <td>贾克森.海耶斯</td>
            <td>缺阵</td>
            <td>周一左腹股沟拉伤，周三的G5已缺席，周五的G6将出战</td>
        </tr> 
        <tr>  
            <td>锡安.威廉姆森<span class="important">重要</span></td>
            <td>缺阵</td>
            <td>腿部受伤，无法出战周四对阵魔术的比赛</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----N----纽约尼克斯------>
        <tr>  
            <th colspan="4" class="team-name knicks">[N]纽约尼克斯<span class="en-name">New York Knicks</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="3" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/knicks.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>诺埃尔</td>
            <td>出战存疑</td>
            <td>出战存疑，每日观察</td>
        </tr> 
        <tr>  
            <td>米切尔.罗宾逊</td>
            <td>长期缺阵</td>
            <td>休赛期做完手术，目前没有回归时间</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----O----俄克拉荷马城雷霆------>
        <tr>  
            <th colspan="4" class="team-name thunder">[O]俄克拉荷马城雷霆<span class="en-name">Oklahoma City Thunder</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="3" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/thunder.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>肯瑞奇.威廉姆斯</td>
            <td>出战存疑</td>
            <td>出战存疑，每日观察</td>
        </tr> 
        <tr>  
            <td>德里克.费沃斯</td>
            <td>出战存疑</td>
            <td>出战存疑，每日观察</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----O----奥兰多魔术------>
        <tr>  
            <th colspan="4" class="team-name magic">[O]奥兰多魔术<span class="en-name">Orlando Magic</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="5" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/magic.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>楚玛.奥克</td>
            <td>缺阵</td>
            <td>臀部受伤，不会出战周四对阵鹈鹕的比赛</td>
        </tr> 
        <tr>  
            <td>艾萨克<span class="important">重要</span></td>
            <td>长期缺阵</td>
            <td>左膝ACL伤病，没有回归时间</td>
        </tr> 
        <tr>  
            <td>富尔茨<span class="important">重要</span></td>
            <td>长期缺阵</td>
            <td>膝盖受伤，没有回归时间</td>
        </tr> 
        <tr>  
            <td>迈卡威</td>
            <td>长期缺阵</td>
            <td>本周一做了左脚踝韧带手术，没有回归时间</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----P--费城76人------>
        <tr>  
            <th colspan="4" class="team-name seven6ers">[P]费城76人<span class="en-name">Philadelphia 76ers</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="4" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/76ers.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>赛布尔</td>
            <td>缺阵</td>
            <td>周一左腹股沟拉伤，周三的G5已缺席，周五的G6将出战</td>
        </tr> 
        <tr>  
            <td>格兰特.瑞勒</td>
            <td>缺阵</td>
            <td>左膝半月板撕裂，两周后重新接受医疗评估</td>
        </tr> 
        <tr>  
            <td>本.西蒙斯<span class="important">重要</span></td>
            <td>长期缺阵</td>
            <td>坚决要求转会，宁可扣工资也不会再回球队了，有钱就是这么任性</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>

        <!-----P----菲尼克斯太阳------>
        <tr>  
            <th colspan="4" class="team-name suns">[P]菲尼克斯太阳<span class="en-name">Phoenix Suns</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="3" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/suns.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>德文.布克<span class="important">重要</span></td>
            <td>缺阵</td>
            <td>因为身患新冠，暂时无法出战</td>
        </tr> 
        <tr>  
            <td>沙里奇</td>
            <td>长期缺阵</td>
            <td>右膝ACL伤病，预计本赛季不会回归</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----P--波特兰开拓者------>
        <tr>  
            <th colspan="4" class="team-name blazers">[P]波特兰开拓者<span class="en-name">Portland Trail Blazers</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="4" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/blazers.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>诺曼.鲍威尔</td>
            <td>出战存疑</td>
            <td>臀部受伤，下一场比赛出战存疑</td>
        </tr> 
        <tr>  
            <td>科迪.泽勒</td>
            <td>缺阵</td>
            <td>鼻子骨折，无法出战</td>
        </tr> 
        <tr>  
            <td>斯内尔</td>
            <td>缺席</td>
            <td>腿部受伤，无法出战</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>   

        <!-----S----萨克拉门托国王------>
        <tr>  
            <th colspan="4" class="team-name kings">[S]萨克拉门托国王<span class="en-name">Sacramento Kings</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="2" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/kings.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td colspan="3" class="none">暂无伤病</td>
        </tr>
        <tr class="empty"><td colspan="4"></td></tr>  


        <!-----S----圣安东尼奥马刺------>
        <tr>  
            <th colspan="4" class="team-name spurs">[S]圣安东尼奥马刺<span class="en-name">San Antonio Spurs</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="4" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/spurs.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>贝茨-迪奥普</td>
            <td>出战存疑</td>
            <td>腿部受伤，出战存疑</td>
        </tr> 
        <tr>  
            <td>崔.琼斯</td>
            <td>出战存疑</td>
            <td>脚踝受伤，出战存疑</td>
        </tr> 
        <tr>  
            <td>查克.科林斯</td>
            <td>长期缺阵</td>
            <td>腿部严重受伤，预计至少到今年圣诞节后才会复出</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  


        <!-----T----多伦多猛龙------>
        <tr>  
            <th colspan="4" class="team-name raptors">[T]多伦多猛龙<span class="en-name">Toronto Raptors</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="5" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/raptors.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>渡边雄太</td>
            <td>缺阵</td>
            <td>小腿拉伤，但并不严重，预计很快就能复出</td>
        </tr> 
        <tr>  
            <td>肯.伯奇</td>
            <td>缺阵</td>
            <td>腿部受伤，无法出战周五对阵76人的比赛</td>
        </tr> 
        <tr>  
            <td>克里斯.布歇</td>
            <td>长期缺阵</td>
            <td>左手指脱臼做了手术，归期未定</td>
        </tr> 
        <tr>  
            <td>西亚卡姆<span class="important">重要</span></td>
            <td>缺阵</td>
            <td>肩膀受伤，暂时没有明确复出时间</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----U----犹他爵士------>
        <tr>  
            <th colspan="4" class="team-name jazz">[U]犹他爵士<span class="en-name">Utah Jazz</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="8" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/jazz.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>麦克.康利<span class="important">重要</span></td>
            <td>缺阵</td>
            <td>腿部受伤，无法出战</td>
        </tr> 
        <tr>  
            <td>英格尔斯</td>
            <td>缺阵</td>
            <td>腿部受伤，无法出战周四对阵独行侠的比赛</td>
        </tr> 
        <tr>  
            <td>米切尔<span class="important">重要</span></td>
            <td>缺阵</td>
            <td>身体不适，无法出战周四对阵独行侠的比赛</td>
        </tr> 
        <tr>  
            <td>戈伯特<span class="important">重要</span></td>
            <td>缺阵</td>
            <td>身体不适，无法出战周四对阵独行侠的比赛</td>
        </tr> 
        <tr>  
            <td>怀特塞德</td>
            <td>缺阵</td>
            <td>身体不适，无法出战周四对阵独行侠的比赛</td>
        </tr> 
        <tr>  
            <td>博扬.博格达诺维奇</td>
            <td>缺阵</td>
            <td>腿部受伤，无法出战</td>
        </tr> 
        <tr>  
            <td>鲁迪.盖伊</td>
            <td>缺阵</td>
            <td>腿部受伤，目前还没有做好参加新赛季的准备</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----W----华盛顿奇才------>
        <tr>  
            <th colspan="4" class="team-name wizards">[W]华盛顿奇才<span class="en-name">Washington Wizards</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="6" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/wizards.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>波普</td>
            <td>出战存疑</td>
            <td>出战存疑，每日观察</td>
        </tr> 
        <tr>  
            <td>阿夫迪亚</td>
            <td>出战存疑</td>
            <td>出战存疑，每日观察</td>
        </tr> 
        <tr>  
            <td>卡修斯.温斯顿</td>
            <td>缺阵</td>
            <td>腿部受伤，无法出战</td>
        </tr> 
        <tr>  
            <td>八村塁</td>
            <td>缺阵</td>
            <td>因为个人原因，无法出战，归期未定</td>
        </tr> 
        <tr>  
            <td>托马斯.布兰恩特</td>
            <td>长期缺阵</td>
            <td>膝盖受伤，预计今年12月份复出</td>
        </tr> 

    </table>
    <div class="bottom">
        <div class="bottom-text">
            本网站服务由[篮彩老黑]独家提供&nbsp;&nbsp;&nbsp;&nbsp;浙ICP备17001885号-4<br/>
            Copyright © 2021 lancailaohei.com 保留一切权利
        </div>
        <div class="bottom-qrcode"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/common/lancai_qrcode_plus.jpg" /></div>
    </div>
  </div>

</template>

<style scoped lang="less">
@import "~src/common/less/common.less";
/*
骑士:#88023f      cavaliers
公牛:#d3153b      bulls
雄鹿:#034b1d      bucks
开拓者:#d40f23    blazers
76人:#0151a8     seven6ers
凯尔特人:#01854c  celtics 
快船:#0354ad     clippers
灰熊:#5b76ad     grizzlies
老鹰:#d0032a     hawks
热火:#af1727     heat
黄蜂:#227aa8     hornets
爵士:#0d223d     jazz
国王:#6e2195     kings
尼克斯:#0341b0   knicks 
湖人:#ff9e00     lakers
魔术:#0373bb     magic
独行侠:#1e5b9a   mavericks
篮网:#000000     nets
掘金:#bb8b0f     nuggets
步行者:#fec810   pacers 
鹈鹕:#b48e4d     pelicans
活塞:#ed1248     pistons
猛龙:#d02537     raptors
火箭:#d31145     rockets
马刺:#05181f     spurs
奇才:#d3042e     wizards  
勇士:#f4c221     warriors
森林狼:#005083   timberwolves
雷霆:#e64004     thunder
太阳:#2b2370     suns
*/
.cavaliers{
    background-color: #88023f;
}
.blazers{
    background-color: #d40f23;
}
.seven6ers{
    background-color: #0151a8;
}
.bulls{
    background-color: #d3153b;
}
.bucks{
    background-color: #034b1d;
}

.celtics{
    background-color: #01854c;
}
.clippers{
    background-color: #0354ad;
}
.grizzlies{
    background-color: #5b76ad;
}
.hawks{
    background-color: #d0032a;
}
.heat{
    background-color: #af1727;
}

.hornets{
    background-color: #227aa8;
}
.jazz{
    background-color: #0d223d;
}
.kings{
    background-color: #6e2195;
}
.knicks{
    background-color: #0341b0;
}
.lakers{
    background-color: #ff9e00;
}

.magic{
    background-color: #0373bb;
}
.mavericks{
    background-color: #1e5b9a;
}
.nets{
    background-color: #000000;
}
.nuggets{
    background-color: #bb8b0f;
}
.pacers{
    background-color: #fec810;
}

.pelicans{
    background-color: #b48e4d;
}
.pistons{
    background-color: #ed1248;
}
.raptors{
    background-color: #d02537;
}
.rockets{
    background-color: #d31145;
}
.spurs{
    background-color: #05181f;
}

.wizards{
    background-color: #d3042e;
}
.warriors{
    background-color: #f4c221;
}
.timberwolves{
    background-color: #005083;
}
.thunder{
    background-color: #e64004;
}
.suns{
    background-color: #2b2370;
}

.main-title{
    font-size:22 / @b;
    color:#666666;
    font-weight: bold;
    margin:10 / @b;
}

.top-part{
    position:fixed;
    top:0;
    left:0;
    height:200 / @b;
    width:100%;
    z-index:100;
}

.top-menu{
    background-color:#ffffff;
    height:85 / @b;
    width:100%;
    padding:10 / @b;
}

.portait-img{
    float:left;
    img{
        width:60 / @b;
        height:60 / @b;
    }
}

.portait-text{
    float:left;
    margin-left:10 / @b;
}

.text-name{
    font-size:28 / @b;
    color:#666666;
}

.text-notice{
    font-size:18 / @b;
    color:#999999
}

.clear{
    clear:both;
}

.nav{
    background:#0c859b;
    width:100%;
    height:60 / @b;
    line-height:60 / @b;
    list-style: none;
    padding:0;
}

.nav li{
    float:left;
    margin-left:0;
    margin-right:50 / @b;
    color:#ffffff;
    font-size:24 / @b;
    &.vote-ratio a{
        width:140 / @b;   
    }
}
.nav li span{
    display: block;
}
.nav li a{
    display: block;
    width:120 / @b;
    font-weight: bold;
    text-align:center;
}
.updatetime{
    text-align: left;
    margin-left: 20 / @b;
    color:#333333;
    font-size:20 / @b;
    position: relative;
    top: -10 / @b;
    margin-top:170 / @b;
}

.selected {
    width: 0;                
    height: 0;
    border: 12 / @b solid #ffffff;
    border-top-color: transparent;    
    border-left-color: transparent;
    border-right-color: transparent;
    position: relative;
    left: 50 / @b;
    top: -22 / @b;
}

.to-link-img {
  width: 750 / @b;
  height: 200 / @b;

  img {
    width: 100%;
    height: 100%;
  }
}
.injury-page{
    background: #ffffff;
}
.list{
    width:100%;
    font-size:24 / @b;
    margin-top:5 / @b;
    border: 1 / @b solid #666666;
    border-spacing: 0;/*去掉单元格间隙*/
}
.team_logo{
    width: 128 / @b;
    text-align: center;
}
.logo{
    width: 128 / @b;
    padding-left:0;
}
.name{
    width: 210 / @b;
    color:#000000;
}
.status{
    width: 135 / @b;
    color:#000000;
}
.detail{
    padding:8 / @b;
    color:#000000;
}
.title td{
    padding-left:4 / @b;
}
.empty{
    height:10 / @b;
    line-height:10 / @b;
}
th{
    border: 1 / @b solid #666666;
    background: #a2cafd;
    font-weight: bold;
    padding:8 / @b 0 8 / @b 8 / @b;
    vertical-align: middle;
    color:#ffffff;
}
td{
    border: 1 / @b solid #666666;
    padding:8 / @b 4 / @b 8 / @b 8 / @b;
    vertical-align: middle;
}
.none{
    text-align: center;
    color:#666666;
}
.title th{
    background: #f6f6f6;
}
img{
    width: 110 / @b;
    height: 110 / @b;
}
.team-name{
    padding:8 / @b 0 8 / @b 8 / @b;
}
.en-name{
    margin-left:15 / @b;
    font-size:20 / @b;
}
.important{
    background-color:#f22c11;
    padding:3 / @b;
    border-radius:5 / @b;
    color:#ffffff;
    font-size:16 / @b;
    position: relative;
    top:-30 / @b;
    left:-18 / @b;
    z-index:99;
}
.bottom{
    margin-top:45 / @b;
    height: 149 / @b;
    background:#20232c;
    width:100%;
    color:#ffffff;
    font-size:20 / @b;
}
.bottom-text{
    float:left;
    margin:40 / @b 0 0 30 / @b;
    line-height: 35 / @b;
}
.bottom-qrcode{
    float:right;
    margin:0 20 / @b 0 0;
}
.bottom-qrcode img{
    width:129 / @b;
    height:149 / @b;
}
</style>

<script>

export default {
  data () {
    return {
        udpatetime : ''
    }
  },
  components: {
  },
  computed: {
  },
  created () {
  },
  methods: {
    init () {
    },
    gotoPage(target){
        window.location.href = "/injury" + target;
    }
  },
  mounted() {
      const udpatetime = document.getElementById("udpatetime").value;
      this.udpatetime = udpatetime || "2021-06-22[周二]09:50";
  }
}
</script>

