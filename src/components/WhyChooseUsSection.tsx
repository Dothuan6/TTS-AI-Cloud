import React from 'react';
import { 
  Cpu, 
  ShieldCheck, 
  SlidersHorizontal, 
  Headphones, 
  Check, 
  X, 
  Award,
  Sparkles,
  Zap
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/content';

export const WhyChooseUsSection: React.FC = () => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-6 h-6 text-sky-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-blue-600" />;
      case 'SlidersHorizontal': return <SlidersHorizontal className="w-6 h-6 text-sky-500" />;
      case 'Headphones': return <Headphones className="w-6 h-6 text-emerald-600" />;
      default: return <Sparkles className="w-6 h-6 text-sky-600" />;
    }
  };

  return (
    <section id="why-us-section" className="py-16 lg:py-24 bg-slate-50/80 border-y border-slate-200/80 relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-400/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Low Text Density */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold">
            <Award className="w-3.5 h-3.5 text-sky-600" />
            <span>NĂNG LỰC CẠNH TRANH</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tại Sao Doanh Nghiệp Chọn TuoitreSoft?
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Đồng hành như một bộ phận R&D và Cloud Architect chuyên trách của doanh nghiệp bạn.
          </p>
        </div>

        {/* 4 Core Pillars Grid: Visual & Breathable */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {WHY_CHOOSE_US.map((pillar) => (
            <div
              key={pillar.id}
              id={`pillar-${pillar.id}`}
              className="rounded-2xl p-6 bg-white border border-slate-200 hover:border-sky-400 transition-all duration-300 shadow-xs hover:shadow-md hover:shadow-sky-500/10 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-sky-50/80 border border-sky-100 flex items-center justify-center group-hover:scale-105 transition-transform shadow-2xs">
                  {getPillarIcon(pillar.icon)}
                </div>

                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-600">
                    {pillar.highlight}
                  </span>
                  <h3 className="font-display text-base font-bold text-slate-900 mt-0.5 group-hover:text-sky-600 transition-colors">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Proof point tag */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] font-semibold text-emerald-700">
                <Check className="w-3.5 h-3.5 shrink-0" />
                <span>{pillar.proofPoint}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Visual 3-Column Comparison: High Contrast, Low Text */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="text-center mb-8">
            <h3 className="font-display text-xl font-bold text-slate-900">
              So Sánh Mô Hình Triển Khai
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Khác biệt rõ rệt về tốc độ, chi phí và mức độ an toàn hạ tầng.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* Column 1: Traditional Outsourcing */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="text-slate-500 text-xs font-bold uppercase tracking-wider">Mô hình 1</div>
              <h4 className="text-sm font-bold text-slate-800">Gia Công Truyền Thống</h4>
              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-center gap-2 text-rose-600">
                  <X className="w-4 h-4 shrink-0" />
                  <span>Chỉ viết code theo giờ, thiếu tư vấn Cloud</span>
                </div>
                <div className="flex items-center gap-2 text-rose-600">
                  <X className="w-4 h-4 shrink-0" />
                  <span>Không có chuyên gia AI & BigQuery chuyên sâu</span>
                </div>
                <div className="flex items-center gap-2 text-rose-600">
                  <X className="w-4 h-4 shrink-0" />
                  <span>Hóa đơn Cloud tăng mất kiểm soát</span>
                </div>
              </div>
            </div>

            {/* Column 2: In-House Team */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="text-slate-500 text-xs font-bold uppercase tracking-wider">Mô hình 2</div>
              <h4 className="text-sm font-bold text-slate-800">Tự Xây Dựng In-House</h4>
              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-center gap-2 text-amber-600">
                  <X className="w-4 h-4 shrink-0" />
                  <span>Chi phí lương & tuyển dụng kỹ sư Cloud rất đắt</span>
                </div>
                <div className="flex items-center gap-2 text-amber-600">
                  <X className="w-4 h-4 shrink-0" />
                  <span>Mất 6 - 12 tháng để xây xong hệ thống</span>
                </div>
                <div className="flex items-center gap-2 text-amber-600">
                  <X className="w-4 h-4 shrink-0" />
                  <span>Rủi ro bảo mật do thiếu kinh nghiệm thực chiến</span>
                </div>
              </div>
            </div>

            {/* Column 3: TuoitreSoft Ecosystem (Highlighted) */}
            <div className="p-5 rounded-2xl bg-gradient-to-b from-sky-50/90 via-white to-sky-50/60 border-2 border-sky-500 space-y-4 relative shadow-lg shadow-sky-500/10">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-700 text-[10px] font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3" />
                <span>Giải pháp tối ưu nhất</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900">TuoitreSoft + Cloud Ace + Titanbases</h4>
              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-center gap-2 text-emerald-700 font-medium">
                  <Check className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>Hạ tầng chuẩn GCP & AWS, bảo hành SLA 99.99%</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-700 font-medium">
                  <Check className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>Triển khai nhanh chỉ 4 - 8 tuần, tiết kiệm 40% chi phí</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-700 font-medium">
                  <Check className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>Hỗ trợ kỹ thuật 24/7 dưới 15 phút</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
