<template>
  <div>
    <myHeader></myHeader>
    <div>
      <div class="content">
        <div class="seller">服务商</div>
          <div class="server-left">
            <ul>
              <li>
                <img src="./clean1.jpg" alt="" class="servers-img">
                <p style="margin-top: 15px">
                  <img style="margin-bottom: 5px" src="./home1.png" width="18" height="17">
                  <b>宜生到家</b>
                </p>
                <p class="pp">已接单12182单<i>好评98%</i></p>
              </li>
              <li>
                <img src="./clean1.jpg" alt="" class="servers-img">
                <p style="margin-top: 15px">
                  <img style="margin-bottom: 5px" src="./home1.png" width="18" height="17">
                  <b>宜生到家</b>
                </p>
                <p class="pp">已接单12182单<i>好评98%</i></p>
              </li>
              <li>
                <img src="./clean1.jpg" alt="" class="servers-img">
                <p style="margin-top: 15px">
                  <img style="margin-bottom: 5px" src="./home1.png" width="18" height="17">
                  <b>宜生到家</b>
                </p>
                <p class="pp">已接单12182单<i>好评98%</i></p>
              </li>
              <li>
                <img src="./clean1.jpg" alt="" class="servers-img">
                <p style="margin-top: 15px">
                  <img style="margin-bottom: 5px" src="./home1.png" width="18" height="17">
                  <b>宜生到家</b>
                </p>
                <p class="pp">已接单12182单<i>好评98%</i></p>
              </li>
              <li class="erweima">
                <img src="./daowayApp.png" alt="" class="servers-img">
                <p>扫一扫</p>
                <p>下载到位APP</p>
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
.server-left ul li{
  width: 232px;
  height: 300px;
  border: 1px solid #eaeaea;
  padding: 10px;
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
  /*background: #fff;*/
  /*background-color: #d0d0d0;*/
  cursor: pointer;
}

.servers-img{
  width: 210px;
  height: 210px;
  margin: 10px;
}
.erweima{
  background-color: #f00;
}
.erweima p{
  text-align: center;
  font-size: 18px;
  color: #fff;

}


  /*.seller{*/
    /*margin-top: 50px;*/
    /*margin-bottom: 20px;*/
    /*text-align: left;*/
    /*font-size: 20px;*/
    /*font-weight: bold;*/
  /*}*/
  /*.pp{*/
    /*margin: 10px 0 0 0;*/
  /*}*/
  /*.sellerIn,.daowayApp{*/
    /*width:230px;*/
    /*height: 350px;*/
    /*float: left;*/
    /*margin-right: 12px;*/
    /*margin-bottom: 12px;*/
    /*background: url("./sellerIn.jpg") no-repeat;*/
  /*}*/
  /*.daowayApp{*/
    /*background: url("./fuwushang2_10.jpg") no-repeat;*/
    /*padding-top: 20px;*/
  /*}*/
  /*.daowayApp img{*/
    /*width: 200px;*/
  /*}*/
  /*.home_clean b{*/
    /*font-size: 18px;*/
  /*}*/
  /*.home_clean p{*/
    /*color:#5e5e5e;*/
  /*}*/
  /*.home_clean i{*/
    /*display: inline-block;*/
    /*font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;*/
    /*float: right;*/
  /*}*/

  /*!*content样式*!*/
  /*.content{*/
    /*position: relative;*/
    /*width:90%;*/
    /*margin: 50px auto 100px;*/
    /*text-align: center;*/
    /*background-color: #fbf8f8;*/
    /*overflow: hidden;*/
  /*}*/
  /*.content h3{*/
    /*font-size: 30px;*/
  /*}*/
  /*.list_text{*/
    /*font-size: 20px;*/
    /*margin:20px auto;*/
  /*}*/
  /*.item_text{*/
    /*margin:20px auto;*/
  /*}*/
  /*.massage{*/
    /*margin:10px auto;*/
    /*font-size: 20px !important;*/
    /*font-weight: bold;*/
  /*}*/
  /*.content a:hover{*/
    /*text-decoration: none;*/
  /*}*/
  /*.mone{*/
    /*float: right;*/
  /*}*/
  /*.content ul{*/
    /*width:100%;*/
    /*overflow: hidden;*/
  /*}*/
  /*.content ul li{*/
    /*position: relative;*/
    /*width:228px;*/
    /*float: left;*/
    /*border: 1px solid rgba(234,234,234,0.8);*/
    /*margin-right: 12px;*/
    /*margin-bottom: 12px;*/
    /*text-align: left;*/
  /*}*/
  /*.content ul li:hover{*/
    /*box-shadow: 3px 3px 10px 3px #DBDBDB;*/
  /*}*/
  /*.home_clean {*/
    /*width: 210px;*/
    /*margin: 10px;*/
  /*}*/
  /*.home_clean img{*/
    /*display: inline-block;*/
    /*width:100%;*/
    /*height:100%;*/
  /*}*/
  /*.home_clean h4{*/
    /*font-weight: bold;*/
  /*}*/
  /*.home_clean p{*/
    /*font-size: 12px;*/
    /*color: #333333;*/
  /*}*/
  /*.home_clean span {*/
    /*color: #DE7377;*/
  /*}*/
  /*.home_clean .money{*/
    /*font-size: 20px;*/
    /*color: #DE7377;*/
    /*font-weight: bold;*/
  /*}*/
  /*.home_clean .btn{*/
    /*color: #fff;*/
    /*background-color:#DE7377;*/
    /*position: absolute;*/
    /*right: 10px;*/
    /*bottom: 8px;*/
  /*}*/
</style>
