import { Route, Routes } from "react-router-dom";

import { Navbar, Hero, Projects, Contact } from "./components";

const App = () => {
  return (
      <div className="relative snap-y snap-mandatory h-screen w-screen overflow-scroll z-0 bg-primary text-off-black">
        <Navbar />
        <Routes>
          <Route exact path="/" element={ <Hero /> } />
          <Route exact path="/projects" element={ <Projects /> } />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
  )
}

export default App