interface EditorProps {
  image: string
}

export function Editor({ image }: EditorProps) {
  return (
    <div className="grid grid-cols-4 w-full max-h-screen min-h-screen">
      <aside className="p-12">
        <strong>Funções</strong>
      </aside>
      <div className="col-span-2 border border-zinc-800 border-t-0">
        <div className="p-12 flex justify-center">
          <img src={image} />
        </div>
        <div className="border-t border-zinc-800 p-12 bg-zinc-950 w-full">
          <h2>Filtros</h2>
          <ul className="mt-4 flex gap-4">
            <li className="text-center">
              <img src={image} className="h-32 w-h-32 mb-2" />
              <strong>Sepia</strong>
            </li>

            <li>
              <img src={image} className="h-32 w-h-32" />
            </li>

            <li>
              <img src={image} className="h-32 w-h-32" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
