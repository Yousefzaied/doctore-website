import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import './App.css'
import SideBar from "./components/Sidbar/Sidebar";
import NavBar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home";

import DetectionCases from "./pages/DetectionCases/DetectionCases";
import ReturnCases from "./pages/ReturnCases/ReturnCases";
import UserInfo from "./pages/UserInfo/UserInfo";
import  Register  from "./pages/Rgister/Register";
import Login from "./pages/Login/Login";

const Layout = () => {
  return (
    <>
    <NavBar/>
    <div className="row  m-0">
    <SideBar/>
      <div className="col-lg-10 col-md-8 col-sm-8 main">
        <Outlet/>
      </div>
    </div>
    </>
  )
};



const router = createBrowserRouter([

  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'/Detection-cases',
        element:<DetectionCases/>
      },
      {
        path:'/Return-ases',
        element:<ReturnCases/>
      },
      {
        path:'/user-info',
        element:<UserInfo/>
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/login',
        element:<Login/>
      }
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
