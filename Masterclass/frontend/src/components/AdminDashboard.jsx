import React, { useEffect, useState } from 'react'
import axios from 'axios'

function AdminDashboard() {

  const [users, setUsers] = useState([])

  const api = import.meta.env.VITE_BACKEND_URL

  async function getAllUsers(){
   const res = await axios.get(`${api}/users`)
   if(res?.data.length > 0) setUsers(res.data)
    
  }
  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <div>
      <div>AdminDashboard</div>
      <div>
        {users.length > 0 && users.map((user, idx) => {
          return <div key={idx} className='shadow-2xl mb-4'>
            <p>{user.fullname}</p>
            <p>{user.email}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default AdminDashboard