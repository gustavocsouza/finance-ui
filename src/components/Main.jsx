import { DotLottieReact } from '@lottiefiles/dotlottie-react';


export default function Main() {
  return (
    <div className="min-h-screen flex justify-center items-center">
        <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />    
        <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="grid md:grid-cols-2 max-w-7xl space-y-8 items-center">
            <div className="px-4 sm:px-8 md:px-12 lg:px-16 space-y-4 text-center md:text-left">
                <h1
                    className="animate-in slide-in-from-top duration-400 text-5xl leading-tight sm:text-4xl lg:text-5xl font-bold bg-linear-to-br from-purple-400 via-purple-600 to-purple-400 bg-clip-text text-transparent"
                >
                    Organize your finances more easily
                </h1>
                <p
                    className="leading-relaxed animate-in slide-in-from-top duration-400 delay-100"
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores fuga dolorem labore reprehenderit ab nam nostrum
                </p>

                <div className='space-x-4 md:space-x-6 lg:space-x-8 mt-8 lg:mt-12'>
                    <button
                        className='z-50 bg-linear-to-b from-purple-500 to-purple-400 px-6 py-2 rounded-lg shadow-xl shadow-purple-500/20 hover:scale-105 cursor-pointer transition-all hover:shadow-purple-500/30 font-bold'
                    >
                        Start now
                    </button>

                    <button className='underline hover:text-gray-300 transition-all cursor-pointer'>
                        Already have an account
                    </button>
                </div>
            </div>

            <div className="">
                <DotLottieReact
                    src="https://lottie.host/b023a9c0-5386-4325-82f4-314288e9c412/4euBA8B3Zk.lottie"
                    loop
                    autoplay
                    className='md:w-full w-9/12 m-auto'
                />
            </div>
        </div>
    </div>
  )
}
