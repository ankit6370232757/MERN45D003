import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const api = import.meta.env.VITE_BACKEND_URL

  const handleSubmit = async() => {
    try {
            const res = await axios.post(`${api}/auth/login`, {email, password})
            console.log(res)
            alert(res.data.message)
            setEmail('')
            setPassword('')
            navigate('/admin')
        } catch (error) {
            alert(`Error: ${error.response.data?.message}`)
        }
  }

  return (
    <div className='min-h-screen flex justify-center items-center'>
        <div className='flex flex-col justify-between p-4 shadow-lg h-60 w-80'>
            <h1>Login</h1>
            <input type="email" placeholder='Enter ur email'  className='border-2 p-2 rounded'  onChange={e => setEmail(e.target.value)} value={email}/>
            <input type="password" placeholder='Enter ur passsword'  className='border-2 p-2 rounded'  onChange={e => setPassword(e.target.value)} value={password}/>
            <button className='px-4 py-2 rounded bg-sky-500' onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  )
}

export default Login