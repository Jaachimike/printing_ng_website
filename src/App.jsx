import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs.jsx";
import Products from "./pages/Products.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsAndConditions from "./pages/TermsAndConditions.jsx";
import Login from "./pages/Login.jsx";
import { SignUp } from "./pages/SignUp.jsx";
import RollupBanners from "./pages/product_details/RollupBanners.jsx";
import FAQ from "./pages/FAQ.jsx";
import Affiliates from "./pages/Affiliates.jsx";
import Careers from "./pages/Careers.jsx";
import Contact from "./pages/Contact.jsx";
import Track from "./pages/Track.jsx";
import Blog from "./pages/Blog.jsx";
import BlogPage from "./pages/BlogPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="products" element={<Products />}></Route>
        <Route path="faq" element={<FAQ />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
        <Route path="track" element={<Track />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog_page" element={<BlogPage />} />
        <Route path="affiliates" element={<Affiliates />} />
        <Route path="privacy_policy" element={<PrivacyPolicy />} />
        <Route path="terms_conditions" element={<TermsAndConditions />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="rollup_banner" element={<RollupBanners />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
