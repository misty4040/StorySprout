import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Explore from "./pages/Explore";
import Gift from "./pages/Gift";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import CreateStory from "./pages/CreateStory";

function App() {
  const [user, setUser] = useState(null);

  // 👇 Load user from localStorage on initial mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <Router>
      <Header user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/create-story" element={<CreateStory />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<SignUp setUser={setUser} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
