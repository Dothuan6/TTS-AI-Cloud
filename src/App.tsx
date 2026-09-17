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

const SITE_URL = 'https://tts-ai-cloud-feddev.netlify.app';

const PAGE_META: Record<PageRoute, { path: string; title: string; description: string }> = {
  home: {
    path: '/',
    title: 'TuoitreSoft - Tư Vấn & Triển Khai Giải Pháp Cloud, AI & Quản Trị Doanh Nghiệp',
    description: 'Hệ sinh thái tư vấn & triển khai giải pháp Cloud, AI, ERP/CRM/BPM, chuẩn hóa quy trình vận hành doanh nghiệp và đào tạo ứng dụng AI thực chiến mang lại ROI tối đa.',
  },
  'process-consulting': {
    path: '/quy-trinh-van-hanh',
    title: 'Chuẩn Hóa Quy Trình Vận Hành & Coach Đội Ngũ (SOP/BPM) | TuoitreSoft',
    description: 'TuoitreSoft khảo sát hiện trạng 1-1 miễn phí và coach đội ngũ quản lý, vận hành tự xây dựng bộ SOP chuẩn BPMN 2.0, số hóa và tự động hóa quy trình doanh nghiệp.',
  },
  'ai-training': {
    path: '/dao-tao-ai',
    title: 'Tư Vấn & Đào Tạo AI In-House Cho Doanh Nghiệp | TuoitreSoft',
    description: 'Workshop AI in-house tận văn phòng: chuyên gia TuoitreSoft khảo sát bài toán thực tế và huấn luyện đội ngũ ứng dụng AI an toàn trên chính dữ liệu của doanh nghiệp.',
  },
};

const PATH_TO_PAGE: Record<string, PageRoute> = {
  '/': 'home',
  '/quy-trinh-van-hanh': 'process-consulting',
  '/dao-tao-ai': 'ai-training',
};

const setMeta = (selector: string, attr: string, value: string) => {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
};

const applySeo = (page: PageRoute) => {
  const meta = PAGE_META[page];
  const url = SITE_URL + meta.path;
  document.title = meta.title;
  setMeta('meta[name="description"]', 'content', meta.description);
  setMeta('meta[property="og:title"]', 'content', meta.title);
  setMeta('meta[property="og:description"]', 'content', meta.description);
  setMeta('meta[property="og:url"]', 'content', url);
  setMeta('link[rel="canonical"]', 'href', url);
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [consultInterest, setConsultInterest] = useState<string>('Tư vấn kiến trúc tổng thể');

  // Routing bằng đường dẫn thật (History API) để Google index được từng trang
  useEffect(() => {
    const syncFromLocation = () => {
      // Hỗ trợ link cũ dạng #/quy-trinh-van-hanh, #/dao-tao-ai
      const legacy = window.location.hash.replace(/^#\/?/, '');
      if (legacy && PATH_TO_PAGE['/' + legacy]) {
        window.history.replaceState(null, '', '/' + legacy);
      } else if (window.location.hash === '#/' || window.location.hash === '#') {
        window.history.replaceState(null, '', window.location.pathname);
      }
      const path = window.location.pathname.replace(/\/+$/, '') || '/';
      const page = PATH_TO_PAGE[path] ?? 'home';
      setCurrentPage(page);
      applySeo(page);
    };

    syncFromLocation();
    window.addEventListener('popstate', syncFromLocation);
    return () => window.removeEventListener('popstate', syncFromLocation);
  }, []);

  const handleNavigate = (page: PageRoute, targetSectionId?: string) => {
    const path = PAGE_META[page].path;
    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path);
    }
    setCurrentPage(page);
    applySeo(page);

    if (page === 'home' && targetSectionId) {
      // Chờ một nhịp để trang chủ render xong nếu đang chuyển từ trang khác
      setTimeout(() => {
        const el = document.getElementById(targetSectionId);
        if (el) {
          const navOffset = 80;
          const offsetPosition = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 80);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
