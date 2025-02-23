import { PROJECTS } from "../constants"
import { motion } from "motion/react" 

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2 whileInView={{ y: 0, opacity: 1 }} initial={{ y: -100, opacity: 0 }} transition={{ duration: 1 }} className="my-20 text-center text-4xl">Projects</motion.h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div  whileInView={{ x: 0, opacity: 1 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 1 }} className="w-full lg:w-1/4">
                            <img width={150} height={150} src={project?.image} alt={project?.title} />
                        </motion.div>
                        <motion.div  whileInView={{ x: 0, opacity: 1 }} initial={{ x: 100, opacity: 0 }} transition={{ duration: 1 }}className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font -semibold">
                                <span className="text-sm text-purple-100">{project?.title}</span>
                            </h6>
                            <p className="mb-4 text-neutral-400">{project?.description}</p>
                            {project?.technologies.map((technology, index) => (
                                <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">{technology}</span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects