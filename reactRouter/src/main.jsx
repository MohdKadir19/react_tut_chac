import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useRouteLoaderData } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import GitHub, { gitHubLoader } from './components/GitHub/GitHub.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children : [
//       {
//         path :'/',
//         element : <Home />
//       },
//       {
//         path :'/about',
//         element : <About />
//       },
//       {
//         path :'/contactus',
//         element : <Contact />
//       }
      
//     ]


//   }

// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contactus' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={gitHubLoader}
      path='github' element={<GitHub />}/>
    </Route>
  )


)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
