<template>
    <div>
      <myHeader></myHeader>
        <div>
          <div class="banner-content">
            <div class="banner">

              <el-carousel height="420px" class="imgwarpper">

              <el-carousel-item class="banner-img">
                <img src="./banner1.jpg" alt="">
              </el-carousel-item>

              <el-carousel-item class="banner-img">
                <img src="./banner2.jpg" alt="">
              </el-carousel-item>

              <el-carousel-item class="banner-img">
                <img src="./banner3.jpg" alt="">
              </el-carousel-item>
              </el-carousel>
            </div>
            <div class="banner-list">
              <ul>
                <!--二级菜单列表-->
                <li>
                  <router-link to="bannerlist">家庭保洁<img src="./right.png" alt=""></router-link>
                  <ul class="inbanner-list" style="display: none;">
                    <li><a href="">小时工</a></li>
                    <li><a href="">开荒保洁</a></li>
                    <li><a href="">擦玻璃</a></li>
                    <li><a href="">深度保洁</a></li>
                    <li><a href="">家居养护</a></li>
                    <li><a href="">杀虫灭鼠</a></li>
                  </ul>
                </li>
                <li><a href="">上门按摩<img src="./right.png" alt=""></a>
                  <ul class="inbanner-list" style="display: none;">
                    <li><a href="">中医推拿</a></li>
                    <li><a href="">油压SPA</a></li>
                    <li><a href="">局部理疗</a></li>
                    <li><a href="">足疗套餐</a></li>
                    <li><a href="">美体塑形</a></li>
                    <li><a href="">母婴保健</a></li>
                  </ul>
                </li>
                <li><a href="">上门维修<img src="./right.png" alt=""></a>
                  <ul class="inbanner-list" style="display: none;">
                    <li><a href="">手机维修</a></li>
                    <li><a href="">家电维修</a></li>
                    <li><a href="">电脑维修</a></li>
                    <li><a href="">家庭维修</a></li>
                    <li><a href="">管道疏通</a></li>
                    <li><a href="">开锁换锁</a></li>
                    <li><a href="">安装打孔</a></li>
                    <li><a href="">空气净化</a></li>
                  </ul>
                </li>
                <li><a href="">家电清洗<img src="./right.png" alt=""></a>
                  <ul class="inbanner-list" style="display: none;">
                    <li><a href="">空调清洗</a></li>
                    <li><a href="">油烟机清洗</a></li>
                    <li><a href="">洗衣机清洗</a></li>
                    <li><a href="">冰箱清洗</a></li>
                    <li><a href="">燃气灶清洗</a></li>
                    <li><a href="">热水器清洗</a></li>
                    <li><a href="">微波炉清洗</a></li>
                    <li><a href="">饮水机清洗</a></li>
                  </ul>
                </li>
                <li><a href="">衣物洗护<img src="./right.png" alt=""></a>
                  <ul class="inbanner-list"  style="display: none;">
                    <li><a href="">洗衣</a></li>
                    <li><a href="">洗鞋修鞋</a></li>
                    <li><a href="">家纺清洗</a></li>
                    <li><a href="">箱包洗护</a></li>
                    <li><a href="">定制改衣</a></li>
                  </ul>
                </li>
                <li><a href="">搬家速运<img src="./right.png" alt=""></a>
                  <ul class="inbanner-list"  style="display: none;">
                    <li><a href="">搬家租车</a></li>
                    <li><a href="">拆装搬运</a></li>
                    <li><a href="">搬家套餐</a></li>
                    <li><a href="">仓储寄存</a></li>
                  </ul>
                </li>
                <li><a href="">美容美妆<img src="./right.png" alt=""></a>
                  <ul class="inbanner-list"  style="display: none;">
                    <li><a href="">化妆</a></li>
                    <li><a href="">美甲</a></li>
                    <li><a href="">美睫</a></li>
                    <li><a href="">美容</a></li>
                    <li><a href="">美发</a></li>
                    <li><a href="">半永久</a></li>
                  </ul>
                </li>
                <li><a href="">鲜花绿植<img src="./right.png" alt=""></a>
                  <ul class="inbanner-list"  style="display: none;">
                    <li><a href="">包月鲜花</a></li>
                    <li><a href="">礼品用花</a></li>
                    <li><a href="">绿植</a></li>
                  </ul>
                </li>
                <li><a href="">上门医护<img src="./right.png" alt=""></a>
                  <ul class="inbanner-list"  style="display: none;">
                    <li><a href="">护士上门</a></li>
                    <li><a href="">挂号陪诊</a></li>
                    <li><a href="">康复陪护</a></li>
                    <li><a href="">私人医生</a></li>
                  </ul>
                </li>
                <li><a href="">养车用车<img src="./right.png" alt=""></a>
                  <ul class="inbanner-list"  style="display: none;">
                    <li><a href="">上门养车</a></li>
                    <li><a href="">上门洗车</a></li>
                    <li><a href="">汽车陪练</a></li>
                    <li><a href="">机场泊车</a></li>
                    <li><a href="">验车</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <!--商品列表-->
          <div class="dw-service">
            <!--家庭保洁-->
            <div class="server" style="margin-top: 165px;">
              <span class="server-name">家庭保洁</span>
              <span class="server-text">小时工/开荒保洁/擦玻璃/深度保洁/家居养护/杀虫灭鼠</span>
              <span class="lookMore">
                <a href="/fuwu?category=60" style="color: #898989; font-size: 18px">更多服务&gt;</a>
              </span>
              <div class="homeClean">
                <div class="server-box">
                  <img src="./clean1.jpg" alt="" class="server-img">
                  <div class="server-title">家庭保洁</div>
                  <div class="server-content">服务内容：家庭保洁服务，2小时
                    起订。（云家政暂时不支持该服务）
                  </div>
                    <span class="price-num">30</span><span class="price-time">元/小时</span>
                  <button class="btn">查看详情</button>
                </div>
                <div class="server-box">
                  <img src="./clean2.jpg" alt="" class="server-img">
                  <div class="server-title">家庭保洁</div>
                  <div class="server-content">服务内容：家庭保洁服务，2小时
                    起订。（云家政暂时不支持该服务），提供带保服务押金快速退款，安全有效</div>
                    <span class="price-num">30</span><span class="price-time">元/小时</span>
                  <button class="btn">查看详情</button>
                </div>
                <div class="server-box">
                  <img src="./clean3.jpg" alt="" class="server-img">
                  <div class="server-title">家庭保洁</div>
                  <div class="server-content">服务内容：家庭保洁服务，2小时
                    起订。（云家政暂时不支持该服务），提供带保服务押金快速退款，安全有效</div>
                    <span class="price-num">30</span><span class="price-time">元/小时</span>
                  <button class="btn">查看详情</button>
                </div>
                <div class="server-box">
                  <img src="./clean4.jpg" alt="" class="server-img">
                  <div class="server-title">家庭保洁</div>
                  <div class="server-content">服务内容：家庭保洁服务，2小时
                    起订。（云家政暂时不支持该服务），提供带保服务押金快速退款，安全有效</div>
                    <span class="price-num">30</span><span class="price-time">元/小时</span>
                  <button class="btn">查看详情</button>
                </div>
                <div class="server-box">
                  <img src="./clean5.jpg" alt="" class="server-img">
                  <div class="server-title">家庭保洁</div>
                  <div class="server-content">服务内容：家庭保洁服务，2小时
                    起订。（云家政暂时不支持该服务），提供带保服务押金快速退款，安全有效</div>
                    <span class="price-num">30</span><span class="price-time">元/小时</span>
                  <button class="btn">查看详情</button>
                </div>
              </div>
            </div>
            <div class="server">
              <span class="server-name">家庭保洁</span>
              <span class="server-text">小时工/开荒保洁/擦玻璃/深度保洁/家居养护/杀虫灭鼠</span>
              <span class="lookMore">
                <a href="/fuwu?category=60" style="color: #898989; font-size: 18px">更多服务&gt;</a>
              </span>
              <div class="homeClean">
                <div class="server-box">
                  <img src="./clean1.jpg" alt="" class="server-img">
                  <div class="server-title">家庭保洁</div>
                  <div class="server-content">服务内容：家庭保洁服务，2小时
                    起订。（云家政暂时不支持该服务）
                  </div>
                  <span class="price-num">30</span><span class="price-time">元/小时</span>
                  <button class="btn">查看详情</button>
                </div>
                <div class="server-box">
                  <img src="./clean2.jpg" alt="" class="server-img">
                  <div class="server-title">家庭保洁</div>
                  <div class="server-content">服务内容：家庭保洁服务，2小时
                    起订。（云家政暂时不支持该服务），提供带保服务押金快速退款，安全有效</div>
                  <span class="price-num">30</span><span class="price-time">元/小时</span>
                  <button class="btn">查看详情</button>
                </div>
                <div class="server-box">
                  <img src="./clean3.jpg" alt="" class="server-img">
                  <div class="server-title">家庭保洁</div>
                  <div class="server-content">服务内容：家庭保洁服务，2小时
                    起订。（云家政暂时不支持该服务），提供带保服务押金快速退款，安全有效</div>
                  <span class="price-num">30</span><span class="price-time">元/小时</span>
                  <button class="btn">查看详情</button>
                </div>
                <div class="server-box">
                  <img src="./clean4.jpg" alt="" class="server-img">
                  <div class="server-title">家庭保洁</div>
                  <div class="server-content">服务内容：家庭保洁服务，2小时
                    起订。（云家政暂时不支持该服务），提供带保服务押金快速退款，安全有效</div>
                  <span class="price-num">30</span><span class="price-time">元/小时</span>
                  <button class="btn">查看详情</button>
                </div>
                <div class="server-box">
                  <img src="./clean5.jpg" alt="" class="server-img">
                  <div class="server-title">家庭保洁</div>
                  <div class="server-content">服务内容：家庭保洁服务，2小时
                    起订。（云家政暂时不支持该服务），提供带保服务押金快速退款，安全有效</div>
                  <span class="price-num">30</span><span class="price-time">元/小时</span>
                  <button class="btn">查看详情</button>
                </div>
              </div>
            </div>
            <div class="server">
              <span class="server-name">家庭保洁</span>
              <span class="server-text">小时工/开荒保洁/擦玻璃/深度保洁/家居养护/杀虫灭鼠</span>
              <span class="lookMore">
                <a href="/fuwu?category=60" style="color: #898989; font-size: 18px">更多服务&gt;</a>
              </span>
              <div class="homeClean">
                <div class="server-box">
                  <img src="./clean1.jpg" alt="" class="server-img">
                  <div class="server-title">家庭保洁</div>
                  <div class="server-content">服务内容：家庭保洁服务，2小时
                    起订。（云家政暂时不支持该服务）
                  </div>
                  <span class="price-num">30</span><span class="price-time">元/小时</span>
                  <button class="btn">查看详情</button>
                </div>
                <div class="server-box">
                  <img src="./clean2.jpg" alt="" class="server-img">
                  <div class="server-title">家庭保洁</div>
                  <div class="server-content">服务内容：家庭保洁服务，2小时
                    起订。（云家政暂时不支持该服务），提供带保服务押金快速退款，安全有效</div>
                  <span class="price-num">30</span><span class="price-time">元/小时</span>
                  <button class="btn">查看详情</button>
                </div>
                <div class="server-box">
                  <img src="./clean3.jpg" alt="" class="server-img">
                  <div class="server-title">家庭保洁</div>
                  <div class="server-content">服务内容：家庭保洁服务，2小时
                    起订。（云家政暂时不支持该服务），提供带保服务押金快速退款，安全有效</div>
                  <span class="price-num">30</span><span class="price-time">元/小时</span>
                  <button class="btn">查看详情</button>
                </div>
                <div class="server-box">
                  <img src="./clean4.jpg" alt="" class="server-img">
                  <div class="server-title">家庭保洁</div>
                  <div class="server-content">服务内容：家庭保洁服务，2小时
                    起订。（云家政暂时不支持该服务），提供带保服务押金快速退款，安全有效</div>
                  <span class="price-num">30</span><span class="price-time">元/小时</span>
                  <button class="btn">查看详情</button>
                </div>
                <div class="server-box">
                  <img src="./clean5.jpg" alt="" class="server-img">
                  <div class="server-title">家庭保洁</div>
                  <div class="server-content">服务内容：家庭保洁服务，2小时
                    起订。（云家政暂时不支持该服务），提供带保服务押金快速退款，安全有效</div>
                  <span class="price-num">30</span><span class="price-time">元/小时</span>
                  <button class="btn">查看详情</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      <myFooter></myFooter>
  </div>
</template>

<script>
  import Vue from 'vue'
  import 'element-ui/lib/theme-default/index.css'
  import ElementUi from 'element-ui'
  Vue.use(ElementUi)
  // 使用element-ui
  import myHeader from '../header/header.vue'
  import myFooter from '../footer/footer.vue'

  export default{
    components:{
      myHeader,
      myFooter
    }
  }
</script>

<style scoped>
  a{
    text-decoration: none;
  }
  /*轮播*/
  .banner-content{
    width:100%;
    height:420px;
    position:relative;
    overflow:hidden;
    top: 65px;
  }

  .banner{
    width:1920px;
    position:absolute;
    left:50%;
    margin-left:-980px;
  }
  .banner-img img{
    position: relative;
  }
  /*二级菜单*/
  .banner-list{
    position: absolute;
    display: block;
    width: 180px;
    height: 420px;
    text-align: center;
    background-color: #757881;
    left: 100px;
    z-index: 3;
  }
  .banner-list li a{
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    width:100%;
    height:100%;
    display: block;
    margin-top: 23px;
  }
  .banner-list li a:hover{
    text-decoration: none;
  }
  .banner-list li img{
    margin-left: 25px;
  }

  /*二级菜单第二页*/
  .inbanner-list{
    position: absolute;
    display: block;
    width: 180px;
    height: 420px;
    text-align: center;
    background-color:rgba(255,255,255,0.9);
    left: 180px;
    margin-top: -40px;
  }
  .inbanner-list li a{
    color: #000;
    font-weight: 500;
  }
  .inbanner-list li a:hover{
    color: #f00;
  }

  /*下边的服务页*/
  .dw-service{
    width: 100%;
    height: 100%;
    overflow:hidden;
    /*background-color: pink;*/
  }
  .server{
    width: 100%;
    height: 566px;
    margin-top: -65px;
    /*position: absolute;*/

  }
  .server-box{
    width: 230px;
    height: 360px;
    border:1px solid #d0d0d0;
  }
  .server-box:hover{
    box-shadow: 5px 5px 5px #d0d0d0;
  }

  .server-img{
    width: 210px;
    height: 210px;
    margin: 10px;
  }

  .server-name{
    display: block;
    font-family: '黑体';
    color: black;
    font-weight: bolder;
    font-size: 28px;
    margin-top: 64px;
    text-align: center;
  }
  .server-text{
    display: block;
    margin-bottom: 30px;
    margin-top: 20px;
    font-size: 22px;
    text-align: center;
    color: black;
  }
  .server-box{
    float: left;
    margin-left: 10px;
    margin-top: 10px;
  }
  .server-title{
    font-size: 16px;
    /*padding: 10px 0;*/
    font-weight: 800;
    color: #000;
    height: 28px;
    overflow: hidden;
    width: 101%;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .server-content{
    color: #929292;
    padding: 5px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    word-break: break-all;
    font-size: 13px;
    line-height: 18px;
    height: 58px;
  }
  .btn{
    float: right;
    width: 76px;
    height: 24px;
    line-height: 22px;
    text-align: center;
    background: #fb474f;
    border-radius: 5px;
    color: #fff;
    font-size: 14px;
    border-style: none;
    margin-right: 20px;
  }

  .price-num{
    font-size: 20px;
    color: #fb474f;
    font-weight: bold;
  }
  .price-time{
    font-size: 14px;
    padding: 5px 5px;
    font-weight: 600;
    height: 20px;
    line-height: 20px;
    color: #fb474f;
  }

  .homeClean{
    width: 100%;
    height: 375px;
    margin: 10px 80px;
  }
  .lookMore{
    color: #4b5052;
    font-size: 18px;
    text-decoration: none;
    margin-left: 1200px;
    display: block;

  }
</style>
