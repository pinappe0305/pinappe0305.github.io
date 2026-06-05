/* =========================================================
   ご機嫌に暮らす、人生の後半戦。
   温かい紙の質感 × 手記 × 深い緑
   ========================================================= */

:root {
  --paper: #f5f0e5;
  --paper-deep: #ede5d2;
  --ink: #26211c;
  --ink-soft: rgba(38, 33, 28, 0.72);
  --ink-faint: rgba(38, 33, 28, 0.5);
  --green: #374627;
  --green-deep: #2c3a1f;
  --green-soft: rgba(55, 70, 39, 0.12);
  --rule: rgba(38, 33, 28, 0.22);
  --rule-faint: rgba(38, 33, 28, 0.12);
  --serif: "Zen Old Mincho", "Hiragino Mincho ProN", serif;
  --sans: "Zen Kaku Gothic New", "Hiragino Kaku Gothic ProN", sans-serif;
  --accent: "Fraunces", serif;
  --hand: "Klee One", cursive;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  background: var(--paper);
  color: var(--ink);
  font-family: var(--sans);
  font-size: 16px;
  line-height: 1.9;
  letter-spacing: 0.02em;
  -webkit-font-smoothing: antialiased;
}

/* --- 紙の質感（微細ノイズ） --- */
.paper-noise {
  position: fixed;
  inset: 0;
  z-index: 999;
  pointer-events: none;
  opacity: 0.045;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

a { color: var(--green); text-decoration: none; transition: opacity 0.25s ease; }
a:hover { opacity: 0.7; }

img { max-width: 100%; display: block; }

h1, h2, h3, h4 { font-family: var(--serif); font-weight: 600; line-height: 1.5; }

.fr-it { font-family: var(--accent); font-style: italic; font-weight: 400; letter-spacing: 0.04em; }
.klee { font-family: var(--hand); font-weight: 400; }

/* --- ふわっと表示 --- */
.reveal { opacity: 0; transform: translateY(16px); transition: opacity 0.9s ease, transform 0.9s ease; }
.reveal.is-visible { opacity: 1; transform: none; }
@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; transition: none; }
}

/* =========================================
   ヘッダー
   ========================================= */
.site-header {
  max-width: 1080px;
  margin: 0 auto;
  padding: 1.4rem 1.4rem 0;
  text-align: center;
}

.issue-line {
  font-size: 0.72rem;
  color: var(--ink-faint);
  letter-spacing: 0.18em;
  border-bottom: 1px solid var(--rule);
  padding-bottom: 0.9rem;
}
.issue-line .sep { margin: 0 0.7em; opacity: 0.5; }

.masthead { padding: 1.6rem 0 1.1rem; }
.site-name { color: var(--ink); display: inline-flex; flex-direction: column; gap: 0.15rem; }
.site-name .name-ja {
  font-family: var(--serif);
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 0.32em;
  margin-left: 0.32em;
}
.site-name .name-en { font-size: 0.72rem; color: var(--ink-faint); letter-spacing: 0.28em; }

.site-nav {
  border-top: 1px solid var(--rule-faint);
  border-bottom: 1px solid var(--rule);
  padding: 0.7rem 0;
  display: flex;
  justify-content: center;
  gap: 2.4rem;
  font-size: 0.86rem;
  letter-spacing: 0.14em;
}
.site-nav a { color: var(--ink-soft); }
.site-nav a:hover { color: var(--green); opacity: 1; }

main { max-width: 1080px; margin: 0 auto; padding: 0 1.4rem; }

/* =========================================
   セクション見出し
   ========================================= */
.sec-head { text-align: center; margin-bottom: 2.6rem; }
.sec-en { font-size: 0.85rem; color: var(--green); letter-spacing: 0.22em; margin-bottom: 0.4rem; }
.sec-head h1, .sec-head h2 { font-size: 1.7rem; letter-spacing: 0.1em; }
.page-head { padding-top: 4rem; }

/* =========================================
   ヒーロー
   ========================================= */
.hero { text-align: center; padding: 5.5rem 0 4.5rem; }

.hero-catch {
  display: inline-block;
  font-size: 0.85rem;
  color: var(--green);
  letter-spacing: 0.26em;
  border-top: 1px solid var(--green);
  border-bottom: 1px solid var(--green);
  padding: 0.5rem 1.2rem;
  margin-bottom: 2.4rem;
}

.hero-title {
  font-size: clamp(2.1rem, 6vw, 3.7rem);
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.hero-lead { color: var(--ink-soft); font-size: 1rem; line-height: 2.2; }
.hero-memo { margin-top: 2.2rem; color: var(--green); font-size: 1rem; }

/* =========================================
   プロフィール帯
   ========================================= */
.profile-band {
  border-top: 1px solid var(--rule);
  border-bottom: 1px solid var(--rule);
  padding: 1.8rem 0;
  margin-bottom: 5.5rem;
}
.profile-band dl {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  text-align: center;
}
.profile-band div + div { border-left: 1px solid var(--rule-faint); }
.profile-band dt {
  font-size: 0.72rem;
  color: var(--green);
  letter-spacing: 0.24em;
  margin-bottom: 0.3rem;
}
.profile-band dd { font-family: var(--serif); font-size: 1.02rem; letter-spacing: 0.06em; }

/* =========================================
   記事カード
   ========================================= */
.feed { margin-bottom: 6rem; }

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2.2rem 2rem;
}

.card-link { display: block; color: var(--ink); }
.card-link:hover { opacity: 1; }

.card-img {
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: var(--paper-deep);
  border: 1px solid var(--rule-faint);
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: sepia(0.12) saturate(0.92);
  transition: transform 0.7s ease;
}
.card-link:hover .card-img img { transform: scale(1.035); }
.card-img-blank { color: var(--ink-faint); font-size: 1.1rem; letter-spacing: 0.2em; }

.card-body { padding: 1rem 0.2rem 0; }
.card-meta {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  font-size: 0.78rem;
  color: var(--ink-faint);
  margin-bottom: 0.5rem;
}
.card-cat {
  color: var(--green);
  border: 1px solid var(--green-soft);
  background: var(--green-soft);
  border-radius: 2px;
  padding: 0.05rem 0.55rem;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
}
.card-title { font-size: 1.08rem; letter-spacing: 0.05em; margin-bottom: 0.5rem; }
.card-link:hover .card-title { color: var(--green); }
.card-excerpt { font-size: 0.85rem; color: var(--ink-soft); line-height: 1.9; }

.more { text-align: center; margin-top: 3rem; font-size: 0.9rem; letter-spacing: 0.1em; }

/* =========================================
   テーマ（4カテゴリ）
   ========================================= */
.themes { margin-bottom: 6rem; }

.theme-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid var(--rule);
  border-left: 1px solid var(--rule-faint);
}
.theme {
  border-right: 1px solid var(--rule-faint);
  border-bottom: 1px solid var(--rule);
  padding: 2rem 1.4rem 2.2rem;
  color: var(--ink);
  display: block;
}
.theme:hover { background: rgba(55, 70, 39, 0.05); opacity: 1; }
.theme-num { display: block; font-size: 2rem; color: var(--green); line-height: 1; margin-bottom: 0.8rem; }
.theme-en { display: block; font-size: 0.8rem; color: var(--ink-faint); letter-spacing: 0.18em; margin-bottom: 0.3rem; }
.theme h3 { font-size: 1.12rem; letter-spacing: 0.08em; margin-bottom: 0.7rem; }
.theme p { font-size: 0.82rem; color: var(--ink-soft); line-height: 1.9; }

/* =========================================
   About
   ========================================= */
.about { margin-bottom: 6rem; }
.about-body { max-width: 620px; margin: 0 auto; }
.about-body > p { margin-bottom: 1.8rem; }
.about-body > p:first-child::first-letter {
  font-family: var(--serif);
  font-size: 3.1em;
  font-weight: 700;
  float: left;
  line-height: 1;
  padding: 0.08em 0.18em 0 0;
  color: var(--green);
}

.pullquote {
  font-family: var(--serif);
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  line-height: 2.1;
  text-align: center;
  color: var(--green);
  border-top: 1px solid var(--green);
  border-bottom: 1px solid var(--green);
  padding: 2.2rem 1rem;
  margin: 3rem 0;
}

.about-sign { text-align: right; color: var(--ink-soft); font-size: 1.05rem; }

/* =========================================
   静かな有料導線
   ========================================= */
.note-cta {
  text-align: center;
  border-top: 1px solid var(--rule);
  padding: 4rem 1rem 5.5rem;
}
.cta-en { font-size: 0.8rem; color: var(--ink-faint); letter-spacing: 0.2em; margin-bottom: 0.5rem; }
.note-cta h2 { font-size: 1.3rem; letter-spacing: 0.1em; margin-bottom: 1rem; }
.note-cta p { font-size: 0.88rem; color: var(--ink-soft); margin-bottom: 2rem; }
.btn-quiet {
  display: inline-block;
  border: 1px solid var(--green);
  color: var(--green);
  font-size: 0.85rem;
  letter-spacing: 0.18em;
  padding: 0.7rem 2.6rem;
  transition: all 0.3s ease;
}
.btn-quiet:hover { background: var(--green); color: var(--paper); opacity: 1; }

/* =========================================
   フッター
   ========================================= */
.site-footer {
  background: var(--green-deep);
  color: rgba(245, 240, 229, 0.88);
  text-align: center;
  padding: 4rem 1.4rem 2.5rem;
  margin-top: 2rem;
}
.footer-name { display: flex; flex-direction: column; gap: 0.2rem; margin-bottom: 1.6rem; }
.footer-name .name-ja {
  font-family: var(--serif);
  font-size: 1.15rem;
  letter-spacing: 0.3em;
  margin-left: 0.3em;
}
.footer-name .name-en { font-size: 0.7rem; letter-spacing: 0.26em; opacity: 0.65; }
.footer-philosophy {
  font-family: var(--serif);
  font-size: 0.95rem;
  line-height: 2.3;
  letter-spacing: 0.12em;
  margin-bottom: 2.2rem;
}
.footer-sns {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 2rem;
  font-size: 0.8rem;
  letter-spacing: 0.14em;
  margin-bottom: 2.6rem;
}
.footer-sns a { color: rgba(245, 240, 229, 0.8); }
.footer-sns a:hover { color: #fff; }
.footer-copy { font-size: 0.72rem; opacity: 0.5; letter-spacing: 0.12em; }

/* =========================================
   記事ページ
   ========================================= */
.post { max-width: 680px; margin: 0 auto; padding-top: 4rem; }

.post-head { text-align: center; margin-bottom: 2.8rem; }
.post-meta {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.2rem;
  font-size: 0.82rem;
  color: var(--ink-faint);
  margin-bottom: 1.6rem;
}
.post-meta .num { color: var(--green); font-size: 0.95rem; }
.post-cat {
  font-size: 0.74rem;
  letter-spacing: 0.1em;
  color: var(--green);
  border: 1px solid var(--green-soft);
  background: var(--green-soft);
  border-radius: 2px;
  padding: 0.1rem 0.7rem;
}
.post-title { font-size: clamp(1.5rem, 4.4vw, 2.1rem); letter-spacing: 0.07em; line-height: 1.8; }
.post-memo { margin-top: 1.2rem; color: var(--green); font-size: 0.98rem; }

.post-figure {
  margin: 0 0 2.8rem;
  border: 1px solid var(--rule-faint);
}
.post-figure img { width: 100%; filter: sepia(0.1) saturate(0.94); }

.post-body { font-size: 1rem; line-height: 2.25; }
.post-body > p { margin-bottom: 1.9rem; }

/* ドロップキャップ（本文の最初の一文字） */
.post-body > p:first-of-type::first-letter {
  font-family: var(--serif);
  font-size: 3.4em;
  font-weight: 700;
  float: left;
  line-height: 1;
  padding: 0.06em 0.18em 0 0;
  color: var(--green);
}

/* プルクオート（本文中の引用） */
.post-body blockquote {
  font-family: var(--serif);
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  line-height: 2.1;
  text-align: center;
  color: var(--green);
  border-top: 1px solid var(--green);
  border-bottom: 1px solid var(--green);
  padding: 1.9rem 1rem;
  margin: 2.8rem 0;
}
.post-body blockquote p { margin: 0; }

.post-body h2 {
  font-size: 1.3rem;
  letter-spacing: 0.08em;
  margin: 3rem 0 1.3rem;
  padding-left: 0.9rem;
  border-left: 3px solid var(--green);
}
.post-body h3 { font-size: 1.1rem; margin: 2.4rem 0 1rem; }
.post-body ul, .post-body ol { padding-left: 1.6em; margin-bottom: 1.9rem; }
.post-body img { margin: 2.4rem auto; border: 1px solid var(--rule-faint); }
.post-body hr { border: none; border-top: 1px solid var(--rule); margin: 3rem auto; width: 38%; }

.post-foot {
  text-align: center;
  border-top: 1px solid var(--rule);
  margin-top: 4rem;
  padding: 2.4rem 0 5rem;
}
.post-thanks { color: var(--green); font-size: 1.05rem; margin-bottom: 1.6rem; }
.post-back { font-size: 0.86rem; letter-spacing: 0.1em; }

/* =========================================
   カテゴリページ
   ========================================= */
.cat-head { text-align: center; padding: 4rem 0 3rem; }
.cat-head .theme-num { font-size: 2.6rem; margin-bottom: 0.6rem; }
.cat-head h1 { font-size: 1.7rem; letter-spacing: 0.1em; margin: 0.2rem 0 1rem; }
.cat-desc { font-size: 0.88rem; color: var(--ink-soft); }
.empty { text-align: center; color: var(--ink-faint); padding: 4rem 0 6rem; font-size: 1.05rem; }

.cards + .empty { display: none; }
section.cat-head + .cards, .page-head + .cards { margin-bottom: 6rem; }

/* =========================================
   スマホ対応
   ========================================= */
@media (max-width: 760px) {
  body { font-size: 15px; }
  br.pc { display: none; }

  .site-nav { gap: 1.4rem; font-size: 0.8rem; }
  .hero { padding: 4rem 0 3.5rem; }
  .hero-catch { font-size: 0.74rem; letter-spacing: 0.18em; }

  .profile-band dl { grid-template-columns: repeat(2, 1fr); gap: 1.4rem 0; }
  .profile-band div:nth-child(3) { border-left: none; }

  .theme-grid { grid-template-columns: 1fr 1fr; }

  .cards { grid-template-columns: 1fr; gap: 2.4rem; }

  .post { padding-top: 2.8rem; }
  .post-body { line-height: 2.15; }
}

@media (max-width: 420px) {
  .theme-grid { grid-template-columns: 1fr; }
  .footer-sns { gap: 1.3rem; }
}
