import { EDUCATIONS } from "../constants"
import { motion } from "motion/react" 

const Eduaction = () => {
    return (
        <div className="border-b border-white-900 pb-4">
            <motion.h2 whileInView={{ y: 0, opacity: 1 }} initial={{ y: -100, opacity: 0 }} transition={{ duration: 1 }}className="my-20 text-center text-4xl text-black">Eduaction</motion.h2>
            <div>
                {EDUCATIONS.map((education, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 1 }}className="w-full lg:w-1/4">
                            {(education.year) ? (<p className="mb-2 text-sm text-black">{education?.year}</p>) : ''}
                        </motion.div>
                        <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: 100, opacity: 0 }} transition={{ duration: 1 }} className="w-full max-w-xl lg:w-3/4 ">
                            <h6 className="mb-2 font -semibold text-black">
                                {education?.course}
                                {(education.specialization) ? (<span className="text-sm text-black"> -{" "} {education?.specialization}</span>) : ''}
                            </h6>
                            {(education.institute) ? (<p className="mb-1 text-black">{education?.institute}</p>) : ''}
                            {(education.grade) ? (<p className="mb-4 text-black">Grade: {education?.grade}</p>) : ''}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Eduaction