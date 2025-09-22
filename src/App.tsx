import AboutSection from 'src/pages/home/sections/About/about';
import HeroSection from 'src/pages/home/sections/Hero/hero';
import Navbar from 'src/components/NavBar/navbar';
import ProjectsSection from 'src/pages/home/sections/ProjectsSection/projectssection';
import Footer from 'src/components/Footer/footer';

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