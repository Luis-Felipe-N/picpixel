import { Console } from 'console'
import { Reducer } from 'react'

interface EditionOptions {
  imageInitial: ImageData | null
  imageEdited: ImageData | null
  editions: {
    filters: {
      type: string
      action: any
      active: boolean
    }[]
  }
}

export enum ActionTypes {
  ADD_INITIAL_IMAGE = 'ADD_INITIAL_IMAGE',
  UPDATE_EDIT_IMAGE = 'UPDATE_EDIT_IMAGE',
  SET_FILTER = 'SET_FILTER',
}

export type ReducerAction = {
  type: ActionTypes
  payload?: any
}

export function editionReducer(state: EditionOptions, action: ReducerAction) {
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
    case ActionTypes.SET_FILTER: {
      const filterUpdated = state.editions.filters.map((filter) => {
        if (action.payload === filter.type) {
          return {
            type: filter.type,
            action: filter.action,
            active: true,
          }
        }
        return filter
      })

      return {
        ...state,
        editions: {
          filters: [...filterUpdated],
        },
      }
    }

    default:
      return state
  }
}
