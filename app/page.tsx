import SelectMenu from './components/select-day-menu'
import MiniSectionCards from './components/mini-section-cards'

export default function Home() {
  return (
    <div className="grid grid-cols-12 h-full">
      <div className="col-span-2"></div>
      {/* --------------------------------------------MAIN-------------------------------------------------- */}
      <div className="grid grid-cols-1 col-span-8">

        <div className="bg-pink flex justify-center">
          <div className="bg-green w-2/4 flex flex-col justify-center">
            <img src="/highlight.jpg" alt="hilight of the day" />
          </div>
        </div>

        <div className="bg-blue flex justify-center">
          <div className="bg-primary w-2/4 flex flex-col justify-center text-center">
            < SelectMenu />
          </div>
        </div>


        <div className="">
          <MiniSectionCards />
        </div>

        <div className="bg-yellow">maybe a map</div>
      </div>
      {/* ------------------------------------------------------------------------------------------------ */}
      <div className="col-span-2"></div>
    </div>
  )
}
