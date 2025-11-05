/* MLN 131 - Học Thông Minh (Phiên bản nâng cấp với animation + layout mới)
   Nội dung gốc đầy đủ Phần 1–7, quiz và flashcard
*/

// ====== DỮ LIỆU NỘI DUNG ======
const contentData = [
    {
        id: "phan1",
        title: "Phần 1: Đặc điểm quá độ lên chủ nghĩa xã hội ở Việt Nam (Bối cảnh và tính tất yếu)",
        image: "images/flag-vn.png",
        html: `
      <p>Phân tích những đặc điểm cơ bản, thuận lợi và khó khăn của Việt Nam khi tiến lên chủ nghĩa xã hội, đặc biệt là việc <strong>bỏ qua chế độ tư bản chủ nghĩa (TBCN)</strong>. Khẳng định con đường quá độ này là sự lựa chọn duy nhất, đúng đắn, phản ánh đúng quy luật phát triển khách quan.</p>

      <h3>Phần 1. Tính tất yếu khách quan và bối cảnh quá độ lên chủ nghĩa xã hội</h3>
      <p><strong>Khẳng định tính tất yếu và sự lựa chọn đúng đắn:</strong> Con đường quá độ lên CNXH bỏ qua chế độ TBCN ở Việt Nam là sự lựa chọn duy nhất, đúng đắn, khoa học.</p>

      <ul>
        <li><strong>Phù hợp với quy luật lịch sử:</strong> Trong bối cảnh toàn cầu hóa, các nước lạc hậu có thể tiến thẳng lên CNXH.</li>
        <li><strong>Phản ánh nguyện vọng nhân dân:</strong> Phù hợp xu thế thời đại, nguyện vọng dân tộc.</li>
        <li><strong>Mục tiêu cách mạng:</strong> Cương lĩnh 1930 đã xác định rõ con đường này.</li>
      </ul>

      <h3>Bối cảnh (Thuận lợi và Khó khăn):</h3>
      <h4>Khó khăn:</h4>
      <ul>
        <li>Hậu quả chiến tranh kéo dài, tàn dư thực dân phong kiến.</li>
        <li>Phát triển kinh tế kém, xuất phát điểm thấp.</li>
      </ul>
      <h4>Thuận lợi:</h4>
      <ul>
        <li>Thời đại quá độ từ TBCN lên CNXH.</li>
        <li>Thành tựu khoa học - kỹ thuật, sự lãnh đạo của Đảng.</li>
      </ul>

      <h3>Bỏ qua chế độ TBCN</h3>
      <ul>
        <li><strong>“Bỏ qua”:</strong> Không xác lập vị trí thống trị của quan hệ sản xuất TBCN.</li>
        <li><strong>“Tiếp thu”:</strong> Kế thừa thành tựu khoa học, công nghệ, quản lý.</li>
      </ul>

      <p><strong>Đại hội XIII (2021):</strong> Đến năm 2045 trở thành nước phát triển, thu nhập cao.</p>
    `
    },
    {
        id: "phan2",
        title: "Phần 2: Những đặc trưng cơ bản của Chủ nghĩa xã hội ở Việt Nam hiện nay",
        image: "images/socialism.png",
        html: `
      <p>Mô hình CNXH Việt Nam với 8 đặc trưng cơ bản, nhấn mạnh mục tiêu “Dân giàu, nước mạnh...” và vai trò nhân dân làm chủ.</p>
      <ol>
        <li>Dân giàu, nước mạnh, dân chủ, công bằng, văn minh.</li>
        <li>Do nhân dân làm chủ.</li>
        <li>Kinh tế phát triển cao, quan hệ sản xuất tiến bộ.</li>
        <li>Văn hóa tiên tiến, đậm đà bản sắc dân tộc.</li>
        <li>Con người ấm no, tự do, hạnh phúc.</li>
        <li>Các dân tộc bình đẳng, đoàn kết.</li>
        <li>Nhà nước pháp quyền XHCN do Đảng lãnh đạo.</li>
        <li>Hợp tác với các nước trên thế giới.</li>
      </ol>
    `
    },
    {
        id: "phan3",
        title: "Phần 3: Phương hướng cơ bản xây dựng Chủ nghĩa xã hội ở Việt Nam",
        image: "images/future-2045.png",
        html: `
      <h3>1. Đẩy mạnh Công nghiệp hóa, Hiện đại hóa</h3>
      <ul>
        <li>Ưu tiên công nghiệp nặng, công nghệ cao.</li>
        <li>Nông nghiệp: ứng dụng công nghệ, nông thôn mới.</li>
        <li>Hội nhập quốc tế, giữ độc lập tự chủ.</li>
      </ul>

      <h3>2. Phát triển Kinh tế thị trường định hướng XHCN</h3>
      <ul>
        <li>Nhiều thành phần kinh tế.</li>
        <li>Kinh tế nhà nước chủ đạo, tập thể là nền tảng.</li>
      </ul>

      <h3>3. Xây dựng Văn hóa và Con người</h3>
      <ul>
        <li>Văn hóa tiên tiến, bản sắc dân tộc.</li>
        <li>Giải quyết việc làm, an sinh xã hội, chăm sóc sức khỏe.</li>
      </ul>
    `
    },
    {
        id: "phan4",
        title: "Phần 4: Khái niệm và sự ra đời của Dân chủ (Theo Mác - Lênin)",
        image: "images/democracy.png",
        html: `
      <p>“Dân chủ” từ Hy Lạp cổ: Demos (nhân dân) + Kratos (cai trị) → Nhân dân làm chủ.</p>
      <ul>
        <li><strong>Mác - Lênin:</strong> Dân chủ là quyền lực của nhân dân.</li>
        <li>Là hình thái nhà nước của giai cấp cầm quyền.</li>
        <li>Là nguyên tắc tổ chức: tập trung dân chủ.</li>
      </ul>
    `
    },
    {
        id: "phan5",
        title: "Phần 5: Sự phát triển lịch sử của các chế độ dân chủ",
        image: "images/ho-chi-minh.png",
        html: `
      <ul>
        <li>Dân chủ nguyên thủy: họp toàn dân, bầu thủ lĩnh.</li>
        <li>Dân chủ chủ nô: chỉ dành cho chủ nô.</li>
        <li>Dân chủ tư sản: dân chủ của thiểu số tư bản.</li>
        <li>Dân chủ XHCN: quyền lực thuộc đại đa số nhân dân.</li>
      </ul>
      <p><strong>Cách mạng Tháng Mười 1917</strong> mở ra thời đại dân chủ XHCN.</p>
    `
    },
    {
        id: "phan6",
        title: "Phần 6: Quá trình ra đời và Bản chất chính trị của Dân chủ XHCN",
        image: "images/economy.png",
        html: `
      <h3>1. Quá trình ra đời</h3>
      <ul>
        <li>Sau Cách mạng Tháng Mười Nga 1917 do Lênin lãnh đạo.</li>
        <li>Thiết lập Nhà nước Xô viết đầu tiên.</li>
        <li>Lan tỏa đến Việt Nam từ 1930.</li>
      </ul>

      <h3>2. Bản chất chính trị</h3>
      <ul>
        <li>Chủ thể: nhân dân lao động.</li>
        <li>Đảng Cộng sản lãnh đạo.</li>
        <li>Mục tiêu: giải phóng con người, xóa bóc lột.</li>
        <li>Hình thức: dân chủ trực tiếp + gián tiếp.</li>
      </ul>
    `
    },
    {
        id: "phan7",
        title: "Phần 7: Bản chất kinh tế và văn hóa - tư tưởng của Dân chủ XHCN",
        image: "images/culture.png",
        html: `
      <h3>1. Bản chất kinh tế</h3>
      <ul>
        <li>Công hữu tư liệu sản xuất chủ yếu.</li>
        <li>Mục đích: thỏa mãn nhu cầu nhân dân, xóa bóc lột.</li>
        <li>Phân phối theo lao động.</li>
      </ul>

      <h3>2. Bản chất văn hóa - tư tưởng</h3>
      <ul>
        <li>Nền tảng: Chủ nghĩa Mác - Lênin.</li>
        <li>Văn hóa: tiên tiến, đậm đà bản sắc dân tộc.</li>
        <li>Kế thừa tinh hoa nhân loại.</li>
      </ul>
    `
    }
];

//
// ===== QUIZ =====
const quizDataByPart = {
    phan1: [
        { q: "Con đường quá độ lên CNXH ở Việt Nam là sự lựa chọn:", options: ["Duy nhất, đúng đắn, khoa học", "Tạm thời", "Thử nghiệm", "Bắt buộc"], correct: 0 },
        { q: "'Bỏ qua TBCN' có nghĩa là:", options: ["Bỏ qua thành tựu TBCN", "Bỏ qua vị trí thống trị của quan hệ sản xuất TBCN", "Không học hỏi TBCN", "Từ chối công nghệ TBCN"], correct: 1 },
        { q: "Thuận lợi lớn nhất khi VN quá độ lên CNXH là:", options: ["Tài nguyên phong phú", "Thời đại quá độ từ TBCN lên CNXH", "Dân số đông", "Diện tích lãnh thổ rộng"], correct: 1 },
        { q: "Đại hội XIII xác định đến năm 2045 VN sẽ:", options: ["Trở thành nước công nghiệp", "Trở thành nước phát triển, thu nhập cao", "Hoàn thành CNH-HĐH", "Xóa đói giảm nghèo"], correct: 1 }
    ],
    phan2: [
        { q: "Có bao nhiêu đặc trưng cơ bản của CNXH Việt Nam?", options: ["5 đặc trưng", "6 đặc trưng", "7 đặc trưng", "8 đặc trưng"], correct: 3 },
        { q: "Đặc trưng kinh tế của CNXH Việt Nam là:", options: ["Kinh tế tư bản", "Kinh tế nhà nước chủ đạo", "Kinh tế tự do", "Kinh tế phong kiến"], correct: 1 },
        { q: "Đặc trưng văn hóa CNXH VN là:", options: ["Văn hóa phương Tây", "Văn hóa tiên tiến, đậm đà bản sắc dân tộc", "Văn hóa truyền thống", "Văn hóa toàn cầu"], correct: 1 },
        { q: "Nhà nước pháp quyền XHCN do ai lãnh đạo?", options: ["Quốc hội", "Chính phủ", "Đảng Cộng sản", "Nhân dân"], correct: 2 }
    ],
    phan3: [
        { q: "Ba phương hướng cơ bản xây dựng CNXH không bao gồm:", options: ["CNH-HĐH", "Kinh tế thị trường định hướng XHCN", "Phát triển quân sự", "Xây dựng văn hóa - con người"], correct: 2 },
        { q: "Trong kinh tế thị trường định hướng XHCN, thành phần nào chủ đạo?", options: ["Kinh tế tư nhân", "Kinh tế nhà nước", "Kinh tế tập thể", "Kinh tế FDI"], correct: 1 },
        { q: "Nông nghiệp cần ứng dụng:", options: ["Phương pháp truyền thống", "Công nghệ cao, nông thôn mới", "Canh tác thủ công", "Kỹ thuật cổ điển"], correct: 1 }
    ],
    phan4: [
        { q: "Từ 'Dân chủ' xuất phát từ ngôn ngữ nào?", options: ["La Tinh", "Hy Lạp cổ đại", "Tiếng Anh", "Tiếng Pháp"], correct: 1 },
        { q: "Demos + Kratos có nghĩa là:", options: ["Vua chúa trị", "Nhân dân làm chủ", "Quý tộc cai trị", "Pháp luật thống trị"], correct: 1 },
        { q: "Theo Mác-Lênin, dân chủ là:", options: ["Chế độ bầu cử", "Quyền lực của nhân dân", "Tự do ngôn luận", "Đa nguyên chính trị"], correct: 1 }
    ],
    phan5: [
        { q: "Dân chủ tư sản là dân chủ của:", options: ["Đa số nhân dân", "Thiểu số tư bản", "Giai cấp công nhân", "Nông dân"], correct: 1 },
        { q: "Sự kiện nào mở ra thời đại dân chủ XHCN?", options: ["Cách mạng Pháp 1789", "Cách mạng Tháng Mười 1917", "Chiến tranh thế giới thứ 2", "Cách mạng Tháng Tám 1945"], correct: 1 },
        { q: "Dân chủ nguyên thủy có đặc điểm:", options: ["Bầu quốc hội", "Họp toàn dân, bầu thủ lĩnh", "Do vua cai trị", "Chuyên chế"], correct: 1 }
    ],
    phan6: [
        { q: "Dân chủ XHCN ra đời sau sự kiện nào?", options: ["Cách mạng Tháng Mười Nga 1917", "Cách mạng công nghiệp", "Chiến tranh thế giới 1", "Độc lập Mỹ"], correct: 0 },
        { q: "Ai lãnh đạo Cách mạng Tháng Mười?", options: ["Mác", "Ănghen", "Lênin", "Stálin"], correct: 2 },
        { q: "Chủ thể của dân chủ XHCN là:", options: ["Trí thức", "Nhân dân lao động", "Tư sản", "Quân đội"], correct: 1 },
        { q: "Mục tiêu của dân chủ XHCN là:", options: ["Tăng GDP", "Giải phóng con người, xóa bóc lột", "Phát triển thương mại", "Mở rộng lãnh thổ"], correct: 1 }
    ],
    phan7: [
        { q: "Bản chất kinh tế của dân chủ XHCN là:", options: ["Tư hữu tư liệu sản xuất", "Công hữu tư liệu sản xuất chủ yếu", "Kinh tế thị trường tự do", "Kinh tế kế hoạch tập trung"], correct: 1 },
        { q: "Nguyên tắc phân phối trong CNXH là:", options: ["Theo tài sản", "Theo giai cấp", "Theo lao động", "According to đẳng cấp"], correct: 2 },
        { q: "Nền tảng tư tưởng của dân chủ XHCN là:", options: ["Chủ nghĩa tự do", "Chủ nghĩa Mác-Lênin", "Nho giáo", "Chủ nghĩa thực dụng"], correct: 1 },
        { q: "Văn hóa XHCN VN cần:", options: ["Bắt chước phương Tây", "Tiên tiến, đậm đà bản sắc dân tộc", "Bảo thủ truyền thống", "Từ bỏ văn hóa cũ"], correct: 1 }
    ]
};

// ===== FLASHCARDS THEO PHẦN =====
// ===== FLASHCARDS THEO PHẦN =====
const flashcardsByPart = {
    phan1: [
        { front: "Bỏ qua TBCN nghĩa là gì?", back: "Bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất TBCN." },
        { front: "Tính tất yếu của quá độ lên CNXH?", back: "Là sự lựa chọn duy nhất, đúng đắn, khoa học, phù hợp quy luật lịch sử và nguyện vọng nhân dân." },
        { front: "Mục tiêu đến năm 2045?", back: "Việt Nam trở thành nước phát triển, thu nhập cao." },
        { front: "Khó khăn lớn nhất khi VN quá độ lên CNXH?", back: "Hậu quả chiến tranh kéo dài, tàn dư thực dân phong kiến, phát triển kinh tế kém, xuất phát điểm thấp." },
        { front: "Thuận lợi lớn nhất khi VN quá độ lên CNXH?", back: "Thời đại quá độ từ TBCN lên CNXH, thành tựu khoa học-kỹ thuật, sự lãnh đạo của Đảng." },
        { front: "Cương lĩnh 1930 đã xác định điều gì?", back: "Xác định con đường quá độ lên CNXH bỏ qua chế độ TBCN." }
    ],
    phan2: [
        { front: "8 đặc trưng CNXH?", back: "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh; Do nhân dân làm chủ; Kinh tế phát triển cao; Văn hóa tiên tiến; Con người ấm no; Các dân tộc bình đẳng; Nhà nước pháp quyền XHCN; Hợp tác quốc tế." },
        { front: "Đặc trưng kinh tế CNXH Việt Nam?", back: "Kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại, quan hệ sản xuất tiến bộ." },
        { front: "Đặc trưng chính trị CNXH Việt Nam?", back: "Do nhân dân làm chủ, Nhà nước pháp quyền XHCN do Đảng lãnh đạo." },
        { front: "Đặc trưng văn hóa CNXH Việt Nam?", back: "Văn hóa tiên tiến, đậm đà bản sắc dân tộc." },
        { front: "Mục tiêu tổng quát của CNXH Việt Nam?", back: "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh." }
    ],
    phan3: [
        { front: "3 phương hướng xây dựng CNXH?", back: "CNH-HĐH, Kinh tế thị trường XHCN, Văn hóa - Con người." },
        { front: "Nội dung của CNH-HĐH?", back: "Ưu tiên công nghiệp nặng, công nghệ cao; Nông nghiệp ứng dụng công nghệ; Hội nhập quốc tế, giữ độc lập tự chủ." },
        { front: "Kinh tế thị trường định hướng XHCN có mấy thành phần?", back: "Nhiều thành phần kinh tế, trong đó kinh tế nhà nước giữ vai trò chủ đạo." },
        { front: "Vai trò của kinh tế nhà nước?", back: "Giữ vai trò chủ đạo trong nền kinh tế." },
        { front: "Mục tiêu xây dựng văn hóa - con người?", back: "Văn hóa tiên tiến, bản sắc dân tộc; Giải quyết việc làm, an sinh xã hội, chăm sóc sức khỏe." }
    ],
    phan4: [
        { front: "Nguồn gốc từ 'Dân chủ'?", back: "Từ Hy Lạp cổ: Demos (nhân dân) + Kratos (cai trị) = Nhân dân làm chủ." },
        { front: "Theo Mác-Lênin, dân chủ là gì?", back: "Dân chủ là quyền lực của nhân dân." },
        { front: "Dân chủ với tư cách là hình thái nhà nước?", back: "Là hình thái nhà nước của giai cấp cầm quyền." },
        { front: "Dân chủ với tư cách là nguyên tắc tổ chức?", back: "Là nguyên tắc tập trung dân chủ." },
        { front: "Bản chất của dân chủ theo quan điểm Mác-Lênin?", back: "Dân chủ mang tính giai cấp, phục vụ lợi ích của giai cấp thống trị." }
    ],
    phan5: [
        { front: "Dân chủ XHCN là gì?", back: "Quyền lực thuộc đại đa số nhân dân lao động." },
        { front: "Dân chủ XHCN khác dân chủ tư sản?", back: "Dân chủ XHCN: của đa số nhân dân lao động. Dân chủ tư sản: của thiểu số tư bản." },
        { front: "Cách mạng Tháng Mười 1917?", back: "Mở ra thời đại dân chủ XHCN, do Lênin lãnh đạo." },
        { front: "Dân chủ nguyên thủy có đặc điểm gì?", back: "Họp toàn dân, bầu thủ lĩnh." },
        { front: "Dân chủ chủ nô là gì?", back: "Dân chủ chỉ dành cho chủ nô, nô lệ không có quyền." },
        { front: "Dân chủ tư sản có hạn chế gì?", back: "Chỉ là dân chủ hình thức, thực chất phục vụ lợi ích giai cấp tư sản." }
    ],
    phan6: [
        { front: "Bản chất chính trị dân chủ XHCN?", back: "Chủ thể là nhân dân lao động, do Đảng Cộng sản lãnh đạo, mục tiêu giải phóng con người." },
        { front: "Dân chủ XHCN ra đời sau sự kiện nào?", back: "Sau Cách mạng Tháng Mười Nga 1917." },
        { front: "Ai lãnh đạo Cách mạng Tháng Mười?", back: "Lênin." },
        { front: "Chủ thể của dân chủ XHCN là ai?", back: "Nhân dân lao động." },
        { front: "Hình thức thực hiện dân chủ XHCN?", back: "Dân chủ trực tiếp và dân chủ gián tiếp." },
        { front: "Vai trò của Đảng trong dân chủ XHCN?", back: "Đảng Cộng sản giữ vai trò lãnh đạo." },
        { front: "Mục tiêu cơ bản của dân chủ XHCN?", back: "Giải phóng con người, xóa bỏ chế độ người bóc lột người." }
    ],
    phan7: [
        { front: "Bản chất kinh tế dân chủ XHCN?", back: "Công hữu tư liệu sản xuất chủ yếu, phân phối theo lao động." },
        { front: "Nền tảng tư tưởng dân chủ XHCN?", back: "Chủ nghĩa Mác-Lênin." },
        { front: "Đặc điểm văn hóa XHCN Việt Nam?", back: "Tiên tiến, đậm đà bản sắc dân tộc, kế thừa tinh hoa nhân loại." },
        { front: "Nguyên tắc phân phối trong CNXH?", back: "Phân phối theo lao động." },
        { front: "Mục đích của nền kinh tế XHCN?", back: "Thỏa mãn nhu cầu vật chất và tinh thần ngày càng cao của nhân dân." },
        { front: "Tính chất của quan hệ sản xuất XHCN?", back: "Dựa trên chế độ công hữu về tư liệu sản xuất chủ yếu." },
        { front: "Vai trò của văn hóa trong XHCN?", back: "Văn hóa là nền tảng tinh thần của xã hội, động lực phát triển." },
        { front: "Thái độ với di sản văn hóa nhân loại?", back: "Kế thừa có chọn lọc những tinh hoa văn hóa nhân loại." }
    ]
};

// ===== STATE =====
let state = {
    currentView: 'content',
    isReading: false,
    quizIndex: 0,
    flashcardIndex: 0,
    currentSectionId: null,
    selectedPart: null, // phần được chọn cho quiz/flashcard
    currentQuizSet: [], // bộ câu hỏi hiện tại
    currentFlashcardSet: [] // bộ flashcard hiện tại
};

// ====== CHẠY SAU KHI TẢI ======
document.addEventListener('DOMContentLoaded', init);

function init() {
    renderTOC();
    renderContent();
    setupListeners();
    renderPartSelector(); // Thêm chọn phần
    renderQuiz();
    renderFlashcard();
}

// === RENDER PART SELECTOR ===
function renderPartSelector() {
    // Tạo selector cho quiz
    const quizView = document.getElementById('quizView');
    const flashcardView = document.getElementById('flashcardView');

    const partSelectorHTML = `
        <div class="part-selector">
            <select class="part-select" id="quizPartSelect">
                <option value="">-- Chọn phần để luyện tập --</option>
                ${contentData.map(part => `<option value="${part.id}">${part.title}</option>`).join('')}
            </select>
            <button id="startQuiz" class="btn tts-btn">Bắt đầu làm bài</button>
        </div>
        <div id="quizContainer" class="hidden"></div>
    `;

    const flashcardSelectorHTML = `
        <div class="part-selector">
            <select class="part-select" id="flashcardPartSelect">
                <option value="">-- Chọn phần để học flashcard --</option>
                ${contentData.map(part => `<option value="${part.id}">${part.title}</option>`).join('')}
            </select>
            <button id="startFlashcard" class="btn tts-btn">Bắt đầu học</button>
        </div>
        <div id="flashcardContainer" class="hidden"></div>
    `;

    quizView.innerHTML = partSelectorHTML;
    flashcardView.innerHTML = flashcardSelectorHTML;

    // Event listeners
    document.getElementById('startQuiz').onclick = () => {
        const partId = document.getElementById('quizPartSelect').value;
        if (partId) {
            state.selectedPart = partId;
            state.currentQuizSet = quizDataByPart[partId] || [];
            state.quizIndex = 0;
            renderQuizQuestions();
        }
    };

    document.getElementById('startFlashcard').onclick = () => {
        const partId = document.getElementById('flashcardPartSelect').value;
        if (partId) {
            state.selectedPart = partId;
            state.currentFlashcardSet = flashcardsByPart[partId] || [];
            state.flashcardIndex = 0;
            renderFlashcardContent();
        }
    };
}

// === RENDER QUIZ QUESTIONS ===
function renderQuizQuestions() {
    if (state.currentQuizSet.length === 0) {
        document.getElementById('quizContainer').innerHTML = '<p>Chưa có câu hỏi cho phần này.</p>';
        return;
    }

    const q = state.currentQuizSet[state.quizIndex];
    const partTitle = contentData.find(p => p.id === state.selectedPart)?.title || 'Unknown Part';

    const quizHTML = `
        <div class="quiz-container fade-in">
            <h3>Câu ${state.quizIndex + 1}/${state.currentQuizSet.length} - ${partTitle}</h3>
            <p>${q.q}</p>
            <ul class="options">
                ${q.options.map((o,i) => `<li class="option" data-i="${i}">${o}</li>`).join('')}
            </ul>
            <div class="quiz-controls">
                <button id="prevQ" ${state.quizIndex === 0 ? 'disabled' : ''}>⬅️ Câu trước</button>
                <button id="nextQ">${state.quizIndex === state.currentQuizSet.length - 1 ? 'Kết thúc' : 'Câu tiếp ➡️'}</button>
            </div>
        </div>
    `;

    document.getElementById('quizContainer').innerHTML = quizHTML;
    document.getElementById('quizContainer').classList.remove('hidden');

    // Event listeners
    document.querySelectorAll('.option').forEach(opt =>
        opt.onclick = () => checkAnswer(opt, q.correct)
    );

    document.getElementById('prevQ').onclick = () => {
        state.quizIndex = Math.max(0, state.quizIndex - 1);
        renderQuizQuestions();
    };

    document.getElementById('nextQ').onclick = () => {
        if (state.quizIndex < state.currentQuizSet.length - 1) {
            state.quizIndex++;
            renderQuizQuestions();
        } else {
            // Kết thúc quiz
            document.getElementById('quizContainer').innerHTML = `
                <div class="quiz-complete">
                    <h3>🎉 Hoàn thành bài quiz!</h3>
                    <p>Bạn đã hoàn thành ${state.currentQuizSet.length} câu hỏi của phần "${partTitle}"</p>
                    <button onclick="state.quizIndex = 0; renderQuizQuestions();">Làm lại</button>
                    <button onclick="location.reload();">Chọn phần khác</button>
                </div>
            `;
        }
    };
}

// === RENDER FLASHCARD CONTENT ===
function renderFlashcardContent() {
    if (state.currentFlashcardSet.length === 0) {
        document.getElementById('flashcardContainer').innerHTML = '<p>Chưa có flashcard cho phần này.</p>';
        return;
    }

    const card = state.currentFlashcardSet[state.flashcardIndex];
    const partTitle = contentData.find(p => p.id === state.selectedPart)?.title || 'Unknown Part';

    const flashcardHTML = `
        <div class="flashcard-container fade-in">
            <h3>Flashcard ${state.flashcardIndex + 1}/${state.currentFlashcardSet.length} - ${partTitle}</h3>
            <div class="flashcard" id="flash">
                <div class="flashcard-inner">
                    <div class="card-face front">${card.front}</div>
                    <div class="card-face back">${card.back}</div>
                </div>
            </div>
            <div class="flash-controls">
                <button id="prevF" ${state.flashcardIndex === 0 ? 'disabled' : ''}>⬅️ Trước</button>
                <button id="flipF">🔄 Lật thẻ</button>
                <button id="nextF">${state.flashcardIndex === state.currentFlashcardSet.length - 1 ? 'Kết thúc' : 'Tiếp ➡️'}</button>
            </div>
        </div>
    `;

    document.getElementById('flashcardContainer').innerHTML = flashcardHTML;
    document.getElementById('flashcardContainer').classList.remove('hidden');

    const flash = document.getElementById('flash');
    flash.onclick = () => flash.classList.toggle('flipped');
    document.getElementById('flipF').onclick = () => flash.classList.toggle('flipped');

    document.getElementById('prevF').onclick = () => {
        state.flashcardIndex = Math.max(0, state.flashcardIndex - 1);
        renderFlashcardContent();
    };

    document.getElementById('nextF').onclick = () => {
        if (state.flashcardIndex < state.currentFlashcardSet.length - 1) {
            state.flashcardIndex++;
            renderFlashcardContent();
        } else {
            // Kết thúc flashcard
            document.getElementById('flashcardContainer').innerHTML = `
                <div class="flashcard-complete">
                    <h3>🎉 Hoàn thành flashcard!</h3>
                    <p>Bạn đã học ${state.currentFlashcardSet.length} thẻ của phần "${partTitle}"</p>
                    <button onclick="state.flashcardIndex = 0; renderFlashcardContent();">Học lại</button>
                    <button onclick="location.reload();">Chọn phần khác</button>
                </div>
            `;
        }
    };
}

// === CÁC HÀM KHÁC GIỮ NGUYÊN ===
function checkAnswer(opt, correct) {
    document.querySelectorAll('.option').forEach(o => o.style.pointerEvents = 'none');
    if (+opt.dataset.i === correct) {
        opt.style.background = '#c8f7c5';
        opt.style.borderColor = '#9ad39a';
    } else {
        opt.style.background = '#fbb';
        opt.style.borderColor = '#f59a9a';
        // Highlight đáp án đúng
        document.querySelectorAll('.option').forEach(o => {
            if (+o.dataset.i === correct) {
                o.style.background = '#c8f7c5';
                o.style.borderColor = '#9ad39a';
            }
        });
    }
}

// Các hàm renderQuiz và renderFlashcard cũ có thể xóa hoặc giữ làm backup
function renderQuiz() {
    // Giữ lại cho tương thích, nhưng sẽ không dùng nữa
    renderPartSelector();
}

function renderFlashcard() {
    // Giữ lại cho tương thích, nhưng sẽ không dùng nữa
    renderPartSelector();
}

// === TTS CẢI TIẾN (CÓ SEEK BAR + HIGHLIGHT + TUA NHƯ SPOTIFY) ===
let utterance = null, sentences = [], idx = 0, activeSection = null, seekBar = null, isUserSeeking = false;
let activeSectionId = null; // track id for UI sync

function speakSection(id) {
  // if speaking another section, cancel and start this one
  if ('speechSynthesis' in window) speechSynthesis.cancel();

  const section = document.getElementById(id);
  if (!section) return;
  activeSection = section;
  activeSectionId = id;

  // remove old seek bars
  section.querySelectorAll('.seek-bar').forEach(e => e.remove());

  // hide all per-section pause buttons, then show this one's pause
  hideAllPauseButtons();
  showPauseButtonFor(id, true); // show as "pause" while starting

  // create seek bar
  const bar = document.createElement('div');
  bar.className = 'seek-bar';
  bar.innerHTML = `
    <input type="range" min="0" max="100" value="0" class="seek-range"/>
  `;
  section.prepend(bar);
  seekBar = bar.querySelector('.seek-range');

  // extract text and split into sentences
  const text = section.innerText.trim();
  sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
  idx = 0;

  // attach seeking handlers
  seekBar.addEventListener('input', () => { isUserSeeking = true; });
  seekBar.addEventListener('change', () => {
    const newIdx = Math.floor((seekBar.value / 100) * sentences.length);
    idx = Math.min(newIdx, sentences.length - 1);
    isUserSeeking = false;
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    readNextSentence(section);
  });

  updateFloatingPlayPause(true);
  readNextSentence(section);
}

function readNextSentence(section) {
  if( idx >= sentences.length) {
    clearHighlight(section);
    if (seekBar) seekBar.value = 100;
    // finished reading: hide per-section pause button
    hideAllPauseButtons();
    activeSection = null;
    activeSectionId = null;
    updateFloatingPlayPause(false);
    return;
  }

  const sentence = sentences[idx].trim();
  clearHighlight(section);
  highlightSentence(section, sentence);

  const percent = ((idx + 1) / sentences.length) * 100;
  if (!isUserSeeking && seekBar) seekBar.value = percent;

  if (!('speechSynthesis' in window)) {
    // fallback: advance without voice
    idx++;
    setTimeout(() => readNextSentence(section), 500);
    return;
  }

  utterance = new SpeechSynthesisUtterance(sentence);
  utterance.lang = 'vi-VN';
  utterance.rate = 1.0;
  utterance.onend = () => {
    idx++;
    readNextSentence(section);
  };
  speechSynthesis.speak(utterance);
}

// per-section pause helpers
function togglePauseForSection(id) {
    // if not the active section, start it
    if (activeSectionId !== id) {
        speakSection(id);
        return;
    }
    if (!('speechSynthesis' in window)) return;
    const btn = document.querySelector(`.pause-btn[data-id="${id}"]`);
    if (speechSynthesis.speaking && !speechSynthesis.paused) {
        speechSynthesis.pause();
        if (btn) btn.innerText = '▶️ Tiếp tục';
        updateFloatingPlayPause(false);
    } else if (speechSynthesis.paused) {
        speechSynthesis.resume();
        if (btn) btn.innerText = '⏸️ Tạm dừng';
        updateFloatingPlayPause(true);
    }
}

function showPauseButtonFor(id, asPlaying = false) {
    hideAllPauseButtons();
    const btn = document.querySelector(`.pause-btn[data-id="${id}"]`);
    if (btn) {
        btn.classList.remove('hidden');
        btn.innerText = asPlaying ? '⏸️ Tạm dừng' : '▶️ Tiếp tục';
    }
}

function hideAllPauseButtons(){
    document.querySelectorAll('.pause-btn').forEach(b => b.classList.add('hidden'));
}

// highlight the exact sentence inside a section (simple first-occurrence replace)
function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
function highlightSentence(section, sentence){
    if(!section || !sentence) return;
    // try to replace first exact occurrence in innerHTML (best-effort)
    try {
        const html = section.innerHTML;
        const esc = escapeRegExp(sentence);
        const re = new RegExp(esc);
        if(re.test(html)){
            section.innerHTML = html.replace(re, `<span class="highlight-reading">${sentence}</span>`);
        } else {
            // fallback: wrap first matching word fragment
            const firstWord = sentence.split(/\s+/)[0];
            const re2 = new RegExp(escapeRegExp(firstWord));
            section.innerHTML = html.replace(re2, `<span class="highlight-reading">${firstWord}</span>`);
        }
    } catch (e) {
        // silent fail-safe
    }
}

function clearHighlight(section){
    if(!section) return;
    section.querySelectorAll('.highlight-reading').forEach(sp => {
        const txt = document.createTextNode(sp.textContent);
        sp.parentNode.replaceChild(txt, sp);
    });
}

// update floating play/pause button state and stop button visibility
function updateFloatingPlayPause(isPlaying){
    const fp = document.getElementById('playPauseBtn');
    const stop = document.getElementById('stopBtn');
    if (!fp) return;
    fp.innerText = isPlaying ? '⏸️' : '▶️';
    if(stop) stop.classList.toggle('hidden', !isPlaying);
}

// wire floating controls (play/pause/stop/prev/next)
function setupListeners(){
    const playPause = document.getElementById('playPauseBtn');
    const stopBtn = document.getElementById('stopBtn');
    const prev = document.getElementById('prevSection');
    const next = document.getElementById('nextSection');

    if(playPause) playPause.onclick = ()=>{
        if (!('speechSynthesis' in window)) return;
        // if nothing active, start current section or first
        if (!speechSynthesis.speaking && !speechSynthesis.paused) {
            const startId = state.currentSectionId || contentData[0].id;
            speakSection(startId);
            return;
        }
        if (speechSynthesis.paused) {
            speechSynthesis.resume();
            updateFloatingPlayPause(true);
            if (activeSectionId) {
                const pb = document.querySelector(`.pause-btn[data-id="${activeSectionId}"]`);
                if (pb) pb.innerText = '⏸️ Tạm dừng';
            }
        } else {
            speechSynthesis.pause();
            updateFloatingPlayPause(false);
            if (activeSectionId) {
                const pb = document.querySelector(`.pause-btn[data-id="${activeSectionId}"]`);
                if (pb) pb.innerText = '▶️ Tiếp tục';
            }
        }
    };

    if(stopBtn) stopBtn.onclick = ()=>{
        if('speechSynthesis' in window) speechSynthesis.cancel();
        hideAllPauseButtons();
        activeSectionId = null;
        state.currentSectionId = null;
        updateFloatingPlayPause(false);
    };

    if(prev) prev.onclick = ()=> navigate(-1);
    if(next) next.onclick = ()=> navigate(1);
}

// navigate between sections by index and start reading the target
function navigate(dir){
    const ids = contentData.map(s => s.id);
    let cur = activeSectionId || state.currentSectionId || ids[0];
    let i = ids.indexOf(cur);
    if(i === -1) i = 0;
    const ni = (i + dir + ids.length) % ids.length;
    const nextId = ids[ni];
    scrollToSection(nextId);
    speakSection(nextId);
}

// smooth scroll and update TOC active state
function scrollToSection(id){
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    state.currentSectionId = id;
    document.querySelectorAll('.toc-link').forEach(l=> l.classList.toggle('active', l.dataset.id === id));
}

// === TOC & CONTENT ===
function renderTOC() {
    const toc = document.getElementById('tocList');
    if(!toc) return;
    toc.innerHTML = contentData.map(s => `<li><a class="toc-link" href="#${s.id}" data-id="${s.id}">${s.title}</a></li>`).join('');
    toc.querySelectorAll('.toc-link').forEach(link => {
        link.onclick = e => {
            e.preventDefault();
            scrollToSection(link.dataset.id);
            speakSection(link.dataset.id);
        };
    });
}

function renderContent() {
    const view = document.getElementById('contentView');
    if(!view) return;
    view.innerHTML = contentData.map(s => `
    <article id="${s.id}" class="section fade-in">
      <h2>${s.title}</h2>
      ${s.image ? `<img src="${s.image}" class="section-image" alt="">` : ''}
      ${s.html}
      <div style="margin-top:10px;">
        <button class="read-btn" data-id="${s.id}">▶️ Đọc phần này</button>
        <button class="pause-btn hidden" data-id="${s.id}">⏸️ Tạm dừng</button>
      </div>
    </article>
  `).join('');
    view.querySelectorAll('.read-btn').forEach(btn => btn.onclick = () => {
        state.currentSectionId = btn.dataset.id;
        speakSection(btn.dataset.id);
    });
    view.querySelectorAll('.pause-btn').forEach(btn => btn.onclick = () => {
        const id = btn.dataset.id;
        togglePauseForSection(id);
    });
}

// === SEARCH ===
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.oninput = e => {
        const term = e.target.value.toLowerCase();
        document.querySelectorAll('.section').forEach(sec => {
            sec.style.display = sec.textContent.toLowerCase().includes(term) ? 'block' : 'none';
        });
    };
}

// === VIEW SWITCH ===
document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.onclick = () => {
        const view = tab.dataset.view;
        document.querySelectorAll('.nav-tab').forEach(t => t.classList.toggle('active', t === tab));
        document.querySelectorAll('#contentView,#quizView,#flashcardView').forEach(v => v.classList.add('hidden'));
        const target = document.getElementById(view + 'View');
        if (target) target.classList.remove('hidden');
        state.currentView = view;

        // Reset to part selector when switching to quiz/flashcard
        if (view === 'quiz' || view === 'flashcard') {
            renderPartSelector();
        }
    };
});

