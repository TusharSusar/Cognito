import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import ChatArea from './ChatArea'
import ChatContainer from './components/ChatContainer'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:'/chat',
    element:<ChatArea/>
  },
  {
    path:'/chat/:chatid',
    element:<ChatContainer/>
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
