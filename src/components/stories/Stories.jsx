import React from "react";
import "./stories.scss";

const stories = [
  {
    id: 1,
    name: "Jon",
    img:
      "https://img.freepik.com/free-photo/big-sale-discounts-products_23-2150336717.jpg?size=626&ext=jpg&ga=GA1.2.611131068.1685283469&semt=ais",
  },
  {
    id: 2,
    name: "Jon",
    img:
      "https://img.freepik.com/free-photo/big-sale-discounts-products_23-2150336717.jpg?size=626&ext=jpg&ga=GA1.2.611131068.1685283469&semt=ais",
  },
  {
    id: 3,
    name: "Jon",
    img:
      "https://img.freepik.com/free-photo/big-sale-discounts-products_23-2150336717.jpg?size=626&ext=jpg&ga=GA1.2.611131068.1685283469&semt=ais",
  },
  {
    id: 4,
    name: "Jon",
    img:
      "https://img.freepik.com/free-photo/big-sale-discounts-products_23-2150336717.jpg?size=626&ext=jpg&ga=GA1.2.611131068.1685283469&semt=ais",
  },
];
const Stories = () => {
  return (
    <div className="stories">
      {stories.map((story) => (
        <div className="story">
          <img src={story.img} alt="story-img" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
