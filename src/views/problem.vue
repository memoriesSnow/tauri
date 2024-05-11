<script>
import Content from '../components/public.vue'
export default {
  components: {
    Content
  },
  setup () {
    const title = '开发中可能遇到的坑'
    return {
      title
    }
  }
}
</script>
<template>
  <div class="problem">
    <Content :title="title">
      <div>
        <p>1.前后端,端口号一致</p>
        <p>2.配置文件(vite.config.js)配置,自己使用框架相对应配置</p>
      </div>
    </Content>
  </div>
</template>
