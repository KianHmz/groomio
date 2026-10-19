import Navbar from "@/features/landing/components/header/Navbar";
import HeroSection from "@/features/landing/components/sections/HeroSection";

function Landing() {
  return (
    <div className="">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Another Section */}
      <section>
        <div className="container px-4 sm:px-6 md:px-8 py-12">nothing yet</div>
      </section>
    </div>
  );
}

export default Landing;
