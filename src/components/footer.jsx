import { FaHeart } from "react-icons/fa6";


const Footer = () => {
    return (
        <div>
            {/* <motion.h2 whileInView={{ y: 0, opacity: 1 }} initial={{ y: -100, opacity: 0 }} transition={{ duration: 1 }} className="my-10 text-center text-4xl">
                Get in Touch
            </motion.h2> */}
            <div className="my-10 gap-4 text-2xl flex items-center justify-center">
                <span>Made with <FaHeart className="inline"/> by <a href="/" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent">Chiragsinh Chavda</a></span>
            </div>
        </div>
    )
}

export default Footer