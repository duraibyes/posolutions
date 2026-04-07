import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar"
import Footer from "./components/sections/Footer"
import Home from "./components/screen/Home";
import OwnerHome from "./components/screen/OwnerHome";
import CommercialOwner from "./components/screen/CommercialOwner";
import Services from "./components/screen/Services";
import About from "./components/screen/About";
import ContactUs from "./components/screen/ContactUs";
import RequestProposal from "./components/screen/RequestProposal";
import AssetManagement from "./components/screen/AssetManagement";
import FinancialServices from "./components/screen/FinancialServices";
import ScrollToTop from "./components/ScrollToTop";
import AssociationManagement from "./components/screen/AssociationManagement";
import RealEstateBrokerageServices from "./components/screen/RealEstateBrokerageServices";

function App() {

  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/owner" element={<OwnerHome />} />
        <Route path="/commercial-owner" element={<CommercialOwner />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/request-proposal" element={<RequestProposal />} />
        <Route path="/asset-management" element={<AssetManagement />} />
        <Route path="/financial-recovery-services" element={<FinancialServices />} />
        <Route path="/association-management" element={<AssociationManagement />} />
        <Route path="/real-estate-brokerage" element={<RealEstateBrokerageServices />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
