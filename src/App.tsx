import AboutSection from "/home/paulinzz/Documents/my-portfolio/src/pages/home/Section/About/about.tsx"
import HeroSection from "/home/paulinzz/Documents/my-portfolio/src/pages/home/Section/Hero/hero.tsx"
import Navbar from "/home/paulinzz/Documents/my-portfolio/src/componets/NavBar/navbar.tsx"
import ProjectsSection from "/home/paulinzz/Documents/my-portfolio/src/pages/home/Section/ProjectsSection/projectssection.tsx"
import Footer from "/home/paulinzz/Documents/my-portfolio/src/componets/Footer/footer.tsx"

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