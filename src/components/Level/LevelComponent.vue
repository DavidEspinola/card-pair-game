<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { reactive, watchEffect } from 'vue';
import { Level } from './Level'
import { wait } from '../../utils/wait';
import CardComponent from '../Card/CardComponent.vue'

const props = defineProps<{ cards: number, lives: number }>()
const level = computed(() => reactive(new Level(props.cards, props.lives)))
const clickableCards = computed(() => level.value.interactive && !level.value.isGameOver && !level.value.isVictory)

watchEffect(async () => {
  if (level.value.isVictory) {
    await wait(500)
    alert('You win!')
    window.location.reload()
  } else if (level.value.isGameOver) {
    await wait(500)
    alert('Game over. Try again!')
    window.location.reload()
  }
})

</script>

<template>
  <div class="level">
    <div class="board">
      <span></span>
      <span>
        <span class="lives">{{ level.lives }}</span> ❤️
      </span>
    </div>
    <div class="card-grid">
      <CardComponent v-for="(card, index) in level.cards" :key="index" :card="card"
        @click.prevent="clickableCards ? level.selectCard(card) : () => { }" />
    </div>
  </div>
</template>

<style lang="sass" scoped>
  .level
    width: 100%
    max-width: 1200px
    .board
      margin: 30px 15px
      display: flex
      flex-wrap: wrap
      justify-content: space-between
      font-family: Helvetica, sans-serif
      .lives
        font-size: 20px
        color: red
    .card-grid
      display: grid
      gap: 20px
      margin: 15px
      grid-template-columns: repeat(4, 1fr)
      @media screen and (max-width: 500px)
        grid-template-columns: repeat(2, 1fr)
</style>
