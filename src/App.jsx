import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home';
import Add from './components/Add';
import Show from './components/Show';
import {Toaster} from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/add",
    element: <Add/>
  },
  {
    path: "/show",
    element: <Show/>
  },

  {
    path: "*",
    element: <div>404 Not Found</div>
  }
])


function App()
{root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <Toaster />
  </React.StrictMode>
);
}
export default App