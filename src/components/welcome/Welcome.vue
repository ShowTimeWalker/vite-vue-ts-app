<script setup lang="ts">
import { toCapital } from '@/components/utils/stringHelper.ts'
import Footer from '@/components/welcome/Footer.vue'
import Main from '@/components/welcome/Main.vue'
import Header from '@/components/welcome/Panel.vue'
import Logo from '@/components/welcome/Logo.vue'
import Profile from '@/components/welcome/Profile.vue'
import SideBar from '@/components/welcome/SideBar.vue'
import uiStore from '@/store/modules/uiStore.ts'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const ui = uiStore()

onMounted(() => {
  const panelPath = route.path.split('/')[1]
  ui.panelKeys = [toCapital(panelPath)]
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
</style>
