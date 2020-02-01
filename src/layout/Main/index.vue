<template>
  <div class="main-container">
    <div class="main-inner">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-container {
  padding: 10px;
  display: flex;
  .main-inner {
    background-color: #fff;
    padding: 10px;
    flex: 1;
  }
}
</style>