// project.html?id=N 로 접근하면 PROJECTS[N-1]의 상세 내용을 그린다.
const root = document.getElementById("detail");
const id = parseInt(new URLSearchParams(location.search).get("id"), 10);
const PROJECTS = SITE_DATA.projects;
const p = PROJECTS[id - 1];

if (!p) {
  root.innerHTML = `<section class="section"><div class="wrap" style="padding-top:80px">
    <h2>현장을 찾을 수 없습니다</h2><p class="sub"><a href="index.html#projects" class="link">납품 실적 목록으로 돌아가기</a></p></div></section>`;
} else {
  document.title = `${p.name} | TSG 납품 실적`;
  const gallery = (p.gallery || []).filter((g) => g && g.src);
  const prev = PROJECTS[id - 2], next = PROJECTS[id];
  const pad = (n) => String(n).padStart(2, "0");
  root.innerHTML = `
  <section class="d-hero" style="--h:${Number(p.hue) || 210}">
    <div class="grid-bg"></div>
    <div class="wrap d-hero-inner">
      <span class="tag">${esc(p.type)}</span>
      <h1>${esc(p.name)}</h1>
      <p class="lead">${esc(p.desc)}</p>
    </div>
  </section>

  <section class="section d-body">
    <div class="wrap">
      <dl class="facts">
        <div><dt>발주처 / 시공</dt><dd>${esc(p.client)}</dd></div>
        <div><dt>위치</dt><dd>${esc(p.place)}</dd></div>
        <div><dt>공사 기간</dt><dd>${esc(p.period)}</dd></div>
        <div><dt>규모</dt><dd>${esc(p.scale)}</dd></div>
      </dl>

      <div class="d-cols">
        <div>
          <h3 class="d-h">현장 과제</h3>
          <p class="d-p">${esc(p.challenge)}</p>
          <h3 class="d-h">TSG의 해결 방법</h3>
          <p class="d-p">${esc(p.solution)}</p>
        </div>
        <div>
          <h3 class="d-h">납품 자재</h3>
          <table class="supply">
            ${(p.supplies || []).map((s) => `<tr><th>${esc(s.n)}</th><td>${esc(s.q)}</td></tr>`).join("")}
          </table>
        </div>
      </div>

      <h3 class="d-h">성과</h3>
      <ul class="results">${(p.results || []).map((r) => `<li>${esc(r)}</li>`).join("")}</ul>

      ${gallery.length ? `
      <h3 class="d-h">현장 갤러리 <small class="cnt">${gallery.length}장</small></h3>
      <div class="gallery">${gallery.map((g, i) => `
        <figure data-i="${i}"><img src="${esc(encodeURI(g.src))}" alt="${esc(g.cap || p.name + " 현장 사진 " + (i + 1))}" loading="lazy">${g.cap ? `<figcaption>${esc(g.cap)}</figcaption>` : ""}</figure>`).join("")}
      </div>` : ""}

      <div class="pager">
        ${prev ? `<a href="project.html?id=${id - 1}"><small>← 이전 현장</small>${pad(id - 1)} ${esc(prev.name)}</a>` : "<span></span>"}
        ${next ? `<a class="r" href="project.html?id=${id + 1}"><small>다음 현장 →</small>${pad(id + 1)} ${esc(next.name)}</a>` : "<span></span>"}
      </div>
      <p class="back"><a href="index.html#projects" class="btn btn-ghost-dark">전체 납품 실적 보기</a></p>
    </div>
  </section>`;
}

// 갤러리 라이트박스 (클릭 확대 / 좌우 이동 / ESC 닫기 / 스와이프)
(function () {
  const items = document.querySelectorAll(".gallery figure");
  if (!items.length) return;
  const lb = document.createElement("div");
  lb.className = "lb"; lb.hidden = true;
  lb.innerHTML = '<button class="lb-x" aria-label="닫기">✕</button><button class="lb-p" aria-label="이전">‹</button><button class="lb-n" aria-label="다음">›</button><figure><img alt=""><figcaption></figcaption></figure>';
  document.body.append(lb);
  const im = lb.querySelector("img"), cap = lb.querySelector("figcaption");
  let cur = 0;
  const show = (i) => {
    cur = (i + items.length) % items.length;
    const src = items[cur].querySelector("img");
    im.src = src.src; im.alt = src.alt;
    cap.textContent = (items[cur].querySelector("figcaption")?.textContent || "") + (items.length > 1 ? `  (${cur + 1} / ${items.length})` : "");
  };
  const open = (i) => { show(i); lb.hidden = false; document.body.style.overflow = "hidden"; };
  const close = () => { lb.hidden = true; document.body.style.overflow = ""; };
  items.forEach((f, i) => f.addEventListener("click", () => open(i)));
  lb.querySelector(".lb-x").onclick = close;
  lb.querySelector(".lb-p").onclick = () => show(cur - 1);
  lb.querySelector(".lb-n").onclick = () => show(cur + 1);
  lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(cur - 1);
    if (e.key === "ArrowRight") show(cur + 1);
  });
  let x0 = null;
  lb.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", (e) => { if (x0 == null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 50) show(cur + (dx < 0 ? 1 : -1)); x0 = null; });
})();
