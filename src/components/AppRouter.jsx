import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { publicRoutes, privateRoutes } from '../router/routes'
import { AuthContext } from '../context/context'
import Loader from './UI/Loader/Loader'

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext)
  console.log(isAuth)

  if (isLoading) {
    return <Loader/>
  }
  
  return (
    isAuth ?
    <Routes>
    {privateRoutes.map((route) => {
      return (
      <Route
        key = {route.path}
        path = {route.path}
        element = {<route.element/>}
       />
      )
    })
    }
    <Route path="/*" element={<Navigate to="/posts" replace/>} />
    </Routes>

    :
    
    <Routes>
      {publicRoutes.map((route) => {
        return (
        <Route
          key = {route.path}
          path = {route.path}
          element = {<route.element/>}
         />
        )
      })
      }
    <Route path="/*" element={<Navigate to="/login" replace/>} />
    </Routes>
  )
}

export default AppRouter