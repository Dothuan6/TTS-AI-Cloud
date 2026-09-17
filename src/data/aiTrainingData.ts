export interface AiModule {
  id: string;
  code: string;
  title: string;
  targetRole: string;
  badge: string;
  highlights: string[];
  toolsPracticed: string[];
  outcomes: string;
}

export const AI_TRAINING_MODULES: AiModule[] = [
  {
    id: 'c-suite',
    code: 'MODULE 01',
    title: 'AI Dành Cho Ban Lãnh Đạo & Quản Lý Cấp Cao',
    targetRole: 'CEO, COO, Giám đốc khối, Trưởng phòng chiến lược',
    badge: 'Chiến lược & Quản trị',
    highlights: [
      'Tư duy tích hợp AI vào mô hình kinh doanh để gia tăng biên lợi nhuận',
      'Ma trận lựa chọn bài toán AI (AI Use-case Prioritization): Chi phí thấp - Tác động lớn',
      'Xây dựng Chính sách Bảo mật & Sử dụng AI Doanh nghiệp (Enterprise AI Policy & Compliance)',
      'Định lượng và đo lường tỷ suất hoàn vốn đầu tư (ROI) của các sáng kiến AI'
    ],
    toolsPracticed: ['ChatGPT Team/Enterprise', 'Claude 3.5 Sonnet', 'Gemini Advanced Workspace', 'Perplexity Pro'],
    outcomes: 'Ban lãnh đạo sở hữu bản đồ lộ trình chuyển đổi AI và khung chính sách bảo mật dữ liệu công ty.'
  },
  {
    id: 'marketing-creative',
    code: 'MODULE 02',
    title: 'AI Tự Động Hóa Marketing & Sáng Tạo Nội Dung Đa Kênh',
    targetRole: 'Marketing Manager, Content Creator, Designer, Digital Marketer',
    badge: 'Tăng tốc 300% Content',
    highlights: [
      'Kỹ thuật xây dựng "Brand Voice AI Persona" chuẩn theo nhận diện thương hiệu công ty',
      'Quy trình sản xuất 30 bài viết chuẩn SEO, bài đăng mạng xã hội trong 2 giờ',
      'Thiết kế hình ảnh quảng cáo, banner thương mại, storyboard video bằng Midjourney & Flux',
      'Phân tích đối thủ cạnh tranh và lập kế hoạch chiến dịch marketing bằng AI Search'
    ],
    toolsPracticed: ['ChatGPT Plus (Custom GPTs)', 'Claude Projects', 'Midjourney v6', 'Flux', 'HeyGen Video'],
    outcomes: 'Đội ngũ Marketing nhân bản năng suất x3 lần, chủ động sáng tạo nội dung và hình ảnh thương mại chuẩn gu.'
  },
  {
    id: 'sales-cskh',
    code: 'MODULE 03',
    title: 'AI Tối Ưu Bán Hàng & Chăm Sóc Khách Hàng Tự Động',
    targetRole: 'Giám đốc Kinh doanh, Sales B2B/B2C, Chuyên viên CSKH & Telesales',
    badge: 'Tăng tỷ lệ chốt Deal',
    highlights: [
      'Kịch bản trả lời phản hồi khách hàng theo từng phân khúc và tâm lý hành vi',
      'Xây dựng trợ lý AI phân loại khách hàng tiềm năng (Lead Scoring) tự động từ tin nhắn',
      'Tạo bản tóm tắt nhu cầu khách hàng và đề xuất giải pháp cá nhân hóa sau mỗi cuộc gọi',
      'Thiết lập Chatbot CSKH 24/7 tra cứu chính sách, giá và FAQ nội bộ công ty không sai sót'
    ],
    toolsPracticed: ['Custom Knowledge GPTs', 'Gemini Live', 'Dify.ai', 'Coze / Chatbase Enterprise'],
    outcomes: 'Rút ngắn 70% thời gian phản hồi khách hàng, tăng tỷ lệ phản hồi và chốt deal thêm 20-35%.'
  },
  {
    id: 'hr-admin',
    code: 'MODULE 04',
    title: 'AI Cho Quản Trị Nhân Sự & Vận Hành Hành Chính',
    targetRole: 'HR Manager, Talent Acquisition (Tuyển dụng), C&B, Hành chính tổng hợp',
    badge: 'Tự động hóa tuyển dụng',
    highlights: [
      'Tự động phân tích, so khớp và sàng lọc hàng trăm hồ sơ CV ứng viên với JD trong 5 phút',
      'Sinh câu hỏi phỏng vấn chuyên sâu theo từng năng lực và rubric đánh giá ứng viên',
      'Soạn thảo văn bản hành chính, quyết định, quy chế nội bộ, email truyền thông chỉ với 1 cú click',
      'Tạo lộ trình đào tạo nội bộ và ngân hàng câu hỏi khảo sát năng lực nhân viên'
    ],
    toolsPracticed: ['Claude 3.5 Sonnet (Document Processing)', 'ChatGPT Data Analysis', 'Gamma App'],
    outcomes: 'Tiết kiệm 80% thời gian lọc hồ sơ và viết văn bản hành chính, nâng chuẩn trải nghiệm ứng viên.'
  },
  {
    id: 'finance-data',
    code: 'MODULE 05',
    title: 'AI Trong Phân Tích Tài Chính, Kế Toán & Dữ Liệu Báo Cáo',
    targetRole: 'CFO, Kế toán trưởng, Chuyên viên kế toán & Phân tích tài chính',
    badge: 'Báo cáo thông minh',
    highlights: [
      'Trích xuất tự động dữ liệu từ hóa đơn, sao kê ngân hàng và hợp đồng dạng ảnh/PDF',
      'Phân tích biến động chi phí, đối chiếu số liệu và phát hiện bất thường kế toán bằng AI',
      'Tạo công thức Excel nâng cao, script VBA/Google Apps Script phức tạp bằng câu lệnh tự nhiên',
      'Xây dựng dự báo dòng tiền và mô hình tài chính với ChatGPT Advanced Data Analysis'
    ],
    toolsPracticed: ['ChatGPT Advanced Data Analysis', 'Claude Artifacts', 'Microsoft Copilot for Excel'],
    outcomes: 'Rút ngắn thời gian lập báo cáo tài chính quản trị từ nhiều ngày xuống chỉ còn vài giờ.'
  },
  {
    id: 'automation-agents',
    code: 'MODULE 06',
    title: 'Tự Động Hóa Quy Trình Với AI Agents & No-Code',
    targetRole: 'Trưởng bộ phận Vận hành, Kỹ sư IT nội bộ, Đội ngũ Digital Transformation',
    badge: 'Luồng việc tự chạy',
    highlights: [
      'Xây dựng hệ thống Agent tự động kết nối AI với Gmail, Google Sheets, Zalo, Slack',
      'Tự động tổng hợp báo cáo ngày từ các nhóm chat gửi thẳng về ban giám đốc mỗi sáng',
      'Thiết lập quy trình trích xuất thông tin khách hàng từ Form đưa vào CRM và phân công việc tự động',
      'Huấn luyện trợ lý AI riêng của công ty với cơ sở dữ liệu nội bộ (RAG Private Knowledge)'
    ],
    toolsPracticed: ['n8n Automation', 'Make.com', 'Dify.ai RAG', 'OpenAI Assistants API'],
    outcomes: 'Xây dựng các luồng công việc tự động không cần lập trình, giải phóng hàng trăm giờ lao động lặp lại.'
  }
];

export const AI_TRAINING_METHODOLOGY = [
  {
    step: '01',
    title: 'Khảo Sát Hiện Trạng & Dữ Liệu Thực Tế',
    desc: 'Chuyên gia TuoitreSoft trực tiếp phỏng vấn đại diện các phòng ban để nắm bắt bài toán nhức nhối nhất, công cụ đang dùng và mức độ sẵn sàng công nghệ của nhân sự.'
  },
  {
    step: '02',
    title: 'May Đo Giáo Trình & Xây Dựng Prompt Playbook Riêng',
    desc: 'Thiết kế giáo án dựa trên dữ liệu mẫu và tình huống thật của công ty bạn (không dùng ví dụ giả lập). Biên soạn bộ Prompt Playbook độc quyền cho từng vị trí.'
  },
  {
    step: '03',
    title: 'Workshop Đào Tạo Thực Chiến "Cầm Tay Chỉ Việc"',
    desc: 'Tổ chức trực tiếp tại văn phòng công ty hoặc Online tương tác cao. 20% lý thuyết tư duy - 80% thực hành. Mỗi học viên kết thúc buổi học đều có sản phẩm thực tế ứng dụng được ngay.'
  },
  {
    step: '04',
    title: 'Đồng Hành Chuyển Giao 30 Ngày & Bảo Hành Kiến Thức',
    desc: 'Nhóm hỗ trợ kỹ thuật đồng hành 30 ngày qua Zalo/Teams riêng. Giải đáp thắc mắc, cập nhật tính năng AI mới nhất và hỗ trợ tối ưu prompt trong quá trình ứng dụng hàng ngày.'
  }
];

export const AI_SECURITY_PILLARS = [
  {
    title: 'Bảo Mật Tuyệt Đối Dữ Liệu Doanh Nghiệp',
    desc: 'Hướng dẫn cài đặt chế độ chặn các mô hình AI dùng dữ liệu nội bộ để huấn luyện công cộng (Opt-out Model Training), bảo vệ bí mật kinh doanh theo chuẩn ISO 27001.'
  },
  {
    title: 'Chính Sách Sử Dụng AI Minh Bạch (AI Policy)',
    desc: 'Cung cấp bộ khung quy chế sử dụng AI mẫu để ban hành trong công ty: việc gì được dùng AI, việc gì cấm đưa dữ liệu nhạy cảm, cơ chế kiểm duyệt trước khi phát hành.'
  },
  {
    title: 'Tối Ưu Chi Phí Bản Quyền Phần Mềm AI',
    desc: 'Tư vấn lựa chọn gói bản quyền phù hợp (Team, Enterprise, API) tránh lãng phí, cấp phát tài khoản tập trung và quản trị phân quyền an toàn.'
  }
];

export const AI_TRAINING_PACKAGES = [
  {
    id: 'pkg-workshop-free',
    name: 'Gói Khảo Sát & Workshop AI In-House Thực Chiến (Tài Trợ 100% Miễn Phí)',
    duration: '01 Buổi Workshop Tận Nơi + Khảo Sát 1-1',
    badge: 'Tài Trợ 100% Miễn Phí (Trị giá 20 Triệu)',
    target: 'Chính sách tài trợ tiên quyết của TuoitreSoft giúp doanh nghiệp mở khóa năng lực ứng dụng AI trực tiếp tại văn phòng mà hoàn toàn không mất chi phí.',
    features: [
      'Chuyên gia AI TuoitreSoft trực tiếp đến tận văn phòng công ty',
      'Khảo sát 1-1 tìm 3-5 bài toán AI "chi phí thấp - tác động lớn"',
      'Thực hành "cầm tay chỉ việc" trên dữ liệu và nghiệp vụ thật của công ty',
      'Tự tay tạo Prompt Playbook và Custom Bot nghiệp vụ dùng được ngay',
      'Thiết lập rào chắn bảo mật dữ liệu doanh nghiệp (Opt-out Privacy)',
      'Tặng trọn bộ 100+ Enterprise Prompts chuyên sâu cho Sales, Mkt, HR, Kế toán'
    ],
    ctaText: 'Đăng Ký Suất Đào Tạo In-House Miễn Phí'
  },
  {
    id: 'pkg-inhouse-custom',
    name: 'Gói Đào Tạo In-house Chuyên Sâu Theo Phòng Ban',
    duration: '02 - 04 Tuần (Theo Module Chuyên Sâu)',
    badge: 'Được chọn nhiều nhất',
    popular: true,
    target: 'Chương trình may đo toàn diện theo quy trình và bài toán thực tế cho từng phòng ban (Marketing, Sales, HR, Kế toán, Vận hành).',
    features: [
      'Khảo sát hiện trạng và số hóa tài liệu nghiệp vụ trước khóa học',
      'Thiết kế giáo trình độc quyền mang đặc thù ngành của công ty',
      'Thực hành tạo Custom GPTs và Bot nghiệp vụ riêng từng phòng ban',
      'Xây dựng quy chế bảo mật AI nội bộ doanh nghiệp chuẩn quốc tế',
      'Tặng bộ Playbook & Prompt Repository thiết kế riêng cho công ty',
      'Hỗ trợ đồng hành thực chiến 30 ngày sau đào tạo',
      'Cấp chứng nhận hoàn thành khóa học cho nhân sự'
    ],
    ctaText: 'Tư Vấn Khóa Học In-house'
  },
  {
    id: 'pkg-csuite-coaching',
    name: 'Gói Cố Vấn 1-1 Cho Ban Lãnh Đạo & Xây Dựng AI Roadmap',
    duration: '01 Tháng Kèm Riêng',
    badge: 'Cố vấn chiến lược C-Level',
    target: 'Dành riêng cho Chủ tịch, Tổng Giám đốc, Ban Điều hành muốn hoạch định chiến lược AI tổng thể cho doanh nghiệp.',
    features: [
      '04 buổi làm việc 1-1 trực tiếp cùng Chuyên gia AI của TuoitreSoft',
      'Rà soát toàn bộ chuỗi giá trị doanh nghiệp để tìm cơ hội ứng dụng AI',
      'Xây dựng lộ trình ứng dụng AI (AI Strategic Roadmap) 1-3 năm',
      'Thiết lập khung quản trị rủi ro, bảo mật và chỉ số ROI',
      'Hỗ trợ tuyển dụng và đánh giá năng lực đội ngũ AI/Chuyển đổi số',
      'Kênh hotline hỗ trợ trực tiếp 24/7 cùng chuyên gia'
    ],
    ctaText: 'Đăng Ký Cố Vấn Lãnh Đạo'
  }
];

export const AI_FAQS = [
  {
    q: 'Tại sao TuoitreSoft lại tài trợ 100% chi phí buổi khảo sát và Workshop In-House tận nơi? Có điều kiện ẩn gì không?',
    a: 'Hoàn toàn KHÔNG có chi phí ẩn hay điều kiện ràng buộc. Đây là chính sách "Lợi ích tiên quyết mở cửa đồng hành" của TuoitreSoft nhằm giúp doanh nghiệp tháo gỡ sự hoài nghi: "Liệu AI có thực sự ứng dụng được vào nghiệp vụ đặc thù của công ty mình hay không?". Khi chuyên gia của chúng tôi đến tận văn phòng cùng đội ngũ giải quyết dữ liệu thật, bạn sẽ trực tiếp kiểm chứng hiệu quả và số giờ tiết kiệm được. Toàn bộ tài liệu, Prompt Playbook và Custom Bot tạo ra đều thuộc sở hữu của doanh nghiệp bạn.'
  },
  {
    q: 'Doanh nghiệp của chúng tôi chưa từng sử dụng AI thì có học được không?',
    a: 'Hoàn toàn được! Chương trình được thiết kế theo phương pháp trực quan, dễ hiểu từ căn bản đến nâng cao. Chuyên gia sẽ hướng dẫn từng bước từ thao tác giao tiếp tự nhiên với AI đến việc thiết lập bot chuyên nghiệp, người không rành công nghệ vẫn làm chủ dễ dàng.'
  },
  {
    q: 'Dữ liệu nội bộ của công ty khi đưa vào thực hành có bị rò rỉ ra ngoài không?',
    a: 'Bảo mật là ưu tiên số 1 của TuoitreSoft. Trước khi học, chúng tôi hướng dẫn thiết lập rào chắn dữ liệu (Data Privacy Setting), sử dụng các gói doanh nghiệp có cam kết không train dữ liệu, đồng thời hướng dẫn phương pháp làm sạch (anonymize) dữ liệu nhạy cảm trước khi đưa vào AI.'
  },
  {
    q: 'Nhiều nhân viên đã tự mua tài khoản ChatGPT dùng thử, khóa học có gì khác biệt?',
    a: 'Sử dụng tự phát thường chỉ dừng lại ở mức hỏi đáp đơn giản hoặc viết lại đoạn văn cơ bản. Khóa học của TuoitreSoft giúp nhân sự nâng lên cấp độ chuyên nghiệp: Kỹ thuật prompt đa tầng (Few-shot, Chain-of-Thought), nạp tài liệu phân tích sâu, xây dựng Custom GPTs riêng cho phòng ban và tự động hóa luồng việc với AI Agents giúp tiết kiệm hàng chục giờ mỗi tuần.'
  },
  {
    q: 'Khóa học được tổ chức tại đâu và có thể linh hoạt lịch trình không?',
    a: 'Chúng tôi tổ chức linh hoạt: Đào tạo trực tiếp tại văn phòng của doanh nghiệp (In-house) hoặc đào tạo trực tuyến (Online tương tác cao qua Google Meet/Zoom). Lịch học được sắp xếp theo thời gian thuận tiện nhất của doanh nghiệp.'
  }
];
