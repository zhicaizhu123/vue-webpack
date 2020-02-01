<template>
  <div class="page">
    <layout-header class="page-header"></layout-header>
    <div class="page-main">
      <layout-sidebar class="page-sidebar"></layout-sidebar>
      <div class="page-content">
        <layout-main class="page-content__main"></layout-main>
        <layout-footer></layout-footer>
      </div>
    </div>
  </div>
</template>

<script>
import LayoutHeader from './Header'
import LayoutSidebar from './Sidebar'
import LayoutMain from './Main'
import LayoutFooter from './Footer'

export default {
  components: {
    LayoutHeader,
    LayoutSidebar,
    LayoutMain,
    LayoutFooter
  }
}
</script>

<style lang="scss" scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f3f4f5;
  &-header {
    height: 60px;
    flex: 0 0 60px;
    position: relative;
    z-index: 1;
  }
  &-main {
    flex: 1;
    display: flex;
    .page-sidebar {
      width: 280px;
      flex: 0 0 280px;
      background-color: #fff;
    }
    .page-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      &__main {
        min-height: calc(100vh - 100px);
        // flex: 1;
      }
    }
  }
}
</style>