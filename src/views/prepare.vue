<script>
import { ref } from 'vue'

import Content from '../components/public.vue'

import Windows from './text/windows.vue'
import MacOS from './text/macOS.vue'
export default {
  components: {
    Content, Windows, MacOS
  },
  setup () {
    const content = [
      "首先您需要安装 Rust 及其他系统依赖。 请记住，只有在开发 Tauri 应用时才需要此设置。 您程序的用户不需要进行下列操作。"
    ]
    const title = 'Evinronment prepare'
    const activeName = ref('windows')
    return {
      content, title, activeName
    }
  }
}
</script>
<template>
  <div class="prepare">
    <Content :title="title"
             :content="content">
      <el-tabs v-model="activeName"
               class="demo-tabs">
        <el-tab-pane label="windows"
                     name="windows">
          <Windows />
        </el-tab-pane>

        <el-tab-pane label="macOS"
                     name="macOS">
          <MacOS />
        </el-tab-pane>
      </el-tabs>
    </Content>
  </div>
</template>
<style>
.prepare {
  height: 100%;
}
img {
  width: 60%;
}
</style>