// Services.jsx
import React from 'react';
import './styles/Services.css'
const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="display-5 fw-bold mb-4">Services</h2>
        <div className="row">
          {Array.from({ length: 3 }).map((_, index) => (
            <div className="col-lg col-sm-6 mt-4" key={index}>
              <div className="card">
                <i className="bi bi-cup-hot-fill"></i>
                <div className="card-body">
                  <h5 className="card-title fw-bold">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk
                    of the card's content.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
