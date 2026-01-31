import { ParticleBackground } from '@/components/ParticleBackground';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { DepartmentGrid } from '@/components/DepartmentGrid';
import { CreditWidget } from '@/components/CreditWidget';
import { GaiaProtocol } from '@/components/GaiaProtocol';
import { OpenSourceForge } from '@/components/OpenSourceForge';
import { ArchitectShowcase } from '@/components/ArchitectShowcase';
import { MissionControl } from '@/components/MissionControl';
import { Partners } from '@/components/Partners';
import { Footer } from '@/components/Footer';
import { MobileNav } from '@/components/MobileNav';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Particle Animation Background */}
      <ParticleBackground />
      
      {/* Mesh Gradient Overlay */}
      <div className="fixed inset-0 mesh-gradient pointer-events-none z-0" />
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <DepartmentGrid />
        <CreditWidget />
        <GaiaProtocol />
        <OpenSourceForge />
        <ArchitectShowcase />
        <MissionControl />
        <Partners />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Bottom padding for mobile nav */}
      <div className="h-20 md:hidden" />
    </div>
  );
};

export default Index;
