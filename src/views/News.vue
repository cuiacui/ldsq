<template>
  <div id="news">
  <div id="top_nav">
  <Nav></Nav>
  </div>
    <h1 class="today">今天</h1>
    <hourse style="margin-top:100px"></hourse>
  </div>
</template>
<script>
import Hourse from "../components/Hours";
import Nav from "../components/Nav";
export default {
  components: {
    Hourse,
    Nav
  },
};
</script>
<style>
#news {
  width: 80%;
  margin: 20px auto;
  padding: 20px;
}
.today {
  position: fixed;
  top: 80px;
  left: 280px;
  font-size: 26px;
  line-height: 56px;
  font-weight: 600;
  letter-spacing: 4px;
}
#top_nav{
  position: fixed;
  top:0;
  margin-left: 80px;
}
</style>
