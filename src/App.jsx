import Navbar from "./components/navbar"
import Home from "./components/home"
import About from "./components/about"
import Technology from "./components/technologies"
import Experience from "./components/experiences"
import Education from "./components/education"
import Footer from "./components/footer"
import Projects from "./components/projects"

function App() {

  return (
    <>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
        </div>
        <div className="container mx-auto px-8">
          <Navbar />
          <Home />
          <About />
          <Technology />
          <Education />
          <Experience />
          <Projects />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
