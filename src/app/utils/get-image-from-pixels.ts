export function getImageFromPixels(pixels: ImageData) {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  canvas.width = pixels.width
  canvas.height = pixels.height

  if (ctx) {
    ctx.putImageData(pixels, 0, 0)
    return canvas.toDataURL()
  }
}
