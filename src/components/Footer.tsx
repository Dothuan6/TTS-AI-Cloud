import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  ExternalLink, 
  Activity, 
  Lock, 
  ArrowUpRight 
} from 'lucide-react';
import logoIcon from '../assets/images/tuoitresoft-icon.png';

interface FooterProps {
  onNavigate?: (page: 'home' | 'process-consulting' | 'ai-training', targetSectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollTo = (id: string) => {
    if (onNavigate) {
      onNavigate('home', id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 text-xs relative overflow-hidden">
      
      {/* Top Banner: Tracking & Technical Status Indicator */}
      <div className="border-b border-slate-200 bg-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3 text-[11px]">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-emerald-700 font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              SLA Hạ Tầng: 99.99% Hoạt Động Bình Thường
            </span>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <span className="text-slate-600">
              Đồng bộ Tracking: Google Analytics 4 (GA4) • GTM • Facebook Pixel Active
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-[11px] border border-slate-200">
              Fast Loading Core Web Vitals 99+
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-10">
          
          {/* Col 1: Brand & Overview (Spans 2 cols on lg) */}
          <div className="md:col-span-2 xl:col-span-2 space-y-5">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img
                src={logoIcon}
                alt="TuoitreSoft logo"
                width={64}
                height={44}
                className="h-11 w-auto object-contain"
              />
              <div>
                <span className="font-display text-xl font-bold tracking-tight text-slate-900">
                  Tuoitre<span className="text-sky-600">Soft</span>
                </span>
                <p className="text-[11px] text-slate-500 font-medium">
                  Tư Vấn & Triển Khai Giải Pháp Số Doanh Nghiệp
                </p>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed max-w-sm text-xs">
              Chuyên gia tư vấn kiến trúc và triển khai trọn gói giải pháp Cloud (GCP/AWS cùng Cloud Ace & Titanbases), Trí tuệ Nhân tạo (AI) và Hệ thống Quản trị (ERP/CRM/BPM) cam kết tối ưu chi phí và bứt phá hiệu suất vận hành.
            </p>

            {/* Strategic Partners Box */}
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2 shadow-2xs">
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Đối Tác Hạ Tầng Chiến Lược:
              </div>
              <div className="flex flex-wrap gap-2 text-[11px]">
                <a
                  href="https://sg.cloud-ace.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 inline-flex items-center gap-1 transition-colors font-medium"
                >
                  <span>Cloud Ace (GCP)</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href="https://titanbases.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 inline-flex items-center gap-1 transition-colors font-medium"
                >
                  <span>Titanbases (AWS)</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Solutions Navigation */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-bold text-slate-900 uppercase tracking-wider">
              Giải Pháp AI & Cloud
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollTo('solutions-section')} className="py-1 sm:py-0 text-slate-600 hover:text-sky-600 transition-colors text-left cursor-pointer">
                  AI Chatbot & Trợ Lý Ảo
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('solutions-section')} className="py-1 sm:py-0 text-slate-600 hover:text-sky-600 transition-colors text-left cursor-pointer">
                  BigQuery & Redshift BI
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('solutions-section')} className="py-1 sm:py-0 text-slate-600 hover:text-sky-600 transition-colors text-left cursor-pointer">
                  RPA + AI Số Hóa Chứng Từ
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('solutions-section')} className="py-1 sm:py-0 text-slate-600 hover:text-sky-600 transition-colors text-left cursor-pointer">
                  Cloud Migration & FinOps
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Enterprise Software */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-bold text-slate-900 uppercase tracking-wider">
              Quản Trị Doanh Nghiệp
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate ? onNavigate('process-consulting') : scrollTo('process-section')} 
                  className="text-sky-600 hover:text-sky-700 font-bold transition-colors text-left cursor-pointer flex items-center gap-1.5"
                >
                  <span>Tư Vấn Quy Trình Vận Hành</span>
                  <span className="px-1 py-0.2 rounded bg-sky-100 text-sky-800 text-[11px] font-bold">MỚI</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate ? onNavigate('ai-training') : scrollTo('lead-form-section')} 
                  className="text-blue-600 hover:text-blue-700 font-bold transition-colors text-left cursor-pointer flex items-center gap-1.5"
                >
                  <span>Đào Tạo AI Cho Doanh Nghiệp</span>
                  <span className="px-1 py-0.2 rounded bg-blue-100 text-blue-800 text-[11px] font-bold">HOT</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('solutions-section')} className="py-1 sm:py-0 text-slate-600 hover:text-sky-600 transition-colors text-left cursor-pointer">
                  Hệ Thống ERP Toàn Diện
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('solutions-section')} className="py-1 sm:py-0 text-slate-600 hover:text-sky-600 transition-colors text-left cursor-pointer">
                  Hệ Thống CRM Đa Kênh
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('solutions-section')} className="py-1 sm:py-0 text-slate-600 hover:text-sky-600 transition-colors text-left cursor-pointer">
                  BPM & Quy Trình Không Giấy Tờ
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('solutions-section')} className="py-1 sm:py-0 text-slate-600 hover:text-sky-600 transition-colors text-left cursor-pointer">
                  HRM Quản Trị Nhân Sự & KPI
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-bold text-slate-900 uppercase tracking-wider">
              Thông Tin Liên Hệ
            </h4>
            <ul className="space-y-1.5 sm:space-y-2.5 text-xs">
              <li className="flex items-start gap-2 text-slate-600">
                <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=316+L%C3%AA+V%C4%83n+S%E1%BB%B9%2C+Ph%C6%B0%E1%BB%9Dng+1%2C+T%C3%A2n+B%C3%ACnh%2C+H%E1%BB%93+Ch%C3%AD+Minh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-600 transition-colors"
                >
                  Trụ sở chính: 316 Lê Văn Sỹ, Phường 1, Quận Tân Bình, TP. Hồ Chí Minh
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-600">
                <Phone className="w-4 h-4 text-sky-600 shrink-0" />
                <a href="tel:+84909545966" className="hover:text-sky-600 transition-colors">
                  Hotline 24/7: 090 954 59 66
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-600">
                <Mail className="w-4 h-4 text-sky-600 shrink-0" />
                <a href="mailto:lvphuc@tuoitresoft.com" className="hover:text-sky-600 transition-colors break-all">
                  lvphuc@tuoitresoft.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Certifications & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex items-center gap-3 flex-wrap">
            <span>© {new Date().getFullYear()} TuoitreSoft Corporation. All rights reserved.</span>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <span className="flex items-center gap-1 text-slate-600">
              <Lock className="w-3 h-3 text-emerald-600" />
              ISO 27001 & SOC 2 Type II Certified
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => scrollTo('hero-section')} className="hover:text-slate-900 text-slate-600 transition-colors cursor-pointer">
              Về đầu trang ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
