import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Intro from "./components/sections/Intro";
import SupportGrid from "./components/sections/SupportGrid";
import TrueCraft from "./components/sections/TrueCraft";
import Marquee from "./components/sections/Marquee";
import ProductFeature from "./components/sections/ProductFeature";
import ProductTabs from "./components/sections/ProductTabs";
import GoalsCard from "./components/sections/GoalsCard";
import Testimonial from "./components/sections/Testimonial";
import BlogCards from "./components/sections/BlogCards";
import FAQ from "./components/sections/FAQ";
import SocialGrid from "./components/sections/SocialGrid";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Intro />
        <SupportGrid />
        <TrueCraft />
        <Marquee />
        <ProductFeature />
        <ProductTabs />
        <GoalsCard />
        <Testimonial />
        <BlogCards />
        <FAQ />
        <SocialGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
