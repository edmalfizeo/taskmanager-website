import Header from "./components/Header";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import AboutApp from "./components/AboutApp";
import Testimonials from "./components/Testimonials";
import DownloadApp from "./components/DowloadApp";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div>
        <Header />
      </div>
      <main>
        <Hero />
        <Banner />
        <AboutApp />
        <Testimonials />
        <DownloadApp />
        <Footer />
      </main>
    </div>
  );
}
