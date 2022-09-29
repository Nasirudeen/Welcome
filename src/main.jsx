import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, RouterProvider} from  'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'



import AboutUs from './Pages/AboutUs.jsx'
import Services from './Pages/Services'
import Partners from './Pages/Partners.jsx'
import Portfolio from './Pages/Portfolio'
import Help from './Pages/Help.jsx'
import FAQs from './Pages/FAQs'
 import Error from './Pages/Error'

 const router = createBrowserRouter([
  {path: "/", element : <App/>, errorElement: <Error/> },
  {path: "/AboutUs", element : <AboutUs />, },
  {path: "/services", element : <Services />, },
  {path: "/partners", element : <Partners />, },  
  {path: "/portfolio", element : <Portfolio />, },
  {path: "/help", element : <Help />, },
  {path: "/FAQs", element : <FAQs />, }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)


 
