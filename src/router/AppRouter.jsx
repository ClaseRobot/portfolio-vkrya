import { Navigate, Route, Routes } from "react-router-dom"
import { Experience } from "../pages/Experience"
import { Home } from "../pages/Home"
import { Projects } from "../pages/Projects"
import { Navbar } from "../components/Navbar"

export const AppRouter = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects />}/>
        {/* <Route path="/project/:id" element={<ProjectDisplay />} /> */}
        <Route path="/experience" element={<Experience />}/>
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}