import AboutSection from './pages/home/sections/about/about.tsx';
import HeroSection from './pages/home/sections/Hero/hero.tsx';
import Navbar from './components/NavBar/navbar.tsx';
import ProjectsSection from './pages/home/sections/ProjectsSection/projectssection.tsx';
import Footer from './components/Footer/footer';

const App: React.FC = () => {

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <Footer />
    </>
  )
}

export default App