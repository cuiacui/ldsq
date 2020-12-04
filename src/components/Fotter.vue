<template>
  <div class="foo">
    <div class="footer">
        <ul class="footer-one">
          <li>灵动是一个聚焦科技与创新的资讯平台，致力于为一切热爱思考与发现的用户，提供有效率的信息服务。</li>
          <li>24小时：全天不间断的商业科技资讯和热点报道，及时为你推送。</li>
          <li>友情赞助：希望各位大佬友情赞助，非常感觉。我们会更加努力为大家提供更好的服务</li>
        </ul>
        <div class="footer-img">
          <div class="footer-img-one">
            <img src="../../public/img/wx.png" alt="">
            <div class="footer-img-one-img">
              <img src="../../public/img/wx-img.jpg" alt="">
            </div>
          </div>
          <div class="footer-img-one">
            <img src="../../public/img/pg.png" alt="">
            <div class="footer-img-one-img">
              <img src="../../public/img/pg-img.jpg" alt="">
            </div>
          </div>
          <div class="footer-img-one">
            <img src="../../public/img/az.png" alt="">
            <div class="footer-img-one-img">
              <img src="../../public/img/az-img.jpg" alt="">
            </div>
          </div>
          
          
          
        </div>
        <ul class="footer-two">
          <li>关于我们</li>
          <li>加入我们</li>
          <li>合作伙伴</li>
          <li>防网络诈骗专题</li>
          <li>RSS订阅</li>
        </ul>
        <div class="footer-end">Copyright ©  <span>虎嗅网</span> <span>京ICP备12013432号-1</span>       <span>京公网安备 11010502037938号</span></div>
    </div>
  </div>
  
</template>

<script>
export default {

}
</script>

<style>
.foo{
  width: 100%;
  background-color: #27282d;
  height:310px;
  box-sizing: border-box;
}
.footer{
  width: 1094px;
  margin: 0 auto;
  height:310px
}
.footer-one{
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
}
.footer-one li{
  width: 300px;
  font-size: 14px;
  line-height: 20px;
  color: #777;
}
.footer-img{
  display: flex;
  width: 180px;
  justify-content: space-between;
  padding-top: 50px;
  float: left;
}
.footer-img img{
  cursor: pointer;
}
.footer-img-one{
  width: 50px;
  height: 50px;
  position: relative;
}
.footer-img-one-img{
  width: 50px;
  height: 50px;
  position: absolute;
  top: -110px;
  left: -35px;
  /* display: none; */
  transition: all .3s;
  transform-origin: top;
  transform: scaleY(0);
}
.footer-img-one:hover .footer-img-one-img{
  /* display: block; */
  transform: scaleY(1);
}
.footer-img-one-img img{
  width: 100px;
  height: 100px;
}
.footer-two{
  width: 600px;
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
  float: right;
  margin-right: 100px;
}
.footer-two li{
  font-size: 14px;
  line-height: 45px;
  cursor: pointer;
  color: #777;
}
.footer-two li:hover{
  color: #fff;
}
.footer-end{
  color: #777;
  width: 100%;
  font-size: 12px;
  margin-top: 130px;
  text-align: center;
}
.footer-end span{
  cursor: pointer;
}
.footer-end span:hover{
  color: #fff;
}
</style>