import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar"
import Footer from "./components/sections/Footer"
import Home from "./components/screen/Home";
import OwnerHome from "./components/screen/OwnerHome";
import CommercialOwner from "./components/screen/CommercialOwner";
import Services from "./components/screen/Services";

function App() {

  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/owner" element={<OwnerHome />} />
        <Route path="/commercial-owner" element={<CommercialOwner />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
