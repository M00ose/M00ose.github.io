import { BrowserRouter } from "react-router-dom";

import { Navbar, Hero, Stack, Projects, Contact } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div>
          <Navbar />
          <Hero />
        </div>
        <Stack />
        <Projects />
        <Contact />
      </div>
    </BrowserRouter>
  )
}

export default App