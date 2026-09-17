import React from 'react';
import { 
  ArrowRight, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  Cloud,
  TrendingDown,
  Sparkles,
  Award,
  Clock
} from 'lucide-react';
import { HERO_CONTENT } from '../data/content';
import heroImg from '../assets/images/hero-hub.webp';

interface HeroSectionProps {
  onRegisterClick: () => void;
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onRegisterClick, 
  onExploreClick
}) => {
  return (
    <section id="hero-section" className="relative pt-28 pb-16 lg:pt-34 lg:pb-22 overflow-hidden bg-tech-grid bg-gradient-to-b from-sky-50/60 via-white to-white">
      {/* Background Ambience Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-sky-400/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Solution Consulting & Delivery Focus */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Minimalist Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-sky-500 animate-pulse"></span>
              <span>{HERO_CONTENT.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.2]">
              Tư Vấn & Triển Khai{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-sky-500 to-blue-600">
                Giải Pháp Số Thực Chiến
              </span>{' '}
              Cho Doanh Nghiệp
            </h1>

            {/* Sub-headline: Emphasize business benefits */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
              Đồng hành cùng <strong className="text-slate-900 font-bold">Cloud Ace (Google Cloud)</strong> và <strong className="text-slate-900 font-bold">Titanbases (AWS)</strong> tư vấn chiến lược và triển khai trọn gói — cam kết <strong className="text-sky-600 font-bold">tối ưu 30-50% chi phí</strong> và bứt phá hiệu suất vận hành.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
              <button
                id="btn-hero-register"
                onClick={onRegisterClick}
                className="group flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold text-sm shadow-xl shadow-sky-500/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>{HERO_CONTENT.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                id="btn-hero-explore"
                onClick={onExploreClick}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-300 hover:border-sky-400 shadow-xs transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Layers className="w-4 h-4 text-sky-600" />
                <span>{HERO_CONTENT.ctaSecondary}</span>
              </button>
            </div>

            {/* 3 Core Value Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Khảo sát hiện trạng & tư vấn 0đ</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Triển khai nhanh 4 - 8 tuần</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Hoàn vốn đầu tư sau 6 - 12 tháng</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase with Tangible Benefit Badges */}
          <div className="lg:col-span-6 relative">
            
            {/* Outer Container with Glowing Border */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-2xl shadow-sky-950/10 group">
              
              {/* 3D Visual Hub Graphic */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={heroImg}
                  alt="TuoitreSoft Solution Consulting & Delivery Hub"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Floating Badge 1: Turnkey Delivery */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-xs shadow-lg flex items-center gap-2 max-w-[calc(100%-1.5rem)]">
                <Award className="w-4 h-4 text-sky-600 shrink-0" />
                <div className="min-w-0">
                  <div className="text-[11px] text-slate-500 font-medium">Phương Thức Hợp Tác</div>
                  <div className="font-bold text-slate-900 text-xs">Tư Vấn & Triển Khai Trọn Gói</div>
                </div>
              </div>

              {/* Badges 2 & 3: nằm dưới ảnh trên mobile, nổi trên ảnh từ màn hình sm trở lên */}
              <div className="flex flex-wrap items-center gap-2 p-3 sm:p-0 sm:absolute sm:bottom-4 sm:left-4 sm:right-4 sm:justify-between">
                <div className="px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-emerald-200 text-xs shadow-lg flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <TrendingDown className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">Tối Ưu Vận Hành & FinOps</div>
                    <div className="font-bold text-emerald-700 text-xs whitespace-nowrap">Cắt Giảm 30% - 50% Chi Phí</div>
                  </div>
                </div>

                <div className="px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-sky-200 text-xs shadow-lg flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0"></div>
                  <div className="font-mono text-sky-700 text-xs font-bold whitespace-nowrap">Cam Kết SLA 99.99%</div>
                </div>
              </div>

            </div>

            {/* Decorative background blur ring */}
            <div className="absolute -inset-2 bg-gradient-to-r from-sky-400/20 to-blue-400/20 rounded-3xl blur-xl -z-10"></div>
          </div>

        </div>

        {/* Measurable Business ROI Strip */}
        <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6">
          {HERO_CONTENT.stats.map((stat, idx) => (
            <div key={idx} className="space-y-0.5">
              <div className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900">{stat.value}</div>
              <div className="text-xs font-bold text-sky-600">{stat.label}</div>
              <div className="text-[11px] text-slate-500">{stat.sub}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
