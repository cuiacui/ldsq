<template>
  <div>
      <el-tabs :tab-position="tabPosition" style="height: 200px;">
        <!-- 已发布 -->
        <el-tab-pane :label='`已发布（${$store.state.personal.personal_detail.personal_artical.published_list.length}）`'  >
          <el-card class="box-card" v-for="(item,index) in $store.state.personal.personal_detail.personal_artical.published_list " :key="index">
              <p> {{item.artical_name }}</p>
              <span class="time">{{ item.artical_time}}</span>
              <div class="update">
                <i class="el-icon-edit-outline" @click="update"></i>  <i class="el-icon-delete" @click="del_published(index)"></i>
            </div>
          </el-card>
        </el-tab-pane>
        <!-- 审核中 -->
        <el-tab-pane :label='`审核中（${$store.state.personal.personal_detail.personal_artical.review_list.length}）`'  >
          <el-card class="box-card" v-for="(item,index) in $store.state.personal.personal_detail.personal_artical.review_list " :key="index">
              <p> {{item.artical_name }}</p>
              <span class="time">{{ item.artical_time}}</span>
              <div class="update">
                <i class="el-icon-edit-outline" @click="update"></i>  <i class="el-icon-delete" @click="del_review(index)"></i>
            </div>
          </el-card>
        </el-tab-pane>
        <!-- 未通过 -->
        <el-tab-pane :label='`未通过（${$store.state.personal.personal_detail.personal_artical.fail_list.length}）`'  >
          <el-card class="box-card" v-for="(item,index) in $store.state.personal.personal_detail.personal_artical.fail_list " :key="index">
              <p> {{item.artical_name }}</p>
              <span class="time">{{ item.artical_time}}</span>
              <div class="update">
                <i class="el-icon-edit-outline" @click="update"></i>  <i class="el-icon-delete" @click="del_fail(index)"></i>
            </div>
          </el-card>
        </el-tab-pane>
        <!-- 草稿 -->
        <el-tab-pane :label='`草稿（${$store.state.personal.personal_detail.personal_artical.draft_list.length}）`'  >
          <el-card class="box-card" v-for="(item,index) in $store.state.personal.personal_detail.personal_artical.draft_list " :key="index">
              <p> {{item.artical_name }}</p>
              <span class="time">{{ item.artical_time}}</span>
              <div class="update">
                <i class="el-icon-edit-outline" @click="update"></i>  <i class="el-icon-delete" @click="del_draft(index)"></i>
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
        }
      },  
      methods:{
        update(){
          this.$router.push({
            path:"/"
          })
        },
        del_review(index){
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              let list =this.$store.state.personal.personal_detail.personal_artical.review_list
              list.splice(index,1)
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消删除'
              });          
            });
        },
        del_published(index){
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              let list =this.$store.state.personal.personal_detail.personal_artical.published_list
              list.splice(index,1)
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消删除'
              });          
            });
        },
        del_fail(index){
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              let list =this.$store.state.personal.personal_detail.personal_artical.fail_list
              list.splice(index,1)
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消删除'
              });          
            });
        },
        del_draft(index){
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              let list =this.$store.state.personal.personal_detail.personal_artical.draft_list
              list.splice(index,1)
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消删除'
              });          
            });
        }
      }

}

</script>

<style scoped>
.box-card{
  width: 840px;
  height:100px;
  position: relative;
}
.time{
  position: absolute;
  bottom: 20px;
  left: 20px;
}
.update{
  width: 100px;
  position: absolute;
  bottom: 25px;
  right: 0px;
  display: none;
}
.el-icon-edit-outline{
  font-size: 25px;
  color: blue;
  margin-right: 20px;
}
.el-icon-delete{
  font-size: 25px;
  color: red;
}
.box-card:hover .update{
  display: block;
}
</style>