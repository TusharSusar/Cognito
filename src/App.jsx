import React from "react";
import { createBrowserRouter, Outlet, RouterProvider, useNavigation } from "react-router-dom";
import Home from "./pages/Home";
import ChatArea from "./ChatArea";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { ProtectedRoute, PublicRoute } from "./auth/auth";
import UpgradePlan from "./pages/UpgradePlans";
import { HashLoader } from "react-spinners";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     element: <ProtectedRoute />,
//     children: [
//       { path: "/chat", element: <ChatArea /> },
//       { path: "/chat/:cid", element: <ChatArea /> },
//     ],
//   },
//   {
//     element: <PublicRoute />,
//     children: [
//       { path: "/signin", element: <Signin /> },
//       { path: "/signup", element: <Signup /> },
//     ],
//   },
//   {
//     path:"/upgrade",
//     element:<UpgradePlan/>
//   }
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

const RootLayout = () => {
  const navigation = useNavigation();
  const NavigationSpinner = (
    <div className="w-full h-screen bg-black flex justify-center items-center">
      <HashLoader color="#0CAFFF" size={30} />
    </div>
  );

  return (
    <>
      <Outlet />{/* Show global loading indicator during navigation */}
      {navigation.state === "loading" && NavigationSpinner}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true, // Use index: true for the default path in the parent
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
      {
        path: "/upgrade",
        element: <UpgradePlan />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
