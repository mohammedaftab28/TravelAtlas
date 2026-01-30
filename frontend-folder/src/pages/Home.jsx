import paris from "../assets/Paris-carousel.jpg";
import tokyo from "../assets/Tokyo-carousel.jpg";
import newyork from "../assets/NewYork-carousel.jpg";

const Home = () => (
  <div className="home">
    {/* Carousel */}
    <div className="carousel">
      <div className="carousel-track">
        <img src={paris} alt="Paris" />
        <img src={tokyo} alt="Tokyo" />
        <img src={newyork} alt="New York" />
      </div>
    </div>

    {/* Info List */}
    <ul className="info-list">
      <li>💱 Currency</li>
      <li>🌦 Weather</li>
      <li>🌍 Time Zone</li>
    </ul>

    {/* Popular Destinations */}
    <h3>Popular Destinations</h3>
    <div className="cards">
      <div className="card">
        <img src={paris} alt="Paris" />
        <h5>Paris</h5>
      </div>
      <div className="card">
        <img src={tokyo} alt="Tokyo" />
        <h5>Tokyo</h5>
      </div>
      <div className="card">
        <img src={newyork} alt="New York" />
        <h5>New York</h5>
      </div>
      {/* <div className="card">
        <img src={dubai} alt="Dubai" />
        <h5>Dubai</h5>
      </div> */}
    </div>

    {/* Travel Guides & Tips */}
    <h3>Travel Guides & Tips</h3>
    <div className="cards three">
      {[
        "Top 10 European Getaways",
        "Packing Tips for Your Trip",
        "Budget Travel Advice",
      ].map((title) => (
        <div key={title} className="card text">
          <h5>{title}</h5>
        </div>
      ))}
    </div>
  </div>
);

export default Home;
