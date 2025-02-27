import { HOME_CONTENT } from "../constants"
import myImage from "../assets/1.jpg"
import { motion } from "motion/react"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
})

const Home = () => {
    return (
        <div className="border-b border-white-900 pb-4 lb:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 variants={container(1.5)} initial="hidden" animate="visible" className="pb-10 text-5xl text-black tracking-tight lg:mt-10 lg:text-6xl">
                            Chirag Chavda
                        </motion.h1>
                        <motion.span variants={container(1.5)} initial="hidden" animate="visible" className="bg-radial-[at_25%_25%] from-black to-zink-900 to-75% bg-clip-text text-2xl font-dark tracking-tight text-transparent">Full Stack Developer</motion.span>
                        <motion.p variants={container(1.5)} initial="hidden" animate="visible" className="text-black my-1 max-w-xl py-5 tracking-tight">{HOME_CONTENT}</motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img className="rounded-xl rounded-lg" initial={{ x: 100, opacity: 0}} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}  src={myImage} alt="Chiragsinh Chavda" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home