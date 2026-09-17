import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Building2, 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  Bot, 
  Cloud, 
  Layers, 
  MoreHorizontal,
  Clock,
  ShieldCheck,
  Download,
  Share2,
  RefreshCw,
  Sparkles,
  GitBranch,
  BookOpen
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { LeadFormData, LeadSubmissionResult } from '../types';

interface LeadFormSectionProps {
  initialInterest?: string;
}

export const LeadFormSection: React.FC<LeadFormSectionProps> = ({ initialInterest }) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    companyName: '',
    phoneOrEmail: '',
    interests: initialInterest ? [initialInterest] : ['Tư vấn & Triển khai Cloud (GCP/AWS)', 'Tư vấn & Triển khai Trợ lý AI (RAG)'],
    customInterest: '',
    companySize: '10-50 nhân sự',
    projectBudget: 'Từ 50M - 200M VND',
    timeline: 'Trong vòng 1 tháng tới',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedResult, setSubmittedResult] = useState<LeadSubmissionResult | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const interestOptions = [
    { id: 'cloud', label: 'Tư vấn & Triển khai Cloud (GCP/AWS)', icon: <Cloud className="w-4 h-4" /> },
    { id: 'ai', label: 'Tư vấn & Triển khai Trợ lý AI (RAG)', icon: <Bot className="w-4 h-4" /> },
    { id: 'process', label: 'Tư vấn & Chuẩn hóa Quy trình Vận hành (SOP/BPM)', icon: <GitBranch className="w-4 h-4" /> },
    { id: 'ai_training', label: 'Đào tạo Ứng dụng AI Doanh nghiệp (In-house)', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'data', label: 'Tư vấn & Xây dựng Data Warehouse/BI', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'enterprise', label: 'Tư vấn & Triển khai ERP/CRM/BPM', icon: <Layers className="w-4 h-4" /> },
    { id: 'other', label: 'Khác / May đo riêng', icon: <MoreHorizontal className="w-4 h-4" /> }
  ];

  const handleInterestToggle = (label: string) => {
    setFormData(prev => {
      const exists = prev.interests.includes(label);
      if (exists) {
        return { ...prev, interests: prev.interests.filter(item => item !== label) };
      } else {
        return { ...prev, interests: [...prev.interests, label] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validation
    if (!formData.fullName.trim()) {
      setErrorMessage('Vui lòng nhập họ và tên của bạn.');
      return;
    }
    if (!formData.companyName.trim()) {
      setErrorMessage('Vui lòng nhập tên doanh nghiệp của bạn.');
      return;
    }
    if (!formData.phoneOrEmail.trim()) {
      setErrorMessage('Vui lòng cung cấp số điện thoại hoặc email liên hệ.');
      return;
    }
    if (formData.interests.length === 0) {
      setErrorMessage('Vui lòng chọn ít nhất một nhu cầu quan tâm.');
      return;
    }

    setIsSubmitting(true);

    // Simulate API dispatch to CRM, Telegram Bot, and Email
    setTimeout(() => {
      setIsSubmitting(false);
      const newSubmission: LeadSubmissionResult = {
        id: `TTS-${Math.floor(100000 + Math.random() * 900000)}`,
        createdAt: new Date().toLocaleString('vi-VN'),
        data: { ...formData },
        dispatchedTo: {
          crm: true,
          email: true,
          telegramBot: true,
          zaloWebhook: true
        }
      };
      setSubmittedResult(newSubmission);

      // Trigger Celebration Confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Safe fallback
      }
    }, 1200);
  };

  const handleDownloadReceipt = () => {
    if (!submittedResult) return;
    const content = `PHIẾU ĐĂNG KÝ TƯ VẤN KIẾN TRÚC & GIẢI PHÁP TUOITRESOFT
Mã đăng ký: ${submittedResult.id}
Thời gian ghi nhận: ${submittedResult.createdAt}
--------------------------------------------------
Họ và tên: ${submittedResult.data.fullName}
Doanh nghiệp: ${submittedResult.data.companyName}
Thông tin liên hệ: ${submittedResult.data.phoneOrEmail}
Quy mô doanh nghiệp: ${submittedResult.data.companySize}
Nhu cầu giải pháp: ${submittedResult.data.interests.join(', ')} ${submittedResult.data.customInterest ? `(${submittedResult.data.customInterest})` : ''}
Ngân sách dự kiến: ${submittedResult.data.projectBudget}
Thời gian mong muốn triển khai: ${submittedResult.data.timeline}
Ghi chú: ${submittedResult.data.notes || 'Không có'}
--------------------------------------------------
Cam kết dịch vụ:
- Kỹ sư giải pháp TuoitreSoft liên hệ lại trong vòng 30 phút.
- Khảo sát hiện trạng & tư vấn kiến trúc Multi-Cloud (GCP/AWS) hoàn toàn miễn phí.
Hotline hỗ trợ 24/7: (+84) 28 7300 8899 | Email: contact@tuoitresoft.com
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `TuoitreSoft-Yeu-Cau-Tu-Van-${submittedResult.id}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleResetForm = () => {
    setSubmittedResult(null);
    setFormData({
      fullName: '',
      companyName: '',
      phoneOrEmail: '',
      interests: ['Giải pháp AI'],
      customInterest: '',
      companySize: '10-50 nhân sự',
      projectBudget: 'Từ 50M - 200M VND',
      timeline: 'Trong vòng 1 tháng tới',
      notes: ''
    });
  };

  return (
    <section id="lead-form-section" className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-400/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>TƯ VẤN KIẾN TRÚC & TRIỂN KHAI 0Đ</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Đăng Ký Tư Vấn & Khảo Sát Hiện Trạng Doanh Nghiệp
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Chuyên gia Solution Architect sẽ liên hệ trong 15 - 30 phút để khảo sát bài toán, đề xuất giải pháp kỹ thuật (Solution Brief) và ước tính bài toán hoàn vốn ROI chi tiết.
          </p>
        </div>

        {/* Lead Form Card */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-xl shadow-slate-900/5 backdrop-blur-xl">
          
          {submittedResult ? (
            /* Success confirmation view */
            <div className="py-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-2xl font-bold text-slate-900">
                  Yêu Cầu Tư Vấn Đã Được Ghi Nhận Thành Công!
                </h3>
                <p className="text-slate-600 text-sm max-w-lg mx-auto">
                  Cảm ơn <span className="font-bold text-slate-900">{submittedResult.data.fullName}</span> từ doanh nghiệp <span className="font-bold text-slate-900">{submittedResult.data.companyName}</span>. Chuyên gia tư vấn giải pháp của TuoitreSoft sẽ liên hệ trong vòng <span className="text-sky-600 font-bold">15 - 30 phút</span>.
                </p>
              </div>

              {/* Status Dispatch Indicators */}
              <div className="max-w-md mx-auto p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2.5 text-left">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200 font-mono text-[11px] text-slate-500">
                  <span>Mã hồ sơ: {submittedResult.id}</span>
                  <span className="text-emerald-600 font-semibold">Đã đồng bộ CRM</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>Thông báo Telegram Bot: OK</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>Hệ thống CRM Hub: OK</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>Webhook Zalo OA: OK</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>Email xác nhận: Đã gửi</span>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleDownloadReceipt}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold border border-slate-300 transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4 text-sky-600" />
                  <span>Tải Phiếu Xác Nhận (.txt)</span>
                </button>

                <button
                  onClick={handleResetForm}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white text-xs font-bold transition-colors cursor-pointer shadow-md shadow-sky-500/20"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Gửi Thêm Yêu Cầu Khác</span>
                </button>
              </div>

            </div>
          ) : (
            /* Main Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700">
                  ⚠️ {errorMessage}
                </div>
              )}

              {/* Row 1: Full Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="lead-fullname" className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-sky-600" />
                    <span>Họ và tên <span className="text-rose-500">*</span></span>
                  </label>
                  <input
                    id="lead-fullname"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Ví dụ: Nguyễn Văn An"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-sky-500 focus:outline-none text-slate-900 text-sm placeholder:text-slate-400 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="lead-company" className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-sky-600" />
                    <span>Tên doanh nghiệp <span className="text-rose-500">*</span></span>
                  </label>
                  <input
                    id="lead-company"
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="Ví dụ: Công ty Cổ phần Vận tải & Bán lẻ Việt"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-sky-500 focus:outline-none text-slate-900 text-sm placeholder:text-slate-400 transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Phone or Email */}
              <div className="space-y-2">
                <label htmlFor="lead-contact" className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-sky-600" />
                  <span>Số điện thoại / Email <span className="text-rose-500">*</span></span>
                </label>
                <input
                  id="lead-contact"
                  type="text"
                  required
                  value={formData.phoneOrEmail}
                  onChange={(e) => setFormData({ ...formData, phoneOrEmail: e.target.value })}
                  placeholder="0912 345 678 hoặc contact@doanhnghiep.vn"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-sky-500 focus:outline-none text-slate-900 text-sm placeholder:text-slate-400 transition-colors"
                />
              </div>

              {/* Row 3: Nhu cầu quan tâm checkboxes */}
              <div className="space-y-2.5">
                <label className="text-xs font-bold text-slate-700 flex items-center justify-between">
                  <span>Nhu cầu quan tâm <span className="text-rose-500">*</span> (Có thể chọn nhiều mục):</span>
                  <span className="text-[11px] text-slate-500 font-normal">Chọn đúng mục tiêu để nhận tài liệu phù hợp</span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {interestOptions.map((opt) => {
                    const isChecked = formData.interests.includes(opt.label);
                    return (
                      <button
                        type="button"
                        key={opt.id}
                        id={`interest-${opt.id}`}
                        onClick={() => handleInterestToggle(opt.label)}
                        className={`flex items-center gap-2.5 p-3 rounded-xl border text-left text-xs font-semibold transition-all cursor-pointer ${
                          isChecked
                            ? 'bg-sky-50 border-sky-500 text-sky-900 shadow-2xs'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded flex items-center justify-center text-xs border ${
                          isChecked ? 'bg-sky-500 border-sky-500 text-white font-bold' : 'border-slate-300'
                        }`}>
                          {isChecked && '✓'}
                        </div>
                        <div className="flex items-center gap-1.5 truncate">
                          {opt.icon}
                          <span className="truncate">{opt.label}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {formData.interests.includes('Khác') && (
                  <div className="pt-2">
                    <input
                      type="text"
                      placeholder="Mô tả cụ thể nhu cầu khác của doanh nghiệp bạn..."
                      value={formData.customInterest || ''}
                      onChange={(e) => setFormData({ ...formData, customInterest: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-sky-500 focus:outline-none text-slate-900 text-xs"
                    />
                  </div>
                )}
              </div>

              {/* Row 4: Enterprise Specifications (Size & Budget) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                <div className="space-y-1.5">
                  <label htmlFor="lead-size" className="text-[11px] font-semibold text-slate-600">
                    Quy mô nhân sự:
                  </label>
                  <select
                    id="lead-size"
                    value={formData.companySize}
                    onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:bg-white focus:border-sky-500 focus:outline-none"
                  >
                    <option value="Dưới 10 nhân sự">Dưới 10 nhân sự</option>
                    <option value="10-50 nhân sự">10 - 50 nhân sự</option>
                    <option value="50-200 nhân sự">50 - 200 nhân sự</option>
                    <option value="Trên 200 nhân sự (Enterprise)">Trên 200 nhân sự (Enterprise)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="lead-budget" className="text-[11px] font-semibold text-slate-600">
                    Ngân sách dự kiến:
                  </label>
                  <select
                    id="lead-budget"
                    value={formData.projectBudget}
                    onChange={(e) => setFormData({ ...formData, projectBudget: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:bg-white focus:border-sky-500 focus:outline-none"
                  >
                    <option value="Dưới 50M VND">Dưới 50M VND</option>
                    <option value="Từ 50M - 200M VND">Từ 50M - 200M VND</option>
                    <option value="Từ 200M - 500M VND">Từ 200M - 500M VND</option>
                    <option value="Trên 500M VND (Dự án lớn)">Trên 500M VND (Dự án lớn)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="lead-timeline" className="text-[11px] font-semibold text-slate-600">
                    Thời gian triển khai:
                  </label>
                  <select
                    id="lead-timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:bg-white focus:border-sky-500 focus:outline-none"
                  >
                    <option value="Càng sớm càng tốt">Càng sớm càng tốt</option>
                    <option value="Trong vòng 1 tháng tới">Trong vòng 1 tháng tới</option>
                    <option value="Trong quý này">Trong quý này</option>
                    <option value="Đang tìm hiểu giải pháp">Đang tìm hiểu giải pháp</option>
                  </select>
                </div>
              </div>

              {/* Row 5: Notes / Specific Request */}
              <div className="space-y-2">
                <label htmlFor="lead-notes" className="text-xs font-bold text-slate-700">
                  Ghi chú hoặc bài toán cụ thể cần giải quyết (Tùy chọn):
                </label>
                <textarea
                  id="lead-notes"
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Ví dụ: Đang vận hành hệ thống kế toán cũ trên máy chủ vật lý, muốn di chuyển lên Google Cloud / AWS và tích hợp AI bóc tách hóa đơn điện tử..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-sky-500 focus:outline-none text-slate-900 text-xs placeholder:text-slate-400 transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  id="btn-submit-lead-form"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-5 rounded-xl text-center leading-snug bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-sky-500/25 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 shrink-0 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Đang Gửi Yêu Cầu...</span>
                    </>
                  ) : (
                    <>
                      <span>Gửi Yêu Cầu Tư Vấn & Nhận Solution Brief 0đ</span>
                      <Send className="w-4 h-4 shrink-0" />
                    </>
                  )}
                </button>
              </div>

              {/* Security & Confidentiality note */}
              <div className="pt-2 text-center text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Cam kết bảo mật thông tin theo chuẩn ISO 27001 và chính sách quyền riêng tư.</span>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
