import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ChatArea from "./ChatArea";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { ProtectedRoute, PublicRoute } from "./auth/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      { path: "/chat", element: <ChatArea /> },
      { path: "/chat/:cid", element: <ChatArea /> },
    ],
  },
  {
    element: <PublicRoute />,
    children: [
      { path: "/signin", element: <Signin /> },
      { path: "/signup", element: <Signup /> },
    ],
  },
]);
// {
//   path:'/chat',
//   element:<ChatArea/>
// },
// {
//   path:'/chat/:cid',
//   element:<ChatArea/>
// },
// {
//   path:'/signin',
//   element:<Signin/>
// },
// {
//   path:'/signup',
//   element:<Signup/>
// },
// ])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
