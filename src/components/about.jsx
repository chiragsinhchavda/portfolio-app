import hero from "../assets/3.jpg"
import { ABOUT_TEXT } from "../constants"
import { motion } from "motion/react"

const About = () => {
    return (
        <div className="border-b border-nuetral-900 pb-4">
            <motion.h2 whileInView={{ y: 0, opacity: 1 }} initial={{ y: -100, opacity: 0 }} transition={{ duration: 1 }} className="my-20 text-center text-4xl">
                About 
                <span className="text-neutral-500"> Me</span>
            </motion.h2>
            <div className="flex flex-wrap">
                <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1, delay: 0.3 }} className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className="rounded-2xl w-80 h-95 rounded-lg" src={hero} alt="about" />
                    </div>
                </motion.div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <motion.p whileInView={{ x: 0, opacity: 1 }} initial={{ x: 100, opacity: 0 }} transition={{ duration: 1, delay: 0.3 }} className="my-2 max-w-xl py-6">{ABOUT_TEXT}</motion.p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About