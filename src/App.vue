<script setup lang="ts">
import LevelComponent from './components/LevelComponent.vue'

</script>

<template>
  <LevelComponent :cards="8" :lives="4" />
</template>

<style lang="sass">
  #app
    display: flex
    flex-grow: 1
    justify-content: center

</style>
