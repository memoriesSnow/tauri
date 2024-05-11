<script setup>
import winInstall from '../../assets/vs-install.png'
</script>
<template>
  <div class="windows-install block">
    <h3>Windows</h3>
    <!-- Microsoft 2022 -->
    <div class="micorsoft">
      <h4>1. Microsoft Visual Studio C++ 生成工具</h4>
      <p>您需要安装 Microsoft C++ 生成工具。 最简单的方法是下载
        <a href="https://visualstudio.microsoft.com/zh-hans/visual-cpp-build-tools/"
           target="_blank">Visual Studio 2022 生成工具</a>。
        进行安装选择时，请勾选 "C++ 生成工具" 和 Windows 10 SDK。
      </p>
      <img :src="winInstall"
           alt="图呢?">
    </div>
    <!-- webview2 -->
    <div class="webview2">
      <h4>2. WebView2</h4>
      <p>Tauri 需要 WebView2 才能在 Windows 上呈现网页内容，所以您必须先安装 WebView2。 最简单的方法是从微软网站下载和运行常青版引导程序。</p>
      <p>安装脚本会自动为您下载适合您架构的版本。 不过，如果您遇到问题 (特别是 Windows on ARM)，您可以自己手动选择正确版本。</p>
    </div>
    <!-- Rust -->
    <div class="rust">
      <h4>3. Rust</h4>
      <p>最后，请前往
        <a href="https://www.rust-lang.org/zh-CN/tools/install"
           target="_blank">https://www.rust-lang.org/zh-CN/tools/install</a>
        来安装 rustup (Rust 安装程序)。 请注意，为了使更改生效，您必须重新启动终端，在某些情况下需要重新启动 Windows 本身。
      </p>
      <p>或者，您可以在 PowerShell 中使用 winget 命令安装程序：</p>
      <code>PS C:\ winget install --id Rustlang.Rustup</code>
    </div>
  </div>
</template>
<style>
.block {
  margin: 10px 0;
  line-height: 2em;
}
</style>