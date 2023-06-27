import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="container">
      <div className="main-content">
        <h1 className="heading">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="sub-text">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link to="/vans" className="find-your-van">
          Find your van
        </Link>
      </div>
    </main>
  );
};
export default Home;
