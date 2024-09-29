// Hero.jsx
import React from 'react';
import './styles/Hero.css'
const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container-lg">
        <div className="row align-items-center">
          <div className="col-sm-6">
            <h1 className="display-2 fw-bold">Jane Doe</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum laoreet finibus. Sed porta
              lobortis metus sed commodo. Fusce convallis vestibulum velit, id imperdiet metus faucibus nec.
            </p>
            <button className="btn btn-outline-dark btn-lg">Projects</button>
          </div>
          <div className="col-sm-6 text-center">
            <img src="https://codingyaar.com/wp-content/uploads/barista.png" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
