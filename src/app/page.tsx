'use client'
import Image from 'next/image'
import { GoogleOAuthProvider } from '@react-oauth/google'

export default function Home() {
  return (
    <GoogleOAuthProvider clientId='830167185295-vnjt1dq5kbdat21brq6gkao31pelq3pv.apps.googleusercontent.com'>
      <main className="h-screen w-screen flex min-h-screen flex-col items-center justify-center gap-20 p-24">
        <div className='flex gap-10'>
          <div className='flex flex-col items-start gap-10'>
            <h1 className='font-sans text-lg'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quae aspernatur fugit laudantium numquam repellat praesentium nemo incidunt architecto commodi repudiandae fuga beatae, iusto, aut optio culpa, impedit doloribus tempora.
              Nam reprehenderit earum animi itaque corporis nobis quas modi, commodi voluptatum minus cupiditate molestiae et eius maiores nostrum consequatur, quasi at saepe unde repudiandae consequuntur sunt laudantium libero. Nobis, corporis?
              Necessitatibus, quisquam placeat deserunt tempore dolorem accusantium. Eaque, voluptatibus nulla accusantium necessitatibus commodi neque ab laboriosam assumenda doloremque reiciendis tempora vitae blanditiis? Repudiandae, sequi ut rerum libero veniam quas sed.
            </h1>
            <button className='p-3 bg-yellow-400 rounded-md hover:bg-amber-500'>
              buttom 
            </button>
          </div>
          <img src="https://ouch-cdn2.icons8.com/MOKzVvs26ffTmsmpHKMfbRXIPfy7b61tuzRjJnaGHlM/rs:fit:503:456/extend:false/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNjIy/L2Q0NTlhM2QxLWNk/MmUtNGZmMC1hMWRi/LWUzNGExZGM1Yzky/Yy5zdmc.png" alt="" />
        </div>
      </main>
    </GoogleOAuthProvider>
  )
}
