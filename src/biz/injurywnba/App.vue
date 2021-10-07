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
            <li><a href="/injurynba">NBA</a></li>
            <li><a href="#">WNBA</a><span class="selected"></span></li>
            <li><a href="/injurycba">CBA</a></li>
            <li class="vote-ratio"><a href="/vote">NBA投注率</a></li>
        </ul>
    </div>
    <div class="clear"></div>
    <div class="updatetime">最近更新时间：<strong>{{udpatetime}}</strong>（每日不定期更新，敬请关注）</div>
    <table class="list" border="0" cellspacing="1" cellpadding="0">

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
            <td>索菲.坎宁安</td>
            <td>出战存疑</td>
            <td>脚踝受伤</td>
        </tr> 
         <tr>  
            <td>吉亚.内斯<span class="important">重要</span></td>
            <td>出战存疑</td>
            <td>腿部受伤</td>
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
    border: 1 / @b solid #333333;
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
    border: 1 / @b solid #333333;
    background: #a2cafd;
    font-weight: bold;
    padding:8 / @b 0 8 / @b 8 / @b;
    vertical-align: middle;
    color:#ffffff;
}
td{
    border: 1 / @b solid #333333;
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
    }
  },
  mounted() {
      const udpatetime = document.getElementById("udpatetime").value;
      this.udpatetime = udpatetime || "2021-06-22[周二]09:50";
  }
}
</script>

