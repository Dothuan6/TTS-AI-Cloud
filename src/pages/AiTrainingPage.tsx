import React, { useState } from 'react';
import { 
  Bot, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  TrendingUp, 
  Users, 
  Calculator, 
  BookOpen, 
  Download, 
  Check, 
  Building2, 
  Phone, 
  Mail, 
  User, 
  AlertTriangle, 
  Cpu, 
  Layers, 
  Send, 
  Lock, 
  ChevronDown, 
  ChevronUp, 
  FileCode2,
  Award,
  Gift,
  HeartHandshake,
  Target
} from 'lucide-react';
import { 
  AI_TRAINING_MODULES, 
  AI_TRAINING_METHODOLOGY, 
  AI_SECURITY_PILLARS, 
  AI_TRAINING_PACKAGES, 
  AI_FAQS 
} from '../data/aiTrainingData';
import aiTrainHeroImg from '../assets/images/ai-train-hero.webp';

interface AiTrainingPageProps {
  onNavigateHome: () => void;
  onNavigateProcessConsulting: () => void;
}

export const AiTrainingPage: React.FC<AiTrainingPageProps> = ({
  onNavigateHome,
  onNavigateProcessConsulting
}) => {
  // Calculator State
  const [employeeCount, setEmployeeCount] = useState<number>(20);
  const [avgSalaryMillion, setAvgSalaryMillion] = useState<number>(18);
  const [selectedDepts, setSelectedDepts] = useState<string[]>([
    'Marketing & Content',
    'Sales & Chăm Sóc Khách Hàng',
    'Nhân Sự & Hành Chính'
  ]);

  // Active Module Tab
  const [activeModuleId, setActiveModuleId] = useState<string>('c-suite');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phoneOrEmail: '',
    departmentNeed: 'Toàn bộ công ty (All-in-one)',
    trainingFormat: 'Gói Khảo Sát & Workshop AI In-House Thực Chiến (Tài Trợ 100% Miễn Phí)',
    includeFreeInHouseWorkshop: true,
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Department options for calculator
  const departmentOptions = [
    { id: 'mkt', name: 'Marketing & Content', hoursSavedPerPerson: 22 },
    { id: 'sales', name: 'Sales & Chăm Sóc Khách Hàng', hoursSavedPerPerson: 18 },
    { id: 'hr', name: 'Nhân Sự & Hành Chính', hoursSavedPerPerson: 16 },
    { id: 'fin', name: 'Tài Chính & Kế Toán', hoursSavedPerPerson: 15 },
    { id: 'tech', name: 'Kỹ Thuật & Vận Hành', hoursSavedPerPerson: 25 }
  ];

  const handleToggleDept = (deptName: string) => {
    setSelectedDepts(prev => {
      if (prev.includes(deptName)) {
        if (prev.length <= 1) return prev; // keep at least 1
        return prev.filter(d => d !== deptName);
      } else {
        return [...prev, deptName];
      }
    });
  };

  // Productivity Calculations
  const avgHoursSavedPerPerson = 18; // Base average hours saved/month
  const totalMonthlyHoursSaved = employeeCount * avgHoursSavedPerPerson;
  const hourlyRateVND = (avgSalaryMillion * 1000000) / (22 * 8); // Hourly wage in VND
  const monthlySavingsVND = Math.round(totalMonthlyHoursSaved * hourlyRateVND);
  const yearlySavingsVND = monthlySavingsVND * 12;

  const handleApplyCalcToForm = () => {
    setFormData(prev => ({
      ...prev,
      notes: `[Dự toán Đào tạo AI]: Quy mô ${employeeCount} nhân sự, phòng ban: ${selectedDepts.join(', ')}. Dự kiến tiết kiệm ${totalMonthlyHoursSaved} giờ/tháng (tương đương ${(monthlySavingsVND / 1000000).toFixed(1)} triệu VND/tháng). Cần nhận đề cương chi tiết.`
    }));
    const el = document.getElementById('ai-form-section');
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

  const activeModule = AI_TRAINING_MODULES.find(m => m.id === activeModuleId) || AI_TRAINING_MODULES[0];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-b from-emerald-50/40 via-sky-50/50 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Value Prop */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider shadow-xs">
                <Gift className="w-3.5 h-3.5 text-emerald-600" />
                <span>Chính Sách Đồng Hành: Tài Trợ 100% Khảo Sát & Workshop AI In-House Cho Doanh Nghiệp</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
                Tư Vấn & Đào Tạo AI In-House – <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-sky-600 to-blue-600">Tài Trợ 100% Thực Chiến</span>, Đột Phá 300% Năng Suất
              </h1>

              {/* Subhead */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Xóa bỏ nỗi sợ đầu tư lãng phí hoặc nhân sự dùng AI tự phát đối mặt rủi ro lộ dữ liệu. TuoitreSoft áp dụng chính sách <span className="font-semibold text-slate-900">"Tài trợ 100% Workshop In-House tận nơi"</span>: Chuyên gia AI đến trực tiếp văn phòng, khảo sát bài toán thực tế và huấn luyện đội ngũ "cầm tay chỉ việc" trên chính dữ liệu thật của công ty bạn — <span className="font-bold text-emerald-700">Hoàn toàn 0 ĐỒNG, không chi phí ẩn, không ràng buộc</span>.
              </p>

              {/* Key Trust Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-white border border-emerald-200 shadow-xs ring-1 ring-emerald-500/10">
                  <div className="font-mono text-xl sm:text-2xl font-black text-emerald-600">0 ĐỒNG</div>
                  <div className="text-xs text-slate-600 font-semibold mt-1">Workshop In-House (Trị giá 20Tr)</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="font-mono text-xl sm:text-2xl font-black text-sky-600">15-20h</div>
                  <div className="text-xs text-slate-500 font-medium mt-1">Tiết kiệm/nhân sự/tháng</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="font-mono text-xl sm:text-2xl font-black text-blue-600">100%</div>
                  <div className="text-xs text-slate-500 font-medium mt-1">Bảo mật dữ liệu nội bộ</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="font-mono text-xl sm:text-2xl font-black text-indigo-600">x3 Lần</div>
                  <div className="text-xs text-slate-500 font-medium mt-1">Tốc độ sáng tạo & báo cáo</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
                <a
                  href="#ai-form-section"
                  onClick={() => setFormData(prev => ({ ...prev, trainingFormat: 'Gói Khảo Sát & Workshop AI In-House Thực Chiến (Tài Trợ 100% Miễn Phí)' }))}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 via-sky-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2 transition-all active:scale-95 text-center cursor-pointer"
                >
                  <Gift className="w-4 h-4 text-emerald-200" />
                  <span>Nhận Suất Đào Tạo In-House Miễn Phí (Trị Giá 20Tr)</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#calculator-section"
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-300 hover:border-sky-300 shadow-xs flex items-center justify-center gap-2 transition-all active:scale-95 text-center cursor-pointer"
                >
                  <Calculator className="w-4 h-4 text-sky-600" />
                  <span>Tính Số Giờ Tiết Kiệm Bằng AI</span>
                </a>
              </div>

            </div>

            {/* Right Column: Hero Graphic Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-2xl shadow-sky-950/10 group">
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={aiTrainHeroImg}
                    alt="Đào tạo ứng dụng trí tuệ nhân tạo AI cho doanh nghiệp"
                    referrerPolicy="no-referrer"
                    loading="eager"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none"></div>
                </div>

                {/* Floating Highlight 1: Hands-on Practice */}
                <div className="absolute top-4 right-4 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-emerald-300 text-xs shadow-lg flex items-center gap-2">
                  <Gift className="w-4 h-4 text-emerald-600" />
                  <div>
                    <div className="text-[11px] text-emerald-700 font-bold uppercase tracking-wider">Chính Sách Đồng Hành</div>
                    <div className="font-bold text-slate-900 text-xs">Tài Trợ 100% Workshop In-House Tận Nơi</div>
                  </div>
                </div>

                {/* Floating Highlight 2: Enterprise Security */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-sky-200 text-xs shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                      <Lock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-500 font-medium">Bảo vệ bí mật kinh doanh</div>
                      <div className="font-bold text-slate-900">Cam Kết Không Dùng Dữ Liệu Train AI</div>
                    </div>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-sky-100 text-sky-800 text-[11px] font-bold">
                    Opt-out Privacy
                  </div>
                </div>

              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400/20 via-sky-400/20 to-blue-400/20 rounded-3xl blur-xl -z-10"></div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE TOOL: BẢNG TÍNH ƯỚC TÍNH NĂNG SUẤT & GIỜ TIẾT KIỆM (AI SAVINGS ESTIMATOR) */}
      <section id="calculator-section" className="py-16 sm:py-20 bg-slate-50/80 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-bold uppercase tracking-wider">
              <Calculator className="w-3.5 h-3.5 text-sky-600" />
              <span>Công Cụ Định Lượng Giá Trị Đầu Tư (ROI Estimator)</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Ước Tính Số Giờ Làm Việc & Chi Phí Tiết Kiệm Nhờ AI
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
              Điều chỉnh số lượng nhân sự và mức lương trung bình để xem ngay bài toán kinh tế cụ thể khi toàn bộ đội ngũ được đào tạo AI chuẩn mực.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8 space-y-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Controls Column */}
              <div className="space-y-6">
                
                {/* Employee Count Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-bold text-slate-700">
                    <span>Số lượng nhân sự tham gia đào tạo:</span>
                    <span className="font-mono text-sky-600 text-base">{employeeCount} Nhân sự</span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={200}
                    step={5}
                    value={employeeCount}
                    onChange={(e) => setEmployeeCount(Number(e.target.value))}
                    className="w-full accent-sky-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span>5 nhân sự (Team nhỏ)</span>
                    <span>50 nhân sự</span>
                    <span>200+ (Doanh nghiệp lớn)</span>
                  </div>
                </div>

                {/* Salary Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-bold text-slate-700">
                    <span>Mức lương trung bình tháng:</span>
                    <span className="font-mono text-emerald-600 text-base">{avgSalaryMillion} Triệu VNĐ</span>
                  </div>
                  <input
                    type="range"
                    min={8}
                    max={50}
                    step={2}
                    value={avgSalaryMillion}
                    onChange={(e) => setAvgSalaryMillion(Number(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span>8 Triệu</span>
                    <span>25 Triệu</span>
                    <span>50 Triệu</span>
                  </div>
                </div>

                {/* Department Checklist */}
                <div className="space-y-2">
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Chọn các phòng ban dự kiến triển khai:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {departmentOptions.map((dept) => {
                      const isChecked = selectedDepts.includes(dept.name);
                      return (
                        <button
                          key={dept.id}
                          type="button"
                          onClick={() => handleToggleDept(dept.name)}
                          className={`p-2.5 rounded-lg border text-left text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${
                            isChecked 
                              ? 'border-sky-500 bg-sky-50 text-sky-900 font-bold' 
                              : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          <div className={`w-4 h-4 rounded-sm border flex items-center justify-center shrink-0 ${
                            isChecked ? 'bg-sky-600 border-sky-600 text-white' : 'border-slate-300 bg-white'
                          }`}>
                            {isChecked && <Check className="w-3 h-3" />}
                          </div>
                          <span>{dept.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Results Output Column */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-sky-950 text-white flex flex-col justify-between space-y-6 shadow-xl">
                
                <div className="space-y-4">
                  <div className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                    Hiệu Quả Dự Kiến Mang Lại Mỗi Tháng:
                  </div>

                  {/* Monthly Hours Saved */}
                  <div className="p-4 rounded-xl bg-white/10 border border-white/10 backdrop-blur-xs space-y-1">
                    <div className="text-xs text-slate-300">Tổng thời gian làm việc được giải phóng:</div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-3xl sm:text-4xl font-black text-sky-300">
                        {totalMonthlyHoursSaved.toLocaleString('vi-VN')}
                      </span>
                      <span className="text-xs font-bold text-slate-200">Giờ / Tháng</span>
                    </div>
                    <div className="text-[11px] text-sky-200">
                      Tương đương tiết kiệm khoảng {(totalMonthlyHoursSaved / 8).toFixed(0)} ngày công làm việc mỗi tháng!
                    </div>
                  </div>

                  {/* Financial Value */}
                  <div className="p-4 rounded-xl bg-white/10 border border-white/10 backdrop-blur-xs space-y-1">
                    <div className="text-xs text-slate-300">Giá trị tài chính tương đương thu hồi:</div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-3xl sm:text-4xl font-black text-emerald-400">
                        {(monthlySavingsVND / 1000000).toFixed(1)}
                      </span>
                      <span className="text-xs font-bold text-slate-200">Triệu VNĐ / Tháng</span>
                    </div>
                    <div className="text-[11px] text-emerald-300 font-medium">
                      ~ {(yearlySavingsVND / 1000000000).toFixed(2)} Tỷ VNĐ tiết kiệm mỗi năm
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleApplyCalcToForm}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-sky-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-slate-950 font-bold text-xs shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer"
                >
                  <Gift className="w-4 h-4 text-slate-950" />
                  <span>Áp Dụng Số Liệu & Nhận Suất Đào Tạo AI In-House Miễn Phí (Trị Giá 20Tr)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. VẤN ĐỀ CỦA DOANH NGHIỆP KHI TRIỂN KHAI AI (ENTERPRISE AI HURDLES) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
              <span>Rào Cản Triển Khai Thực Tế</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Tại Sao 80% Doanh Nghiệp Thất Bại Khi Tự Mày Mò Ứng Dụng AI?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Trang bị tài khoản ChatGPT cho nhân viên là chưa đủ. Dưới đây là những sai lầm phổ biến khiến doanh nghiệp tốn tiền mà không thấy hiệu quả thực chất.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl border border-slate-200 bg-white space-y-3 hover:border-sky-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-display text-base font-bold text-slate-900">Rò Rỉ Dữ Liệu Kinh Doanh</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Nhân viên vô tình đưa hợp đồng, báo cáo tài chính mật lên các công cụ AI công cộng, đối mặt với nguy cơ vi phạm pháp lý và lộ bí mật cạnh tranh.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white space-y-3 hover:border-sky-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="font-display text-base font-bold text-slate-900">Ứng Dụng Nửa Vời, Tự Phát</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Nhân viên chỉ biết dùng AI viết vài email đơn giản hoặc dịch thuật sơ sài, không biết cách đưa AI vào quy trình chốt sale, chăm sóc khách hay báo cáo tự động.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white space-y-3 hover:border-sky-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-display text-base font-bold text-slate-900">Học Khóa Ngoài Quá Chung Chung</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Các khóa học trên mạng dạy lý thuyết đại trà, ví dụ xa rời thực tế. Học xong về công ty nhân viên vẫn không biết áp dụng vào file Excel hay tài liệu nội bộ ra sao.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white space-y-3 hover:border-sky-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-display text-base font-bold text-slate-900">Thiếu Đo Lường Hiệu Suất (ROI)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ban lãnh đạo không nắm được sau khi đầu tư tài khoản và công nghệ, năng suất công ty tăng bao nhiêu phần trăm, thời gian xử lý đơn hàng giảm được bao nhiêu giờ.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 3.1. CHIẾN LƯỢC MỞ CỬA ĐỒNG HÀNH: TÀI TRỢ 100% KHẢO SÁT & WORKSHOP IN-HOUSE (DOOR OPENER) */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-emerald-50/50 via-white to-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3.5 max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider shadow-xs">
              <HeartHandshake className="w-3.5 h-3.5 text-emerald-600" />
              <span>Chính Sách Đồng Hành Tiên Quyết Của TuoitreSoft</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Tại Sao TuoitreSoft Sẵn Sàng <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-sky-600">Tài Trợ 100% Chi Phí</span> Workshop AI In-House Cho Doanh Nghiệp?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Hơn 90% Doanh nghiệp băn khoăn: <em className="text-slate-800 font-medium">"Liệu AI có thực sự giải quyết được bài toán cụ thể của ngành mình, hay lại mua thêm phần mềm rồi nhân viên bỏ xó?"</em>. Chúng tôi thấu hiểu sự thận trọng chính đáng đó. TuoitreSoft chọn cách <strong>mang giá trị thực tế đến tận cửa văn phòng bạn trước</strong>: Tài trợ 100% chi phí 01 Buổi Workshop In-House thực chiến trên chính dữ liệu thật của công ty bạn, để ban lãnh đạo và đội ngũ trực tiếp kiểm chứng hiệu quả trước khi quyết định đầu tư lớn.
            </p>
          </div>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            
            {/* Pillar 1 */}
            <div className="bg-white rounded-2xl border-2 border-emerald-200 p-7 shadow-lg shadow-emerald-500/5 hover:border-emerald-400 transition-all flex flex-col justify-between relative">
              <div className="absolute -top-3.5 left-6 px-3 py-0.5 rounded-full bg-emerald-600 text-white text-[11px] font-extrabold uppercase tracking-wider">
                Giai Đoạn 1: Khảo Sát 1-1
              </div>
              <div className="space-y-4 pt-2">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <Target className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold text-emerald-600">Trị giá 8.000.000đ → Miễn Phí 100%</div>
                  <h3 className="font-display text-lg font-bold text-slate-900">
                    Khảo Sát & Bắt Bệnh Bài Toán AI
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Chuyên gia AI của TuoitreSoft làm việc 1-1 cùng Ban Giám đốc và các Trưởng bộ phận (Sales, Marketing, HR, Kế toán, Vận hành) để rà soát luồng việc lặp lại thủ công và dữ liệu hiện có.
                </p>
                <ul className="space-y-2 pt-2 border-t border-slate-100">
                  <li className="text-xs text-slate-700 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Xác định 3-5 bài toán AI "Low Cost - High Impact" ưu tiên làm ngay</span>
                  </li>
                  <li className="text-xs text-slate-700 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Đánh giá mức độ sẵn sàng dữ liệu và bảo mật thông tin</span>
                  </li>
                  <li className="text-xs text-slate-700 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Lập đề cương đào tạo may đo sát 100% thực tế doanh nghiệp</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500">Hình thức:</span>
                <span className="font-bold text-slate-900">Phỏng vấn & Rà soát 1-1</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white rounded-2xl border-2 border-sky-400 p-7 shadow-xl shadow-sky-500/10 hover:border-sky-500 transition-all flex flex-col justify-between relative ring-2 ring-sky-500/20">
              <div className="absolute -top-3.5 left-6 px-3 py-0.5 rounded-full bg-sky-600 text-white text-[11px] font-extrabold uppercase tracking-wider">
                Giai Đoạn 2: Workshop In-House
              </div>
              <div className="space-y-4 pt-2">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                  <Users className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold text-sky-600">Trị giá 12.000.000đ → Tài Trợ 100%</div>
                  <h3 className="font-display text-lg font-bold text-slate-900">
                    Workshop "Cầm Tay Chỉ Việc" Tận Nơi
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Giảng viên và Chuyên gia AI của TuoitreSoft đến trực tiếp văn phòng quý công ty. 20% tư duy - 80% thực hành trực tiếp trên chính dữ liệu, file mẫu, báo cáo thật của công ty bạn.
                </p>
                <ul className="space-y-2 pt-2 border-t border-slate-100">
                  <li className="text-xs text-slate-700 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                    <span>Thực hành kỹ thuật Prompt Engineering nâng cao cho nhân viên</span>
                  </li>
                  <li className="text-xs text-slate-700 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                    <span>Tự tay xây dựng Custom Bot / GPTs trợ lý riêng của phòng ban</span>
                  </li>
                  <li className="text-xs text-slate-700 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                    <span>100% học viên ra được sản phẩm ứng dụng ngay trong ca làm việc</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500">Địa điểm:</span>
                <span className="font-bold text-sky-700">Trực tiếp tại văn phòng của bạn</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white rounded-2xl border-2 border-indigo-200 p-7 shadow-lg shadow-indigo-500/5 hover:border-indigo-400 transition-all flex flex-col justify-between relative">
              <div className="absolute -top-3.5 left-6 px-3 py-0.5 rounded-full bg-indigo-600 text-white text-[11px] font-extrabold uppercase tracking-wider">
                Giai Đoạn 3: Bàn Giao & Bảo Vệ
              </div>
              <div className="space-y-4 pt-2">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold text-indigo-600">Trị giá 5.000.000đ → Tặng Kèm 100%</div>
                  <h3 className="font-display text-lg font-bold text-slate-900">
                    Bàn Giao Playbook & Rào Chắn Bảo Mật
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Trang bị sẵn tài nguyên và thiết lập rào chắn dữ liệu an toàn để doanh nghiệp an tâm phát huy năng lực AI lâu dài mà không sợ lộ bí mật kinh doanh hay rủi ro pháp lý.
                </p>
                <ul className="space-y-2 pt-2 border-t border-slate-100">
                  <li className="text-xs text-slate-700 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                    <span>Tặng bộ 100+ Enterprise Prompts độc quyền may đo theo phòng ban</span>
                  </li>
                  <li className="text-xs text-slate-700 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                    <span>Hướng dẫn cài đặt Opt-out Data Privacy chống rò rỉ dữ liệu</span>
                  </li>
                  <li className="text-xs text-slate-700 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                    <span>Tư vấn cơ chế quản trị tài khoản tập trung, tiết kiệm chi phí</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500">Tài nguyên:</span>
                <span className="font-bold text-slate-900">Bàn giao toàn quyền sở hữu</span>
              </div>
            </div>

          </div>

          {/* 3 Cam Kết Vàng (Three Gold Commitments) */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="text-center font-bold text-slate-900 text-sm uppercase tracking-wider mb-6">
              3 CAM KẾT VÀNG TỪ TUOITRESOFT TRONG CHƯƠNG TRÌNH TÀI TRỢ IN-HOUSE
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0 text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">HOÀN TOÀN 0 ĐỒNG</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Khảo sát hiện trạng và 01 buổi Workshop In-House tận nơi đầu tiên được tài trợ 100%. Tuyệt đối không phát sinh chi phí ẩn.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold shrink-0 text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">KHÔNG RÀNG BUỘC HỢP ĐỒNG</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Doanh nghiệp toàn quyền quyết định có tiếp tục triển khai các gói đào tạo nâng cao hay không. Toàn bộ tài liệu và bot tạo ra thuộc về bạn.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold shrink-0 text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">100% THỰC HÀNH DỮ LIỆU THẬT</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Nói không với slide lý thuyết trừu tượng. Chỉ giải quyết trực tiếp các file Excel, luồng báo cáo và văn bản thực tế của công ty.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA and Quota Banner */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-amber-700 font-semibold bg-amber-50 px-4 py-2 rounded-xl border border-amber-200">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Số lượng có hạn: Giới hạn tối đa 05 suất tài trợ Workshop In-House/tuần để đảm bảo chất lượng.</span>
              </div>
              <a
                href="#ai-form-section"
                onClick={() => setFormData(prev => ({ ...prev, trainingFormat: 'Gói Khảo Sát & Workshop AI In-House Thực Chiến (Tài Trợ 100% Miễn Phí)' }))}
                className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/20 flex items-center gap-2 transition-all active:scale-95 shrink-0 cursor-pointer"
              >
                <Gift className="w-4 h-4" />
                <span>Đăng Ký Nhận Suất Tài Trợ 100% Ngay</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 4. 6 KHUNG MODULE ĐÀO TẠO IN-HOUSE MAY ĐO (MODULES CATALOG) */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-bold uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5 text-sky-600" />
              <span>Chương Trình Đào Tạo Độc Quyền</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              6 Khung Module May Đo Theo Từng Bộ Phận Nghiệp Vụ
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Doanh nghiệp có thể lựa chọn đào tạo trọn gói toàn bộ công ty hoặc đăng ký theo từng module chuyên biệt phù hợp với nhu cầu ưu tiên.
            </p>
          </div>

          {/* Module Selector Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {AI_TRAINING_MODULES.map((m) => (
              <button
                key={m.id}
                onClick={() => setActiveModuleId(m.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeModuleId === m.id
                    ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20 scale-102'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{m.code}</span>
                <span className="hidden sm:inline">| {m.badge}</span>
              </button>
            ))}
          </div>

          {/* Active Module Detail Display */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-8 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-black text-sky-600 bg-sky-50 px-2.5 py-1 rounded-md uppercase">
                      {activeModule.code}
                    </span>
                    <span className="text-xs font-bold text-slate-500">
                      Đối tượng: <strong className="text-slate-800">{activeModule.targetRole}</strong>
                    </span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {activeModule.title}
                  </h3>
                </div>

                {/* Highlights List */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Nội Dung Thực Chiến Trọng Tâm:</div>
                  <ul className="space-y-3">
                    {activeModule.highlights.map((item, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-3 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcome Statement */}
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-900 flex items-start gap-2.5">
                  <span className="font-extrabold text-emerald-700">Kết quả đầu ra:</span>
                  <span className="leading-relaxed">{activeModule.outcomes}</span>
                </div>
              </div>

              {/* Sidebar of Module: Practiced Tools */}
              <div className="lg:col-span-4 bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-5">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Công Cụ Thực Hành Chuyên Sâu:
                </div>

                <div className="space-y-2">
                  {activeModule.toolsPracticed.map((tool, tIdx) => (
                    <div key={tIdx} className="px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-800 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                      <span>{tool}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-slate-200">
                  <a
                    href="#ai-form-section"
                    onClick={() => setFormData(prev => ({ 
                      ...prev, 
                      departmentNeed: activeModule.title,
                      trainingFormat: 'Gói Khảo Sát & Workshop AI In-House Thực Chiến (Tài Trợ 100% Miễn Phí)'
                    }))}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-sky-600 hover:from-emerald-700 hover:to-sky-700 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer"
                  >
                    <Gift className="w-3.5 h-3.5 text-emerald-200" />
                    <span>Đăng Ký Khảo Sát & Học Thử Module Này (Tài Trợ 100%)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 5. PHƯƠNG PHÁP ĐÀO TẠO 4 BƯỚC (TRAINING METHODOLOGY) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-sky-600" />
              <span>Quy Trình Triển Khai Chặt Chẽ</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              4 Bước Tổ Chức Khóa Học May Đo Cho Doanh Nghiệp
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Mỗi khóa học đều được chuẩn bị kỹ lưỡng từ khâu khảo sát nghiệp vụ trước lớp cho đến giai đoạn bảo hành hỗ trợ sau khi học viên kết thúc.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {AI_TRAINING_METHODOLOGY.map((step, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-sky-300 hover:shadow-md transition-all duration-300 space-y-3"
              >
                <div className="font-mono text-2xl font-black text-sky-600 bg-sky-50 w-10 h-10 rounded-xl flex items-center justify-center">
                  {step.step}
                </div>
                <h3 className="font-display text-base font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. CAM KẾT BẢO MẬT & CHÍNH SÁCH DOANH NGHIỆP (SECURITY PILLARS) */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-950 border border-sky-800 text-sky-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>An Toàn & Tuân Thủ Tuyệt Đối</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              3 Rào Chắn Bảo Vệ Dữ Liệu Doanh Nghiệp Khi Ứng Dụng AI
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              TuoitreSoft đặt tiêu chuẩn an toàn thông tin lên hàng đầu, giúp doanh nghiệp khai thác sức mạnh của AI mà không lo ngại rủi ro rò rỉ dữ liệu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {AI_SECURITY_PILLARS.map((sec, idx) => (
              <div 
                key={idx}
                className="p-7 rounded-2xl bg-slate-800/60 border border-slate-700/80 space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-white">
                  {sec.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {sec.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. CÁC GÓI ĐÀO TẠO DOANH NGHIỆP (PACKAGES) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-sky-600" />
              <span>Gói Đào Tạo Linh Hoạt</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Lựa Chọn Khung Đào Tạo Phù Hợp Cho Tổ Chức Của Bạn
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Tổ chức trực tiếp tại trụ sở doanh nghiệp của bạn hoặc kết hợp trực tuyến tương tác cao.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {AI_TRAINING_PACKAGES.map((pkg) => {
              const isFreePkg = pkg.id === 'pkg-workshop-free';
              return (
                <div 
                  key={pkg.id}
                  className={`rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 relative ${
                    isFreePkg
                      ? 'border-2 border-emerald-500 bg-emerald-50/15 shadow-xl shadow-emerald-500/10 ring-2 ring-emerald-500/20'
                      : pkg.popular 
                      ? 'border-2 border-sky-500 bg-white shadow-xl shadow-sky-500/10' 
                      : 'border border-slate-200 bg-white hover:border-sky-300 shadow-sm'
                  }`}
                >
                  {isFreePkg ? (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-extrabold uppercase tracking-wider shadow-sm flex items-center gap-1.5 whitespace-nowrap">
                      <Gift className="w-3.5 h-3.5" />
                      <span>{pkg.badge}</span>
                    </div>
                  ) : pkg.popular ? (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-sky-600 text-white text-[11px] font-extrabold uppercase tracking-wider shadow-sm whitespace-nowrap">
                      {pkg.badge}
                    </div>
                  ) : null}

                  <div className="space-y-5">
                    <div className="space-y-2">
                      <h3 className="font-display text-xl font-bold text-slate-900">{pkg.name}</h3>
                      
                      {isFreePkg && (
                        <div className="flex items-baseline gap-2 pt-1">
                          <span className="font-mono text-2xl font-black text-emerald-600">0 ĐỒNG / MIỄN PHÍ</span>
                          <span className="text-xs text-slate-400 line-through">20.000.000đ</span>
                        </div>
                      )}

                      <div className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-md ${
                        isFreePkg ? 'text-emerald-700 bg-emerald-100' : 'text-sky-600 bg-sky-50'
                      }`}>
                        <Clock className="w-3.5 h-3.5" />
                        <span>Thời lượng: {pkg.duration}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed pt-1">
                        {pkg.target}
                      </p>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-slate-100">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Điểm Nổi Bật:</div>
                      <ul className="space-y-2.5">
                        {pkg.features.map((feat, fIdx) => (
                          <li key={fIdx} className="text-xs text-slate-700 flex items-start gap-2.5 leading-relaxed">
                            <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isFreePkg ? 'text-emerald-500' : 'text-sky-500'
                            }`} />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8">
                    <a
                      href="#ai-form-section"
                      onClick={() => setFormData(prev => ({ ...prev, trainingFormat: pkg.name }))}
                      className={`w-full py-3.5 rounded-xl font-bold text-xs text-center flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer ${
                        isFreePkg
                          ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-md shadow-emerald-600/25'
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

      {/* 8. FORM ĐĂNG KÝ TƯ VẤN & NHẬN ĐỀ CƯƠNG ĐÀO TẠO (AI TRAINING REGISTRATION FORM) */}
      <section id="ai-form-section" className="py-16 sm:py-20 bg-slate-50/80 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 sm:p-10 space-y-8">
            
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
                <Gift className="w-3.5 h-3.5 text-emerald-600" />
                <span>Chính Sách Đồng Hành Tiên Quyết</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Đặt Lịch Khảo Sát & Nhận Suất Workshop AI In-House Miễn Phí
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
                Chuyên gia AI của TuoitreSoft sẽ trực tiếp liên hệ trong vòng 2 giờ làm việc để xếp lịch làm việc 1-1 cùng ban giám đốc và thiết kế đề cương workshop riêng cho doanh nghiệp của bạn.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900">
                  Đăng Ký Nhận Suất Tài Trợ Thành Công!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Cảm ơn <span className="font-bold text-slate-900">{formData.fullName}</span> từ <span className="font-bold text-slate-900">{formData.companyName}</span>. Bộ phận đào tạo doanh nghiệp của TuoitreSoft đã nhận yêu cầu tài trợ cho: <span className="font-semibold text-emerald-800">{formData.trainingFormat}</span>. Chuyên gia AI của chúng tôi sẽ gọi điện/Zalo trực tiếp qua số <span className="font-bold text-slate-900">{formData.phoneOrEmail}</span> trong vòng 2 giờ để thống nhất lịch hẹn.
                </p>
                <div className="p-4 rounded-xl bg-white border border-emerald-200 text-xs text-slate-700 max-w-md mx-auto space-y-1 text-left">
                  <div className="font-bold text-emerald-800 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Quyền lợi đã được kích hoạt:</span>
                  </div>
                  <div>• 01 Buổi khảo sát bài toán AI 1-1 cùng Ban Giám đốc (Trị giá 8Tr → 0đ)</div>
                  <div>• 01 Buổi Workshop In-House tận nơi cho đội ngũ (Trị giá 12Tr → 0đ)</div>
                  <div>• Trọn bộ 100+ Enterprise Prompts độc quyền bàn giao file mềm</div>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl border border-emerald-300 text-emerald-800 text-xs font-bold hover:bg-emerald-100 transition-colors cursor-pointer"
                >
                  Gửi thêm thông tin
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                
                {/* Special Sponsorship Incentive Card */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-sky-50 border border-emerald-300 flex items-start gap-3 shadow-xs">
                  <input 
                    type="checkbox" 
                    id="includeFreeInHouseWorkshop" 
                    checked={formData.includeFreeInHouseWorkshop} 
                    onChange={(e) => setFormData(prev => ({ ...prev, includeFreeInHouseWorkshop: e.target.checked }))} 
                    className="mt-1 w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 border-slate-300 cursor-pointer shrink-0" 
                  />
                  <label htmlFor="includeFreeInHouseWorkshop" className="text-xs text-slate-800 cursor-pointer">
                    <span className="font-bold text-emerald-800 block text-xs sm:text-sm">
                      🎁 Kích hoạt chính sách tài trợ: 01 Buổi Workshop AI In-House tận nơi (Trị giá 20.000.000đ – Miễn phí 100%)
                    </span>
                    <span className="text-slate-600 text-[11px] block mt-1 leading-relaxed">
                      Chuyên gia AI TuoitreSoft đến tận văn phòng: Khảo sát bài toán thực tế 1-1 cùng ban giám đốc, đào tạo thực chiến "cầm tay chỉ việc" cho nhân sự trên dữ liệu thật và tặng kèm trọn bộ 100+ Enterprise Prompts.
                    </span>
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-sky-600" />
                      <span>Họ và tên của bạn *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nguyễn Văn A - Giám đốc / Trưởng phòng"
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
                      placeholder="Công ty Cổ phần XYZ"
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
                    <label className="text-xs font-bold text-slate-700">Phòng ban mong muốn đào tạo</label>
                    <select
                      value={formData.departmentNeed}
                      onChange={(e) => setFormData(prev => ({ ...prev, departmentNeed: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-hidden transition-all bg-white"
                    >
                      <option value="Toàn bộ công ty (All-in-one)">Toàn bộ các phòng ban công ty</option>
                      <option value="Marketing & Sáng tạo nội dung">Khối Marketing & Sáng tạo nội dung</option>
                      <option value="Sales & Chăm sóc khách hàng">Khối Sales & Chăm sóc khách hàng</option>
                      <option value="Nhân sự & Hành chính">Khối Nhân sự & Hành chính (HR/Admin)</option>
                      <option value="Tài chính, Kế toán & Dữ liệu">Khối Tài chính, Kế toán & Phân tích dữ liệu</option>
                      <option value="Ban Lãnh đạo C-Level & Quản lý">Dành riêng Ban Lãnh đạo C-Level & Quản lý</option>
                    </select>
                  </div>

                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Gói hoặc hình thức mong muốn đăng ký</label>
                  <select
                    value={formData.trainingFormat}
                    onChange={(e) => setFormData(prev => ({ ...prev, trainingFormat: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-hidden transition-all bg-white font-medium"
                  >
                    <option value="Gói Khảo Sát & Workshop AI In-House Thực Chiến (Tài Trợ 100% Miễn Phí)">
                      🎁 Gói Khảo Sát & Workshop AI In-House Thực Chiến (Tài Trợ 100% Miễn Phí - Trị giá 20Tr)
                    </option>
                    <option value="Gói Đào Tạo In-house Chuyên Sâu Theo Phòng Ban (02 - 04 Tuần)">
                      Gói Đào Tạo In-house Chuyên Sâu Theo Phòng Ban (02 - 04 Tuần)
                    </option>
                    <option value="Gói Cố Vấn 1-1 Cho Ban Lãnh Đạo & Xây Dựng AI Roadmap (01 Tháng)">
                      Gói Cố Vấn 1-1 Cho Ban Lãnh Đạo & Xây Dựng AI Roadmap (01 Tháng)
                    </option>
                    <option value="Tư vấn chương trình đào tạo may đo theo yêu cầu riêng">
                      Tư vấn chương trình đào tạo may đo theo yêu cầu riêng
                    </option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Nhu cầu cụ thể hoặc bài toán muốn AI giải quyết</label>
                  <textarea
                    rows={3}
                    placeholder="Mô tả số lượng học viên dự kiến, mục tiêu mong muốn đạt được hoặc các vướng mắc hiện tại..."
                    value={formData.notes}
                    onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-hidden transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-5 rounded-xl text-center leading-snug bg-gradient-to-r from-emerald-600 via-sky-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Đang ghi nhận yêu cầu tài trợ...</span>
                  ) : (
                    <>
                      <Gift className="w-5 h-5 shrink-0 text-emerald-200" />
                      <span>Gửi Yêu Cầu Nhận Suất Đào Tạo AI In-House Miễn Phí (Trị Giá 20Tr)</span>
                      <ArrowRight className="w-4 h-4 shrink-0" />
                    </>
                  )}
                </button>

                <div className="text-center text-[11px] text-slate-500 space-y-1">
                  <div className="font-semibold text-emerald-700">
                    ✓ Hoàn toàn 0 ĐỒNG • Không chi phí ẩn • Không ràng buộc hợp đồng • Bảo mật 100%
                  </div>
                  <div>Tặng kèm trọn bộ "100+ Enterprise Prompts Đột Phá Năng Suất" ngay sau buổi làm việc.</div>
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
              Giải Đáp Thắc Mắc Về Đào Tạo AI Doanh Nghiệp
            </h2>
            <p className="text-slate-600 text-sm">
              Những băn khoăn thường gặp của các doanh nghiệp trước khi quyết định tổ chức đào tạo AI.
            </p>
          </div>

          <div className="space-y-4">
            {AI_FAQS.map((faq, idx) => {
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

      {/* 10. BOTTOM BANNER NAVIGATION TO PROCESS CONSULTING & HOME */}
      <section className="py-12 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs text-sky-400 font-bold uppercase tracking-wider">Hệ Sinh Thái Dịch Vụ TuoitreSoft</div>
            <div className="text-lg font-bold">Khám phá thêm: Tư Vấn & Chuẩn Hóa Quy Trình Vận Hành Doanh Nghiệp</div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateHome}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all"
            >
              Về Trang Chủ
            </button>
            <button
              onClick={onNavigateProcessConsulting}
              className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-md shadow-sky-500/20"
            >
              <span>Xem Landing Quy Trình Vận Hành</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
