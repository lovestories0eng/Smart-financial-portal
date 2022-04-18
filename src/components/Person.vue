<template>
  <div id="person">
      <el-container>
          <el-aside style="width: 10%"></el-aside>
          <div class="aside">
        <el-aside>
            <el-row class="tac">
                <el-col :span="24">
                    <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                    <el-submenu index="1">
                        <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>导师</span>
                        </template>
                        <el-submenu index="1-1">
                        <template slot="title">导师组1</template>
                        <el-menu-item index="1-1-1">舒亚非</el-menu-item>
                        </el-submenu>
                        <el-submenu index="1-2">
                        <template slot="title">导师组2</template>
                        <el-menu-item index="1-2-1">XXX</el-menu-item>
                        </el-submenu>
                        <el-submenu index="1-3">
                        <template slot="title">导师组3</template>
                        <el-menu-item index="1-3-1">XXX</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>学生</span>
                        </template>
                        <el-submenu index="2-1">
                        <template slot="title">班干部</template>
                        <el-menu-item index="2-1-1">XXX</el-menu-item>
                        </el-submenu>
                        <el-submenu index="1-2">
                        <template slot="title">优秀学员</template>
                        <el-menu-item index="2-2-1">XXX</el-menu-item>
                        </el-submenu>
                        <el-submenu index="1-3">
                        <template slot="title">所有学生</template>
                        <el-menu-item index="2-3-1">XXX</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    </el-menu>
                </el-col>
            </el-row>
        </el-aside>
          </div>
        <el-main>
            <el-card class="box-card">
                <div>
                    <div id="article-container"><h1 id="舒亚非"><a href="#舒亚非" class="headerlink" title="舒亚非"></a>舒亚非</h1><h2 id="基本信息"><a href="#基本信息" class="headerlink" title="基本信息"></a>基本信息</h2><p> <strong>个人资料</strong></p>
                    <p>舒亚非，男，硕士，系统分析师、创业导师、敏捷培训师、码农兼文艺中年。热爱互联网与开源文化，信奉在实践中学习、在创新中精进、在网络中生存。</p>
                    <p>当前研究工作主要聚焦于从互联网的上半场(信息互联网，即Web) =&amp;gt; 向下半场(价值互联网，即区块链)的升级和迁移。</p>
                    <p>联系方式 ： QQ 1302522</p>
                    <p> <strong>在研科研项目</strong></p>
                    <ol>
                    <li>教育部产学协同育人项目-杭电—腾讯微众银行区块链人才培养实践基地建设</li>
                    <li>教育部产学协同育人项目-杭电—北京知链区块链人才培养实践基地建设</li>
                    <li>浙江省产学协同育人项目-区块链创新实践课程改革</li>
                    <li>教育部产学协同育人项目-腾讯微信小程序开发课程改革</li>
                    </ol>
                    <p> <strong>指导本科生成果</strong></p>
                    <ol>
                    <li>腾讯微信事业部U计划《杭电职业规划小程序》</li>
                    <li>全国服务外包大赛二等奖（2019、2018）、三等奖(2019、2017)</li>
                    <li>浙江省新苗计划(2017、2016、2014)、国家级大学生创新训练项目(2013)</li>
                    </ol>
                    <h2 id="课程简介"><a href="#课程简介" class="headerlink" title="课程简介"></a>课程简介</h2><p><strong>1.课程概述</strong></p>
                    <p>面向下一代互联网，以区块链应用（智能财务、金融科技）的设计与开发为主要内容。</p>
                    <p><em>在本学期末即 <strong>01-27</strong> 号，正在开设由我讲授、面向卓越学院的短学期课程《区块链技术应用与实践》</em> <em><a target="_blank" rel="noopener" href="https://www.yuque.com/hdu/blockchain">https://www.yuque.com/hdu/blockchain</a></em> <em>欢迎有兴趣入班的同学旁听体验_</em>(<strong>因资源有限，仅限名额 <strong>3</strong> 名</strong>)_</p>
                    <p><strong>2.教学安排</strong></p>
                    <ol>
                    <li>创一</li>
                    </ol>
                    <p>掌握区块链基础知识；了解现代软件开发的基础概念、工具、流程与环境(linux)；</p>
                    <ol start="2">
                    <li>创二</li>
                    </ol>
                    <p>结合区块链技术的特点，结合智能财务、金融科技等应用领域，策划和设计简单的区块链应用，编写基础的智能合约。</p>
                    <ol start="3">
                    <li>创三</li>
                    </ol>
                    <p>深入理解和掌握区块链应用开发的一般概念、工具、流程与环境，深入学习区块链应用的各类案例，并能基本的复制实现</p>
                    <ol start="4">
                    <li>创四</li>
                    </ol>
                    <p>基于区块链技术和平台，深入地挖掘智能财务、金融科技等应用领域的需求，综合前、后端技术，设计和实现一个功能较为完整、有所创新的区块链应用</p>
                    </div>
                </div>
            </el-card>
        </el-main>
        <el-aside style="width: 20%"></el-aside>
      </el-container>

    
  </div>
</template>

<script>
export default {
  name: 'person',
}
</script>

<style>
 .el-aside {
    height: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
 }
</style>
