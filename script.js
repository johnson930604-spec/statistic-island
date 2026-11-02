/* 所有資料都留在這台裝置；沒有帳號密碼，也不會傳送到任何伺服器。 */
(() => {
  "use strict";

  const 儲存鍵 = "統計群島本機紀錄第一版";
  const 島嶼順序 = ["描述", "機率", "抽樣"];
  const 頁面名稱 = { 探索: "探索地圖", 路線: "我的學習路線", 手冊: "口袋知識手冊", 教師: "教師觀察站" };
  const 步驟名稱 = ["認識概念", "動手實驗", "小小挑戰"];

  const 課程 = {
    描述: {
      名稱: "敘述統計島", 短名: "敘述統計", 編號: "01", 時間: "約 8 分鐘", 圖示: "◒",
      摘要: "從一群人的通勤時間，讀懂平均數與中位數。",
      目標: "能區分平均數和中位數，並說明極端值對它們的影響。",
      標籤: ["平均數", "中位數", "極端值"],
      概念: [
        ["平均數：讓每個數值都發聲", "把所有數值相加，再除以資料筆數，就是平均數。每一筆資料都會影響它，因此極端值也可能把平均數拉動。", "平均數 ＝ 全部數值的總和 ÷ 資料筆數"],
        ["中位數：站在排序的正中央", "先把資料由小排到大。筆數是奇數時，取中間那筆；筆數是偶數時，取中間兩筆的平均。它通常比較不容易被單一極端值拉動。", "七筆資料的中位數，是排序後的第四筆。"],
        ["同一群資料，可以有不同的代表值", "平均數與中位數各自提供線索，沒有哪一個永遠比較好。了解資料分布及情境，才能選擇適合的摘要方式。", "下一步：把一個人的通勤時間拉長，看看會發生什麼事。"]
      ],
      題目: [
        { 題幹: "五筆資料是 2、4、4、6、9，平均數是多少？", 選項: ["4", "5", "6", "9"], 正解: 1, 解析: "總和是 2 ＋ 4 ＋ 4 ＋ 6 ＋ 9 ＝ 25，除以 5 筆，平均數就是 5。", 知識: "平均數的計算" },
        { 題幹: "已排序的資料是 2、4、6、20，中位數是多少？", 選項: ["4", "5", "6", "8"], 正解: 1, 解析: "共有 4 筆資料，中間兩筆是 4 和 6。中位數是（4 ＋ 6）÷ 2 ＝ 5。", 知識: "偶數筆資料的中位數" },
        { 題幹: "資料是 10、12、14、16、18。把 18 改成 118，新的平均數與中位數是多少？", 選項: ["平均數 14，中位數 14", "平均數 34，中位數 34", "平均數 34，中位數 14", "平均數 118，中位數 16"], 正解: 2, 解析: "新總和為 170，所以平均數為 170 ÷ 5 ＝ 34；排序後中間的資料仍是 14。極端值把平均數拉高，中位數在這個例子裡沒有改變。", 知識: "極端值的影響" }
      ]
    },
    機率: {
      名稱: "機率島", 短名: "機率與隨機", 編號: "02", 時間: "約 8 分鐘", 圖示: "⚄",
      摘要: "把骰子交給隨機，看看理論和實驗如何相遇。",
      目標: "能區分理論機率與實驗比例，並理解獨立事件不會互相補償。",
      標籤: ["公平骰子", "實驗比例", "獨立事件"],
      概念: [
        ["理論機率：由模型出發", "公平六面骰子的六個面機會相同，所以擲出某一面的機率都是六分之一。機率描述可能性，不是對下一次結果的承諾。", "出現六點的理論機率 ＝ 1 ÷ 6 ≈ 16.67%"],
        ["實驗比例：由觀察出發", "把某個結果出現的次數除以總次數，得到實驗比例。少量實驗可能和理論差很多；增加獨立重複試驗，比例通常會更穩定。", "出現六點的實驗比例 ＝ 六點次數 ÷ 投擲總次數"],
        ["骰子沒有記憶", "公平骰子的各次投擲互相獨立。前面連續出現六點，也不會讓下一次的六點比較難出現。大數法則不保證短期一定平衡，也不保證每一步都更接近理論值。", "下一步：從 1 次到 100 次，觀察比例如何起伏。"]
      ],
      題目: [
        { 題幹: "擲一次公平六面骰子，出現五點或六點的機率是多少？", 選項: ["六分之一", "三分之一", "二分之一", "六分之五"], 正解: 1, 解析: "六種等可能結果中，五點和六點共有兩種，所以機率是 2 ÷ 6 ＝ 1 ÷ 3。", 知識: "等可能事件的機率" },
        { 題幹: "投擲 600 次公平骰子，有 126 次出現六點。哪個說法正確？", 選項: ["理論機率已經變成 21%", "本次比例是 21%，理論機率仍是六分之一", "可以確定這顆骰子不公平", "下一次一定不會出現六點"], 正解: 1, 解析: "126 ÷ 600 ＝ 21%，這是本次實驗比例。在公平骰子的模型下，理論機率仍是六分之一。單憑這個結果不能直接斷定骰子不公平。", 知識: "實驗比例與理論機率" },
        { 題幹: "前 60 次有 18 次擲出六點。再投擲 60 次公平骰子，哪個說法正確？", 選項: ["一定恰好有 10 次六點", "一定少於 10 次，來補償前面的結果", "預期有 10 次六點，實際次數不一定", "下一次出現六點的機率會下降"], 正解: 2, 解析: "後面 60 次的六點期望次數為 60 × 1 ÷ 6 ＝ 10，但實際次數會隨機變動。各次獨立，過去的結果不會要求未來補償。", 知識: "獨立事件與補償迷思" }
      ]
    },
    抽樣: {
      名稱: "抽樣島", 短名: "抽樣與推論", 編號: "03", 時間: "約 10 分鐘", 圖示: "◎",
      摘要: "從一小群人認識整體，發現抽樣中的變動與偏誤。",
      目標: "能區分母體與樣本，並解釋樣本數、抽樣波動和取樣偏誤。",
      標籤: ["母體與樣本", "樣本平均數", "抽樣波動"],
      概念: [
        ["母體是整體，樣本是其中一部分", "想研究的全部對象稱為母體，實際抽來觀察的一部分稱為樣本。樣本平均數用來描述樣本，也能在適當抽樣設計下協助估計母體平均數。", "在這座島上：固定的 100 人是母體，每次隨機抽出的部分人是樣本。"],
        ["重新抽一次，結果可能不同", "即使抽樣方法相同，不同樣本也可能產生不同平均數。把很多次樣本平均數畫在一起，就能看見抽樣分配。它描述的是各次平均數，不是每個人的分數。", "每次抽樣內不重複選人；下一次抽樣前，恢復完整的 100 人母體。"],
        ["樣本數與代表性，是兩個問題", "在這裡的簡單隨機抽樣下，較大的樣本通常讓平均數的波動更小，但不保證每次都更接近母體。若取樣範圍有偏誤，只增加人數也不會自動解決。", "下一步：比較每次抽 5 人、20 人與 50 人時，平均數如何分布。"]
      ],
      題目: [
        { 題幹: "母體資料是 2、4、6、8、10，這次抽出的樣本是 2、8。母體平均數與樣本平均數分別是多少？", 選項: ["母體 6，樣本 5", "母體 5，樣本 6", "母體 6，樣本 6", "母體 5，樣本 5"], 正解: 0, 解析: "母體總和為 30，除以 5 得到 6；樣本總和為 10，除以 2 得到 5。樣本平均數不一定剛好等於母體平均數。", 知識: "母體與樣本平均數" },
        { 題幹: "固定 100 人，每次均勻隨機、不放回抽樣，下次再恢復完整母體。每次抽 50 人和抽 5 人相比，哪個說法正確？", 選項: ["50 人的平均數每次一定更接近母體", "50 人的平均數通常波動較小，但單次不一定更接近", "兩種樣本數的抽樣波動一定相同", "只要抽 50 人，就完全不會有抽樣誤差"], 正解: 1, 解析: "在這個固定母體的簡單隨機抽樣設計下，較大的樣本數會降低樣本平均數的標準誤；但隨機性仍存在，不能保證每一次都更接近母體。", 知識: "樣本數與抽樣波動" },
        { 題幹: "全校 1,000 人每日自習平均 60 分鐘。只問讀書社 30 人，平均 100 分鐘；擴為該社 200 人，平均 98 分鐘。哪個說法正確？", 選項: ["超過 100 人就一定有代表性", "200 人的平均一定等於全校平均", "只問讀書社的取樣範圍偏誤仍然存在", "全校的平均已經變成 98 分鐘"], 正解: 2, 解析: "讀書社成員可能與其他學生不同。擴大同一個取樣範圍，沒有讓全校每一位學生都有合適的被選機會，所以偏誤不會自動消失。", 知識: "取樣偏誤與代表性" }
      ]
    }
  };

  // 固定的模擬母體只建立一次；每次抽樣使用相同的 100 個分數。
  const 母體 = Array.from({ length: 100 }, (_, 序號) => 30 + (序號 * 17) % 31 + (序號 * 7) % 31);
  const 平均 = 數值 => 數值.reduce((總和, 值) => 總和 + 值, 0) / 數值.length;
  const 母體平均 = 平均(母體);
  const 母體標準差 = Math.sqrt(平均(母體.map(值 => (值 - 母體平均) ** 2)));
  let 可以儲存 = true;
  let 資料 = 讀取紀錄();
  let 當前頁面 = "探索";
  let 教師模式 = "本機";
  let 當前島嶼 = null;
  let 提示計時器;
  let 上次計時 = performance.now();
  let 待儲存秒數 = 0;
  let 實驗 = 建立實驗狀態();

  function 建立章節() {
    return { 已探索: false, 通關: false, 主動秒數: 0, 操作數: 0, 題目: {} };
  }

  function 建立旅人(名稱) {
    return {
      識別碼: `旅人${Date.now()}${Math.random().toString(36).slice(2, 8)}`,
      名稱,
      建立時間: new Date().toISOString(),
      章節: Object.fromEntries(島嶼順序.map(島 => [島, 建立章節()]))
    };
  }

  function 建立實驗狀態() {
    return {
      描述: { 步驟: 0, 通勤時間: 35 },
      機率: { 步驟: 0, 次數: [0, 0, 0, 0, 0, 0], 最後點數: null },
      抽樣: { 步驟: 0, 樣本數: 20, 平均紀錄: [], 最後樣本: [] }
    };
  }

  function 讀取紀錄() {
    let 原始;
    let 儲存文字;
    try {
      儲存文字 = localStorage.getItem(儲存鍵);
    } catch {
      // 瀏覽器可能禁止本機儲存，仍然可以使用這次開啟的展示。
      可以儲存 = false;
    }
    try { 原始 = JSON.parse(儲存文字 || "null"); }
    catch {
      // 單筆儲存內容損壞時重新建立展示紀錄，不影響網站操作。
      原始 = null;
    }
    const 乾淨旅人 = [];
    if (原始 && Array.isArray(原始.旅人)) {
      原始.旅人.slice(0, 100).forEach(舊旅人 => {
        if (!舊旅人 || typeof 舊旅人.名稱 !== "string" || !舊旅人.名稱.trim()) return;
        const 新旅人 = 建立旅人(舊旅人.名稱.trim().slice(0, 20));
        if (typeof 舊旅人.識別碼 === "string" && !乾淨旅人.some(人 => 人.識別碼 === 舊旅人.識別碼)) 新旅人.識別碼 = 舊旅人.識別碼;
        if (typeof 舊旅人.建立時間 === "string") 新旅人.建立時間 = 舊旅人.建立時間;
        島嶼順序.forEach(島 => {
          const 舊章節 = 舊旅人.章節?.[島];
          if (!舊章節 || typeof 舊章節 !== "object") return;
          const 新章節 = 新旅人.章節[島];
          新章節.已探索 = 舊章節.已探索 === true;
          新章節.主動秒數 = 有效非負數(舊章節.主動秒數);
          新章節.操作數 = Math.floor(有效非負數(舊章節.操作數));
          課程[島].題目.forEach((題, 索引) => {
            const 舊答題 = 舊章節.題目?.[索引];
            if (!舊答題 || !有效選項(舊答題.初答) || !有效選項(舊答題.最後)) return;
            新章節.題目[索引] = {
              初答: 舊答題.初答, 最後: 舊答題.最後,
              作答次數: Math.max(1, Math.floor(有效非負數(舊答題.作答次數))),
              初答時間: typeof 舊答題.初答時間 === "string" ? 舊答題.初答時間 : ""
            };
          });
          新章節.通關 = 課程[島].題目.every((題, 索引) => 新章節.題目[索引]?.最後 === 題.正解);
        });
        乾淨旅人.push(新旅人);
      });
    }
    if (!乾淨旅人.length) 乾淨旅人.push(建立旅人("小島旅人"));
    const 指定旅人 = 乾淨旅人.find(人 => 人.識別碼 === 原始?.目前旅人);
    return { 版本: 1, 目前旅人: 指定旅人?.識別碼 || 乾淨旅人[0].識別碼, 旅人: 乾淨旅人 };
  }

  function 有效非負數(值) { return typeof 值 === "number" && Number.isFinite(值) && 值 >= 0 ? 值 : 0; }
  function 有效選項(值) { return Number.isInteger(值) && 值 >= 0 && 值 < 4; }
  function 目前旅人() { return 資料.旅人.find(人 => 人.識別碼 === 資料.目前旅人) || 資料.旅人[0]; }
  function 跳脫(內容) { return String(內容).replace(/[&<>"']/g, 字元 => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[字元]); }
  function 小數(值, 位數 = 2) { return Number(值).toLocaleString("zh-TW", { minimumFractionDigits: 位數, maximumFractionDigits: 位數 }); }
  function 百分比(分子, 分母) { return 分母 ? `${Math.round(分子 / 分母 * 100)}%` : "尚未作答"; }
  function 停留文字(秒) { const 整秒 = Math.floor(秒); return 整秒 < 60 ? `${整秒} 秒` : `${Math.floor(整秒 / 60)} 分 ${整秒 % 60} 秒`; }

  function 儲存紀錄() {
    if (!可以儲存) return;
    try { localStorage.setItem(儲存鍵, JSON.stringify(資料)); }
    catch {
      可以儲存 = false;
      提示("本機儲存目前無法使用；仍可操作，關閉頁面後本次紀錄可能不會保留。");
    }
  }

  function 提示(文字) {
    const 元素 = document.getElementById("提示訊息");
    if (!元素) return;
    clearTimeout(提示計時器);
    元素.textContent = 文字;
    元素.classList.add("顯示");
    提示計時器 = setTimeout(() => 元素.classList.remove("顯示"), 4000);
  }

  function 開啟視窗(識別碼) {
    const 視窗 = document.getElementById(識別碼);
    if (!視窗 || 視窗.open) return;
    if (識別碼 === "旅人視窗") 繪製旅人列表();
    視窗.showModal();
    更新視窗狀態();
    if (識別碼 === "旅人視窗") setTimeout(() => document.getElementById("旅人名稱")?.focus(), 0);
  }

  function 更新視窗狀態() {
    document.body.classList.toggle("視窗開啟", Boolean(document.querySelector("dialog[open]")));
  }

  function 更新總覽() {
    const 旅人 = 目前旅人();
    const 通關數 = 島嶼順序.filter(島 => 旅人.章節[島].通關).length;
    document.querySelectorAll("[data-learner-name]").forEach(元素 => { 元素.textContent = 旅人.名稱; });
    document.querySelectorAll("[data-learner-initial]").forEach(元素 => { 元素.textContent = Array.from(旅人.名稱)[0] || "旅"; });
    const 進度數字 = document.getElementById("進度數字");
    if (進度數字) 進度數字.textContent = `${Math.round(通關數 / 3 * 100)}%`;
    const 進度填色 = document.getElementById("進度填色");
    if (進度填色) 進度填色.style.width = `${通關數 / 3 * 100}%`;
    const 完成數 = document.getElementById("探索完成數");
    if (完成數) 完成數.textContent = `${通關數} / 3`;
    島嶼順序.forEach(島 => {
      const 章節 = 旅人.章節[島];
      document.querySelectorAll(`[data-island-progress="${島}"]`).forEach(元素 => { 元素.textContent = 章節.通關 ? "已通關" : 章節.已探索 ? "已探索" : "待探索"; });
      document.querySelectorAll(`[data-island-badge="${島}"]`).forEach(元素 => { 元素.textContent = 章節.通關 ? "已通關" : 章節.已探索 ? "學習中" : "未開始"; });
      document.querySelectorAll(`#地圖區 .島嶼入口[data-island="${島}"]`).forEach(元素 => 元素.classList.toggle("已完成", 章節.通關));
    });
    繪製路線();
    if (當前頁面 === "教師") 繪製教師();
  }

  function 切換頁面(頁面) {
    if (!頁面名稱[頁面]) return;
    當前頁面 = 頁面;
    document.querySelectorAll("[data-panel]").forEach(區塊 => { 區塊.hidden = 區塊.dataset.panel !== 頁面; });
    document.querySelectorAll("[data-page]").forEach(按鈕 => {
      const 啟用 = 按鈕.dataset.page === 頁面;
      按鈕.classList.toggle("啟用", 啟用);
      if (啟用) 按鈕.setAttribute("aria-current", "page");
      else 按鈕.removeAttribute("aria-current");
    });
    const 標題 = document.getElementById("頁面標題");
    if (標題) 標題.textContent = 頁面名稱[頁面];
    if (頁面 === "教師") 繪製教師();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function 繪製路線() {
    const 區塊 = document.getElementById("路線內容");
    if (!區塊) return;
    const 旅人 = 目前旅人();
    const 全通關 = 島嶼順序.every(島 => 旅人.章節[島].通關);
    區塊.innerHTML = `<div class="提示框"><strong>你的旅程，由好奇心帶路。</strong><p>建議依序探索，也可以自由選島。每座島的三道挑戰最後都答對，即可取得通關印記；首次作答會另外保留，幫助看見需要複習的概念。</p></div>
      ${島嶼順序.map(島 => {
        const 資訊 = 課程[島];
        const 章節 = 旅人.章節[島];
        const 答對 = 資訊.題目.filter((題, 索引) => 章節.題目[索引]?.最後 === 題.正解).length;
        return `<article class="路線卡"><div class="路線編號">${章節.通關 ? "✓" : 資訊.編號}</div><div class="路線資訊"><div class="徽章列表"><span class="徽章">${章節.通關 ? "已通關" : 章節.已探索 ? "學習中" : "尚未啟程"}</span><span class="次要文字">${資訊.時間}</span></div><h3>${資訊.名稱}</h3><p>${資訊.目標}</p><div class="知識標籤">${資訊.標籤.map(標籤 => `<span>${標籤}</span>`).join("")}</div><div class="進度軌" role="progressbar" aria-label="${資訊.名稱}挑戰完成度" aria-valuenow="${答對}" aria-valuemin="0" aria-valuemax="3"><div class="進度條" style="width:${答對 / 3 * 100}%"></div></div><small class="次要文字">挑戰答對 ${答對} / 3 題 · 課程停留 ${停留文字(章節.主動秒數)}</small></div><button type="button" class="${章節.通關 ? "次按鈕" : "主按鈕"}" data-island="${島}">${章節.通關 ? "再次探索" : 章節.已探索 ? "繼續學習" : "前往島嶼"} <span aria-hidden="true">↗</span></button></article>`;
      }).join("")}
      ${全通關 ? `<div class="結業卡"><span class="徽章">三座島嶼，全部通關</span><h3>把理解帶回真實世界。</h3><p>你完成了本次九題挑戰。通關是練習紀錄，接下來可以用自己的資料再試一次，或回訪仍感到不確定的概念。</p><button type="button" class="次按鈕" data-page="手冊">打開知識手冊</button></div>` : ""}`;
  }

  function 繪製手冊() {
    const 區塊 = document.getElementById("手冊內容");
    if (!區塊) return;
    const 筆記 = [
      ["01", "平均數", "把資料加總，再除以筆數。", "極端值會影響平均數。比較時記得確認資料單位。", "描述"],
      ["02", "中位數", "排序後位於中間的代表值。", "偶數筆資料，取中間兩筆的平均；不必是原本出現過的數字。", "描述"],
      ["03", "理論機率", "根據機率模型，描述某事件發生的可能性。", "公平骰子的每一面皆為六分之一；獨立投擲的機率不受過去結果影響。", "機率"],
      ["04", "實驗比例", "某結果出現次數，除以總試驗次數。", "比例會波動；增加試驗通常使其穩定，並不保證每次都更接近理論。", "機率"],
      ["05", "樣本平均數", "由一個樣本計算出來的平均數。", "不同樣本可能產生不同平均數；抽樣分配研究的是這些平均數的分布。", "抽樣"],
      ["06", "標準誤", "描述統計量在重複抽樣中的波動大小。", "在本島的隨機抽樣設計下，樣本數增加會降低平均數的標準誤；取樣偏誤則需改善抽樣方式。", "抽樣"]
    ];
    區塊.innerHTML = `<div class="手冊網格">${筆記.map(([編號, 名稱, 定義, 提醒, 島]) => `<article class="手冊卡 卡片"><span class="小標">知識筆記 ${編號}</span><h3>${名稱}</h3><p>${定義}</p><div class="提示框">${提醒}</div><button type="button" class="文字按鈕" data-island="${島}">到${課程[島].名稱}練習 <span aria-hidden="true">↗</span></button></article>`).join("")}</div><div class="提示框"><strong>記得：資料不是只有一個答案。</strong><p>先問資料從哪裡來、測量什麼，再選合適的統計方法。這份展示涵蓋入門概念，並不取代完整課程。</p></div>`;
  }

  function 開啟課程(島) {
    if (!課程[島]) return;
    記錄停留();
    當前島嶼 = 島;
    目前旅人().章節[島].已探索 = true;
    上次計時 = performance.now();
    繪製課程();
    更新總覽();
    儲存紀錄();
    開啟視窗("課程視窗");
    聚焦課程標題();
  }

  function 聚焦課程標題() {
    setTimeout(() => document.getElementById("課程步驟標題")?.focus({ preventScroll: true }), 0);
  }

  function 繪製課程() {
    const 容器 = document.getElementById("課程內容");
    if (!容器 || !當前島嶼) return;
    const 資訊 = 課程[當前島嶼];
    const 步驟 = 實驗[當前島嶼].步驟;
    容器.innerHTML = `<div class="課程抬頭"><span class="小標">學習島嶼 ${資訊.編號} ／ ${資訊.短名}</span><h2 id="課程標題">${資訊.名稱}</h2><p class="課程說明">${資訊.摘要}</p></div><div class="步驟列" role="tablist" aria-label="課程步驟">${步驟名稱.map((名稱, 索引) => `<button type="button" id="課程分頁${索引}" class="步驟按鈕 ${索引 === 步驟 ? "啟用" : ""}" data-step="${索引}" role="tab" aria-selected="${索引 === 步驟}" aria-controls="課程步驟區" tabindex="${索引 === 步驟 ? "0" : "-1"}"><span>${索引 + 1}</span>${名稱}</button>`).join("")}</div><div id="課程步驟區" class="課程版面" role="tabpanel" aria-labelledby="課程分頁${步驟}"><h3 id="課程步驟標題" tabindex="-1">${步驟名稱[步驟]}</h3>${步驟 === 0 ? 繪製概念(資訊) : 步驟 === 1 ? 繪製實驗() : 繪製挑戰()}</div><div class="課程頁尾"><button type="button" class="次按鈕" ${步驟 === 0 ? "data-close=\"課程視窗\"" : `data-step="${步驟 - 1}"`}>${步驟 === 0 ? "返回群島" : "← 上一步"}</button><span class="次要文字">${步驟 + 1} / 3</span>${步驟 < 2 ? `<button type="button" class="主按鈕" data-step="${步驟 + 1}">${步驟 === 0 ? "開始動手實驗" : "前往小小挑戰"} <span aria-hidden="true">→</span></button>` : `<button type="button" class="主按鈕" data-finish>${目前旅人().章節[當前島嶼].通關 ? "帶著印記回群島 ✓" : "檢查挑戰進度"}</button>`}</div>`;
  }

  function 繪製概念(資訊) {
    return `<p class="次要文字">這座島的學習目標：${資訊.目標}</p>${資訊.概念.map(([標題, 內容, 提醒], 索引) => `<article class="概念卡"><span class="小標">觀察 ${String(索引 + 1).padStart(2, "0")}</span><h4>${標題}</h4><p>${內容}</p><div class="提示框">${提醒}</div></article>`).join("")}`;
  }

  function 繪製實驗() {
    if (當前島嶼 === "描述") return 繪製描述實驗();
    if (當前島嶼 === "機率") return 繪製骰子實驗();
    return 繪製抽樣實驗();
  }

  function 繪製描述實驗() {
    const 最後 = 實驗.描述.通勤時間;
    const 分鐘 = [10, 15, 20, 20, 25, 30, 最後];
    const 平均數 = 平均(分鐘);
    return `<div class="實驗面板"><div class="實驗標頭"><div><span class="小標">實驗一 ／ 極端值會拉動誰？</span><p>七位同學，七段通勤。請拉動第七位同學的通勤時間。</p></div><button type="button" class="文字按鈕" data-reset="描述">重設實驗 ↺</button></div><div class="滑桿區"><label for="通勤滑桿">第七位同學的通勤時間 <strong id="通勤讀值">${最後} 分鐘</strong></label><input type="range" id="通勤滑桿" min="35" max="120" step="1" value="${最後}" aria-describedby="通勤提示"><div class="圖表標籤"><span>35 分鐘</span><span>120 分鐘</span></div><p id="通勤提示" class="次要文字">可拖曳滑桿，也可用左右方向鍵調整，每次增加或減少 1 分鐘。</p></div><div class="數據列"><div class="數據卡"><span>平均數</span><strong id="平均讀值">${小數(平均數)}<small> 分鐘</small></strong><span id="平均差值" class="次要文字">${最後 === 35 ? "起始值" : `比起始增加 ${小數(平均數 - 155 / 7)} 分鐘`}</span></div><div class="數據卡"><span>中位數</span><strong>20<small> 分鐘</small></strong><span class="次要文字">排序後的第四筆，維持不變</span></div></div><div id="通勤圖表">${通勤圖表(分鐘)}</div><div class="提示框"><strong>試著觀察</strong><p>把時間拉到 120 分鐘。哪一個代表值改變了？這七筆資料中，中位數固定是 20 分鐘；這是本例的結果，不代表中位數在所有資料調整下都不會變。</p></div><p id="通勤即時摘要" class="無障礙文字" aria-live="polite">平均數 ${小數(平均數)} 分鐘，中位數 20 分鐘。</p></div>`;
  }

  function 通勤圖表(分鐘) {
    return `<div class="圖表標籤"><span>每位同學的通勤時間</span><span>單位：分鐘 · 上限 120</span></div><div class="長條圖" role="img" aria-label="七位同學的通勤時間依序為 ${分鐘.join("、")} 分鐘">${分鐘.map((值, 索引) => `<div class="長條項 ${索引 === 6 ? "強調長條" : ""}"><span class="柱上數值">${值}</span><div class="圖柱"><div class="長條" style="height:${值 / 120 * 100}%"></div></div><span class="長條標籤">同學 ${索引 + 1}</span></div>`).join("")}</div>`;
  }

  function 更新描述實驗(值) {
    實驗.描述.通勤時間 = 值;
    const 分鐘 = [10, 15, 20, 20, 25, 30, 值];
    const 平均數 = 平均(分鐘);
    document.getElementById("通勤讀值").textContent = `${值} 分鐘`;
    document.getElementById("平均讀值").innerHTML = `${小數(平均數)}<small> 分鐘</small>`;
    document.getElementById("平均差值").textContent = 值 === 35 ? "起始值" : `比起始增加 ${小數(平均數 - 155 / 7)} 分鐘`;
    document.getElementById("通勤圖表").innerHTML = 通勤圖表(分鐘);
    document.getElementById("通勤即時摘要").textContent = `平均數 ${小數(平均數)} 分鐘，中位數 20 分鐘。`;
  }

  function 繪製骰子實驗() {
    const 狀態 = 實驗.機率;
    const 總次數 = 狀態.次數.reduce((總和, 次數) => 總和 + 次數, 0);
    const 最大 = Math.max(1, ...狀態.次數);
    const 點數圖示 = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
    return `<div class="實驗面板"><div class="實驗標頭"><div><span class="小標">實驗二 ／ 讓隨機多走幾步</span><p>這顆模擬骰子的六個面機會相同。選擇投擲次數，觀察結果。</p></div><button type="button" class="文字按鈕" data-reset="機率">重設實驗 ↺</button></div><div class="骰子舞台"><div class="骰子面" aria-label="${狀態.最後點數 ? `最後一次為 ${狀態.最後點數} 點` : "尚未投擲"}">${狀態.最後點數 ? 點數圖示[狀態.最後點數 - 1] : "⚄"}</div><div><strong>${狀態.最後點數 ? `最後一次：${狀態.最後點數} 點` : "準備好交給隨機了嗎？"}</strong><p class="次要文字">每次投擲都是一次新的獨立試驗。</p></div></div><div class="工具列"><button type="button" class="主按鈕" data-roll="1">投擲 1 次</button><button type="button" class="次按鈕" data-roll="10">投擲 10 次</button><button type="button" class="次按鈕" data-roll="100">投擲 100 次</button></div><div class="數據列" aria-live="polite"><div class="數據卡"><span>累計投擲</span><strong>${總次數.toLocaleString("zh-TW")}<small> 次</small></strong></div><div class="數據卡"><span>六點的實驗比例</span><strong>${總次數 ? `${小數(狀態.次數[5] / 總次數 * 100)}%` : "—"}</strong><span class="次要文字">${狀態.次數[5]} 次六點 ÷ ${總次數} 次投擲</span></div><div class="數據卡"><span>六點的理論機率</span><strong>16.67<small>%</small></strong><span class="次要文字">六分之一，未因實驗改變</span></div></div><div class="圖表標籤"><span>各面的投擲結果</span><span>柱高依目前最高次數縮放</span></div><div class="長條圖" role="img" aria-label="${狀態.次數.map((次數, 索引) => `${索引 + 1} 點 ${次數} 次`).join("，")}">${狀態.次數.map((次數, 索引) => `<div class="長條項 ${索引 === 5 ? "強調長條" : ""}"><span class="柱上數值">${總次數 ? 小數(次數 / 總次數 * 100, 1) : "0.0"}%</span><div class="圖柱"><div class="長條" style="height:${次數 / 最大 * 100}%"></div></div><span class="長條標籤">${索引 + 1} 點</span><small class="次要文字">${次數} 次</small></div>`).join("")}</div><div class="提示框"><strong>比例可能來回擺動，這也是發現。</strong><p>更多試驗通常讓比例更穩定，但不保證這次比上次更接近六分之一，也不保證短期六個面一定平均出現。</p></div></div>`;
  }

  function 繪製抽樣實驗() {
    const 狀態 = 實驗.抽樣;
    const 紀錄 = 狀態.平均紀錄;
    const 標準誤 = 母體標準差 / Math.sqrt(狀態.樣本數) * Math.sqrt((100 - 狀態.樣本數) / 99);
    const 最新平均 = 紀錄.length ? 紀錄[紀錄.length - 1] : null;
    const 顯示紀錄 = 紀錄.slice(-120);
    const 分桶 = {};
    const 點位 = 顯示紀錄.map(值 => {
      const 桶 = Math.round((值 - 30) / 60 * 48);
      const 層 = 分桶[桶] || 0;
      分桶[桶] = 層 + 1;
      return { 值, 層 };
    });
    const 最多層 = Math.max(5, ...Object.values(分桶));
    return `<div class="實驗面板"><div class="實驗標頭"><div><span class="小標">實驗三 ／ 用一小部分，看見整體</span><p>固定的 100 位模擬學生，各有一個固定分數。每次均勻隨機抽樣，觀察樣本平均數。</p></div><button type="button" class="文字按鈕" data-reset="抽樣">重設實驗 ↺</button></div><div class="工具列"><label for="樣本數選擇">每次抽幾人？</label><select id="樣本數選擇" class="樣本選單">${[5, 20, 50].map(人數 => `<option value="${人數}" ${狀態.樣本數 === 人數 ? "selected" : ""}>${人數} 人</option>`).join("")}</select><button type="button" class="主按鈕" data-sample="1">隨機抽 1 次</button><button type="button" class="次按鈕" data-sample="50">重複抽 50 次</button></div><p class="次要文字">每次抽樣內不重複選人；下一次恢復完整母體。切換人數會重新開始本次實驗，避免混用不同樣本數。</p><div class="數據列" aria-live="polite"><div class="數據卡"><span>固定母體平均數</span><strong>${小數(母體平均)}<small> 分</small></strong><span class="次要文字">100 人，每次實驗都相同</span></div><div class="數據卡"><span>最近一次樣本平均數</span><strong>${最新平均 === null ? "—" : 小數(最新平均)}<small> ${最新平均 === null ? "" : "分"}</small></strong><span class="次要文字">${最新平均 === null ? "等待第一次抽樣" : `與母體相差 ${小數(Math.abs(最新平均 - 母體平均))} 分`}</span></div><div class="數據卡"><span>樣本平均數的標準誤</span><strong>${小數(標準誤)}<small> 分</small></strong><span class="次要文字">依此母體與不放回設計計算</span></div></div><div class="圖表標籤"><span>每個圓點 ＝ 一次樣本的平均數</span><span>已抽樣 ${紀錄.length.toLocaleString("zh-TW")} 次</span></div><div class="抽樣圖" role="img" aria-label="樣本平均數點圖，共 ${紀錄.length} 次，母體平均 ${小數(母體平均)} 分${最新平均 === null ? "，尚無抽樣結果" : `，最近一次平均 ${小數(最新平均)} 分`}"><div class="圖表參考線" style="left:${(母體平均 - 30) / 60 * 100}%"><span>母體平均</span></div>${點位.map(點 => `<span class="抽樣點" style="left:${(點.值 - 30) / 60 * 100}%;bottom:${8 + 點.層 / 最多層 * 70}%" title="樣本平均 ${小數(點.值)} 分"></span>`).join("")}${紀錄.length ? "" : `<span class="圖表空白">按下「隨機抽 1 次」，讓第一個樣本出現。</span>`}</div><div class="圖表標籤"><span>30 分</span><span>樣本平均數</span><span>90 分</span></div>${紀錄.length > 120 ? `<p class="次要文字">圖中呈現最近 120 次；累計次數涵蓋本輪全部 ${紀錄.length} 次抽樣。</p>` : ""}${狀態.最後樣本.length ? `<details class="樣本詳情"><summary>查看最近一次抽到的 ${狀態.樣本數} 人分數</summary><p>${狀態.最後樣本.join("、")} 分</p></details>` : ""}<div class="提示框"><strong>試著比較 5 人與 50 人。</strong><p>各重複抽 50 次，留意圓點有多分散。大樣本通常讓平均數的波動較小，但單次結果仍可能離母體較遠。標準誤描述平均數的抽樣波動，不是個別學生分數的差異；取樣範圍偏誤也不會因人數增加而自動消失。</p></div></div>`;
  }

  function 繪製挑戰() {
    const 資訊 = 課程[當前島嶼];
    const 章節 = 目前旅人().章節[當前島嶼];
    const 答對數 = 資訊.題目.filter((題, 索引) => 章節.題目[索引]?.最後 === 題.正解).length;
    return `<p class="次要文字">三道題目，整理剛剛的發現。答錯可以再試；保留首次作答，讓學習歷程更清楚。</p><div class="挑戰摘要" aria-live="polite">目前答對 <strong>${答對數} / 3</strong> 題${章節.通關 ? " · 已取得本島通關印記 ✓" : ""}</div>${資訊.題目.map((題, 索引) => {
      const 紀錄 = 章節.題目[索引];
      const 已答對 = 紀錄?.最後 === 題.正解;
      return `<article class="題目卡" id="挑戰題${索引}" tabindex="-1"><span class="小標">挑戰 ${String(索引 + 1).padStart(2, "0")} ／ ${題.知識}</span><h4>${題.題幹}</h4><div class="選項列表" role="group" aria-label="第 ${索引 + 1} 題選項">${題.選項.map((選項, 選項索引) => {
        const 已選 = 紀錄?.最後 === 選項索引;
        const 狀態 = 已選 ? 已答對 ? "正確" : "錯誤" : "";
        return `<button type="button" class="選項按鈕 ${狀態}" data-question="${索引}" data-answer="${選項索引}" aria-pressed="${已選}" ${已答對 ? "disabled" : ""}><span class="選項字母">${["甲", "乙", "丙", "丁"][選項索引]}</span><span>${選項}</span>${已選 ? `<span aria-hidden="true">${已答對 ? "✓" : "↺"}</span>` : ""}</button>`;
      }).join("")}</div>${紀錄 ? `<div class="解析 ${已答對 ? "正確" : "錯誤"}" role="status"><strong>${已答對 ? "答對了，觀察得很好！" : "再想一想，可以選另一個答案。"}</strong><p>${題.解析}</p><small>首次作答${紀錄.初答 === 題.正解 ? "答對" : "待釐清"} · 已作答 ${紀錄.作答次數} 次</small></div>` : ""}</article>`;
    }).join("")}${章節.通關 ? `<div class="結業卡"><span class="徽章">本島通關 ✓</span><h3>又多了一種看懂世界的方式。</h3><p>三題最後作答皆正確，已取得${資訊.名稱}的通關印記。你可以回到實驗再觀察，或繼續探索下一座島。</p></div>` : ""}`;
  }

  function 作答(題號, 選項) {
    if (!當前島嶼 || !有效選項(選項)) return;
    const 題 = 課程[當前島嶼].題目[題號];
    if (!題) return;
    const 章節 = 目前旅人().章節[當前島嶼];
    const 既有 = 章節.題目[題號];
    if (既有?.最後 === 題.正解 || 既有?.最後 === 選項) return;
    if (!既有) 章節.題目[題號] = { 初答: 選項, 最後: 選項, 作答次數: 1, 初答時間: new Date().toISOString() };
    else { 既有.最後 = 選項; 既有.作答次數 += 1; }
    const 之前通關 = 章節.通關;
    章節.通關 = 課程[當前島嶼].題目.every((題目, 索引) => 章節.題目[索引]?.最後 === 題目.正解);
    記錄停留();
    儲存紀錄();
    const 視窗 = document.getElementById("課程視窗");
    const 原捲動 = 視窗.scrollTop;
    繪製課程();
    視窗.scrollTop = 原捲動;
    document.getElementById(`挑戰題${題號}`)?.focus({ preventScroll: true });
    更新總覽();
    if (章節.通關 && !之前通關) 提示(`恭喜！已取得${課程[當前島嶼].名稱}的通關印記。`);
  }

  function 記錄操作() {
    if (!當前島嶼) return;
    目前旅人().章節[當前島嶼].操作數 += 1;
    儲存紀錄();
  }

  function 投擲骰子(次數) {
    if (![1, 10, 100].includes(次數)) return;
    for (let 索引 = 0; 索引 < 次數; 索引++) {
      const 點數 = Math.floor(Math.random() * 6) + 1;
      實驗.機率.次數[點數 - 1] += 1;
      實驗.機率.最後點數 = 點數;
    }
    記錄操作();
    重繪實驗並保留焦點(`[data-roll="${次數}"]`);
  }

  function 進行抽樣(次數) {
    if (![1, 50].includes(次數)) return;
    for (let 次 = 0; 次 < 次數; 次++) {
      const 候選 = 母體.slice();
      // 局部洗牌：每個人被抽到的機會相同，同一次抽樣不會重複選人。
      for (let 索引 = 0; 索引 < 實驗.抽樣.樣本數; 索引++) {
        const 隨機位置 = 索引 + Math.floor(Math.random() * (候選.length - 索引));
        [候選[索引], 候選[隨機位置]] = [候選[隨機位置], 候選[索引]];
      }
      實驗.抽樣.最後樣本 = 候選.slice(0, 實驗.抽樣.樣本數);
      實驗.抽樣.平均紀錄.push(平均(實驗.抽樣.最後樣本));
    }
    記錄操作();
    重繪實驗並保留焦點(`[data-sample="${次數}"]`);
  }

  function 重繪實驗並保留焦點(選擇器) {
    const 視窗 = document.getElementById("課程視窗");
    const 捲動 = 視窗.scrollTop;
    繪製課程();
    視窗.scrollTop = 捲動;
    document.querySelector(選擇器)?.focus({ preventScroll: true });
  }

  function 重設實驗(島) {
    if (島 !== 當前島嶼) return;
    if (島 === "描述") 實驗.描述.通勤時間 = 35;
    if (島 === "機率") { 實驗.機率.次數 = [0, 0, 0, 0, 0, 0]; 實驗.機率.最後點數 = null; }
    if (島 === "抽樣") { 實驗.抽樣.平均紀錄 = []; 實驗.抽樣.最後樣本 = []; }
    重繪實驗並保留焦點(`[data-reset="${島}"]`);
    提示("本次實驗已回到起點；學習進度和作答紀錄會繼續保留。");
  }

  function 記錄停留() {
    const 現在 = performance.now();
    const 間隔秒數 = Math.min((現在 - 上次計時) / 1000, 5);
    上次計時 = 現在;
    if (!當前島嶼 || !document.getElementById("課程視窗")?.open || document.hidden) return;
    目前旅人().章節[當前島嶼].主動秒數 += Math.max(0, 間隔秒數);
    待儲存秒數 += 間隔秒數;
    if (待儲存秒數 >= 5) { 儲存紀錄(); 待儲存秒數 = 0; }
  }

  function 繪製旅人列表() {
    const 列表 = document.getElementById("旅人列表");
    if (!列表) return;
    列表.innerHTML = `<p class="次要文字">本機角色共 ${資料.旅人.length} 位。選擇角色後，會顯示該角色在這台裝置上的紀錄。</p>${資料.旅人.map(旅人 => `<button type="button" class="旅人選項 ${旅人.識別碼 === 資料.目前旅人 ? "啟用" : ""}" data-learner-id="${跳脫(旅人.識別碼)}"><span class="旅人頭像">${跳脫(Array.from(旅人.名稱)[0])}</span><span>${跳脫(旅人.名稱)}</span><small>${旅人.識別碼 === 資料.目前旅人 ? "目前使用中 ✓" : "切換角色"}</small></button>`).join("")}`;
  }

  function 切換旅人(識別碼) {
    const 旅人 = 資料.旅人.find(人 => 人.識別碼 === 識別碼);
    if (!旅人) return;
    記錄停留();
    document.getElementById("課程視窗")?.close();
    當前島嶼 = null;
    資料.目前旅人 = 識別碼;
    實驗 = 建立實驗狀態();
    儲存紀錄();
    更新總覽();
    繪製旅人列表();
    document.getElementById("旅人視窗")?.close();
    提示(`已切換為${旅人.名稱}。這是本機學習角色，不是雲端帳號。`);
  }

  function 學習統計(旅人) {
    let 已答 = 0, 初次正確 = 0, 作答次數 = 0, 主動秒數 = 0, 操作數 = 0;
    島嶼順序.forEach(島 => {
      const 章節 = 旅人.章節[島];
      主動秒數 += 章節.主動秒數;
      操作數 += 章節.操作數;
      課程[島].題目.forEach((題, 索引) => {
        const 紀錄 = 章節.題目[索引];
        if (!紀錄) return;
        已答 += 1;
        if (紀錄.初答 === 題.正解) 初次正確 += 1;
        作答次數 += 紀錄.作答次數;
      });
    });
    return { 已答, 初次正確, 作答次數, 主動秒數, 操作數, 通關數: 島嶼順序.filter(島 => 旅人.章節[島].通關).length };
  }

  function 建立範例班級() {
    return ["晨曦", "小禾", "星野", "阿澄", "沐青", "小嶼"].map((名稱, 人序) => {
      const 旅人 = 建立旅人(名稱);
      島嶼順序.forEach((島, 島序) => {
        if (島序 > 1 && 人序 % 3 === 0) return;
        const 章節 = 旅人.章節[島];
        章節.已探索 = true;
        章節.主動秒數 = 180 + 人序 * 37 + 島序 * 61;
        章節.操作數 = 3 + (人序 + 島序) % 5;
        課程[島].題目.forEach((題, 題序) => {
          if (人序 === 2 && 島序 === 2 && 題序 > 0) return;
          const 首答對 = (人序 + 題序 * 2 + 島序) % 4 !== 0 && !(島序 === 2 && 題序 === 2 && 人序 < 4);
          const 最後答對 = 首答對 || 人序 % 3 !== 1;
          章節.題目[題序] = { 初答: 首答對 ? 題.正解 : (題.正解 + 1) % 4, 最後: 最後答對 ? 題.正解 : (題.正解 + 1) % 4, 作答次數: 首答對 ? 1 : 最後答對 ? 2 : 1, 初答時間: "範例資料" };
        });
        章節.通關 = 課程[島].題目.every((題, 索引) => 章節.題目[索引]?.最後 === 題.正解);
      });
      return 旅人;
    });
  }

  function 繪製教師() {
    const 區塊 = document.getElementById("教師內容");
    if (!區塊) return;
    const 是範例 = 教師模式 === "範例";
    const 旅人們 = 是範例 ? 建立範例班級() : 資料.旅人;
    const 統計們 = 旅人們.map(學習統計);
    const 合計 = 欄位 => 統計們.reduce((總和, 統計) => 總和 + 統計[欄位], 0);
    const 已答總數 = 合計("已答");
    const 難點 = [];
    島嶼順序.forEach(島 => 課程[島].題目.forEach((題, 索引) => {
      let 已答 = 0, 錯誤 = 0;
      旅人們.forEach(旅人 => {
        const 答 = 旅人.章節[島].題目[索引];
        if (!答) return;
        已答 += 1;
        if (答.初答 !== 題.正解) 錯誤 += 1;
      });
      if (錯誤) 難點.push({ 名稱: 題.知識, 島, 已答, 錯誤 });
    }));
    難點.sort((甲, 乙) => 乙.錯誤 / 乙.已答 - 甲.錯誤 / 甲.已答 || 乙.錯誤 - 甲.錯誤);
    區塊.innerHTML = `<div class="教師工具列"><div class="切換組" role="group" aria-label="選擇紀錄來源"><button type="button" class="${是範例 ? "" : "啟用"}" aria-pressed="${!是範例}" data-teacher="本機">本機學習紀錄</button><button type="button" class="${是範例 ? "啟用" : ""}" aria-pressed="${是範例}" data-teacher="範例">範例班級</button></div><button type="button" class="次按鈕" data-export>匯出本機紀錄 ↓</button></div>${是範例 ? `<div class="範例提示"><strong>目前顯示模擬資料，並非真實學生紀錄。</strong><p>這 6 位範例學生僅展示教師介面，不與你的本機資料混算，匯出內容也不包含範例班級。</p></div>` : `<div class="提示框"><strong>資料來源：這台裝置的本機學習紀錄。</strong><p>本頁沒有教師帳號驗證，也沒有雲端班級。角色名稱、進度和答題紀錄只保存在目前瀏覽器；${可以儲存 ? "請使用同一裝置與瀏覽器查看。" : "本機儲存目前無法使用，本次紀錄只暫存在開啟的頁面裡。"}</p></div>`}<div class="教師統計"><article class="數據卡"><span>${是範例 ? "範例學生" : "本機學習角色"}</span><strong>${旅人們.length}<small> 位</small></strong></article><article class="數據卡"><span>已通關島嶼</span><strong>${合計("通關數")}<small> / ${旅人們.length * 3}</small></strong></article><article class="數據卡"><span>首次答對率</span><strong>${已答總數 ? 百分比(合計("初次正確"), 已答總數) : "—"}</strong><span class="次要文字">${合計("初次正確")} / ${已答總數} 筆已答首次題</span></article><article class="數據卡"><span>累計課程停留</span><strong>${Math.floor(合計("主動秒數") / 60)}<small> 分鐘</small></strong><span class="次要文字">頁面分頁隱藏時不累計</span></article></div>${已答總數 === 0 ? `<div class="空狀態"><div class="空狀態圖示" aria-hidden="true">◌</div><h3>每一次探索，都會留下線索。</h3><p>目前還沒有作答紀錄。完成一座島的小小挑戰後，就能在這裡看到首次作答與概念難點；也可切換範例班級，預覽教學觀察方式。</p><div class="工具列"><button type="button" class="主按鈕" data-island="描述">先去探索一座島</button><button type="button" class="次按鈕" data-teacher="範例">看看範例班級</button></div></div>` : ""}<article class="卡片 教師紀錄卡"><div class="實驗標頭"><div><span class="小標">學習旅程</span><h3>看見每位旅人的腳步</h3></div><span class="徽章">${是範例 ? "模擬資料" : "本機紀錄"}</span></div><div class="表格容器"><table class="教師表格"><caption class="無障礙文字">${是範例 ? "範例班級模擬" : "本機"}學習紀錄</caption><thead><tr><th scope="col">學習角色</th><th scope="col">島嶼通關</th><th scope="col">首次答對</th><th scope="col">總作答次數</th><th scope="col">實驗操作</th><th scope="col">課程停留</th></tr></thead><tbody>${旅人們.map((旅人, 索引) => {
      const 統計 = 統計們[索引];
      return `<tr><th scope="row">${跳脫(旅人.名稱)}${!是範例 && 旅人.識別碼 === 資料.目前旅人 ? '<small class="目前角色">目前角色</small>' : ""}</th><td>${統計.通關數} / 3</td><td>${統計.已答 ? `${百分比(統計.初次正確, 統計.已答)}<small>（${統計.初次正確} / ${統計.已答} 題）</small>` : "尚未作答"}</td><td>${統計.作答次數}</td><td>${統計.操作數} 次</td><td>${停留文字(統計.主動秒數)}</td></tr>`;
    }).join("")}</tbody></table></div></article><article class="卡片 教師紀錄卡"><span class="小標">教學線索</span><h3>哪些概念，值得再停一會？</h3>${難點.length ? `<div class="難點列表">${難點.slice(0, 5).map(項目 => `<div class="難點項"><div><strong>${項目.名稱}</strong><small class="次要文字">${課程[項目.島].名稱} · ${項目.已答} 位已首次作答</small></div><div class="難點進度"><div class="進度軌"><div class="進度條" style="width:${項目.錯誤 / 項目.已答 * 100}%"></div></div><small>${項目.錯誤} / ${項目.已答} 位首次待釐清</small></div><button type="button" class="文字按鈕" data-island="${項目.島}">前往複習 ↗</button></div>`).join("")}</div>` : `<p class="次要文字">${已答總數 ? "目前已答的首次題目皆正確，仍可透過新情境題確認理解。" : "有首次答錯的紀錄後，這裡會整理可能需要再解釋的概念。"}</p>`}</article><div class="提示框"><strong>把數據當線索，和學生多聊一步。</strong><p>首次答對率的分母只包含已作答的首次題目，未答題不視為答錯。通關表示三題最後作答正確；操作次數是操作紀錄；課程停留只代表課程視窗開啟且分頁可見的時間，均不能直接判定已學會。這份紀錄也不能當作前後測的學習進步量。</p></div>`;
  }

  function 匯出紀錄() {
    記錄停留();
    const 匯出資料 = {
      說明: "統計群島教學展示版本機學習紀錄",
      資料來源: "目前裝置與瀏覽器中的本機角色；不含範例班級，沒有雲端同步或帳號驗證",
      匯出時間: new Date().toISOString(),
      本機儲存可用: 可以儲存,
      指標定義: { 首次答對率: "首次答對題數除以已答首次題數；未答題不計入分母", 通關: "該島三題最後答案皆正確", 主動秒數: "課程視窗開啟且頁面分頁可見的累計秒數", 操作數: "互動實驗操作次數，不代表已學會", 選項編號: "從零開始，零至三依序對應甲、乙、丙、丁" },
      題目定義: Object.fromEntries(島嶼順序.map(島 => [島, 課程[島].題目])),
      目前旅人: 資料.目前旅人,
      旅人: 資料.旅人.map(旅人 => ({ ...旅人, 統計: 學習統計(旅人) }))
    };
    const 檔案 = new Blob([JSON.stringify(匯出資料, null, 2)], { type: "application/json;charset=utf-8" });
    const 網址 = URL.createObjectURL(檔案);
    const 連結 = document.createElement("a");
    連結.href = 網址;
    連結.download = `統計群島學習紀錄_${new Date().toLocaleDateString("sv-SE", { timeZone: "Asia/Taipei" })}.json`;
    document.body.append(連結);
    連結.click();
    連結.remove();
    setTimeout(() => URL.revokeObjectURL(網址), 1000);
    提示("已準備下載本機學習紀錄；範例班級不包含在匯出資料中。");
  }

  function 切換步驟(步驟, 聚焦分頁 = false) {
    if (!當前島嶼 || !Number.isInteger(步驟) || 步驟 < 0 || 步驟 > 2) return;
    實驗[當前島嶼].步驟 = 步驟;
    繪製課程();
    document.getElementById("課程視窗").scrollTop = 0;
    if (聚焦分頁) document.getElementById(`課程分頁${步驟}`)?.focus({ preventScroll: true });
    else 聚焦課程標題();
  }

  function 啟動() {
    document.addEventListener("click", 事件 => {
      const 目標 = 事件.target instanceof Element ? 事件.target : null;
      if (!目標) return;
      const 按鈕 = 目標.closest("button, [data-page], [data-island], [data-continue], [data-open], [data-close]");
      if (!按鈕 || 按鈕.disabled) return;
      if (按鈕.dataset.page) { 事件.preventDefault(); return 切換頁面(按鈕.dataset.page); }
      if (按鈕.dataset.island) return 開啟課程(按鈕.dataset.island);
      if (按鈕.hasAttribute("data-continue")) return 開啟課程(島嶼順序.find(島 => !目前旅人().章節[島].通關) || "描述");
      if (按鈕.dataset.open) return 開啟視窗(按鈕.dataset.open);
      if (按鈕.dataset.close) { 記錄停留(); document.getElementById(按鈕.dataset.close)?.close(); return; }
      if (按鈕.dataset.step !== undefined) return 切換步驟(Number(按鈕.dataset.step));
      if (按鈕.dataset.roll) return 投擲骰子(Number(按鈕.dataset.roll));
      if (按鈕.dataset.sample) return 進行抽樣(Number(按鈕.dataset.sample));
      if (按鈕.dataset.reset) return 重設實驗(按鈕.dataset.reset);
      if (按鈕.dataset.question !== undefined) return 作答(Number(按鈕.dataset.question), Number(按鈕.dataset.answer));
      if (按鈕.dataset.learnerId) return 切換旅人(按鈕.dataset.learnerId);
      if (按鈕.dataset.teacher) {
        教師模式 = 按鈕.dataset.teacher === "範例" ? "範例" : "本機";
        繪製教師();
        // 重繪會替換原本的按鈕，重新聚焦，讓鍵盤使用者能接著操作。
        document.querySelector(`[data-teacher="${教師模式}"]`)?.focus({ preventScroll: true });
        return;
      }
      if (按鈕.hasAttribute("data-export")) return 匯出紀錄();
      if (按鈕.hasAttribute("data-finish") && 當前島嶼) {
        if (目前旅人().章節[當前島嶼].通關) document.getElementById("課程視窗").close();
        else {
          const 題號 = 課程[當前島嶼].題目.findIndex((題, 索引) => 目前旅人().章節[當前島嶼].題目[索引]?.最後 !== 題.正解);
          document.getElementById(`挑戰題${題號}`)?.focus();
          提示("還有題目可以再想一想。三題最後都答對，就能取得本島印記。");
        }
      }
    });

    document.addEventListener("input", 事件 => {
      if (事件.target.id === "通勤滑桿") 更新描述實驗(Math.min(120, Math.max(35, Number(事件.target.value))));
    });

    document.addEventListener("change", 事件 => {
      if (事件.target.id === "通勤滑桿") 記錄操作();
      if (事件.target.id === "樣本數選擇") {
        const 人數 = Number(事件.target.value);
        if (![5, 20, 50].includes(人數)) return;
        實驗.抽樣.樣本數 = 人數;
        實驗.抽樣.平均紀錄 = [];
        實驗.抽樣.最後樣本 = [];
        記錄操作();
        重繪實驗並保留焦點("#樣本數選擇");
        提示(`已改為每次抽 ${人數} 人；此輪實驗結果重新開始。`);
      }
    });

    document.addEventListener("keydown", 事件 => {
      const 分頁 = 事件.target.closest?.('[role="tab"][data-step]');
      if (!分頁 || !["ArrowLeft", "ArrowRight", "Home", "End"].includes(事件.key)) return;
      事件.preventDefault();
      const 原步驟 = Number(分頁.dataset.step);
      const 新步驟 = 事件.key === "Home" ? 0 : 事件.key === "End" ? 2 : (原步驟 + (事件.key === "ArrowRight" ? 1 : 2)) % 3;
      切換步驟(新步驟, true);
    });

    document.getElementById("旅人表單")?.addEventListener("submit", 事件 => {
      事件.preventDefault();
      const 輸入 = document.getElementById("旅人名稱");
      const 名稱 = 輸入.value.trim().slice(0, 20);
      if (!名稱) { 輸入.setCustomValidity("請先輸入一個本機角色名稱。"); 輸入.reportValidity(); return; }
      輸入.setCustomValidity("");
      const 既有 = 資料.旅人.find(人 => 人.名稱 === 名稱);
      if (既有) { 輸入.value = ""; 切換旅人(既有.識別碼); return; }
      if (資料.旅人.length >= 100) { 提示("這個展示最多支援 100 個本機角色，請先選擇現有角色。"); return; }
      const 新旅人 = 建立旅人(名稱);
      資料.旅人.push(新旅人);
      輸入.value = "";
      切換旅人(新旅人.識別碼);
    });
    document.getElementById("旅人名稱")?.addEventListener("input", 事件 => 事件.target.setCustomValidity(""));

    document.getElementById("課程視窗")?.addEventListener("close", () => {
      // 關閉事件發生時視窗已關閉，前一秒以內的最後零頭不額外計入。
      儲存紀錄();
      更新總覽();
    });
    document.getElementById("課程視窗")?.addEventListener("cancel", 記錄停留);
    document.querySelectorAll("dialog").forEach(視窗 => 視窗.addEventListener("close", 更新視窗狀態));
    document.addEventListener("visibilitychange", () => {
      上次計時 = performance.now();
      儲存紀錄();
    });
    window.addEventListener("pagehide", () => { 記錄停留(); 儲存紀錄(); });
    setInterval(記錄停留, 1000);
    繪製手冊();
    更新總覽();
    切換頁面("探索");
    儲存紀錄();
    if (!可以儲存) 提示("本機儲存暫時無法使用。你仍然可以體驗；關閉頁面後本次進度可能不會保留。");
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", 啟動);
  else 啟動();
})();
