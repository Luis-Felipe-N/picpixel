import { createContext, ReactNode, useEffect, useReducer } from 'react'
import invert from '../lib/filters/invert'
import sepia from '../lib/filters/sepia'
import { ActionTypes, editionReducer } from '../reducers/ediction'
import { getPixelsFromImage } from '../utils/get-pixels-from-image'

interface EditionContextType {
  setFilter: (type: string) => void
  imageInitial: ImageData | null
  imageEdited: ImageData | null
  image: File
  filters: {
    type: string
    action: any
    active: boolean
  }[]
}

interface CycleProviderProps {
  children: ReactNode
  image: File
}

export const EditionContext = createContext({} as EditionContextType)

export function EditionContextProvider({
  children,
  image,
}: CycleProviderProps) {
  const [editionState, dispatch] = useReducer(editionReducer, {
    imageInitial: null,
    imageEdited: null,
    editions: {
      filters: [
        {
          type: 'SEPIA',
          action: sepia,
          active: false,
        },
        {
          type: 'NEGATIVO',
          action: invert,
          active: false,
        },
      ],
    },
  })

  useEffect(() => {
    getPixelsFromImage(image, (pixels: ImageData) => {
      dispatch({ type: ActionTypes.ADD_INITIAL_IMAGE, payload: pixels })
      dispatch({ type: ActionTypes.UPDATE_EDIT_IMAGE, payload: pixels })
    })
  }, [image])

  useEffect(() => {
    if (image) {
      editionState.editions.filters.forEach((filter) => {
        if (filter.active) {
          getPixelsFromImage(image, (pixels: ImageData) => {
            dispatch({
              type: ActionTypes.UPDATE_EDIT_IMAGE,
              payload: filter.action(pixels),
            })
          })
        }
      })
    }
  }, [editionState.editions, image])

  function setFilter(type: string) {
    dispatch({
      type: ActionTypes.SET_FILTER,
      payload: type,
    })
  }

  return (
    <EditionContext.Provider
      value={{
        imageInitial: editionState.imageInitial,
        imageEdited: editionState.imageEdited,
        image,
        setFilter,
        filters: editionState.editions.filters,
      }}
    >
      {children}
    </EditionContext.Provider>
  )
}
