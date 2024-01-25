import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import MeterDemand from './MeterDemand'
export default function Home() {
  return (
    <main className="bg-white pl-56 text-black">
      {/* Header */}
      <header className="flex justify-end w-full h-16 shadow-md">
        <FontAwesomeIcon icon={faBell} className="text-gray-500 w-4 inline mr-4"/>
      </header>
      { /* Financial Statistics */}
      <div className="m-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="p-4 rounded-lg shadow-lg">
          <h1 className="font">Budget</h1>
          <p className="text-3xl font-semibold">RM 24k</p>
          <span className="text-green-600">12%</span> Since last month
        </div>
        <div className="p-4 rounded-lg shadow-lg">
          <h1 className="font">Expenses</h1>
          <p className="text-3xl font-semibold">RM 9k</p>
          <span className="text-red-600">-20%</span> Since last month
        </div>
        <div className="p-4 rounded-lg shadow-lg">
          <h1 className="font">Orders</h1>
          <p className="text-3xl font-semibold">1300</p>
          <span className="text-green-600">3%</span> Since last month
        </div>
        <div className="p-4 rounded-lg shadow-lg">
          <h1 className="font">Issues</h1>
          <p className="text-3xl font-semibold">14</p>
          <span>Remaining</span>
        </div>
      </div>
      {/* Meter Demand Chart */}
      <div className="m-6">
        <MeterDemand/>
      </div>
    </main>
  )
}
