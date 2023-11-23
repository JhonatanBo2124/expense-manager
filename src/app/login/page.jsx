
export default function login () {
    return(
        <>
        <div className="w-screen h-screen flex flex-col items-center justify-center gap-6">
            <h1 className="text-2xl">Expense <span className="font-black">Manager</span></h1>
            <div className="p-10 flex flex-col items-center border-8 rounded-xl">
                <p className="pb-20">Sign in</p>
                <form action="" className="flex flex-col items-center gap-3">
                    <input className="p-2 border-2" type="text" placeholder="Username" />
                    <input className="p-2 border-2" type="password" placeholder="Password" />
                    <button>Login</button>
                    <a className="p-2 flex gap-5 border-2 rounded-md hover:bg-slate-100" href=""><img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" />Login with Google</a>
                    <a href="">Sign up</a>
                </form>
            </div>
        </div>
        </>
    )
}