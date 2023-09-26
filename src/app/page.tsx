import Image from 'next/image'
import { UploadImage } from './components/upload-image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <UploadImage /> 
    </main>
  )
}
