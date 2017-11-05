<template>
      <div>
          <!-- 第二个 -->
        <div class="carouseWrapper">
          <!-- <ul class="list"> -->
            <mt-swipe :auto="4000" class="list">
              <mt-swipe-item class="lbt">
                <a href="http://wap.epet.com/zt/promotion/main.html?id=Mjg%3D&amp;fw=0">
                  <img src="../../img/1.jpg">
                </a>
              </mt-swipe-item>
              <mt-swipe-item class="lbt">
                <a href="https://sale.epet.com/m/1711/presale.html?pettype=dog&amp;fw=0">
                  <img src="../../img/2.jpg">
                </a>
              </mt-swipe-item>
              <mt-swipe-item  class="lbt">
                <a href="https://sale.epet.com/m/1711/main.html?fw=0">
                  <img src="../../img/3.jpg">
                </a>
              </mt-swipe-item>
              <mt-swipe-item  class="lbt">
                <a href="http://wap.epet.com/zt/promotion/main.html?id=MjY%3D&amp;fw=0">
                  <img src="../../img/4.jpg">
                </a>
              </mt-swipe-item>
            </mt-swipe>
        </div>
      </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" rel="stylesheet/less">
    @rem: 375/16rem;
    .carouseWrapper{
      position: relative;
      width: 100%;
      height: 160/@rem;
      overflow: hidden;
      .list{
        width: 1500/@rem;
        overflow: hidden;
        .lbt{
            width: 375/@rem;
            float: left;
            height: 160/@rem;
            img{
                display: block;
                width: 375/@rem;
                height: 100%;
            }
        }
      }
      .mint-swipe-indicators{
            position: absolute;
            left: 13%;
            bottom: 10%;
            width: 100%;
            height: 20/@rem;
            text-align: center;
            .mint-swipe-indicator{
                display: inline-block;
                width: 20/@rem;
                height: 10/@rem;
                background-color: white;
                border-radius: 5/@rem;
                margin:0 5/@rem;
            }
            .is-active{
                background-color: blue;
            }
      }
    //   .points-wrapper{
    //     position: absolute;
    //     left: 0;
    //     bottom: 10%;
    //     width: 100%;
    //     height: 20/@rem;
    //     text-align: center;
    //     span{
    //       display: inline-block;
    //       width: 20/@rem;
    //       height: 10/@rem;
    //       background-color: #fff;
    //       border-radius: 5/@rem;
    //       margin:0 5/@rem;
    //     }
    //   }
    }
</style>
