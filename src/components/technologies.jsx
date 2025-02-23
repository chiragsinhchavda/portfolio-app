import { RiReactjsLine } from "react-icons/ri"
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandAngularFilled } from "react-icons/tb";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TbBrandMongodb } from "react-icons/tb";
import { motion } from "motion/react"

const iconAnimation = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [-10, 10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse" 
        }
    }
})

const Technology = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2 whileInView={{ y: 0, opacity: 1 }} initial={{ y: -100, opacity: 0 }} transition={{ duration: 1 }} className="my-20 text-center text-4xl">Technologies</motion.h2>
            <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 1 }} className="flex flex-wrap items-center justify-center gap-4">
                <motion.div variants={iconAnimation(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
                    <IoLogoJavascript className="text-7xl text-yellow-400"/>
                </motion.div>
                <motion.div variants={iconAnimation(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
                    <TbBrandAngularFilled className="text-7xl text-orange-700"/>
                </motion.div>
                <motion.div variants={iconAnimation(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
                    <RiReactjsLine className="text-7xl text-cyan-400"/>
                </motion.div>
                <motion.div variants={iconAnimation(2.)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
                    <FaNode className="text-7xl text-green-500"/>
                </motion.div>
                <motion.div variants={iconAnimation(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
                    <SiExpress className="text-7xl"/>
                </motion.div>
                <motion.div variants={iconAnimation(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
                    <TbBrandMongodb className="text-7xl text-green-500"/>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technology