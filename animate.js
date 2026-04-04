/* ══════════════════════════════════════════════════════════════
   NEUROSTUDIO — ANIMATE.JS v4
   Particle BG · Scroll reveal · Orbit panel · Card glow
   Ripple · Magnetic btns · Parallax · Counter · Tilt
   ══════════════════════════════════════════════════════════════ */
'use strict';


/* ─── 1. PARTICLE BACKGROUND ──────────────────────────────── */
(function initParticles() {
  const canvas = document.createElement('canvas');
  canvas.id = 'particle-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.prepend(canvas);
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  function Particle() { this.reset(); }
  Particle.prototype.reset = function() {
    this.x = Math.random() * W;
    this.y = Math.random() * H;
    this.r = Math.random() * 1.3 + 0.3;
    this.vx = (Math.random() - 0.5) * 0.28;
    this.vy = (Math.random() - 0.5) * 0.28 - 0.08;
    this.alpha = Math.random() * 0.35 + 0.08;
    this.hue = Math.random() > 0.55 ? '96,165,250' : '37,99,235';
  };
  Particle.prototype.update = function() {
    this.x += this.vx; this.y += this.vy;
    if (this.y < 0 || this.x < -10 || this.x > W + 10) this.reset();
  };
  Particle.prototype.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(' + this.hue + ',' + this.alpha + ')';
    ctx.fill();
  };

  for (var i = 0; i < 75; i++) particles.push(new Particle());

  function loop() {
    ctx.clearRect(0, 0, W, H);
    for (var a = 0; a < particles.length; a++) {
      particles[a].update(); particles[a].draw();
      for (var b = a + 1; b < particles.length; b++) {
        var dx = particles[a].x - particles[b].x;
        var dy = particles[a].y - particles[b].y;
        var dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 110) {
          ctx.beginPath();
          ctx.strokeStyle = 'rgba(37,99,235,' + (0.07 * (1 - dist / 110)) + ')';
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(loop);
  }
  loop();
})();

/* ─── 2. SCROLL PROGRESS ──────────────────────────────────── */
(function initScrollProgress() {
  const bar = document.querySelector('.scroll-progress');
  if (!bar) return;
  window.addEventListener('scroll', function() {
    const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
    bar.style.width = Math.min(pct, 100) + '%';
  }, { passive: true });
})();

/* ─── 3. NAV SCROLL EFFECT ────────────────────────────────── */
(function initNavScroll() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ─── 4. SCROLL REVEAL ────────────────────────────────────── */
(function initReveal() {
  // Auto-add reveal to extra elements with stagger
  document.querySelectorAll('.bento__card, .plan-card, .dif__item, .valores__card, .stats-strip__item').forEach(function(el, i) {
    if (!el.classList.contains('reveal')) {
      el.classList.add('reveal');
      el.style.transitionDelay = (i % 4) * 0.09 + 's';
    }
  });

  const io = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .reveal--right, .reveal--scale').forEach(function(el) { io.observe(el); });
})();

/* ─── 5. HERO ORBIT CARDS ─────────────────────────────────── */
(function initOrbit() {
  var orbit = document.querySelector('.char-orbit');
  if (!orbit) return;

  /* SVG icons for modal header */
  var SVC_ICON = {
    ads: '<svg width="56" height="56" viewBox="0 0 68 68" fill="none"><circle cx="34" cy="34" r="28" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.42)" stroke-width="1.8"/><circle cx="34" cy="34" r="20" fill="rgba(255,255,255,0.10)" stroke="rgba(255,255,255,0.58)" stroke-width="2"/><circle cx="34" cy="34" r="12" fill="rgba(255,255,255,0.16)" stroke="rgba(255,255,255,0.75)" stroke-width="2.2"/><circle cx="34" cy="34" r="5.5" fill="rgba(255,255,255,0.95)"/><path d="M47 21 L37 31" stroke="white" stroke-width="3" stroke-linecap="round"/><path d="M43.5 18 L50 18 L50 24.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    web: '<svg width="56" height="56" viewBox="0 0 68 68" fill="none"><rect x="7" y="13" width="54" height="40" rx="7" fill="rgba(255,255,255,0.10)" stroke="rgba(255,255,255,0.75)" stroke-width="2"/><rect x="7" y="13" width="54" height="15" rx="7" fill="rgba(255,255,255,0.18)"/><rect x="7" y="21" width="54" height="7" fill="rgba(255,255,255,0.08)"/><circle cx="17" cy="21" r="3.5" fill="rgba(255,255,255,0.90)"/><circle cx="27" cy="21" r="3.5" fill="rgba(255,255,255,0.65)"/><circle cx="37" cy="21" r="3.5" fill="rgba(255,255,255,0.42)"/><path d="M16 37 L22 43 L16 49" stroke="rgba(255,255,255,0.85)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M28 43 L38 43" stroke="rgba(255,255,255,0.70)" stroke-width="2.5" stroke-linecap="round"/></svg>',
    ia:  '<svg width="56" height="56" viewBox="0 0 68 68" fill="none"><circle cx="34" cy="7" r="3" fill="rgba(255,255,255,0.75)"/><circle cx="20" cy="14" r="2.5" fill="rgba(255,255,255,0.60)"/><circle cx="48" cy="14" r="2.5" fill="rgba(255,255,255,0.60)"/><circle cx="10" cy="23" r="2" fill="rgba(255,255,255,0.42)"/><circle cx="58" cy="23" r="2" fill="rgba(255,255,255,0.42)"/><line x1="34" y1="10" x2="20" y2="14" stroke="rgba(255,255,255,0.38)" stroke-width="1.4"/><line x1="34" y1="10" x2="48" y2="14" stroke="rgba(255,255,255,0.38)" stroke-width="1.4"/><line x1="20" y1="16" x2="34" y2="28" stroke="rgba(255,255,255,0.33)" stroke-width="1.4"/><line x1="48" y1="16" x2="34" y2="28" stroke="rgba(255,255,255,0.33)" stroke-width="1.4"/><rect x="18" y="28" width="32" height="28" rx="8" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.80)" stroke-width="2.2"/><circle cx="26" cy="39" r="4.5" fill="rgba(255,255,255,0.92)"/><circle cx="42" cy="39" r="4.5" fill="rgba(255,255,255,0.92)"/><path d="M24 49 Q34 55 44 49" stroke="rgba(255,255,255,0.88)" stroke-width="2.5" stroke-linecap="round" fill="none"/><circle cx="34" cy="20" r="2.5" fill="rgba(255,255,255,0.88)"/></svg>',
    social: '<svg width="56" height="56" viewBox="0 0 68 68" fill="none"><circle cx="34" cy="8" r="4.5" fill="rgba(255,255,255,0.75)"/><circle cx="56" cy="21" r="4" fill="rgba(255,255,255,0.65)"/><circle cx="56" cy="47" r="4" fill="rgba(255,255,255,0.65)"/><circle cx="34" cy="60" r="4.5" fill="rgba(255,255,255,0.75)"/><circle cx="12" cy="47" r="4" fill="rgba(255,255,255,0.65)"/><circle cx="12" cy="21" r="4" fill="rgba(255,255,255,0.65)"/><line x1="34" y1="12" x2="52" y2="22" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/><line x1="54" y1="25" x2="54" y2="44" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/><line x1="52" y1="49" x2="36" y2="57" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/><line x1="32" y1="57" x2="16" y2="49" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/><line x1="14" y1="44" x2="14" y2="25" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/><line x1="16" y1="22" x2="32" y2="12" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/><circle cx="34" cy="34" r="8" fill="rgba(255,255,255,0.92)"/></svg>',
    video: '<svg width="56" height="56" viewBox="0 0 68 68" fill="none"><circle cx="20" cy="46" r="14" fill="rgba(255,255,255,0.09)" stroke="rgba(255,255,255,0.60)" stroke-width="2"/><circle cx="20" cy="46" r="5" fill="rgba(255,255,255,0.75)"/><circle cx="20" cy="33" r="2.5" fill="rgba(255,255,255,0.50)"/><circle cx="20" cy="59" r="2.5" fill="rgba(255,255,255,0.50)"/><circle cx="9" cy="40" r="2.5" fill="rgba(255,255,255,0.50)"/><circle cx="31" cy="40" r="2.5" fill="rgba(255,255,255,0.50)"/><rect x="24" y="10" width="38" height="30" rx="7" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.85)" stroke-width="2.2"/><circle cx="43" cy="25" r="10" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.75)" stroke-width="2"/><circle cx="43" cy="25" r="5.5" fill="rgba(255,255,255,0.88)"/><rect x="53" y="13" width="7" height="6" rx="2" fill="rgba(255,255,255,0.65)"/></svg>'
  };

  /* service data + panel logic self-contained inside this IIFE */
  var SVC = {
    ads: {
      title: 'Performance Ads', sub: 'Google · Meta · TikTok', color: '#3b82f6',
      pros: ['Tráfico calificado que llega listo para comprar',
             'ROAS medible: sabés exactamente cuánto ganás por cada peso invertido',
             'Campañas optimizadas en tiempo real para multiplicar resultados'],
      cons: ['Tus clientes le compran a la competencia que sí invierte en ads',
             'Dependés del boca a boca y del algoritmo orgánico sin control',
             'Sin datos, no podés escalar ni predecir tu facturación'],
      waMsg: 'Hola NeuroStudio 👋 Me interesa el servicio de *Performance Ads* (Google, Meta, TikTok) para aumentar mis ventas. ¿Podemos hablar?'
    },
    web: {
      title: 'Diseño Web', sub: 'Landing Pages · E-commerce · SEO', color: '#8b5cf6',
      pros: ['Tu negocio disponible 24/7 como vendedor automático',
             'Primera impresión profesional que genera confianza instantánea',
             'Landing optimizada para convertir visitas en leads y ventas'],
      cons: ['Sin web, los clientes dudan de tu seriedad y se van',
             'Perdés tráfico de búsqueda de Google que va directo a la competencia',
             'Dependencia total de Instagram: si cae el algoritmo, caen tus ventas'],
      waMsg: 'Hola NeuroStudio 👋 Me interesa diseñar o mejorar la *web de mi negocio*. ¿Podemos hablar?'
    },
    ia: {
      title: 'IA & Automatizaciones', sub: 'Chatbots · CRM · WhatsApp 24/7', color: '#06b6d4',
      pros: ['Respuesta instantánea a leads en menos de 2 segundos, 24/7',
             'Chatbot que califica, agenda y cierra ventas mientras dormís',
             'Ahorrás horas de trabajo manual con flujos inteligentes'],
      cons: ['Cada minuto sin responder = lead perdido para siempre',
             'Tus competidores con IA te ganan clientes automáticamente',
             'Tiempo y dinero desperdiciado en tareas repetitivas manuales'],
      waMsg: 'Hola NeuroStudio 👋 Me interesa implementar *automatizaciones con IA* en mi negocio. ¿Podemos hablar?'
    },
    social: {
      title: 'Social Media', sub: 'Instagram · TikTok · Community', color: '#f59e0b',
      pros: ['Perfil que funciona como landing page persuasiva',
             'Comunidad fiel que confía en vos antes de comprar',
             'Autoridad de marca que cobra precios premium sin justificarlos'],
      cons: ['Perfil abandonado transmite desconfianza y aleja clientes',
             'Sin constancia, el algoritmo te vuelve invisible',
             'Perdés la chance de construir una marca que vende sola'],
      waMsg: 'Hola NeuroStudio 👋 Me interesa el servicio de *Social Media Management* para mis redes sociales. ¿Podemos hablar?'
    },
    video: {
      title: 'Contenido Viral', sub: 'Reels · TikToks · Carruseles', color: '#ec4899',
      pros: ['Reels y TikToks que detienen el scroll y despiertan deseo de compra',
             'Contenido con ganchos psicológicos que retienen audiencia',
             'Posicionamiento de autoridad que hace crecer tu comunidad rápido'],
      cons: ['Contenido genérico = marca olvidable = sin ventas',
             'El algoritmo penaliza la baja producción con menor alcance',
             'Tus competidores dominan el feed mientras vos no estás'],
      waMsg: 'Hola NeuroStudio 👋 Me interesa la *creación de contenido viral* (Reels, TikToks, Carruseles) para mi marca. ¿Podemos hablar?'
    }
  };

  function openPanel(data, svc) {
    var panel = document.getElementById('orbit-panel');
    if (!panel) return;

    // Icon
    var iconWrap = panel.querySelector('#op-icon-wrap');
    if (iconWrap && svc && SVC_ICON[svc]) iconWrap.innerHTML = SVC_ICON[svc];

    panel.querySelector('.op-title').textContent = data.title;
    panel.querySelector('.op-sub').textContent   = data.sub;

    var prosList = panel.querySelector('.op-pros');
    prosList.innerHTML = '';
    data.pros.forEach(function(p) {
      var li = document.createElement('li');
      li.innerHTML = '<span class="op-icon op-icon--yes">✓</span><span>' + p + '</span>';
      prosList.appendChild(li);
    });

    var consList = panel.querySelector('.op-cons');
    consList.innerHTML = '';
    data.cons.forEach(function(c) {
      var li = document.createElement('li');
      li.innerHTML = '<span class="op-icon op-icon--no">✗</span><span>' + c + '</span>';
      consList.appendChild(li);
    });

    var waBtn = panel.querySelector('.op-wa-btn');
    if (waBtn) waBtn.href = 'https://wa.me/59899421323?text=' + encodeURIComponent(data.waMsg);

    panel.style.setProperty('--panel-color', data.color || '#3b82f6');
    panel.classList.add('open');
    document.body.classList.add('panel-open');
  }

  /* close panel */
  (function() {
    var panel   = document.getElementById('orbit-panel');
    var overlay = document.getElementById('orbit-overlay');
    if (!panel) return;
    function close() { panel.classList.remove('open'); document.body.classList.remove('panel-open'); }
    var btn = panel.querySelector('.op-close');
    if (btn)     btn.addEventListener('click', close);
    if (overlay) overlay.addEventListener('click', close);
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape') close(); });
  })();

  /* rotation */
  var angle = 0;
  var slots  = orbit.querySelectorAll('.char-slot');
  var count  = slots.length;
  var radius = window.innerWidth < 900 ? 118 : 165;
  window.addEventListener('resize', function() { radius = window.innerWidth < 900 ? 118 : 165; });

  function rotateOrbit() {
    angle += 0.22;
    slots.forEach(function(slot, i) {
      var base = (360 / count) * i + angle;
      var rad  = base * Math.PI / 180;
      var x    = Math.cos(rad) * radius;
      var y    = Math.sin(rad) * radius;
      slot.style.transform = 'translate(calc(-50% + ' + x + 'px), calc(-50% + ' + y + 'px))';
      var card = slot.querySelector('.char-card');
      if (card) card.style.transform = 'rotate(' + (-angle) + 'deg)';
    });
    requestAnimationFrame(rotateOrbit);
  }
  rotateOrbit();

  /* click → open panel */
  orbit.addEventListener('click', function(e) {
    var card = e.target.closest('.char-card');
    if (!card) return;
    var svc = card.dataset.service;
    var data = SVC[svc];
    if (!data) return;
    openPanel(data, svc);
  });

  /* touch support for mobile */
  orbit.addEventListener('touchend', function(e) {
    var card = e.target.closest('.char-card');
    if (!card) return;
    e.preventDefault();
    var svc = card.dataset.service;
    var data = SVC[svc];
    if (!data) return;
    openPanel(data, svc);
  }, { passive: false });
})();

/* initPanelClose is now embedded inside initOrbit above */

/* ─── 7. CARD MOUSE GLOW ──────────────────────────────────── */
(function initCardGlow() {
  document.querySelectorAll('.bento__card, .plan-card, .valores__mv-card, .stats-strip__item').forEach(function(card) {
    card.addEventListener('mousemove', function(e) {
      var rect = card.getBoundingClientRect();
      var x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
      var y = ((e.clientY - rect.top)  / rect.height * 100).toFixed(1);
      card.style.setProperty('--mx', x + '%');
      card.style.setProperty('--my', y + '%');
    });
  });
})();

/* ─── 8. CARD TILT ────────────────────────────────────────── */
(function initCardTilt() {
  document.querySelectorAll('.bento__card, .valores__mv-card, .plan-card').forEach(function(card) {
    card.addEventListener('mousemove', function(e) {
      var rect = card.getBoundingClientRect();
      var cx = rect.left + rect.width  / 2;
      var cy = rect.top  + rect.height / 2;
      var dx = (e.clientX - cx) / (rect.width  / 2);
      var dy = (e.clientY - cy) / (rect.height / 2);
      card.style.transform = 'translateY(-6px) rotateX(' + (-dy * 3.5) + 'deg) rotateY(' + (dx * 3.5) + 'deg) scale(1.01)';
    });
    card.addEventListener('mouseleave', function() { card.style.transform = ''; });
  });
})();

/* ─── 9. RIPPLE ON BUTTONS ────────────────────────────────── */
(function initRipple() {
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('.btn, .char-card, .guia__option');
    if (!btn) return;
    var r = document.createElement('span');
    r.className = 'ripple';
    var rect = btn.getBoundingClientRect();
    var size = Math.max(rect.width, rect.height) * 2;
    r.style.cssText = 'width:' + size + 'px;height:' + size + 'px;left:' + (e.clientX - rect.left - size/2) + 'px;top:' + (e.clientY - rect.top - size/2) + 'px';
    btn.style.overflow = 'hidden';
    btn.appendChild(r);
    r.addEventListener('animationend', function() { r.remove(); });
  });
})();

/* ─── 10. MAGNETIC BUTTONS ────────────────────────────────── */
(function initMagnetic() {
  document.querySelectorAll('.btn--primary, .btn--nav').forEach(function(btn) {
    btn.addEventListener('mousemove', function(e) {
      var rect = btn.getBoundingClientRect();
      var dx = (e.clientX - rect.left - rect.width/2)  * 0.22;
      var dy = (e.clientY - rect.top  - rect.height/2) * 0.22;
      btn.style.transform = 'translate(' + dx + 'px,' + dy + 'px) translateY(-2px)';
    });
    btn.addEventListener('mouseleave', function() { btn.style.transform = ''; });
  });
})();

/* ─── 11. PARALLAX ORBS ───────────────────────────────────── */
(function initParallax() {
  var orbs = document.querySelectorAll('.hero-orb');
  if (!orbs.length) return;
  window.addEventListener('scroll', function() {
    var y = window.scrollY;
    orbs.forEach(function(orb, i) {
      var dir = i % 2 === 0 ? 1 : -1;
      orb.style.transform = 'translateY(' + (y * (0.25 + i * 0.12) * dir) + 'px)';
    });
  }, { passive: true });

  // Mouse tracking on orb-3
  var orb3 = document.querySelector('.hero-orb--3');
  if (orb3) {
    document.addEventListener('mousemove', function(e) {
      var x = (e.clientX / window.innerWidth  - 0.5) * 55;
      var y2 = (e.clientY / window.innerHeight - 0.5) * 55;
      orb3.style.transform = 'translate(' + x + 'px,' + y2 + 'px)';
    }, { passive: true });
  }
})();

/* ─── 12. STAT COUNTERS ───────────────────────────────────── */
(function initCounters() {
  function countUp(el) {
    var text   = el.textContent;
    var num    = parseFloat(text.replace(/[^0-9.]/g, ''));
    if (isNaN(num)) return;
    var suffix = text.replace(/[0-9.]/g, '');
    var isInt  = Number.isInteger(num);
    var t0 = performance.now();
    var dur = 1600;
    function tick(now) {
      var p = Math.min((now - t0) / dur, 1);
      var e = 1 - Math.pow(1 - p, 3);
      el.textContent = (isInt ? Math.round(e * num) : (e * num).toFixed(1)) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  var io = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (!e.isIntersecting) return;
      countUp(e.target);
      io.unobserve(e.target);
    });
  }, { threshold: 0.7 });

  document.querySelectorAll('.stats-strip__num[data-count], .auditor__stat-badge strong').forEach(function(el) {
    io.observe(el);
  });
})();

/* ─── 13. NAV ACTIVE LINK ─────────────────────────────────── */
(function initNavActive() {
  var sections = document.querySelectorAll('section[id]');
  var links    = document.querySelectorAll('.nav__links a[href^="#"]');
  var io = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        var id = e.target.id;
        links.forEach(function(l) {
          l.style.color = (l.getAttribute('href') === '#' + id) ? '#fff' : '';
        });
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(function(s) { io.observe(s); });
})();

/* ─── 14. SECTION IN-VIEW CLASS ───────────────────────────── */
(function initSectionClass() {
  var io = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) { if (e.isIntersecting) e.target.classList.add('in-view'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('section').forEach(function(s) { io.observe(s); });
})();

/* ─── 15. CHAR CARD HOVER PULSE ──────────────────────────── */
(function initCharCardPulse() {
  document.querySelectorAll('.char-card').forEach(function(card) {
    card.addEventListener('mouseenter', function() {
      card.querySelector('.ios-icon') && (card.querySelector('.ios-icon').style.boxShadow = '0 0 28px rgba(96,165,250,0.7)');
    });
    card.addEventListener('mouseleave', function() {
      card.querySelector('.ios-icon') && (card.querySelector('.ios-icon').style.boxShadow = '');
    });
  });
})();

/* ─── 16. FLIP CARDS (services section) ──────────────────── */
(function initFlipCards() {
  document.querySelectorAll('.flip-card').forEach(function(card) {
    card.addEventListener('click', function(e) {
      // Don't flip when clicking the WhatsApp button
      if (e.target.closest('.flip-wa-btn')) return;
      card.classList.toggle('is-flipped');
    });
  });
})();

/* ─── 17. TIMELINE (valores / quiénes somos) ────────────────── */
(function initTimeline() {
  var items  = document.querySelectorAll('.ns-timeline__item');
  var panels = document.querySelectorAll('.ns-timeline__panel-content');
  if (!items.length) return;

  function activateTl(tl) {
    items.forEach(function(i) { i.classList.remove('active'); });
    panels.forEach(function(p) { p.classList.remove('active'); });
    var item  = document.querySelector('.ns-timeline__item[data-tl="' + tl + '"]');
    var panel = document.querySelector('.ns-timeline__panel-content[data-tl="' + tl + '"]');
    if (item)  item.classList.add('active');
    if (panel) panel.classList.add('active');
  }

  items.forEach(function(item) {
    item.addEventListener('click', function() {
      if (!item.classList.contains('active')) {
        activateTl(item.dataset.tl);
        // Smooth scroll to stage on mobile
        if (window.innerWidth <= 768) {
          var stage = document.querySelector('.ns-timeline__stage');
          if (stage) setTimeout(function() {
            stage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }, 80);
        }
      }
    });
  });

  // Activate first on load
  if (items[0]) activateTl(items[0].dataset.tl);
})();

/* ─── 18. PROCESO ACCORDION (fixed: collapses cleanly, no text bleed) ─ */
(function initProcesoAccordion() {
  var steps = document.querySelectorAll('.proceso__step--accordion');
  if (!steps.length) return;
  steps.forEach(function(step) {
    var trigger = step.querySelector('.proceso__step-trigger');
    if (!trigger) return;
    trigger.addEventListener('click', function(e) {
      if (e.target.closest('.btn')) return;
      var isOpen = step.classList.contains('open');
      /* Close ALL steps first, wait for CSS transition visibility */
      steps.forEach(function(s) { s.classList.remove('open'); });
      if (!isOpen) {
        /* Small delay so the closing animation doesn't clash */
        setTimeout(function() {
          step.classList.add('open');
          setTimeout(function() {
            step.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }, 80);
        }, 30);
      }
    });
  });
})();

/* ─── 19. NAV SERVICES DROPDOWN ─────────────────────────────── */
(function initNavServicesDropdown() {
  var btn      = document.getElementById('servBtn');
  var item     = document.getElementById('servItem');
  var dropdown = document.getElementById('servDropdown');
  if (!btn || !item || !dropdown) return;
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    var open = item.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    dropdown.setAttribute('aria-hidden', open ? 'false' : 'true');
  });
  document.addEventListener('click', function(e) {
    if (!item.contains(e.target)) {
      item.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      dropdown.setAttribute('aria-hidden', 'true');
    }
  });
  dropdown.querySelectorAll('[data-close-dropdown]').forEach(function(a) {
    a.addEventListener('click', function() {
      item.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      dropdown.setAttribute('aria-hidden', 'true');
    });
  });
})();

/* ─── 20. DIF ACCORDION ──────────────────────────────────────── */
(function initDifAccordion() {
  var items = document.querySelectorAll('.dif__acc-item');
  if (!items.length) return;
  items.forEach(function(item) {
    var trigger = item.querySelector('.dif__acc-trigger');
    if (!trigger) return;
    trigger.addEventListener('click', function() {
      var isOpen = item.classList.contains('open');
      /* Close all */
      items.forEach(function(it) { it.classList.remove('open'); });
      /* Toggle current */
      if (!isOpen) item.classList.add('open');
    });
  });
})();

/* ─── 21. BENTO CARDS → OPEN SERVICE MODAL ───────────────────── */
(function initBentoModal() {
  /* Re-use the openPanel function from initOrbit.
     Since initOrbit may not run (orbit DOM removed), we define openPanel here */
  var SVC_DATA = {
    ia: {
      title: 'IA & Automatizaciones', sub: 'Chatbots · CRM · WhatsApp 24/7', color: '#06b6d4',
      pros: ['Respuesta instantánea a leads en menos de 2 segundos, 24/7',
             'Chatbot que califica, agenda y cierra ventas mientras dormís',
             'Ahorrás horas de trabajo manual con flujos inteligentes'],
      cons: ['Cada minuto sin responder = lead perdido para siempre',
             'Tus competidores con IA te ganan clientes automáticamente',
             'Tiempo y dinero desperdiciado en tareas repetitivas manuales'],
      waMsg: 'Hola NeuroStudio 👋 Me interesa implementar *automatizaciones con IA* en mi negocio. ¿Podemos hablar?'
    },
    web: {
      title: 'Diseño Web', sub: 'Landing Pages · E-commerce · SEO', color: '#8b5cf6',
      pros: ['Tu negocio disponible 24/7 como vendedor automático',
             'Primera impresión profesional que genera confianza instantánea',
             'Landing optimizada para convertir visitas en leads y ventas'],
      cons: ['Sin web, los clientes dudan de tu seriedad y se van',
             'Perdés tráfico de Google que va directo a la competencia',
             'Dependencia total de Instagram: si cae el algoritmo, caen tus ventas'],
      waMsg: 'Hola NeuroStudio 👋 Me interesa diseñar o mejorar la *web de mi negocio*. ¿Podemos hablar?'
    },
    ads: {
      title: 'Performance Ads', sub: 'Google · Meta · TikTok', color: '#3b82f6',
      pros: ['Tráfico calificado que llega listo para comprar',
             'ROAS medible: sabés exactamente cuánto ganás por cada peso invertido',
             'Campañas optimizadas en tiempo real para multiplicar resultados'],
      cons: ['Tus clientes le compran a la competencia que sí invierte en ads',
             'Dependés del boca a boca y del algoritmo orgánico sin control',
             'Sin datos, no podés escalar ni predecir tu facturación'],
      waMsg: 'Hola NeuroStudio 👋 Me interesa el servicio de *Performance Ads* (Google, Meta, TikTok) para aumentar mis ventas. ¿Podemos hablar?'
    },
    video: {
      title: 'Contenido Viral', sub: 'Reels · TikToks · Carruseles', color: '#ec4899',
      pros: ['Reels y TikToks que detienen el scroll y despiertan deseo de compra',
             'Contenido con ganchos psicológicos que retienen audiencia',
             'Posicionamiento de autoridad que hace crecer tu comunidad rápido'],
      cons: ['Contenido genérico = marca olvidable = sin ventas',
             'El algoritmo penaliza la baja producción con menor alcance',
             'Tus competidores dominan el feed mientras vos no estás'],
      waMsg: 'Hola NeuroStudio 👋 Me interesa la *creación de contenido viral* (Reels, TikToks) para mi marca. ¿Podemos hablar?'
    },
    social: {
      title: 'Social Media', sub: 'Instagram · TikTok · Community', color: '#f59e0b',
      pros: ['Perfil que funciona como landing page persuasiva',
             'Comunidad fiel que confía en vos antes de comprar',
             'Autoridad de marca que cobra precios premium'],
      cons: ['Perfil abandonado transmite desconfianza y aleja clientes',
             'Sin constancia, el algoritmo te vuelve invisible',
             'Perdés la chance de construir una marca que vende sola'],
      waMsg: 'Hola NeuroStudio 👋 Me interesa el servicio de *Social Media Management* para mis redes sociales. ¿Podemos hablar?'
    }
  };

  function openServicePanel(svc) {
    var data = SVC_DATA[svc];
    if (!data) return;
    var panel = document.getElementById('orbit-panel');
    if (!panel) return;

    panel.querySelector('.op-title').textContent = data.title;
    panel.querySelector('.op-sub').textContent   = data.sub;

    var prosList = panel.querySelector('.op-pros');
    prosList.innerHTML = '';
    data.pros.forEach(function(p) {
      var li = document.createElement('li');
      li.innerHTML = '<span class="op-icon op-icon--yes">✓</span><span>' + p + '</span>';
      prosList.appendChild(li);
    });

    var consList = panel.querySelector('.op-cons');
    consList.innerHTML = '';
    data.cons.forEach(function(c) {
      var li = document.createElement('li');
      li.innerHTML = '<span class="op-icon op-icon--no">✗</span><span>' + c + '</span>';
      consList.appendChild(li);
    });

    var waBtn = panel.querySelector('.op-wa-btn');
    if (waBtn) waBtn.href = 'https://wa.me/59899421323?text=' + encodeURIComponent(data.waMsg);

    panel.style.setProperty('--panel-color', data.color || '#3b82f6');
    panel.classList.add('open');
    document.body.classList.add('panel-open');
  }

  /* Attach to bento cards */
  document.querySelectorAll('.bento__card[data-service]').forEach(function(card) {
    card.addEventListener('click', function() {
      openServicePanel(card.dataset.service);
    });
  });

  /* Close listeners */
  (function attachClose() {
    var panel   = document.getElementById('orbit-panel');
    var overlay = document.getElementById('orbit-overlay');
    if (!panel) return;
    function closePanel() {
      panel.classList.remove('open');
      document.body.classList.remove('panel-open');
    }
    var closeBtn = panel.querySelector('.op-close');
    if (closeBtn) closeBtn.addEventListener('click', closePanel);
    if (overlay)  overlay.addEventListener('click', closePanel);
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closePanel();
    });
  })();
})();

