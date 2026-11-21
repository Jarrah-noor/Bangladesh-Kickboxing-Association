import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { HeritageSection } from './components/HeritageSection';
import { DisciplinesSection } from './components/DisciplinesSection';
import { AchievementsAndTournaments } from './components/AchievementsAndTournaments';
import { RulesLibrarySection } from './components/RulesLibrarySection';
import { LeadershipAndContact } from './components/LeadershipAndContact';
import { Footer } from './components/Footer';

export default function App() {
  const [inquiryTopic, setInquiryTopic] = useState<string>(
    'Athlete Registration & Club Affiliation'
  );

  const scrollToSection = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectEventInquiry = (eventName: string) => {
    setInquiryTopic(eventName);
    scrollToSection('#contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-[#111317]">
      <Header onInquiryClick={() => scrollToSection('#contact')} />

      <main className="flex-1">
        <HeroSection
          onExploreDisciplines={() => scrollToSection('#disciplines')}
        />
        <HeritageSection />
        <DisciplinesSection />
        <AchievementsAndTournaments
          onSelectEventInquiry={handleSelectEventInquiry}
        />
        <RulesLibrarySection />
        <LeadershipAndContact prefilledTopic={inquiryTopic} />
      </main>

      <Footer />
    </div>
  );
}
