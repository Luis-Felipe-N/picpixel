import { useContext } from 'react'
import { EditionContext } from '../contexts/EditionContext'

export function useEdition() {
  const value = useContext(EditionContext)
  return value
}
