import { Route, Routes } from "react-router-dom"
import Login from "./pages/auth/login"
import Register from "./pages/auth/Register"
import AdminProduct from "./pages/admin/AdminProduct"
import AdminUsers from "./pages/admin/AdminUsers"
import UserProducts from "./pages/user/UserProducts"
import AdminOrders from "./pages/admin/AdminOrders"
import AdminLayout from "./layouts/AdminLayout"

const App = () => {
  return (
    <div >
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route element={<AdminLayout />}>
               <Route path="/admin/products" element={<AdminProduct />}/>
               <Route path="/admin/users" element={<AdminUsers />}/>
               <Route path="/admin/orders" element={<AdminOrders />}/>
            </Route>

            <Route path="/user/products" element={<UserProducts />}/>
            

        </Routes>
    </div>
  )
}

export default App