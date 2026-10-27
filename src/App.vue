<template>
  <a class="skip" href="#daftar">Lewati ke formulir</a>

  <header class="nav">
    <div class="container nav__inner">
      <a class="brand" href="/" aria-label="Beranda DuaBahasa">
        <img src="/logo.png" alt="DuaBahasa" width="2086" height="754" />
      </a>
      <p class="nav__note">Segera dibuka</p>
    </div>
  </header>

  <main id="main">
    <section class="hero" aria-labelledby="hero-title">
      <div class="container hero__grid">
        <div class="hero__text">
          <h1 id="hero-title" lang="en">Speak English<br />with confidence.</h1>
          <p class="lead">
            Belajar bahasa Inggris dengan cara yang benar-benar dipakai, lewat latihan
            ngobrol.
          </p>
        </div>

        <div class="ticket" id="daftar" tabindex="-1">
          <div class="sticker">
            <span class="sticker__cut" aria-hidden="true"></span>
            <p class="sticker__line">
              <span class="sticker__small">Mulai</span>
              <strong class="sticker__price num">Rp49.000</strong>
              <span class="sticker__unit">/ bulan</span>
            </p>
          </div>

          <form class="ticket__sheet" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="ed3f89d0-11b5-4e22-8472-c50832dfad87" />
            <input type="hidden" name="subject" value="Pendaftar Baru DuaBahasa" />

            <div class="fields">
              <p class="field">
                <label for="name">Nama kamu</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autocomplete="name"
                  required
                />
              </p>
              <p class="field">
                <label for="whatsapp">Nomor WhatsApp kamu</label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  inputmode="tel"
                  autocomplete="tel"
                  required
                />
              </p>
              <p class="field field--wide">
                <label for="message">Pesan kamu (opsional)</label>
                <textarea
                  id="message"
                  name="message"
                  rows="2"
                ></textarea>
              </p>
            </div>

            <button class="btn" type="submit">Daftar sekarang</button>
            <p class="fine">Kami akan menghubungi kamu saat DuaBahasa resmi diluncurkan.</p>
          </form>
        </div>
      </div>
    </section>

    <section class="promises" aria-labelledby="promises-title">
      <div class="container promises__grid">
        <h2 id="promises-title" class="promises__head">Cara belajar yang beda</h2>
        <ol class="promises__rows">
          <li>
            <h3 lang="en">Learn by doing</h3>
            <p>
              Lebih sedikit menghafal. Lebih banyak ngobrol, mencoba, dan benar-benar
              menggunakan bahasa.
            </p>
          </li>
          <li>
            <h3 lang="en">Made for real life</h3>
            <p>
              Materi yang dekat dengan keseharian, bukan dialog textbook yang tidak pernah
              kamu pakai.
            </p>
          </li>
          <li>
            <h3 lang="en">Find your voice</h3>
            <p>
              Ruang yang aman untuk salah, bertumbuh, dan menemukan keberanianmu sendiri.
            </p>
          </li>
        </ol>
      </div>
    </section>

    <section class="practice" aria-labelledby="practice-title">
      <div class="container practice__grid">
        <div class="practice__text">
          <h2 id="practice-title">Seperti ini latihannya</h2>
          <p class="lead">
            Percakapan pendek, materi dari keseharian, lalu giliran kamu yang bicara.
          </p>
        </div>

        <figure class="chat" aria-label="Contoh percakapan latihan DuaBahasa">
          <p class="chat__label" lang="en">Practice room</p>
          <div class="chat__thread">
            <p class="bubble bubble--them" lang="en">How was your weekend?</p>
            <p class="bubble bubble--you">
              <span lang="en">It was really fun!</span><small>Itu menyenangkan!</small>
            </p>
            <p class="bubble bubble--them bubble--short" lang="en">Love that.</p>
          </div>
          <p class="chat__foot" lang="en">Your turn to speak</p>
        </figure>
      </div>
    </section>

    <section class="close torn" aria-label="Penutup">
      <div class="container close__inner">
        <p class="close__statement">Belajar. Berani. Bicara.</p>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container footer__inner">
      <img src="/logo.png" alt="DuaBahasa" width="2086" height="754" />
      <p>© 2026 DuaBahasa</p>
    </div>
  </footer>
</template>

<style>
/* Hallmark · shape: Counter sheet in a Banner hero, three ruled rows, a split for the practice sample, one torn ink band · genre: playful · theme: Hum (by request) · redesign: full
 * hero: Banner, the sign-up sheet is the visual · nav: edge-aligned wordmark with a status line · footer: colophon · imagery: the product built as paper, no photographs · signature: the price on a die-cut pear sticker pinned to the sign-up sheet
 * axes: light/rounded-sans/chromatic-yellow · posture: full-palette · spring posture: primary control only · contrast: pass · fold: pass · v2.0.0 */
/* Hallmark · waive 12 · --ease-spring on the submit only · Hum's declared spring posture, one control on the page */
/* Hallmark · dismissed 23 · the pear is a 13rem sticker and one 52px control, under 5% of the viewport */
/* Hallmark · pre-emit critique: P5 H4 E4 S4 R4 V4 · weakest: S, a waitlist sheet could belong to any course, so the price sticker, the WhatsApp field and this exact exchange sit on the first screen */
@import url("./styles/tokens.css");
@import url("./styles/base.css");

body {
  background: var(--grain), var(--fibre), var(--color-paper);
}

.skip {
  position: absolute;
  left: var(--space-md);
  top: calc(-1 * var(--space-3xl));
  z-index: var(--z-toast);
  padding: var(--space-sm) var(--space-md);
  background: var(--color-ink);
  color: var(--color-paper);
  text-decoration: none;
}
.skip:focus-visible { top: var(--space-md); }

/* Nav: one line, the wordmark and one status line, nothing else */
.nav { border-bottom: var(--rule-hair) solid var(--color-rule); }
.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-lg);
  min-height: var(--nav-h);
}
.brand { display: inline-flex; align-items: center; }
.brand img { height: 52px; width: auto; }
.nav__note { color: var(--color-muted); font-size: var(--text-sm); }

/* Hero: Counter, the sheet is the action and the visual */
.hero { padding-block: var(--space-2xl) var(--space-3xl); }
.hero__grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  column-gap: var(--gap-columns);
  row-gap: var(--space-2xl);
  align-items: center;
}
.hero__text { grid-column: 1 / span 7; }
.hero__text .lead { margin-top: var(--space-lg); color: var(--color-ink-2); }
.hero h1 { font-size: clamp(2.75rem, 5vw + 0.5rem, 5rem); line-height: 1.04; }

/* The sheet: torn card stock, a solid edge below, shadow falling right and down */
.ticket {
  grid-column: 8 / span 5;
  position: relative;
  margin-top: var(--space-xl);
}
.ticket__sheet {
  margin: 0;
  padding: var(--space-2xl) var(--space-lg) var(--space-lg);
  background: var(--grain), var(--fibre), var(--color-card);
  border-radius: var(--radius-card);
  box-shadow: 0 4px 0 var(--color-edge), var(--shadow-card);
}

/* Die-cut pear sticker carrying the offer; the cut lives on a textless layer so it never clips the type */
.sticker {
  position: absolute;
  top: calc(-1 * var(--space-3xl));
  right: var(--space-lg);
  z-index: var(--z-raised);
  display: grid;
  transform: rotate(-2deg);
  transform-origin: 50% 60%;
  width: min(100%, 12rem);
}
.sticker > * { grid-area: 1 / 1; min-width: 0; }
.sticker__cut {
  position: relative;
  filter: var(--shadow-paper);
}
.sticker__cut::before {
  content: "";
  position: absolute;
  inset: -3px;
  clip-path: var(--sticker-cut);
  background: var(--color-fringe);
}
.sticker__cut::after {
  content: "";
  position: absolute;
  inset: 0;
  clip-path: var(--sticker-cut);
  background: var(--grain), var(--fibre), var(--color-accent);
}
.sticker__line {
  position: relative;
  padding: var(--space-lg) var(--space-md);
  color: var(--color-accent-ink);
  text-align: center;
}
.sticker__small, .sticker__unit { display: block; font-size: var(--text-sm); }
.sticker__price { display: block; font-size: var(--text-xl); font-weight: 600; letter-spacing: var(--tracking-display); }

/* Form: card-stock fields, constant 1px edge, focus by outline, one filled primary */
.fields {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-sm) var(--space-sm);
}
.field { min-width: 0; }
.field--wide { grid-column: 1 / -1; }
.field label {
  display: block;
  margin-bottom: var(--space-2xs);
  color: var(--color-ink-2);
  font-size: var(--text-sm);
  font-weight: 500;
}
.field input,
.field textarea {
  width: 100%;
  min-height: 52px;
  padding: 0 var(--space-md);
  border: var(--rule-hair) solid var(--color-muted);
  border-radius: var(--radius-input);
  background: var(--color-paper);
  color: var(--color-ink);
  font-size: var(--text-md);
  outline: 2px solid transparent;
  outline-offset: -3px;
}
.field textarea { min-height: 88px; padding-block: var(--space-sm); resize: vertical; }
.field input:focus-visible,
.field textarea:focus-visible { outline-color: var(--color-focus); }
.field input:active,
.field textarea:active { border-color: var(--color-ink-2); }
.field input:disabled,
.field textarea:disabled { opacity: 0.55; cursor: not-allowed; background: var(--color-paper-2); }
.field ::placeholder { color: var(--color-muted); opacity: 1; }

.btn {
  width: 100%;
  min-height: 52px;
  margin-top: var(--space-md);
  padding: 0 var(--space-lg);
  border: 0;
  border-radius: var(--radius-input);
  background: var(--color-accent);
  color: var(--color-accent-ink);
  font: 600 var(--text-md) / 1 var(--font-body);
  cursor: pointer;
  box-shadow: 0 5px 0 var(--color-accent-deep);
  transition: transform var(--dur-short) var(--ease-spring), box-shadow var(--dur-short) var(--ease-spring);
}
.btn:hover { transform: translateY(-2px); box-shadow: 0 7px 0 var(--color-accent-deep); }
.btn:active { transform: translateY(4px); box-shadow: 0 1px 0 var(--color-accent-deep); }
.btn:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 3px; }
.btn:disabled { opacity: 0.55; cursor: not-allowed; transform: none; box-shadow: 0 5px 0 var(--color-accent-deep); }

.fine {
  min-height: 1lh;
  margin-top: var(--space-sm);
  color: var(--color-muted);
  font-size: var(--text-sm);
  line-height: 1.5;
}

/* Promises: three full-width rows parted by hairlines, head on the first four columns */
.promises { padding-block: var(--section-gap); }
.promises__grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  column-gap: var(--gap-columns);
  row-gap: var(--space-xl);
}
.promises__head { grid-column: 1 / span 4; }
.promises__rows { grid-column: 5 / span 8; margin: 0; padding: 0; list-style: none; }
.promises__rows li {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
  gap: var(--gap-columns);
  padding-block: var(--space-lg);
  border-top: var(--rule-hair) solid var(--color-rule);
}
.promises__rows li:last-child { border-bottom: var(--rule-hair) solid var(--color-rule); }
.promises__rows h3 { font-size: var(--text-title); }
.promises__rows p { color: var(--color-ink-2); }

/* Practice: text beside the sample built in paper */
.practice { padding-block: var(--section-gap); }
.practice__grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  column-gap: var(--gap-columns);
  row-gap: var(--space-2xl);
  align-items: center;
}
.practice__text { grid-column: 1 / span 5; }
.practice__text .lead { margin-top: var(--space-lg); color: var(--color-ink-2); }

.chat {
  grid-column: 6 / span 7;
  min-height: 360px;
  margin: 0;
  padding: var(--space-lg) var(--space-xl) var(--space-xl);
  background: var(--grain), var(--fibre), var(--color-card);
  border-radius: var(--radius-card);
  box-shadow: 0 4px 0 var(--color-edge), var(--shadow-card);
}
.chat__label { color: var(--color-muted); font-size: var(--text-sm); }
.chat__thread {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  padding-block: var(--space-2xl);
}
.bubble {
  width: fit-content;
  max-width: 100%;
  padding: var(--space-sm) var(--space-md);
  background: var(--color-paper-3);
  border-radius: var(--radius-stock);
  font-size: var(--text-md);
  line-height: 1.45;
}
.bubble small { display: block; color: var(--color-muted); font-size: var(--text-xs); }
.bubble--you { align-self: flex-end; background: var(--color-mint); }
.bubble--you small { color: var(--color-ink-2); }
.bubble--short { background: var(--color-accent); }
.chat__foot {
  border-top: var(--rule-hair) solid var(--color-rule);
  padding-top: var(--space-md);
  color: var(--color-ink-2);
  font-size: var(--text-sm);
}

/* Close: one torn ink sheet, the page's own line set at display size */
.close {
  background: var(--color-ink);
  color: var(--color-paper);
  clip-path: var(--tear-top);
  padding-block: var(--space-3xl) var(--space-4xl);
}
.close__statement { color: var(--color-paper); font-size: var(--text-display); max-width: 20ch; overflow-wrap: break-word; }

.footer { padding-block: var(--space-xl); }
.footer__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-lg);
}
.footer img { height: 44px; width: auto; }
.footer p { color: var(--color-muted); font-size: var(--text-sm); }

@media (min-width: 60.0625rem) and (max-width: 74rem) {
  .fields { grid-template-columns: minmax(0, 1fr); }
}

@media (max-width: 60rem) {
  .nav__inner { gap: var(--space-md); }
  .hero { padding-block: var(--space-xl) var(--space-2xl); }
  .hero__text, .ticket { grid-column: 1 / -1; }
  .ticket { margin-top: var(--space-2xl); }
  .promises__head, .promises__rows { grid-column: 1 / -1; }
  .practice__text, .chat { grid-column: 1 / -1; }
  .chat { min-height: auto; padding: var(--space-lg); }
  .chat__thread { padding-block: var(--space-xl); }
  .close { padding-block: var(--space-2xl) var(--space-3xl); }
}

@media (max-width: 40rem) {
  .hero__grid { row-gap: var(--space-lg); }
  .ticket { margin-top: 0; }
  .fields { grid-template-columns: minmax(0, 1fr); }
  .promises__rows li { grid-template-columns: minmax(0, 1fr); gap: var(--space-xs); }
  .footer__inner { flex-direction: column; align-items: flex-start; gap: var(--space-sm); }
}
</style>