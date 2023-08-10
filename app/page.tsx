import Image from 'next/image'

export default function Home() {
  return (
    <div className="grid grid-cols-12 h-full">
      <div className="col-span-1">gap</div>

      <div className="grid grid-rows-4 col-span-10">
        <div className="bg-blue">highlight</div>
        <div className="bg-pink">search</div>
        <div className="bg-purple">other happy hours</div>
        <div className="bg-yellow">maybe a map</div>
      </div>

      <div className="col-span-1">gap</div>
    </div>
  )
}
