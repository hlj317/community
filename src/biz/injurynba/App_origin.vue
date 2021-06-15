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
                <div class="text-notice">NBA伤病名单实时更新/WNBA伤病名单实时更新/NBA伤病名单实时更新</div>
            </div>
        </div>
        <div class="clear"></div>
        <ul class="nav">
            <li><span>NBA</span><span class="selected"></span></li>
            <li @click="gotoPage('wnba')"><span>WNBA</span></li>
            <li @click="gotoPage('cba')"><span>CBA</span></li>
        </ul>
    </div>
    <div class="clear"></div>
    <div class="updatetime">最近更新时间：<strong>2021-06-03[周二]14:05</strong>（每天晚23:00和早8:00更新）</div>
    <table class="list" border="0" cellspacing="1" cellpadding="0">

        <!-----A----亚特兰大老鹰------>
        <tr>  
            <th colspan="4" class="team-name hawks">[A]亚特兰大老鹰<span class="en-name">Atlanta Hawks</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="3"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/hawks.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>安东尼.戴维斯</td>
            <td>出战</td>
            <td>周一左腹股沟拉伤，周三的G5已缺席，周五的G6将出战</td>
        </tr> 
        <tr>  
            <td>贾里德.杜德利</td>
            <td>缺席</td>
            <td>3月14日，右膝内侧副韧带撕裂，归期未定</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----B--波士顿凯尔特人------>
        <tr>  
            <th colspan="4" class="team-name celtics">[B]波士顿凯尔特人<span class="en-name">Boston Celtics</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="3"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/celtics.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>安东尼.戴维斯</td>
            <td>出战</td>
            <td>周一左腹股沟拉伤，周三的G5已缺席，周五的G6将出战</td>
        </tr> 
        <tr>  
            <td>贾里德.杜德利</td>
            <td>缺席</td>
            <td>3月14日，右膝内侧副韧带撕裂，归期未定</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----B----布鲁克林篮网------>
        <tr>  
            <th colspan="4" class="team-name nets">[B]布鲁克林篮网<span class="en-name">Brooklyn Nets</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="3"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/nets.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>安东尼.戴维斯</td>
            <td>出战</td>
            <td>周一左腹股沟拉伤，周三的G5已缺席，周五的G6将出战</td>
        </tr> 
        <tr>  
            <td>贾里德.杜德利</td>
            <td>缺席</td>
            <td>3月14日，右膝内侧副韧带撕裂，归期未定</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----C----夏洛特黄蜂------>
        <tr>  
            <th colspan="4" class="team-name hornets">[C]夏洛特黄蜂<span class="en-name">Charlotte Hornets</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="3"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/hornets.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>安东尼.戴维斯</td>
            <td>出战</td>
            <td>周一左腹股沟拉伤，周三的G5已缺席，周五的G6将出战</td>
        </tr> 
        <tr>  
            <td>贾里德.杜德利</td>
            <td>缺席</td>
            <td>3月14日，右膝内侧副韧带撕裂，归期未定</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----C--芝加哥公牛------>
        <tr>  
            <th colspan="4" class="team-name bulls">[C]芝加哥公牛<span class="en-name">Chicago Bulls</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="3"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/bulls.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>安东尼.戴维斯<span class="important">重要</span></td>
            <td>出战</td>
            <td>周一左腹股沟拉伤，周三的G5已缺席，周五的G6将出战</td>
        </tr> 
        <tr>  
            <td>贾里德.杜德利</td>
            <td>缺席</td>
            <td>3月14日，右膝内侧副韧带撕裂，归期未定</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>

        <!-----C--克利夫兰骑士------>
        <tr>  
            <th colspan="4" class="team-name cavaliers">[C]克利夫兰骑士<span class="en-name">Cleveland Cavaliers</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="2" class="logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/cavaliers.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td colspan="3" class="none">暂无</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>

        <!-----D----达拉斯独行侠------>
        <tr>  
            <th colspan="4" class="team-name mavericks">[D]达拉斯独行侠<span class="en-name">Dallas Mavericks</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="3"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/mavericks.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>安东尼.戴维斯</td>
            <td>出战</td>
            <td>周一左腹股沟拉伤，周三的G5已缺席，周五的G6将出战</td>
        </tr> 
        <tr>  
            <td>贾里德.杜德利</td>
            <td>缺席</td>
            <td>3月14日，右膝内侧副韧带撕裂，归期未定</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----D----丹佛掘金------>
        <tr>  
            <th colspan="4" class="team-name nuggets">[D]丹佛掘金<span class="en-name">Denver Nuggets</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="3"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/nuggets.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>安东尼.戴维斯</td>
            <td>出战</td>
            <td>周一左腹股沟拉伤，周三的G5已缺席，周五的G6将出战</td>
        </tr> 
        <tr>  
            <td>贾里德.杜德利</td>
            <td>缺席</td>
            <td>3月14日，右膝内侧副韧带撕裂，归期未定</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  


        <!-----D----底特律活塞------>
        <tr>  
            <th colspan="4" class="team-name pistons">[D]底特律活塞<span class="en-name">Detroit Pistons</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="3"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/pistons.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>安东尼.戴维斯</td>
            <td>出战</td>
            <td>周一左腹股沟拉伤，周三的G5已缺席，周五的G6将出战</td>
        </tr> 
        <tr>  
            <td>贾里德.杜德利</td>
            <td>缺席</td>
            <td>3月14日，右膝内侧副韧带撕裂，归期未定</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----G----金州勇士------>
        <tr>  
            <th colspan="4" class="team-name warriors">[G]金州勇士<span class="en-name">Detroit Pistons</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="3"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/warriors.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>安东尼.戴维斯</td>
            <td>出战</td>
            <td>周一左腹股沟拉伤，周三的G5已缺席，周五的G6将出战</td>
        </tr> 
        <tr>  
            <td>贾里德.杜德利</td>
            <td>缺席</td>
            <td>3月14日，右膝内侧副韧带撕裂，归期未定</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----H----休斯顿火箭------>
        <tr>  
            <th colspan="4" class="team-name rockets">[H]休斯顿火箭<span class="en-name">Houston Rockets</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="3"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/rockets.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>安东尼.戴维斯</td>
            <td>出战</td>
            <td>周一左腹股沟拉伤，周三的G5已缺席，周五的G6将出战</td>
        </tr> 
        <tr>  
            <td>贾里德.杜德利</td>
            <td>缺席</td>
            <td>3月14日，右膝内侧副韧带撕裂，归期未定</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----I----印第安纳步行者------>
        <tr>  
            <th colspan="4" class="team-name pacers">[I]印第安纳步行者<span class="en-name">Indiana Pacers</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="3"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/pacers.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>安东尼.戴维斯</td>
            <td>出战</td>
            <td>周一左腹股沟拉伤，周三的G5已缺席，周五的G6将出战</td>
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
            <td rowspan="3"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/clippers.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>安东尼.戴维斯</td>
            <td>出战</td>
            <td>周一左腹股沟拉伤，周三的G5已缺席，周五的G6将出战</td>
        </tr> 
        <tr>  
            <td>贾里德.杜德利</td>
            <td>缺席</td>
            <td>3月14日，右膝内侧副韧带撕裂，归期未定</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr> 

        <!-----L----洛杉矶湖人------>
        <tr>  
            <th colspan="4" class="team-name lakers">[L]洛杉矶湖人<span class="en-name">Los Angeles Lakers</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="3"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/lakers.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>安东尼.戴维斯</td>
            <td>出战</td>
            <td>周一左腹股沟拉伤，周三的G5已缺席，周五的G6将出战</td>
        </tr> 
        <tr>  
            <td>贾里德.杜德利</td>
            <td>缺席</td>
            <td>3月14日，右膝内侧副韧带撕裂，归期未定</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----M----孟菲斯灰熊------>
        <tr>  
            <th colspan="4" class="team-name grizzlies">[M]孟菲斯灰熊<span class="en-name">Memphis Grizzlies</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="3"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/grizzlies.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>安东尼.戴维斯</td>
            <td>出战</td>
            <td>周一左腹股沟拉伤，周三的G5已缺席，周五的G6将出战</td>
        </tr> 
        <tr>  
            <td>贾里德.杜德利</td>
            <td>缺席</td>
            <td>3月14日，右膝内侧副韧带撕裂，归期未定</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----M----迈阿密热火------>
        <tr>  
            <th colspan="4" class="team-name heat">[M]迈阿密热火<span class="en-name">Miami Heat</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="3"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/heat.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>安东尼.戴维斯</td>
            <td>出战</td>
            <td>周一左腹股沟拉伤，周三的G5已缺席，周五的G6将出战</td>
        </tr> 
        <tr>  
            <td>贾里德.杜德利</td>
            <td>缺席</td>
            <td>3月14日，右膝内侧副韧带撕裂，归期未定</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  


        <!-----M----明尼苏达森林狼------>
        <tr>  
            <th colspan="4" class="team-name timberwolves">[M]明尼苏达森林狼<span class="en-name">Minnesota Timberwolves</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="3"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/timberwolves.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>安东尼.戴维斯</td>
            <td>出战</td>
            <td>周一左腹股沟拉伤，周三的G5已缺席，周五的G6将出战</td>
        </tr> 
        <tr>  
            <td>贾里德.杜德利</td>
            <td>缺席</td>
            <td>3月14日，右膝内侧副韧带撕裂，归期未定</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  


        <!-----M--密尔沃基雄鹿------>
        <tr>  
            <th colspan="4" class="team-name bucks">[M]密尔沃基雄鹿<span class="en-name">Milwaukee Bucks</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="3"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/bucks.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>安东尼.戴维斯</td>
            <td>出战</td>
            <td>周一左腹股沟拉伤，周三的G5已缺席，周五的G6将出战</td>
        </tr> 
        <tr>  
            <td>贾里德.杜德利</td>
            <td>缺席</td>
            <td>3月14日，右膝内侧副韧带撕裂，归期未定</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>

        <!-----N----新奥尔良鹈鹕------>
        <tr>  
            <th colspan="4" class="team-name pelicans">[N]新奥尔良鹈鹕<span class="en-name">New Orleans Pelicans</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="3"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/pelicans.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>安东尼.戴维斯</td>
            <td>出战</td>
            <td>周一左腹股沟拉伤，周三的G5已缺席，周五的G6将出战</td>
        </tr> 
        <tr>  
            <td>贾里德.杜德利</td>
            <td>缺席</td>
            <td>3月14日，右膝内侧副韧带撕裂，归期未定</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----N----纽约尼克斯------>
        <tr>  
            <th colspan="4" class="team-name knicks">[N]纽约尼克斯<span class="en-name">New York Knicks</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="3"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/knicks.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>安东尼.戴维斯</td>
            <td>出战</td>
            <td>周一左腹股沟拉伤，周三的G5已缺席，周五的G6将出战</td>
        </tr> 
        <tr>  
            <td>贾里德.杜德利</td>
            <td>缺席</td>
            <td>3月14日，右膝内侧副韧带撕裂，归期未定</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----O----俄克拉荷马城雷霆------>
        <tr>  
            <th colspan="4" class="team-name thunder">[O]俄克拉荷马城雷霆<span class="en-name">Oklahoma City Thunder</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="3"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/thunder.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>安东尼.戴维斯</td>
            <td>出战</td>
            <td>周一左腹股沟拉伤，周三的G5已缺席，周五的G6将出战</td>
        </tr> 
        <tr>  
            <td>贾里德.杜德利</td>
            <td>缺席</td>
            <td>3月14日，右膝内侧副韧带撕裂，归期未定</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----O----奥兰多魔术------>
        <tr>  
            <th colspan="4" class="team-name magic">[O]奥兰多魔术<span class="en-name">Orlando Magic</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="3"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/magic.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>安东尼.戴维斯</td>
            <td>出战</td>
            <td>周一左腹股沟拉伤，周三的G5已缺席，周五的G6将出战</td>
        </tr> 
        <tr>  
            <td>贾里德.杜德利</td>
            <td>缺席</td>
            <td>3月14日，右膝内侧副韧带撕裂，归期未定</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----P--费城76人------>
        <tr>  
            <th colspan="4" class="team-name seven6ers">[P]费城76人<span class="en-name">Philadelphia 76ers</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="3"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/76ers.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>安东尼.戴维斯</td>
            <td>出战</td>
            <td>周一左腹股沟拉伤，周三的G5已缺席，周五的G6将出战</td>
        </tr> 
        <tr>  
            <td>贾里德.杜德利</td>
            <td>缺席</td>
            <td>3月14日，右膝内侧副韧带撕裂，归期未定</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>

        <!-----P----菲尼克斯太阳------>
        <tr>  
            <th colspan="4" class="team-name suns">[P]菲尼克斯太阳<span class="en-name">Phoenix Suns</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="3"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/suns.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>安东尼.戴维斯</td>
            <td>出战</td>
            <td>周一左腹股沟拉伤，周三的G5已缺席，周五的G6将出战</td>
        </tr> 
        <tr>  
            <td>贾里德.杜德利</td>
            <td>缺席</td>
            <td>3月14日，右膝内侧副韧带撕裂，归期未定</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----P--波特兰开拓者------>
        <tr>  
            <th colspan="4" class="team-name blazers">[P]波特兰开拓者<span class="en-name">Portland Trail Blazers</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="3"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/blazers.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>安东尼.戴维斯</td>
            <td>出战</td>
            <td>周一左腹股沟拉伤，周三的G5已缺席，周五的G6将出战</td>
        </tr> 
        <tr>  
            <td>贾里德.杜德利</td>
            <td>缺席</td>
            <td>3月14日，右膝内侧副韧带撕裂，归期未定</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>   

        <!-----S----萨克拉门托国王------>
        <tr>  
            <th colspan="4" class="team-name kings">[S]萨克拉门托国王<span class="en-name">Sacramento Kings</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="3"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/kings.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>安东尼.戴维斯</td>
            <td>出战</td>
            <td>周一左腹股沟拉伤，周三的G5已缺席，周五的G6将出战</td>
        </tr> 
        <tr>  
            <td>贾里德.杜德利</td>
            <td>缺席</td>
            <td>3月14日，右膝内侧副韧带撕裂，归期未定</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  


        <!-----S----圣安东尼奥马刺------>
        <tr>  
            <th colspan="4" class="team-name spurs">[S]圣安东尼奥马刺<span class="en-name">San Antonio Spurs</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="3"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/spurs.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>安东尼.戴维斯</td>
            <td>出战</td>
            <td>周一左腹股沟拉伤，周三的G5已缺席，周五的G6将出战</td>
        </tr> 
        <tr>  
            <td>贾里德.杜德利</td>
            <td>缺席</td>
            <td>3月14日，右膝内侧副韧带撕裂，归期未定</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  


        <!-----T----多伦多猛龙------>
        <tr>  
            <th colspan="4" class="team-name raptors">[T]多伦多猛龙<span class="en-name">Toronto Raptors</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="3"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/raptors.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>安东尼.戴维斯</td>
            <td>出战</td>
            <td>周一左腹股沟拉伤，周三的G5已缺席，周五的G6将出战</td>
        </tr> 
        <tr>  
            <td>贾里德.杜德利</td>
            <td>缺席</td>
            <td>3月14日，右膝内侧副韧带撕裂，归期未定</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----U----犹他爵士------>
        <tr>  
            <th colspan="4" class="team-name jazz">[U]犹他爵士<span class="en-name">Utah Jazz</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="3"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/jazz.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>安东尼.戴维斯</td>
            <td>出战</td>
            <td>周一左腹股沟拉伤，周三的G5已缺席，周五的G6将出战</td>
        </tr> 
        <tr>  
            <td>贾里德.杜德利</td>
            <td>缺席</td>
            <td>3月14日，右膝内侧副韧带撕裂，归期未定</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----W----华盛顿奇才------>
        <tr>  
            <th colspan="4" class="team-name wizards">[W]华盛顿奇才<span class="en-name">Washington Wizards</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="3"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/wizards.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>安东尼.戴维斯</td>
            <td>出战</td>
            <td>周一左腹股沟拉伤，周三的G5已缺席，周五的G6将出战</td>
        </tr> 
        <tr>  
            <td>贾里德.杜德利</td>
            <td>缺席</td>
            <td>3月14日，右膝内侧副韧带撕裂，归期未定</td>
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
    width:120 / @b;
    font-weight: bold;
    text-align:center;
}
.nav li span{
    display: block;
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
    border: 1 / @b solid #333333;
    border-spacing: 0;/*去掉单元格间隙*/
}
.logo{
    width: 120 / @b;
    padding-left:0;
}
.name{
    width: 225 / @b;
    color:#000000;
}
.status{
    width: 120 / @b;
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
    border: 1 / @b solid #333333;
    background: #a2cafd;
    font-weight: bold;
    padding:8 / @b 0 8 / @b 8 / @b;
    vertical-align: middle;
    color:#ffffff;
}
td{
    border: 1 / @b solid #333333;
    padding:8 / @b 0 8 / @b 8 / @b;
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
  }
}
</script>

