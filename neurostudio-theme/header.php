<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

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
      <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="nav__logo">NeuroStudio</a>
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
                  <span class="nav__dropdown-desc">Campañas pagadas de alta conversión</span>
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
                  <span class="nav__dropdown-title">Creación de Contenido</span>
                  <span class="nav__dropdown-desc">Producción visual y audiovisual</span>
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
                  <span class="nav__dropdown-desc">Gestión diaria de redes sociales</span>
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
                  <span class="nav__dropdown-title">Diseño y Desarrollo Web</span>
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
      <button class="nav__burger" id="navBurger" aria-label="Abrir menú">
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
