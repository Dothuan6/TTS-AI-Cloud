import React, { useState } from 'react';
import { 
  X, 
  FileText, 
  FileSpreadsheet, 
  Copy, 
  Check, 
  Download, 
  Printer, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { HERO_CONTENT, PARTNERS_DATA, SOLUTIONS_DATA, PROCESS_STEPS, WHY_CHOOSE_US } from '../data/content';

interface BriefExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BriefExportModal: React.FC<BriefExportModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Export to Word (.doc formatted as HTML with Word styling)
  const handleExportWord = () => {
    const docHtml = `
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
  <meta charset="utf-8">
  <title>BRIEF THIET KE & PHAT TRIEN LANDING PAGE TUOITRESOFT</title>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #1e293b; padding: 40px; }
    h1 { color: #0284c7; font-size: 24pt; border-bottom: 2pt solid #0284c7; padding-bottom: 8px; margin-bottom: 20px; }
    h2 { color: #0f172a; font-size: 16pt; margin-top: 24px; border-bottom: 1pt solid #cbd5e1; padding-bottom: 4px; }
    h3 { color: #0369a1; font-size: 13pt; margin-top: 16px; }
    p, li { font-size: 11pt; color: #334155; }
    table { width: 100%; border-collapse: collapse; margin-top: 14px; margin-bottom: 20px; }
    th, td { border: 1px solid #cbd5e1; padding: 10px; font-size: 10pt; }
    th { background-color: #f1f5f9; color: #0f172a; font-weight: bold; text-align: left; }
    .badge { background-color: #e0f2fe; color: #0369a1; padding: 3px 8px; border-radius: 4px; font-weight: bold; font-size: 9pt; }
    .highlight-box { background-color: #f8fafc; border-left: 4px solid #0284c7; padding: 14px; margin: 16px 0; }
  </style>
</head>
<body>
  <h1>TÀI LIỆU BRIEF THIẾT KẾ & PHÁT TRIỂN LANDING PAGE TUOITRESOFT</h1>
  <p><strong>Ngày lập:</strong> ${new Date().toLocaleDateString('vi-VN')} | <strong>Đơn vị phê duyệt:</strong> Ban Giám Đốc TuoitreSoft</p>
  
  <div class="highlight-box">
    <strong>Tóm tắt dự án:</strong> Xây dựng Landing Page thế hệ mới giới thiệu năng lực toàn diện của TuoitreSoft trong lĩnh vực Giải pháp AI, Hạ tầng Cloud (GCP/AWS) và Hệ thống Quản trị Doanh nghiệp (ERP/CRM/BPM).
  </div>

  <h2>1. MỤC TIÊU DỰ ÁN (PROJECT GOALS)</h2>
  <ul>
    <li><strong>Mục tiêu chính:</strong> Tăng nhận diện thương hiệu và chuyển đổi (Lead Generation) đối với doanh nghiệp có nhu cầu về Giải pháp AI, Hạ tầng Cloud (GCP/AWS) và Hệ thống Quản trị Doanh nghiệp (ERP/CRM/BPM).</li>
    <li><strong>Hành động mong muốn của người dùng (Primary CTA):</strong> Đăng ký tư vấn miễn phí / Nhận báo giá / Đặt lịch Demo giải pháp.</li>
  </ul>

  <h2>2. ĐỐI TƯỢNG MỤC TIÊU (TARGET AUDIENCE)</h2>
  <ul>
    <li><strong>Đối tượng chính:</strong> C-Level (CEO, CTO, CIO, CFO), Giám đốc Chuyển đổi số, Giám đốc CNTT (IT Director), Quản lý vận hành tại các doanh nghiệp vừa và lớn (SMEs & Enterprises).</li>
    <li><strong>Nhu cầu của khách hàng:</strong> Tìm kiếm giải pháp tối ưu chi phí vận hành, tự động hóa quy trình bằng AI, chuyển đổi hạ tầng lên Cloud an toàn và quản trị dữ liệu tập trung.</li>
  </ul>

  <h2>3. CẤU TRÚC CHI TIẾT 6 SECTIONS</h2>
  <h3>SECTION 1: HERO SECTION</h3>
  <p><strong>Headline:</strong> TuoitreSoft – Tiên Phong Giải Pháp AI & Quản Trị Doanh Nghiệp Tối Ưu Trên Đám Mây</p>
  <p><strong>Sub-headline:</strong> Kết hợp sức mạnh của Trí tuệ Nhân tạo (AI), Hạ tầng Cloud chuẩn quốc tế (GCP & AWS) và Hệ thống Quản trị Thông minh (ERP/CRM/BPM) giúp doanh nghiệp bứt phá tăng trưởng.</p>
  <p><strong>CTA:</strong> [Đăng Ký Tư Vấn 1-1] | [Trải Nghiệm Demo]</p>

  <h3>SECTION 2: HỆ SINH THÁI ĐỐI TÁC CHIẾN LƯỢC</h3>
  <ul>
    <li><strong>Google Cloud Platform (GCP):</strong> Đối tác triển khai chiến lược cùng Cloud Ace (sg.cloud-ace.com) – Chuyên gia hạ tầng Data & AI trên Google Cloud (BigQuery, Vertex AI, GKE).</li>
    <li><strong>Amazon Web Services (AWS):</strong> Đối tác triển khai cùng Titanbases (titanbases.com) – Chuyên gia tư vấn, di chuyển và tối ưu hạ tầng AWS (Redshift, Bedrock, FinOps).</li>
  </ul>

  <h3>SECTION 3: GIẢI PHÁP CỐT LÕI</h3>
  <ol>
    <li><strong>Trí Tuệ Nhân Tạo & Điện Toán Đám Mây (AI & Cloud):</strong> AI Chatbot & Trợ Lý Ảo; AI Data Analytics & BI; RPA + AI Tự động hóa xử lý chứng từ; Tư vấn & Cloud Migration FinOps.</li>
    <li><strong>Giải Pháp Quản Trị Doanh Nghiệp (Enterprise Software):</strong> ERP tập trung; CRM đa kênh; BPM & Workflow phê duyệt điện tử; HRM quản trị nhân sự & KPI.</li>
  </ol>

  <h3>SECTION 4: TẠI SAO CHỌN TUOITRESOFT?</h3>
  <ul>
    <li>Tích hợp AI chuyên sâu vào luồng nghiệp vụ.</li>
    <li>Hạ tầng chuẩn Quốc tế bảo trợ bởi Cloud Ace & Titanbases (ISO 27001, SOC 2, SLA 99.99%).</li>
    <li>Tùy biến linh hoạt theo từng ngành nghề.</li>
    <li>Đồng hành 24/7 & tối ưu chi phí Cloud định kỳ.</li>
  </ul>

  <h3>SECTION 5: QUY TRÌNH TRIỂN KHAI 5 BƯỚC</h3>
  <ol>
    <li>Khảo sát & Tư vấn bài toán thực tế</li>
    <li>Thiết kế Kiến trúc Multi-Cloud & UI/UX</li>
    <li>Phát triển & Tích hợp (Agile/Scrum, Fine-tune AI)</li>
    <li>Kiểm thử bảo mật (Pentest) & Đào tạo chuyển giao</li>
    <li>Vận hành 24/7 & Tối ưu chi phí FinOps</li>
  </ol>

  <h3>SECTION 6: FORM ĐĂNG KÝ / LIÊN HỆ</h3>
  <p>Form gồm: Họ và tên*, Tên doanh nghiệp*, Số điện thoại/Email*, Nhu cầu quan tâm (Giải pháp AI, Hạ tầng Cloud, ERP/CRM/BPM, Khác), Ghi chú, Nút [Gửi Yêu Cầu Tư Vấn].</p>

  <h2>4. YÊU CẦU NGHỆ THUẬT & KỸ THUẬT</h2>
  <ul>
    <li><strong>UI/UX Style:</strong> Modern, Tech-centric, Clean & Professional. Tone màu: Xanh công nghệ (Blue/Cyan), Trắng, Xám sang trọng.</li>
    <li><strong>Kỹ thuật:</strong> Responsive 100%, Fast loading, Tích hợp tracking (GA4, GTM, Pixel), Form gửi trực tiếp về CRM / Bot Telegram / Zalo.</li>
  </ul>
</body>
</html>
`;

    const blob = new Blob(['\ufeff' + docHtml], { type: 'application/msword;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'TuoitreSoft-Project-Brief.doc';
    a.click();
    URL.revokeObjectURL(url);
  };

  // Export to Excel (CSV with UTF-8 BOM for Excel)
  const handleExportExcel = () => {
    const csvContent = [
      ['STT', 'Module / Section', 'Hạng Mục Công Việc', 'Mô Tả Kỹ Thuật & Yêu Cầu', 'Đội Ngũ Thực Hiện', 'Thời Gian Ước Tính', 'Sản Phẩm Bàn Giao (Deliverable)', 'Độ Ưu Tiên'],
      ['1', 'HERO SECTION', 'Thiết kế Visual & Thông điệp', 'Headline TuoitreSoft, Sub-headline, Dual CTA, Visual Cloud & AI Hub', 'UI/UX Design + Frontend', '3 ngày', 'Figma + React Component', 'P0 (Cao nhất)'],
      ['2', 'PARTNERS ECOSYSTEM', 'Khu vực Đối tác Chiến lược', 'Showcase Cloud Ace (GCP) & Titanbases (AWS), liên kết web, chứng chỉ ISO/SOC2', 'Frontend + Content', '2 ngày', 'Partner Grid + Credibility Badges', 'P0 (Cao nhất)'],
      ['3', 'CORE SOLUTIONS', 'Giải pháp AI & Cloud', '4 dịch vụ: AI Chatbot RAG, Data Analytics BigQuery/Redshift, RPA Document AI, Migration FinOps', 'Fullstack + AI Architect', '5 ngày', 'Interactive Tabs + Demos', 'P0 (Cao nhất)'],
      ['4', 'CORE SOLUTIONS', 'Giải pháp Quản trị Doanh nghiệp', '4 module: ERP, CRM, BPM Workflow, HRM & OKR KPI', 'Fullstack + ERP Team', '5 ngày', 'Solution Cards + Case Studies', 'P0 (Cao nhất)'],
      ['5', 'WHY CHOOSE US', 'Lý do chọn & Bảng so sánh', '4 trụ cột khác biệt + Ma trận so sánh vs Gia công & In-house', 'Content + Design', '2 ngày', 'Comparison Matrix Table', 'P1'],
      ['6', 'PROCESS', 'Lộ trình 5 bước triển khai', 'Khảo sát -> Kiến trúc -> Phát triển -> Kiểm thử -> Vận hành & FinOps', 'Solution Architect + Dev', '2 ngày', 'Interactive Stepper UI', 'P1'],
      ['7', 'LEAD CAPTURE', 'Form đăng ký tư vấn & Báo giá', 'Họ tên, Doanh nghiệp, Email/SĐT, Checkbox dịch vụ, Ghi chú + Webhook Bot', 'Backend + Frontend', '3 ngày', 'Form Validation + CRM / Telegram Sync', 'P0 (Cao nhất)'],
      ['8', 'TECHNICAL & SEO', 'Tối ưu tốc độ & Tracking', 'Responsive mobile/tablet, Fast loading, GA4, GTM, Facebook Pixel, Meta SEO', 'DevOps & Frontend', '2 ngày', 'Audit Score > 95 + Tracking live', 'P1']
    ];

    const csvString = csvContent.map(row => row.map(cell => `"${cell.replace(/"/g, '""')}"`).join(',')).join('\r\n');
    const blob = new Blob(['\ufeff' + csvString], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'TuoitreSoft-WBS-Implementation-Matrix.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleCopyClipboard = () => {
    const text = `# BRIEF THIẾT KẾ & PHÁT TRIỂN LANDING PAGE GIỚI THIỆU CÔNG TY TUOITRESOFT

## 1. MỤC TIÊU DỰ ÁN
* Mục tiêu chính: Tăng nhận diện thương hiệu và chuyển đổi (Lead Generation) về Giải pháp AI, Hạ tầng Cloud (GCP/AWS) và ERP/CRM/BPM.
* Primary CTA: Đăng ký tư vấn miễn phí / Nhận báo giá / Đặt lịch Demo.

## 2. ĐỐI TƯỢNG MỤC TIÊU
* C-Level (CEO, CTO, CIO, CFO), Giám đốc Chuyển đổi số, Giám đốc CNTT (IT Director).

## 3. CẤU TRÚC SECTION
* SECTION 1: HERO (TuoitreSoft – Tiên Phong Giải Pháp AI & Quản Trị Doanh Nghiệp Tối Ưu Trên Đám Mây)
* SECTION 2: ĐỐI TÁC HẠ TẦNG CLOUD (Cloud Ace for GCP - sg.cloud-ace.com & Titanbases for AWS - titanbases.com)
* SECTION 3: GIẢI PHÁP CỐT LÕI (AI Chatbot, BigQuery/Redshift Data BI, RPA Chứng từ, Cloud Migration & ERP, CRM, BPM, HRM)
* SECTION 4: TẠI SAO CHỌN CHÚNG TÔI (Tích hợp AI sâu, Chuẩn quốc tế, Tùy biến linh hoạt, Đồng hành 24/7)
* SECTION 5: QUY TRÌNH TRIỂN KHAI 5 BƯỚC
* SECTION 6: FORM ĐĂNG KÝ / LIÊN HỆ (Họ tên, Doanh nghiệp, SĐT/Email, Nhu cầu quan tâm)

## 4. YÊU CẦU NGHỆ THUẬT & KỸ THUẬT
* Style: Modern, Tech-centric, Clean & Professional (Xanh công nghệ Blue/Cyan, Trắng, Xám sang trọng).
* Responsive 100%, Fast loading, Tích hợp tracking GA4/GTM/Pixel, Form gửi CRM/Telegram/Zalo.`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-800 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors cursor-pointer"
          aria-label="Close Brief Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-semibold border border-sky-200">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>XUẤT TÀI LIỆU DỰ ÁN CHO DESIGN & DEV</span>
          </div>

          <h3 className="font-display text-2xl font-bold text-slate-900">
            Tải Bộ Hồ Sơ Dự Án TuoitreSoft (Word & Excel)
          </h3>

          <p className="text-xs text-slate-600">
            Được định dạng chuẩn hóa, sẵn sàng đính kèm vào hợp đồng, kế hoạch triển khai (WBS) hoặc phân bổ công việc cho đội ngũ nội bộ.
          </p>
        </div>

        {/* Two Export Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          
          {/* Card 1: Word Document */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 border border-blue-200 flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="font-display text-base font-bold text-slate-900">
                Tài Liệu Brief Chi Tiết (.DOCX / Word)
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bao gồm toàn bộ 6 sections, mục tiêu, đối tượng, tiêu chí kỹ thuật & đối tác Cloud Ace / Titanbases.
              </p>
            </div>

            <button
              id="btn-download-word"
              onClick={handleExportWord}
              className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md shadow-blue-600/20"
            >
              <Download className="w-4 h-4" />
              <span>Tải File Word (.doc)</span>
            </button>
          </div>

          {/* Card 2: Excel Spreadsheet */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-400 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 border border-emerald-200 flex items-center justify-center">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <h4 className="font-display text-base font-bold text-slate-900">
                Bảng Kế Hoạch Triển Khai (.XLSX / Excel)
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bảng phân chia công việc (WBS), vai trò Design/Frontend/Backend/DevOps, thời gian và sản phẩm bàn giao.
              </p>
            </div>

            <button
              id="btn-download-excel"
              onClick={handleExportExcel}
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md shadow-emerald-600/20"
            >
              <Download className="w-4 h-4" />
              <span>Tải File Excel (.csv)</span>
            </button>
          </div>

        </div>

        {/* Quick Copy / Preview Box */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-slate-700">
            <span>Bản tóm tắt văn bản nhanh (Markdown):</span>
            <button
              onClick={handleCopyClipboard}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white hover:bg-slate-100 text-sky-600 border border-slate-300 transition-colors cursor-pointer shadow-2xs font-medium"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600">Đã Sao Chép</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Sao chép nhanh</span>
                </>
              )}
            </button>
          </div>

          <div className="p-3 rounded-xl bg-white border border-slate-200 font-mono text-[11px] text-slate-700 max-h-36 overflow-y-auto space-y-1">
            <div># BRIEF THIẾT KẾ & PHÁT TRIỂN LANDING PAGE TUOITRESOFT</div>
            <div>* Đối tác: Cloud Ace (GCP: sg.cloud-ace.com) & Titanbases (AWS: titanbases.com)</div>
            <div>* Giải pháp: AI & Cloud (Chatbot RAG, BigQuery/Redshift BI, RPA Document AI, Migration) + Enterprise (ERP, CRM, BPM, HRM)</div>
            <div>* 5 Bước: Khảo sát & Tư vấn -&gt; Kiến trúc -&gt; Phát triển -&gt; Kiểm thử -&gt; Vận hành 24/7</div>
            <div>* Technical: Responsive, Fast loading, On-page SEO, GA4/GTM/Pixel, CRM Webhook</div>
          </div>
        </div>

      </div>
    </div>
  );
};
