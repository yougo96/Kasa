import { useState } from 'react'

// Router
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

// Pages
import { Home } from './pages/home.jsx'
import { About } from './pages/about.jsx'
import { Login } from './pages/login.jsx'
import { Rental } from './pages/rental.jsx'
import { Add } from './pages/add.jsx'
import { Error } from './pages/error.jsx'

// Components
import { Header } from './components/header.jsx'
import { Footer } from './components/footer.jsx'

// Assets


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'rental/:urlid',
        element: <Rental />,
      },
      {
        path: 'add',
        element: <Add />,
      },
      {
        path: 'error/:urlerror',
        element: <Error />,
      },
      {
        path: '*',
        element: <Error />,
      }      
    ],
  },
])

function App() {

  return <RouterProvider router={router} />

}

function Root() {

  return (
    <>

      <main>
        <Header />
        
        <Outlet/>
      </main>
      
      <Footer />

    </>
  )
}

export default App
