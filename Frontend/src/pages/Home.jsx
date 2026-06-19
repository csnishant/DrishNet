import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WorkResult from "../components/WorkResult";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <WorkResult />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
