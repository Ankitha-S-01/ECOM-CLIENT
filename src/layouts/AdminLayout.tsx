import AdminTopbar from '@/components/Topbar/AdminTopbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className="flex jutify-start items-center flex-col">
      <AdminTopbar />
      <main>
        <Outlet />
        </main>
    </div>
  )
}

export default AdminLayout