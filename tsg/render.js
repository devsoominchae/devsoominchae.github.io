// 공개 페이지 공통: data.js(SITE_DATA)를 읽어 화면에 그린다.
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// 현장 사진: <img> + 관리자가 지정한 초점(--px, --py)과 확대(--z)
const num = (v, d) => (Number.isFinite(Number(v)) && v !== "" && v != null ? Number(v) : d);
const photoVars = (p) => `--px:${num(p.imageX, 50)}%;--py:${num(p.imageY, 50)}%;--z:${num(p.imageZoom, 1)}`;
const photoImg = (p) => (p.image ? `<img class="photo" src="${esc(encodeURI(p.image))}" alt="${esc(p.name)} 현장 사진" loading="lazy">` : "");

(function () {
  const productGrid = document.getElementById("productGrid");
  if (productGrid) {
    productGrid.innerHTML = SITE_DATA.products.map((p) => `
      <article class="card">
        <div class="ico"><svg viewBox="0 0 24 24">${(ICONS[p.icon] || ICONS.layers).d}</svg></div>
        <h3>${esc(p.name)}</h3>
        <p>${esc(p.desc)}</p>
      </article>`).join("");
  }

  const projectGrid = document.getElementById("projectGrid");
  if (projectGrid) {
    projectGrid.innerHTML = SITE_DATA.projects.map((p, i) => `
      <a class="project" href="project.html?id=${i + 1}" style="--h:${Number(p.hue) || 210}">
        <div class="thumb${p.image ? " has-img" : ""}" style="${photoVars(p)}">
          ${photoImg(p)}
          <span class="idx">${String(i + 1).padStart(2, "0")}</span>
          <span class="tag">${esc(p.type)}</span>
        </div>
        <div class="body">
          <h3>${esc(p.name)}</h3>
          <p class="meta">${esc(p.place)} · ${esc(p.year)} · ${esc(p.scale)}</p>
          <ul>${(p.items || []).map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
          <span class="more">자세히 보기 →</span>
        </div>
      </a>`).join("");
  }
})();
