import Image from 'next/image'
import { UploadImage } from './components/upload-image'

export default function Home() {
  return (
    <main className="min-h-screen items-center justify-center flex">
      <UploadImage />
    </main>
  )
}
