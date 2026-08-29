<template>
  <main class="page-shell">
    <nav class="nav container" aria-label="Main navigation">
      <a class="brand" href="/" aria-label="DuaBahasa home">
        <img class="brand-logo" src="/logo.png" alt="DuaBahasa" />
      </a>
      <span class="nav-note"><i></i> Coming soon</span>
    </nav>

    <section class="hero container">
      <div class="hero-copy">
        <p class="eyebrow">English learning, made real</p>
        <h1>Speak English<br /><em>with confidence.</em></h1>
        <p class="intro">
          Belajar bahasa Inggris dengan cara yang benar-benar dipakai. Perpaduan metode Kampung Inggris, latihan nyata, dan komunitas yang bikin kamu berani mulai.
        </p>
        <p class="price-note"><strong>Mulai Rp49.000</strong> <span>/ bulan</span></p>

        <form class="notify-form" action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="ed3f89d0-11b5-4e22-8472-c50832dfad87" />
          <input type="hidden" name="subject" value="Pendaftar Baru DuaBahasa" />
          <label class="sr-only" for="name">Nama kamu</label>
          <input id="name" name="name" type="text" placeholder="Nama kamu" required />
          <label class="sr-only" for="whatsapp">Nomor WhatsApp kamu</label>
          <input id="whatsapp" name="whatsapp" type="tel" inputmode="tel" placeholder="Nomor WhatsApp" required />
          <label class="sr-only" for="message">Pesan kamu</label>
          <textarea id="message" name="message" placeholder="Tulis pesan (opsional)" rows="2"></textarea>
          <button type="submit">Daftar sekarang <span>→</span></button>
        </form>
        <p class="fine-print">Kami akan menghubungi kamu saat DuaBahasa resmi diluncurkan.</p>
      </div>

      <div class="hero-visual" aria-label="Preview of the DuaBahasa learning experience">
        <div class="orb orb-large"></div>
        <div class="orb orb-small"></div>
        <div class="language-card card-main">
          <div class="card-top"><span class="live-dot"></span> Practice room <span class="dots">•••</span></div>
          <div class="conversation">
            <div class="bubble bubble-them">How was your weekend?</div>
            <div class="bubble bubble-you">It was really fun!<br /><small>Itu menyenangkan!</small></div>
            <div class="bubble bubble-them short">Love that ✨</div>
          </div>
          <div class="card-bottom"><span>●</span> Your turn to speak</div>
        </div>
        <div class="floating-card phrase-card"><span>word of the day</span><strong>serendipity</strong><small>/ˌserənˈdipitē/ · noun</small></div>
        <div class="floating-card progress-card"><strong>03</strong><span>days<br />streak</span></div>
        <div class="scribble">practice<br />makes progress</div>
      </div>
    </section>

    <section class="promise container">
      <p class="promise-label">A little different by design</p>
      <div class="promise-grid">
        <article><span>01</span><h2>Learn by doing</h2><p>Lebih sedikit menghafal. Lebih banyak ngobrol, mencoba, dan benar-benar menggunakan bahasa.</p></article>
        <article><span>02</span><h2>Made for real life</h2><p>Materi yang dekat dengan keseharian, bukan dialog textbook yang tidak pernah kamu pakai.</p></article>
        <article><span>03</span><h2>Find your voice</h2><p>Ruang yang aman untuk salah, bertumbuh, dan menemukan keberanianmu sendiri.</p></article>
      </div>
    </section>

    <footer class="container footer"><span>© 2025 DuaBahasa</span><span>Belajar. Berani. Bicara.</span></footer>
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,600;1,600&display=swap');

:root { --ink: #123b5d; --black: #111827; --paper: #f7fbfa; --cyan: #21c7d9; --teal: #8ed8c8; --line: #d7e8e5; }
* { box-sizing: border-box; }
body { margin: 0; background: var(--paper); color: var(--ink); font-family: 'DM Sans', sans-serif; }
.page-shell { min-height: 100vh; overflow: hidden; }
.container { width: min(1120px, calc(100% - 64px)); margin: auto; }
.nav { align-items: center; display: flex; justify-content: space-between; padding: 30px 0; }
.brand { align-items: center; display: flex; text-decoration: none; }
.brand-logo { display: block; height: auto; max-height: 48px; max-width: 180px; width: auto; }
.nav-note { color: #6f818d; font-family: 'DM Mono', monospace; font-size: 11px; text-transform: uppercase; letter-spacing: .1em; }
.nav-note i { background: var(--cyan); border-radius: 50%; display: inline-block; height: 7px; margin: 0 8px 1px 0; width: 7px; }
.hero { align-items: center; display: grid; gap: 72px; grid-template-columns: .95fr 1.05fr; min-height: 600px; padding: 48px 0 80px; }
.eyebrow, .promise-label { color: #078c9e; font-family: 'DM Mono', monospace; font-size: 11px; letter-spacing: .12em; margin: 0 0 23px; text-transform: uppercase; }
h1 { font-size: clamp(52px, 6.6vw, 82px); letter-spacing: -.075em; line-height: .94; margin: 0; }
.intro { color: #617681; font-size: 16px; line-height: 1.7; margin: 30px 0 27px; max-width: 470px; }
h1 em { color: #079eb2; font-family: 'Playfair Display', Georgia, serif; font-weight: 600; letter-spacing: -.06em; }
.price-note { align-items: baseline; display: flex; gap: 7px; margin: 0 0 18px; }.price-note strong { color: #078c9e; font-size: 20px; letter-spacing: -.04em; }.price-note span { color: #71858e; font-family: 'DM Mono', monospace; font-size: 10px; text-transform: uppercase; letter-spacing: .05em; }
.notify-form { background: white; border: 1px solid var(--line); border-radius: 7px; display: grid; gap: 8px; max-width: 450px; padding: 9px; box-shadow: 0 12px 35px #123b5d12; }
.notify-form input, .notify-form textarea { background: #f5fbfa; border: 1px solid #e2efec; border-radius: 4px; color: var(--ink); font: inherit; min-width: 0; outline: 0; padding: 12px 13px; resize: vertical; width: 100%; }
.notify-form input:focus, .notify-form textarea:focus { border-color: var(--cyan); box-shadow: 0 0 0 3px #21c7d925; }
.notify-form button { background: var(--black); border: 0; border-radius: 4px; color: white; cursor: pointer; font: 600 13px 'DM Sans'; min-height: 46px; padding: 0 18px; transition: background .2s, transform .2s; }
.notify-form button:hover { background: #078c9e; transform: translateY(-1px); }.notify-form button span { color: var(--cyan); font-size: 18px; margin-left: 12px; }
.fine-print { color: #9a9c94; font-size: 11px; line-height: 1.5; margin: 12px 0; }
.hero-visual { min-height: 450px; position: relative; }.orb { border-radius: 50%; position: absolute; }.orb-large { background: var(--teal); height: 390px; right: 20px; top: 38px; width: 390px; }.orb-small { background: var(--cyan); height: 72px; right: 10px; top: 3px; width: 72px; }
.language-card { background: var(--black); border-radius: 10px; box-shadow: 18px 24px 50px #123b5d35; color: white; left: 35px; padding: 22px; position: absolute; top: 100px; transform: rotate(-3deg); width: 340px; z-index: 2; }.card-top { color: #9cb7bd; font-family: 'DM Mono'; font-size: 10px; letter-spacing: .05em; text-transform: uppercase; }.live-dot { background: var(--cyan); border-radius: 50%; display: inline-block; height: 6px; margin-right: 6px; width: 6px; }.dots { color: var(--teal); float: right; letter-spacing: 3px; }.conversation { display: flex; flex-direction: column; gap: 11px; padding: 42px 0 36px; }.bubble { border-radius: 8px; font-size: 13px; line-height: 1.45; padding: 11px 13px; width: fit-content; }.bubble-them { background: #214761; }.bubble-you { align-self: flex-end; background: var(--cyan); color: var(--black); text-align: right; }.bubble small { color: #095c6e; font-size: 10px; }.bubble.short { background: var(--teal); color: var(--ink); }.card-bottom { border-top: 1px solid #ffffff1c; color: #9cb7bd; font-size: 11px; padding-top: 14px; }.card-bottom span { color: var(--cyan); font-size: 8px; margin-right: 5px; }
.floating-card { background: #ffffff; box-shadow: 8px 12px 30px #123b5d24; position: absolute; z-index: 3; }.phrase-card { bottom: 65px; padding: 17px 20px; right: 4px; transform: rotate(4deg); width: 190px; }.phrase-card span, .phrase-card small { color: #6f818d; display: block; font-family: 'DM Mono'; font-size: 9px; text-transform: uppercase; }.phrase-card strong { color: var(--ink); display: block; font-family: 'Playfair Display'; font-size: 23px; margin: 8px 0; }.phrase-card small { font-size: 9px; text-transform: none; }.progress-card { align-items: center; background: var(--cyan); border-radius: 50%; color: var(--black); display: flex; gap: 5px; height: 94px; justify-content: center; left: 0; top: 38px; transform: rotate(-10deg); width: 94px; }.progress-card strong { font: 34px 'Playfair Display'; }.progress-card span { font: 9px 'DM Mono'; text-transform: uppercase; }.scribble { bottom: 11px; color: #078c9e; font-family: 'Playfair Display'; font-size: 20px; line-height: .9; position: absolute; right: 235px; transform: rotate(-7deg); }
.promise { border-top: 1px solid var(--line); padding: 40px 0 46px; }.promise-label { color: #6f818d; margin-bottom: 28px; }.promise-grid { display: grid; gap: 35px; grid-template-columns: repeat(3, 1fr); }.promise-grid article { border-top: 2px solid var(--ink); padding-top: 15px; }.promise-grid span { color: #078c9e; font: 11px 'DM Mono'; }.promise-grid h2 { font-size: 19px; letter-spacing: -.04em; margin: 15px 0 8px; }.promise-grid p { color: #617681; font-size: 13px; line-height: 1.6; margin: 0; max-width: 280px; }.footer { border-top: 1px solid var(--line); color: #78909a; display: flex; font: 10px 'DM Mono'; justify-content: space-between; padding: 23px 0 28px; text-transform: uppercase; letter-spacing: .06em; }
.sr-only { height: 1px; margin: -1px; overflow: hidden; position: absolute; width: 1px; clip: rect(0,0,0,0); }
@media (max-width: 760px) { .container { width: min(100% - 40px, 560px); }.nav { padding: 22px 0; }.hero { display: flex; flex-direction: column; gap: 25px; min-height: auto; padding: 62px 0 55px; }.hero-copy { width: 100%; } h1 { font-size: clamp(49px, 15vw, 70px); }.intro { font-size: 15px; }.hero-visual { margin: 0 -10px; min-height: 405px; transform: scale(.9); transform-origin: top center; width: calc(100% + 20px); }.language-card { left: 5%; }.orb-large { right: 4%; }.promise-grid { gap: 27px; grid-template-columns: 1fr; }.promise-grid p { max-width: 430px; }.footer { gap: 15px; line-height: 1.5; }.scribble { right: 24%; } }
@media (prefers-reduced-motion: reduce) { *, *::before, *::after { scroll-behavior: auto !important; transition: none !important; } }
</style>
