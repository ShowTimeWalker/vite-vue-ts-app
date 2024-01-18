<script setup lang="ts">
import { ApiProfile } from '@/components/model/ApiProfile.ts'
import { reactive } from 'vue'

const apiList = reactive([
    new ApiProfile('managerGetCoupons', 'list all coupons by manager', '/api/', '')
])
</script>

<template>

</template>

<style scoped lang="scss">

</style>
