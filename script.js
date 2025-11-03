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

// ===== QUIZ =====
const quizData = [
    { q: "Con đường quá độ lên CNXH ở Việt Nam là sự lựa chọn:", options: ["Duy nhất, đúng đắn, khoa học", "Tạm thời", "Thử nghiệm", "Bắt buộc"], correct: 0 },
    { q: "Đặc trưng kinh tế của CNXH Việt Nam là:", options: ["Kinh tế tư bản", "Kinh tế nhà nước chủ đạo", "Kinh tế tự do", "Kinh tế phong kiến"], correct: 1 },
    { q: "Dân chủ XHCN thực hiện quyền lực cho:", options: ["Thiểu số", "Đại đa số nhân dân lao động", "Giai cấp tư sản", "Quý tộc"], correct: 1 },
    { q: "'Bỏ qua TBCN' có nghĩa là:", options: ["Bỏ qua thành tựu TBCN", "Bỏ qua vị trí thống trị của quan hệ sản xuất TBCN", "Không học hỏi TBCN", "Từ chối công nghệ TBCN"], correct: 1 }
];

// ===== FLASHCARDS =====
const flashcards = [
    { front: "Bỏ qua TBCN nghĩa là gì?", back: "Bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất TBCN." },
    { front: "8 đặc trưng CNXH?", back: "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh..." },
    { front: "Dân chủ XHCN là gì?", back: "Quyền lực thuộc đại đa số nhân dân lao động." },
    { front: "3 phương hướng xây dựng CNXH?", back: "CNH-HĐH, Kinh tế thị trường XHCN, Văn hóa - Con người." }
];

// ===== STATE =====
let state = { currentView: 'content', isReading: false, quizIndex: 0, flashcardIndex: 0, currentSectionId: null };

// ====== CHẠY SAU KHI TẢI ======
document.addEventListener('DOMContentLoaded', init);

function init() {
    renderTOC();
    renderContent();
    setupListeners();
    renderQuiz();
    renderFlashcard();
}

// === TOC & CONTENT ===
function renderTOC() {
    const toc = document.getElementById('tocList');
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
    view.querySelectorAll('.read-btn').forEach(btn => btn.onclick = () => speakSection(btn.dataset.id));
    view.querySelectorAll('.pause-btn').forEach(btn => btn.onclick = (e) => {
        const id = btn.dataset.id;
        togglePauseForSection(id);
    });
}

// === SEARCH ===
document.getElementById('searchInput').oninput = e => {
    const term = e.target.value.toLowerCase();
    document.querySelectorAll('.section').forEach(sec => {
        sec.style.display = sec.textContent.toLowerCase().includes(term) ? 'block' : 'none';
    });
};

// === VIEW SWITCH ===
document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.onclick = () => {
        const view = tab.dataset.view;
        document.querySelectorAll('.nav-tab').forEach(t => t.classList.toggle('active', t === tab));
        document.querySelectorAll('#contentView,#quizView,#flashcardView').forEach(v => v.classList.add('hidden'));
        document.getElementById(view + 'View').classList.remove('hidden');
        state.currentView = view;
    };
});

// === QUIZ ===
function renderQuiz() {
    const qv = document.getElementById('quizView');
    const q = quizData[state.quizIndex];
    qv.innerHTML = `
    <div class="quiz-container fade-in">
      <h3>Câu ${state.quizIndex + 1}/${quizData.length}</h3>
      <p>${q.q}</p>
      <ul class="options">
        ${q.options.map((o,i)=>`<li class="option" data-i="${i}">${o}</li>`).join('')}
      </ul>
      <button id="nextQ">Tiếp ➡️</button>
    </div>`;
    qv.querySelectorAll('.option').forEach(opt=>opt.onclick=()=>checkAnswer(opt,q.correct));
    document.getElementById('nextQ').onclick=()=>{state.quizIndex=(state.quizIndex+1)%quizData.length;renderQuiz();}
}
function checkAnswer(opt,correct){
    document.querySelectorAll('.option').forEach(o=>o.style.pointerEvents='none');
    if(+opt.dataset.i===correct) opt.style.background='#c8f7c5'; else opt.style.background='#fbb';
}

// === FLASHCARDS ===
function renderFlashcard() {
    const fv=document.getElementById('flashcardView');
    const card=flashcards[state.flashcardIndex];
    fv.innerHTML=`
    <div class="flashcard-container fade-in">
      <div class="flashcard" id="flash">
        <div class="flashcard-inner">
          <div class="card-face front">${card.front}</div>
          <div class="card-face back">${card.back}</div>
        </div>
      </div>
      <div class="flash-controls">
        <button id="prevF">⬅️</button>
        <button id="flipF">🔄</button>
        <button id="nextF">➡️</button>
      </div>
    </div>`;
    const flash=fv.querySelector('#flash');
    flash.onclick=()=>flash.classList.toggle('flipped');
    fv.querySelector('#flipF').onclick=()=>flash.classList.toggle('flipped');
    fv.querySelector('#prevF').onclick=()=>{state.flashcardIndex=(state.flashcardIndex-1+flashcards.length)%flashcards.length;renderFlashcard();};
    fv.querySelector('#nextF').onclick=()=>{state.flashcardIndex=(state.flashcardIndex+1)%flashcards.length;renderFlashcard();};
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
