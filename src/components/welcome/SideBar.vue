<script setup lang="ts">
import { layoutHierarchy } from '@/components/welcome/hierarchy.ts'
import uiStore from '@/store/modules/uiStore.ts'
import { computed, onMounted, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const store = uiStore()
const route = useRoute()
const router = useRouter()

const state = reactive({
  selectedKeys: [],
})

const pageOptions = computed(() => {
  return layoutHierarchy.getPages(store.panelKeys)
})

onMounted(() => {

})

const onSelect = ({ key }) => {
  router.push({ name: key })
}
</script>

<template>
    <a-menu v-model:selectedKeys="store.pageKeys" :items="pageOptions" @select="onSelect" />
</template>

<style scoped>

</style>
