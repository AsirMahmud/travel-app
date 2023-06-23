import BookingForm from "./components/Booking";
import Conta from "./components/Conta";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import TopBar from "./components/TopBar";
import Activites from "./components/Activites";

const App = () => {
  return (
    <div>
      <TopBar />
      <NavBar className="z-50" /> {/* Set a higher z-index value */}
      <div style={{ zIndex: 1 }}>
        {" "}
        {/* Set a lower z-index value */}
        <Hero />
        <Activites />
      </div>
      <BookingForm />
      <Gallery />
      <Conta />
      <Footer />
    </div>
  );
};

export default App;
