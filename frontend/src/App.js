
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigationbar from "./Navigationbar";
import Footer from "./Footer";
import Karusel from "./Karusel";
import Services from "./Services";
import Whyus from "./Whyus";
import BookNow from "./BookNow";
import GeneralDentistry from "./GeneralDentistry"; 
import SurgicalCare from "./SurgicalCare"; 
import OrthodonticTreatment from "./OrthodonticTreatment"; 
import BookForm from "./BookForm";

function App() {
  return (
    <Router>
      <Navigationbar />
      <Routes>
        <Route path="/" element={<>
          <Karusel />
          <Services />
          <Whyus />
          <BookNow />
        </>} />
        <Route path="/general-dentistry" element={<GeneralDentistry />} />
        <Route path="/surgical-care" element={<SurgicalCare />} />
        <Route path="/orthodontic-treatment" element={<OrthodonticTreatment />} />
        <Route path="/book-form" element={<BookForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
