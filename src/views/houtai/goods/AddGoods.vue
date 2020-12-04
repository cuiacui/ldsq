<template>
  <div id="weditor" v-html="msg">
  
  </div>
</template>

<script>
import wangEditor from "wangeditor";

export default {
  data() {
    return {
      msg:'<b>这是测试的新闻</b>'
    };
  },
  mounted() {
    const editor = new wangEditor('#weditor');
    editor.create()
  },
};
</script>

<style>
#weditor{
}
</style>