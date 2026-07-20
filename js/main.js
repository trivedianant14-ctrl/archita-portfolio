/* ============================================================
   Archita Jaiswal portfolio — interactions
   ============================================================ */

// ---------- motion preferences ----------
const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;

// ---------- gallery data ----------
const GALLERY = [
  // crafts
  { src: "assets/craft-elephants-fence.jpeg",  cat: "craft",  cap: "A herd of Dhuniya elephants drying on the village fence" },
  { src: "assets/craft-elephant-red.jpeg",     cat: "craft",  cap: "Hand-embroidered elephant, Khetha Khuri stitchwork" },
  { src: "assets/craft-elephant-blue.jpeg",    cat: "craft",  cap: "Sky-blue elephant against the betel palms" },
  { src: "assets/craft-elephant-pink.jpeg",    cat: "craft",  cap: "Every tail braided by hand" },
  { src: "assets/craft-elephants-grass.jpeg",  cat: "craft",  cap: "The herd grazing — quality check in progress" },
  { src: "assets/craft-elephant-green.jpeg",   cat: "craft",  cap: "Cross-stitch detailing on a green elephant" },
  { src: "assets/craft-elephant-tag.jpeg",     cat: "craft",  cap: "Tagged and ready for the Manas souvenir shop" },
  { src: "assets/craft-keychain-hand.jpeg",    cat: "craft",  cap: "Elephant keychain — small craft, real income" },
  { src: "assets/craft-shirt-white.jpeg",      cat: "craft",  cap: "Hand-embroidered shirt — one of 9+ new products" },
  { src: "assets/craft-shirt-teal.jpeg",       cat: "craft",  cap: "A guitar stitched on a pocket, artisan's choice" },
  { src: "assets/dhuniya-logo.jpeg",           cat: "craft",  cap: "Dhuniya Crafts — the brand we built together" },
  // field
  { src: "assets/work-women-group-film.jpeg",  cat: "field",  cap: "Artisan circle being filmed for Dhuniya's story, Assam" },
  { src: "assets/work-painting-workshop.jpeg", cat: "field",  cap: "Product design workshop with village youth" },
  { src: "assets/work-keychain-youth.jpeg",    cat: "field",  cap: "Young makers show off their first keychains" },
  { src: "assets/work-gamosa-honor.jpeg",      cat: "field",  cap: "Honoured with the gamosa — Assam's warmest thank-you" },
  { src: "assets/work-certificate.jpeg",       cat: "field",  cap: "Certificates for artisans who completed training" },
  { src: "assets/work-sbi-stage.jpeg",         cat: "field",  cap: "Fellowship graduation — SBI Foundation, cohort 2024–25" },
  { src: "assets/work-exhibition.jpeg",        cat: "field",  cap: "Pitching Dhuniya Crafts at the empowerment exhibition" },
  { src: "assets/work-village-meeting-1.jpeg", cat: "field",  cap: "Gram Vikas Samiti meeting, Khargone district, MP" },
  { src: "assets/work-village-meeting-2.jpeg", cat: "field",  cap: "Village development committee — HRDP 2.0" },
  { src: "assets/work-village-meeting-3.jpeg", cat: "field",  cap: "Committee meeting at the temple courtyard, Maheshwar" },
  { src: "assets/work-village-meeting-4.jpeg", cat: "field",  cap: "Listening first — the real baseline survey" },
  { src: "assets/work-village-meeting-5.jpeg", cat: "field",  cap: "Women's circle under the brick veranda" },
  { src: "assets/work-sanitation-1.jpeg",      cat: "field",  cap: "Sanitation infrastructure visit with the village team" },
  { src: "assets/work-water-unit.jpeg",        cat: "field",  cap: "Checking the community water unit" },
  { src: "assets/about-flute-village.jpeg",    cat: "field",  cap: "Flute lessons from the village's toughest critics" },
  // moments
  { src: "assets/about-assam-saree.jpeg",      cat: "moment", cap: "In Assamese silk, at home in the village" },
  { src: "assets/about-flute-portrait.jpeg",   cat: "moment", cap: "With the bamboo flute and an Assamese stole" },
  { src: "assets/about-saree-portrait.jpeg",   cat: "moment", cap: "Chanderi silk, between field visits" },
  { src: "assets/moment-kamakhya-temple.jpeg", cat: "moment", cap: "Kamakhya temple, Guwahati" },
  { src: "assets/moment-maheshwar-fort.jpeg",  cat: "moment", cap: "Ahilya Fort ghats, Maheshwar — where the sarees are born" },
  { src: "assets/moment-ahilyabai.jpeg",       cat: "moment", cap: "With Ahilyabai Holkar — patron saint of Maheshwari weaves" },
  { src: "assets/moment-hinglaj-temple.jpeg",  cat: "moment", cap: "Hinglaj Mata temple, Maheshwar" },
  { src: "assets/moment-shokhuvi-station.jpeg",cat: "moment", cap: "Shokhuvi station, Nagaland — the long way to work" },
  { src: "assets/moment-milestone.jpeg",       cat: "moment", cap: "Kilometre zero — every journey starts somewhere" },
  { src: "assets/moment-hills.jpeg",           cat: "moment", cap: "Watching the clouds roll over the hills" },
  // videos
  { src: "assets/video-craft-1.mp4", cat: "video", type: "video", cap: "Inside the craft centre — stitching in progress" },
  { src: "assets/video-craft-2.mp4", cat: "video", type: "video", cap: "The making of a Dhuniya elephant" },
  { src: "assets/video-craft-3.mp4", cat: "video", type: "video", cap: "Artisans at work" },
  { src: "assets/video-craft-4.mp4", cat: "video", type: "video", cap: "Field notes on film" },
];

// ---------- build gallery ----------
const grid = document.getElementById("galleryGrid");
GALLERY.forEach((item, i) => {
  const tile = document.createElement("figure");
  tile.className = "tile" + (item.type === "video" ? " tile--video" : "");
  tile.dataset.cat = item.cat;
  tile.dataset.index = i;
  if (item.type === "video") {
    tile.innerHTML = `<div class="tile__vplace">🐘<span>${item.cap}</span></div>
      <figcaption class="tile__cap">Click to play</figcaption>`;
  } else {
    const thumb = item.src.replace("assets/", "assets/thumbs/");
    tile.innerHTML = `<img src="${thumb}" alt="${item.cap}" loading="lazy">
      <figcaption class="tile__cap">${item.cap}</figcaption>`;
  }
  tile.addEventListener("click", () => openLightbox(i));
  grid.appendChild(tile);
});

// ---------- highlights reel ----------
const REEL_PICKS = [
  "assets/craft-elephants-fence.jpeg",
  "assets/about-flute-village.jpeg",
  "assets/work-women-group-film.jpeg",
  "assets/craft-elephant-red.jpeg",
  "assets/work-gamosa-honor.jpeg",
  "assets/work-painting-workshop.jpeg",
  "assets/about-assam-saree.jpeg",
  "assets/work-keychain-youth.jpeg",
  "assets/craft-shirt-teal.jpeg",
  "assets/work-exhibition.jpeg",
  "assets/work-sbi-stage.jpeg",
  "assets/work-village-meeting-3.jpeg",
  "assets/moment-maheshwar-fort.jpeg",
  "assets/moment-milestone.jpeg",
];
const CAT_LABEL = { craft: "Crafts", field: "In the Field", moment: "Moments", video: "Videos" };
const reelItems = REEL_PICKS
  .map(src => GALLERY.findIndex(g => g.src === src))
  .filter(i => i >= 0);

const reel = document.getElementById("reel");
const reelStage = document.getElementById("reelStage");
const reelBar = document.getElementById("reelBar");
const reelTag = document.getElementById("reelTag");
const reelCap = document.getElementById("reelCap");
const reelCount = document.getElementById("reelCount");
const SLIDE_MS = 5200;
let ri = 0, reelTimer = null, reelPaused = false, reelInView = false;

// build slides
reelItems.forEach((gi, i) => {
  const slide = document.createElement("div");
  slide.className = "reel__slide";
  slide.innerHTML = `<img src="${GALLERY[gi].src}" alt="${GALLERY[gi].cap}" class="${i % 2 ? "kb-b" : "kb-a"}" ${i > 1 ? 'loading="lazy"' : ""}>`;
  reelStage.insertBefore(slide, reelStage.querySelector(".reel__progress"));
});
const slides = reelStage.querySelectorAll(".reel__slide");

function showSlide(i) {
  ri = (i + slides.length) % slides.length;
  slides.forEach((s, j) => s.classList.toggle("is-active", j === ri));
  const item = GALLERY[reelItems[ri]];
  reelTag.textContent = CAT_LABEL[item.cat] || "";
  reelCap.textContent = item.cap;
  reelCount.textContent = (ri + 1) + " / " + slides.length;
  reelBar.classList.remove("is-running");
  void reelBar.offsetWidth; // restart bar animation
  if (!reelPaused && !REDUCED) reelBar.classList.add("is-running");
  // preload next
  const next = GALLERY[reelItems[(ri + 1) % slides.length]];
  if (next) { const im = new Image(); im.src = next.src; }
}

function startReel() {
  stopReel();
  if (REDUCED || reelPaused || !reelInView) return;
  reelTimer = setInterval(() => showSlide(ri + 1), SLIDE_MS);
  reelBar.classList.add("is-running");
}
function stopReel() {
  clearInterval(reelTimer); reelTimer = null;
}

document.getElementById("reelNext").addEventListener("click", e => { e.stopPropagation(); showSlide(ri + 1); startReel(); });
document.getElementById("reelPrev").addEventListener("click", e => { e.stopPropagation(); showSlide(ri - 1); startReel(); });
const reelPauseBtn = document.getElementById("reelPause");
reelPauseBtn.addEventListener("click", e => {
  e.stopPropagation();
  reelPaused = !reelPaused;
  reelPauseBtn.textContent = reelPaused ? "▶" : "⏸";
  reelBar.classList.toggle("is-running", !reelPaused && !REDUCED);
  reelPaused ? stopReel() : startReel();
});
reelStage.addEventListener("click", () => { stopReel(); openLightbox(reelItems[ri], reelItems); });

// run only while visible (and not in a background tab)
new IntersectionObserver(entries => {
  entries.forEach(en => {
    reelInView = en.isIntersecting;
    reelInView ? startReel() : stopReel();
  });
}, { threshold: 0.3 }).observe(reelStage);
document.addEventListener("visibilitychange", () => {
  document.hidden ? stopReel() : startReel();
});
showSlide(0);

// ---------- filters ----------
const chips = document.querySelectorAll(".chip");
chips.forEach(chip => chip.addEventListener("click", () => {
  chips.forEach(c => c.classList.remove("is-active"));
  chip.classList.add("is-active");
  const f = chip.dataset.filter;
  if (f === "reel") {
    reel.hidden = false;
    grid.hidden = true;
    startReel();
  } else {
    reel.hidden = true;
    stopReel();
    grid.hidden = false;
    document.querySelectorAll(".tile").forEach(t => {
      t.classList.toggle("is-hidden", t.dataset.cat !== f);
    });
  }
}));

// ---------- lightbox ----------
const lightbox = document.getElementById("lightbox");
const lbMedia = document.getElementById("lbMedia");
const lbCaption = document.getElementById("lbCaption");
let currentIndex = 0;
let lbList = null; // indices the lightbox arrows traverse

function visibleIndices() {
  if (lbList) return lbList;
  return [...document.querySelectorAll(".tile:not(.is-hidden)")].map(t => +t.dataset.index);
}

function openLightbox(i, list) {
  currentIndex = i;
  lbList = list || null;
  renderLightbox();
  lightbox.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function renderLightbox() {
  const item = GALLERY[currentIndex];
  lbMedia.innerHTML = item.type === "video"
    ? `<video src="${item.src}" controls autoplay playsinline></video>`
    : `<img src="${item.src}" alt="${item.cap}">`;
  lbCaption.textContent = item.cap;
}

function stepLightbox(dir) {
  const vis = visibleIndices();
  if (!vis.length) return;
  const pos = vis.indexOf(currentIndex);
  currentIndex = vis[(pos + dir + vis.length) % vis.length];
  renderLightbox();
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lbMedia.innerHTML = "";
  document.body.style.overflow = "";
  if (lbList) { lbList = null; startReel(); }
}

document.getElementById("lbClose").addEventListener("click", closeLightbox);
document.getElementById("lbPrev").addEventListener("click", () => stepLightbox(-1));
document.getElementById("lbNext").addEventListener("click", () => stepLightbox(1));
lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", e => {
  if (!lightbox.classList.contains("is-open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") stepLightbox(-1);
  if (e.key === "ArrowRight") stepLightbox(1);
});

// ---------- hero title letter stagger ----------
const heroTitle = document.getElementById("heroTitle");
if (heroTitle && !REDUCED) {
  heroTitle.innerHTML = [...heroTitle.childNodes].map(node => {
    if (node.nodeType === 3) {
      return [...node.textContent].map((c, i) =>
        c === " " ? " " : `<span class="ch">${c}</span>`
      ).join("");
    }
    return node.outerHTML;
  }).join("");
  heroTitle.querySelectorAll(".ch").forEach((s, i) => s.style.animationDelay = (0.15 + i * 0.055) + "s");
}

// ---------- parallax (sun, clouds, hero frame) ----------
const sun = document.querySelector(".hero__sun");
const heroFrame = document.querySelector(".hero__frame");
if (!REDUCED) {
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      if (y < window.innerHeight * 1.2) {
        if (sun) sun.style.translate = `0 ${y * 0.35}px`;
        if (heroFrame) heroFrame.style.translate = `0 ${y * 0.12}px`;
      }
      // elephant walker along the timeline road
      const tl = document.getElementById("timeline");
      const walker = document.getElementById("walker");
      if (tl && walker) {
        const r = tl.getBoundingClientRect();
        const progress = Math.min(1, Math.max(0, (window.innerHeight * 0.55 - r.top) / r.height));
        walker.style.top = (progress * (r.height - 60)) + "px";
      }
      ticking = false;
    });
  }, { passive: true });
}

// ---------- 3D tilt on dhuniya mosaic ----------
if (!REDUCED && matchMedia("(hover: hover)").matches) {
  document.querySelectorAll(".dhuniya__mosaic img").forEach(img => {
    img.addEventListener("mousemove", e => {
      const r = img.getBoundingClientRect();
      const rx = ((e.clientY - r.top) / r.height - 0.5) * -14;
      const ry = ((e.clientX - r.left) / r.width - 0.5) * 14;
      img.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) scale(1.05)`;
    });
    img.addEventListener("mouseleave", () => { img.style.transform = ""; });
  });
}

// ---------- field diary rotator ----------
const DIARY = [
  { q: "Development cannot be shaped only in an office. It has to be informed by the ground. When people speak and we genuinely listen, planning becomes more realistic.", c: "VDC meetings across 15 villages · Maheshwar, M.P." },
  { q: "In more than half of the villages, there were no women present. I raised this concern — from the next meeting onwards, women should be invited and encouraged to participate.", c: "On inclusion · Maheshwar, M.P." },
  { q: "The true success of this fellowship was not in what I built, but in who was ready to carry it forward.", c: "Month 12 with Khetha Khuri · Assam" },
  { q: "They were no longer camera-shy. They were storytellers.", c: "The women of Dhuniya Crafts, on film · Assam" },
  { q: "Assam will always be my home away from home, no matter where I go next.", c: "Month 13, saying goodbye · Bodoland" },
  { q: "When systems slow down, it is people who keep everything alive.", c: "Month 11, order deliveries in Roza month · Assam" },
];
const diaryQuote = document.getElementById("diaryQuote");
const diaryDots = document.getElementById("diaryDots");
if (diaryQuote) {
  let di = 0, diaryTimer;
  DIARY.forEach((_, i) => {
    const b = document.createElement("button");
    b.setAttribute("aria-label", "Quote " + (i + 1));
    b.addEventListener("click", () => { showDiary(i); restartDiaryTimer(); });
    diaryDots.appendChild(b);
  });
  function showDiary(i) {
    di = i;
    diaryQuote.classList.remove("is-in");
    setTimeout(() => {
      diaryQuote.querySelector("p").textContent = "“" + DIARY[i].q + "”";
      diaryQuote.querySelector("cite").textContent = "— " + DIARY[i].c;
      diaryQuote.classList.add("is-in");
      [...diaryDots.children].forEach((d, j) => d.classList.toggle("is-active", j === i));
    }, REDUCED ? 0 : 320);
  }
  function restartDiaryTimer() {
    clearInterval(diaryTimer);
    if (!REDUCED) diaryTimer = setInterval(() => showDiary((di + 1) % DIARY.length), 7000);
  }
  showDiary(0);
  restartDiaryTimer();
}

// ---------- lazy craft video (Dhuniya section) ----------
const craftPanel = document.getElementById("craftVideo");
if (craftPanel) {
  const CLIPS = ["assets/video-craft-1.mp4", "assets/video-craft-2.mp4", "assets/video-craft-3.mp4", "assets/video-craft-4.mp4"];
  const vid = craftPanel.querySelector("video");
  let ci = 0, armed = false;
  const setClip = i => { ci = i; vid.src = CLIPS[i]; vid.play().catch(() => {}); };
  document.getElementById("craftVideoNext").addEventListener("click", () => setClip((ci + 1) % CLIPS.length));
  new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        if (!armed) { armed = true; setClip(0); }
        else vid.play().catch(() => {});
      } else if (armed) {
        vid.pause();
      }
    });
  }, { threshold: 0.25 }).observe(craftPanel);
}

// ---------- reveal on scroll ----------
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.classList.add("is-visible");
      revealObserver.unobserve(en.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// ---------- gallery tiles: staggered entrance ----------
const tileObserver = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      const el = en.target;
      el.style.transitionDelay = (parseInt(el.dataset.index, 10) % 6) * 70 + "ms";
      el.classList.add("is-shown");
      tileObserver.unobserve(el);
    }
  });
}, { threshold: 0.08, rootMargin: "0px 0px 60px 0px" });
document.querySelectorAll(".tile").forEach(t => tileObserver.observe(t));

// ---------- animated counters ----------
const statObserver = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    statObserver.unobserve(en.target);
    const el = en.target;
    const target = +el.dataset.count;
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    const dur = 1600;
    const t0 = performance.now();
    (function tick(t) {
      const p = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + Math.round(target * eased).toLocaleString("en-IN") + suffix;
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
  });
}, { threshold: 0.6 });
document.querySelectorAll(".stat__num").forEach(el => statObserver.observe(el));

// ---------- timeline expand ----------
document.querySelectorAll(".milestone").forEach(m => {
  m.querySelector(".milestone__card").addEventListener("click", () => {
    m.classList.toggle("is-open");
  });
});
// open the two big milestones by default
document.querySelectorAll(".milestone--big").forEach(m => m.classList.add("is-open"));

// ---------- nav ----------
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("is-scrolled", window.scrollY > 40);
}, { passive: true });

const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");
burger.addEventListener("click", () => {
  burger.classList.toggle("is-open");
  navLinks.classList.toggle("is-open");
});
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  burger.classList.remove("is-open");
  navLinks.classList.remove("is-open");
}));
