import { FaHeart } from "react-icons/fa6";


const Footer = () => {
    return (
        <div>
            {/* <motion.h2 whileInView={{ y: 0, opacity: 1 }} initial={{ y: -100, opacity: 0 }} transition={{ duration: 1 }} className="my-10 text-center text-4xl">
                Get in Touch
            </motion.h2> */}
            <div className="my-10 gap-4 text-2xl text-black flex items-center justify-center">
                <span>Made with <FaHeart className="inline"/> by <a href="/" className="bg-radial-[at_25%_25%] from-white to-zinc-900 to-75% bg-clip-text text-2xl tracking-tight text-transparent">Chirag Chavda</a></span>
            </div>
        </div>
    )
}

export default Footer