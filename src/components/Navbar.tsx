import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, GitBranch, Bot, Layers, Sparkles } from 'lucide-react';
import logoIcon from '../assets/images/tuoitresoft-icon.png';

interface NavbarProps {
  activePage: 'home' | 'process-consulting' | 'ai-training';
  onNavigate: (page: 'home' | 'process-consulting' | 'ai-training', targetSectionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: 'home' | 'process-consulting' | 'ai-training', targetSectionId?: string) => {
    setMobileMenuOpen(false);
    onNavigate(page, targetSectionId);
  };

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm' 
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Logo Brand */}
          <button 
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left cursor-pointer group"
          >
            <img
              src={logoIcon}
              alt="TuoitreSoft logo"
              width={55}
              height={38}
              className="h-9 w-auto object-contain group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="font-display text-xl font-extrabold text-slate-900 tracking-tight leading-none">
                Tuoitre<span className="text-sky-600">Soft</span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-tight">
                Enterprise Cloud & AI Solutions
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            
            {/* 1. Trang Chủ */}
            <button 
              id="nav-home-link"
              onClick={() => handleNavClick('home')}
              className={`hover:text-sky-600 transition-colors cursor-pointer py-1 ${
                activePage === 'home' ? 'text-sky-600 font-bold border-b-2 border-sky-600' : ''
              }`}
            >
              Trang chủ
            </button>

            {/* 2. Landing Page: Tư Vấn Quy Trình Vận Hành */}
            <button 
              id="nav-process-consulting-link"
              onClick={() => handleNavClick('process-consulting')}
              className={`hover:text-sky-600 transition-colors cursor-pointer flex items-center gap-1.5 py-1 ${
                activePage === 'process-consulting' ? 'text-sky-600 font-bold border-b-2 border-sky-600' : ''
              }`}
            >
              <GitBranch className="w-3.5 h-3.5 text-sky-500" />
              <span>Tư Vấn Quy Trình</span>
              <span className="px-1.5 py-0.2 rounded-sm bg-sky-100 text-sky-800 text-[10px] font-extrabold">BPM</span>
            </button>

            {/* 3. Landing Page: Đào Tạo AI Doanh Nghiệp */}
            <button 
              id="nav-ai-training-link"
              onClick={() => handleNavClick('ai-training')}
              className={`hover:text-sky-600 transition-colors cursor-pointer flex items-center gap-1.5 py-1 ${
                activePage === 'ai-training' ? 'text-sky-600 font-bold border-b-2 border-sky-600' : ''
              }`}
            >
              <Bot className="w-3.5 h-3.5 text-sky-500" />
              <span>Đào Tạo AI</span>
              <span className="px-1.5 py-0.2 rounded-sm bg-blue-100 text-blue-800 text-[10px] font-extrabold">In-house</span>
            </button>

            {/* 4. Giải Pháp Cloud & ERP/CRM */}
            <button 
              id="nav-solutions-link"
              onClick={() => handleNavClick('home', 'solutions-section')}
              className="hover:text-sky-600 transition-colors cursor-pointer py-1"
            >
              Giải pháp & Triển khai
            </button>

            {/* 5. Đối Tác */}
            <button 
              id="nav-partners-link"
              onClick={() => handleNavClick('home', 'partners-section')}
              className="hover:text-sky-600 transition-colors cursor-pointer py-1"
            >
              Đối tác (Cloud Ace & Titanbases)
            </button>

          </nav>

          {/* Single Clean Primary Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <button 
              id="btn-nav-consultation"
              onClick={() => {
                if (activePage === 'process-consulting') {
                  const el = document.getElementById('consulting-form-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                } else if (activePage === 'ai-training') {
                  const el = document.getElementById('ai-form-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  handleNavClick('home', 'lead-form-section');
                }
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold transition-all cursor-pointer shadow-sm shadow-sky-500/20 active:scale-95"
            >
              <span>Tư vấn ngay</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button 
              id="btn-mobile-consultation"
              onClick={() => {
                if (activePage === 'process-consulting') {
                  const el = document.getElementById('consulting-form-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                } else if (activePage === 'ai-training') {
                  const el = document.getElementById('ai-form-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  handleNavClick('home', 'lead-form-section');
                }
              }}
              className="px-3 py-1.5 text-xs font-bold rounded-lg bg-sky-500 text-white"
            >
              Tư vấn
            </button>
            <button 
              id="btn-mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Clean Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 py-4 space-y-2 shadow-xl">
          <nav className="flex flex-col space-y-1 text-sm font-medium text-slate-700">
            
            <button 
              onClick={() => handleNavClick('home')}
              className={`text-left py-2.5 px-3 rounded-lg flex items-center justify-between ${
                activePage === 'home' ? 'bg-sky-50 text-sky-700 font-bold' : 'hover:bg-slate-50'
              }`}
            >
              <span>Trang chủ</span>
            </button>

            <button 
              onClick={() => handleNavClick('process-consulting')}
              className={`text-left py-2.5 px-3 rounded-lg flex items-center justify-between ${
                activePage === 'process-consulting' ? 'bg-sky-50 text-sky-700 font-bold' : 'hover:bg-slate-50'
              }`}
            >
              <span className="flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-sky-600" />
                <span>Tư Vấn Quy Trình Vận Hành</span>
              </span>
              <span className="px-2 py-0.5 rounded-sm bg-sky-100 text-sky-800 text-[10px] font-bold">BPM</span>
            </button>

            <button 
              onClick={() => handleNavClick('ai-training')}
              className={`text-left py-2.5 px-3 rounded-lg flex items-center justify-between ${
                activePage === 'ai-training' ? 'bg-sky-50 text-sky-700 font-bold' : 'hover:bg-slate-50'
              }`}
            >
              <span className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-sky-600" />
                <span>Đào Tạo AI Doanh Nghiệp</span>
              </span>
              <span className="px-2 py-0.5 rounded-sm bg-blue-100 text-blue-800 text-[10px] font-bold">In-house</span>
            </button>

            <button 
              onClick={() => handleNavClick('home', 'solutions-section')}
              className="text-left py-2.5 px-3 rounded-lg hover:bg-slate-50 text-slate-700"
            >
              Giải pháp tư vấn & triển khai
            </button>

            <button 
              onClick={() => handleNavClick('home', 'partners-section')}
              className="text-left py-2.5 px-3 rounded-lg hover:bg-slate-50 text-slate-700"
            >
              Đối tác chiến lược (Cloud Ace & Titanbases)
            </button>

          </nav>

          <div className="pt-3 border-t border-slate-100">
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                if (activePage === 'process-consulting') {
                  const el = document.getElementById('consulting-form-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                } else if (activePage === 'ai-training') {
                  const el = document.getElementById('ai-form-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  handleNavClick('home', 'lead-form-section');
                }
              }}
              className="w-full py-2.5 px-4 rounded-lg bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm shadow-sky-500/20"
            >
              <span>Đăng ký tư vấn 1-1</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
