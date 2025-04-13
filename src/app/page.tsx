import Header from "./components/Header";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div>
        <Header />
      </div>
      <main>
        <Hero />
        <Banner />
      </main>
    </div>
  );
}
