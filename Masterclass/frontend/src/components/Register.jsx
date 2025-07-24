import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'

function Register() {

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phoneNo, setPhoneNo] = useState('')

    const navigate = useNavigate()

    const api = import.meta.env.VITE_BACKEND_URL

    const handleSubmit = async() => {
        try {
            const res = await axios.post(`${api}/auth/register`, {fullName, email, password, phoneNo})
            console.log(res)
            if(res.data?.status == true){
                alert(res.data.message)
                navigate('/login')
            }
            setFullName('')
            setEmail('')
            setPassword('')
            setPhoneNo('')
        } catch (error) {
            alert(`Error: ${error.response.data?.message}`)
        }
    }

  return (
    <div className='min-h-screen flex justify-center items-center'>
        <div className='flex flex-col justify-between p-4 shadow-lg h-100 w-80'>
            <h1>Register</h1>
            <input type="text" placeholder='Enter ur fullName' className='border-2 p-2 rounded' onChange={e => setFullName(e.target.value)} value={fullName}/>
            <input type="email" placeholder='Enter ur email'  className='border-2 p-2 rounded'  onChange={e => setEmail(e.target.value)} value={email}/>
            <input type="password" placeholder='Enter ur passsword'  className='border-2 p-2 rounded'  onChange={e => setPassword(e.target.value)} value={password}/>
            <input type="number" placeholder='Enter ur number'  className='border-2 p-2 rounded'  onChange={e => setPhoneNo(e.target.value)} value={phoneNo}/>
            <button className='px-4 py-2 rounded bg-sky-500' onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  )
}

export default Register