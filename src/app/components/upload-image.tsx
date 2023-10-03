'use client'

import { EditionContextProvider } from '../contexts/EditionContext'
import { Editor } from './editor'
import { Button } from './ui/button'

import { ChangeEvent, useState } from 'react'

export function UploadImage() {
  const [imageURL, setImageURL] = useState<File | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleUploadImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0]
      setImageURL(file)
    }
  }

  const handleDragEnter = () => {
    setIsDragging(true)
  }

  const handleDragOut = () => {
    setIsDragging(false)
  }

  if (imageURL) {
    return (
      <EditionContextProvider image={imageURL}>
        <Editor image={imageURL} />
      </EditionContextProvider>
    )
  }

  return (
    <div className="z-10 max-w-5xl justify-between text-sm lg:flex flex-col text-zinc-500">
      <label>
        <div
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragOut}
          className={`border-2 cursor-pointer ${
            isDragging
              ? 'border-green-500 bg-green-500 bg-opacity-5'
              : 'border-zinc-500 border-dashed'
          } transition text-zinc-100 mx-auto p-24 rounded-3xl`}
        >
          <h1 className="text-2xl">Arraste uma imagem até aqui</h1>
        </div>
        <input className="hidden" type="file" onChange={handleUploadImage} />
      </label>

      <div className="mt-4 flex gap-2 justify-center items-center">
        <p>ou faça upload do seus arquivos</p>
        <Button className="bg-zinc-700 hover:bg-zinc-800  text-sm rounded-full">
          Buscar
        </Button>
      </div>
    </div>
  )
}
