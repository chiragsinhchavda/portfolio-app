import { EXPERIENCES } from "../constants"
import { motion } from "motion/react"   

const Experience = () => {
    return (
        <div className="border-b border-white-900 pb-4">
            <motion.h2 whileInView={{ y: 0, opacity: 1 }} initial={{ y: -100, opacity: 0 }} transition={{ duration: 1 }} className="my-20 text-center text-4xl text-black">Experience</motion.h2>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/4">
                            <motion.p whileInView={{ x: 0, opacity: 1 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 1 }} className="mb-2 text-sm text-black">{experience?.year}</motion.p>
                        </div>
                        <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: 100, opacity: 0 }} transition={{ duration: 1 }} className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font -semibold text-black">
                                {experience?.role} -{" "}
                                <span className="text-sm text-black">{experience?.company}</span>
                            </h6>
                            <p className="mb-4 text-black">{experience?.description}</p>
                            {experience?.technologies.map((technology, index) => (
                                <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white font-light">{technology}</span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience