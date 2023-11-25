import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-screen w-screen flex min-h-screen flex-col items-center justify-center gap-20 p-24">
      <h1>
        <span className="text-white font-['Oswald'] font-black text-9xl">Expense</span>
        <span className="text-white font-['Oswald'] font-black text-9xl hover:leading-loose flex flex-col gap-0 p-0 hover:text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-sky-800 transition-all">Manager</span>
      </h1>
      <div className='flex gap-10'>
        <a href="/login" className='text-white border-2 rounded-md px-6 py-3'>Login</a>
        <a href="/signup" className='text-white rounded-md px-6 py-3 bg-cyan-600 hover:bg-cyan-900 transition-all'>Sign up</a>
      </div>
    </main>
  )
}
