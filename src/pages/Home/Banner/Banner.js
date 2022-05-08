import React from "react";

const Banner = () => {
  return (
    <div className="mt-4">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://i.ibb.co/xgN29bv/tv-1.png" className="d-block w-100" style={{height: '80vh',}} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://i.ibb.co/0Jvrq0J/mishaal-zahed-er-Mh-A6-CDz-JE-unsplash.jpg" className="d-block w-100" style={{height: '80vh',}} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://i.ibb.co/5RVbptP/concord-home-appliances.jpg" className="d-block w-100" style={{height: '80vh',}} alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
