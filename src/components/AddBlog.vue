<template>
  <el-card id="add-blog">
    <el-form :model="blog" :rules="rules" ref="blog" label-width="100px" class="demo-blog">
    <el-form-item label="文章标题" prop="title">
        <el-input v-model="blog.title" style="width: 300px"></el-input>
    </el-form-item>
    <el-form-item label="文章作者" prop="author">
        <el-input v-model="blog.author" style="width: 200px"></el-input>
    </el-form-item>
    <el-form-item label="推送到主页" prop="delivery">
        <el-switch v-model="blog.delivery"></el-switch>
    </el-form-item>
    <el-form-item label="文章类型" prop="type">
        <el-checkbox-group v-model="blog.type">
        <el-checkbox label="生活" title="type"></el-checkbox>
        <el-checkbox label="学习" title="type"></el-checkbox>
        <el-checkbox label="娱乐" title="type"></el-checkbox>
        <el-checkbox label="其他" title="type"></el-checkbox>
        </el-checkbox-group>
    </el-form-item>
    <el-form-item label="文章内容" prop="content">
        <el-input type="textarea" v-model="blog.content" style="width: 80%"></el-input>
    </el-form-item>
    
    <el-form-item>
        <el-button type="primary" @click="submitForm('blog')">提交文章</el-button>
        <el-button @click="resetForm('blog')">重置</el-button>
    </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
  export default {
      
    data() {
      return {
        blog: {
          title: '',
          author: '',
          delivery: false,
          type: [],
          content: ''
        },
        rules: {
          title: [
            { required: true, message: '请输入文章标题', trigger: 'blur' },
            { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
          ],
          author: [
              {required: true, message: '请输入文章作者', trigger: 'blur'},
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个类型', trigger: 'change' }
          ],
          content: [
            { required: true, message: '请填写文章内容', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formtitle) {
        this.$refs[formtitle].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formtitle) {
        this.$refs[formtitle].resetFields();
      }
    }
  }
</script>

<style>
#add-blog {
    margin: 50px 20%;
}
.el-form-item {
    margin-top: 50px;
}
</style>
