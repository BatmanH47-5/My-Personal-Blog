// Testimonials.jsx
import React from 'react';
import './styles/Testimonials.css'
const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="display-5 fw-bold mb-4">Testimonials</h2>
        <div id="carouselExample" className="carousel slide carousel-dark carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            {["John Doe", "June Doe", "Johnny Doe"].map((name, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. {name === "John Doe" ? "Phasellus mattis orci enim, ac auctor ex iaculis ut." : name === "June Doe" ? "Nunc at tortor a massa facilisis venenatis sit amet non libero." : "Ut non metus eu sem ultrices tincidunt sit amet ac nisi."} Mauris ut elit mi. Sed nec quam bibendum, congue augue ut, molestie tellus. Fusce vel semper dolor." </p>
                <h5>{name}</h5>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
