<script setup lang="ts">
import Footer from '@/components/welcome/Footer.vue'
import Main from '@/components/welcome/Main.vue'
import Header from '@/components/welcome/Panel.vue'
import Logo from '@/components/welcome/Logo.vue'
import Profile from '@/components/welcome/Profile.vue'
import SideBar from '@/components/welcome/SideBar.vue'
import { onMounted } from 'vue'

onMounted(() => {

})

</script>

<template>
  <a-layout class="layout">
    <a-layout-header class="header">
      <Logo class="logo" />
      <Header class="panel" />
      <Profile class="profile" />
    </a-layout-header>

    <a-layout-content class="content">
      <SideBar class="sidebar" />
      <Main class="main" />
    </a-layout-content>

    <a-layout-footer class="footer">
      <Footer />
    </a-layout-footer>
  </a-layout>
</template>

<style scoped lang="scss">
@import './layout.scss';

.layout {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.header {
  height: $header-height;
  display: flex;

  .logo {
    width: $left-width;
  }

  .panel {
    width: $middle-width;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .profile {
    width: $right-width;
  }
}

.content {
  display: flex;

  .sidebar {
    width: $sidebar-width;
  }

  .main {
    width: $main-width;
  }
}

.footer {
  height: 64px;
  text-align: center;
}
</style>
