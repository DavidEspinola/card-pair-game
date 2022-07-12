<script setup lang="ts">
defineProps<{ emoji: string }>();
</script>

<template>
  <svg viewBox="0 0 16 16">
    <text x="50%" y="50%">{{ emoji }}</text>
  </svg>
</template>

<style lang="sass" scoped>
svg
  width: 100%
  height: 100%
  text
    dominant-baseline: central
    text-anchor: middle
    width: 100%
    height: 100%
</style>
