import React from "react";
import { BsSearch } from "react-icons/bs";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css"; // Import the CSS file
import NewEvent from "./NewEvent";

const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  const slideData = [
    {
      id: 0,
      img: "/img1.jpg",
      title: "Rock Legends Night",
      mainTitle: "DJ Night",
      price: "$20",
    },
    {
      id: 1,
      img: "/img2.jpg",
      title: "Gospel Praise Night",
      mainTitle: "Night of love",
      price: "$30",
    },
    {
      id: 2,
      img: "/img3.jpg",
      title: "World Music Celebration",
      mainTitle: "Dance Life",
      price: "$20",
    },
    {
      id: 3,
      img: "/img13.jpg",
      title: "Acoustic Evening",
      mainTitle: "Casical Night",
      price: "$50",
    },
  ];

  return (
    <div className="home-container">
      <header className="header">
        <h1>Event </h1>
        <div className="search-box">
          <input type="text" placeholder="Enter event name." />
          <BsSearch />
        </div>
        <Link to="/addevent" className="add-event-btn">
          Add Event
        </Link>
        <Link to="/register" className="register-attendee-btn">
          Register
        </Link>
      </header>

      <main className="slider-container">
        <Slider {...settings}>
          {slideData.map((slide) => (
            <div key={slide.id} className="slide">
              <div className="slide-content">
                <h3 className="slide-title">{slide.title}</h3>
                <h2 className="slide-main-title">{slide.mainTitle}</h2>
                <h3 className="slide-price">
                  Ticket Price: <strong>{slide.price}</strong>.00
                </h3>
                <div className="shop-now">Shop Now</div>
              </div>
              <img
                className="slide-image"
                src={slide.img}
                alt="banner"
                width={2000}
                height={2000}
              />
            </div>
          ))}
        </Slider>
      </main>

      <NewEvent />
    </div>
  );
};

export default Home;
