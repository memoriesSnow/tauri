<script setup>
import winInstall from '../../assets/vs-install.png'
</script>
<template>
  <div class="macOS-install block">
    <h3>macOS</h3>
    <!-- CLang 和 macOS -->
    <div>
      <h4>1. CLang 和 macOS 开发依赖项</h4>
      <p>您将需要安装 CLang 和 macOS 开发依赖项。 为此，您需要在终端中执行以下命令：</p>
      <code>$ xcode-select --install</code>
    </div>
    <!-- Rust -->
    <div class="rust">
      <h4>2. Rust</h4>
      <p>要在 macOS 上安装 Rust，请打开终端并输入以下命令：</p>
      <code>$ curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh</code>
    </div>
  </div>
</template>
<style>
.block {
  margin: 10px 0;
  line-height: 2em;
}
</style>