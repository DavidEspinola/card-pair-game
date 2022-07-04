export class Card {
    isVisible = false

    constructor(public emoji: string) { }

    toggleVisibility() {
        this.isVisible = !this.isVisible
    }
}