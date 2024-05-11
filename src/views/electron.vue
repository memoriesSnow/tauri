<template>
  <div class="electron">
    <p>Electron简介：</p>
    <p>Electron是一个使用 JavaScript、HTML 和 CSS 构建桌面应用程序的框架。嵌入 Chromium 和 Node.js ,Electron 允许您使用JavaScript代码创建 在Windows,macOS和Linux上运行的跨平台应用</p>
    <p>V8引擎解析JS代码</p>
    <p>VS code 就是用Electron开发的</p>
  </div>
  <div>
    <div>1.应用大小 <br />
      <p class="indent">一个简单的Tauri的应用程序安装包只有几MB,electron应用(无内容)就会有50MB以上</p>
    </div>
    <div>2.启动时间 <br />
      <p class="indent">Tauri更快</p>
    </div>
    <div>3.性能(内存占用) <br />
      <p class="indent">Tauri更好</p>
    </div>
    <div>4.应用后端<br />
      <p class="indent">Tauri - Rust </p>
      <p class="indent">Electron - Node.js</p>
    </div>
    <div>5.应用渲染<br />
      <p class="indent">Tauri：Webview2 -- Windows(Chromium)/Linux(WebKitGTK)/macOS(Webkit)存在兼容性问题</p>
      <p class="indent">Electron：Chromium -- 在不同系统展示相同的内容</p>
    </div>
    <div>6.安全性<br />
      <p class="indent">Tauri：内置一些安全功能:可以启用或禁用一些API,打包应用程序为二进制文件,不易逆向破解</p>
      <p class="indent">Electron：可访问全部Node API,容易被攻击,打包应用程序可用npm命令解压缩</p>
    </div>
    <div>7.开发者经验<br />
      <p class="indent">Tauri：可供js调用api较少,想充分使用后端,需要熟悉rust语言 (main.rs)</p>
      <p class="indent">Electron：封装了大量js可调用api,对于前端开发比较友好 (main.js)</p>
    </div>
  </div>
</template>
<style>
.indent {
  text-indent: 2em;
}
</style>