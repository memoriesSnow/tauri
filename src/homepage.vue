<script>
console.log(window.__TAURI__);
import { useRouter } from 'vue-router'
export default {
  setup () {
    const router = useRouter()
    const goPage = (path) => {
      router.push('/' + path)
      console.log(router)
    }
    const menuList = [
      {
        title:'什么是Tauri',
        path:'/what'
      },
      {
        title:'预先准备',
        path:'/prepare'
      },
      {
        title:'快速开始',
        path:'/start'
      },
      {
        title:'与Electron比较',
        path:'/compare'
      },
      {
        title:'问题分享',
        path:'/problem'
      }
    ]
    return {
      goPage,
      menuList,
    }
  }
}
</script>
<template>
  <div class="homepage">
    <header>Tauri</header>
    <div class="content-box">
      <nav>
        <ul>
          <li v-for="item in menuList" :key="item.path">
            <router-link :to="item.path">{{item.title}}</router-link>
          </li>
        </ul>
      </nav>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<style scoped>
.homepage{
  display:flex;
  flex-direction: column;
  height:100vh;
}
/* 头部 */
header {
  padding: 20px 0 20px 30px;
  font-size:40px;
  font-weight:550;
  border-bottom:solid 1px;
}
/** 内容盒子 */
.content-box{
  flex:1;
  background:#fff;
  display:flex;
  height:calc(100% - 65px);
}
/** 导航栏 */
nav{
  padding:10px 0;
  min-width:260px;
  background:#f8f6f3;
}
ul{
  padding:10px;
  font-size:20px;
}
li{
  margin:10px 0;
  padding-left:20px;
}
a{
  color:#444;
}
a:hover{
  color:#3580ea
}
/** 内容 */
.content{
  padding:40px;
  flex:1;
  overflow-y:auto;
}
</style>
