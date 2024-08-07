import React, { useState } from "react";

function Home({ onLogout }) {
  const [imageIndex, setImageIndex] = useState(0);
  const images = ["image1.jpg", "image2.jpg", "image3.jpg"];

  const changeImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div>
      <h2>Home</h2>
      <img src={images[imageIndex]} alt="Dynamic" onClick={changeImage} />
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Home;
