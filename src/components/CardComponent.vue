<script setup lang="ts">
import { Card } from '../entities/Card'

defineProps<{ card: Card }>()

</script>

<template>
  <a href="" class="card">
    <span v-if="card.isVisible" class="emoji" v-html="card.emoji"></span>
    <span v-else class="back"></span>
  </a>
</template>

<style lang="sass" scoped>
.card
  text-decoration: none
  border-radius: 5px
  border: 1px solid grey
  box-shadow: 2px 5px 16px 0px grey, 5px 5px 15px 5px rgba(0,0,0,0)
  aspect-ratio: 3 / 4
  display: flex
  justify-content: center
  align-items: center
  padding: 10px
  .emoji
    font-size: 150px
  .back
    width: 100%
    height: 100%
    border-radius: 5px
    background-color: #e5e5f7
    opacity: 0.8
    background-image:  linear-gradient(135deg, #444cf7 25%, transparent 25%), linear-gradient(225deg, #444cf7 25%, transparent 25%), linear-gradient(45deg, #444cf7 25%, transparent 25%), linear-gradient(315deg, #444cf7 25%, #e5e5f7 25%)
    background-position:  40px 0, 40px 0, 0 0, 0 0
    background-size: 40px 40px
    background-repeat: repeat
</style>
