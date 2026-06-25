import { Routes, Route } from 'react-router-dom'
import { Nav } from "./components/Nav";
import { Home } from "./components/Home";
import { Hero } from './components/Hero';
import { About } from "./components/About"
import { Project } from "./components/Project"
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;