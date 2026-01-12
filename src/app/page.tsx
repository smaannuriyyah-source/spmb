import Hero from "@/components/Hero";
import CampusOverview from "@/components/CampusOverview";
import Profile from "@/components/Profile";
import Programs from "@/components/Programs";
import Facilities from "@/components/Facilities";
import Extracurricular from "@/components/Extracurricular";
import Gallery from "@/components/Gallery";
import AlumniVideo from "@/components/AlumniVideo";
import Scholarships from "@/components/Scholarships";
import RegistrationFlow from "@/components/RegistrationFlow";
import CostInfo from "@/components/CostInfo";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Campus Overview - Interactive Map */}
      <CampusOverview />

      {/* School Profile - Vision & Mission */}
      <Profile />

      {/* Featured Programs */}
      <Programs />

      {/* School Facilities */}
      <Facilities />

      {/* Extracurricular Activities */}
      <Extracurricular />

      {/* Gallery Kegiatan */}
      <Gallery />

      {/* Video Alumni */}
      <AlumniVideo />

      {/* Scholarships & Benefits */}
      <Scholarships />

      {/* Registration Flow */}
      <RegistrationFlow />

      {/* Cost & Registration Period */}
      <CostInfo />

      {/* Call to Action */}
      <CTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
