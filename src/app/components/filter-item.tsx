import { ActionTypes } from '../reducers/ediction'
import { getImageFromPixels } from '../utils/get-image-from-pixels'

interface FilterItemProps {
  filter: any
  callback: any
}

export function FilterItem({ filter, callback }: FilterItemProps) {
  return (
    <li key={filter.type} className="text-center" onClick={callback}>
      <Image
        width={32}
        height={32}
        alt=""
        src={getImageFromPixels(filter.action(editionState.imageEdited)).src}
        className="h-32 w-h-32 mb-2"
      />
      <strong>{filter.type}</strong>
    </li>
  )
}
