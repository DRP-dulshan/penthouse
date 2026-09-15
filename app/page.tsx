import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Location from '@/components/Location';
import MobileCtaBar from '@/components/MobileCtaBar';
import Opportunity from '@/components/Opportunity';
import QuickFacts from '@/components/QuickFacts';
import ScenarioCombined from '@/components/ScenarioCombined';
import ScenarioRental from '@/components/ScenarioRental';
import ScenarioResale from '@/components/ScenarioResale';

export default function Page() {
  return (
    <>
      <Header />
      {/* room for the mobile CTA bar so it never covers the disclaimer */}
      <main className="pb-[76px] md:pb-0">
        <Hero />
        <QuickFacts />
        <Opportunity />
        <Gallery />
        <ScenarioResale />
        <ScenarioCombined />
        <ScenarioRental />
        <Location />
        <FinalCta />
        <Footer />
      </main>
      <MobileCtaBar />
    </>
  );
}
