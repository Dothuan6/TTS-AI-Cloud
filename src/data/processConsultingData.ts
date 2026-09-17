export interface DiagnosticQuestion {
  id: number;
  question: string;
  category: string;
  options: {
    label: string;
    score: number;
    description: string;
  }[];
}

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  {
    id: 1,
    category: 'Chuẩn hóa tài liệu (SOP)',
    question: 'Quy trình làm việc tại các phòng ban của doanh nghiệp hiện đang được lưu giữ thế nào?',
    options: [
      {
        label: 'Truyền miệng & kinh nghiệm cá nhân',
        score: 1,
        description: 'Nhân sự tự làm theo thói quen, người cũ nghỉ thì người mới bỡ ngỡ không biết hỏi ai.'
      },
      {
        label: 'Có văn bản rải rác trong Word/Drive nhưng ít người đọc',
        score: 2,
        description: 'Tài liệu đã viết lâu năm nhưng không cập nhật, thực tế làm một đằng văn bản ghi một nẻo.'
      },
      {
        label: 'Đã có tài liệu chuẩn (SOP) tương đối đầy đủ',
        score: 4,
        description: 'Có quy định rõ ràng nhưng việc giám sát tuân thủ còn mang tính thủ công, chưa số hóa.'
      },
      {
        label: 'Được số hóa 100% trên hệ thống BPM/ERP',
        score: 5,
        description: 'Mọi bước thực thi đều có luồng hệ thống dẫn dắt, biểu mẫu điện tử và cảnh báo SLA tự động.'
      }
    ]
  },
  {
    id: 2,
    category: 'Phối hợp liên phòng ban',
    question: 'Khi có một công việc liên quan nhiều bộ phận (Sales -> Kế toán -> Kho -> Vận chuyển), tình trạng diễn ra ra sao?',
    options: [
      {
        label: 'Thường xuyên tắc nghẽn & đổ lỗi chéo',
        score: 1,
        description: 'Sales giục đơn, Kho kêu thiếu hàng, Kế toán phàn nàn thiếu chứng từ, khách hàng phản ánh chậm trễ.'
      },
      {
        label: 'Phải trao đổi qua nhiều nhóm chat Zalo/Telegram',
        score: 2,
        description: 'Tin nhắn trôi, sót đơn hàng, dữ liệu rời rạc và không ai chịu trách nhiệm chính (Single Owner).'
      },
      {
        label: 'Có quy định bàn giao nhưng xử lý còn chậm',
        score: 3,
        description: 'Các bên biết nhiệm vụ nhưng phụ thuộc vào nhắc việc thủ công, thiếu thời gian cam kết (SLA).'
      },
      {
        label: 'Luồng dữ liệu liền mạch, phân quyền RACI minh bạch',
        score: 5,
        description: 'Thông tin tự động luân chuyển trên hệ thống số hóa, mọi khâu đều có thời gian xử lý chuẩn.'
      }
    ]
  },
  {
    id: 3,
    category: 'Phê duyệt & Ký duyệt',
    question: 'Các đề xuất chi tiêu, tạm ứng, báo giá hoặc hợp đồng được phê duyệt như thế nào?',
    options: [
      {
        label: 'Ký giấy tờ vật lý hoặc chờ sếp duyệt trực tiếp',
        score: 1,
        description: 'Sếp đi công tác là hồ sơ ứ đọng cả tuần, công việc đình trệ, nhân viên chờ đợi.'
      },
      {
        label: 'Chat xin sếp qua Zalo/Email rồi làm trước bổ sung sau',
        score: 2,
        description: 'Dễ thất thoát tài chính, thiếu căn cứ pháp lý nội bộ và khó kiểm soát ngân sách.'
      },
      {
        label: 'Phê duyệt qua phần mềm nhưng biểu mẫu còn rườm rà',
        score: 3,
        description: 'Đã có công cụ nhưng chưa tối ưu phân cấp ủy quyền theo hạn mức tài chính.'
      },
      {
        label: 'Ký duyệt số/Mobile Approval tự động theo ma trận thẩm quyền',
        score: 5,
        description: 'Phê duyệt trong 15 phút trên điện thoại, tự động chuyển tiếp theo hạn mức tài chính rõ ràng.'
      }
    ]
  },
  {
    id: 4,
    category: 'Mức độ phụ thuộc vào Lãnh đạo',
    question: 'Nếu Giám đốc hoặc Trưởng phòng nghỉ phép 2 tuần, vận hành công ty sẽ ra sao?',
    options: [
      {
        label: 'Gần như tê liệt, việc gì cũng phải gọi điện hỏi',
        score: 1,
        description: 'Doanh nghiệp vận hành hoàn toàn theo mô hình "sếp là trung tâm xử lý dữ liệu".'
      },
      {
        label: 'Vẫn chạy việc cơ bản nhưng phát sinh nhiều sự cố',
        score: 2,
        description: 'Nhân viên không tự tin ra quyết định, nhiều dự án quan trọng bị hoãn lại.'
      },
      {
        label: 'Vận hành ổn định nhờ các trưởng nhóm phụ trách',
        score: 4,
        description: 'Đã có phân quyền nhưng một số quyết định chiến lược và xử lý ngoại lệ vẫn phụ thuộc.'
      },
      {
        label: 'Tự động vận hành trơn tru theo hệ thống & Dashboard',
        score: 5,
        description: 'Hệ thống có cơ chế tự điều phối, phân cấp ủy quyền rõ ràng và báo cáo tự động.'
      }
    ]
  },
  {
    id: 5,
    category: 'Đo lường KPI & Cải tiến',
    question: 'Doanh nghiệp đánh giá hiệu suất vận hành của các quy trình bằng cách nào?',
    options: [
      {
        label: 'Chỉ đánh giá theo cảm tính hoặc khi có sự cố lớn',
        score: 1,
        description: 'Không biết quy trình đang tiêu tốn bao nhiêu thời gian và chi phí của công ty.'
      },
      {
        label: 'Tổng hợp báo cáo Excel cuối tháng/quý',
        score: 2,
        description: 'Số liệu luôn có độ trễ 2-4 tuần, khi phát hiện vấn đề thì chi phí lãng phí đã diễn ra.'
      },
      {
        label: 'Đo lường KPI từng bộ phận nhưng chưa liên kết quy trình',
        score: 3,
        description: 'Bộ phận nào cũng đạt KPI riêng nhưng mục tiêu chung của khách hàng và công ty vẫn chậm.'
      },
      {
        label: 'Real-time Dashboard đo Lead Time & Cycle Time từng công đoạn',
        score: 5,
        description: 'Lãnh đạo nhìn thấy tức thì điểm nghẽn (bottleneck) và chi phí từng giao dịch để tối ưu liên tục.'
      }
    ]
  }
];

export const PROCESS_PAIN_POINTS = [
  {
    id: 'pain-1',
    title: 'Nghẽn Cổ Chai Giữa Các Phòng Ban',
    desc: 'Sales chốt deal nhưng Kho không chuẩn bị kịp; Kế toán chậm xuất hóa đơn dẫn tới công nợ kéo dài; Khách hàng bức xúc vì phải chờ đợi nhiều ngày cho một yêu cầu đơn giản.',
    impact: 'Mất 25-40% khách hàng tiềm năng vì tốc độ xử lý quá chậm.'
  },
  {
    id: 'pain-2',
    title: 'Lãnh Đạo Làm Nô Lệ Của Vận Hành',
    desc: 'Việc lớn việc nhỏ từ phê duyệt 500.000đ tạm ứng đến kiểm tra báo giá đều phải qua tay Giám đốc. Sếp không có thời gian cho chiến lược vì phải đi dập lửa vận hành mỗi ngày.',
    impact: 'Lãng phí 70% thời gian quý báu của ban lãnh đạo vào các việc sự vụ.'
  },
  {
    id: 'pain-3',
    title: 'Quy Trình "Tam Sao Thất Bản" Theo Cá Nhân',
    desc: 'Không có chuẩn mực thao tác (SOP). Mỗi nhân viên làm theo một kiểu. Khi nhân sự chủ chốt nghỉ việc, bí quyết và kinh nghiệm mất theo, người mới phải mất 2-3 tháng đào tạo lại từ đầu.',
    impact: 'Chi phí đào tạo lặp lại và sai sót nghiệp vụ tăng 30-50%.'
  },
  {
    id: 'pain-4',
    title: 'Phần Mềm Nhiều Nhưng Rời Rạc (Data Silos)',
    desc: 'Mua CRM, phần mềm kế toán, phần mềm kho riêng biệt nhưng không liên kết. Nhân viên phải sao chép dữ liệu thủ công từ file này sang file khác, dẫn tới sai lệch số liệu nghiêm trọng.',
    impact: 'Lãng phí hàng trăm giờ nhập liệu thủ công vô ích mỗi tháng.'
  }
];

export const PROCESS_METHODOLOGY_STEPS = [
  {
    phase: 'Giai Đoạn 01',
    name: 'Khảo Sát Hiện Trạng & Chẩn Đoán Điểm Nghẽn (As-Is Audit)',
    duration: '1 - 2 Tuần',
    activities: [
      'Phỏng vấn sâu Ban Lãnh đạo, Trưởng bộ phận và Nhân viên thực thi trực tiếp',
      'Vẽ sơ đồ luồng công việc thực tế hiện tại (As-Is Process Mapping)',
      'Phát hiện các điểm nghẽn (Bottlenecks), khâu trùng lặp và các bước lãng phí không tạo giá trị',
      'Đo lường thời gian chu kỳ (Cycle Time) và chi phí thực thi từng công đoạn'
    ],
    deliverables: 'Báo cáo Chẩn đoán Vận hành 360 độ + Bản đồ hiện trạng As-Is chi tiết'
  },
  {
    phase: 'Giai Đoạn 02',
    name: 'Tái Thiết Kế & Tối Ưu Luồng Công Việc (To-Be Re-engineering)',
    duration: '2 - 3 Tuần',
    activities: [
      'Tái cấu trúc luồng công việc tinh gọn theo chuẩn quốc tế BPMN 2.0',
      'Xóa bỏ 30-50% các bước thừa, gộp các khâu xét duyệt không cần thiết',
      'Xây dựng ma trận trách nhiệm RACI (Responsible, Accountable, Consulted, Informed) cho từng bước',
      'Thiết lập cam kết thời gian xử lý (SLA) và chỉ số hiệu suất (KPI) cho từng vị trí'
    ],
    deliverables: 'Bản đồ quy trình tối ưu To-Be + Ma trận RACI & Chỉ tiêu SLA chuẩn'
  },
  {
    phase: 'Giai Đoạn 03',
    name: 'Chuẩn Hóa Bộ SOP & Số Hóa Biểu Mẫu (Standardization & Digitization)',
    duration: '2 - 3 Tuần',
    activities: [
      'Biên soạn bộ Quy trình Vận hành Chuẩn (SOP) trực quan, có checklist và sơ đồ dễ hiểu',
      'Số hóa 100% biểu mẫu (đề xuất, phiếu kho, hợp đồng, phiếu tạm ứng) lên nền tảng số',
      'Cấu hình luồng ký duyệt tự động phân cấp theo hạn mức trên hệ thống phần mềm',
      'Xây dựng cơ chế cảnh báo trễ hạn và phân luồng thông minh'
    ],
    deliverables: 'Bộ tài liệu SOP hoàn chỉnh + Hệ thống biểu mẫu & luồng duyệt số hóa'
  },
  {
    phase: 'Giai Đoạn 04',
    name: 'Thử Nghiệm Pilot, Đào Tạo & Chuyển Giao (Pilot, Training & Kaizen)',
    duration: '2 - 4 Tuần',
    activities: [
      'Triển khai thử nghiệm (Pilot) tại 1-2 phòng ban trọng điểm để tinh chỉnh',
      'Tổ chức chuỗi Workshop đào tạo chuyển giao cho toàn bộ đội ngũ nhân sự',
      'Xây dựng Dashboard đo lường thời gian thực (Real-time Operations KPI)',
      'Đồng hành hỗ trợ vận hành thực tế 30 ngày và chuyển giao phương pháp cải tiến Kaizen'
    ],
    deliverables: 'Toàn bộ nhân sự vận hành thuần thục + Dashboard KPI thời gian thực'
  }
];

export const CORE_PROCESS_DOMAINS = [
  {
    id: 'lead-to-cash',
    title: 'Quy Trình Bán Hàng & Thu Tiền (Lead-to-Cash)',
    scope: 'Từ tiếp nhận khách hàng, báo giá, hợp đồng, giao hàng đến xuất hóa đơn và thu hồi công nợ.',
    keyOutcomes: [
      'Rút ngắn 50% thời gian từ lúc nhận yêu cầu đến khi gửi báo giá chuẩn cho khách',
      'Tự động kích hoạt luồng kiểm tra tồn kho & khả năng đáp ứng đơn hàng',
      'Giảm 90% rủi ro thất thoát hợp đồng hoặc quên thu hồi công nợ quá hạn'
    ]
  },
  {
    id: 'procure-to-pay',
    title: 'Quy Trình Mua Hàng & Thanh Toán (Procure-to-Pay)',
    scope: 'Từ đề xuất nhu cầu mua sắm, so sánh 3 báo giá nhà cung cấp, duyệt PO đến nghiệm thu và thanh toán.',
    keyOutcomes: [
      'Minh bạch hóa 100% việc lựa chọn nhà cung cấp và giá mua hàng',
      'Phê duyệt phiếu chi/tạm ứng online trong vòng 15-30 phút',
      'Loại bỏ tình trạng chi vượt ngân sách hoặc hóa đơn thiếu chứng từ gốc'
    ]
  },
  {
    id: 'supply-chain-warehouse',
    title: 'Quy Trình Quản Lý Kho & Chuỗi Cung Ứng',
    scope: 'Quy trình nhập kho, kiểm định chất lượng (QA/QC), xếp dỡ, lưu kho, xuất kho và kiểm kê định kỳ.',
    keyOutcomes: [
      'Kiểm soát chính xác 99.5% dữ liệu tồn kho theo thời gian thực',
      'Cắt giảm 40% thời gian soạn hàng (picking/packing) và xuất kho',
      'Tự động tính toán điểm đặt hàng lại (Re-order point) tránh đứt gãy hàng hóa'
    ]
  },
  {
    id: 'hr-onboarding-kpi',
    title: 'Quy Trình Quản Trị Nhân Sự (Hire-to-Retire)',
    scope: 'Từ định biên nhân sự, tuyển dụng, onboarding hội nhập, đánh giá KPI định kỳ đến thôi việc và bàn giao.',
    keyOutcomes: [
      'Rút ngắn 60% thời gian hòa nhập và ra kết quả của nhân sự mới (Onboarding SOP)',
      'Checklist bàn giao tài sản & tài khoản tự động, không lo mất mát dữ liệu',
      'Đánh giá hiệu suất minh bạch theo chỉ số đo lường định lượng'
    ]
  }
];

export const CONSULTING_PACKAGES = [
  {
    id: 'pkg-audit',
    name: 'Gói Khảo Sát Hiện Trạng & Coaching Đội Ngũ Vận Hành',
    badge: 'Tài Trợ 100% Miễn Phí (Trị giá 15 Triệu)',
    priceTag: '0 ĐỒNG / MIỄN PHÍ',
    target: 'Suất tài trợ đặc biệt dành cho doanh nghiệp muốn chẩn đoán tận gốc điểm nghẽn và trang bị năng lực chuẩn hóa cho đội ngũ quản lý.',
    timeline: '1 - 2 Buổi Làm Việc Chuyên Sâu',
    features: [
      'Khảo sát trực tiếp hiện trạng vận hành cùng Ban Giám đốc & Trưởng bộ phận',
      'Chẩn đoán & bóc tách 3 nút thắt cổ chai lớn nhất gây trễ hạn và thất thoát chi phí',
      'Tặng 01 buổi Coaching 1-1 thực chiến: Hướng dẫn đội ngũ tự viết SOP & làm chủ quy trình',
      'Bàn giao bộ tài liệu biểu mẫu SOP & Ma trận RACI chuẩn quốc tế BPMN 2.0',
      'Bản đồ lộ trình tối ưu hóa & đề xuất kiến trúc số hóa tự động (không ràng buộc chi phí)'
    ],
    ctaText: 'Đăng Ký Suất Tư Vấn & Coach Miễn Phí'
  },
  {
    id: 'pkg-focus',
    name: 'Gói Chuẩn Hóa Phòng Ban Trọng Điểm',
    badge: 'Phổ biến nhất',
    popular: true,
    target: 'Tập trung giải quyết dứt điểm sự tắc nghẽn tại 1-2 khối quy trình nóng nhất (vd: Bán hàng - Kho - Kế toán).',
    timeline: '4 - 6 Tuần',
    features: [
      'Mọi hạng mục của gói Khảo sát & Audit hiện trạng',
      'Tái thiết kế luồng To-Be chuẩn BPMN 2.0 cho 2 khối quy trình trọng yếu',
      'Biên soạn đầy đủ bộ tài liệu SOP + Biểu mẫu chuẩn hóa',
      'Thiết lập ma trận phân quyền RACI & cam kết thời gian SLA',
      'Số hóa luồng ký duyệt và tự động hóa cảnh báo',
      'Tặng kèm chuỗi 3 buổi Coaching chuyên sâu kèm cặp thực tế cho đội ngũ nhân sự',
      'Bảo hành hỗ trợ và giám sát tuân thủ 30 ngày sau bàn giao'
    ],
    ctaText: 'Tư Vấn Gói Trọng Điểm'
  },
  {
    id: 'pkg-enterprise',
    name: 'Gói Tái Cấu Trúc Vận Hành Toàn Diện (End-to-End)',
    badge: 'Toàn diện & Bứt phá',
    target: 'Tái thiết kế và số hóa toàn bộ hệ thống vận hành doanh nghiệp để sẵn sàng mở rộng quy mô (Scale-up).',
    timeline: '8 - 12 Tuần',
    features: [
      'Chuẩn hóa toàn bộ hệ thống quy trình cốt lõi của công ty',
      'Tích hợp luồng việc liền mạch vào phần mềm ERP/CRM/BPM',
      'Xây dựng hệ thống Dashboard đo lường vận hành thời gian thực (Executive BI)',
      'Bộ cẩm nang SOP Master điện tử cho toàn bộ tổ chức',
      'Chương trình Coaching & Mentoring chuyên sâu phương pháp Kaizen cho cấp quản lý',
      'Đồng hành cùng Ban Giám đốc trong 90 ngày nghiệm thu và tối ưu hóa',
      'Cam kết tăng ít nhất 30-40% tốc độ luân chuyển công việc'
    ],
    ctaText: 'Tư Vấn Chuyển Đổi Toàn Diện'
  }
];

export const PROCESS_FAQS = [
  {
    q: 'Chương trình tư vấn khảo sát và coaching cho đội ngũ vận hành có thực sự 100% miễn phí không?',
    a: 'Hoàn toàn MIỄN PHÍ 100%. TuoitreSoft tài trợ toàn bộ chi phí buổi khảo sát hiện trạng 1-1 và 01 buổi Coaching thực chiến cho đội ngũ quản lý/vận hành của doanh nghiệp. Chúng tôi cam kết không phát sinh bất kỳ chi phí ẩn nào và không ràng buộc doanh nghiệp phải mua thêm phần mềm hay dịch vụ sau buổi làm việc.'
  },
  {
    q: 'Tại sao TuoitreSoft lại cung cấp dịch vụ tư vấn và coaching miễn phí?',
    a: 'Chúng tôi tin rằng "Quy trình chỉ sống khi con người làm chủ nó". Thay vì chỉ gửi tài liệu lý thuyết, TuoitreSoft muốn chứng minh năng lực thực chiến bằng cách trực tiếp giúp doanh nghiệp tháo gỡ ngay 1-2 nút thắt nhức nhối nhất. Khi doanh nghiệp cảm nhận rõ sự thay đổi và hiệu quả, chúng ta có thể mở rộng hợp tác lâu dài.'
  },
  {
    q: 'Đội ngũ nào trong công ty nên tham gia buổi coaching vận hành miễn phí này?',
    a: 'Buổi coaching được thiết kế tối ưu cho Ban Giám đốc (CEO/COO), Trưởng/Phó các phòng ban (Kinh doanh, Kế toán, Mua hàng, Kho, Nhân sự) và các chuyên viên phụ trách điều phối quy trình. Đội ngũ sẽ được trực tiếp thực hành phương pháp lập bản đồ công việc, phân quyền RACI và kỹ năng xử lý điểm nghẽn.'
  },
  {
    q: 'Doanh nghiệp của tôi có quy mô 20-50 nhân sự, đã cần chuẩn hóa quy trình chưa?',
    a: 'Đây chính là giai đoạn VÀNG để chuẩn hóa. Khi doanh nghiệp vượt mốc 20 nhân sự, việc điều hành bằng miệng và sự vụ cá nhân bắt đầu xuất hiện tình trạng tam sao thất bản, thất thoát chi phí và sếp quá tải. Chuẩn hóa sớm giúp công ty dễ dàng tuyển người mới và tăng gấp đôi quy mô mà không bị vỡ trận vận hành.'
  },
  {
    q: 'Sau buổi tư vấn và coaching miễn phí, doanh nghiệp nhận được những kết quả cụ thể nào?',
    a: 'Doanh nghiệp sẽ nhận được: (1) Báo cáo phân tích 3 điểm nghẽn nghiêm trọng nhất hiện tại; (2) Bản đồ luồng công việc mẫu chuẩn hóa; (3) Bộ Template biểu mẫu & SOP thực chiến; (4) Đội ngũ quản lý nắm vững phương pháp tư duy quy trình và kỹ thuật kiểm soát SLA.'
  },
  {
    q: 'Sau khi bàn giao, làm sao đảm bảo nhân viên thực sự tuân thủ quy trình mới?',
    a: 'Khác với đơn vị tư vấn chỉ giao file văn bản rồi rút lui, TuoitreSoft kết hợp số hóa quy trình: các khâu bắt buộc phải đi qua hệ thống duyệt mới chuyển tiếp được bước sau, có đo lường SLA tự động. Đồng thời chúng tôi tổ chức coaching thực hành và đồng hành giám sát để quy trình trở thành thói quen văn hóa.'
  }
];
