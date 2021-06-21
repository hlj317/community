<template>
  <div id="injury"
       class="injury-page">
    <div class="top-menu">
        <div class="portait-img">
            <img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/common/portait.png"/>
        </div>
        <div class="portait-text">
            <div class="text-name">请关注微信公众号：<strong>[篮彩老黑]</strong> → <span class="scan">可扫一扫右侧二维码</span></div>
            <div class="text-notice">NBA伤病名单实时更新/WNBA伤病名单实时更新/NBA伤病名单实时更新</div>
        </div>
        <div class="portait-qrcode">
            <img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/common/lancai_qrcode.jpg" />
        </div>
    </div>
    <div class="clear"></div>
    <ul class="nav">
        <li @click="gotoPage('nbapc')"><span>NBA</span></li>
        <li><span class="selected">WNBA</span></li>
        <li @click="gotoPage('cbapc')"><span>CBA</span></li>
    </ul>
    <div class="clear"></div>
    <div class="updatetime">最近更新时间：<strong>2021-06-21[周一]09:30</strong>（每日不定期更新，敬请关注）</div>
    <table class="list" border="0" cellspacing="1" cellpadding="0">

        <!-----A----亚特兰大梦想------>
        <tr>  
            <th colspan="4" class="team-name dream">[A]亚特兰大梦想<span class="en-name">Atlanta Dream</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="3" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/wnba-logo/dream.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>肯尼迪.卡特</td>
            <td>缺席</td>
            <td>肘部伤势严重，目前无确定性回归时间</td>
        </tr> 
        <tr>  
            <td>卡拉尼.布朗</td>
            <td>缺席</td>
            <td>目前被球队排除在激活名单中</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----C--芝加哥天空------>
        <tr>  
            <th colspan="4" class="team-name sky">[C]芝加哥天空<span class="en-name">Chicago Sky</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="2" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/wnba-logo/sky.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>加比.威廉姆斯</td>
            <td>本赛季休战</td>
            <td>经协商，球队决定加比.威廉姆斯在本赛季休战</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----C----康涅狄克太阳------>
        <tr>  
            <th colspan="4" class="team-name sun">[C]康涅狄克太阳<span class="en-name">Connecticut Sun</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="3" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/wnba-logo/sun.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>艾丽萨.托马斯</td>
            <td>出战存疑</td>
            <td>跟腱受伤，周日对阵芝加哥天空出战存疑</td>
        </tr> 
        <tr>  
            <td>琼克尔.琼斯<span class="important">重要</span></td>
            <td>缺席</td>
            <td>因为个人原因缺席，直到6月29日复出</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----D----达拉斯飞翼------>
        <tr>  
            <th colspan="4" class="team-name wings">[D]达拉斯飞翼<span class="en-name">Dallas Wings</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="2" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/wnba-logo/wings.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td colspan="3" class="none">暂无</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----I--印第安纳狂热------>
        <tr>  
            <th colspan="4" class="team-name fever">[I]印第安纳狂热<span class="en-name">Indiana Fever</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="3" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/wnba-logo/fever.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>哈塔尔<span class="important">重要</span></td>
            <td>出战</td>
            <td>脚踝受伤，周日对战华盛顿神秘人大概率出战</td>
        </tr> 
        <tr>  
            <td>阿勒曼德</td>
            <td>赛季报销</td>
            <td>因为个人原因，本赛季不会再上场</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>

        <!-----L--拉斯维加斯王牌------>
        <tr>  
            <th colspan="4" class="team-name aces">[L]拉斯维加斯王牌<span class="en-name">Las Vegas Aces</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="3" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/wnba-logo/aces.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>利亚纳.鲁珀特</td>
            <td>赛季报销</td>
            <td>因为个人原因，本赛季不会再上场</td>
        </tr> 
        <tr>  
            <td>麦克康特利</td>
            <td>赛季报销</td>
            <td>膝盖手术，本赛季报销</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>

        <!-----L----洛杉矶火花------>
        <tr>  
            <th colspan="4" class="team-name sparks">[L]洛杉矶火花<span class="en-name">Los Angeles Sparks</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="7" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/wnba-logo/sparks.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>奇妮.欧古米克</td>
            <td>赛季报销</td>
            <td>膝盖伤势，赛季报销</td>
        </tr> 
        <tr>  
            <td>妮姆卡.欧古米克</td>
            <td>赛季报销</td>
            <td>膝盖伤势，赛季报销</td>
        </tr> 
        <tr>  
            <td>贾斯敏.沃克</td>
            <td>赛季报销</td>
            <td>膝盖伤势，赛季报销</td>
        </tr> 
        <tr>  
            <td>米娅.瓦德伊娃</td>
            <td>缺席本赛季</td>
            <td>因为个人原因，无限期休战</td>
        </tr> 
        <tr>  
            <td>妮娜.阿尤索</td>
            <td>缺席本赛季</td>
            <td>因为个人原因，本赛季不会再出场比赛</td>
        </tr> 
        <tr>  
            <td>艾云娜·拉卡</td>
            <td>缺席本赛季</td>
            <td>因为个人原因，本赛季不会再出场比赛</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----M----明尼苏达天猫------>
        <tr>  
            <th colspan="4" class="team-name lynx">[M]明尼苏达天猫<span class="en-name">Minnesota Lynx</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="5" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/wnba-logo/lynx.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>纳塔利.阿卓娃</td>
            <td>缺席</td>
            <td>膝盖伤势，本赛季归期不明</td>
        </tr> 
        <tr>  
            <td>艾薇澳.鲍尔斯</td>
            <td>缺席</td>
            <td>拇指伤势，本赛季归期不明</td>
        </tr> 
        <tr>  
            <td>杰西卡.谢巴德</td>
            <td>缺席</td>
            <td>腹股沟伤势，本赛季归期不明</td>
        </tr> 
        <tr>  
            <td>伦尼亚.戴维斯</td>
            <td>赛季报销</td>
            <td>因为接受足部手术，本赛季报销</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  


        <!-----N----纽约自由------>
        <tr>  
            <th colspan="4" class="team-name liberty">[N]纽约自由<span class="en-name">New York Liberty</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="6" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/wnba-logo/liberty.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>凯.斯托克斯</td>
            <td>缺席</td>
            <td>因为个人原因，本赛季无限期休战</td>
        </tr> 
        <tr>  
            <td>娜塔莎.霍华德</td>
            <td>缺席</td>
            <td>膝关节韧带拉伤，缺阵4-6周</td>
        </tr> 
        <tr>  
            <td>玛丽尼.约翰尼斯</td>
            <td>缺席</td>
            <td>因为个人原因，本赛季不会再出场比赛</td>
        </tr> 
        <tr>  
            <td>乔斯林.威洛比</td>
            <td>赛季报销</td>
            <td>跟腱伤势，本赛季报销</td>
        </tr> 
        <tr>  
            <td>雅西娅.杜尔</td>
            <td>赛季报销</td>
            <td>因为患了某种严重疾病，本赛季报销</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----P----凤凰城水银------>
        <tr>  
            <th colspan="4" class="team-name mercury">[P]凤凰城水银<span class="en-name">Phoenix Mercury</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="3" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/wnba-logo/mercury.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>戴安娜.陶乐西</td>
            <td>缺席</td>
            <td>胸骨骨折，本赛季无限期休战</td>
        </tr> 
        <tr>  
            <td>布里亚.哈特利</td>
            <td>缺席</td>
            <td>膝盖伤势，本赛季无限期休战</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----S----西雅图风暴------>
        <tr>  
            <th colspan="4" class="team-name storm">[S]西雅图风暴<span class="en-name">Seattle Storm</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="2" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/wnba-logo/storm.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>米基娅.哈里根</td>
            <td>缺席</td>
            <td>因为个人原因，本赛季不会再出场比赛</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----W----华盛顿神秘人------>
        <tr>  
            <th colspan="4" class="team-name mystics">[W]华盛顿神秘人<span class="en-name">Washington Mystics</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="6" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/wnba-logo/mystics.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td>海恩斯.艾伦</td>
            <td>缺席</td>
            <td>膝盖伤势，周日对阵印第安纳狂热将缺席</td>
        </tr> 
        <tr>  
            <td>艾丽卡.麦考尔</td>
            <td>缺席</td>
            <td>膝盖伤势，周日对阵印第安纳狂热将缺席</td>
        </tr> 
        <tr>  
            <td>基艾拉.莱斯利</td>
            <td>缺席</td>
            <td>脑震荡原因，周日对阵印第安纳狂热将缺席</td>
        </tr> 
        <tr>  
            <td>蒂娜.查尔斯<span class="important">重要</span></td>
            <td>出战</td>
            <td>上一场比赛个人原因缺席，周日对阵印第安纳狂热将出战</td>
        </tr> 
        <tr>  
            <td>戴尔多恩<span class="important">重要</span></td>
            <td>缺席</td>
            <td>背部伤势，本赛季无限期休战</td>
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
阳光:#c41330     sun
自由人:#a45025   liberty
神秘人:#05285e   mystics
梦想:#538fcd     dream
天空:#bf9b00     sky
狂热:#c13b42     fever 
风暴:#365a4e     storm
王牌:#151e27     aces
水星:#e6631f     mercury
火花:#52247c     sparks
飞翼:#11244c     wings
山猫:#12805d     lynx
*/
.sun{
    background-color: #c41330;
}
.liberty{
    background-color: #a45025;
}
.mystics{
    background-color: #05285e;
}
.dream{
    background-color: #538fcd;
}
.sky{
    background-color: #bf9b00;
}
.fever{
    background-color: #c13b42;
}
.storm{
    background-color: #365a4e;
}
.aces{
    background-color: #151e27;
}
.mercury{
    background-color: #e6631f;
}
.sparks{
    background-color: #52247c;
}
.wings{
    background-color: #11244c;
}
.lynx{
    background-color: #12805d;
}



.portait-img{
    float:left;
    margin:15px 0 0 15px;
    img{
        width:60px;
        height:60px;
    }
}

.portait-text{
    float:left;
    margin:15px 0 0 15px;
    line-height: 30px;
}
.portait-text strong{
    color:#000000;
}

.portait-qrcode{
    float:left;
    margin-left:15px;
    line-height: 30px;
}

.portait-qrcode img{
    width:90px;
    height:90px;
}

.text-name{
    font-size:18px;
    color:#666666;
}
.scan{
    color:#cc0000;
    font-weight: bold;
}

.text-notice{
    font-size:18px;
    color:#666666;
}

.clear{
    clear:both;
}

.nav{
    background:#20232c;
    width:100%;
    height:40px;
    line-height:40px;
    list-style: none;
    padding-left:40px;
}

.nav li{
    float:left;
    margin-left:0;
    margin-right:30px;
    color:#cccccc;
    font-size:20px;
    font-weight: bold;
    text-align:center;
    cursor: pointer;
    width: 100px;                
    height: 40px;
}
.nav li span{
    display: block;
}
.updatetime{
    text-align: left;
    margin-left: 20px;
    color:#333333;
    font-size:14px;
    margin:10px 0 10px 39px;
}

.selected {
    width: 100px;                
    height: 40px;
    color:#ffffff;
    background: #cc0000;
}

.injury-page{
    background: #ffffff;
}
.list{
    width:100%;
    font-size:16px;
    margin-top:5px;
    border: 1px solid #333333;
    border-spacing: 0;/*去掉单元格间隙*/
}
.team_logo{
    width: 140px;
    text-align: center;
}
.logo{
    width: 140px;
}
.name{
    width: 200px;
    color:#000000;
}
.status{
    width: 100px;
    color:#000000;
}
.detail{
    padding:8px;
    color:#000000;
}
.title td{
    padding-left:4px;
}
.empty{
    height:10px;
    line-height:10px;
}
th{
    border: 1px solid #333333;
    background: #a2cafd;
    font-weight: bold;
    padding:8px 0 8px 8px;
    vertical-align: middle;
    color:#ffffff;
}
td{
    border: 1px solid #333333;
    padding:8px;
    vertical-align: middle;
}
.none{
    text-align: center;
    color:#666666;
}
.title th{
    background: #f6f6f6;
}
.title img{
    width: 100px;
    height: 100px;
}
.team-name{
    padding:8px 0 8px 8px;
}
.en-name{
    margin-left:15px;
    font-size:14px;
}
.important{
    background-color:#f22c11;
    padding:3px;
    border-radius:5px;
    color:#ffffff;
    font-size:6px;
    position: relative;
    top:-2px;
    left:5px;
    z-index:99;
}
.bottom{
    margin-top:45px;
    height: 149px;
    background:#20232c;
    width:100%;
    color:#ffffff;
    font-size:18px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.bottom-text{
    float:left;
    margin:0;
    line-height: 35px;
}
.bottom-qrcode{
    float:left;
    margin:0 0 0 40px;
}
.bottom-qrcode img{
    width:129px;
    height:149px;
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

