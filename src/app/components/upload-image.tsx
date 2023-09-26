'use client'

import { useForm } from "react-hook-form";
import { Button } from "./ui/button";

export function UploadImage() {
  const { register } = useForm()

  return (
    <div className="z-10 max-w-5xl justify-between text-sm lg:flex flex-col text-zinc-500">

        <div className='border-2 border-zinc-500 border-dashed text-zinc-100 mx-auto p-24 rounded-3xl '>
          <h1 className='text-3xl'>
            Arraste uma imagem até aqui
          </h1>
        </div>

        <input type="file" name="" id="" />

        <div className='mt-8 flex gap-2 items-center'>
          <p>ou faça upload do seus arquivos</p> <Button className="bg-zinc-700  text-sm rounded-full">Buscar</Button>
        </div>
      </div>
  )
}