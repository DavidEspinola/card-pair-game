import emojis from 'emojis-list'

// Based on https://stackoverflow.com/a/45576797
export function getSupportedEmojis() {
    const ctx = document.createElement("canvas").getContext("2d")!
    ctx.canvas.width = ctx.canvas.height = 1
    return emojis.filter(emoji => {
        // Check if the browser draws a colored pixel in the center of the emoji
        ctx.fillText(emoji, -4, 4)
        const canRenderEmoji = ctx.getImageData(0, 0, 1, 1).data[3] > 0

        // Check if the browser doesn't draw a second emoji because doesn't support that variation
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillText(emoji, -18, 4);
        const supportsEmojiVariation = ctx.getImageData(0, 0, 1, 1).data[3] === 0
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

        return canRenderEmoji && supportsEmojiVariation
    })
}