import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import EditEvent from "./components/EditEvent";
import EventList from "./components/EventList";
import EventForm from "./components/EventForm";
import EventDetail from "./components/EventDetail";
import RegistrationForm from "./components/RegistrationForm";
import Menu from "./layout/Menu";
import Footer from "./layout/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MobNavbar from "./layout/MobNavbar";

function App({ children }) {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <MobNavbar />
        {children}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="/addevent" element={<EventForm />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/editevent/:id" element={<EditEvent />} />
          <Route path="/eventlist" element={<EventList />} />
          <Route path="/eventdetail/:id" element={<EventDetail />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
