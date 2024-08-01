import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

// Router
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

// Pages.
import { Home } from './pages/home.jsx'
import { About } from './pages/about.jsx'
import { Rental } from './pages/rental.jsx'
import { Error } from './pages/error.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
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
        path: 'rental/:id',
        element: <Rental />,
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
      <header>
        <nav>
          <NavLink to="/"><img src="" alt="" /></NavLink>
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/about">A propos</NavLink>
        </nav>
      </header>

      <main>
        <Outlet/>
      </main>
      
      <footer>
      </footer>

    </>
  )
}

export default App
