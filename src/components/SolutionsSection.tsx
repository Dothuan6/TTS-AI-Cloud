import React, { useState } from 'react';
import { 
  Bot, 
  BarChart3, 
  FileText, 
  Cloud, 
  Layers, 
  Users, 
  GitBranch, 
  UserCheck, 
  Sparkles, 
  ArrowRight, 
  Cpu, 
  CheckCircle2,
  Zap,
  TrendingUp
} from 'lucide-react';
import { SOLUTIONS_DATA } from '../data/content';
import cloudMigrationImg from '../assets/images/cloud-migration.webp';
import aiChatbotImg from '../assets/images/ai-chatbot.webp';
import aiAnalyticsImg from '../assets/images/ai-analytics.webp';
import rpaDocumentImg from '../assets/images/rpa-document.webp';
import erpSystemImg from '../assets/images/erp-system.webp';
import crmSystemImg from '../assets/images/crm-system.webp';
import bpmWorkflowImg from '../assets/images/bpm-workflow.webp';
import hrmSystemImg from '../assets/images/hrm-system.webp';

interface SolutionsSectionProps {
  onSelectSolutionForConsult: (solutionTitle: string, category: string) => void;
}

const SOLUTION_IMAGES: Record<string, string> = {
  'cloud-migration': cloudMigrationImg,
  'ai-chatbot': aiChatbotImg,
  'ai-analytics': aiAnalyticsImg,
  'rpa-document': rpaDocumentImg,
  'erp-system': erpSystemImg,
  'crm-system': crmSystemImg,
  'bpm-workflow': bpmWorkflowImg,
  'hrm-system': hrmSystemImg
};

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  onSelectSolutionForConsult
}) => {
  const [activeCategory, setActiveCategory] = useState<'ai_cloud' | 'enterprise'>('ai_cloud');

  const filteredSolutions = SOLUTIONS_DATA.filter(item => item.category === activeCategory);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Bot': return <Bot className="w-4 h-4" />;
      case 'BarChart3': return <BarChart3 className="w-4 h-4" />;
      case 'FileText': return <FileText className="w-4 h-4" />;
      case 'Cloud': return <Cloud className="w-4 h-4" />;
      case 'Layers': return <Layers className="w-4 h-4" />;
      case 'Users': return <Users className="w-4 h-4" />;
      case 'GitBranch': return <GitBranch className="w-4 h-4" />;
      case 'UserCheck': return <UserCheck className="w-4 h-4" />;
      default: return <Cpu className="w-4 h-4" />;
    }
  };

  return (
    <section id="solutions-section" className="py-16 lg:py-24 relative bg-white overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-sky-400/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Clean, Scannable Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>DANH MỤC TƯ VẤN & TRIỂN KHAI</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Dịch Vụ Tư Vấn & Triển Khai Thực Chiến
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Cam kết mang lại lợi ích đo đếm được: tối ưu chi phí hạ tầng, tự động hóa quy trình và gia tăng năng suất toàn diện.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-2xl bg-slate-100 border border-slate-200 shadow-sm">
            <button
              id="tab-btn-ai-cloud"
              onClick={() => setActiveCategory('ai_cloud')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === 'ai_cloud'
                  ? 'bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>1. Tư Vấn & Triển Khai AI - Cloud (GCP/AWS)</span>
            </button>

            <button
              id="tab-btn-enterprise"
              onClick={() => setActiveCategory('enterprise')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === 'enterprise'
                  ? 'bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>2. Tư Vấn & Triển Khai Quản Trị (ERP/CRM/BPM)</span>
            </button>
          </div>
        </div>

        {/* Visual Cards Grid with Rich Imagery and Tangible Business Impact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSolutions.map((solution) => {
            const imageUrl = SOLUTION_IMAGES[solution.id];
            
            return (
              <div
                key={solution.id}
                id={`solution-card-${solution.id}`}
                className="group rounded-2xl bg-white border border-slate-200 hover:border-sky-300 overflow-hidden transition-all duration-300 shadow-xs hover:shadow-lg hover:shadow-sky-500/10 flex flex-col justify-between"
              >
                {/* Visual Thumbnail Image */}
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={imageUrl}
                      alt={solution.title}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none"></div>
                    
                    {/* Top Floating Category Icon */}
                    <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-white/90 backdrop-blur-md text-sky-600 border border-slate-200 flex items-center justify-center shadow-sm">
                      {getIconComponent(solution.icon)}
                    </div>
                  </div>

                  {/* Card Content with Clear Scope & Measurable Benefit */}
                  <div className="p-5 space-y-3">
                    <h3 className="font-display text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {solution.title}
                    </h3>
                    
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {solution.shortDesc}
                    </p>

                    {/* Measurable Business Impact Tag */}
                    <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-800 flex items-start gap-1.5 leading-snug">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{solution.businessImpact}</span>
                    </div>

                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1 pt-0.5">
                      {solution.technologies.slice(0, 3).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card CTA Footer */}
                <div className="p-5 pt-0">
                  <button
                    id={`btn-consult-${solution.id}`}
                    onClick={() => onSelectSolutionForConsult(solution.title, solution.category)}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-600 text-slate-700 hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer border border-slate-200 hover:border-transparent active:scale-[0.98] shadow-2xs hover:shadow-md hover:shadow-sky-500/20"
                  >
                    <span>Tư Vấn & Lên Phương Án</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Visual Callout Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-sky-50 via-white to-blue-50 border border-sky-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0 border border-sky-200">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display text-sm font-bold text-slate-900">
                Cần thiết kế kiến trúc giải pháp riêng biệt theo bài toán của công ty bạn?
              </div>
              <div className="text-xs text-slate-600">
                Đội ngũ Solution Architect tiến hành khảo sát hiện trạng và đề xuất giải pháp (Solution Brief) hoàn toàn 0đ.
              </div>
            </div>
          </div>

          <button
            onClick={() => onSelectSolutionForConsult('Khảo sát & Tư vấn kiến trúc riêng', 'custom')}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold text-xs transition-all cursor-pointer shadow-md shadow-sky-500/20"
          >
            Đăng Ký Khảo Sát 1-1
          </button>
        </div>

      </div>
    </section>
  );
};
