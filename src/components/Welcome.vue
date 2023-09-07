<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const state = reactive({
  selectedKeys: ['Home']
})

onMounted(() => {
  router.push({ name: 'Home' })
})

const onSelectPanel = ({ key }: { key: string }) => {
  router.push({ name: key })
}
</script>

<template>
  <a-layout class="layout">
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu v-model:selectedKeys="state.selectedKeys" theme="dark" mode="horizontal" @click="onSelectPanel">
        <a-menu-item key="Home">nav 1</a-menu-item>
        <a-menu-item key="Foo">nav 2</a-menu-item>
        <a-menu-item key="Bar">nav 3</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content>
      <a-card style="height: 100%">
        <router-view />
      </a-card>
    </a-layout-content>
    <a-layout-footer class="footer">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>

<style scoped>
.logo {
  width: 120px;
  height: 31px;
  background-image: url('@/assets/vue.svg');
  background-size: contain;
  background-repeat: no-repeat;
  margin: 16px 24px 16px 0;
  float: left;
}
.layout {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.header {
  height: 64px;
}
.footer {
  text-align: center;
  height: 64px;
}
</style>
