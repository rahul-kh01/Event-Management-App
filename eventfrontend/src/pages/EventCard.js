import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const EventCard = ({ img, title, desc, rating, price }) => {
  const generaterating = (rating) => {
    switch (rating) {
      case 1:
        return (
          <div>
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 2:
        return (
          <div>
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 3:
        return (
          <div>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 4:
        return (
          <div>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        );
      case 5:
        return (
          <div>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        );
    }
  };
  return (
    <div>
      <div className="event-card">
        <img src={img} alt={title} width={200} height={300} />
        <div className="event-info">
          <h3>{title}</h3>
          <p>{desc}</p>
          <div className="event-rating">{generaterating(rating)}</div>
          <div className="event-price">{price}</div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
