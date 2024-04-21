import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaWordpress } from "react-icons/fa";
import { SiExpress, SiMongodb, SiMongoose, SiJavascript } from "react-icons/si";

const Skills = () => {
  return (
    <section className="bg-slate-100 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="flex flex-col justify-center">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Skills</h1>
                <div className="grid grid-cols-5 gap-8">
                    <div className="flex flex-col justify-center items-center">
                        <FaHtml5 className="text-5xl dark:text-white" />
                        <p className="dark:text-white">HTML</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <FaCss3Alt className="text-5xl dark:text-white" />
                        <p className="dark:text-white">CSS</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <SiJavascript className="text-5xl dark:text-white" />
                        <p className="dark:text-white">JavaScript</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <FaReact className="text-5xl dark:text-white" />
                        <p className="dark:text-white">ReactJS</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <FaNodeJs className="text-5xl dark:text-white" />
                        <p className="dark:text-white">NodeJS</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <SiExpress className="text-5xl dark:text-white" />
                        <p className="dark:text-white">Express</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <SiMongodb className="text-5xl dark:text-white" />
                        <p className="dark:text-white">MongoDB</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <SiMongoose className="text-5xl dark:text-white" />
                        <p className="dark:text-white">Mongoose</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <FaGitAlt className="text-5xl dark:text-white" />
                        <p  className="dark:text-white">Git</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <FaWordpress className="text-5xl dark:text-white" />
                        <p className="dark:text-white">WordPress</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Skills