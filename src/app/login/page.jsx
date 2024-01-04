'use client'

import { IconEye, IconEyeOff } from '@tabler/icons-react'
import { useState } from 'react'

export default function login () {

    const [ showPass, setShowPass ] = useState(false)

    return(
        <>
        <div className="font-['Oswald'] h-screen w-screen flex items-center justify-center">
            <div className="w-3/5 rounded-xl flex bg-slate-100">
                <img className="w-3/5 rounded-l-xl" src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="backgroundLogin" />
                <div className="flex flex-col items-center justify-center p-8">
                    <h1 className="text-4xl font-bold">Login</h1>
                    <div className="w-full p-10 flex flex-col items-center justify-center">
                        <form action="" className="w-56 flex flex-col justify-center gap-3">
                            <label htmlFor="">Email</label>
                            <input className="p-2 border-2 bg-transparent" type="email" placeholder="Username" />
                            <label htmlFor="Password">Password</label>
                            <div className='flex justify-center items-center border-2 border-gray-200'>
                                <input className="w-full p-2 border-none bg-transparent" type={showPass ? "text" : "password"} placeholder="Password" />
                                <div onClick={ () => setShowPass(!showPass)} className='px-2'>
                                    {showPass ? <IconEye/> : <IconEyeOff/>}
                                </div>
                            </div>
                            <button type='submit' className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-800">Login</button>
                            <p className="w-full text-center">or</p>
                            <a className="p-2 flex gap-5 border-2 rounded-md hover:bg-slate-200 hover:text-black" href=""><img src="https://freesvg.org/img/1534129544.png" alt="" className="w-6" />Sign in with Google</a>
                            <a className="text-blue-500 decoration-blue-600" href="/signup">Sign up</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}