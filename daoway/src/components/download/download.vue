<template>
  <div>
    <myHeader></myHeader>
      <div>
        <div class="banner-content">
          <div class="banner">
            <img src="./xiazaiye-_02.jpg" alt="download">
          </div>
          <div class="download">
            <dl>
              <dt style="margin-left: 65px"><img src="./app-yong-ma.png" width="96" height="96"></dt>
              <dd style="background: #e62e36">
                <a href="https://itunes.apple.com/cn/app/dao-wei-shang-men-fu-wu-hui/id953936745?mt=8">
                  <img src="./iph.png" width="22" height="auto">
                  iPhone下载
              </a>
              </dd>
              <dd style="margin-top: 15px; background: #a0c842">
                <a href="http://api.daoway.cn/download/daoway-android.apk">
                  <img src="./and.png" style="width:22px;height:auto;">
                  Android下载
              </a>
              </dd>
            </dl>
          </div>
        </div>
          <!--主题-->
        <div style="background: #fff; padding-bottom: 30px">
          <div class="downloadbox">
            <img src="./xiazaiye-_05.jpg" width="242" height="31">
            <p style="text-align: center; font-size: 22px; margin-top: 10px; color: #3d3838">精选优质服务&nbsp;&nbsp;&nbsp;&nbsp;全程品质保障</p>
            <ul class="listimg">
              <li>
                <img src="./xiazaiye-_09.jpg" width="168" height="166">
                <span><i><b>家政</b></i><i>小时工/保姆/阿姨/月嫂/前端的</i></span>
              </li>
              <li>
                <img src="./xiazaiye-_11.jpg" width="168" height="166">
                <span><i><b>按摩</b></i><i>中医推拿/油压/SPA<br>足疗保健</i></span>
              </li>
              <li>
                <img src="./xiazaiye-_13.jpg" width="168" height="166">
                <span style="position: relative; right:10px"><i><b>维修</b></i><i>手机维修/家电维修/电脑维修</i></span>
              </li>
              <li>
                <img src="./xiazaiye-_18.jpg" width="168" height="166">
                <span><i><b>家电清洗</b></i><i>冰箱/洗衣机/油烟机</i></span>
              </li>
              <li>
                <img src="./xiazaiye-_19.jpg" width="168" height="166">
                <span><i><b>洗衣洗鞋</b></i><i>洗衣/洗鞋/洗包/家纺</i></span>
              </li>
              <li>
                <img src="./xiazaiye-_20.jpg" width="168" height="166">
                <span><i><b>搬家</b></i><i>家具拆装/大件搬运</i></span>
              </li>
              <li>
                <img src="./xiazaiye-_24.jpg" width="168" height="166">
                <span><i><b>养容养体</b></i><i>美体塑形/养生护理<br>美容美甲/美眉/化妆</i></span>
              </li>
              <li>
                <img src="./xiazaiye-_25.jpg" width="168" height="166">
                <span><i><b>上门养车</b></i><i>爱车保养/维修检测<br>清洁养护/洗车/保养</i></span>
              </li>
              <li>
                <img src="./xiazaiye-_26.jpg" width="168" height="166">
                <span><i><b>鲜花</b></i><i>礼品花束/家庭用花/花篮/前端</i></span>
              </li>
            </ul>
          </div>
        </div>

    </div>
    <myFooter></myFooter>
  </div>
</template>

<script>
  import myHeader from '../header/header.vue'
  import myFooter from '../footer/footer.vue'

  export default{
    components:{
      myHeader,
      myFooter
    }
  }
</script>

<style>
 *{
    font-style: normal;
  }
  .banner-content{
    width:100%;
    height:420px;
    position:relative;
    overflow:hidden;
    top: 70px;
  }
  .banner img{
    width:1920px;
    position:absolute;
    left:50%;
    margin-left:-980px;
  }
  .download{
    width: 1200px;
    height: 420px;
    margin: 0 auto;
    padding-top: 204px;
    padding-right: 340px;
    position:absolute;
  }
  /*苹果安卓下载框*/
  .download dl {
    float: right;
    width: 308px;
    height: 96px;
  }
  dl {
    margin-top: 0;
    margin-bottom: 20px;
  }
  .download dl dd {
    float: right;
    width: 188px;
    background: green;
    height: 36px;
    line-height: 36px;
    margin-top: 5px;
    border-radius: 6px;
    font-size: 17px;
    padding-left: 25px;
  }

  .download dl dd a{
    color: #fff;
    text-align: center;
  }
  .download dl dd a:hover{
    text-decoration: none;
  }
  /*ul九宫格的卡片*/
  .downloadbox {
    width: auto;
    height: auto;
    text-align: center;
    padding-top: 130px;
    float: left;
  }
  .listimg {
    padding-top: 50px;
  }
  .listimg li {
    width: 29%;
    margin-right: 0.5%;
    height: 216px;
    border: 1px solid #eaeaea;
    display: inline-block;
    padding-top: 20px;
    margin-top: 10px;
  }

  .listimg li:hover{
    box-shadow: 5px 5px 5px #d0d0d0;
  }

</style>
