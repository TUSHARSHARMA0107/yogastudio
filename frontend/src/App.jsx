// import { HeroProvider } from "./context/HeroContext"
// import { BrowserRouter } from "react-router-dom"
import AboutTrainerPage from "./pages/About"
import Home from "./pages/Home"
import Program from "./pages/program"
import YogaStudioExperience from "./pages/YogaStudioExperience"




export default function App() {
  return (
    <>
    <Home/>
    <YogaStudioExperience/>
    <Program/>
    <AboutTrainerPage/>
</>

      //   <Routes>
      //    <Route path="/studio-experience" element={<YogaStudioExperience />} />
      //  </Routes>
  )
  
}
