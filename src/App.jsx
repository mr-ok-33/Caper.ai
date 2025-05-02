import React from 'react';
import './App.css';
import './Pages/Home.css';
import './Pages/SmartCart.css'
import './Components/UI/Header.css'; // caperai/src/Pages
import './Components/UI/Footer.css';
import {createBrowserRouter,RouterProvider} from 'react-router';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Resources from './Pages/Resources';
import Retailers from './Pages/Retailers';
import AppLayout from './Components/Layout/AppLayout.jsx';
import SmartCart from './Pages/SmartCart';
import './Pages/Retailer.css';
import './Pages/Resources.css'
import './Pages/Contact.css';
const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<AppLayout/>,
      children:[
        { 
          path:'/',
          element:<Home/>
        },
        {
          path:"smartcart",
          element:<SmartCart/>
        },
        {
          path:"retailers",
          element:<Retailers/>
        },
        {
          path:'resource',
          element:<Resources/>
        },
        {
          path:'contact',
          element:<Contact/>
        }
      ]
    }
  ]
) 
function App() {
  return (
   <>
        <RouterProvider router={router}></RouterProvider>
   </>
  )
}

export default App;


