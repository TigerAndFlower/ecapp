<template>
  <div id="headwrap">
    <div class="main">
      <div class="headerTopWrap">
        <div class="headerTop">
          <div class="epet-search bgf">
            <div class="location">
              <a href="https://wap.epet.com/place.html?pet_type=dog&amp;fw=0">
                <span class="catordog c89">狗狗站</span>
                <span class="c89">|</span>
                <span data-name="my-place" class="myposition c89 ft13">上海</span>
                <i></i>
              </a>
            </div> 
            <p class="search-text">
              <a href="https://wap.epet.com/search.html?pet_type=dog&amp;fw=0">
                <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
                <span class="eico serach-ico"></span>
              </a>
            </p>
            <a href="https://wap.epet.com/wappms/pms.html?fw=0" class="epet-category">
              <img src="//static.epetbar.com/static_web/wap/src/images/mydope.png">
            </a>
          </div>
        </div>
      <div class="headerBottom" ref="wrapper">
        <ul class="mask">
          <li class="dscroll-li">
            <a href="https://wap.epet.com/main.html?menu_param=149&amp;pet_type=dog&amp;fw=0">
              <span class="rela  on">
                <span>首页</span>
                <i></i>
              </span>
            </a>
          </li>
          <li class="dscroll-li">
            <a href="https://wap.epet.com/clothmall/main.html?pet_type=dog&amp;fw=0">
              <span class="rela">
                <span>服饰城</span>
                <i></i>
              </span>
            </a>
          </li>
          <li class="dscroll-li">
            <a href="https://wap.epet.com/main.html?menu_param=123&amp;pet_type=dog&amp;is_single=1&amp;fw=0">
              <span class="rela">
                <span>狗狗主粮</span>
                <i></i>
              </span>
            </a>
          </li>
          <li class="dscroll-li">
            <a href="https://wap.epet.com/main.html?menu_param=125&amp;pet_type=dog&amp;is_single=1&amp;fw=0">
              <span class="rela">
                <span>医疗保健</span>
                <i></i>
              </span>
            </a>
          </li>
          <li class="dscroll-li">
            <a href="https://wap.epet.com/main.html?menu_param=131&amp;pet_type=dog&amp;is_single=1&amp;fw=0">
              <span class="rela">
                <span>零食玩具</span>
                <i></i>
              </span>
            </a>
          </li>
          <li class="dscroll-li">
            <a href="https://wap.epet.com/main.html?menu_param=134&amp;pet_type=dog&amp;is_single=1&amp;fw=0">
              <span class="rela">
                <span>日用外出</span>
                <i></i>
              </span>
            </a>
          </li>
          <li class="dscroll-li">
            <a href="https://wap.epet.com/main.html?menu_param=140&amp;pet_type=dog&amp;is_single=1&amp;fw=0">
              <span class="rela">
                <span>美容香波</span>
                <i></i>
              </span>
            </a>
          </li>
        </ul>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default{
    mounted(){
      let scroll = new BScroll(this.$refs.wrapper,{
        scrollX: true,
        scrollY: false,
        click: true
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less">
  @rem:375/16rem;
  #headwrap{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 86/@rem;
    background-color: #fff;
    z-index: 5;
    .main{
      max-width: 640/@rem;
      margin: auto;
      .headerTopWrap{
        width: 100%;
        height: 51/@rem;
        padding: 5/@rem 10/@rem;
        .headerTop{
          padding: 8/@rem 0;
          &::after{
            display: block;
            content: "";
            height: 0;
            clear: both;
            visibility: hidden;
          }
          background-color: #fff;
          .epet-search{
            text-align: center;
             &::after{
            display: block;
            content: "";
            height: 0;
            clear: both;
            visibility: hidden;
            }
            .location{
              float: left;
              position: relative;
              margin-right: 20/@rem;
            }
            .search-text{
              width: 55%;
              position: relative;
              float: left;
              a{
                color: #333;
              }
              input{
                width: 100%;
                border: 0;
                height: 25/@rem;
                background: #e9e9e9;
                border-radius: 4/@rem;
                color: #bcbcbc;
                text-indent: 10/@rem;
                font-size: 13/@rem;
                outline: 0;
              }
              span{
                width: 11/@rem;
                height: 11/@rem;
                position: absolute;
                right: 5/@rem;
                top: 0;
                bottom: 0;
                margin: auto 0;
                 background-position: 0 0;
                 background: url(../../img/search.png) no-repeat;
                 background-size: 11/@rem auto;
              }
            }
            .epet-category{
              width: 10%;
              float: right;
              img{
                width: 25/@rem;
                margin-left: 10/@rem;
                vertical-align: middle;
              }
            }
          }

        }
      }
      .headerBottom{
        height: 35/@rem;
        min-width: 320/@rem;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        .mask{
          width: 140%;
          display: flex;
          .dscroll-li{
            float: left;
            flex-basis: 0;
            flex-grow: 1;
            -webkit-box-flex: 1;
            i{
              position: absolute;
              bottom: 1/@rem;
              left: -10%;
              width: 120%;
              height: 2/@rem;
            }
            a{
              display: block;
              width: 100%;
              height: 100%;
              line-height: 36/@rem;
              font-size: 14/@rem;
              text-align: center;
              color: #666;
              .rela{
                position: relative;
              }
              .on{
                color: #459d36;
                display: inline-block;
                i{
                  background: #459d36;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
