import { getImageFromPixels } from '../utils/get-image-from-pixels'
import { useEdition } from '../hooks/useEdition'

export function Editor() {
  const { filters, setFilter, imageInitial, imageEdited } = useEdition()

  if (imageInitial === null || imageEdited === null) return null

  const imageInitialURL = getImageFromPixels(imageInitial)
  const imageEditedURL = getImageFromPixels(imageEdited)

  console.log(`a`)
  return (
    <div className="grid grid-cols-4 w-full max-h-screen min-h-screen">
      <aside className="p-12">
        <strong>Funções</strong>
      </aside>
      <div className="max-h-screen col-span-2 flex flex-col border border-zinc-800 border-t-0">
        <div className="p-12 flex flex-1 items-center justify-center">
          <img className="w-full max-h-full" src={imageEditedURL} />
        </div>
        <div className="border-t border-zinc-800 p-12 bg-zinc-950 w-full">
          <h2>Filtros</h2>
          <ul className="mt-4 flex gap-4">
            {imageInitialURL &&
              filters.map((filter) => (
                <li
                  key={filter.type}
                  className="text-center"
                  onClick={() => setFilter(filter.type)}
                >
                  <img
                    width={128}
                    height={128}
                    alt=""
                    src={getImageFromPixels(
                      filter.action(
                        new ImageData(
                          imageEdited.data,
                          imageEdited.height,
                          imageEdited.width,
                          {
                            colorSpace: imageEdited.colorSpace,
                          },
                        ),
                      ),
                    )}
                    className="h-32 w-h-32 mb-2 object-contain"
                  />
                  <strong>{filter.type}</strong>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
