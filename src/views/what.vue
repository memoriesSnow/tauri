<script>
import Content from '../components/public.vue'
export default {
  components: {
    Content
  },
  setup () {
    const content = [
      "Tauri是一个帮助开发人员为主要桌面平台制作应用程序的工具包，几乎可以使用现有的任何前端框架。核心是用Rust构建的，CLI利用Node.js使Tauri成为一种真正的多语言方法来创建和维护优秀的应用程序。",
      "Cargo:Rust的构建系统和包管理器"
    ]
    const title = 'What is Tauri'
    const cardList = [
      {
        title: '开始',
        describe: 'Begin developing your first Tauri app'
      }
    ]
    return {
      content, title, cardList
    }
  }
}
</script>
<template>
  <div class="what">
    <Content :title="title"
             :content="content">
    </Content>
  </div>
</template>