import React from 'react';
import { 
  ShieldCheck, 
  ArrowUpRight, 
  Cloud, 
  Database, 
  Cpu, 
  Lock, 
  CheckCircle2,
  Server
} from 'lucide-react';
import { PARTNERS_DATA } from '../data/content';

export const PartnersSection: React.FC = () => {
  return (
    <section id="partners-section" className="py-16 lg:py-24 bg-slate-50/80 border-y border-slate-200/80 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-sky-400/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Low Text Density */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
            <span>HỆ SINH THÁI ĐỐI TÁC CHIẾN LƯỢC</span>
          </div>
          
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Bảo Trợ Bởi Hạ Tầng Cloud Chuẩn Quốc Tế
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Hợp tác sâu rộng cùng hai đơn vị đối tác cấp cao của Google Cloud và AWS tại Châu Á.
          </p>
        </div>

        {/* Visual Multi-Cloud Ecosystem Diagram */}
        <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm relative">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            {/* GCP Node */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50/50 via-white to-slate-50 border border-blue-200 text-center space-y-3 hover:border-blue-400 transition-all shadow-xs">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-blue-100 text-blue-600 border border-blue-200 flex items-center justify-center">
                <Cloud className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-blue-700 uppercase tracking-wider">Google Cloud Partner</div>
                <h3 className="font-display text-xl font-bold text-slate-900 mt-0.5">Cloud Ace</h3>
              </div>
              <p className="text-xs text-slate-600">
                Chuyên gia hạ tầng Data Warehouse BigQuery, Vertex AI & Kubernetes GKE.
              </p>
              <a
                href="https://sg.cloud-ace.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              >
                <span>sg.cloud-ace.com</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Center: TuoitreSoft Core Hub */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-sky-50/90 via-white to-sky-50/50 border-2 border-sky-400 text-center space-y-3 shadow-xl shadow-sky-500/10 relative">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-tr from-sky-500 to-blue-600 text-white flex items-center justify-center shadow-lg shadow-sky-500/25">
                <Cpu className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-sky-700 uppercase tracking-widest">Enterprise Platform</div>
                <h3 className="font-display text-2xl font-black text-slate-900 mt-0.5">TuoitreSoft Hub</h3>
              </div>
              <p className="text-xs text-slate-600">
                Lõi tích hợp AI thông minh & Phần mềm quản trị nghiệp vụ (ERP/CRM/BPM/HRM).
              </p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 border border-sky-200 text-[11px] font-mono">
                <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
                <span>Multi-Cloud Orchestration</span>
              </div>
            </div>

            {/* AWS Node */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50/50 via-white to-slate-50 border border-amber-200 text-center space-y-3 hover:border-amber-400 transition-all shadow-xs">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-amber-100 text-amber-600 border border-amber-200 flex items-center justify-center">
                <Server className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-amber-700 uppercase tracking-wider">AWS Advanced Partner</div>
                <h3 className="font-display text-xl font-bold text-slate-900 mt-0.5">Titanbases</h3>
              </div>
              <p className="text-xs text-slate-600">
                Chuyên gia di chuyển đám mây, Redshift Analytics, Bedrock & FinOps tiết kiệm chi phí.
              </p>
              <a
                href="https://titanbases.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-amber-600 hover:text-amber-700 font-semibold transition-colors"
              >
                <span>titanbases.com</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Bottom Trust Row */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-600 font-medium">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Chứng chỉ bảo mật ISO/IEC 27001</span>
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-600" />
              <span>Tiêu chuẩn kiểm toán SOC 2 Type II</span>
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              <span>Cam kết SLA Uptime 99.99%</span>
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-600" />
              <span>Bảo mật dữ liệu chuẩn Zero-Trust</span>
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
