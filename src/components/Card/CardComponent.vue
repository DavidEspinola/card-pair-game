<script setup lang="ts">
import { Card } from './Card'

defineProps<{ card: Card }>()

</script>

<template>
  <a href="" class="card">
    <div class="emoji" v-if="card.isVisible">
      <svg viewBox="0 0 16 16">
        <text x="50%" y="50%">{{ card.emoji }}</text>
      </svg>
    </div>
    <span v-else class="back"></span>
  </a>
</template>

<style lang="sass" scoped>
.card
  text-decoration: none
  border-radius: 3%
  border: 1px solid grey
  box-shadow: 2px 5px 16px 0px grey, 5px 5px 15px 5px rgba(0,0,0,0)
  aspect-ratio: 3 / 4
  display: flex
  justify-content: center
  align-items: center
  padding: 5%
  .emoji
    width: 100%
    height: 100%
    svg 
      width: 100%
      height: 100%
      text
        dominant-baseline: central
        text-anchor: middle
        width: 100%
        height: 100%
        
  .back
    width: 100%
    height: 100%
    border-radius: 3%
    background-color: #e5e5f7
    opacity: 0.8
    background-image:  linear-gradient(135deg, #444cf7 25%, transparent 25%), linear-gradient(225deg, #444cf7 25%, transparent 25%), linear-gradient(45deg, #444cf7 25%, transparent 25%), linear-gradient(315deg, #444cf7 25%, #e5e5f7 25%)
    $patternSize: 2vw
    background-position:  $patternSize 0, $patternSize 0, 0 0, 0 0
    background-size: $patternSize $patternSize
    background-repeat: repeat
</style>
