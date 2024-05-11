<script>
import Content from '../components/public.vue'
import Electron from './electron.vue'
export default {
  components: {
    Content, Electron
  },
  setup () {
    const title = 'Compare with Electron'
    return {
      title
    }
  }
}
</script>
<template>
  <div class="compare">
    <Content :title="title"
             :content="content">
      <Electron />
    </Content>
  </div>
</template>
