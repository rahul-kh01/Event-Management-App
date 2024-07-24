import React from "react";
import EventCard from "./EventCard";
import "./NewEvent.css";

const eventData = [
  {
    img: "/img7.jpg",
    title: "Rock Legends Night",
    desc: "Experience an electrifying night with legendary rock bands performing their greatest hits live on stage.",
    rating: 4,
    price: "$15.00",
  },
  {
    img: "/img6.jpg",
    title: "Jazz & Blues Fest",
    desc: "Enjoy smooth jazz and soulful blues from top artists in a relaxing outdoor setting.",
    rating: 5,
    price: "$25.00",
  },
  {
    img: "/img6.jpg",
    title: "EDM Extravaganza",
    desc: "Dance the night away to pulsating beats from world-renowned electronic dance music DJs.",
    rating: 4,
    price: "$12.00",
  },
  {
    img: "/img7.jpg",
    title: "Reggae Vibes Festival",
    desc: "Chill out to the smooth rhythms and positive vibes of top reggae artists in a vibrant outdoor atmosphere.",
    rating: 2,
    price: "$8.00",
  },
  {
    img: "/img5.jpg",
    title: "Folk Music Gathering",
    desc: " Immerse yourself in traditional and contemporary folk music from talented artists around the world.",
    rating: 5,
    price: "$30.00",
  },
  {
    img: "/img8.jpeg",
    title: "Classical Symphony Gala",
    desc: "A breathtaking evening featuring timeless classical pieces performed by a world-class symphony orchestra.",
    rating: 3,
    price: "$15.00",
  },
  {
    img: "/img9.jpg",
    title: "Pop Star Spectacular",
    desc: "A high-energy concert with chart-topping pop stars delivering unforgettable performances.",
    rating: 5,
    price: "$25.00",
  },
  {
    img: "/img10.jpeg",
    title: "Hip-Hop Battle Royale",
    desc: "Witness epic rap battles and performances from top hip-hop artists and underground sensations.",
    rating: 5,
    price: "$45.00",
  },
  {
    img: "/img11.jpeg",
    title: "Country Music Jamboree",
    desc: "Get your boots ready for a fun-filled night of the best country music hits.",
    rating: 5,
    price: "$55.00",
  },
  {
    img: "/img4.jpg",
    title: "Indie Music Fest",
    desc: " Discover emerging indie artists and bands showcasing their unique sounds and talents.",
    rating: 3,
    price: "$10.00",
  },
];

const NewEvent = () => {
  return (
    <div className="new-event-container">
      <h2 className="new-event-title">New Events</h2>
      <div className="event-card-container">
        {eventData.map((event, index) => (
          <EventCard
            key={index}
            img={event.img}
            title={event.title}
            desc={event.desc}
            rating={event.rating}
            price={event.price}
          />
        ))}
      </div>
    </div>
  );
};

export default NewEvent;
