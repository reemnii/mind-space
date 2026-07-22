import Banner from "@/Components/Banner";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import ProjectsGrid from "@/Components/ProjectsGrid";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <div>
      <Banner />
      <Navbar />
      <Hero />
      <ProjectsGrid />
      <Contact />
      <Footer />
    </div>
  );
}
