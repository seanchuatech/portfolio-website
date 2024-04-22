import React from 'react'

const About = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="flex flex-col justify-center max-w-screen">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">About me</h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">I'm a technical officer with a passion for creating things online. That's why I'm currently on a mission to transition into the world of full-stack web development! To make this jump, I'm actively learning to code through free resources like The Odin Project and freeCodeCamp.</p>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">I'm constantly practicing to hone my skills and stay up-to-date on best practices.  I believe that a strong foundation and a commitment to learning are essential for building a successful web development career.</p>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">This website is a testament to my dedication and a platform to showcase my progress. I'm excited to share my journey with you and see what the future holds in the exciting world of web development!</p>
            </div>
            <div>
                <iframe
                  src="https://giphy.com/embed/qgQUggAC3Pfv687qPC"
                  className="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl"
                  width={480}
                  height={360}
                  allowFullScreen=""
                />
            </div>
        </div>
    </section>

  )
}

export default About