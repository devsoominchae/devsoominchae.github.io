const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// 스크롤 등장 효과
document.querySelectorAll(".card, .str, .project, .steps li, .contact-box").forEach((el) => el.classList.add("reveal"));
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }),
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// 숫자 카운트업
const countIo = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    const el = e.target, end = +el.dataset.count, suffix = el.dataset.suffix || "";
    const start = performance.now(), dur = 1400;
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))).toLocaleString() + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    countIo.unobserve(el);
  });
}, { threshold: 0.5 });
document.querySelectorAll("[data-count]").forEach((el) => countIo.observe(el));

// 포인터(마우스/터치) 위치를 따라다니는 밝은 스포트라이트
const spot = document.querySelector(".spotlight");
let hideTimer;
const move = (e) => {
  spot.style.setProperty("--mx", e.clientX + "px");
  spot.style.setProperty("--my", e.clientY + "px");
  spot.classList.add("on");
  clearTimeout(hideTimer);
  if (e.pointerType === "touch") hideTimer = setTimeout(() => spot.classList.remove("on"), 900);
};
window.addEventListener("pointermove", move, { passive: true });
window.addEventListener("pointerdown", move, { passive: true });
document.addEventListener("pointerleave", () => spot.classList.remove("on"));
window.addEventListener("pointerup", (e) => { if (e.pointerType === "touch") hideTimer = setTimeout(() => spot.classList.remove("on"), 600); });
