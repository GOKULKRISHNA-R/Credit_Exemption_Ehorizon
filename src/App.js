import { Routes, Route, BrowserRouter } from 'react-router-dom'
import StaffHome from './staff/Home/StaffHome'
import StaffLogin from './staff/StaffLogin'
import StudentHome from './student/Home/StudentHome'
import StudentLogin from './student/StudentLogin'

export default function App () {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/staffhome" element={<StaffHome />} />
          <Route path="/studenthome" element={<StudentHome />} />
          <Route path="/stafflogin" element={<StaffLogin />} />
          <Route path="/studentlogin" element={<StudentLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
