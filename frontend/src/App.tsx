import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Home,
  LandingPage,
  Login,
  Privacy,
  Signup,
} from "./pages";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/privacy-policy" element={<Privacy />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
