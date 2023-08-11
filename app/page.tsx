import SelectMenu from './components/select-day-menu'
import HappyHourCards from './components/cards-happy-hour'

export default function Home() {
  return (
    <div className="grid grid-cols-12 h-full">
      <div className="col-span-2"></div>
      {/* --------------------------------------------MAIN-------------------------------------------------- */}
      <div className="grid grid-cols-1 col-span-8">

        <div className="flex justify-center">
          <div className="w-2/4 flex flex-col justify-center">
            <img className="py-3 rounded" style={{height: '40vh', objectFit: "cover"}} src="/highlight.jpg" alt="hilight of the day" />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-2/4 flex flex-col justify-center text-center my-10">
            < SelectMenu />
          </div>
        </div>


        <div className="">
          <HappyHourCards />
        </div>

        <div className=""></div>
      </div>
      {/* ------------------------------------------------------------------------------------------------ */}
      <div className="col-span-2"></div>
    </div>
  )
}
