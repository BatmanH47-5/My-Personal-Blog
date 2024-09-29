// Projects.jsx
import React from 'react';
import './styles/Projects.css'
const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="display-5 fw-bold mb-4">Projects</h2>
        <div className="row">
          {Array.from({ length: 4 }).map((_, index) => (
            <div className="col-lg col-sm-6 mt-4" key={index}>
              <div className="card">
                <img src="https://codingyaar.com/wp-content/uploads/image-plcaeholder.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk
                    of the card's content.</p>
                  <a href="#" className="btn btn-outline-dark">Go somewhere</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
