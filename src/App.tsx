import AboutSection from "src/pages/home/Section/About/about.tsx"
import HeroSection from "src/pages/home/Section/Hero/hero.tsx"
import Navbar from "src/componets/NavBar/navbar.tsx"
import ProjectsSection from "src/pages/home/Section/ProjectsSection/projectssection.tsx"
import Footer from "src/componets/Footer/footer.tsx"

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