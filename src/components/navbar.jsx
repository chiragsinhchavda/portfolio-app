import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoCall } from "react-icons/io5";
import logo1 from "../assets/logo1.png"


const Navbar = () => {
    return (
        <nav className="text-white mb-10 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-10 rounded-xl rounded-lg" src={logo1} alt="logo" />
            </div>
            <div className="m-8 gap-4 text-2xl flex items-center justify-center">
                <a className="cursor-pointer" href="https://www.linkedin.com/in/chiragsinhchavda/" target="_blank">
                    <FaLinkedin className="cursor-pointer text-sky-500" />
                </a>
                <a href="https://github.com/chiragsinhchavda" className="cursor-pointer" target="_blank">
                    <FaGithub className="cursor-pointer text-black" />
                </a>
                <a href="mailto:chiragsinhchavda01@gmail.com" className="cursor-pointer" target="_blank">
                    <BiLogoGmail className="cursor-pointer text-black" />
                </a>
                <a href="tel:+916355455648" className="cursor-pointer" target="_blank">
                    <IoCall className="cursor-pointer text-black" />
                </a>
            </div>
        </nav>
    )
}

export default Navbar