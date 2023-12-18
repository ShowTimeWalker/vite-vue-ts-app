<script setup lang="ts">
import { rest } from '@/utils/rest.ts'

const testRest = () => {
  rest
      .setHeaders({
        'Content-Type': 'application/json'
      })
      .setMethod('get')
      .setUrl('https://dev3-portal.xunyou.mobi/api/v1/ios/games/updateLists?a=a1')
      .call()
      .then((res: any) => {
        console.log(res)
      })
}
</script>

<template>
  <a-button type="primary" @click="testRest">Primary Button</a-button>
</template>

<style scoped lang="scss">

</style>
