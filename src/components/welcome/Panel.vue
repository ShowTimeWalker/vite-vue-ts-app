<script setup lang="ts">
import { reactive } from 'vue'

const state = reactive({
  selectedKeys: ['Resource']
})

const onSelectPanel = ({ key }) => {
  console.log(key)
}
</script>

<template>
  <a-menu v-model:selectedKeys="state.selectedKeys" theme="dark"
          mode="horizontal" @click="onSelectPanel">
    <a-menu-item key="Resource">Resource</a-menu-item>
    <a-menu-item key="Apis">Apis</a-menu-item>
    <a-menu-item key="History">History</a-menu-item>
  </a-menu>
</template>

<style scoped lang="scss">

</style>
