import { Inter } from 'next/font/google'
import './globals.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartSimple, faUser, faPersonRunning } from '@fortawesome/free-solid-svg-icons'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Inventory Management System',
  description: 'Streamline and optimize the tracking, control, and organization of inventory levels',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-white text-white ${inter.className}`}>
        {/* Navbar */}
        <nav className="fixed w-56 h-screen bg-slate-900 shadow-md">
          <h1 className='m-4 font-semibold'>Inventory Management System (IMS)</h1>
          <hr className="h-px my-4 border-0 bg-gray-700"/>
          <div className="m-4 grid grid-cols-1 gap-2">
            <div className="group px-4 py-2 rounded-md hover:bg-slate-800">
              <FontAwesomeIcon icon={faChartSimple} className="group-hover:text-cyan-600 w-4 inline mr-4"/>
              <h2 className="font-bold inline">Overview</h2> 
            </div>
            <div className="group px-4 py-2 rounded-md hover:bg-slate-800">
              <FontAwesomeIcon icon={faUser} className="group-hover:text-cyan-600 w-4 inline mr-4"/>
              <h2 className="font-bold inline">Account</h2> 
            </div>
          </div>
          <div className="bottom-6 px-4 py-2 left-4 right-4 absolute bg-cyan-700/50 rounded-lg hover:bg-red-500">
            <FontAwesomeIcon icon={faPersonRunning} className="w-4 inline mr-4"/>
            <h2 className="font-bold inline">Logout</h2> 
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
