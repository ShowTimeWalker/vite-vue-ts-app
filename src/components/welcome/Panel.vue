<script setup lang="ts">
import { layoutHierarchy } from '@/components/welcome/hierarchy.ts'
import uiStore from '@/store/modules/uiStore.ts'
import { reactive } from 'vue'

const store = uiStore()

const state = reactive({
  panelOptions: layoutHierarchy.panels.map(p => p.name)
})

</script>

<template>
  <a-menu v-model:selectedKeys="store.panelKey" mode="horizontal" theme="dark">
    <a-menu-item v-for="name in state.panelOptions" :key="name">{{ name }}</a-menu-item>
  </a-menu>
</template>

<style scoped lang="scss">

</style>
