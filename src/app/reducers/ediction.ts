import { Reducer } from 'react'

interface EditionOptions {
  imageInitial: ImageData
  imageEdited: ImageData
  sepia: boolean
  blur: boolean
}

export enum ActionTypes {
  ADD_INITIAL_IMAGE = 'ADD_INITIAL_IMAGE',
  UPDATE_EDIT_IMAGE = 'UPDATE_EDIT_IMAGE',
  SET_FILTER_SEPIA = 'SET_FILTER_SEPIA',
  SET_FILTER_BLUR = 'SET_FILTER_BLUR',
}

export type ReducerAction = {
  type: ActionTypes
  payload?: any
}

export function editionReducer(state: EditionOptions, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_INITIAL_IMAGE:
      return {
        ...state,
        imageInitial: action.payload,
      }
    case ActionTypes.UPDATE_EDIT_IMAGE:
      return {
        ...state,
        imageEdited: action.payload,
      }
    case ActionTypes.SET_FILTER_SEPIA:
      return {
        ...state,
        sepia: true,
      }
    case ActionTypes.SET_FILTER_BLUR:
      return {
        ...state,
        blur: true,
      }

    default:
      return state
  }
}
