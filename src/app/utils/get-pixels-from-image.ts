export function getPixelsFromImage(image: File, callback: any) {
  const _image = new Image()
  _image.crossOrigin = 'Anonymous'
  _image.onload = () => {
    const canvas = document.createElement('canvas')
    canvas.width = _image.width
    canvas.height = _image.height
    const context = canvas.getContext('2d')
    let imageData: ImageData

    if (context) {
      context.drawImage(_image, 0, 0)
      imageData = context.getImageData(0, 0, _image.width, _image.height)
      callback(imageData)
    }
  }
  _image.src = URL.createObjectURL(image)
}
