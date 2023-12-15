<script setup lang="ts">
import { layoutHierarchy } from '@/components/welcome/hierarchy.ts'
import uiStore from '@/store/modules/uiStore.ts'
import { onMounted, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const store = uiStore()
const route = useRoute()
const router = useRouter()

const state = reactive({
  panelOptions: layoutHierarchy.getPanels(),
})

const selectMenu = ({ key }) => {
  router.push({ name: key })
}
</script>

<template>
  <a-menu v-model:selectedKeys="store.panelKeys" :items="state.panelOptions"
          @click="selectMenu" mode="horizontal" theme="dark" />
</template>

<style scoped lang="scss">

</style>
