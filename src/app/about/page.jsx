import AboutOverview from '@/components/about/AboutOverview';
import HeroBanner from '@/components/about/HeroBanner';
import MissionVisionValues from '@/components/about/MissionVisionValues';
import SegmentsCatered from '@/components/about/SegmentsCatered';

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <HeroBanner />
      <AboutOverview />
      <MissionVisionValues />
      <SegmentsCatered />
    </main>
  );
}