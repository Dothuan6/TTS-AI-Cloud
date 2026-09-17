import React, { useState } from 'react';
import { 
  X, 
  Calculator, 
  TrendingDown, 
  Clock, 
  DollarSign, 
  Zap, 
  ArrowRight, 
  CheckCircle2,
  Sliders
} from 'lucide-react';

interface RoiCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyRoiToConsult: (savings: string) => void;
}

export const RoiCalculatorModal: React.FC<RoiCalculatorModalProps> = ({
  isOpen,
  onClose,
  onApplyRoiToConsult
}) => {
  const [cloudSpendMonthly, setCloudSpendMonthly] = useState<number>(2500); // USD
  const [teamSize, setTeamSize] = useState<number>(45); // Employees
  const [manualDocHoursWeekly, setManualDocHoursWeekly] = useState<number>(60); // Hours/week

  if (!isOpen) return null;

  // Calculations
  const finopsSavingsPercentage = 0.38; // 38% average
  const monthlyCloudSavingsUSD = Math.round(cloudSpendMonthly * finopsSavingsPercentage);
  const annualCloudSavingsUSD = monthlyCloudSavingsUSD * 12;
  const annualCloudSavingsVND = Math.round((annualCloudSavingsUSD * 25400) / 1000000); // Triệu VND

  // Automation hours saved
  const automationEfficiency = 0.75; // 75% automated
  const monthlyHoursSaved = Math.round(manualDocHoursWeekly * 4 * automationEfficiency);
  const laborCostSavingsVND = Math.round((monthlyHoursSaved * 120000 * 12) / 1000000); // Estimated 120k VND/hour

  const totalAnnualSavingsVND = annualCloudSavingsVND + laborCostSavingsVND;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-800 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors cursor-pointer"
          aria-label="Close ROI Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-semibold border border-sky-200">
            <Calculator className="w-3.5 h-3.5 text-sky-600" />
            <span>FINOPS & AI AUTOMATION ROI CALCULATOR</span>
          </div>
          
          <h3 className="font-display text-2xl font-bold text-slate-900">
            Ước Tính Hiệu Quả Đầu Tư & Tối Ưu Chi Phí
          </h3>
          
          <p className="text-xs text-slate-600">
            Dành riêng cho Ban Lãnh Đạo (CEO, CTO, CFO). Dựa trên kinh nghiệm thực tế triển khai cùng Cloud Ace & Titanbases.
          </p>
        </div>

        {/* Sliders Input Area */}
        <div className="space-y-5 bg-slate-50 p-5 rounded-2xl border border-slate-200">
          
          {/* Slider 1: Cloud Spend */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-semibold">
              <span className="text-slate-700 flex items-center gap-1.5">
                <DollarSign className="w-3.5 h-3.5 text-sky-600" />
                Chi phí Cloud hiện tại (GCP, AWS hoặc VPS khác):
              </span>
              <span className="font-mono text-sky-600 font-bold text-sm">
                ${cloudSpendMonthly.toLocaleString()} / tháng (~{Math.round((cloudSpendMonthly * 25400) / 1000000)}M VNĐ)
              </span>
            </div>
            <input
              type="range"
              min={300}
              max={15000}
              step={100}
              value={cloudSpendMonthly}
              onChange={(e) => setCloudSpendMonthly(Number(e.target.value))}
              className="w-full accent-sky-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>$300/tháng</span>
              <span>$7,500/tháng</span>
              <span>$15,000+/tháng</span>
            </div>
          </div>

          {/* Slider 2: Team Size */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-semibold">
              <span className="text-slate-700 flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-blue-600" />
                Quy mô nhân sự doanh nghiệp:
              </span>
              <span className="font-mono text-blue-600 font-bold text-sm">
                {teamSize} nhân sự
              </span>
            </div>
            <input
              type="range"
              min={5}
              max={300}
              step={5}
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer"
            />
          </div>

          {/* Slider 3: Hours on manual docs / repetitive tasks */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-semibold">
              <span className="text-slate-700 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                Thời gian xử lý chứng từ, đối soát & CSKH thủ công / tuần:
              </span>
              <span className="font-mono text-emerald-700 font-bold text-sm">
                {manualDocHoursWeekly} giờ / tuần
              </span>
            </div>
            <input
              type="range"
              min={10}
              max={200}
              step={5}
              value={manualDocHoursWeekly}
              onChange={(e) => setManualDocHoursWeekly(Number(e.target.value))}
              className="w-full accent-emerald-600 cursor-pointer"
            />
          </div>

        </div>

        {/* Calculated Results Box */}
        <div className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-sky-50 via-white to-blue-50 border border-sky-200 space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-sky-700 flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-sky-600" />
            <span>KẾT QUẢ DỰ BÁO TỐI ƯU HÓA HÀNG NĂM:</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center shadow-2xs">
              <div className="text-[11px] text-slate-500">Tiết kiệm chi phí Cloud</div>
              <div className="text-lg font-bold text-sky-600 font-mono mt-1">
                ${annualCloudSavingsUSD.toLocaleString()}
              </div>
              <div className="text-[10px] text-slate-500">Giảm ~38% hóa đơn GCP/AWS</div>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center shadow-2xs">
              <div className="text-[11px] text-slate-500">Thời gian tự động hóa</div>
              <div className="text-lg font-bold text-emerald-700 font-mono mt-1">
                {monthlyHoursSaved * 12} giờ/năm
              </div>
              <div className="text-[10px] text-slate-500">Nhờ OCR AI & Chatbot RAG</div>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center shadow-2xs">
              <div className="text-[11px] text-slate-500">Tổng giá trị thu hồi (ROI)</div>
              <div className="text-lg font-bold text-amber-600 font-mono mt-1">
                ~{totalAnnualSavingsVND.toLocaleString()}M VNĐ
              </div>
              <div className="text-[10px] text-slate-500">Thời gian hoàn vốn &lt; 4 tháng</div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <span className="text-xs text-slate-500">
            * Số liệu tính toán dựa trên mức trung bình thực tế của 120+ khách hàng TuoitreSoft.
          </span>

          <button
            onClick={() => {
              onClose();
              onApplyRoiToConsult(`Dự tính tiết kiệm Cloud: $${annualCloudSavingsUSD}/năm, giải phóng ${monthlyHoursSaved} giờ thủ công/tháng`);
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-sky-500/20 transition-all cursor-pointer"
          >
            <span>Nhận Báo Cáo Tư Vấn Chi Tiết</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
