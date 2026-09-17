import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PartnersSection } from './components/PartnersSection';
import { SolutionsSection } from './components/SolutionsSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ProcessSection } from './components/ProcessSection';
import { LeadFormSection } from './components/LeadFormSection';
import { Footer } from './components/Footer';
import { ProcessConsultingPage } from './pages/ProcessConsultingPage';
import { AiTrainingPage } from './pages/AiTrainingPage';
import { PhoneCall } from 'lucide-react';

type PageRoute = 'home' | 'process-consulting' | 'ai-training';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [consultInterest, setConsultInterest] = useState<string>('Tư vấn kiến trúc tổng thể');

  // URL Hash Sync for robust routing across iframe & browser navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/quy-trinh-van-hanh' || hash === '#quy-trinh-van-hanh') {
        setCurrentPage('process-consulting');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#/dao-tao-ai' || hash === '#dao-tao-ai') {
        setCurrentPage('ai-training');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (!hash || hash === '#/' || hash === '#') {
        setCurrentPage('home');
      }
    };

    // Initial check on load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageRoute, targetSectionId?: string) => {
    setCurrentPage(page);

    // Update URL hash without reload
    if (page === 'process-consulting') {
      window.location.hash = '#/quy-trinh-van-hanh';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'ai-training') {
      window.location.hash = '#/dao-tao-ai';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = '#/';
      if (targetSectionId) {
        // Wait a frame if switching from another page
        setTimeout(() => {
          const el = document.getElementById(targetSectionId);
          if (el) {
            const navOffset = 80;
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }, 80);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const scrollToLeadForm = (interest?: string) => {
    if (currentPage === 'process-consulting') {
      const el = document.getElementById('consulting-form-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    } else if (currentPage === 'ai-training') {
      const el = document.getElementById('ai-form-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    if (interest) {
      setConsultInterest(interest);
    }
    const el = document.getElementById('lead-form-section');
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToSolutions = () => {
    if (currentPage !== 'home') {
      handleNavigate('home', 'solutions-section');
      return;
    }
    const el = document.getElementById('solutions-section');
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col selection:bg-sky-500 selection:text-white font-sans">
      
      {/* Sticky Navigation */}
      <Navbar
        activePage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections / Router Views */}
      <main className="flex-1">
        
        {currentPage === 'home' && (
          <>
            {/* SECTION 1: HERO SECTION */}
            <HeroSection
              onRegisterClick={() => scrollToLeadForm('Tư vấn kiến trúc tổng thể')}
              onExploreClick={scrollToSolutions}
            />

            {/* SECTION 2: HỆ SINH THÁI ĐỐI TÁC CHIẾN LƯỢC (Cloud Ace & Titanbases) */}
            <PartnersSection />

            {/* SECTION 3: GIẢI PHÁP CỐT LÕI (AI & Cloud, ERP/CRM/BPM) */}
            <SolutionsSection
              onSelectSolutionForConsult={(title, cat) => {
                const interest = cat === 'ai_cloud' ? 'Tư vấn & Triển khai Trợ lý AI (RAG)' : 'Tư vấn & Triển khai ERP/CRM/BPM';
                scrollToLeadForm(interest);
              }}
            />

            {/* SECTION 4: TẠI SAO CHỌN TUOITRESOFT? */}
            <WhyChooseUsSection />

            {/* SECTION 5: QUY TRÌNH TRIỂN KHAI 5 BƯỚC */}
            <ProcessSection />

            {/* SECTION 6: FORM ĐĂNG KÝ / LIÊN HỆ (LEAD FORM) */}
            <LeadFormSection initialInterest={consultInterest} />
          </>
        )}

        {currentPage === 'process-consulting' && (
          <ProcessConsultingPage
            onNavigateHome={() => handleNavigate('home')}
            onNavigateAiTraining={() => handleNavigate('ai-training')}
          />
        )}

        {currentPage === 'ai-training' && (
          <AiTrainingPage
            onNavigateHome={() => handleNavigate('home')}
            onNavigateProcessConsulting={() => handleNavigate('process-consulting')}
          />
        )}

      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
      />

      {/* Floating Quick Action Drawer */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5">
        <button
          onClick={() => scrollToLeadForm()}
          title="Đăng ký tư vấn 1-1"
          className="p-3.5 rounded-full bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold shadow-xl shadow-sky-500/35 transition-all hover:scale-110 active:scale-95 cursor-pointer"
        >
          <PhoneCall className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}
