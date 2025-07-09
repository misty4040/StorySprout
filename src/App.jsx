
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // you'll create this next
import About from "./pages/About";
import Explore from "./pages/Explore";
import Gift from "./pages/Gift";
import ContactUs from './pages/ContactUs';
import Login from "./pages/LoginPage"; // you'll create this next
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer"; // you'll create this next
import CreateStory from "./pages/CreateStory";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/gift" element={<Gift />}></Route>
        <Route path="/create-story" element={<CreateStory />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
