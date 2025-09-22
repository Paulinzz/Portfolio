import AboutSection from "src/pages/home/sections/About/about.tsx"
import HeroSection from "src/pages/home/Section/Hero/hero.tsx"
import Navbar from "src/components/NavBar/navbar.tsx"
import ProjectsSection from "src/pages/home/sections/ProjectsSection/projectssection.tsx"
import Footer from "src/components/Footer/footer.tsx"

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