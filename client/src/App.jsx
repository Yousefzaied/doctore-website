import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import './App.css'
import NavBar from "./components/NavBar/Nav"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import MyReservations from "./pages/MyReservations/MyReservations";

const Layout = () => {
  return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
  );
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element:<Home/>
      },
      {
        path:'/register',
        element:<Register/>,
      },
      {
        path:'/login',
        element: <Login/>
      },
      {
        path:'/my-reservations',
        element:<MyReservations/>
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;


