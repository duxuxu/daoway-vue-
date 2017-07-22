<template>
  <div>
    <div class="baozhang" id="baozhang">
      <h2>到位<i>服务</i>保障</h2>
      <p style="margin-top: 15px;">到位平台担保交易安全，交易未成功100%退款</p>
    </div>
    <div class="servi">
      <ul>
        <li><img src="./get.png" width="44" height="44"><br>服务多</li>
        <li><img src="./get.png" width="44" height="44"><br>上门快</li>
        <li><img src="./get.png" width="44" height="44"><br>有保障</li>
      </ul>
    </div>
    <footer class="footer">
      <dl >
        <dt>热门城市</dt>
        <dd>
          <i>北京</i><i>上海</i><i>广州</i><i>深圳</i><i>成都</i><i>天津</i><i>南京</i><i>杭州</i><i>重庆</i><i>苏州</i><i>武汉</i><i>长沙</i><i>济南</i><i>郑州</i><i>西安</i><i>沈阳</i><i>福州</i><i>厦门</i><i>南昌</i><i>合肥</i><i>宁波</i><i>无锡</i><i>青岛</i><i>大连</i><i>东莞</i><i>佛山</i><i>石家庄</i><i>哈尔滨</i><i>太原</i><i>昆明</i><i>贵阳</i><i>南宁</i><i>温州</i>
        </dd>
      </dl>
    </footer>
    <div class="beian" style="color: #898989;font-size: 14px">
      <p style=" margin-top: 50px;margin-bottom: 25px;">©2015 版权所有 到位 daoway.com 京ICP备15001471号-1</p>
      <p>北京邻家科技有限公司</p>
    </div>
  </div>
</template>

<script>
    export default{

    }
</script>

<style scoped>
  .footer-logo {
    margin-bottom: 35px
  }

  .footer {
    width: 100%;
    clear: both;
    padding-top: 50px;
    height: 160px;
    background: #fff;

  }

  .footer dl {
    width: 1200px;
    margin: 0 auto;
  }

  .footer dl dt {
    float: left;
    font-family: " 微软雅黑";

  }

  .footer dl dd {
    margin-left: 40px;
    width: 1100px;
    line-height: 30px;
    float: left;
  }

  .footer dl dd i {
    font-size: 16px;
    color: #898989;
    display: inline-block;
    width: 9%;
    text-align: center;
    font-weight: 200;
    cursor: pointer;
    font-family: "微软雅黑";
    font-style:normal;
  }

  .baozhang {
    text-align: center;
    width: 100%;
    height: 132px;
    padding-top: 60px;
    background: #fff;
    clear: both;
  }

  #baozhang h2 {
    font-size: 28px;
    font-family: "微软雅黑";
    font-weight: 800;
  }

  #baozhang h2 i {
    font-size: 28px;
    font-family: "微软雅黑";
    font-weight: 800;
    color: #fb474f;
    font-style:normal;
  }

  #baozhang p {
    font-size: 20px;
    color: #3d3838;
    margin: 0;
  }

  .servi {
    width: 100%;
    padding-top: 68px;
    background: #fff;
    height: 150px;
    font-family: "微软雅黑";
  }

  .servi ul {
    width: 850px;
    margin: 0 auto;
  }

  .servi ul li {
    width: 33%;
    float: left;
    text-align: center;
    color: #1d1515;
    font-size: 18px;
  }

  .servi ul li img {
    margin-bottom: 10px;
  }

  /*.btn:hover {*/
    /*color: #fff;*/
  /*}*/

  /*.navnamebg {*/
    /*background: #60646d;*/
  /*}*/
  .beian{
    display: block;
    text-align: center;
    width:100%;
    height: 85px;
  }
</style>
