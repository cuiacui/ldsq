<template>
  <div>
      <el-tabs :tab-position="tabPosition" style="height: 200px;">
        <el-tab-pane label="互动消息">
          <el-card class="box-card">
            <div class="text item">
              <p>{{$store.state.personal.personal_detail.personal_main.main}}</p>
            </div>
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="系统消息">
          <el-card class="box-card">
            <div class="text item">
              <p>{{$store.state.personal.personal_detail.personal_main.system}}</p>
            </div>
          </el-card>
        </el-tab-pane>
      </el-tabs> 
  </div>
</template>

<script>
export default {
  data() {
        return {
          tabPosition: 'top',
          personal_artical : ''
        }
      }
}
</script>

<style scoped>
.box-card{
  width: 840px;
  height:150px;
}
</style>