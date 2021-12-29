import React from 'react'
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation
} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import ForgotPasswordPage from '../pages/ForgotPasswordPage'
import Loginpage from '../pages/Loginpage'
import NotfoundPage from '../pages/NotfoundPage'
import Profilepage from '../pages/Profilepage'
import Registerpage from '../pages/Registerpage'
import ResetPasswordPage from '../pages/ResetPasswordPage'
import Modspage from '../pages/Modspage'
import NewMods from '../pages/NewMods'




export default function AppRouter(props) {
  return (
  <>
  <Router>
  <Routes>
  <Route  path='/login' element={<Loginpage />} />
  <Route  path='/register' element={<Registerpage />} />
  <Route  path='/forgot-password' element={<ForgotPasswordPage />} />
  <Route  path='/reset-password' element={<ResetPasswordPage />} />
  <Route  path='*' element={<NotfoundPage />} />
     <Route element={<ProtectedRoute />}>
      <Route path="/profile" element={<Profilepage />} />
      <Route  path='/mods' element={<Modspage />} />
      <Route  path='/addmods' element={<NewMods />} />
    </Route>
  </Routes>
</Router>
</>
  )
}


function ProtectedRoute(props) {
  const { currentUser } = useAuth()
  const { path } = props
  console.log('path', path)
  const location = useLocation()
  console.log('location state', location.state)

  if (
    path === '/login' ||
    path === '/register' ||
    path === '/forgot-password' ||
    path === '/reset-password'
  ) {
    return currentUser ? (
      <Navigate to={location.state?.from ?? '/profile'} />
    ) : (
      <Route {...props} />
    )
  }
  return currentUser ? (
    <Route {...props} />
  ) : (
    <Navigate
      to={{
        pathname: '/login',
        state: { from: path },
      }}
    />
  )
}

