<template>
  <div id="injury"
       class="injury-page">
    <div class="top-menu">
        <div class="portait-img">
            <img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/common/portait.png"/>
        </div>
        <div class="portait-text">
            <div class="text-name">请关注微信公众号：<strong>[篮彩老黑]</strong><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/common/arrow.png" /><span class="scan">可扫一扫右侧二维码</span></div>
            <div class="text-notice">NBA伤病名单实时更新/WNBA伤病名单实时更新/CBA伤病名单实时更新</div>
        </div>
        <div class="portait-qrcode">
            <img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/common/lancai_qrcode.jpg" />
        </div>
    </div>
    <div class="clear"></div>
    <ul class="nav">
        <li><a href="/injurynbapc">NBA</a></li>
        <li><a class="selected" href="#">WNBA</a></li>
        <li><a href="/injurycbapc">CBA</a></li>
        <li class="vote-ratio"><a href="/votepc">NBA投注率</a></li>
    </ul>
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
    img{
        width:20px;
        height:21px;
        margin:5px 10px 0 12px;
    }
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
    &.vote-ratio a{
        width: 150px;    
    }
}
.nav li a{
    display: block;
    font-weight: bold;
    text-align:center;
    cursor: pointer;
    width: 100px;                
    height: 40px;
}
.updatetime{
    text-align: left;
    margin-left: 20px;
    color:#333333;
    font-size:14px;
    margin:10px 0 10px 39px;
}

.selected {               
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

