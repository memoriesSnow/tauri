<script>
import Content from '../components/public.vue'
import { ref } from 'vue'
import { invoke } from '@tauri-apps/api'
export default {
  components: {
    Content
  },
  setup(){
    const title = 'Quick Start with Vite'
    let name = ref('')
    function sayhello(){
      invoke('greet',{name:'Xue'}).then(res=>name.value = res)
    }
    return {
      title,
      sayhello,
      name
    }
  }
}
</script>
<template>
  <div class="start">
    <Content :title="title">
      <p>
        Tauri 由一个可搭配任何前端来构建桌面应用的框架和 Rust 核心构成。 每个应用均由两个部分组成：
      </p>
      <div>
        <p class="order">1.创建窗口并向其提供原生功能支持的 Rust 二进制文件</p>
        <p class="order">2.由您选择的前端框架，用于编写窗口内的用户界面</p>
      </div>
      <h3>Vue + Tauri</h3>
      <div class="huge-box">
        <div class="huge-box-item">  
          <p>方式一：npm create tauri-app</p>
          <p class="order">1.Project name</p>

          <p class="order">2.Choose which language to use for your fronted</p>
          <p class="order2">>JavaScript/TypeScript  </p>
          <p class="order2">>Rust</p>

          <p class="order">3.Choose your package manager</p>
          <p class="order2">pnpm / yarn / npm </p>

          <p class="order">4.Choose your UI template</p>
          <p class="order2">Vanilla / Vue / Svelte / React / Solid / Angular</p>

          <p class="order">5.Choose your UI flavor</p>
          <p class="order2">TypeScript / JavaScript</p>
        </div>
        <div class="huge-box-item">
          <p>方式二：分别创建</p>
          <div class="order">1.创建前端：npm create vite@latest</div>
          <div class="order">2.创建Rust：npm install --save-dev @tauri-apps/cli</div>
          <div class="order">3.package.json - "scripts" add "tauri":"tauri"</div>
          <div class="order">4.npm run tauri init -- >>> 创建scr-tauri</div>
          <div class="order">5.npm run tauri dev</div>
        </div>
      </div>
      <div class="src-tauri">
        <h3>src-tauri</h3>
        <!-- Cargo.toml -->
        <div>
          <code>Cargo.toml(package.json)</code>
          <p>Cargo 的清单文件。 您可以声明您应用所依赖的 Rust 包和应用的元数据等等。 要查看所有可修改的值，请参阅 Cargo 清单格式。</p>
        </div>
        <!-- tauri.conf.json -->
        <div>
          <code>tauri.conf.json</code>
          <p>此文件可让您自定义 Tauri 应用的各方各面，包括应用名称到允许的 API 列表。 请参阅 Tauri 的 API 配置来深入了解每个支持的选项。</p>
        </div>
        <!-- src/main.rs -->
        <div>
          <code>src/main.rs</code>
          <p>这是你的 Rust 程序的入口，也是我们启动 Tauri 的地方。 您可以发现它由两个部分组成</p>
        </div>
      </div>

      <div class="command">
        <h3>指令</h3>
        <p>Tauri 为您的前端开发提供了其他系统原生功能。 我们将其称作指令，这使得您可以从 JavaScript 前端调用由 Rust 编写的函数。 由此，您可以使用性能飞快的 Rust 代码处理繁重的任务或系统调用。</p>
        <p>一个指令等于一个普通的 Rust 函数，只是还加上了 #[tauri::command] 宏来让其与您的 JavaScript 环境交互</p>
      </div>
      <div class="command-test">
        <el-button type="primary" @click="sayhello">问候</el-button>
        <p>{{ name }}</p>
      </div>
    </Content>
  </div>
</template>
<style scoped>
.order {
  text-indent: 2em;
  line-height: 2em;
}
.order2 {
  line-height: 2em;
  text-indent: 3em;
}
h3 {
  margin: 20px 0;
}
.huge-box {
  display: flex;
  justify-content: space-around;
}
.huge-box-item{
  width:40%;
}
code {
  padding:5px 0;
}
</style>
