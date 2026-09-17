import React, { useState } from 'react';
import { 
  GitBranch, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  Award, 
  BarChart3, 
  ChevronDown, 
  ChevronUp, 
  FileText, 
  TrendingUp, 
  Send, 
  Check, 
  Building2, 
  Phone, 
  Mail, 
  User, 
  RotateCcw,
  Zap,
  Layers,
  Search,
  Users,
  GraduationCap,
  Gift,
  HeartHandshake,
  BookOpen,
  Target
} from 'lucide-react';
import { 
  DIAGNOSTIC_QUESTIONS, 
  PROCESS_PAIN_POINTS, 
  PROCESS_METHODOLOGY_STEPS, 
  CORE_PROCESS_DOMAINS, 
  CONSULTING_PACKAGES, 
  PROCESS_FAQS 
} from '../data/processConsultingData';
import processHeroImg from '../assets/images/process-hero.webp';

interface ProcessConsultingPageProps {
  onNavigateHome: () => void;
  onNavigateAiTraining: () => void;
}

export const ProcessConsultingPage: React.FC<ProcessConsultingPageProps> = ({
  onNavigateHome,
  onNavigateAiTraining
}) => {
  // Diagnostic State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isDiagnosticFinished, setIsDiagnosticFinished] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phoneOrEmail: '',
    companySize: '20-50 nhân sự',
    packageInterest: 'Gói Khảo Sát Hiện Trạng & Coaching Đội Ngũ Vận Hành (Tài Trợ 100% Miễn Phí)',
    includeTeamCoaching: true,
    painNotes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle Diagnostic Question Selection
  const handleSelectOption = (questionId: number, score: number) => {
    setSelectedAnswers(prev => ({ ...prev, [questionId]: score }));
    if (currentQuestionIndex < DIAGNOSTIC_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setIsDiagnosticFinished(true);
    }
  };

  const handleResetDiagnostic = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setIsDiagnosticFinished(false);
  };

  // Calculate Diagnostic Score
  const totalScore = (Object.values(selectedAnswers) as number[]).reduce((sum, val) => sum + val, 0);
  const maxScore = DIAGNOSTIC_QUESTIONS.length * 5;
  const scorePercent = Math.round((totalScore / maxScore) * 100);

  const getHealthAssessment = () => {
    if (scorePercent <= 40) {
      return {
        level: 'Báo Động Đỏ - Nghẽn Cổ Chai Nghiêm Trọng',
        color: 'text-rose-600',
        bgColor: 'bg-rose-50 border-rose-200',
        advice: 'Doanh nghiệp đang vận hành phụ thuộc nặng nề vào sự vụ của sếp, thiếu SOP và thất thoát chi phí lớn giữa các phòng ban. Cần khảo sát hiện trạng khẩn cấp và tổ chức buổi coaching chuyển giao phương pháp tháo gỡ điểm nghẽn cho đội ngũ quản lý.',
        recommendPackage: 'Gói Khảo Sát Hiện Trạng & Coaching Đội Ngũ Vận Hành (Tài Trợ 100% Miễn Phí)'
      };
    } else if (scorePercent <= 70) {
      return {
        level: 'Mức Độ Trung Bình - Đã Có Khung Nhưng Thiếu Số Hóa',
        color: 'text-amber-600',
        bgColor: 'bg-amber-50 border-amber-200',
        advice: 'Doanh nghiệp đã có một số quy định nhưng thiếu tính liên thông liên phòng ban và chưa có luồng duyệt tự động. Nhân viên còn thao tác rời rạc. Cần khảo sát hiện trạng 1-1 và huấn luyện chuyên sâu cho các trưởng phòng.',
        recommendPackage: 'Gói Chuẩn Hóa Phòng Ban Trọng Điểm (Kèm Coaching 3 Buổi)'
      };
    } else {
      return {
        level: 'Khá Tốt - Sẵn Sàng Scale-up Vận Hành Tự Động',
        color: 'text-emerald-600',
        bgColor: 'bg-emerald-50 border-emerald-200',
        advice: 'Hệ thống vận hành có nền tảng vững chắc. Bước tiếp theo là tối ưu hóa toàn diện trên nền tảng ERP/BPM và tích hợp AI tự động hóa báo cáo thời gian thực kèm chương trình Mentoring Kaizen.',
        recommendPackage: 'Gói Tái Cấu Trúc Vận Hành Toàn Diện (End-to-End)'
      };
    }
  };

  const assessment = getHealthAssessment();

  const handleApplyScoreToForm = () => {
    setFormData(prev => ({
      ...prev,
      packageInterest: assessment.recommendPackage,
      painNotes: `[Kết quả Chẩn đoán Vận hành]: Đạt ${scorePercent}/100 điểm. Tình trạng: ${assessment.level}. Cần hỗ trợ tư vấn tối ưu hóa.`
    }));
    const el = document.getElementById('consulting-form-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Value Prop */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-sky-100 to-emerald-100 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider shadow-2xs">
                <Gift className="w-3.5 h-3.5 text-sky-600" />
                <span>Chính Sách Đồng Hành: Miễn Phí Khảo Sát 1-1 & Coaching Đội Ngũ Vận Hành</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
                Chuẩn Hóa Quy Trình & Coach Đội Ngũ – <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">Giải Phóng Lãnh Đạo</span>, Tự Động Vận Hành
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Xóa bỏ tình trạng sếp làm nô lệ của sự vụ và nhân viên lúng túng vì thiếu chuẩn mực. TuoitreSoft <span className="font-semibold text-slate-900">tài trợ 100% chi phí khảo sát hiện trạng 1-1</span>, đồng thời trực tiếp <span className="font-semibold text-sky-700">Coach 'cầm tay chỉ việc'</span> cho đội ngũ quản lý cấp trung & nhân sự vận hành tự xây dựng bộ SOP chuẩn BPMN 2.0 và số hóa tự động hóa – Hoàn toàn không mất phí.
              </p>

              {/* Key Quantitative Proofs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-gradient-to-br from-white to-sky-50/50 border border-sky-200 shadow-xs">
                  <div className="font-mono text-xl sm:text-2xl font-black text-sky-600">0 ĐỒNG</div>
                  <div className="text-xs text-slate-600 font-medium mt-1">Khảo sát & 01 buổi Coach 1-1 (Trị giá 15Tr)</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="font-mono text-xl sm:text-2xl font-black text-emerald-600">-45%</div>
                  <div className="text-xs text-slate-500 font-medium mt-1">Thời gian luân chuyển & duyệt số</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="font-mono text-xl sm:text-2xl font-black text-blue-600">-30%</div>
                  <div className="text-xs text-slate-500 font-medium mt-1">Chi phí thất thoát vận hành</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="font-mono text-xl sm:text-2xl font-black text-indigo-600">100%</div>
                  <div className="text-xs text-slate-500 font-medium mt-1">Đội ngũ nội bộ tự tin làm chủ SOP</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
                <a
                  href="#consulting-form-section"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold text-sm shadow-md shadow-sky-500/25 flex items-center justify-center gap-2 transition-all active:scale-95 text-center"
                >
                  <Gift className="w-4 h-4 text-sky-200" />
                  <span>Nhận Suất Tư Vấn & Coach Miễn Phí</span>
                </a>
                <a
                  href="#diagnostic-section"
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-300 hover:border-sky-300 shadow-xs flex items-center justify-center gap-2 transition-all active:scale-95 text-center"
                >
                  <Search className="w-4 h-4 text-sky-600" />
                  <span>Chẩn Đoán Sức Khỏe Vận Hành (2 Phút)</span>
                </a>
              </div>

            </div>

            {/* Right Column: Hero Graphic Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-2xl shadow-sky-950/10 group">
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={processHeroImg}
                    alt="Sơ đồ kiến trúc tối ưu quy trình vận hành doanh nghiệp"
                    referrerPolicy="no-referrer"
                    loading="eager"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none"></div>
                </div>

                {/* Floating Highlight 1: Free Sponsorship */}
                <div className="absolute top-4 left-4 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-emerald-200 text-xs shadow-lg flex items-center gap-2">
                  <Gift className="w-4 h-4 text-emerald-600" />
                  <div>
                    <div className="text-[11px] text-emerald-700 font-bold uppercase">Tài Trợ 100% Miễn Phí</div>
                    <div className="font-bold text-slate-900 text-xs">Khảo Sát 1-1 & Coach Đội Ngũ</div>
                  </div>
                </div>

                {/* Floating Highlight 2: Single Point of Approval */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-emerald-200 text-xs shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-500 font-medium">Cam kết thời gian xử lý</div>
                      <div className="font-bold text-slate-900">SLA 15 Phút Phê Duyệt Số</div>
                    </div>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                    Zero Paperwork
                  </div>
                </div>

              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-sky-400/20 to-blue-400/20 rounded-3xl blur-xl -z-10"></div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE SECTION: CHẨN ĐOÁN ĐIỂM NGHẼN VẬN HÀNH (OPERATIONAL BOTTLENECK DIAGNOSTIC) */}
      <section id="diagnostic-section" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Công Cụ Tự Đánh Giá Nhanh 2 Phút</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Chẩn Đoán "Sức Khỏe Vận Hành" Doanh Nghiệp Bạn
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
              Trả lời 5 câu hỏi trắc nghiệm nhanh để phát hiện chính xác các nút thắt cổ chai. Hoàn thành để nhận ngay <span className="font-semibold text-slate-900">01 suất Tư vấn 1-1 & Coaching gỡ nghẽn HOÀN TOÀN MIỄN PHÍ</span> từ Chuyên gia TuoitreSoft.
            </p>
          </div>

          {/* Diagnostic Card Container */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8">
            
            {!isDiagnosticFinished ? (
              <div className="space-y-6">
                
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-500">
                    <span>CÂU HỎI {currentQuestionIndex + 1} / {DIAGNOSTIC_QUESTIONS.length}</span>
                    <span className="text-sky-600">{DIAGNOSTIC_QUESTIONS[currentQuestionIndex].category}</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-sky-500 to-blue-600 transition-all duration-300 rounded-full"
                      style={{ width: `${((currentQuestionIndex + 1) / DIAGNOSTIC_QUESTIONS.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Question Prompt */}
                <div className="pt-2">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                    {DIAGNOSTIC_QUESTIONS[currentQuestionIndex].question}
                  </h3>
                </div>

                {/* Options */}
                <div className="space-y-3 pt-2">
                  {DIAGNOSTIC_QUESTIONS[currentQuestionIndex].options.map((opt, idx) => {
                    const isSelected = selectedAnswers[DIAGNOSTIC_QUESTIONS[currentQuestionIndex].id] === opt.score;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(DIAGNOSTIC_QUESTIONS[currentQuestionIndex].id, opt.score)}
                        className={`w-full text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-start gap-3.5 ${
                          isSelected 
                            ? 'border-sky-500 bg-sky-50/60 ring-2 ring-sky-500/20' 
                            : 'border-slate-200 hover:border-sky-300 hover:bg-slate-50'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                          isSelected ? 'border-sky-600 bg-sky-600 text-white' : 'border-slate-300 bg-white'
                        }`}>
                          {isSelected && <Check className="w-3.5 h-3.5" />}
                        </div>
                        <div className="space-y-1">
                          <div className="font-bold text-sm text-slate-900">{opt.label}</div>
                          <div className="text-xs text-slate-500 leading-relaxed">{opt.description}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Navigation Back */}
                {currentQuestionIndex > 0 && (
                  <div className="pt-4 flex justify-between items-center border-t border-slate-100">
                    <button
                      onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
                      className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
                    >
                      ← Quay lại câu trước
                    </button>
                    <span className="text-xs text-slate-400">Chọn 1 phương án để tiếp tục</span>
                  </div>
                )}

              </div>
            ) : (
              /* Diagnostic Results Box */
              <div className="space-y-6">
                <div className="p-5 sm:p-6 rounded-2xl border bg-gradient-to-br from-white to-slate-50 border-slate-200">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-slate-200">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Chỉ Số Sức Khỏe Vận Hành (OHI)</div>
                      <div className={`text-xl sm:text-2xl font-extrabold mt-1 ${assessment.color}`}>
                        {assessment.level}
                      </div>
                    </div>
                    <div className="flex items-baseline gap-1 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-xs">
                      <span className="font-mono text-3xl font-black text-sky-600">{scorePercent}</span>
                      <span className="text-xs font-bold text-slate-400">/ 100 Điểm</span>
                    </div>
                  </div>

                  {/* Diagnostic Diagnosis & Advice */}
                  <div className="pt-5 space-y-3">
                    <div className="text-xs font-bold text-slate-700 uppercase">Đánh giá & Khuyến nghị giải pháp:</div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {assessment.advice}
                    </p>
                    <div className="p-4 rounded-xl bg-gradient-to-r from-sky-50 to-emerald-50 border border-sky-200 text-xs text-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="text-sky-700 font-bold uppercase text-[11px] tracking-wider">Đề xuất gói giải pháp phù hợp:</div>
                        <div className="font-extrabold text-slate-900 text-sm mt-0.5">{assessment.recommendPackage}</div>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold shrink-0 self-start sm:self-center">
                        <Gift className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Tài Trợ 100% Khảo Sát & Coach</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                  <button
                    onClick={handleResetDiagnostic}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-900 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Làm lại chẩn đoán</span>
                  </button>

                  <button
                    onClick={handleApplyScoreToForm}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white text-xs font-bold shadow-md shadow-sky-500/20 flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer"
                  >
                    <Gift className="w-3.5 h-3.5 text-sky-200" />
                    <span>Áp Dụng Kết Quả Nhận Suất Tư Vấn & Coach Miễn Phí</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            )}

          </div>

        </div>
      </section>

      {/* 2.5 CHIẾN LƯỢC ĐỒNG HÀNH: MIỄN PHÍ TƯ VẤN KHẢO SÁT & COACHING ĐỘI NGŨ VẬN HÀNH */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-sky-50/70 via-white to-slate-50/80 border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          {/* Section Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-300 text-emerald-800 text-xs font-extrabold uppercase tracking-wider shadow-2xs">
              <HeartHandshake className="w-4 h-4 text-emerald-600" />
              <span>Chính Sách Đồng Hành Doanh Nghiệp Đặc Biệt</span>
            </div>
            
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
              Tại Sao TuoitreSoft Tài Trợ Miễn Phí 100% Khảo Sát & Coaching Cho Đội Ngũ Của Bạn?
            </h2>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              <span className="font-bold text-slate-900">90% dự án quy trình thất bại</span> vì lý do: <span className="italic">"Thuê chuyên gia bên ngoài về vẽ sơ đồ dày cộp rồi cất ngăn kéo, nhân viên không hiểu, không tin và không chịu làm theo"</span>. TuoitreSoft chọn cách đồng hành khác biệt: Chúng tôi <span className="font-semibold text-sky-700">tài trợ 100% chi phí khảo sát 1-1</span> và trực tiếp <span className="font-semibold text-emerald-700">Coach 'cầm tay chỉ việc'</span> để chính đội ngũ quản lý cấp trung của bạn tự tin làm chủ và chuẩn hóa quy trình.
            </p>
          </div>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
            
            {/* Pillar 1: Audit 1-1 */}
            <div className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-sky-300 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold group-hover:bg-sky-500 group-hover:text-white transition-colors">
                    <Search className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-sky-100 text-sky-800 text-[11px] font-bold whitespace-nowrap">
                    Trị giá: 10.000.000đ → 0đ
                  </span>
                </div>

                <div className="space-y-1.5">
                  <div className="text-[11px] font-bold text-sky-600 uppercase tracking-wider">Trụ Cột 1</div>
                  <h3 className="font-display text-xl font-bold text-slate-900">
                    Khảo Sát & "Bắt Bệnh" Hiện Trạng 1-1 Tận Nơi
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Chuyên gia tư vấn trưởng trực tiếp làm việc cùng Ban Giám đốc và các trưởng bộ phận then chốt để rà soát toàn diện thực trạng vận hành.
                </p>

                <ul className="space-y-2.5 pt-2 border-t border-slate-100 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Phỏng vấn chuyên sâu 1-1 các vị trí chốt chặn vận hành</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Xác định chính xác 3 nút thắt cổ chai lớn nhất đang gây trễ hạn</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Lập bản đồ As-Is và báo cáo chẩn đoán điểm nghẽn chi tiết</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-semibold text-sky-700 bg-sky-50/70 p-2.5 rounded-lg text-center">
                Hoàn toàn miễn phí không ràng buộc dịch vụ
              </div>
            </div>

            {/* Pillar 2: Coaching Hands-on */}
            <div className="p-7 sm:p-8 rounded-2xl bg-gradient-to-b from-white to-emerald-50/30 border-2 border-emerald-400 shadow-md hover:shadow-xl transition-all flex flex-col justify-between relative group">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-extrabold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Giá Trị Khác Biệt Nhất</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold whitespace-nowrap">
                    Trị giá: 15.000.000đ → Tặng Kèm
                  </span>
                </div>

                <div className="space-y-1.5">
                  <div className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">Trụ Cột 2</div>
                  <h3 className="font-display text-xl font-bold text-slate-900">
                    Coaching Thực Chiến Cho Đội Ngũ Vận Hành
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Trực tiếp kèm cặp "cầm tay chỉ việc" cho các Trưởng bộ phận (Sales, Kế toán, Kho, Vận hành, HR) để đội ngũ tự tin làm chủ quy trình.
                </p>

                <ul className="space-y-2.5 pt-2 border-t border-slate-100 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Huấn luyện tư duy luồng việc chuẩn quốc tế BPMN 2.0</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Hướng dẫn nhân sự tự viết SOP 1 trang súc tích, dễ áp dụng</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Thiết lập ma trận RACI rõ người rõ việc, cam kết SLA phòng ban</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-bold text-emerald-800 bg-emerald-100/80 p-2.5 rounded-lg text-center">
                Đội ngũ tự tin duy trì & không sợ quy trình
              </div>
            </div>

            {/* Pillar 3: Framework & Tooling Handover */}
            <div className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 text-[11px] font-bold whitespace-nowrap">
                    Trị giá: 5.000.000đ → Bàn Giao
                  </span>
                </div>

                <div className="space-y-1.5">
                  <div className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">Trụ Cột 3</div>
                  <h3 className="font-display text-xl font-bold text-slate-900">
                    Bàn Giao Bộ Khung Mẫu & Bản Đồ Số Hóa
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Cung cấp trọn bộ tài liệu mẫu, checklist chuẩn ISO/Lean và tư vấn kiến trúc công nghệ phù hợp nhất với ngân sách của doanh nghiệp.
                </p>

                <ul className="space-y-2.5 pt-2 border-t border-slate-100 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Trao tay trọn bộ Template SOP & Checklist kiểm soát rủi ro</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Tư vấn số hóa luồng duyệt trên công nghệ sẵn có (Google/Microsoft/BPM)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Hướng dẫn phương pháp cải tiến Kaizen liên tục nội bộ</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-semibold text-blue-700 bg-blue-50/70 p-2.5 rounded-lg text-center">
                Không ép mua phần mềm đắt tiền
              </div>
            </div>

          </div>

          {/* 3 Cam Kết Vàng (Trust Indicators) */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              
              <div className="space-y-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>3 Cam Kết Vàng Từ TuoitreSoft</span>
                </div>
                <h4 className="font-display text-lg sm:text-xl font-extrabold text-slate-900">
                  Doanh Nghiệp Hoàn Toàn Yên Tâm Khi Nhận Tài Trợ
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full lg:w-auto">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>1. KHÔNG Chi Phí Ẩn</span>
                  </div>
                  <p className="text-slate-500 text-[11px] leading-relaxed">
                    Khảo sát 1-1 và buổi coaching đầu tiên hoàn toàn miễn phí 100%.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>2. KHÔNG Ép Buộc</span>
                  </div>
                  <p className="text-slate-500 text-[11px] leading-relaxed">
                    Doanh nghiệp toàn quyền quyết định tự làm hoặc thuê TuoitreSoft tiếp.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>3. KHÔNG Lý Thuyết</span>
                  </div>
                  <p className="text-slate-500 text-[11px] leading-relaxed">
                    Trực tiếp mổ xẻ trên dữ liệu thật, bài toán thật và phòng ban thật.
                  </p>
                </div>
              </div>

            </div>

            {/* CTA Ribbon */}
            <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500 flex items-center gap-2">
                <Clock className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Số lượng có hạn: Giới hạn tối đa <strong>05 doanh nghiệp</strong> mỗi tuần để đảm bảo chất lượng coaching 1-1.</span>
              </div>
              <a
                href="#consulting-form-section"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold text-xs shadow-md shadow-sky-500/20 flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <Gift className="w-3.5 h-3.5 text-sky-200" />
                <span>Đăng Ký Nhận Suất Khảo Sát & Coach Miễn Phí Ngay</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 3. NỖI ĐAU THỰC TẾ (PAIN POINTS) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
              <span>Thực Trạng Doanh Nghiệp Thường Gặp</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              4 "Căn Bệnh" Trầm Kha Khiến Vận Hành Đình Trệ & Chi Phí Đội Cao
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Nếu doanh nghiệp của bạn đang gặp phải những tình trạng dưới đây, đó là dấu hiệu rõ ràng hệ thống quy trình đang thiếu chuẩn mực và cần được tái cấu trúc.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROCESS_PAIN_POINTS.map((pain) => (
              <div 
                key={pain.id}
                className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-900">
                    {pain.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pain.desc}
                  </p>
                </div>
                
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-start gap-2 text-xs font-semibold text-rose-700 bg-rose-50/60 p-3 rounded-lg">
                  <span className="font-bold whitespace-nowrap shrink-0">Hệ quả:</span>
                  <span>{pain.impact}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. PHƯƠNG PHÁP LUẬN TƯ VẤN 4 BƯỚC (METHODOLOGY) */}
      <section className="py-16 sm:py-20 bg-slate-50/80 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-sky-600" />
              <span>Phương Pháp Luận Chuẩn Quốc Tế</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Quy Trình 4 Giai Đoạn Từ Khảo Sát Đến Chuyển Giao Số Hóa
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              TuoitreSoft không chỉ giao tài liệu văn bản rồi bỏ ngỏ, mà trực tiếp đồng hành cùng đội ngũ của bạn tái thiết kế, số hóa luồng duyệt và đào tạo thực chiến cho đến khi vận hành trơn tru.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {PROCESS_METHODOLOGY_STEPS.map((step, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between hover:border-sky-300 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black tracking-widest text-sky-600 uppercase bg-sky-50 px-2.5 py-1 rounded-md">
                      {step.phase}
                    </span>
                    <span className="font-mono text-xs text-slate-500 font-semibold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {step.duration}
                    </span>
                  </div>

                  <h3 className="font-display text-base font-bold text-slate-900 leading-snug">
                    {step.name}
                  </h3>

                  <ul className="space-y-2 pt-1">
                    {step.activities.map((act, actIdx) => (
                      <li key={actIdx} className="text-xs text-slate-600 flex items-start gap-2 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 bg-slate-50 p-3 rounded-xl">
                  <div className="text-[11px] text-slate-400 font-bold uppercase">Sản Phẩm Bàn Giao:</div>
                  <div className="text-xs font-bold text-slate-900 mt-0.5">{step.deliverables}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. CÁC KHỐI QUY TRÌNH TRỌNG YẾU ĐƯỢC CHUẨN HÓA */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-blue-600" />
              <span>Phạm Vi Triển Khai Thực Chiến</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              5 Khối Quy Trình Cốt Lõi Quyết Định Hiệu Quả Vận Hành
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Chuẩn hóa đồng bộ từ khâu tìm kiếm khách hàng đến thanh toán và chăm sóc sau bán hàng, đảm bảo thông tin thông suốt không tắc nghẽn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CORE_PROCESS_DOMAINS.map((domain) => (
              <div 
                key={domain.id}
                className="p-6 sm:p-7 rounded-2xl border border-slate-200 bg-white hover:border-sky-300 hover:shadow-md transition-all duration-300 space-y-4"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-900">
                      {domain.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {domain.scope}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Kết Quả Đạt Được:</div>
                  {domain.keyOutcomes.map((out, outIdx) => (
                    <div key={outIdx} className="text-xs text-slate-700 flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-bold">✓</div>
                      <span className="leading-relaxed">{out}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. BẢNG SO SÁNH TRƯỚC VÀ SAU KHI CHUẨN HÓA (BEFORE VS AFTER) */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Sự Khác Biệt Rõ Rệt: Trước & Sau Khi Chuẩn Hóa Vận Hành
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Minh chứng rõ ràng về giá trị khi doanh nghiệp chuyển đổi từ phương thức quản lý chắp vá sang vận hành chuẩn hóa.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
              
              {/* Before Column */}
              <div className="p-6 sm:p-8 space-y-5 bg-rose-50/30">
                <div className="flex items-center gap-2 text-rose-700 font-display font-extrabold text-lg pb-3 border-b border-rose-200">
                  <AlertTriangle className="w-5 h-5" />
                  <span>Doanh Nghiệp Chưa Chuẩn Hóa</span>
                </div>

                <ul className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold shrink-0">✕</span>
                    <span>Quy trình truyền miệng, mỗi nhân viên làm 1 kiểu, kết quả hên xui.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold shrink-0">✕</span>
                    <span>Phê duyệt giấy tờ hoặc chờ sếp duyệt mất từ 3 đến 7 ngày.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold shrink-0">✕</span>
                    <span>Các phòng ban đổ lỗi cho nhau khi có sự cố, không ai nhận trách nhiệm.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold shrink-0">✕</span>
                    <span>Sếp bận rộn 12 tiếng/ngày xử lý sự vụ, công ty không có chiến lược phát triển.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold shrink-0">✕</span>
                    <span>Nhân viên mới mất 2-3 tháng để hòa nhập và thường xuyên làm sai quy chế.</span>
                  </li>
                </ul>
              </div>

              {/* After Column */}
              <div className="p-6 sm:p-8 space-y-5 bg-sky-50/40">
                <div className="flex items-center gap-2 text-sky-700 font-display font-extrabold text-lg pb-3 border-b border-sky-200">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Sau Khi TuoitreSoft Chuẩn Hóa</span>
                </div>

                <ul className="space-y-4 text-xs sm:text-sm text-slate-800">
                  <li className="flex items-start gap-2.5 font-medium">
                    <span className="text-emerald-500 font-bold shrink-0">✓</span>
                    <span>100% tài liệu SOP trực quan, biểu mẫu số hóa rõ ràng, chất lượng ổn định.</span>
                  </li>
                  <li className="flex items-start gap-2.5 font-medium">
                    <span className="text-emerald-500 font-bold shrink-0">✓</span>
                    <span>Ký duyệt số trên Mobile trong 15-30 phút theo ma trận hạn mức tự động.</span>
                  </li>
                  <li className="flex items-start gap-2.5 font-medium">
                    <span className="text-emerald-500 font-bold shrink-0">✓</span>
                    <span>Ma trận RACI minh bạch: 1 người chịu trách nhiệm chính (Single Owner) cho mỗi bước.</span>
                  </li>
                  <li className="flex items-start gap-2.5 font-medium">
                    <span className="text-emerald-500 font-bold shrink-0">✓</span>
                    <span>Hệ thống tự vận hành trơn tru theo Dashboard số liệu, sếp thảnh thơi mở rộng kinh doanh.</span>
                  </li>
                  <li className="flex items-start gap-2.5 font-medium">
                    <span className="text-emerald-500 font-bold shrink-0">✓</span>
                    <span>Nhân sự mới chỉ cần 1-2 tuần là bắt nhịp công việc nhờ bộ cẩm nang SOP chuẩn.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 7. CÁC GÓI DỊCH VỤ TƯ VẤN LINH HOẠT (PACKAGES) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-sky-600" />
              <span>Gói Dịch Vụ Tư Vấn Phù Hợp Mọi Quy Mô</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Lựa Chọn Gói Tư Vấn Tối Ưu Cho Doanh Nghiệp Bạn
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Chi phí đầu tư hợp lý, cam kết mang lại hiệu quả đo đếm được ngay trong tháng đầu tiên triển khai.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {CONSULTING_PACKAGES.map((pkg) => {
              const isFreePkg = pkg.id === 'pkg-audit';
              return (
                <div 
                  key={pkg.id}
                  className={`rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 relative ${
                    isFreePkg
                      ? 'border-2 border-emerald-500 bg-gradient-to-b from-white via-white to-emerald-50/20 shadow-xl shadow-emerald-500/10'
                      : pkg.popular 
                        ? 'border-2 border-sky-500 bg-white shadow-xl shadow-sky-500/10' 
                        : 'border border-slate-200 bg-white hover:border-sky-300 shadow-sm'
                  }`}
                >
                  {isFreePkg && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-extrabold uppercase tracking-wider shadow-sm flex items-center gap-1.5 whitespace-nowrap">
                      <Gift className="w-3.5 h-3.5" />
                      <span>{pkg.badge}</span>
                    </div>
                  )}

                  {!isFreePkg && pkg.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-sky-600 text-white text-[11px] font-extrabold uppercase tracking-wider shadow-sm">
                      {pkg.badge}
                    </div>
                  )}

                  <div className="space-y-5">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <h3 className="font-display text-xl font-bold text-slate-900">{pkg.name}</h3>
                      </div>
                      
                      {isFreePkg && (
                        <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                          <div>
                            <div className="text-[11px] text-emerald-800 font-bold uppercase">Chính sách tài trợ</div>
                            <div className="font-mono text-lg font-black text-emerald-600 whitespace-nowrap">0 ĐỒNG / MIỄN PHÍ</div>
                          </div>
                          <div className="text-[11px] text-slate-500 line-through shrink-0 ml-2">15.000.000đ</div>
                        </div>
                      )}

                      <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-md">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Thời gian: {pkg.timeline}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed pt-1">
                        {pkg.target}
                      </p>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-slate-100">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Hạng Mục Công Việc:</div>
                      <ul className="space-y-2.5">
                        {pkg.features.map((feat, fIdx) => (
                          <li key={fIdx} className="text-xs text-slate-700 flex items-start gap-2.5 leading-relaxed">
                            <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isFreePkg ? 'text-emerald-500' : 'text-sky-500'}`} />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8">
                    <a
                      href="#consulting-form-section"
                      onClick={() => setFormData(prev => ({ ...prev, packageInterest: pkg.name }))}
                      className={`w-full py-3 rounded-xl font-bold text-xs text-center flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer ${
                        isFreePkg
                          ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/25'
                          : pkg.popular 
                            ? 'bg-sky-500 hover:bg-sky-600 text-white shadow-md shadow-sky-500/25' 
                            : 'bg-slate-100 hover:bg-sky-50 text-slate-800 hover:text-sky-600'
                      }`}
                    >
                      {isFreePkg && <Gift className="w-3.5 h-3.5 text-emerald-200" />}
                      <span>{pkg.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 8. FORM ĐĂNG KÝ TƯ VẤN (CONSULTING BOOKING FORM) */}
      <section id="consulting-form-section" className="py-16 sm:py-20 bg-slate-50/80 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 sm:p-10 space-y-8">
            
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <Gift className="w-3.5 h-3.5 text-emerald-600" />
                <span>Đăng Ký Khảo Sát & Nhận Suất Coach Miễn Phí</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Đặt Lịch Khảo Sát & Nhận 01 Buổi Coaching Đội Ngũ Vận Hành Miễn Phí
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
                Chuyên gia tư vấn trưởng của TuoitreSoft sẽ trực tiếp liên hệ lại trong vòng 2 giờ làm việc để xếp lịch làm việc 1-1 cùng ban giám đốc và thiết kế buổi coaching thực chiến cho đội ngũ quản lý của bạn.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900">
                  Đăng Ký Suất Tư Vấn & Coach Thành Công!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Cảm ơn <span className="font-bold text-slate-900">{formData.fullName}</span> từ công ty <span className="font-bold text-slate-900">{formData.companyName}</span>. Chúng tôi đã ghi nhận yêu cầu <span className="font-bold text-emerald-700">{formData.packageInterest}</span>. Chuyên gia tư vấn trưởng sẽ liên hệ qua số điện thoại/Zalo để xếp lịch khảo sát và chuẩn bị tài liệu coaching cho đội ngũ của bạn.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2 rounded-xl border border-emerald-300 text-emerald-800 text-xs font-bold hover:bg-emerald-100 transition-colors cursor-pointer"
                >
                  Gửi thêm thông tin
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-sky-600" />
                      <span>Họ và tên của bạn *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nguyễn Văn A - CEO / Giám đốc Vận hành"
                      value={formData.fullName}
                      onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-hidden transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-sky-600" />
                      <span>Tên Doanh Nghiệp *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Công ty Cổ phần ABC"
                      value={formData.companyName}
                      onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-hidden transition-all"
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-sky-600" />
                      <span>Số điện thoại / Zalo *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="0912 345 678"
                      value={formData.phoneOrEmail}
                      onChange={(e) => setFormData(prev => ({ ...prev, phoneOrEmail: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-hidden transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Quy mô nhân sự</label>
                    <select
                      value={formData.companySize}
                      onChange={(e) => setFormData(prev => ({ ...prev, companySize: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-hidden transition-all bg-white"
                    >
                      <option value="Dưới 20 nhân sự">Dưới 20 nhân sự</option>
                      <option value="20-50 nhân sự">20 - 50 nhân sự</option>
                      <option value="50-200 nhân sự">50 - 200 nhân sự</option>
                      <option value="Trên 200 nhân sự">Trên 200 nhân sự</option>
                    </select>
                  </div>

                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Gói tư vấn quan tâm</label>
                  <select
                    value={formData.packageInterest}
                    onChange={(e) => setFormData(prev => ({ ...prev, packageInterest: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-hidden transition-all bg-white font-medium"
                  >
                    <option value="Gói Khảo Sát Hiện Trạng & Coaching Đội Ngũ Vận Hành (Tài Trợ 100% Miễn Phí)">
                      🎁 Gói Khảo Sát Hiện Trạng & Coaching Đội Ngũ Vận Hành (Tài Trợ 100% Miễn Phí - Trị giá 15Tr)
                    </option>
                    <option value="Gói Chuẩn Hóa Phòng Ban Trọng Điểm">
                      Gói Chuẩn Hóa Phòng Ban Trọng Điểm (4-6 Tuần - Kèm Coaching 3 Buổi)
                    </option>
                    <option value="Gói Tái Cấu Trúc Vận Hành Toàn Diện (End-to-End)">
                      Gói Tái Cấu Trúc Vận Hành Toàn Diện (8-12 Tuần - Kèm Mentoring Kaizen)
                    </option>
                    <option value="Tư vấn may đo theo bài toán riêng">
                      Tư vấn may đo theo bài toán riêng
                    </option>
                  </select>
                </div>

                {/* Team Coaching Inclusion Checkbox */}
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-emerald-50 to-sky-50 border border-emerald-200 flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    id="includeCoaching" 
                    checked={formData.includeTeamCoaching} 
                    onChange={(e) => setFormData(prev => ({ ...prev, includeTeamCoaching: e.target.checked }))} 
                    className="mt-1 w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 border-slate-300 cursor-pointer" 
                  />
                  <label htmlFor="includeCoaching" className="text-xs text-slate-800 cursor-pointer">
                    <span className="font-bold text-emerald-800 block">
                      Tặng kèm 01 buổi Coaching thực chiến cho đội ngũ quản lý cấp trung (Trị giá 15.000.000đ – Miễn phí 100%)
                    </span>
                    <span className="text-slate-600 text-[11px] block mt-0.5">
                      Kèm cặp Trưởng phòng Sales, Kế toán, Kho, Vận hành, HR phương pháp tư duy BPMN 2.0, tự chuẩn hóa SOP 1 trang và ma trận phân quyền RACI.
                    </span>
                  </label>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Điểm nghẽn hoặc vấn đề lớn nhất đang gặp phải</label>
                  <textarea
                    rows={3}
                    placeholder="Mô tả ngắn gọn về khó khăn hiện tại (Vd: Phê duyệt chậm, kho sai lệch, sếp quá tải sự vụ, nhân viên chưa có SOP...)"
                    value={formData.painNotes}
                    onChange={(e) => setFormData(prev => ({ ...prev, painNotes: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-hidden transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-5 rounded-xl text-center leading-snug bg-gradient-to-r from-emerald-600 via-sky-600 to-blue-600 hover:from-emerald-700 hover:via-sky-700 hover:to-blue-700 text-white font-bold text-sm shadow-md shadow-sky-500/25 flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Đang gửi thông tin...</span>
                  ) : (
                    <>
                      <Gift className="w-4 h-4 shrink-0 text-emerald-200" />
                      <span>Gửi Yêu Cầu Nhận Suất Khảo Sát & Coach Miễn Phí (Trị Giá 15Tr)</span>
                      <ArrowRight className="w-4 h-4 shrink-0" />
                    </>
                  )}
                </button>

                <div className="text-center text-[11px] text-slate-400">
                  Cam kết bảo mật 100% dữ liệu kinh doanh của doanh nghiệp theo thỏa thuận NDA.
                </div>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* 9. CÂU HỎI THƯỜNG GẶP (FAQS) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Câu Hỏi Thường Gặp Về Tư Vấn Quy Trình Vận Hành
            </h2>
            <p className="text-slate-600 text-sm">
              Giải đáp thắc mắc của các chủ doanh nghiệp trước khi bắt đầu chuyển đổi chuẩn hóa.
            </p>
          </div>

          <div className="space-y-4">
            {PROCESS_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left p-5 bg-white hover:bg-slate-50 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-sky-600 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 10. BOTTOM BANNER NAVIGATION TO AI TRAINING & HOME */}
      <section className="py-12 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs text-sky-400 font-bold uppercase tracking-wider">Hệ Sinh Thái Dịch Vụ TuoitreSoft</div>
            <div className="text-lg font-bold">Khám phá thêm: Khóa Đào Tạo Ứng Dụng AI Thực Chiến Cho Doanh Nghiệp</div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onNavigateHome}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all whitespace-nowrap"
            >
              Về Trang Chủ
            </button>
            <button
              onClick={onNavigateAiTraining}
              className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-md shadow-sky-500/20"
            >
              <span>Xem Landing Đào Tạo AI</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
