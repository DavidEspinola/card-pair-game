import sampleSize from "lodash/sampleSize"
import shuffle from "lodash/shuffle"

import { Card } from '../Card/Card'
import { wait } from "../../utils/wait"
import { getSupportedEmojis } from "../../utils/emojis"

export class Level {
    cards: Card[]
    lives: number
    selectedCard: Card | null = null
    interactive = true
    private cardNum: number


    constructor(cardNum: number, lives: number) {
        if (cardNum % 2 !== 0) throw new Error('cardNum must be an even number')
        this.cardNum = cardNum
        this.lives = lives
        this.cards = this.createCards()
    }

    get isVictory() {
        return this.cards.every(card => card.isVisible)
    }

    get isGameOver() {
        return this.lives === 0
    }

    async selectCard(card: Card) {
        if (!this.interactive) return
        this.interactive = false

        if (!this.selectedCard) {
            this.selectedCard = card
            card.toggleVisibility()
        } else if (this.selectedCard === card) {

        } else if (this.selectedCard.emoji === card.emoji) {
            card.toggleVisibility()
            this.selectedCard = null
        } else {
            card.toggleVisibility()
            this.lives--
            await wait(1000)
            this.selectedCard.toggleVisibility()
            this.selectedCard = null
            card.toggleVisibility()
        }
        this.interactive = true
    }

    private createCards() {
        const emojis = getSupportedEmojis()
        const emojisToshow = sampleSize(emojis, this.cardNum / 2)!

        const pairedCards = emojisToshow.reduce((result, emoji) => {
            result.push(new Card(emoji), new Card(emoji))
            return result
        }, [] as Card[])

        return shuffle(pairedCards)
    }

}