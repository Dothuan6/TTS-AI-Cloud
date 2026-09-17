import { PartnerInfo, SolutionItem, WhyUsPillar, ProcessStep } from '../types';

export const HERO_CONTENT = {
  badge: 'Dịch Vụ Tư Vấn Chiến Lược & Triển Khai Giải Pháp Trọn Gói',
  headline: 'Tư Vấn & Triển Khai Giải Pháp Số Tạo Lợi Ích Tối Đa Cho Doanh Nghiệp',
  subHeadline: 'Đồng hành cùng Cloud Ace (Google Cloud) và Titanbases (AWS) tư vấn kiến trúc tối ưu và trực tiếp triển khai giải pháp Cloud, AI & Quản trị doanh nghiệp — cam kết cắt giảm 30-50% chi phí vận hành, tự động hóa quy trình và bứt phá hiệu suất kinh doanh.',
  ctaPrimary: 'Đăng Ký Tư Vấn Giải Pháp 1-1',
  ctaSecondary: 'Khám Phá Giải Pháp & Lợi Ích',
  stats: [
    { label: 'Tiết Kiệm Chi Phí Vận Hành', value: '30% - 50%', sub: 'Tư vấn FinOps & Tự động hóa nghiệp vụ' },
    { label: 'Cam Kết Uptime Hạ Tầng', value: '99.99%', sub: 'Hạ tầng GCP & AWS Multi-Region' },
    { label: 'Tiến Độ Triển Khai Nhanh', value: '4 - 8 Tuần', sub: 'Module hóa đóng gói chuẩn Agile' },
    { label: 'Thời Gian Hoàn Vốn (ROI)', value: '6 - 12 Tháng', sub: 'Lợi ích kinh tế đo đếm minh bạch' }
  ]
};

export const PARTNERS_DATA: PartnerInfo[] = [
  {
    id: 'cloud-ace',
    name: 'Cloud Ace',
    role: 'Đối tác chiến lược Google Cloud Platform (GCP)',
    platform: 'GCP',
    url: 'https://sg.cloud-ace.com',
    displayUrl: 'sg.cloud-ace.com',
    badge: 'Google Cloud Premier Partner',
    description: 'Bảo trợ kỹ thuật hạ tầng Google Cloud, đồng hành tư vấn và triển khai BigQuery Data Warehouse, Vertex AI, Kubernetes GKE bảo mật chuẩn quốc tế.',
    specialties: [
      'Tư vấn & Triển khai BigQuery Data Lakehouse',
      'Google Cloud Vertex AI & Gemini Models',
      'Kubernetes Engine (GKE) & Microservices',
      'Tuân thủ bảo mật tiêu chuẩn ISO 27001, SOC 2'
    ],
    certifications: ['Google Cloud Premier Partner', 'Data Analytics Specialization', 'Cloud Migration Certified']
  },
  {
    id: 'titanbases',
    name: 'Titanbases',
    role: 'Đối tác chiến lược Amazon Web Services (AWS)',
    platform: 'AWS',
    url: 'https://titanbases.com/',
    displayUrl: 'titanbases.com',
    badge: 'AWS Advanced Consulting Partner',
    description: 'Chuyên gia tư vấn di chuyển đám mây AWS Well-Architected Framework, cùng TuoitreSoft triển khai FinOps tối ưu chi phí và hệ thống chịu tải lớn.',
    specialties: [
      'Tư vấn AWS Well-Architected Framework',
      'Triển khai Amazon Redshift & Analytics',
      'AWS Bedrock & Trí tuệ nhân tạo tạo sinh',
      'Thực thi FinOps - Giảm 35-50% chi phí Cloud'
    ],
    certifications: ['AWS Advanced Tier Partner', 'Migration Competency', 'DevOps & FinOps Certified']
  }
];

export const SOLUTIONS_DATA: SolutionItem[] = [
  // 1. Dịch Vụ Tư Vấn & Triển Khai AI & Hạ Tầng Cloud (GCP/AWS)
  {
    id: 'cloud-migration',
    title: 'Tư Vấn & Triển Khai Hạ Tầng Cloud (GCP/AWS)',
    shortDesc: 'Khảo sát, thiết kế kiến trúc chuẩn Well-Architected và di chuyển Zero-Downtime, giảm 30-50% chi phí Cloud.',
    fullDesc: 'Dịch vụ tư vấn quy hoạch hạ tầng và triển khai di chuyển toàn diện lên Google Cloud hoặc AWS. Thiết kế hệ thống chịu tải cao, đa vùng dự phòng (Multi-Region High Availability), thực thi FinOps chống lãng phí tài nguyên và cam kết Uptime 99.99%.',
    category: 'ai_cloud',
    icon: 'Cloud',
    keyFeatures: [
      'Đánh giá hiện trạng hạ tầng & lập bài toán ROI tiết kiệm chi phí 0đ',
      'Lộ trình di chuyển Zero-Downtime bảo toàn 100% dữ liệu kinh doanh',
      'Tối ưu FinOps: Quản lý chi phí minh bạch, cắt giảm 30-50% hóa đơn',
      'Bảo mật hạ tầng đa lớp: WAF, DDoS Protection, IAM chuẩn Zero-Trust'
    ],
    technologies: ['Google Cloud (GCP)', 'Amazon Web Services (AWS)', 'Terraform IaC', 'Kubernetes GKE/EKS'],
    businessImpact: 'Tiết kiệm 30-50% chi phí máy chủ, loại bỏ 100% nguy cơ sập hệ thống',
    demoType: 'migration'
  },
  {
    id: 'ai-chatbot',
    title: 'Tư Vấn & Triển Khai Trợ Lý AI (RAG Enterprise)',
    shortDesc: 'Xây dựng trợ lý ảo thông minh am hiểu tri thức nội bộ, tự động hóa 80% tác vụ CSKH & hỗ trợ nhân viên.',
    fullDesc: 'Tư vấn và đóng gói giải pháp AI Agent tích hợp công nghệ RAG (Retrieval-Augmented Generation) tiên tiến nhất. Huấn luyện trên kho dữ liệu riêng của doanh nghiệp (chính sách, hợp đồng, quy trình), triển khai đa kênh Zalo OA, Website, Microsoft Teams và Telegram với bảo mật thông tin tuyệt đối.',
    category: 'ai_cloud',
    icon: 'Bot',
    keyFeatures: [
      'Huấn luyện trên dữ liệu đặc thù của doanh nghiệp, không rò rỉ dữ liệu',
      'Tích hợp RAG thông minh: Tra cứu chính sách, báo giá, hợp đồng tức thì',
      'Đa kênh đồng bộ: Zalo OA, Webchat, Teams, Mobile App',
      'Phân quyền truy cập thông tin nghiêm ngặt theo từng cấp bậc'
    ],
    technologies: ['Gemini 2.0 Flash / Pro', 'Vector DB (Milvus/Pinecone)', 'LangChain RAG', 'Enterprise Webhooks'],
    businessImpact: 'Giảm 75% chi phí trực tổng đài, phản hồi khách hàng trong 1 giây 24/7',
    demoType: 'chatbot'
  },
  {
    id: 'ai-analytics',
    title: 'Tư Vấn & Xây Dựng Data Warehouse & BI',
    shortDesc: 'Quy hoạch kho dữ liệu lớn trên BigQuery & Redshift, bảng điều khiển BI thời gian thực hỗ trợ lãnh đạo ra quyết định.',
    fullDesc: 'Tư vấn kiến trúc dữ liệu tập trung và triển khai Data Warehouse hiện đại. Kết nối dữ liệu từ ERP, CRM, POS, Sàn TMĐT và Ngân hàng thành một nguồn sự thật duy nhất (Single Source of Truth), tích hợp AI dự báo xu hướng thị trường và phát hiện bất thường tài chính.',
    category: 'ai_cloud',
    icon: 'BarChart3',
    keyFeatures: [
      'Thiết kế Data Warehouse quy mô lớn trên Google BigQuery & AWS Redshift',
      'Dashboard điều hành thời gian thực trực quan cho Ban Giám đốc (CEO/CFO/COO)',
      'AI hỏi đáp báo cáo kinh doanh bằng tiếng Việt tự nhiên (Text-to-Insights)',
      'Mô hình Machine Learning dự báo nhu cầu thị trường & cảnh báo tồn kho'
    ],
    technologies: ['Google BigQuery', 'AWS Redshift', 'dbt Data Pipeline', 'Looker / Power BI'],
    businessImpact: 'Rút ngắn thời gian lập báo cáo quản trị từ 7 ngày xuống còn 3 giây',
    demoType: 'analytics'
  },
  {
    id: 'rpa-document',
    title: 'Tư Vấn & Tự Động Hóa Chứng Từ AI (OCR & RPA)',
    shortDesc: 'Bóc tách tự động hóa đơn, hợp đồng, chứng từ thuế và nhập liệu thẳng vào ERP, chính xác >99.5%.',
    fullDesc: 'Tư vấn cải tiến quy trình kế toán - mua hàng và triển khai Robot tự động hóa kết hợp Document AI. Nhận diện và xử lý tự động hàng nghìn hóa đơn điện tử, đối chiếu 3 chiều (PO - Biên bản giao nhận - Hóa đơn) và tự động hạch toán không cần nhân viên gõ tay.',
    category: 'ai_cloud',
    icon: 'FileText',
    keyFeatures: [
      'Document AI bóc tách chính xác hóa đơn GTGT, tờ khai hải quan, hợp đồng',
      'Tự động kiểm tra tính hợp pháp hóa đơn trên cổng Tổng cục Thuế',
      'Khớp nối 3 chiều tự động loại trừ gian lận và sai lệch số liệu',
      'Tích hợp sẵn API đẩy chứng từ vào phần mềm Kế toán / ERP'
    ],
    technologies: ['Google Document AI', 'Python RPA Automation', 'Vision AI', 'RESTful API'],
    businessImpact: 'Tiết kiệm 85% thời gian kế toán nhập liệu, triệt tiêu 100% lỗi sai số',
    demoType: 'rpa'
  },

  // 2. Dịch Vụ Tư Vấn & Triển Khai Phần Mềm Quản Trị (Enterprise Software)
  {
    id: 'erp-system',
    title: 'Tư Vấn & Triển Khai Hệ Thống ERP Toàn Diện',
    shortDesc: 'Số hóa quản trị Tài chính, Kho vận, Mua hàng và Sản xuất may đo theo đặc thù chuỗi cung ứng của doanh nghiệp.',
    fullDesc: 'Dịch vụ tư vấn tái cấu trúc quy trình vận hành và triển khai phần mềm ERP thế hệ mới. May đo linh hoạt theo mô hình kinh doanh thực tế, tuân thủ nghiêm ngặt chuẩn kế toán Việt Nam (VAS) và quốc tế (IFRS), tích hợp AI tối ưu hóa vòng quay vốn lưu động.',
    category: 'enterprise',
    icon: 'Layers',
    keyFeatures: [
      'Quản lý Tài chính - Kế toán chuẩn VAS/IFRS, hạch toán tự động đa chi nhánh',
      'Quản lý Kho vận & Tồn kho đa điểm (Multi-Warehouse, Barcode/QR Code)',
      'Hoạch định sản xuất (BOM, định mức tiêu hao, tiến độ xưởng realtime)',
      'Quản lý chuỗi cung ứng, thầu mua sắm tập trung minh bạch'
    ],
    technologies: ['Cloud-Native ERP', 'PostgreSQL / Cloud SQL', 'Microservices', 'FastAPI & Node.js'],
    businessImpact: 'Giảm 25% vốn ứ đọng trong kho, tăng 35% tốc độ luân chuyển đơn hàng',
    demoType: 'erp'
  },
  {
    id: 'crm-system',
    title: 'Tư Vấn & Triển Khai CRM Đa Kênh & Sales Pipeline',
    shortDesc: 'Quản lý tập trung khách hàng từ mọi kênh (Ads, Fanpage, Zalo, Website), tự động chia Lead và tăng tỷ lệ chốt đơn.',
    fullDesc: 'Tư vấn phễu bán hàng chuẩn hóa và triển khai CRM chuyên biệt. Tích hợp AI chấm điểm tiềm năng khách hàng (Lead Scoring), nhắc nhở lịch chăm sóc tự động, giám sát KPI đội ngũ kinh doanh thời gian thực và quản lý vòng đời khách hàng trọn vẹn.',
    category: 'enterprise',
    icon: 'Users',
    keyFeatures: [
      'Thu thập và hợp nhất Lead từ Facebook, Zalo OA, Website, Hotline về 1 giao diện',
      'AI Lead Scoring: Tự động phân loại và ưu tiên khách có xác suất chốt đơn cao',
      'Workflow tự động: Gửi báo giá, nhắc hẹn, chăm sóc tái mua hàng tự động',
      'Báo cáo doanh số và tỷ lệ chuyển đổi từng nhân viên theo thời gian thực'
    ],
    technologies: ['Omnichannel InBox', 'Smart Routing Algorithm', 'Zalo ZNS API', 'Sales Mobile App'],
    businessImpact: 'Tăng 40% tỷ lệ chuyển đổi bán hàng, giảm 60% thời gian phản hồi khách',
    demoType: 'crm'
  },
  {
    id: 'bpm-workflow',
    title: 'Tư Vấn & Số Hóa Quy Trình Nghiệp Vụ (BPM)',
    shortDesc: 'Chuẩn hóa và tự động hóa các luồng phê duyệt mua sắm, thanh toán, hợp đồng — vận hành không giấy tờ.',
    fullDesc: 'Tư vấn lược bỏ các bước quy trình rườm rà và triển khai hệ thống Quản lý Quy trình Nghiệp vụ (BPM). Ký duyệt điện tử trên smartphone, tự động phân luồng theo hạn mức ngân sách, cảnh báo tắc nghẽn giúp tổ chức vận hành trơn tru và minh bạch.',
    category: 'enterprise',
    icon: 'GitBranch',
    keyFeatures: [
      'Thiết kế quy trình kéo-thả trực quan, linh hoạt theo từng phòng ban',
      'Phê duyệt đa cấp trên điện thoại: Tạm ứng, mua sắm, đề xuất nhân sự',
      'Tích hợp Chữ ký số điện tử (Digital Signature) đầy đủ giá trị pháp lý',
      'Theo dõi SLA và tự động cảnh báo khi có khâu xử lý chậm trễ'
    ],
    technologies: ['BPMN 2.0 Engine', 'Digital Signature eID', 'Push Notification', 'Audit Trail Log'],
    businessImpact: 'Rút ngắn 80% thời gian luân chuyển phê duyệt, tiết kiệm 100% chi phí in ấn',
    demoType: 'bpm'
  },
  {
    id: 'hrm-system',
    title: 'Tư Vấn & Triển Khai Quản Trị Nhân Sự (HRM & KPI)',
    shortDesc: 'Tự động hóa chấm công AI, tính lương đa công thức phức tạp và quản trị mục tiêu OKR/KPI minh bạch.',
    fullDesc: 'Tư vấn cơ cấu tổ chức và triển khai giải pháp HRM toàn diện. Ứng dụng AI nhận diện khuôn mặt chống gian lận chấm công, tự động hóa tính lương - bảo hiểm - thuế TNCN chính xác đến từng đồng và liên kết hiệu suất nhân viên với mục tiêu chiến lược của công ty.',
    category: 'enterprise',
    icon: 'UserCheck',
    keyFeatures: [
      'Chấm công nhận diện khuôn mặt AI trên điện thoại kết hợp định vị GPS',
      'Bảng tính lương tự động đa dạng công thức, tự động gửi phiếu lương bảo mật',
      'Quản lý vòng đời nhân sự số: Tuyển dụng, hợp đồng lao động, bảo hiểm, đào tạo',
      'Đánh giá hiệu suất OKR/KPI theo chu kỳ với bảng theo dõi trực quan'
    ],
    technologies: ['Face AI Model', 'Payroll Calculation Engine', 'Mobile Self-Service', 'RBAC Security'],
    businessImpact: 'Cắt giảm 90% thời gian tính lương hàng tháng, minh bạch hóa 100% KPI',
    demoType: 'hrm'
  }
];

export const WHY_CHOOSE_US: WhyUsPillar[] = [
  {
    id: 'expert-consulting',
    title: 'Tư Vấn Khách Quan Chuẩn Quốc Tế',
    description: 'Chúng tôi không bán sản phẩm đóng gói cứng nhắc. Đội ngũ chuyên gia tiến hành khảo sát hiện trạng, tư vấn giải pháp chuẩn Well-Architected Framework từ Google Cloud & AWS, tối ưu riêng cho bài toán doanh nghiệp.',
    highlight: 'Well-Architected Consulting',
    icon: 'Cpu',
    proofPoint: 'Khảo sát hiện trạng & đề xuất kiến trúc sơ bộ hoàn toàn 0đ'
  },
  {
    id: 'turnkey-delivery',
    title: 'Triển Khai Trọn Gói Đúng Hạn & An Toàn',
    description: 'Năng lực triển khai thực chiến với phương pháp Agile/Scrum. Cam kết bàn giao đúng tiến độ trong 4 - 8 tuần, lộ trình chuyển đổi Zero-Downtime đảm bảo vận hành kinh doanh liên tục không bị gián đoạn.',
    highlight: 'Turnkey Delivery & Zero-Downtime',
    icon: 'ShieldCheck',
    proofPoint: 'Bảo trợ kỹ thuật trực tiếp bởi Cloud Ace (GCP) & Titanbases (AWS)'
  },
  {
    id: 'tangible-roi',
    title: 'Cam Kết Lợi Ích & Đo Lường ROI Rõ Ràng',
    description: 'Mọi giải pháp đều được lượng hóa bằng các chỉ số kinh doanh cụ thể: Tiết kiệm 30-50% chi phí Cloud, giảm 70% thời gian xử lý thủ công, thời gian hoàn vốn đầu tư rõ ràng từ 6 đến 12 tháng.',
    highlight: 'Measurable Business ROI',
    icon: 'SlidersHorizontal',
    proofPoint: 'Cam kết Uptime SLA 99.99% và rà soát FinOps định kỳ'
  },
  {
    id: 'continuous-optimization',
    title: 'Đồng Hành Vận Hành & Hỗ Trợ 24/7/365',
    description: 'Không dừng lại ở việc bàn giao; TuoitreSoft đồng hành như phòng kỹ thuật chuyên trách. Giám sát hệ thống 24/7, cam kết thời gian phản hồi dưới 15 phút và liên tục tối ưu chi phí định kỳ.',
    highlight: '24/7 Operations & FinOps',
    icon: 'Headphones',
    proofPoint: 'SLA phản hồi khẩn cấp < 15 phút, đồng hành tối ưu hóa trọn đời'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    title: 'Khảo Sát Hiện Trạng & Tư Vấn 0đ',
    shortDesc: 'Lắng nghe bài toán doanh nghiệp, đánh giá hệ thống hiện tại và xác định điểm nghẽn.',
    detailedPoints: [
      'Phỏng vấn trực tiếp Ban Lãnh đạo và Trưởng các bộ phận để nắm bắt mục tiêu kinh doanh.',
      'Kiểm toán (Audit) hệ thống hạ tầng máy chủ, phần mềm quản lý và chất lượng dữ liệu hiện hữu.',
      'Tính toán bài toán hoàn vốn đầu tư (ROI Analysis) và đề xuất lộ trình chuyển đổi số tối ưu chi phí.'
    ],
    deliverable: 'Hồ sơ Đề xuất Giải pháp Kỹ thuật & Báo cáo Phân tích ROI (Solution Brief)',
    duration: '3 - 5 ngày làm việc',
    sla: 'Tư vấn miễn phí 1-1 cùng Solution Architect cấp cao'
  },
  {
    stepNumber: 2,
    title: 'Thiết Kế Kiến Trúc Giải Pháp',
    shortDesc: 'Quy hoạch bản vẽ kiến trúc Cloud, mô hình AI và luồng nghiệp vụ chi tiết.',
    detailedPoints: [
      'Thiết kế sơ đồ kiến trúc hạ tầng Cloud (GCP/AWS) chuẩn Well-Architected cùng Cloud Ace & Titanbases.',
      'Đặc tả luồng dữ liệu (Data Pipeline), cơ sở dữ liệu và chính sách bảo mật thông tin.',
      'Thiết kế giao diện người dùng (UI/UX) và chuẩn hóa luồng phê duyệt nghiệp vụ (BPMN).'
    ],
    deliverable: 'Tài liệu Thiết kế Kiến trúc Kỹ thuật (Architecture Blueprint) & Prototype UI/UX',
    duration: '1 - 2 tuần',
    sla: 'Đảm bảo tuân thủ tiêu chuẩn an toàn thông tin ISO 27001 & SOC 2'
  },
  {
    stepNumber: 3,
    title: 'Triển Khai & Tích Hợp Hệ Thống',
    shortDesc: 'Khởi tạo hạ tầng tự động, đóng gói module phần mềm và huấn luyện AI thực chiến.',
    detailedPoints: [
      'Tự động hóa hạ tầng đám mây bằng Infrastructure as Code (Terraform) trên GCP hoặc AWS.',
      'Phát triển và cấu hình các phân hệ phần mềm quản trị (ERP/CRM/BPM/HRM) theo phương pháp Agile.',
      'Huấn luyện và fine-tune mô hình AI (Chatbot RAG, OCR, BI Analytics) với tập dữ liệu doanh nghiệp.'
    ],
    deliverable: 'Hệ thống Staging hoàn chỉnh để kiểm tra và vận hành thử nghiệm',
    duration: '3 - 6 tuần',
    sla: 'Báo cáo tiến độ và demo chức năng thực tế 2 tuần/lần (Sprint Demo)'
  },
  {
    stepNumber: 4,
    title: 'Kiểm Thử & Chuyển Giao Đào Tạo',
    shortDesc: 'Kiểm tra an toàn bảo mật, đào tạo chuyên sâu và đảm bảo 100% nhân sự thành thạo.',
    detailedPoints: [
      'Kiểm thử chịu tải cao (Load Testing) và rà quét lỗ hổng bảo mật (Penetration Testing).',
      'Tổ chức đào tạo trực tiếp và quay video bài giảng cho từng nhóm đối tượng (Admin, Quản lý, Nhân viên).',
      'Hỗ trợ vận hành song song (Parallel Run) giữa hệ thống cũ và mới để đảm bảo không rủi ro.'
    ],
    deliverable: 'Biên bản nghiệm thu UAT, trọn bộ tài liệu hướng dẫn và video đào tạo',
    duration: '1 - 2 tuần',
    sla: '100% cán bộ nhân viên nắm vững thao tác trước khi Go-Live chính thức'
  },
  {
    stepNumber: 5,
    title: 'Vận Hành SLA & Tối Ưu FinOps Liên Tục',
    shortDesc: 'Giám sát 24/7, hỗ trợ kỹ thuật tức thì và định kỳ rà soát cắt giảm chi phí Cloud.',
    detailedPoints: [
      'Thiết lập hệ thống giám sát APM tự động cảnh báo sự cố 24/7/365.',
      'Rà soát hóa đơn Cloud hàng tháng (FinOps Review) cùng Cloud Ace / Titanbases để loại bỏ lãng phí.',
      'Liên tục cập nhật tính năng mới và tối ưu hiệu suất mô hình AI theo quy mô tăng trưởng.'
    ],
    deliverable: 'Báo cáo Vận hành Hạ tầng & Báo cáo Tối ưu Chi phí FinOps định kỳ mỗi tháng',
    duration: 'Đồng hành dài hạn',
    sla: 'Cam kết phản hồi sự cố khẩn cấp < 15 phút, Uptime SLA 99.99%'
  }
];

export const COMPARISON_DATA = [
  {
    criterion: 'Cách tiếp cận dự án',
    tuoitreSoft: 'Tư vấn bài toán kinh doanh trước, thiết kế kiến trúc chuẩn quốc tế rồi mới triển khai trọn gói',
    traditionalDev: 'Chỉ nhận yêu cầu viết code thụ động, thiếu tầm nhìn kiến trúc và tối ưu chi phí',
    inHouse: 'Mất nhiều thời gian nghiên cứu công nghệ, dễ thử nghiệm sai gây lãng phí ngân sách'
  },
  {
    criterion: 'Hạ tầng Cloud & Đối tác',
    tuoitreSoft: 'Được bảo trợ chính thức bởi Cloud Ace (Google Cloud) & Titanbases (AWS), chuẩn ISO & SOC2',
    traditionalDev: 'Sử dụng VPS/Hosting đơn lẻ, thiếu cơ chế sao lưu đa vùng, nguy cơ gián đoạn cao',
    inHouse: 'Chi phí mua sắm máy chủ vật lý đắt đỏ hoặc thiếu chứng chỉ Cloud Architect chuyên sâu'
  },
  {
    criterion: 'Ứng dụng AI & Tự động hóa',
    tuoitreSoft: 'Tích hợp sâu RAG, Document AI và BI Analytics vào trực tiếp luồng nghiệp vụ tạo giá trị thực',
    traditionalDev: 'Chỉ tạo giao diện tĩnh hoặc tích hợp chatbot mẫu cơ bản không hiểu dữ liệu nội bộ',
    inHouse: 'Chi phí tuyển dụng và duy trì đội ngũ kỹ sư AI/Data Scientist quá cao cho SME'
  },
  {
    criterion: 'Tối ưu chi phí FinOps',
    tuoitreSoft: 'Cam kết tối ưu 30-50% chi phí Cloud, định kỳ rà soát hóa đơn để triệt tiêu lãng phí tài nguyên',
    traditionalDev: 'Không quan tâm đến hóa đơn Cloud hàng tháng của khách hàng sau khi bàn giao',
    inHouse: 'Thường bị tình trạng cấu hình dư thừa (Over-provisioning) gây lãng phí ngân sách lớn'
  },
  {
    criterion: 'Cam kết chất lượng & SLA',
    tuoitreSoft: 'Cam kết Uptime 99.99%, thời gian triển khai 4-8 tuần, hỗ trợ 24/7 phản hồi dưới 15 phút',
    traditionalDev: 'Dự án thường trễ hạn từ 6-12 tháng, chỉ hỗ trợ giờ hành chính với chi phí phát sinh cao',
    inHouse: 'Rủi ro đứt gãy hệ thống khi nhân sự chủ chốt nghỉ việc hoặc chuyển công tác'
  }
];
