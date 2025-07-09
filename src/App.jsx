
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // you'll create this next
import About from "./pages/About";
import CreateStory from "./pages/CreateStory";
import Explore from "./pages/Explore";
import Gift from "./pages/Gift";
import Login from "./pages/LoginPage"; // you'll create this next
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer"; // you'll create this next

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}></Route>
        <Route path="/create-story" element={<CreateStory />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/gift" element={<Gift />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
