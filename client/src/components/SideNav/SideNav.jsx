import { Link } from 'react-router-dom'
import './SideNav.css'

const SideNav = () => {
  return (
    <div className="sidenav bg-slate-600 h-full w-[200px] fixed z-[1] top-0 left-0 overflow-x-hidden pt-16">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/announcements">Announcements</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/payments">Fees</Link>
      <Link to="/results">Results</Link>
    </div>
  )
}

export default SideNav