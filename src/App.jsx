import { BrowserRouter } from "react-router-dom";

import { Navbar, Hero, Projects, Contact } from "./components";
import { projects } from "./constants";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative snap-y snap-mandatory h-screen w-screen overflow-scroll z-0 bg-primary text-off-black">
        <div className='snap-start h-screen w-screen'>
          <Navbar />
          <Hero />
        </div>
        {projects.map((project) => (
          <Projects 
            name={project.name} 
            description={project.description}
            tag={project.tag}
            tech={project.tech}
            image={project.image}
            link={project.link}
            github={project.github}
          />
        ))}
        
        <Contact />
      </div>
    </BrowserRouter>
  )
}

export default App