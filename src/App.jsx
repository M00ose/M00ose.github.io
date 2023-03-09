import { BrowserRouter } from "react-router-dom";

import { Navbar, Hero, Stack, Projects, Contact } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative snap-y snap-mandatory h-screen w-screen overflow-scroll z-0 bg-primary text-off-black">
        <div className='snap-start h-screen w-screen'>
          <Navbar />
          <Hero />
          <Stack />
        </div>
        <Projects />
        <Contact />
      </div>
    </BrowserRouter>
  )
}

export default App