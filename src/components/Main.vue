<template>
  <div id="v-main">
      <el-container>
        <el-aside style="width: 10%;"></el-aside>
        <el-container>
          <el-main>
            <el-row v-for="blog in blogs" :key="blog.id">
              <el-col :span="24">
                <el-card :body-style="{ padding: '0px' }">
                  <div class="pic"><img src="../assets/img/gate.jpg" class="image"></div>
                  <div class="article">
                    <h3 style="text-align: center">{{ blog.title | snippet2}}</h3>
                    <span>{{ blog.body | snippet}}</span>
                    <el-button type="text" class="button">查看全文</el-button>
                    <div class="bottom clearfix">
                      <time class="time">发布时间：2022.4.13</time>
                      
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-main>
          <el-aside>
            <el-card class="box-card" style="margin-top: 20px;">
              <div slot="header" class="clearfix">
                <span>公告</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
              </div>
              <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
              </div>
            </el-card>

            <el-card class="box-card" style="margin-top: 20px;">
              <div slot="header" class="clearfix">
                <span>近期文章</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
              </div>
              <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
              </div>
            </el-card>

            <el-card class="box-card" style="margin-top: 20px;">
              <div slot="header" class="clearfix">
                <span>文章分类</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
              </div>
              <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
              </div>
            </el-card>

            <el-card class="box-card" style="margin-top: 20px;">
              <div slot="header" class="clearfix">
                <span>网站资讯</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
              </div>
              <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
              </div>
            </el-card>
          </el-aside>
        </el-container>
        <el-aside style="width: 10%;"></el-aside>
      </el-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'v-main',
  data(){
    return{
      blogs:[]
    }
  },
  created(){
    axios.get('./../static/posts.json')
    .then((data)=>{
      console.log(data.data);
      this.blogs = data.data.slice(0,5);
    })
  }
}
</script>

<style scoped>
  .image {
        object-fit: cover;
        width: 100%;
        height: 100%;
        display: inline-block;
        border: none;
        border-radius: 10px;
  }

  .el-row {
    padding-bottom: 14px;
  }

  .pic {
    float: left;
    height: 100%;
    width: 50%;
  }

  .article {
    padding: 10px 10px;
    float: left;
    height: 100%;
    width: 40%;
  }

  .el-card {
    height: 200px;
  }
</style>
