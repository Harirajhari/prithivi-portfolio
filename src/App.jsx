// App.jsx
import AboutMe from './Components/AboutMe'
import Certificate from './Components/Certificate'
import ContactUs from './Components/ContactUs'
import CoreComponent from './Components/CoreComponent'
import Experience from './Components/Experience'
import Header from './Components/Header'
import HeroSection from './Components/HeroSection'
import Refernce from './Components/Refernce'

function App() {
  return (
    <div className="font-sans bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <AboutMe />
        <CoreComponent />
        <Experience />
        <Certificate />
        <Refernce />
        <ContactUs />
      </main>
    </div>
  )
}

export default App