import React from 'react';
import { 
  Search, 
  Layers, 
  Code2, 
  Rocket, 
  ShieldCheck, 
  Workflow, 
  ArrowRight,
  Clock
} from 'lucide-react';
import { PROCESS_STEPS } from '../data/content';

export const ProcessSection: React.FC = () => {
  const getStepIcon = (stepNumber: number) => {
    switch (stepNumber) {
      case 1: return <Search className="w-5 h-5 text-sky-600" />;
      case 2: return <Layers className="w-5 h-5 text-blue-600" />;
      case 3: return <Code2 className="w-5 h-5 text-sky-500" />;
      case 4: return <Rocket className="w-5 h-5 text-amber-600" />;
      case 5: return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      default: return <Workflow className="w-5 h-5 text-sky-600" />;
    }
  };

  return (
    <section id="process-section" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold">
            <Workflow className="w-3.5 h-3.5 text-sky-600" />
            <span>LỘ TRÌNH TƯ VẤN & TRIỂN KHAI</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Chu Trình 5 Bước Thực Chiến & Tối Ưu ROI
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Từ khảo sát hiện trạng 0đ đến bàn giao vận hành thực tế và FinOps tiết kiệm chi phí dài hạn.
          </p>
        </div>

        {/* Visual Continuous 5-Step Process Roadmap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.stepNumber}
              className="relative p-5 rounded-2xl bg-white border border-slate-200 hover:border-sky-400 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-xs hover:shadow-md hover:shadow-sky-500/10"
            >
              <div>
                {/* Step Indicator & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-black text-slate-300 group-hover:text-sky-600 transition-colors">
                    0{step.stepNumber}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-sky-50/80 border border-sky-100 flex items-center justify-center">
                    {getStepIcon(step.stepNumber)}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="font-display text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  {step.title}
                </h3>

                {/* Short Duration & Summary */}
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-sky-600 font-semibold mt-1 mb-2">
                  <Clock className="w-3 h-3" />
                  <span>{step.duration}</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.shortDesc}
                </p>
              </div>

              {/* Output Deliverable Tag */}
              <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="text-[11px] uppercase font-bold text-slate-400 block mb-0.5">Bàn giao:</span>
                <span className="text-slate-800 font-semibold">{step.deliverable}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
