import { Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/Home"
import Footer from "./components/footer/Footer"

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
