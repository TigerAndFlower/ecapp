<template>
  <div class="footernav">
    <ul class="clearfix">
      <li class="index-a dogon">
        <a href="https://wap.epet.com/main.html?pet_type=dog"></a>
      </li>
      <li class="type-a">
        <a href="https://wap.epet.com/category.html?pet_type=dog"></a>
      </li>
      <li class="cart-a">
        <a href="https://wap.epet.com/cart/main.html"></a>
      </li>
      <li class="myepet-a">
        <a href="https://wap.epet.com/user/UserCenter.html"></a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less">
  @rem:375/16rem;
  .footernav{
    border-top: 1/@rem solid #e7e7e7;
    line-height: 45/@rem;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 45/@rem;
    background: #fff;
    z-index: 5;
    .clearfix{
      width: 100%;
      &:after{
        content: "";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden; 
      }
      li{
        float: left;
        width: 25%;
        height: 55/@rem;
        a{
          background: url(../../img/img.png) no-repeat;
          background-size: 234/@rem 163/@rem;
          margin: 0 auto;
          display: block;
          height: 40/@rem;
          width: 42/@rem;
          margin-top: 2/@rem;
        }
      }
      .index-a{
        a{
          background-position: 0 0;
        }
      } 
      .type-a{
        a{
          background-position: -85/@rem -41/@rem;
        }
      } 
      .cart-a{
        a{
          background-position: -85/@rem -81/@rem;
        }
      } 
      .myepet-a{
        a{
          background-position: -85/@rem -122/@rem;
        }
      }
    } 
  }
</style>
