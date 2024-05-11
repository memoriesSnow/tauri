<script>
export default {
  props:{
    title:{
      type:String,
      default:'title'
    },
    content:{
      type:Array,
      default: () => []
    }
  }
}
</script>
<template>
  <!-- 公用组件 -->
  <div class="public">
      <h2 class="title">{{title}}</h2>
      <div class="public-content">
        <p v-for="item in content" :key="item">{{ item }}</p>
      </div>
      <slot></slot>
  </div>
</template>
<style>
.public{
  height:100%;
  overflow-y:auto;
}
.title{
  margin-bottom: 20px;
}
</style>