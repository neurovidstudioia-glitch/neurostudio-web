"""
Rebuild index.html for NeuroStudio website.
This script constructs the full HTML from known sections.
"""

html = """<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>NeuroStudio \u2014 Agencia de Marketing Digital \xb7 Montevideo, Uruguay</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap" rel="stylesheet" />
  <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
  <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
  <link rel="stylesheet" href="style.css?v=16" />
</head>
<body>

  <!-- SCROLL PROGRESS -->
  <div class="scroll-progress"></div>

  <!-- CURSOR GLOW (desktop only) -->
  <div class="cursor-glow" aria-hidden="true"></div>

  <!-- AMBIENT BACKGROUND ORBS -->
  <div class="bg-canvas" aria-hidden="true">
    <div class="hero-orb hero-orb--1"></div>
    <div class="hero-orb hero-orb--2"></div>
    <div class="hero-orb hero-orb--3"></div>
  </div>

  <!-- NAV -->
  <nav class="nav" id="nav">
    <div class="nav__inner">
      <a href="#" class="nav__logo">NeuroStudio</a>
      <ul class="nav__links">
        <li class="nav__item--dropdown" id="servItem">
          <button class="nav__dropdown-trigger" id="servBtn" aria-expanded="false">
            Servicios
            <svg class="nav__chevron" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="nav__dropdown" id="servDropdown" aria-hidden="true">
            <div class="nav__dropdown-grid">
              <a href="#servicios" class="nav__dropdown-item" data-close-dropdown>
                <div class="nav__dropdown-icon">
                  <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="14" cy="14" r="11" stroke="currentColor" stroke-width="2"/>
                    <circle cx="14" cy="14" r="6" stroke="currentColor" stroke-width="2"/>
                    <circle cx="14" cy="14" r="2" fill="currentColor"/>
                    <line x1="14" y1="3" x2="14" y2="0" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    <line x1="25" y1="14" x2="28" y2="14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                </div>
                <div class="nav__dropdown-text">
                  <span class="nav__dropdown-title">Meta &amp; Google Ads</span>
                  <span class="nav__dropdown-desc">Campa\xf1as pagadas de alta conversi\xf3n</span>
                </div>
              </a>
              <a href="#servicios" class="nav__dropdown-item" data-close-dropdown>
                <div class="nav__dropdown-icon">
                  <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="5" width="22" height="16" rx="2" stroke="currentColor" stroke-width="2"/>
                    <path d="M11 9.5L19 14L11 18.5V9.5Z" fill="currentColor"/>
                  </svg>
                </div>
                <div class="nav__dropdown-text">
                  <span class="nav__dropdown-title">Creaci\xf3n de Contenido</span>
                  <span class="nav__dropdown-desc">Producci\xf3n visual y audiovisual</span>
                </div>
              </a>
              <a href="#servicios" class="nav__dropdown-item" data-close-dropdown>
                <div class="nav__dropdown-icon">
                  <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6C4 4.9 4.9 4 6 4H22C23.1 4 24 4.9 24 6V18C24 19.1 23.1 20 22 20H8L4 24V6Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
                    <line x1="9" y1="10" x2="19" y2="10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    <line x1="9" y1="14" x2="15" y2="14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                </div>
                <div class="nav__dropdown-text">
                  <span class="nav__dropdown-title">Community Management</span>
                  <span class="nav__dropdown-desc">Gesti\xf3n diaria de redes sociales</span>
                </div>
              </a>
              <a href="#servicios" class="nav__dropdown-item" data-close-dropdown>
                <div class="nav__dropdown-icon">
                  <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="6" width="12" height="12" rx="2" stroke="currentColor" stroke-width="2"/>
                    <circle cx="11" cy="9" r="1" fill="currentColor"/>
                    <circle cx="17" cy="9" r="1" fill="currentColor"/>
                    <path d="M11 13H17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    <path d="M14 18V22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    <path d="M4 10H8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    <path d="M20 10H24" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                </div>
                <div class="nav__dropdown-text">
                  <span class="nav__dropdown-title">Automatizaciones con IA</span>
                  <span class="nav__dropdown-desc">Flujos inteligentes que trabajan 24/7</span>
                </div>
              </a>
              <a href="#servicios" class="nav__dropdown-item nav__dropdown-item--full" data-close-dropdown>
                <div class="nav__dropdown-icon">
                  <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="22" height="17" rx="2" stroke="currentColor" stroke-width="2"/>
                    <path d="M3 9H25" stroke="currentColor" stroke-width="2"/>
                    <circle cx="7" cy="6.5" r="1" fill="currentColor"/>
                    <circle cx="11" cy="6.5" r="1" fill="currentColor"/>
                    <path d="M10 14L13 17L18 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="nav__dropdown-text">
                  <span class="nav__dropdown-title">Dise\xf1o y Desarrollo Web</span>
                  <span class="nav__dropdown-desc">Sitios y landing pages que convierten</span>
                </div>
              </a>
            </div>
          </div>
        </li>
        <li><a href="#planes" data-i18n="navPlans">Planes</a></li>
        <li><a href="#nosotros">Nosotros</a></li>
        <li><a href="#proceso" data-i18n="navProcess">Proceso</a></li>
        <li><a href="#contacto" data-i18n="navContact">Contacto</a></li>
      </ul>
      <div style="display:flex; align-items:center; gap:10px;">
        <a href="#" id="langToggle" class="btn btn--white" style="padding: 0.4rem 0.8rem; border-radius: 8px; font-size: 0.8rem; border: 1px solid var(--gray-200); box-shadow:none;">EN</a>
        <a href="#" class="btn btn--nav btn-agendar" data-i18n="btnAgendar">Agendar Llamada</a>
      </div>
      <button class="nav__burger" id="navBurger" aria-label="Abrir men\xfa">
        <span></span><span></span>
      </button>
    </div>
    <div class="nav__mobile" id="navMobile">
      <a href="#servicios" class="nav__mobile-link" data-i18n="navServices">Servicios</a>
      <a href="#planes" class="nav__mobile-link" data-i18n="navPlans">Planes</a>
      <a href="#proceso" class="nav__mobile-link" data-i18n="navProcess">Proceso</a>
      <a href="#contacto" class="nav__mobile-link" data-i18n="navContact">Contacto</a>
      <a href="#" class="btn btn--primary mt-8 btn-agendar" data-i18n="btnAgendar">Agendar Llamada</a>
    </div>
  </nav>

  <main>

    <!-- HERO -->
    <section class="hero" id="hero">
      <div class="hero__content reveal">
        <span class="tag" data-i18n="heroTag">Marketing Digital &amp; Automatizaciones con IA \xb7 Montevideo</span>
        <h1 class="hero__headline" data-i18n="heroTitle">
          El sistema de<br />
          <span class="hero__headline--accent">marketing&nbsp;+&nbsp;IA</span><br />
          que tu negocio necesita.
        </h1>
        <p class="hero__sub" data-i18n="heroSub">
          Combinamos estrategia de marketing digital con automatizaciones de Inteligencia Artificial para que tu negocio capture leads, responda al instante y cierre ventas en piloto autom\xe1tico. Resultados medibles, crecimiento predecible.
        </p>
        <div class="hero__actions">
          <a href="#" class="btn btn--primary btn-agendar" data-i18n="btnFreeSession">Agendar Sesi\xf3n Gratuita</a>
          <a href="#servicios" class="btn btn--ghost" data-i18n="btnMethod">Conocer m\xe9todo</a>
        </div>
      </div>

      <div class="hero__visual reveal reveal--right">
        <div class="char-system">
          <div class="char-ring char-ring--1"></div>
          <div class="char-ring char-ring--2"></div>

          <div class="char-orbit">

            <!-- 1: Ads -->
            <div class="char-slot" style="--idx:0">
              <div class="char-card" data-service="ads">
                <div class="ios-icon ios-icon--ads">
                  <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="34" cy="34" r="28" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.42)" stroke-width="1.8"/>
                    <circle cx="34" cy="34" r="20" fill="rgba(255,255,255,0.10)" stroke="rgba(255,255,255,0.58)" stroke-width="2"/>
                    <circle cx="34" cy="34" r="12" fill="rgba(255,255,255,0.16)" stroke="rgba(255,255,255,0.75)" stroke-width="2.2"/>
                    <circle cx="34" cy="34" r="5.5" fill="rgba(255,255,255,0.95)"/>
                    <path d="M47 21 L37 31" stroke="white" stroke-width="3" stroke-linecap="round"/>
                    <path d="M43.5 18 L50 18 L50 24.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <span class="char-lbl">Performance Ads</span>
              </div>
            </div>

            <!-- 2: Web -->
            <div class="char-slot" style="--idx:1">
              <div class="char-card" data-service="web">
                <div class="ios-icon ios-icon--web">
                  <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="7" y="13" width="54" height="40" rx="7" fill="rgba(255,255,255,0.10)" stroke="rgba(255,255,255,0.75)" stroke-width="2"/>
                    <rect x="7" y="13" width="54" height="15" rx="7" fill="rgba(255,255,255,0.18)"/>
                    <rect x="7" y="21" width="54" height="7" fill="rgba(255,255,255,0.08)"/>
                    <circle cx="17" cy="21" r="3.5" fill="rgba(255,255,255,0.90)"/>
                    <circle cx="27" cy="21" r="3.5" fill="rgba(255,255,255,0.65)"/>
                    <circle cx="37" cy="21" r="3.5" fill="rgba(255,255,255,0.42)"/>
                    <path d="M16 37 L22 43 L16 49" stroke="rgba(255,255,255,0.85)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                    <path d="M28 43 L38 43" stroke="rgba(255,255,255,0.70)" stroke-width="2.5" stroke-linecap="round"/>
                    <path d="M28 37 L44 37" stroke="rgba(255,255,255,0.45)" stroke-width="2" stroke-linecap="round"/>
                    <path d="M28 49 L36 49" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                </div>
                <span class="char-lbl">Dise\xf1o Web</span>
              </div>
            </div>

            <!-- 3: IA -->
            <div class="char-slot" style="--idx:2">
              <div class="char-card" data-service="ia">
                <div class="ios-icon ios-icon--ia">
                  <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="34" cy="7" r="3" fill="rgba(255,255,255,0.75)"/>
                    <circle cx="20" cy="14" r="2.5" fill="rgba(255,255,255,0.60)"/>
                    <circle cx="48" cy="14" r="2.5" fill="rgba(255,255,255,0.60)"/>
                    <circle cx="10" cy="23" r="2" fill="rgba(255,255,255,0.42)"/>
                    <circle cx="58" cy="23" r="2" fill="rgba(255,255,255,0.42)"/>
                    <line x1="34" y1="10" x2="20" y2="14" stroke="rgba(255,255,255,0.38)" stroke-width="1.4"/>
                    <line x1="34" y1="10" x2="48" y2="14" stroke="rgba(255,255,255,0.38)" stroke-width="1.4"/>
                    <line x1="20" y1="16" x2="34" y2="28" stroke="rgba(255,255,255,0.33)" stroke-width="1.4"/>
                    <line x1="48" y1="16" x2="34" y2="28" stroke="rgba(255,255,255,0.33)" stroke-width="1.4"/>
                    <rect x="18" y="28" width="32" height="28" rx="8" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.80)" stroke-width="2.2"/>
                    <circle cx="26" cy="39" r="4.5" fill="rgba(255,255,255,0.92)"/>
                    <circle cx="42" cy="39" r="4.5" fill="rgba(255,255,255,0.92)"/>
                    <path d="M24 49 Q34 55 44 49" stroke="rgba(255,255,255,0.88)" stroke-width="2.5" stroke-linecap="round" fill="none"/>
                    <circle cx="34" cy="20" r="2.5" fill="rgba(255,255,255,0.88)"/>
                  </svg>
                </div>
                <span class="char-lbl">IA &amp; Automatizaci\xf3n</span>
              </div>
            </div>

            <!-- 4: Social -->
            <div class="char-slot" style="--idx:3">
              <div class="char-card" data-service="social">
                <div class="ios-icon ios-icon--social">
                  <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="34" cy="8" r="4.5" fill="rgba(255,255,255,0.75)"/>
                    <circle cx="56" cy="21" r="4" fill="rgba(255,255,255,0.65)"/>
                    <circle cx="56" cy="47" r="4" fill="rgba(255,255,255,0.65)"/>
                    <circle cx="34" cy="60" r="4.5" fill="rgba(255,255,255,0.75)"/>
                    <circle cx="12" cy="47" r="4" fill="rgba(255,255,255,0.65)"/>
                    <circle cx="12" cy="21" r="4" fill="rgba(255,255,255,0.65)"/>
                    <line x1="34" y1="12" x2="52" y2="22" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/>
                    <line x1="54" y1="25" x2="54" y2="44" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/>
                    <line x1="52" y1="49" x2="36" y2="57" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/>
                    <line x1="32" y1="57" x2="16" y2="49" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/>
                    <line x1="14" y1="44" x2="14" y2="25" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/>
                    <line x1="16" y1="22" x2="32" y2="12" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/>
                    <circle cx="34" cy="34" r="8" fill="rgba(255,255,255,0.92)"/>
                  </svg>
                </div>
                <span class="char-lbl">Social Media</span>
              </div>
            </div>

            <!-- 5: Video -->
            <div class="char-slot" style="--idx:4">
              <div class="char-card" data-service="video">
                <div class="ios-icon ios-icon--video">
                  <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="46" r="14" fill="rgba(255,255,255,0.09)" stroke="rgba(255,255,255,0.60)" stroke-width="2"/>
                    <circle cx="20" cy="46" r="5" fill="rgba(255,255,255,0.75)"/>
                    <circle cx="20" cy="33" r="2.5" fill="rgba(255,255,255,0.50)"/>
                    <circle cx="20" cy="59" r="2.5" fill="rgba(255,255,255,0.50)"/>
                    <circle cx="9" cy="40" r="2.5" fill="rgba(255,255,255,0.50)"/>
                    <circle cx="31" cy="40" r="2.5" fill="rgba(255,255,255,0.50)"/>
                    <rect x="24" y="10" width="38" height="30" rx="7" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.85)" stroke-width="2.2"/>
                    <circle cx="43" cy="25" r="10" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.75)" stroke-width="2"/>
                    <circle cx="43" cy="25" r="5.5" fill="rgba(255,255,255,0.88)"/>
                    <rect x="53" y="13" width="7" height="6" rx="2" fill="rgba(255,255,255,0.65)"/>
                  </svg>
                </div>
                <span class="char-lbl">Contenido Viral</span>
              </div>
            </div>

          </div><!-- /char-orbit -->

          <div class="char-center-glow"></div>
        </div><!-- /char-system -->

        <!-- Orbit panel (popup on card click) -->
        <div class="orbit-panel" id="orbit-panel" role="dialog" aria-modal="true" aria-hidden="true">
          <div class="orbit-panel__overlay" id="op-overlay"></div>
          <div class="orbit-panel__card">
            <button class="orbit-panel__close" id="op-close" aria-label="Cerrar">&times;</button>
            <div class="orbit-panel__header">
              <div class="orbit-panel__icon" id="op-icon-wrap"></div>
              <div>
                <div class="op-title"></div>
                <div class="op-sub"></div>
              </div>
            </div>
            <div class="orbit-panel__body">
              <div class="op-col">
                <h4 class="op-col-title op-col-title--yes">Con NeuroStudio</h4>
                <ul class="op-pros"></ul>
              </div>
              <div class="op-col">
                <h4 class="op-col-title op-col-title--no">Sin NeuroStudio</h4>
                <ul class="op-cons"></ul>
              </div>
            </div>
            <a href="#" class="btn btn--primary orbit-panel__cta" id="op-wa-btn" target="_blank" rel="noopener">
              Quiero este servicio
            </a>
          </div>
        </div>

      </div><!-- /hero__visual -->
    </section>

    <!-- MARQUEE -->
    <section class="marquee-section" aria-hidden="true">
      <div class="marquee-track">
        <span class="marquee-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="M8 12l3 3 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Meta Ads</span>
        <span class="marquee-dot"></span>
        <span class="marquee-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="M8 12l3 3 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Google Ads</span>
        <span class="marquee-dot"></span>
        <span class="marquee-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="M8 12l3 3 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>ChatBot IA</span>
        <span class="marquee-dot"></span>
        <span class="marquee-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="M8 12l3 3 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Contenido Viral</span>
        <span class="marquee-dot"></span>
        <span class="marquee-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="M8 12l3 3 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>WhatsApp Automation</span>
        <span class="marquee-dot"></span>
        <span class="marquee-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="M8 12l3 3 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>TikTok Ads</span>
        <span class="marquee-dot"></span>
        <span class="marquee-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="M8 12l3 3 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Landing Pages</span>
        <span class="marquee-dot"></span>
        <span class="marquee-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="M8 12l3 3 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Email Marketing</span>
        <span class="marquee-dot"></span>
        <!-- Duplicate for seamless loop -->
        <span class="marquee-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="M8 12l3 3 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Meta Ads</span>
        <span class="marquee-dot"></span>
        <span class="marquee-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="M8 12l3 3 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Google Ads</span>
        <span class="marquee-dot"></span>
        <span class="marquee-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="M8 12l3 3 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>ChatBot IA</span>
        <span class="marquee-dot"></span>
        <span class="marquee-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="M8 12l3 3 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Contenido Viral</span>
        <span class="marquee-dot"></span>
        <span class="marquee-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="M8 12l3 3 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>WhatsApp Automation</span>
        <span class="marquee-dot"></span>
        <span class="marquee-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="M8 12l3 3 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>TikTok Ads</span>
        <span class="marquee-dot"></span>
        <span class="marquee-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="M8 12l3 3 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Landing Pages</span>
        <span class="marquee-dot"></span>
        <span class="marquee-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="M8 12l3 3 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Email Marketing</span>
      </div>
    </section>

    <!-- NARRATIVE -->
    <section class="narrative">
      <p class="narrative__statement" id="narrativeStmt">
        El marketing sin datos es <span class="highlight">solo gasto.</span><br />
        Nosotros convertimos cada peso en <span class="highlight">resultado medible.</span>
      </p>
    </section>

    <!-- SERVICES -->
    <section class="services" id="servicios">
      <div class="services__header reveal">
        <span class="tag" data-i18n="servicesTag">Nuestros Servicios</span>
        <h2 class="section-title" data-i18n="servicesTitle">Todo lo que tu negocio<br />necesita para crecer.</h2>
        <p class="section-sub" data-i18n="servicesSub">Desde la estrategia hasta la ejecuci\xf3n, cubrimos cada aspecto de tu presencia digital con IA y datos.</p>
      </div>

      <div class="bento">

        <!-- IA & Automatizaciones — grande izquierda -->
        <div class="bento__card bento__card--ia reveal" data-service="ia">
          <div class="bento__card-icon bento__card-icon--glow">
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
              <rect x="8" y="6" width="12" height="12" rx="2" stroke="currentColor" stroke-width="2"/>
              <circle cx="11" cy="9" r="1" fill="currentColor"/><circle cx="17" cy="9" r="1" fill="currentColor"/>
              <path d="M11 13H17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <path d="M14 18V22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <path d="M4 10H8M20 10H24" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <h3 class="bento__card-title" data-i18n="svcIATitle">Automatizaciones con IA</h3>
          <p class="bento__card-desc" data-i18n="svcIADesc">Chatbots que responden en 2 segundos, pipelines de CRM automatizados, seguimiento de leads por WhatsApp y correo. Tu equipo de ventas trabaja 24/7 sin dormir.</p>
          <div class="bento__card-tags">
            <span class="chip">ChatBot</span>
            <span class="chip">CRM Auto</span>
            <span class="chip">WhatsApp API</span>
            <span class="chip">Make / n8n</span>
          </div>
          <div class="bento__ia-badge"><span class="ia-pulse"></span> Potenciado con IA</div>
        </div>

        <!-- Dise\xf1o Web -->
        <div class="bento__card bento__card--webs reveal reveal--delay-1" data-service="web">
          <div class="bento__card-icon">
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
              <rect x="3" y="4" width="22" height="17" rx="2" stroke="currentColor" stroke-width="2"/>
              <path d="M3 9H25" stroke="currentColor" stroke-width="2"/>
              <circle cx="7" cy="6.5" r="1" fill="currentColor"/>
              <circle cx="11" cy="6.5" r="1" fill="currentColor"/>
              <path d="M10 14L13 17L18 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3 class="bento__card-title" data-i18n="svcWebTitle">Dise\xf1o &amp; Desarrollo Web</h3>
          <p class="bento__card-desc" data-i18n="svcWebDesc">Landing pages de alta conversi\xf3n, sitios corporativos y e-commerce. Dise\xf1o que vende, c\xf3digo que carga r\xe1pido.</p>
          <div class="bento__card-tags">
            <span class="chip">Landing Page</span>
            <span class="chip">E-commerce</span>
            <span class="chip">SEO T\xe9cnico</span>
          </div>
        </div>

        <!-- Performance Ads -->
        <div class="bento__card bento__card--ads reveal" data-service="ads">
          <div class="bento__card-icon">
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="11" stroke="currentColor" stroke-width="2"/>
              <circle cx="14" cy="14" r="6" stroke="currentColor" stroke-width="2"/>
              <circle cx="14" cy="14" r="2" fill="currentColor"/>
            </svg>
          </div>
          <h3 class="bento__card-title" data-i18n="svcAdsTitle">Performance Ads</h3>
          <p class="bento__card-desc" data-i18n="svcAdsDesc">Campa\xf1as en Meta, Google y TikTok optimizadas para ROAS m\xe1ximo. Cada peso invertido rastreado y reportado.</p>
          <div class="bento__card-tags">
            <span class="chip">Meta Ads</span>
            <span class="chip">Google Ads</span>
            <span class="chip">TikTok Ads</span>
          </div>
        </div>

        <!-- Contenido -->
        <div class="bento__card bento__card--content reveal reveal--delay-1" data-service="video">
          <div class="bento__card-icon">
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
              <rect x="3" y="5" width="22" height="16" rx="2" stroke="currentColor" stroke-width="2"/>
              <path d="M11 9.5L19 14L11 18.5V9.5Z" fill="currentColor"/>
            </svg>
          </div>
          <h3 class="bento__card-title" data-i18n="svcVideoTitle">Creaci\xf3n de Contenido</h3>
          <p class="bento__card-desc" data-i18n="svcVideoDesc">Reels, TikToks y carruseles con ganchos psicol\xf3gicos que detienen el scroll y convierten seguidores en clientes.</p>
          <div class="bento__card-tags">
            <span class="chip">Reels</span>
            <span class="chip">TikTok</span>
            <span class="chip">Carruseles</span>
          </div>
        </div>

        <!-- Community -->
        <div class="bento__card bento__card--cm reveal reveal--delay-2" data-service="social">
          <div class="bento__card-icon">
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
              <path d="M4 6C4 4.9 4.9 4 6 4H22C23.1 4 24 4.9 24 6V18C24 19.1 23.1 20 22 20H8L4 24V6Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
              <line x1="9" y1="10" x2="19" y2="10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <line x1="9" y1="14" x2="15" y2="14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <h3 class="bento__card-title" data-i18n="svcCMTitle">Community Management</h3>
          <p class="bento__card-desc" data-i18n="svcCMDesc">Gesti\xf3n diaria de redes, respuestas estrat\xe9gicas, crecimiento org\xe1nico y construcci\xf3n de comunidad fiel.</p>
          <div class="bento__card-tags">
            <span class="chip">Instagram</span>
            <span class="chip">Facebook</span>
            <span class="chip">LinkedIn</span>
          </div>
        </div>

      </div><!-- /bento -->
    </section>

    <!-- FLIP CARDS (Services detail) -->
    <section class="flip-section" id="servicios-detalle" style="padding:4rem 2rem 8rem;max-width:1200px;margin:0 auto;">
      <div class="flip-cards-grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.5rem;">

        <div class="flip-card reveal">
          <div class="flip-card__inner">
            <div class="flip-card__front">
              <div class="flip-front-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="11" stroke="currentColor" stroke-width="2"/><circle cx="14" cy="14" r="6" stroke="currentColor" stroke-width="2"/><circle cx="14" cy="14" r="2" fill="currentColor"/></svg>
              </div>
              <h3 class="flip-front-title">Performance Ads</h3>
              <p class="flip-front-desc">Campa\xf1as en Meta, Google y TikTok con ROAS garantizado. Optimizaci\xf3n en tiempo real.</p>
              <span class="flip-hint">Clic para ver detalle</span>
            </div>
            <div class="flip-card__back">
              <h4 class="flip-back-title">Performance Ads</h4>
              <div class="flip-cols">
                <div class="flip-col flip-col--pros">
                  <h5>\u2713 Con NeuroStudio</h5>
                  <ul>
                    <li>Tr\xe1fico calificado listo para comprar</li>
                    <li>ROAS medible y reportado</li>
                    <li>Optimizaci\xf3n diaria de campa\xf1as</li>
                  </ul>
                </div>
                <div class="flip-col flip-col--cons">
                  <h5>\u2717 Sin NeuroStudio</h5>
                  <ul>
                    <li>Clientes van a la competencia</li>
                    <li>Sin control del gasto publicitario</li>
                    <li>Dependencia del algoritmo org\xe1nico</li>
                  </ul>
                </div>
              </div>
              <a href="https://wa.me/59899421323?text=Hola%20NeuroStudio%20quiero%20saber%20sobre%20Performance%20Ads" target="_blank" rel="noopener" class="btn btn--primary flip-wa-btn">Consultar ahora</a>
            </div>
          </div>
        </div>

        <div class="flip-card reveal reveal--delay-1">
          <div class="flip-card__inner">
            <div class="flip-card__front">
              <div class="flip-front-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="8" y="6" width="12" height="12" rx="2" stroke="currentColor" stroke-width="2"/><path d="M14 18V22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M4 10H8M20 10H24" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
              </div>
              <h3 class="flip-front-title">IA &amp; Automatizaciones</h3>
              <p class="flip-front-desc">Chatbots, CRM autom\xe1tico y WhatsApp 24/7. Tu negocio trabaja mientras dorm\xeds.</p>
              <span class="flip-hint">Clic para ver detalle</span>
            </div>
            <div class="flip-card__back">
              <h4 class="flip-back-title">IA &amp; Automatizaciones</h4>
              <div class="flip-cols">
                <div class="flip-col flip-col--pros">
                  <h5>\u2713 Con NeuroStudio</h5>
                  <ul>
                    <li>Respuesta instant\xe1nea a leads 24/7</li>
                    <li>Chatbot que califica y agenda</li>
                    <li>Automatizaciones que escalan</li>
                  </ul>
                </div>
                <div class="flip-col flip-col--cons">
                  <h5>\u2717 Sin NeuroStudio</h5>
                  <ul>
                    <li>Leads perdidos por falta de respuesta</li>
                    <li>Horas en tareas manuales repetitivas</li>
                    <li>Competidores con IA te superan</li>
                  </ul>
                </div>
              </div>
              <a href="https://wa.me/59899421323?text=Hola%20NeuroStudio%20quiero%20saber%20sobre%20IA%20y%20automatizaciones" target="_blank" rel="noopener" class="btn btn--primary flip-wa-btn">Consultar ahora</a>
            </div>
          </div>
        </div>

        <div class="flip-card reveal reveal--delay-2">
          <div class="flip-card__inner">
            <div class="flip-card__front">
              <div class="flip-front-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="3" y="4" width="22" height="17" rx="2" stroke="currentColor" stroke-width="2"/><path d="M3 9H25" stroke="currentColor" stroke-width="2"/><path d="M10 14L13 17L18 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
              <h3 class="flip-front-title">Dise\xf1o Web</h3>
              <p class="flip-front-desc">Sitios y landing pages que convierten visitantes en clientes. R\xe1pidos, modernos y optimizados.</p>
              <span class="flip-hint">Clic para ver detalle</span>
            </div>
            <div class="flip-card__back">
              <h4 class="flip-back-title">Dise\xf1o Web</h4>
              <div class="flip-cols">
                <div class="flip-col flip-col--pros">
                  <h5>\u2713 Con NeuroStudio</h5>
                  <ul>
                    <li>Tu negocio disponible 24/7</li>
                    <li>Primera impresi\xf3n profesional</li>
                    <li>Landing optimizada para conversiones</li>
                  </ul>
                </div>
                <div class="flip-col flip-col--cons">
                  <h5>\u2717 Sin NeuroStudio</h5>
                  <ul>
                    <li>Clientes dudan de tu seriedad</li>
                    <li>Perd\xe9s tr\xe1fico de b\xfasqueda de Google</li>
                    <li>Dependencia total de Instagram</li>
                  </ul>
                </div>
              </div>
              <a href="https://wa.me/59899421323?text=Hola%20NeuroStudio%20quiero%20saber%20sobre%20Dise%C3%B1o%20Web" target="_blank" rel="noopener" class="btn btn--primary flip-wa-btn">Consultar ahora</a>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- GUIA INTERACTIVA -->
    <section class="guia" id="guia">
      <div class="guia__inner">
        <div class="guia__header reveal">
          <span class="tag" data-i18n="guiaTag">\xbfPor d\xf3nde empezar?</span>
          <h2 class="section-title" data-i18n="guiaTitle">Encontr\xe1 el servicio<br />ideal para tu negocio.</h2>
          <p class="guia__sub" data-i18n="guiaSub">Respond\xe9 3 preguntas r\xe1pidas y te recomendamos el plan m\xe1s efectivo.</p>
        </div>

        <div class="guia__container reveal">

          <!-- Step 1 -->
          <div class="guia__step active" id="guia-step-1">
            <p class="guia__step-title" data-i18n="guiaStep1Title">Cu\xe1l es tu nombre y tu tipo de negocio?</p>
            <div class="guia__input-group">
              <label for="guia-nombre" data-i18n="guiaNombreLabel">Tu nombre:</label>
              <input type="text" id="guia-nombre" class="auditor__input" placeholder="Ej: Mar\xeda, Juan, TuMarca..." data-i18n-placeholder="guiaNombrePlaceholder" />
              <p id="guia-error" style="color:#f87171;font-size:.85rem;margin-top:.5rem;display:none;" data-i18n="guiaError">Por favor ingres\xe1 tu nombre antes de continuar.</p>
            </div>
            <div class="guia__options">
              <button class="guia__option" data-rubro="tienda online / e-commerce"><span class="guia__option-icon">\ud83d\udecd\ufe0f</span> Tienda online</button>
              <button class="guia__option" data-rubro="restaurante / gastronom\xeda"><span class="guia__option-icon">\ud83c\udf7d\ufe0f</span> Gastronom\xeda</button>
              <button class="guia__option" data-rubro="servicios profesionales"><span class="guia__option-icon">\ud83d\udcbc</span> Servicios profesionales</button>
              <button class="guia__option" data-rubro="salud / bienestar"><span class="guia__option-icon">\ud83c\udfe5</span> Salud / Bienestar</button>
              <button class="guia__option" data-rubro="educaci\xf3n / cursos"><span class="guia__option-icon">\ud83c\udf93</span> Educaci\xf3n</button>
              <button class="guia__option" data-rubro="inmobiliaria / real estate"><span class="guia__option-icon">\ud83c\udfe0</span> Inmobiliaria</button>
              <button class="guia__option" data-rubro="moda / indumentaria"><span class="guia__option-icon">\ud83d\udc57</span> Moda</button>
              <button class="guia__option" data-rubro="otro tipo de negocio"><span class="guia__option-icon">\u2728</span> Otro</button>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="guia__step" id="guia-step-2">
            <p class="guia__step-title" data-i18n="guiaStep2Title">Cu\xe1l es tu mayor desaf\xedo ahora mismo?</p>
            <div class="guia__options guia__options--col">
              <button class="guia__option" data-desafio="conseguir m\xe1s clientes nuevos"><span class="guia__option-icon">\ud83c\udfaf</span> Conseguir m\xe1s clientes nuevos</button>
              <button class="guia__option" data-desafio="mejorar mi presencia en redes sociales"><span class="guia__option-icon">\ud83d\udcf1</span> Mejorar mi presencia en redes</button>
              <button class="guia__option" data-desafio="automatizar respuestas y seguimiento de leads"><span class="guia__option-icon">\ud83e\udd16</span> Automatizar atenci\xf3n al cliente</button>
              <button class="guia__option" data-desafio="crear o mejorar mi sitio web"><span class="guia__option-icon">\ud83d\udcbb</span> Crear o mejorar mi web</button>
              <button class="guia__option" data-desafio="generar contenido de calidad para mis redes"><span class="guia__option-icon">\ud83c\udfa5</span> Generar contenido de calidad</button>
              <button class="guia__option" data-desafio="aumentar mis ventas online con publicidad paga"><span class="guia__option-icon">\ud83d\udcc8</span> Aumentar ventas con publicidad</button>
            </div>
            <div class="guia__back">
              <button id="guia-back-1" class="btn btn--ghost" style="font-size:.85rem;padding:.4rem .9rem;" data-i18n="guiaBack">\u2190 Volver</button>
            </div>
          </div>

          <!-- Step 3 (Result) -->
          <div class="guia__step" id="guia-step-3">
            <div class="guia__result">
              <div class="guia__result-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 3L25 8.5V19.5L14 25L3 19.5V8.5L14 3Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="14" cy="14" r="4" fill="currentColor" opacity="0.3"/><circle cx="14" cy="14" r="2" fill="currentColor"/></svg>
              </div>
              <p class="guia__result-text" id="guia-result-text"></p>
              <div class="guia__result-services" id="guia-result-services"></div>
              <a href="https://wa.me/59899421323" target="_blank" rel="noopener" class="btn btn--primary" style="margin-bottom:1rem;" data-i18n="guiaCtaWa">Hablar con un especialista</a>
              <div class="guia__back">
                <button id="guia-back-2" class="btn btn--ghost" style="font-size:.85rem;padding:.4rem .9rem;" data-i18n="guiaRestart">\u21ba Empezar de nuevo</button>
              </div>
            </div>
          </div>

        </div><!-- /guia__container -->
      </div>
    </section>

    <!-- PLANES -->
    <section class="planes" id="planes">
      <div class="planes__header reveal">
        <span class="tag" data-i18n="plansTag">Planes &amp; Precios</span>
        <h2 class="section-title" data-i18n="plansTitle">Invert\xed en crecimiento,<br />no en gastos perdidos.</h2>
        <p class="planes__sub" data-i18n="plansSub">Planes flexibles dise\xf1ados para escalar tu negocio seg\xfan tu etapa y objetivos.</p>
      </div>
      <div class="planes__grid">

        <div class="plan-card reveal">
          <div class="plan-card__header">
            <div class="plan-card__name" data-i18n="planStarterName">Starter</div>
            <div class="plan-card__ideal" data-i18n="planStarterIdeal">Para negocios que quieren empezar a crecer</div>
          </div>
          <ul class="plan-card__features">
            <li><span class="plan-check"></span><span data-i18n="planStarterF1">Gesti\xf3n de 1 red social</span></li>
            <li><span class="plan-check"></span><span data-i18n="planStarterF2">8 publicaciones mensuales</span></li>
            <li><span class="plan-check"></span><span data-i18n="planStarterF3">Reporte mensual b\xe1sico</span></li>
            <li><span class="plan-check"></span><span data-i18n="planStarterF4">Soporte por WhatsApp</span></li>
          </ul>
          <a href="https://wa.me/59899421323?text=Hola%20NeuroStudio%2C%20me%20interesa%20el%20plan%20Starter." target="_blank" rel="noopener" class="btn btn--ghost plan-card__btn" data-i18n="planCta">Consultar precio</a>
        </div>

        <div class="plan-card plan-card--featured reveal reveal--delay-1">
          <div class="plan-card__badge" data-i18n="planBadge">M\xe1s popular</div>
          <div class="plan-card__header">
            <div class="plan-card__name" data-i18n="planGrowName">Growth</div>
            <div class="plan-card__ideal" data-i18n="planGrowIdeal">Para negocios que quieren escalar r\xe1pido</div>
          </div>
          <ul class="plan-card__features">
            <li><span class="plan-check"></span><span data-i18n="planGrowF1">2 redes sociales gestionadas</span></li>
            <li><span class="plan-check"></span><span data-i18n="planGrowF2">16 publicaciones mensuales</span></li>
            <li><span class="plan-check"></span><span data-i18n="planGrowF3">Campa\xf1as de publicidad paga</span></li>
            <li><span class="plan-check"></span><span data-i18n="planGrowF4">Chatbot b\xe1sico de WhatsApp</span></li>
            <li><span class="plan-check"></span><span data-i18n="planGrowF5">Reporte quincenal detallado</span></li>
            <li><span class="plan-check"></span><span data-i18n="planGrowF6">Llamada mensual de estrategia</span></li>
          </ul>
          <a href="https://wa.me/59899421323?text=Hola%20NeuroStudio%2C%20me%20interesa%20el%20plan%20Growth." target="_blank" rel="noopener" class="btn btn--primary plan-card__btn" data-i18n="planCta">Consultar precio</a>
        </div>

        <div class="plan-card reveal reveal--delay-2">
          <div class="plan-card__header">
            <div class="plan-card__name" data-i18n="planProName">Pro IA</div>
            <div class="plan-card__ideal" data-i18n="planProIdeal">Para negocios que quieren dominar su mercado</div>
          </div>
          <ul class="plan-card__features">
            <li><span class="plan-check"></span><span data-i18n="planProF1">Todas las redes sociales</span></li>
            <li><span class="plan-check"></span><span data-i18n="planProF2">Contenido ilimitado + video</span></li>
            <li><span class="plan-check"></span><span data-i18n="planProF3">Campa\xf1as avanzadas multi-canal</span></li>
            <li><span class="plan-check"></span><span data-i18n="planProF4">Automatizaciones IA completas</span></li>
            <li><span class="plan-check"></span><span data-i18n="planProF5">CRM + pipeline de ventas</span></li>
            <li><span class="plan-check"></span><span data-i18n="planProF6">Reportes en tiempo real + dashboard</span></li>
            <li><span class="plan-check"></span><span data-i18n="planProF7">Dise\xf1o web incluido</span></li>
          </ul>
          <a href="https://wa.me/59899421323?text=Hola%20NeuroStudio%2C%20me%20interesa%20el%20plan%20Pro%20IA." target="_blank" rel="noopener" class="btn btn--ghost plan-card__btn" data-i18n="planCta">Consultar precio</a>
        </div>

      </div>
      <p class="planes__note" data-i18n="plansNote">Todos los planes incluyen incorporaci\xf3n, onboarding y soporte dedicado. <a href="https://wa.me/59899421323" target="_blank" rel="noopener">Consult\xe1 por planes custom.</a></p>
    </section>

    <!-- DIFFERENTIATORS -->
    <section class="dif">
      <div class="dif__inner">
        <div class="dif__item reveal">
          <div class="dif__icon">
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
              <path d="M14 4C14 4 6 8 6 16C6 20.4 9.6 24 14 24C18.4 24 22 20.4 22 16C22 8 14 4 14 4Z" stroke="currentColor" stroke-width="2"/>
              <path d="M10 17L13 20L19 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3 class="dif__title" data-i18n="dif1Title">100% orientado a resultados</h3>
          <p class="dif__desc" data-i18n="dif1Desc">No medimos \xe9xito en likes. Medimos en leads, ventas y ROI real.</p>
        </div>
        <div class="dif__divider"></div>
        <div class="dif__item reveal reveal--delay-1">
          <div class="dif__icon">
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
              <rect x="8" y="6" width="12" height="12" rx="2" stroke="currentColor" stroke-width="2"/>
              <circle cx="11" cy="9" r="1" fill="currentColor"/>
              <circle cx="17" cy="9" r="1" fill="currentColor"/>
              <path d="M14 18V22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <h3 class="dif__title" data-i18n="dif2Title">IA como ventaja competitiva</h3>
          <p class="dif__desc" data-i18n="dif2Desc">Automatizamos lo que otros hacen a mano. Tu competencia sigue manual.</p>
        </div>
        <div class="dif__divider"></div>
        <div class="dif__item reveal reveal--delay-2">
          <div class="dif__icon">
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
              <path d="M4 20L10 14L14 18L20 10L24 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <rect x="3" y="3" width="22" height="22" rx="2" stroke="currentColor" stroke-width="2"/>
            </svg>
          </div>
          <h3 class="dif__title" data-i18n="dif3Title">Transparencia total</h3>
          <p class="dif__desc" data-i18n="dif3Desc">Reportes claros, sin humo. Sab\xe9s exactamente qu\xe9 pasa con tu inversi\xf3n.</p>
        </div>
        <div class="dif__divider"></div>
        <div class="dif__item reveal reveal--delay-3">
          <div class="dif__icon">
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="10" r="5" stroke="currentColor" stroke-width="2"/>
              <path d="M5 24C5 19.582 9.029 16 14 16C18.971 16 23 19.582 23 24" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <h3 class="dif__title" data-i18n="dif4Title">Equipo integrado</h3>
          <p class="dif__desc" data-i18n="dif4Desc">Trafficker, filmmaker, dev y especialista en IA bajo el mismo techo. Sin intermediarios.</p>
        </div>
      </div>
    </section>

    <!-- VALORES / TIMELINE -->
    <section class="valores" id="nosotros">
      <div class="valores__inner">
        <div class="valores__header reveal">
          <span class="tag">Qui\xe9nes Somos</span>
          <h2 class="section-title">Impulsados por datos,<br />guiados por resultados.</h2>
          <p class="valores__sub">Hac\xe9 clic en cualquier punto de la l\xednea para conocer qui\xe9nes somos y qu\xe9 nos mueve.</p>
        </div>

        <!-- Horizontal Timeline -->
        <div class="ns-timeline reveal">
          <div class="ns-timeline__track"></div>

          <div class="ns-timeline__item" data-tl="mision">
            <div class="ns-timeline__dot">
              <svg width="20" height="20" viewBox="0 0 28 28" fill="none"><path d="M14 3L25 8.5V19.5L14 25L3 19.5V8.5L14 3Z" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/><circle cx="14" cy="14" r="3" fill="currentColor"/></svg>
            </div>
            <div class="ns-timeline__label">Misi\xf3n</div>
            <div class="ns-timeline__panel">
              <div class="ns-timeline__panel-inner">
                <div class="ns-tl-icon">
                  <svg width="32" height="32" viewBox="0 0 28 28" fill="none"><path d="M14 3L25 8.5V19.5L14 25L3 19.5V8.5L14 3Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="14" cy="14" r="4" fill="currentColor" opacity="0.3"/><circle cx="14" cy="14" r="2" fill="currentColor"/></svg>
                </div>
                <h3>Nuestra Misi\xf3n</h3>
                <p>Transformar la presencia digital de cada cliente en un motor de crecimiento medible y sostenible, mediante marketing inteligente e IA aplicada a resultados concretos. No prometemos humo \u2014 entregamos n\xfameros.</p>
                <div class="ns-tl-tags">
                  <span>Marketing Real</span><span>IA Aplicada</span><span>Resultados Medibles</span>
                </div>
              </div>
            </div>
          </div>

          <div class="ns-timeline__item" data-tl="vision">
            <div class="ns-timeline__dot">
              <svg width="20" height="20" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="10" stroke="currentColor" stroke-width="2.2"/><path d="M14 4V14L20 20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="14" cy="14" r="2" fill="currentColor"/></svg>
            </div>
            <div class="ns-timeline__label">Visi\xf3n</div>
            <div class="ns-timeline__panel">
              <div class="ns-timeline__panel-inner">
                <div class="ns-tl-icon">
                  <svg width="32" height="32" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="10" stroke="currentColor" stroke-width="2"/><path d="M14 4V14L20 20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="14" cy="14" r="2" fill="currentColor"/></svg>
                </div>
                <h3>Nuestra Visi\xf3n</h3>
                <p>Ser la agencia referente de Latinoam\xe9rica en marketing con IA: donde cada peso invertido genere retorno medible y cada cliente escale sin techo ni frustraciones. El futuro del marketing es inteligente \u2014 y ya est\xe1 aqu\xed.</p>
                <div class="ns-tl-tags">
                  <span>Liderazgo LATAM</span><span>Escala sin l\xedmites</span><span>Tecnolog\xeda de punta</span>
                </div>
              </div>
            </div>
          </div>

          <div class="ns-timeline__item" data-tl="valores">
            <div class="ns-timeline__dot">
              <svg width="20" height="20" viewBox="0 0 28 28" fill="none"><path d="M14 4C14 4 6 8 6 16C6 20.4 9.6 24 14 24C18.4 24 22 20.4 22 16C22 8 14 4 14 4Z" stroke="currentColor" stroke-width="2.2"/><path d="M10 17L13 20L19 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <div class="ns-timeline__label">Valores</div>
            <div class="ns-timeline__panel">
              <div class="ns-timeline__panel-inner">
                <div class="ns-tl-icon">
                  <svg width="32" height="32" viewBox="0 0 28 28" fill="none"><path d="M14 4C14 4 6 8 6 16C6 20.4 9.6 24 14 24C18.4 24 22 20.4 22 16C22 8 14 4 14 4Z" stroke="currentColor" stroke-width="2"/><path d="M10 17L13 20L19 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
                <h3>Nuestros Valores</h3>
                <div class="ns-tl-values-grid">
                  <div><strong>Resultados</strong><span>M\xe9tricas reales sobre promesas vac\xedas. Cada acci\xf3n tiene un n\xfamero detr\xe1s.</span></div>
                  <div><strong>Innovaci\xf3n IA</strong><span>La IA no es moda para nosotros \u2014 es ventaja competitiva real y tangible.</span></div>
                  <div><strong>Transparencia</strong><span>Reportes claros, sin humo. Sab\xe9s exactamente qu\xe9 pasa con tu inversi\xf3n.</span></div>
                  <div><strong>Compromiso</strong><span>Tu \xe9xito es nuestro \xe9xito. Crecemos juntos o no crecemos.</span></div>
                </div>
              </div>
            </div>
          </div>

          <div class="ns-timeline__item" data-tl="equipo">
            <div class="ns-timeline__dot">
              <svg width="20" height="20" viewBox="0 0 28 28" fill="none"><circle cx="10" cy="10" r="4" stroke="currentColor" stroke-width="2.2"/><circle cx="20" cy="10" r="4" stroke="currentColor" stroke-width="2.2"/><path d="M4 24C4 20 6.5 17 10 17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M24 24C24 20 21.5 17 18 17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M11 24C11 21 12.3 19 15 19C17.7 19 19 21 19 24" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            </div>
            <div class="ns-timeline__label">Equipo</div>
            <div class="ns-timeline__panel">
              <div class="ns-timeline__panel-inner">
                <div class="ns-tl-icon">
                  <svg width="32" height="32" viewBox="0 0 28 28" fill="none"><circle cx="9" cy="10" r="4" stroke="currentColor" stroke-width="2"/><circle cx="19" cy="10" r="4" stroke="currentColor" stroke-width="2"/><path d="M3 24C3 19.5 5.7 17 9 17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M25 24C25 19.5 22.3 17 19 17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </div>
                <h3>Nuestro Equipo</h3>
                <p>Trafficker, filmmaker, desarrollador web y especialista en IA en un mismo equipo integrado. Sin intermediarios, sin subcontratos ocultos. Estrategia, creatividad y tecnolog\xeda bajo el mismo techo \u2014 trabajando para tu crecimiento.</p>
                <div class="ns-tl-tags">
                  <span>Equipo integrado</span><span>Sin intermediarios</span><span>Full-stack digital</span>
                </div>
              </div>
            </div>
          </div>

          <div class="ns-timeline__item" data-tl="diferencial">
            <div class="ns-timeline__dot">
              <svg width="20" height="20" viewBox="0 0 28 28" fill="none"><path d="M14 3L17.5 10.5L26 11.5L20 17.5L21.5 26L14 22L6.5 26L8 17.5L2 11.5L10.5 10.5L14 3Z" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/></svg>
            </div>
            <div class="ns-timeline__label">Diferencial</div>
            <div class="ns-timeline__panel">
              <div class="ns-timeline__panel-inner">
                <div class="ns-tl-icon">
                  <svg width="32" height="32" viewBox="0 0 28 28" fill="none"><path d="M14 3L17.5 10.5L26 11.5L20 17.5L21.5 26L14 22L6.5 26L8 17.5L2 11.5L10.5 10.5L14 3Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>
                </div>
                <h3>Por Qu\xe9 NeuroStudio</h3>
                <p>Combinamos la creatividad de una boutique con la potencia anal\xedtica de la IA. Cada campa\xf1a est\xe1 respaldada por datos, cada contenido tiene prop\xf3sito, cada automatizaci\xf3n trabaja mientras vos descans\xe1s. No somos una agencia m\xe1s \u2014 somos el sistema de crecimiento de tu negocio.</p>
                <div class="ns-tl-tags">
                  <span>IA + Creatividad</span><span>Data-driven</span><span>ROI garantizado</span>
                </div>
              </div>
            </div>
          </div>

        </div><!-- /ns-timeline -->
      </div>
    </section>

    <!-- PROCESO -->
    <section class="proceso" id="proceso">
      <div class="proceso__header reveal">
        <span class="tag">C\xf3mo trabajamos</span>
        <h2 class="section-title">Un proceso claro<br />de principio a fin.</h2>
        <p style="color:var(--text-dim);font-size:1rem;margin-top:.75rem">Hac\xe9 clic en cualquier paso para ver en detalle c\xf3mo trabajamos.</p>
      </div>

      <div class="proceso__steps">

        <div class="proceso__step proceso__step--accordion reveal" data-step="1">
          <div class="proceso__step-trigger">
            <div class="proceso__step-num">01</div>
            <div class="proceso__step-body">
              <h3>Diagn\xf3stico</h3>
              <p class="proceso__step-preview">Analizamos tu negocio, competencia y objetivos.</p>
            </div>
            <div class="proceso__step-chevron">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 7L9 12L14 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
          </div>
          <div class="proceso__step-expand">
            <div class="proceso__step-detail">
              <div class="proceso__step-detail-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="10" stroke="currentColor" stroke-width="2"/><path d="M10 14l3 3 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
              <div class="proceso__step-detail-content">
                <h4>\xbfQu\xe9 hacemos en el diagn\xf3stico?</h4>
                <p>Antes de mover un peso, entendemos a fondo tu negocio. Analizamos tu presencia digital actual, auditamos a tu competencia directa, mapeamos el comportamiento de tu cliente ideal y definimos m\xe9tricas de \xe9xito claras. Sin atajos: la base determina el resultado.</p>
                <ul>
                  <li>Auditor\xeda de presencia digital (web, redes, SEO)</li>
                  <li>An\xe1lisis de competidores y posicionamiento de mercado</li>
                  <li>Definici\xf3n de buyer persona y journey de compra</li>
                  <li>Establecimiento de KPIs y objetivos medibles</li>
                </ul>
                <a href="https://wa.me/59899421323?text=Hola%20NeuroStudio%20Quiero%20empezar%20con%20el%20diagn%C3%B3stico%20de%20mi%20negocio." target="_blank" class="btn btn--primary" style="margin-top:1rem;display:inline-flex;">Comenzar diagn\xf3stico gratuito \u2192</a>
              </div>
            </div>
          </div>
        </div>

        <div class="proceso__connector"></div>

        <div class="proceso__step proceso__step--accordion reveal reveal--delay-1" data-step="2">
          <div class="proceso__step-trigger">
            <div class="proceso__step-num">02</div>
            <div class="proceso__step-body">
              <h3>Estrategia</h3>
              <p class="proceso__step-preview">Plan de acci\xf3n personalizado con KPIs claros.</p>
            </div>
            <div class="proceso__step-chevron">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 7L9 12L14 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
          </div>
          <div class="proceso__step-expand">
            <div class="proceso__step-detail">
              <div class="proceso__step-detail-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 20L10 14L14 18L20 10L24 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="3" y="3" width="22" height="22" rx="2" stroke="currentColor" stroke-width="2"/></svg>
              </div>
              <div class="proceso__step-detail-content">
                <h4>\xbfC\xf3mo dise\xf1amos tu estrategia?</h4>
                <p>Con los datos del diagn\xf3stico, construimos un plan de acci\xf3n a medida \u2014 sin templates gen\xe9ricos. Elegimos los canales correctos (Meta, Google, TikTok, email, WhatsApp), definimos presupuestos \xf3ptimos, formatos de contenido y automatizaciones necesarias para alcanzar tus objetivos.</p>
                <ul>
                  <li>Selecci\xf3n de canales y mix de medios \xf3ptimo</li>
                  <li>Calendario de contenido y campa\xf1as con presupuesto</li>
                  <li>Dise\xf1o de embudos de conversi\xf3n personalizados</li>
                  <li>Plan de automatizaciones e IA para escalar</li>
                </ul>
                <a href="https://wa.me/59899421323?text=Hola%20NeuroStudio%20Quiero%20que%20dise%C3%B1en%20una%20estrategia%20para%20mi%20negocio." target="_blank" class="btn btn--primary" style="margin-top:1rem;display:inline-flex;">Quiero mi estrategia \u2192</a>
              </div>
            </div>
          </div>
        </div>

        <div class="proceso__connector"></div>

        <div class="proceso__step proceso__step--accordion reveal reveal--delay-2" data-step="3">
          <div class="proceso__step-trigger">
            <div class="proceso__step-num">03</div>
            <div class="proceso__step-body">
              <h3>Ejecuci\xf3n</h3>
              <p class="proceso__step-preview">Campa\xf1as activas, contenido y automatizaciones en vivo.</p>
            </div>
            <div class="proceso__step-chevron">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 7L9 12L14 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
          </div>
          <div class="proceso__step-expand">
            <div class="proceso__step-detail">
              <div class="proceso__step-detail-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>
              </div>
              <div class="proceso__step-detail-content">
                <h4>\xbfC\xf3mo ejecutamos tu plan?</h4>
                <p>Arrancamos con velocidad y precisi\xf3n. Lanzamos campa\xf1as pagadas, publicamos contenido optimizado, activamos chatbots y automatizaciones, y monitoreamos cada variable en tiempo real. Ajustamos diariamente para maximizar el rendimiento desde el d\xeda uno.</p>
                <ul>
                  <li>Lanzamiento de campa\xf1as publicitarias en todos los canales</li>
                  <li>Producci\xf3n y publicaci\xf3n de contenido seg\xfan calendario</li>
                  <li>Activaci\xf3n de chatbots y flujos de automatizaci\xf3n</li>
                  <li>Optimizaci\xf3n continua basada en datos en tiempo real</li>
                </ul>
                <a href="https://wa.me/59899421323?text=Hola%20NeuroStudio%20Quiero%20empezar%20a%20ejecutar%20mi%20estrategia%20digital." target="_blank" class="btn btn--primary" style="margin-top:1rem;display:inline-flex;">Activar mi plan \u2192</a>
              </div>
            </div>
          </div>
        </div>

        <div class="proceso__connector"></div>

        <div class="proceso__step proceso__step--accordion reveal reveal--delay-3" data-step="4">
          <div class="proceso__step-trigger">
            <div class="proceso__step-num">04</div>
            <div class="proceso__step-body">
              <h3>Reporte</h3>
              <p class="proceso__step-preview">M\xe9tricas reales y pr\xf3ximos pasos claros.</p>
            </div>
            <div class="proceso__step-chevron">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 7L9 12L14 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
          </div>
          <div class="proceso__step-expand">
            <div class="proceso__step-detail">
              <div class="proceso__step-detail-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="4" width="20" height="20" rx="2" stroke="currentColor" stroke-width="2"/><path d="M9 14L12 17L19 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
              <div class="proceso__step-detail-content">
                <h4>\xbfQu\xe9 vas a ver en los reportes?</h4>
                <p>Cero humo, cero excusas. Reportes claros con los n\xfameros que importan: alcance, clics, conversiones, ROAS, costo por lead y retenci\xf3n. Cada reporte incluye an\xe1lisis de qu\xe9 funcion\xf3, qu\xe9 ajustamos y cu\xe1les son los pr\xf3ximos pasos para seguir escalando.</p>
                <ul>
                  <li>Dashboard con m\xe9tricas en tiempo real accesible 24/7</li>
                  <li>Reporte quincenal o mensual seg\xfan tu plan</li>
                  <li>An\xe1lisis de ROAS, CPA, CTR y retenci\xf3n de clientes</li>
                  <li>Reuni\xf3n de revisi\xf3n con propuesta de mejoras</li>
                </ul>
                <a href="https://wa.me/59899421323?text=Hola%20NeuroStudio%20Quiero%20ver%20un%20ejemplo%20de%20reporte%20y%20empezar." target="_blank" class="btn btn--primary" style="margin-top:1rem;display:inline-flex;">Ver c\xf3mo reportamos \u2192</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- AUDITOR IA -->
    <section class="auditor" id="auditor-ia">
      <div class="auditor__inner reveal">
        <div class="auditor__float-stats" aria-hidden="true">
          <div class="auditor__stat-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 20V4M5 11l7-7 7 7" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <div><strong>+340%</strong><span>ROI promedio</span></div>
          </div>
          <div class="auditor__stat-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>
            <div><strong>2 seg</strong><span>Respuesta IA</span></div>
          </div>
          <div class="auditor__stat-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2L3 7v5c0 5.25 3.9 10.15 9 11.35C17.1 22.15 21 17.25 21 12V7L12 2z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <div><strong>98%</strong><span>Satisfacci\xf3n</span></div>
          </div>
        </div>
        <div class="auditor__content">
          <div class="auditor__scan-deco" aria-hidden="true"></div>
          <span class="tag">Herramienta Gratuita</span>
          <h2 class="section-title">Auditor Inteligente de Negocios</h2>
          <p class="auditor__sub">Analizamos en segundos tu presencia digital (web o perfil de Instagram) y descubrimos oportunidades de mejora para vender m\xe1s.</p>

          <div class="auditor__form" id="auditor-form">
            <div class="auditor__input-group">
              <input type="text" id="auditor-input" class="auditor__input" placeholder="Ej: www.tuweb.com o @tu.instagram" autocomplete="off" />
              <button class="btn btn--primary auditor__btn" id="auditor-submit">Auditar ahora</button>
            </div>
            <p class="auditor__note">Es 100% confidencial y gratuito.</p>
          </div>

          <div class="auditor__scanning" id="auditor-scanning" style="display: none;">
            <div class="auditor__scanning-loader">
              <span class="auditor__pulse"></span>
            </div>
            <div class="auditor__scanning-text">
              <span id="auditor-status">Iniciando escaneo IA...</span>
            </div>
            <div class="auditor__progress-bar">
              <div class="auditor__progress-fill" id="auditor-progress"></div>
            </div>
          </div>

          <div class="auditor__result" id="auditor-result" style="display: none;">
            <h3 class="auditor__result-title">Auditor\xeda completada para <span id="auditor-target-name"></span></h3>

            <div class="auditor__result-box" style="text-align: left; padding: 2rem;">
              <div class="auditor__alert auditor__alert--warning" style="margin-bottom: 2rem;">
                <strong><span id="auditor-dynamic-alert">Alerta:</span></strong> Hemos detectado <span class="auditor__highlight">oportunidades clave de crecimiento y conversi\xf3n</span> que no est\xe1s aprovechando actualmente.
              </div>
              <p class="auditor__result-desc" style="font-size: 1.1rem; color: #E2E8F0; margin-bottom: 2rem;">El Motor de IA detect\xf3 p\xe9rdidas de interacci\xf3n. Para ver la informaci\xf3n de tu fuga comercial, despliega el men\xfa a continuaci\xf3n.</p>

              <button class="btn btn--ghost" id="auditor-download" style="width: 100%; border: 1px solid var(--blue-600); justify-content: space-between;">
                Ver diagn\xf3stico detallado de tu negocio
                <span style="font-size: 14px;">\u25bc</span>
              </button>

              <div id="inline-report" style="display: none; margin-top: 1.5rem; background: var(--gray-800); border-radius: var(--radius-md); padding: 1.5rem; border: 1px solid var(--gray-700);">
                <h4 style="color: var(--white); margin-bottom: 1rem; font-weight: 600; font-size: 1.2rem; display:flex; align-items:center; gap: 10px;">
                  <span style="color: #ef4444;">\ud83d\udd34</span> Debilidades detectadas:
                </h4>
                <ul id="pdf-findings" style="color: var(--gray-300); font-size: 0.95rem; margin-bottom: 2rem; padding-left: 20px; line-height: 1.6;">
                </ul>

                <h4 style="color: var(--white); margin-bottom: 1rem; font-weight: 600; font-size: 1.2rem; display:flex; align-items:center; gap: 10px;">
                   <span style="color: #10b981;">\ud83d\udfe2</span> Soluci\xf3n NeuroStudio:
                </h4>
                <ul id="pdf-actions" style="color: var(--gray-300); font-size: 0.95rem; padding-left: 20px; line-height: 1.6;">
                </ul>

                <div style="margin-top: 3rem; text-align: center; border-top: 1px solid var(--gray-700); padding-top: 2rem;">
                  <h4 style="color: var(--white); font-size: 1.2rem; margin-bottom: 0.5rem;">Cierra esas fugas de dinero hoy mismo.</h4>
                  <p style="color: var(--gray-400); font-size: 0.9rem; margin-bottom: 1.5rem;">Nosotros nos encargamos de implementar estas y otras estrategias en tu negocio.</p>
                  <a href="https://wa.me/59899421323?text=Hola,%20acabo%20de%20ver%20mi%20auditoria%20y%20quiero%20que%20me%20ayuden%20a%20mejorar%20mis%20ventas." target="_blank" rel="noopener" class="btn btn--primary" style="width:100%; justify-content: center;">Corregir errores y escalar</a>
                </div>
              </div>
            </div>

            <button class="btn btn--ghost mt-8" id="auditor-reset">Probar con otro negocio</button>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta" id="contacto">
      <div class="cta__inner reveal">
        <span class="tag tag--light">Empecemos</span>
        <h2 class="cta__title">Tu pr\xf3ximo cliente<br />te est\xe1 buscando.</h2>
        <p class="cta__sub">Cada d\xeda sin una estrategia digital es un d\xeda que le regal\xe1s a tu competencia. Empecem\xf3s hoy.</p>
        <div class="cta__actions">
          <a href="#" class="btn btn--primary btn--lg btn-agendar" data-i18n="btnFreeSession">Agendar Sesi\xf3n Gratuita</a>
          <a href="https://wa.me/59899421323" target="_blank" rel="noopener" class="btn btn--ghost btn--lg">Escribir por WhatsApp</a>
        </div>
      </div>
    </section>

  </main>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__brand">
        <a href="#" class="footer__logo">NeuroStudio</a>
        <p class="footer__tagline">Marketing Digital e IA para negocios que quieren crecer en serio.</p>
        <div class="footer__social">
          <a href="https://instagram.com/neurostudio.uy" target="_blank" rel="noopener" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>
          </a>
          <a href="https://wa.me/59899421323" target="_blank" rel="noopener" aria-label="WhatsApp">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
        </div>
      </div>
      <div class="footer__links">
        <div class="footer__col">
          <h4 class="footer__col-title">Servicios</h4>
          <a href="#servicios">Performance Ads</a>
          <a href="#servicios">Dise\xf1o Web</a>
          <a href="#servicios">IA &amp; Automatizaciones</a>
          <a href="#servicios">Social Media</a>
          <a href="#servicios">Contenido Viral</a>
        </div>
        <div class="footer__col">
          <h4 class="footer__col-title">Empresa</h4>
          <a href="#nosotros">Qui\xe9nes somos</a>
          <a href="#proceso">Proceso</a>
          <a href="#planes">Planes</a>
          <a href="#auditor-ia">Auditor IA</a>
        </div>
        <div class="footer__col">
          <h4 class="footer__col-title">Contacto</h4>
          <a href="https://wa.me/59899421323" target="_blank" rel="noopener">WhatsApp</a>
          <a href="mailto:hola@neurostudio.uy">hola@neurostudio.uy</a>
          <a href="#" class="btn-agendar">Agendar llamada</a>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <p>&copy; 2025 NeuroStudio. Todos los derechos reservados. Montevideo, Uruguay.</p>
    </div>
  </footer>

  <script src="main.js"></script>
  <script src="animate.js"></script>

</body>
</html>"""

with open('C:/Users/Cliente/Documents/Web/index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print('index.html written successfully')
print('File size:', len(html), 'chars')

# Verify
with open('C:/Users/Cliente/Documents/Web/index.html', 'r', encoding='utf-8') as f:
    content = f.read()
import re
lines = content.split('\n')
print('Lines:', len(lines))
print('v16:', 'style.css?v=16' in content)
print('Timeline:', 'ns-timeline' in content)
print('Accordion:', 'proceso__step--accordion' in content)
print('Auditor:', 'auditor-ia' in content)
print('Footer:', 'footer__inner' in content)
