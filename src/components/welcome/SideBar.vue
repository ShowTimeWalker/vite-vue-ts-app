<script setup lang="ts">
import { layoutHierarchy } from '@/components/welcome/hierarchy.ts'
import uiStore from '@/store/modules/uiStore.ts'

const store = uiStore()
</script>

<template>
    <a-menu v-model:selectedKeys="store.optionKey">
      <a-menu-item v-for="name in layoutHierarchy.getPanelOptions(store.panelKey[0]).map(o => o.name)" :key="name">{{ name }}</a-menu-item>
    </a-menu>
</template>

<style scoped>

</style>
