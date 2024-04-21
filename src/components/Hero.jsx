import React from 'react'

const Hero = () => {
  return (
    <section className="bg-slate-100 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 min-h-screen flex flex-col justify-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Hello there!</h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">I'm Sean, a full-stack developer in training!  I can juggle both front-end and back-end, but I'm still working on some fancy tricks. Let's build something awesome together!</p>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Reach out to me at seanchuatech@gmail.com</p>
        </div>
    </section>
  )
}

export default Hero