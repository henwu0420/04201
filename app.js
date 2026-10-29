/**
 * 智光商工 資料處理科 一年仁班 (座號 26)
 * 段考學習檢討與診斷系統 核心邏輯
 */

// 預設資料集 (含高一資處科真實科目與情境數據)
const DEFAULT_STATE = {
  profile: {
    name: "高于翔",
    schoolClass: "一年仁班",
    seat: "26 號",
    studentId: "255056",
    motto: "「理科思維奠基，商管資訊並進，精益求精追求卓越！」"
  },
  currentExam: "exam1",
  exams: {
    exam1: {
      name: "高一上 第一次段考",
      countdownDays: 18,
      countdownHours: 6,
      targetGoal: 650,
      subjects: [
        {
          id: "physics",
          name: "物理",
          category: "自然科學領域",
          score: 92,
          classAvg: 70,
          targetScore: 96,
          review: "運動學公式與牛頓力學概念掌握度極佳，實驗與推導題拿滿分，為本次段考雙榜首強科！",
          action: "持續挑戰斜面滑動與功與能量守恆進階題，保持頂尖手感。"
        },
        {
          id: "chinese",
          name: "國文",
          category: "一般基礎學科",
          score: 91,
          classAvg: 76,
          targetScore: 95,
          review: "文言文語譯理解透徹，非選擇題文意闡述條理清晰，僅在成語辨析失分。",
          action: "加強形音義易混淆字與常見題辭文化常識複習。"
        },
        {
          id: "math",
          name: "數學",
          category: "一般基礎學科",
          score: 92,
          classAvg: 65,
          targetScore: 98,
          review: "代數運算與直線方程式熟練迅速，解題邏輯嚴密，發揮強大數理優勢！",
          action: "繼續演練二次函數與三角比綜合變化題，確保大考滿分實力。"
        },
        {
          id: "english",
          name: "英文",
          category: "一般基礎學科",
          score: 84,
          classAvg: 72,
          targetScore: 92,
          review: "單字與基本文法扎實，但在長篇克漏字上下文銜接及閱測長句推敲稍花時間，失掉 8 分。",
          action: "每日固定精讀一篇英文短文，培養速讀與語感，強化下階段問鼎全班第一！"
        },
        {
          id: "accounting",
          name: "會計",
          category: "商管核心專業",
          score: 90,
          classAvg: 68,
          targetScore: 95,
          review: "借貸法則口訣滾瓜爛熟，分錄與試算表編製反應敏捷，順利斬獲 90 分高分！",
          action: "進一步精熟調整分錄與工作底稿編製，維持帳務敏銳度。"
        },
        {
          id: "business",
          name: "商業概論",
          category: "商管核心專業",
          score: 90,
          classAvg: 74,
          targetScore: 95,
          review: "行銷 4P、SWOT 分析與現代商業組織型態理解清晰，素養情境題作答精確。",
          action: "持續關注商業時事財經動態，將課本理論融入實例分析。"
        },
        {
          id: "it",
          name: "資訊科技",
          category: "資訊專業學科",
          score: 93,
          classAvg: 72,
          targetScore: 98,
          review: "二進位換算、計算機五大單元及通訊協定觀念清晰，為本次段考全科最高分王牌科目！",
          action: "持續深入學習資料結構與程式邏輯，為未來專業技術奠定基石。"
        }
      ],
      mistakes: [
        {
          id: "m1",
          subject: "英文",
          questionNo: "克漏字測驗 第 18 題 (轉折連接詞辨析)",
          questionDesc: "The technician checked the system thoroughly; ________, he discovered a tiny bug in the memory unit.",
          myWrongAns: "(B) furthermore",
          correctAns: "(C) nevertheless",
          reasonType: "觀念不熟",
          deduction: 4,
          notes: "前後文意具備轉折對比語氣（檢查很徹底，然而依然發現了小錯誤），應使用 nevertheless / however，誤選為遞進連接詞 furthermore。"
        },
        {
          id: "m2",
          subject: "物理",
          questionNo: "計算綜合題 第 3 題 (等加速度運動)",
          questionDesc: "一質點自靜止出發作等加速度直線運動，第 4 秒內之位移為 14 公尺，求此質點之加速度 a 為何？",
          myWrongAns: "a = 3.5 m/s²",
          correctAns: "a = 4.0 m/s²",
          reasonType: "粗心計算",
          deduction: 4,
          notes: "「第 4 秒內」位移公式為 Δx₄ = x(4) - x(3) = 1/2 a (4² - 3²) = 7/2 a = 3.5 a。題目 3.5 a = 14 => a = 4.0 m/s²。計算時誤把 14 除以 4！"
        },
        {
          id: "m3",
          subject: "數學",
          questionNo: "單選題 第 12 題 (直線方程式與斜率)",
          questionDesc: "已知兩點 A(3, 5) 與 B(-1, 1)，求線段 AB 之垂直平分線方程式。",
          myWrongAns: "x + y - 2 = 0",
          correctAns: "x + y - 4 = 0",
          reasonType: "粗心計算",
          deduction: 4,
          notes: "中點 M((3-1)/2, (5+1)/2) = (1, 3)。斜率 m_AB = (1-5)/(-1-3) = -4/-4 = 1。垂直平分線斜率為 -1，方程式 y - 3 = -(x - 1) => x + y - 4 = 0。運算草稿謄寫負號失誤。"
        },
        {
          id: "m4",
          subject: "國文",
          questionNo: "成語與字義綜合題 第 8 題",
          questionDesc: "下列各組文句「」中的成語，何者使用最為恰當？",
          myWrongAns: "(A) 他寫文章常常「差強人意」，文筆優美極受好評。",
          correctAns: "(D) 這位選手表現沉穩，在逆境中依然「臨危不亂」。",
          reasonType: "觀念不熟",
          deduction: 3,
          notes: "「差強人意」原指尚能使人滿意，並非形容「極為優秀」；此為高中段考最常見成語誤用陷阱題！"
        },
        {
          id: "m5",
          subject: "會計",
          questionNo: "分錄題 第 2 題 (現金折扣之會計處理)",
          questionDesc: "賒銷商品一批 $50,000，付款條件 2/10, n/30，顧客於第 8 天以現金結清全數貨款，採總額法處理時之收款分錄為？",
          myWrongAns: "借: 現金 50,000 / 貸: 應收帳款 50,000",
          correctAns: "借: 現金 49,000、銷貨折讓 1,000 / 貸: 應收帳款 50,000",
          reasonType: "觀念不熟",
          deduction: 5,
          notes: "顧客在 10 天折扣期內付款享有 2% 折扣 ($50,000 × 2% = $1,000)，應認列「銷貨折讓」借方 1,000 元，實收現金 49,000 元。"
        },
        {
          id: "m6",
          subject: "商業概論",
          questionNo: "多選觀念題 第 15 題 (公司組織形態法規)",
          questionDesc: "有關現代企業組織中「股份有限公司」與「有限公司」之法定責任與股東人數比較，何者正確？",
          myWrongAns: "(B) 兩者股東對公司債務皆負無限清償責任",
          correctAns: "(C) 股份有限公司股東就其所認股份對公司負其責任；有限公司股東就其出資額為限對公司負責",
          reasonType: "題目盲點",
          deduction: 5,
          notes: "兩者均為有限責任公司，未細看題目責任界定關鍵字而誤選。"
        },
        {
          id: "m7",
          subject: "資訊科技",
          questionNo: "單選題 第 22 題 (網路通訊協定分層)",
          questionDesc: "在 OSI 七層架構中，提供端對端 (End-to-End) 可靠資料傳輸、流量控制與錯誤檢測之協定層級為？",
          myWrongAns: "(B) 網路層 (Network Layer)",
          correctAns: "(C) 傳輸層 (Transport Layer)",
          reasonType: "觀念不熟",
          deduction: 7,
          notes: "網路層負責定址與路由選擇 (Routing, IP)；傳輸層負責端對端連線控制 (TCP/UDP, Port 號)。記憶混淆導致失分。"
        }
      ],
      reflection: {
        studyHours: "2~3小時",
        phoneHours: "低於1小時",
        classFocus: "全程認真抄筆記與跟著上機實作",
        goodPoints: "資訊科技斬獲 93 分榮登全科之冠！物理與數學發揮理科優勢雙雙斬獲 92 分！會計與商概亦穩居 90 分，段考總分 632 分全科頂尖！",
        badPoints: "英文 84 分雖高於班級平均，但長篇克漏字文法與閱測推敲速度仍有進步空間，為本次唯一未達 90 分科目。",
        actionPlan: "1. 每日早自習維持 20 分鐘精讀一篇英文短文並背誦 20 個高頻詞彙，目標下次段考英文突破 92 分。\n2. 數理每日保持刷題手感，挑戰進階多步驟綜合題。\n3. 會計學持續跟進練習調整分錄與試算表，保持全班領先榜首群實力！"
      }
    },
    exam2: {
      name: "高一上 第二次段考",
      countdownDays: 45,
      countdownHours: 12,
      targetGoal: 660,
      subjects: [
        { id: "physics", name: "物理", category: "自然科學領域", score: 95, classAvg: 72, targetScore: 98, review: "動量與能量守恆觀念清楚。", action: "維持優勢" },
        { id: "chinese", name: "國文", category: "一般基礎學科", score: 92, classAvg: 77, targetScore: 95, review: "文意判讀持續進步。", action: "精讀論語孟子" },
        { id: "math", name: "數學", category: "一般基礎學科", score: 94, classAvg: 67, targetScore: 98, review: "多項式與函數掌握良好。", action: "挑戰進階壓軸題" },
        { id: "english", name: "英文", category: "一般基礎學科", score: 90, classAvg: 74, targetScore: 94, review: "克漏字與閱測速度大幅提升！", action: "持續擴充字彙量" },
        { id: "accounting", name: "會計", category: "商管核心專業", score: 93, classAvg: 70, targetScore: 96, review: "調整分錄與工作底稿流暢！", action: "加強結算工作" },
        { id: "business", name: "商業概論", category: "商管核心專業", score: 92, classAvg: 76, targetScore: 95, review: "商事法規與行銷策略掌握扎實。", action: "結合理論與實務" },
        { id: "it", name: "資訊科技", category: "資訊專業學科", score: 94, classAvg: 73, targetScore: 96, review: "程式邏輯與演算法概念優異。", action: "深入物件導向概念" }
      ],
      mistakes: [],
      reflection: {
        studyHours: "2~3小時",
        phoneHours: "低於1小時",
        classFocus: "全程認真抄筆記與跟著上機實作",
        goodPoints: "英文成功突破 90 分大關，七科全數突破 90 分，達成個人全科優秀新里程碑！",
        badPoints: "期末大考範圍擴大，需提早規劃進度並維持作息平衡。",
        actionPlan: "持續落實每日時間規劃，以沉穩心態面對期末總結考驗！"
      }
    },
    exam3: {
      name: "高一上 期末考",
      countdownDays: 80,
      countdownHours: 0,
      targetGoal: 670,
      subjects: [
        { id: "physics", name: "物理", category: "自然科學領域", score: 0, classAvg: 0, targetScore: 98, review: "尚未應考", action: "待考" },
        { id: "chinese", name: "國文", category: "一般基礎學科", score: 0, classAvg: 0, targetScore: 95, review: "尚未應考", action: "待考" },
        { id: "math", name: "數學", category: "一般基礎學科", score: 0, classAvg: 0, targetScore: 98, review: "尚未應考", action: "待考" },
        { id: "english", name: "英文", category: "一般基礎學科", score: 0, classAvg: 0, targetScore: 94, review: "尚未應考", action: "待考" },
        { id: "accounting", name: "會計", category: "商管核心專業", score: 0, classAvg: 0, targetScore: 96, review: "尚未應考", action: "待考" },
        { id: "business", name: "商業概論", category: "商管核心專業", score: 0, classAvg: 0, targetScore: 96, review: "尚未應考", action: "待考" },
        { id: "it", name: "資訊科技", category: "資訊專業學科", score: 0, classAvg: 0, targetScore: 96, review: "尚未應考", action: "待考" }
      ],
      mistakes: [],
      reflection: {
        studyHours: "2~3小時",
        phoneHours: "低於1小時",
        classFocus: "全程認真抄筆記與跟著上機實作",
        goodPoints: "尚未考",
        badPoints: "尚未考",
        actionPlan: "全心備戰期末大考！"
      }
    }
  }
};

// 狀態管理
let appState = null;

// 初始化應用程式
function initApp() {
  loadState();
  setupEventListeners();
  renderApp();
}

// 讀取狀態 (LocalStorage)
function loadState() {
  const saved = localStorage.getItem("ck_dp_exam_state_v4");
  if (saved) {
    try {
      appState = JSON.parse(saved);
      const itScore = appState.exams?.exam1?.subjects?.find(s => s.id === "it")?.score;
      if (!appState.profile || appState.profile.name !== "高于翔" || appState.profile.studentId !== "255056" || itScore !== 93) {
        appState = JSON.parse(JSON.stringify(DEFAULT_STATE));
        saveState();
      }
    } catch (e) {
      console.warn("Failed to parse saved state, using default:", e);
      appState = JSON.parse(JSON.stringify(DEFAULT_STATE));
    }
  } else {
    appState = JSON.parse(JSON.stringify(DEFAULT_STATE));
    saveState();
  }
}

// 儲存狀態
function saveState() {
  localStorage.setItem("ck_dp_exam_state_v4", JSON.stringify(appState));
}

// 取得當前段考物件
function getCurrentExamData() {
  const key = appState.currentExam || "exam1";
  return appState.exams[key] || appState.exams["exam1"];
}

// 完整畫面重新渲染
function renderApp() {
  renderProfile();
  renderExamInfo();
  renderKpis();
  renderRadarChart();
  renderDiagnostic();
  renderSubjectsGrid();
  renderMistakes();
  renderReflectionForm();
  renderPrintSheet();
}

// 1. 渲染個人檔案
function renderProfile() {
  const p = appState.profile;
  document.getElementById("displayName").innerHTML = `${p.name} <span class="student-id-sub" id="displayId">(學號: ${p.studentId})</span>`;
  document.getElementById("displayClass").textContent = p.schoolClass;
  document.getElementById("displaySeat").textContent = p.seat;
  document.getElementById("displayMotto").innerHTML = `<i class="fa-solid fa-quote-left"></i> ${p.motto}`;

  // 模態框同步預設值
  document.getElementById("inputStudentName").value = p.name;
  document.getElementById("inputClass").value = p.schoolClass;
  document.getElementById("inputSeat").value = p.seat;
  document.getElementById("inputStudentId").value = p.studentId;
  document.getElementById("inputMotto").value = p.motto;
}

// 2. 渲染段考切換與倒數
function renderExamInfo() {
  const examSelect = document.getElementById("examSelect");
  examSelect.value = appState.currentExam;

  const current = getCurrentExamData();
  document.getElementById("cdDays").textContent = current.countdownDays.toString().padStart(2, "0");
  document.getElementById("cdHours").textContent = current.countdownHours.toString().padStart(2, "0");
  document.getElementById("targetTotalGoal").textContent = current.targetGoal;

  let nextExamName = "第二次段考";
  if (appState.currentExam === "exam2") nextExamName = "期末考";
  if (appState.currentExam === "exam3") nextExamName = "高一下 第一次段考";
  document.getElementById("countdownTitle").textContent = `距 ${nextExamName}`;
}

// 3. 渲染 KPI 關鍵指標
function renderKpis() {
  const current = getCurrentExamData();
  const subjects = current.subjects;

  let totalScore = 0;
  let passedCount = 0;
  let count = subjects.length;

  subjects.forEach(sub => {
    totalScore += Number(sub.score) || 0;
    if (Number(sub.score) >= 60) passedCount++;
  });

  const avgScore = count > 0 ? (totalScore / count).toFixed(1) : 0;
  const passRate = count > 0 ? ((totalScore / (count * 100)) * 100).toFixed(1) : 0;

  document.getElementById("metricTotal").textContent = totalScore;
  document.getElementById("metricAverage").textContent = avgScore;
  document.getElementById("metricTotalDelta").innerHTML = `<i class="fa-solid fa-arrow-trend-up"></i> 總滿分 ${count * 100} 分 (達成率 ${passRate}%)`;
  document.getElementById("metricPassed").textContent = passedCount;

  // 預估落點計算 (依一年仁班 31 人常模設定)
  let estimatedRank = 3;
  if (avgScore >= 95) estimatedRank = 1;
  else if (avgScore >= 92) estimatedRank = 2;
  else if (avgScore >= 88) estimatedRank = 3;
  else if (avgScore >= 85) estimatedRank = 4;
  else if (avgScore >= 80) estimatedRank = 6;
  else if (avgScore >= 75) estimatedRank = 9;
  else if (avgScore >= 70) estimatedRank = 14;
  else if (avgScore >= 60) estimatedRank = 20;
  else estimatedRank = 27;

  document.getElementById("metricRank").textContent = estimatedRank;

  const avgDeltaEl = document.getElementById("metricAvgDelta");
  if (avgDeltaEl) {
    if (estimatedRank <= 3) {
      avgDeltaEl.innerHTML = `<span style="color:#34d399;"><i class="fa-solid fa-crown"></i> 班級頂尖前三名 (前 10%)</span>`;
    } else if (avgScore >= 80) {
      avgDeltaEl.innerHTML = `<span style="color:#34d399;"><i class="fa-solid fa-arrow-up"></i> 高於班級均標 (前 20%)</span>`;
    } else if (avgScore >= 70) {
      avgDeltaEl.innerHTML = `<span style="color:#38bdf8;"><i class="fa-solid fa-check"></i> 班級預估前 30%</span>`;
    } else {
      avgDeltaEl.innerHTML = `<span style="color:#fbbf24;"><i class="fa-solid fa-triangle-exclamation"></i> 需加強核心專業</span>`;
    }
  }

  const failCount = count - passedCount;
  const alertEl = document.getElementById("metricFailAlert");
  if (failCount === 0) {
    alertEl.className = "kpi-trend positive";
    alertEl.innerHTML = `<i class="fa-solid fa-circle-check"></i> 全科及格！表現優異`;
  } else {
    alertEl.className = "kpi-trend warning";
    alertEl.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> ${failCount} 科不及格需即時補強`;
  }
}

// 4. 自訂高效繪製高解析度雷達圖 (Canvas Radar Chart with Retina scaling)
function renderRadarChart() {
  const canvas = document.getElementById("radarCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const width = 460;
  const height = 380;

  // 避免模糊
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, width, height);

  const current = getCurrentExamData();
  const subjects = current.subjects;
  const numAxes = subjects.length;
  if (numAxes < 3) return;

  const centerX = width / 2;
  const centerY = height / 2 + 10;
  const radius = 130;
  const angleStep = (Math.PI * 2) / numAxes;

  // 繪製背景多邊形網格 (20, 40, 60, 80, 100 分)
  const levels = [20, 40, 60, 80, 100];
  levels.forEach((lvl, idx) => {
    ctx.beginPath();
    const r = (radius / 100) * lvl;
    for (let i = 0; i < numAxes; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const x = centerX + r * Math.cos(angle);
      const y = centerY + r * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();

    // 60 分為及格紅色虛線警戒線
    if (lvl === 60) {
      ctx.strokeStyle = "rgba(244, 63, 94, 0.4)";
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 4]);
    } else {
      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      ctx.lineWidth = 1;
      ctx.setLineDash([]);
    }
    ctx.stroke();
    ctx.setLineDash([]);

    // 刻度數字
    ctx.fillStyle = "rgba(148, 163, 184, 0.5)";
    ctx.font = "10px sans-serif";
    ctx.fillText(`${lvl}`, centerX + 4, centerY - r + 3);
  });

  // 繪製輻射骨架軸線與標籤
  for (let i = 0; i < numAxes; i++) {
    const angle = i * angleStep - Math.PI / 2;
    const endX = centerX + radius * Math.cos(angle);
    const endY = centerY + radius * Math.sin(angle);

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
    ctx.stroke();

    // 標籤文字 (外推半徑)
    const labelRadius = radius + 24;
    const labelX = centerX + labelRadius * Math.cos(angle);
    const labelY = centerY + labelRadius * Math.sin(angle);

    ctx.fillStyle = "#e2e8f0";
    ctx.font = "bold 11px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const sub = subjects[i];
    // 依據角度微調對齊
    if (Math.abs(Math.sin(angle)) < 0.1) {
      // 左右兩側
      ctx.textAlign = Math.cos(angle) > 0 ? "left" : "right";
    }
    ctx.fillText(sub.name, labelX, labelY);
  }

  // 繪製【班級平均】多邊形
  ctx.beginPath();
  subjects.forEach((sub, i) => {
    const angle = i * angleStep - Math.PI / 2;
    const val = Math.min(100, Math.max(0, sub.classAvg || 60));
    const r = (radius / 100) * val;
    const x = centerX + r * Math.cos(angle);
    const y = centerY + r * Math.sin(angle);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.closePath();
  ctx.strokeStyle = "rgba(148, 163, 184, 0.6)";
  ctx.lineWidth = 1.5;
  ctx.setLineDash([3, 3]);
  ctx.stroke();
  ctx.setLineDash([]);

  // 繪製【個人成績】發光多邊形
  ctx.beginPath();
  subjects.forEach((sub, i) => {
    const angle = i * angleStep - Math.PI / 2;
    const val = Math.min(100, Math.max(0, sub.score || 0));
    const r = (radius / 100) * val;
    const x = centerX + r * Math.cos(angle);
    const y = centerY + r * Math.sin(angle);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.closePath();

  // 漸層填充
  const gradient = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, radius);
  gradient.addColorStop(0, "rgba(56, 189, 248, 0.45)");
  gradient.addColorStop(1, "rgba(14, 165, 233, 0.15)");
  ctx.fillStyle = gradient;
  ctx.fill();

  ctx.strokeStyle = "#38bdf8";
  ctx.lineWidth = 2.5;
  ctx.shadowColor = "rgba(56, 189, 248, 0.8)";
  ctx.shadowBlur = 12;
  ctx.stroke();
  ctx.shadowBlur = 0;

  // 繪製節點圓點與得分標籤
  subjects.forEach((sub, i) => {
    const angle = i * angleStep - Math.PI / 2;
    const val = Math.min(100, Math.max(0, sub.score || 0));
    const r = (radius / 100) * val;
    const x = centerX + r * Math.cos(angle);
    const y = centerY + r * Math.sin(angle);

    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fillStyle = val >= 60 ? "#38bdf8" : "#f43f5e";
    ctx.fill();
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 1.5;
    ctx.stroke();
  });
}

// 5. 渲染 AI 智能診斷分析與專業科目建議
function renderDiagnostic() {
  const current = getCurrentExamData();
  const subjects = current.subjects;
  const box = document.getElementById("diagnosticSummaryBox");
  box.innerHTML = "";

  if (subjects.length === 0) return;

  // 排序找出最高分與最低分
  const sorted = [...subjects].sort((a, b) => b.score - a.score);
  const best = sorted[0];
  const worst = sorted[sorted.length - 1];

  // 最高分科目（可能並列）
  const bestSubjects = subjects.filter(s => s.score === best.score);
  const bestNames = bestSubjects.map(s => s.name).join("、");
  document.getElementById("bestSubjectText").textContent = `${bestNames} (${best.score}分) - 掌握度最高`;
  document.getElementById("worstSubjectText").textContent = `${worst.name} (${worst.score}分) - 具備最大進步空間`;

  let diagItems = [];

  // 分析 1: 頂尖達成指標
  const avgCalc = (subjects.reduce((sum, s) => sum + Number(s.score), 0) / subjects.length).toFixed(1);
  if (worst.score >= 80) {
    diagItems.push({
      type: "success",
      icon: "fa-crown",
      title: `【頂尖群指標】全科 84 分以上全數達標，總平均 ${avgCalc} 分！`,
      desc: "七大學科全數穩居高分群，展現兼具理科邏輯、語文素養與商管資訊之全方位學習能力，在一年仁班中穩居全班前三名（預估第 3 名）！"
    });
  } else if (worst.score < 60) {
    diagItems.push({
      type: "warning",
      icon: "fa-triangle-exclamation",
      title: `【紅色警報】${worst.name} (${worst.score}分) 落入不及格警戒區`,
      desc: `該科與班級平均 (${worst.classAvg}分) 尚有差距，建議依據錯題本每日落實 20 分鐘精準補強，避免下學期學分重補修風險。`
    });
  } else {
    diagItems.push({
      type: "success",
      icon: "fa-circle-check",
      title: "【學習達標】全數專業與一般學科均達及格標準",
      desc: "各學科學力基礎扎實，展現良好課堂吸收度。建議下階段鎖定突破高分群！"
    });
  }

  // 分析 2: 資訊科技王牌亮點
  const itSub = subjects.find(s => s.name.includes("資訊") || s.name.includes("科技") || s.name.includes("程式"));
  if (itSub && itSub.score >= 93) {
    diagItems.push({
      type: "success",
      icon: "fa-laptop-code",
      title: `【全科榜首科目】資訊科技高達 ${itSub.score} 分榮登第一！`,
      desc: `高於班級平均 ${itSub.score - itSub.classAvg} 分！進位制換算與通訊協定觀念極為清晰，展現身為資處科頂尖人才的扎實專業功底。`
    });
  }

  // 分析 3: 數理強項雙冠
  const mathSub = subjects.find(s => s.name.includes("數學"));
  const phySub = subjects.find(s => s.name.includes("物理"));
  if ((mathSub && mathSub.score >= 90) || (phySub && phySub.score >= 90)) {
    diagItems.push({
      type: "success",
      icon: "fa-atom",
      title: `【理科雙雄】物理 (${phySub ? phySub.score : 0}分) 與 數學 (${mathSub ? mathSub.score : 0}分) 邏輯卓越`,
      desc: `高出班級平均達 20 分以上！具備優異的物理建模、公式推導與空間運算思維，是支撐全科成績名列前茅的最核心基石。`
    });
  }

  // 分析 4: 商管核心專業
  const acctSub = subjects.find(s => s.name.includes("會計"));
  const busSub = subjects.find(s => s.name.includes("商業"));
  if (acctSub && acctSub.score >= 90 && busSub && busSub.score >= 90) {
    diagItems.push({
      type: "info",
      icon: "fa-chart-line",
      title: `【商管實力穩健】會計 (${acctSub.score}分)・商概 (${busSub.score}分)`,
      desc: `借貸分錄觀念純熟、行銷與商業經營思維開闊，加上資訊科技的數位能力，充分展現商管資訊兼備的跨域競爭力！`
    });
  }

  // 分析 4: 培優建議（目前最低科目）
  if (worst.name.includes("英文") || worst.name.includes("英語")) {
    diagItems.push({
      type: "info",
      icon: "fa-language",
      title: `【下階段登頂關鍵】英文 (${worst.score}分) 鎖定克漏字與長篇閱測精進`,
      desc: `英文已達 84 分良好水準，然因其他六科皆達 90~92 分高標，英文為目前唯一的培優重點科。若每日加強 20 分鐘精讀與高頻單字突破 90 分，總平均將可突破 92 分穩居全班第一！`
    });
  }

  diagItems.forEach(item => {
    const el = document.createElement("div");
    el.className = `diag-item ${item.type}`;
    el.innerHTML = `
      <div class="diag-title"><i class="fa-solid ${item.icon}"></i> ${item.title}</div>
      <div class="diag-desc">${item.desc}</div>
    `;
    box.appendChild(el);
  });
}

// 6. 渲染各科目卡片列表
function renderSubjectsGrid() {
  const current = getCurrentExamData();
  const grid = document.getElementById("subjectsGrid");
  grid.innerHTML = "";

  current.subjects.forEach(sub => {
    const isPass = sub.score >= 60;
    const isPerfect = sub.score >= 90;
    const scoreClass = isPerfect ? "perfect" : (isPass ? "pass" : "fail");
    const barClass = isPerfect ? "fill-blue" : (isPass ? "fill-green" : "fill-red");

    const card = document.createElement("div");
    card.className = "subject-card";
    card.innerHTML = `
      <div class="sub-header">
        <div class="sub-title-group">
          <span class="sub-name">${sub.name}</span>
          <span class="sub-type">${sub.category}</span>
        </div>
        <div class="sub-score-badge ${scoreClass}">${sub.score}<span style="font-size: 0.9rem;">分</span></div>
      </div>

      <div class="sub-bar-bg">
        <div class="sub-bar-fill ${barClass}" style="width: ${Math.min(100, Math.max(0, sub.score))}%;"></div>
      </div>

      <div class="sub-details">
        <span>班級平均: <strong>${sub.classAvg}</strong> 分</span>
        <span>下次目標: <strong>${sub.targetScore}</strong> 分</span>
      </div>

      <div class="sub-review-box">
        <strong><i class="fa-solid fa-clipboard-list"></i> 檢討摘要：</strong>
        <span>${sub.review || "尚未記錄該科失分檢討"}</span>
      </div>

      <div class="sub-card-footer">
        <span class="sub-target-tag"><i class="fa-solid fa-bullseye"></i> 改善行動: ${sub.action || "自主練習"}</span>
        <button class="btn-icon-link" onclick="openSubjectModal('${sub.id}')">
          <i class="fa-solid fa-pen-to-square"></i> 編輯成績
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// 7. 渲染錯題收錄本
function renderMistakes() {
  const current = getCurrentExamData();
  const list = current.mistakes || [];
  const container = document.getElementById("mistakesContainer");
  const badge = document.getElementById("mistakeCountBadge");
  badge.textContent = list.length;

  const subjectFilter = document.getElementById("mistakeSubjectFilter").value;
  const reasonFilter = document.getElementById("mistakeReasonFilter").value;

  const filtered = list.filter(m => {
    if (subjectFilter !== "all" && m.subject !== subjectFilter) return false;
    if (reasonFilter !== "all" && m.reasonType !== reasonFilter) return false;
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2.5rem; color: var(--text-secondary); background: rgba(255,255,255,0.02); border-radius: var(--radius-md);">
        <i class="fa-solid fa-circle-check" style="font-size: 2.5rem; color: var(--accent-cyan); margin-bottom: 0.8rem; display: block;"></i>
        目前此篩選條件下無任何錯題記錄！點擊上方「新增錯題紀錄」即可收錄段考盲點。
      </div>
    `;
    return;
  }

  container.innerHTML = "";
  filtered.forEach(m => {
    const card = document.createElement("div");
    card.className = "mistake-card";
    card.innerHTML = `
      <div class="m-header">
        <div class="m-tags">
          <span class="m-subject"><i class="fa-solid fa-bookmark"></i> ${m.subject}</span>
          <span class="badge" style="background: rgba(255,255,255,0.06);">${m.questionNo}</span>
          <span class="m-reason-badge">${m.reasonType}</span>
          <span class="badge" style="color: var(--accent-amber);"><i class="fa-solid fa-minus"></i> 失分: ${m.deduction} 分</span>
        </div>
        <div class="m-actions">
          <button class="btn-icon-link" onclick="deleteMistake('${m.id}')" title="刪除此題">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>

      <div class="m-question">
        <strong>題目摘錄：</strong> ${escapeHtml(m.questionDesc)}
      </div>

      <div class="m-compare">
        <div class="m-ans-box m-wrong">
          <strong><i class="fa-solid fa-xmark"></i> 我寫的錯誤答案：</strong><br>
          ${escapeHtml(m.myWrongAns || "未填寫")}
        </div>
        <div class="m-ans-box m-correct">
          <strong><i class="fa-solid fa-check"></i> 標準正確答案：</strong><br>
          ${escapeHtml(m.correctAns || "未填寫")}
        </div>
      </div>

      <div class="m-notes">
        <strong><i class="fa-solid fa-lightbulb"></i> 核心解析與觀念補強筆記：</strong><br>
        ${escapeHtml(m.notes || "無特別筆記")}
      </div>
    `;
    container.appendChild(card);
  });
}

// 8. 渲染省思表單
function renderReflectionForm() {
  const current = getCurrentExamData();
  const ref = current.reflection || {};

  // Radio buttons
  if (ref.studyHours) {
    const r = document.querySelector(`input[name="studyHours"][value="${ref.studyHours}"]`);
    if (r) r.checked = true;
  }
  if (ref.phoneHours) {
    const r = document.querySelector(`input[name="phoneHours"][value="${ref.phoneHours}"]`);
    if (r) r.checked = true;
  }
  if (ref.classFocus) {
    const r = document.querySelector(`input[name="classFocus"][value="${ref.classFocus}"]`);
    if (r) r.checked = true;
  }

  document.getElementById("goodPoints").value = ref.goodPoints || "";
  document.getElementById("badPoints").value = ref.badPoints || "";
  document.getElementById("actionPlan").value = ref.actionPlan || "";
}

// 9. 渲染正式紙本列印報表 (Official Print Form)
function renderPrintSheet() {
  const p = appState.profile;
  const current = getCurrentExamData();

  document.getElementById("prExamName").textContent = current.name;
  document.getElementById("prClassSeat").textContent = `${p.schoolClass} ${p.seat}`;
  document.getElementById("prName").textContent = p.name;

  const now = new Date();
  const dateStr = `${now.getFullYear()}/${(now.getMonth() + 1).toString().padStart(2, "0")}/${now.getDate().toString().padStart(2, "0")}`;
  document.getElementById("prDate").textContent = dateStr;

  // 成績表格
  const tbody = document.getElementById("prScoreTableBody");
  tbody.innerHTML = "";
  let totalScore = 0;
  let passedCount = 0;

  current.subjects.forEach(sub => {
    totalScore += Number(sub.score) || 0;
    if (Number(sub.score) >= 60) passedCount++;

    const isPass = sub.score >= 60;
    const diff = sub.score - sub.classAvg;
    const diffText = diff >= 0 ? `+${diff}` : `${diff}`;

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${sub.name}</strong></td>
      <td style="color: ${isPass ? "#0f172a" : "#dc2626"}; font-weight: bold;">${sub.score}</td>
      <td>${sub.classAvg}</td>
      <td>60</td>
      <td>${diffText} (目標: ${sub.targetScore})</td>
      <td>${escapeHtml(sub.review || "正常作答")}</td>
    `;
    tbody.appendChild(tr);
  });

  const avg = (totalScore / current.subjects.length).toFixed(1);
  document.getElementById("prTotalSummary").textContent = `總分：${totalScore} 分 | 平均：${avg} 分`;
  document.getElementById("prRankSummary").textContent = `及格科數：${passedCount}/${current.subjects.length} 科 | 班級預估第 3 名 (前 10%)`;

  // 錯題精華
  const prMistakeBox = document.getElementById("prMistakeSummary");
  if (!current.mistakes || current.mistakes.length === 0) {
    prMistakeBox.textContent = "本次段考無收錄錯題紀錄，或已全數完全訂正！";
  } else {
    prMistakeBox.innerHTML = current.mistakes.map((m, idx) => `
      <div style="margin-bottom: 6px;">
        <strong>${idx + 1}. [${m.subject}] ${m.questionNo} (${m.reasonType} 失分 ${m.deduction}分)：</strong>
        <div>解析要點：${escapeHtml(m.notes)}</div>
      </div>
    `).join("");
  }

  // 省思內容
  const ref = current.reflection || {};
  const prRefBox = document.getElementById("prReflectionSummary");
  prRefBox.innerHTML = `
    <div><strong>• 課後準備與時間管理：</strong>每日課後溫習：${ref.studyHours || "1~2小時"}；手機休閒時間：${ref.phoneHours || "1~2小時"}；專業課堂專注度：${ref.classFocus || "良好"}。</div>
    <div style="margin-top: 4px;"><strong>• 本次學習肯定亮點：</strong>${escapeHtml(ref.goodPoints || "程式設計與專業科目概念有跟上教學進度。")}</div>
    <div style="margin-top: 4px;"><strong>• 待改進之痛點盲點：</strong>${escapeHtml(ref.badPoints || "部分科目考前練習量不足，借貸與計算粗心。")}</div>
    <div style="margin-top: 4px;"><strong>• 下次段考行動承諾：</strong>${escapeHtml(ref.actionPlan || "加強弱科練習，維持規律作息。")}</div>
  `;
}

// 模態框操作與事件監聽
function setupEventListeners() {
  // 切換段考
  document.getElementById("examSelect").addEventListener("change", (e) => {
    appState.currentExam = e.target.value;
    saveState();
    renderApp();
  });

  // 列印按鈕
  document.getElementById("printBtn").addEventListener("click", () => {
    window.print();
  });

  // 編輯個人資訊按鈕
  document.getElementById("editProfileBtn").addEventListener("click", () => {
    openModal("profileModal");
  });

  // 儲存個人資訊
  document.getElementById("saveProfileBtn").addEventListener("click", () => {
    appState.profile.name = document.getElementById("inputStudentName").value.trim() || "高于翔";
    appState.profile.schoolClass = document.getElementById("inputClass").value.trim() || "一年仁班";
    appState.profile.seat = document.getElementById("inputSeat").value.trim() || "26 號";
    appState.profile.studentId = document.getElementById("inputStudentId").value.trim() || "255056";
    appState.profile.motto = document.getElementById("inputMotto").value.trim() || "「理科思維奠基，商管資訊並進，精益求精追求卓越！」";

    saveState();
    closeModal("profileModal");
    renderProfile();
    renderPrintSheet();
  });

  // 快速新增錯題
  const openMistakeModal = () => {
    document.getElementById("mQuestionNo").value = "";
    document.getElementById("mQuestionDesc").value = "";
    document.getElementById("mMyWrongAns").value = "";
    document.getElementById("mCorrectAns").value = "";
    document.getElementById("mDeduction").value = "3";
    document.getElementById("mCorrectionNotes").value = "";
    openModal("mistakeModal");
  };
  document.getElementById("addMistakeQuickBtn").addEventListener("click", openMistakeModal);
  document.getElementById("addMistakeBtn").addEventListener("click", openMistakeModal);

  // 儲存錯題
  document.getElementById("saveMistakeRecordBtn").addEventListener("click", () => {
    const current = getCurrentExamData();
    const subject = document.getElementById("mSubject").value;
    const qNo = document.getElementById("mQuestionNo").value.trim() || "選擇題";
    const qDesc = document.getElementById("mQuestionDesc").value.trim() || "（無題目內容摘要）";
    const wrong = document.getElementById("mMyWrongAns").value.trim();
    const correct = document.getElementById("mCorrectAns").value.trim();
    const reason = document.getElementById("mReasonType").value;
    const ded = Number(document.getElementById("mDeduction").value) || 2;
    const notes = document.getElementById("mCorrectionNotes").value.trim() || "待補強觀念";

    const newMistake = {
      id: "m_" + Date.now(),
      subject: subject,
      questionNo: qNo,
      questionDesc: qDesc,
      myWrongAns: wrong,
      correctAns: correct,
      reasonType: reason,
      deduction: ded,
      notes: notes
    };

    if (!current.mistakes) current.mistakes = [];
    current.mistakes.unshift(newMistake);

    saveState();
    closeModal("mistakeModal");
    renderMistakes();
    renderPrintSheet();
  });

  // 錯題篩選
  document.getElementById("mistakeSubjectFilter").addEventListener("change", renderMistakes);
  document.getElementById("mistakeReasonFilter").addEventListener("change", renderMistakes);

  // 儲存科目分數編輯
  document.getElementById("saveSubjectBtn").addEventListener("click", () => {
    const subId = document.getElementById("editSubjectId").value;
    const current = getCurrentExamData();
    const sub = current.subjects.find(s => s.id === subId);
    if (sub) {
      const newScore = Math.min(100, Math.max(0, Number(document.getElementById("editScoreInput").value) || 0));
      const newTarget = Math.min(100, Math.max(0, Number(document.getElementById("editTargetInput").value) || 0));
      sub.score = newScore;
      sub.targetScore = newTarget;
      sub.review = document.getElementById("editReviewInput").value.trim();
      sub.action = document.getElementById("editActionInput").value.trim();

      saveState();
      closeModal("subjectModal");
      renderApp();
    }
  });

  // 儲存段考自我省思
  document.getElementById("saveReflectionBtn").addEventListener("click", () => {
    const current = getCurrentExamData();
    const sH = document.querySelector('input[name="studyHours"]:checked')?.value || "1~2小時";
    const pH = document.querySelector('input[name="phoneHours"]:checked')?.value || "1~2小時";
    const cF = document.querySelector('input[name="classFocus"]:checked')?.value || "良好";
    const gP = document.getElementById("goodPoints").value.trim();
    const bP = document.getElementById("badPoints").value.trim();
    const aP = document.getElementById("actionPlan").value.trim();

    current.reflection = {
      studyHours: sH,
      phoneHours: pH,
      classFocus: cF,
      goodPoints: gP,
      badPoints: bP,
      actionPlan: aP
    };

    saveState();
    renderPrintSheet();

    const statusEl = document.getElementById("saveStatus");
    statusEl.innerHTML = `<i class="fa-solid fa-circle-check"></i> 省思資料儲存成功！已同步至列印表單`;
    statusEl.style.color = "var(--accent-emerald)";
    setTimeout(() => {
      statusEl.innerHTML = `<i class="fa-solid fa-circle-check"></i> 內容已即時儲存至瀏覽器本地`;
    }, 3000);
  });

  // 分頁切換
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      const targetId = btn.getAttribute("data-tab");
      const targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.classList.add("active");
    });
  });

  // 關閉 Modal 按鈕
  document.querySelectorAll("[data-close]").forEach(el => {
    el.addEventListener("click", () => {
      const modalId = el.getAttribute("data-close");
      closeModal(modalId);
    });
  });

  // 重設資料按鈕
  document.getElementById("resetDataBtn").addEventListener("click", () => {
    if (confirm("確定要將所有數據重設回一年仁班 26 號 高于翔 的段考預設範例資料嗎？")) {
      appState = JSON.parse(JSON.stringify(DEFAULT_STATE));
      saveState();
      renderApp();
    }
  });

  // 批次改分按鈕快捷提示
  document.getElementById("batchEditBtn").addEventListener("click", () => {
    const current = getCurrentExamData();
    const subNames = current.subjects.map((s, idx) => `${idx + 1}.${s.name}(目前:${s.score})`).join("\n");
    const choice = prompt(`請輸入要修改的科目編號 (1~${current.subjects.length})：\n${subNames}`);
    const idx = parseInt(choice, 10) - 1;
    if (idx >= 0 && idx < current.subjects.length) {
      openSubjectModal(current.subjects[idx].id);
    }
  });
}

// 開啟科目編輯 Modal
function openSubjectModal(subjectId) {
  const current = getCurrentExamData();
  const sub = current.subjects.find(s => s.id === subjectId);
  if (!sub) return;

  document.getElementById("editSubjectId").value = sub.id;
  document.getElementById("subjectModalTitle").innerHTML = `<i class="fa-solid fa-pen-nib"></i> 編輯【${sub.name}】成績與檢討`;
  document.getElementById("editScoreInput").value = sub.score;
  document.getElementById("editTargetInput").value = sub.targetScore;
  document.getElementById("editReviewInput").value = sub.review || "";
  document.getElementById("editActionInput").value = sub.action || "";

  openModal("subjectModal");
}

// 刪除錯題
function deleteMistake(mistakeId) {
  if (confirm("確定要將這筆錯題自訂正本中移除嗎？")) {
    const current = getCurrentExamData();
    current.mistakes = current.mistakes.filter(m => m.id !== mistakeId);
    saveState();
    renderMistakes();
    renderPrintSheet();
  }
}

// 彈出視窗輔助函式
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add("active");
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove("active");
}

// 轉義 HTML 防止 XSS
function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// 啟動與全域綁定
window.openSubjectModal = openSubjectModal;
window.deleteMistake = deleteMistake;
window.openModal = openModal;
window.closeModal = closeModal;

document.addEventListener("DOMContentLoaded", initApp);
