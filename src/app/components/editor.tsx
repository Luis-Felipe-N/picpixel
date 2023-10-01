import { useEffect, useReducer, useState } from 'react'
import { ActionTypes, editionReducer } from '../reducers/ediction'
import { getPixelsFromImage } from '../utils/get-pixels-from-image'
import image from 'next/image'
import sepia from '../lib/filters/sepia'
import { getImageFromPixels } from '../utils/get-image-from-pixels'

interface EditorProps {
  image: File
}

export function Editor({ image }: EditorProps) {
  const [editionState, dispatch] = useReducer(editionReducer, {
    sepia: false,
  })

  const imageURL =
    editionState.imageEdited && getImageFromPixels(editionState.imageEdited).src

  useEffect(() => {
    getPixelsFromImage(image, (pixels: ImageData) => {
      dispatch({ type: ActionTypes.ADD_INITIAL_IMAGE, payload: pixels })
      dispatch({ type: ActionTypes.UPDATE_EDIT_IMAGE, payload: pixels })
    })
  }, [image])

  useEffect(() => {
    if (editionState.imageInitial instanceof ImageData) {
      if (editionState.sepia) {
        dispatch({
          type: ActionTypes.ADD_INITIAL_IMAGE,
          payload: sepia(editionState.imageInitial),
        })
      }
    }
  }, [editionState])

  return (
    <div className="grid grid-cols-4 w-full max-h-screen min-h-screen">
      <aside className="p-12">
        <strong>Funções</strong>
      </aside>
      <div className="max-h-screen col-span-2 flex flex-col border border-zinc-800 border-t-0">
        <div className="p-12 flex flex-1 items-center justify-center">
          <img className="w-full max-h-full" src={imageURL} />
        </div>
        <div className="border-t border-zinc-800 p-12 bg-zinc-950 w-full">
          <h2>Filtros</h2>
          <ul className="mt-4 flex gap-4">
            <li
              className="text-center"
              onClick={() => dispatch({ type: ActionTypes.SET_FILTER_SEPIA })}
            >
              <img src={imageURL} className="h-32 w-h-32 mb-2" />
              <strong>Sepia</strong>
            </li>

            <li>
              <img src={imageURL} className="h-32 w-h-32" />
            </li>

            <li>
              <img src={imageURL} className="h-32 w-h-32" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
