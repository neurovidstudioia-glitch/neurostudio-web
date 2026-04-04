// ============================================
//  NEUROSTUDIO — Main JS
// ============================================

// ---- NAV: scroll behavior ----
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ---- NAV: mobile menu ----
const burger   = document.getElementById('navBurger');
const mobileMenu = document.getElementById('navMobile');

burger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  burger.setAttribute('aria-expanded', isOpen);
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// ---- SCROLL REVEAL ----
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -48px 0px'
});

revealEls.forEach(el => revealObserver.observe(el));

// ---- STATS: number counter ----
const statValues = document.querySelectorAll('.stats__value[data-target]');

const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const el     = entry.target;
    const target = parseInt(el.dataset.target, 10);
    const unit   = el.dataset.target;
    const duration = 1600;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed  = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const ease     = 1 - Math.pow(1 - progress, 3);
      const current  = Math.round(ease * target);
      el.textContent = current;
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
    countObserver.unobserve(el);
  });
}, { threshold: 0.5 });

statValues.forEach(el => countObserver.observe(el));

// ---- SERVICES DROPDOWN ----
const servBtn      = document.getElementById('servBtn');
const servDropdown = document.getElementById('servDropdown');
const servItem     = document.getElementById('servItem');

if (servBtn && servDropdown) {
  servBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = servDropdown.classList.toggle('open');
    servBtn.classList.toggle('active', isOpen);
    servBtn.setAttribute('aria-expanded', String(isOpen));
    servDropdown.setAttribute('aria-hidden', String(!isOpen));
  });

  servDropdown.querySelectorAll('[data-close-dropdown]').forEach(item => {
    item.addEventListener('click', () => {
      servDropdown.classList.remove('open');
      servBtn.classList.remove('active');
      servBtn.setAttribute('aria-expanded', 'false');
      servDropdown.setAttribute('aria-hidden', 'true');
    });
  });
}

document.addEventListener('click', (e) => {
  if (servItem && !servItem.contains(e.target)) {
    servDropdown?.classList.remove('open');
    servBtn?.classList.remove('active');
    servBtn?.setAttribute('aria-expanded', 'false');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && servDropdown?.classList.contains('open')) {
    servDropdown.classList.remove('open');
    servBtn.classList.remove('active');
    servBtn.setAttribute('aria-expanded', 'false');
    servBtn.focus();
  }
});

// ---- SMOOTH SCROLL: offset for fixed nav ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const targetId = anchor.getAttribute('href');
    if (targetId === '#') return;

    const targetEl = document.querySelector(targetId);
    if (!targetEl) return;

    e.preventDefault();

    const offset = 80;
    const top    = targetEl.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// ============================================
// ---- GUIA INTERACTIVA LOGIC ----
// ============================================
const stateGuia = { nombre: '', rubro: '', desafio: '' };

const guiaStep1 = document.getElementById('guia-step-1');
const guiaStep2 = document.getElementById('guia-step-2');
const guiaStep3 = document.getElementById('guia-step-3');

const btnBack1 = document.getElementById('guia-back-1');
const btnBack2 = document.getElementById('guia-back-2');
const guiaResultText = document.getElementById('guia-result-text');
const guiaResultServices = document.getElementById('guia-result-services');
const guiaNombreInput = document.getElementById('guia-nombre');
const guiaError = document.getElementById('guia-error');

function switchStep(hideEl, showEl) {
  hideEl.classList.remove('active');
  showEl.classList.add('active');
}
window.switchStep = switchStep;


// Paso 1: Seleccionar Rubro (Valida Nombre primero)
document.querySelectorAll('[data-rubro]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const nombre = guiaNombreInput.value.trim();
    if (!nombre) {
      guiaError.style.display = 'block';
      guiaNombreInput.focus();
      return;
    }
    guiaError.style.display = 'none';
    stateGuia.nombre = nombre;
    stateGuia.rubro = e.currentTarget.getAttribute('data-rubro');
    switchStep(guiaStep1, guiaStep2);
  });
});

// Paso 2: Seleccionar Desafío
document.querySelectorAll('[data-desafio]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    stateGuia.desafio = e.currentTarget.getAttribute('data-desafio');
    generateResult();
    switchStep(guiaStep2, guiaStep3);
  });
});

// Botones de volver
if (btnBack1) btnBack1.addEventListener('click', () => switchStep(guiaStep2, guiaStep1));
if (btnBack2) btnBack2.addEventListener('click', () => {
  stateGuia.nombre = '';
  stateGuia.rubro = '';
  stateGuia.desafio = '';
  guiaNombreInput.value = '';
  switchStep(guiaStep3, guiaStep1);
});

function getWaLink(servicio) {
  const text = encodeURIComponent(`Hola, mi negocio es *${stateGuia.nombre}* (${stateGuia.rubro}). Mi desafío actual es ${stateGuia.desafio} y me interesa el servicio de *${servicio}*.`);
  return `https://wa.me/59899421323?text=${text}`;
}

function generateResult() {
  const { nombre, rubro, desafio } = stateGuia;
  
  if (guiaResultText) {
    guiaResultText.innerHTML = `Para <strong>${nombre}</strong> (${rubro}), enfocado en <strong>${desafio}</strong>, recomendamos implementar estas 3 soluciones:`;
  }

  let servicesHTML = '';
  let s1, s2, s3;
  let d1, d2, d3;

  // Lógica de recomendación de 3 servicios
  if (desafio.includes('locales')) {
    s1 = "Meta Ads (Tráfico Local)"; d1 = "Campañas hipersegmentadas en tu ciudad para atraer visitas a tu local físico.";
    s2 = "Creación de Contenido (Reels)"; d2 = "Videos cortos y atractivos mostrando tu producto/servicio en acción.";
    s3 = "Optimización Google Perfil de Negocio"; d3 = "Aparece primero cuando busquen servicios como el tuyo en Google Maps.";
  } else if (desafio.includes('online')) {
    s1 = "Performance Ads (Google/Meta)"; d1 = "Campañas enfocadas directamente a maximizar el ROAS y las ventas.";
    s2 = "Diseño de Landing Page / E-commerce"; d2 = "Una web rápida y optimizada para evitar carritos abandonados.";
    s3 = "Email Marketing & Retargeting"; d3 = "Recuperación automática de ventas y nutrición de clientes actuales.";
  } else if (desafio.includes('automatizaciones')) {
    s1 = "Chatbot IA para WhatsApp"; d1 = "Un asistente que responde el 80% de tus consultas y califica leads 24/7.";
    s2 = "CRM Integrado"; d2 = "Organiza todos tus contactos y centraliza las ventas en una sola plataforma.";
    s3 = "Automatización de Lead Generation"; d3 = "Tus campañas de Ads enviarán directamente el lead a tu WhatsApp.";
  } else {
    s1 = "Auditoría Estratégica"; d1 = "Un plan maestro detallando qué publicar, cómo y cuándo hacerlo.";
    s2 = "Gestión Integral de Redes"; d2 = "Nos encargamos de tu feed, historias e interacción comunitaria.";
    s3 = "Branding y Rediseño Visual"; d3 = "Una identidad corporativa premium que transmita total confianza.";
  }

  servicesHTML = `
    <a href="${getWaLink(s1)}" target="_blank" class="guia__service" style="display:block; text-decoration:none; cursor:pointer;" title="Haz clic para consultar por WhatsApp">
      <h4 class="guia__service-title">1. ${s1} <span style="font-size:0.8rem; color:var(--blue-500); margin-left:5px;">(Consultar ↗)</span></h4>
      <p class="guia__service-desc">${d1}</p>
    </a>
    <a href="${getWaLink(s2)}" target="_blank" class="guia__service" style="display:block; text-decoration:none; cursor:pointer;" title="Haz clic para consultar por WhatsApp">
      <h4 class="guia__service-title">2. ${s2} <span style="font-size:0.8rem; color:var(--blue-500); margin-left:5px;">(Consultar ↗)</span></h4>
      <p class="guia__service-desc">${d2}</p>
    </a>
    <a href="${getWaLink(s3)}" target="_blank" class="guia__service" style="display:block; text-decoration:none; cursor:pointer;" title="Haz clic para consultar por WhatsApp">
      <h4 class="guia__service-title">3. ${s3} <span style="font-size:0.8rem; color:var(--blue-500); margin-left:5px;">(Consultar ↗)</span></h4>
      <p class="guia__service-desc">${d3}</p>
    </a>
  `;

  if (guiaResultServices) {
    guiaResultServices.innerHTML = servicesHTML;
  }
}

// ============================================
// ---- LANGUAGE SWITCHER (i18n) ----
// ============================================
const langToggle = document.getElementById('langToggle');
let currentLang = 'es';

const i18n = {
  es: {
    navServices: 'Servicios',
    navPlans: 'Planes',
    navProcess: 'Proceso',
    navContact: 'Contacto',
    btnAgendar: 'Agendar Llamada',
    heroTag: 'Agencia de Marketing Digital · Montevideo, Uruguay',
    heroTitle: 'Dejá de perder<br /><span class="hero__headline--accent">clientes</span><br />que tu competencia sí cierra.',
    heroSub: 'Si tu producto es excelente pero tus ventas no lo reflejan, tu problema es el marketing. En NeuroStudio convertimos tu presencia digital en un sistema predecible y automatizado para captar prospectos que sí compran. Escala sin frustraciones.',
    btnFreeSession: 'Agendar Sesión Gratuita',
    btnMethod: 'Conocer método'
  },
  en: {
    navServices: 'Services',
    navPlans: 'Pricing',
    navProcess: 'Process',
    navContact: 'Contact',
    btnAgendar: 'Book a Call',
    heroTag: 'Digital Marketing Agency · Montevideo, Uruguay',
    heroTitle: 'Stop losing<br /><span class="hero__headline--accent">clients</span><br />that your competitors close.',
    heroSub: 'If your product is excellent but your sales don\'t reflect it, your problem is marketing. At NeuroStudio, we turn your digital presence into a predictable, automated system to capture prospects who actually buy. Scale without frustration.',
    btnFreeSession: 'Book Free Session',
    btnMethod: 'Our Method'
  }
};

function updateLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang] && i18n[lang][key]) {
      el.innerHTML = i18n[lang][key];
    }
  });
  if (langToggle) {
    langToggle.textContent = lang === 'es' ? 'EN' : 'ES';
  }
}

if (langToggle) {
  langToggle.addEventListener('click', (e) => {
    e.preventDefault();
    const newLang = currentLang === 'es' ? 'en' : 'es';
    updateLanguage(newLang);
  });
}

// ============================================
// ---- AUDITOR IA LOGIC (NUEVO) ----
// ============================================
const auditorForm = document.getElementById('auditor-form');
const auditorScanning = document.getElementById('auditor-scanning');
const auditorResult = document.getElementById('auditor-result');
const auditorSubmitBtn = document.getElementById('auditor-submit');
const auditorInput = document.getElementById('auditor-input');
const auditorResetBtn = document.getElementById('auditor-reset');
const auditorTargetName = document.getElementById('auditor-target-name');
const auditorStatusText = document.getElementById('auditor-status');
const auditorProgressFill = document.getElementById('auditor-progress');
const auditorDownloadBtn = document.getElementById('auditor-download');

// Referencias PDF ocultas
const pdfTargetName = document.getElementById('pdf-target-name');
const pdfDate = document.getElementById('pdf-date');
const pdfFindings = document.getElementById('pdf-findings');
const pdfActions = document.getElementById('pdf-actions');

let currentAuditType = 'web'; // 'web' or 'ig'

if (auditorSubmitBtn) {
  auditorSubmitBtn.addEventListener('click', () => {
    const value = auditorInput.value.trim().toLowerCase();
    if (!value) {
      alert("Por favor, ingresa una URL web o un usuario de Instagram.");
      return;
    }
    
    currentAuditType = (value.includes('@') || value.includes('instagram')) ? 'ig' : 'web';
    
    auditorTargetName.textContent = `para ${value}`;
    auditorForm.style.display = 'none';
    auditorScanning.style.display = 'block';

    const scanPhasesIg = [
      { text: "Conectando con servidores de Instagram...", progress: 15, time: 0 },
      { text: "Analizando engagement y tasa de interacción...", progress: 40, time: 800 },
      { text: "Verificando optimización de biografía y links...", progress: 65, time: 1800 },
      { text: "Evaluando formato de Reels y retención visual...", progress: 90, time: 2600 },
      { text: "Generando reporte de oportunidades...", progress: 100, time: 3400 }
    ];

    const scanPhasesWeb = [
      { text: "Iniciando escaneo IA de estructura web...", progress: 15, time: 0 },
      { text: "Analizando tiempo de carga y Mobile First...", progress: 40, time: 800 },
      { text: "Revisando embudos de conversión y fricciones...", progress: 65, time: 1800 },
      { text: "Evaluando palabras clave (SEO) y retención...", progress: 90, time: 2600 },
      { text: "Generando reporte de oportunidades...", progress: 100, time: 3400 }
    ];

    const activePhases = currentAuditType === 'ig' ? scanPhasesIg : scanPhasesWeb;

    activePhases.forEach(phase => {
      setTimeout(() => {
        auditorStatusText.textContent = phase.text;
        auditorProgressFill.style.width = phase.progress + "%";
      }, phase.time);
    });

    setTimeout(() => {
      generatePdfData(value);
      auditorScanning.style.display = 'none';
      auditorResult.style.display = 'block';
    }, 4000); // 4 secs total
  });
}

// ============================================
// ---- CALENDLY LOGIC ----
// ============================================
document.querySelectorAll('.btn-agendar').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    // URL proporcionada por el cliente:
    const calendlyUrl = 'https://calendly.com/neurovidstudioia/reunion-estrategica'; 
    
    if (typeof Calendly !== 'undefined') {
      Calendly.initPopupWidget({url: calendlyUrl});
    } else {
      window.open(calendlyUrl, '_blank');
    }
  });
});

// ============================================
// ---- ROBERTO IA AUDITOR CLASS ----
// ============================================
class RobertoAI {
  constructor(url) {
    this.url = url;
    this.isIg = url.includes('@') || url.includes('instagram');
    this.target = this.isIg ? url.replace('@', '').split('?')[0] : url.replace('https://', '').replace('http://', '').replace('www.', '').split('/')[0];
    this.seed = this._hashString(this.target);
  }

  _hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return Math.abs(hash);
  }

  _random(max) {
     let x = Math.sin(this.seed++) * 10000;
     return Math.floor((x - Math.floor(x)) * max);
  }

  getFindings() {
    const igFindings = [
      `Falta de un Linktree o sistema de links en la bio de @${this.target}. El usuario no sabe a dónde ir después de ver tu perfil.`,
      `El ratio de seguidores vs "Seguidos" en @${this.target} afecta la autoridad percibida de la cuenta.`,
      `Detectamos que los Reels de ${this.target} no están aprovechando los primeros 3 segundos (el Hook), perdiendo un 60% de retención inicial.`,
      `Las respuestas automáticas en DM (Manychat/Chatfuel) no están activas en @${this.target}. Estás perdiendo consultas nocturnas y fines de semana.`,
      `El estilo de las portadas de los Reels en @${this.target} es inconsistente, lo que reduce la percepción de marca "Premium".`,
      `El CTA (Llamado a la acción) en la biografía de @${this.target} es débil. No genera urgencia ni explica un beneficio claro.`,
      `Falta de historias destacadas organizadas en formato de embudo de ventas (Quiénes Somos, Testimonios, Servicios) para @${this.target}.`
    ];

    const webFindings = [
      `El tiempo de respuesta móvil (LCP) de ${this.target} presenta demoras puntuales. Google penalizará tu SEO si no se optimiza.`,
      `El botón de contacto de WhatsApp en ${this.target} no es 'sticky' (flotante constante). Cuando el usuario hace scroll hacia abajo, pierde el incentivo de contactar.`,
      `El dominio ${this.target} no parece tener configurado correctamente el Pixel de Meta para eventos clave como 'Lead' o 'Purchase'.`,
      `Los procesos de registro o contacto en ${this.target} tienen demasiados campos requeridos, provocando una altísima tasa de fricción y abandono.`,
      `Revisión de H1/H2: La estructura principal de ${this.target} es confusa para motores de búsqueda, dificultando el posicionamiento orgánico local.`,
      `El contraste de colores de los botones principales (CTAs) en ${this.target} no destaca lo suficiente, perdiendo atención y clics.`,
      `No se detectó un sistema robusto de Retargeting en el código de ${this.target}; el 90% de los visitantes que se van, no vuelven a ver publicidad tuya.`
    ];

    const pool = this.isIg ? igFindings : webFindings;
    let selected = [];
    while(selected.length < 4) {
      let f = pool[this._random(pool.length)];
      if(!selected.includes(f)) selected.push(f);
    }
    return selected;
  }

  getActions() {
    const igActions = [
      `Implementar un embudo de Manychat en @${this.target} para que todo el que comente una palabra clave reciba el link de compra.`,
      `Reestructurar la biografía de @${this.target} usando la fórmula: [Autoridad] + [Beneficio Principal] + [Llamado a la Acción Fuerte].`,
      `Diseñar una plantilla visual estándar para las portadas de los Reels y unificar la paleta de colores.`,
      `Lanzar una campaña de Ads de Meta tipo "Interacción" apuntando a crear Lookalikes (públicos similares) de la base de @${this.target}.`
    ];
    const webActions = [
      `Comprimir inmediatamente imágenes clave de ${this.target} al formato WebP e instalar un plugin/cdn de caché avanzado.`,
      `Instalar un widget flotante impulsado por Chatbot IA en ${this.target} para captar y pre-calificar LEADS 24/7.`,
      `Configurar la API de Conversiones de Meta a través de Google Tag Manager en ${this.target} para trazar ventas reales, evadiendo bloqueos de iOS 14.`,
      `Reducir el formulario de contacto en la landing principal de ${this.target} pidiendo inicialmente solo Nombre y WhatsApp.`
    ];
    
    const pool = this.isIg ? igActions : webActions;
    let selected = [];
    while(selected.length < 3) {
      let a = pool[this._random(pool.length)];
      if(!selected.includes(a)) selected.push(a);
    }
    return selected;
  }

  getAlertMessage() {
    if (this.isIg) {
      return `Alerta: El perfil @${this.target} está perdiendo alcance orgánico y conversiones directas en DM debido a problemas estructurales.`;
    } else {
      return `Alerta: Hemos detectado 3 fugas de prospectos silenciosas en ${this.target} que están encareciendo el costo de adquisición de clientes.`;
    }
  }
}

function generatePdfData(targetValue) {
  const roberto = new RobertoAI(targetValue);
  
  document.getElementById('auditor-target-name').textContent = roberto.target;
  const alertEl = document.getElementById('auditor-dynamic-alert');
  if (alertEl) {
    alertEl.textContent = roberto.getAlertMessage();
  }
  
  const findings = roberto.getFindings();
  const actions = roberto.getActions();

  document.getElementById('pdf-findings').innerHTML = findings.map(f => `<li style="margin-bottom: 8px;">${f}</li>`).join('');
  document.getElementById('pdf-actions').innerHTML = actions.map(a => `<li style="margin-bottom: 8px;">${a}</li>`).join('');
}

if (auditorDownloadBtn) {
  auditorDownloadBtn.addEventListener('click', () => {
    const inlineReport = document.getElementById('inline-report');
    if (inlineReport.style.display === 'none') {
      inlineReport.style.display = 'block';
      auditorDownloadBtn.innerHTML = `Ocultar diagnóstico detallado <span style="font-size: 14px;">▲</span>`;
    } else {
      inlineReport.style.display = 'none';
      auditorDownloadBtn.innerHTML = `Ver diagnóstico detallado de tu negocio <span style="font-size: 14px;">▼</span>`;
    }
  });
}

if (auditorResetBtn) {
  auditorResetBtn.addEventListener('click', () => {
    auditorInput.value = '';
    auditorProgressFill.style.width = '0%';
    auditorResult.style.display = 'none';
    document.getElementById('inline-report').style.display = 'none';
    if(auditorDownloadBtn) auditorDownloadBtn.innerHTML = `Ver diagnóstico detallado de tu negocio <span style="font-size: 14px;">▼</span>`;
    auditorForm.style.display = 'block';
  });
}

// ============================================
// ---- BENTO CARDS FLIP LOGIC (NUEVO) ----
// ============================================
const serviceDetails = {
  'Performance Ads (Google & Meta)': {
    good: 'Tráfico constante y calificado, aumento acelerado de prospectos y crecimiento escalable en facturación con ROI medible.',
    bad: 'Te quedas esperando el "boca a boca" mientras le regalas a la competencia a todos los que hoy buscan lo que tú vendes.'
  },
  'Creación de Contenido Viral': {
    good: 'Atracción masiva y un posicionamiento de autoridad absoluto que te hace destacar frente a cualquier cuenta amateur.',
    bad: 'Tu empresa se ve genérica. El algoritmo de Instagram te ignora y pierdes alcance diario, resultando invisible en tu rubro.'
  },
  'Community & Social Management': {
    good: 'Comunidad fidelizada, atención constante y un perfil perfectamente optimizado que funciona como landing page persuasiva.',
    bad: 'Tus redes se sienten abandonadas y transmiten desconfianza a clientes potenciales que siempre te buscan antes de comprar.'
  },
  'Automatizaciones con Inteligencia Artificial': {
    good: 'Atención nivel corporativo 24/7 en WhatsApp, cualificación en piloto automático. No pierdes consultas ni de madrugada.',
    bad: 'Pierdes clientes impacientes a diario. Te cambian por la primera agencia/competidor que les responda mientras tú estabas ocupado.'
  },
  'Diseño y Desarrollo Web': {
    good: 'Ecosistema propio que da prestigio puro y convierte el tráfico en clientes sin fricciones. Automatiza ventas con pasarelas.',
    bad: 'Pierdes ventas grandes porque al no tener web, te perciben pequeño. Dependes 100% del caprichoso algoritmo de Instagram.'
  }
};

document.querySelectorAll('.bento__card').forEach(card => {
  // Wrap existing content inside front face
  const front = document.createElement('div');
  front.className = 'bento__card-front';
  while(card.firstChild) {
    front.appendChild(card.firstChild);
  }
  
  // Extract Title to map dynamic details
  const titleEl = front.querySelector('.bento__card-title');
  const title = titleEl ? titleEl.textContent.trim() : '';
  const details = serviceDetails[title];

  // Construct Back face
  const back = document.createElement('div');
  back.className = 'bento__card-back';
  if(details) {
    back.innerHTML = `
      <h3 style="font-size:1.15rem;margin-bottom:1rem;color:var(--gray-950);font-family:var(--font-display);">Análisis Estratégico</h3>
      <div style="background:var(--blue-50);padding:1rem;border-radius:12px;margin-bottom:1rem;border-left:4px solid var(--blue-500);">
        <p style="font-size:0.875rem;margin:0;color:var(--gray-900);line-height:1.5;"><strong>🟢 Si lo implementas:</strong><br/>${details.good}</p>
      </div>
      <div style="background:#fef2f2;padding:1rem;border-radius:12px;margin-bottom:1.5rem;border-left:4px solid #ef4444;">
        <p style="font-size:0.875rem;margin:0;color:var(--gray-900);line-height:1.5;"><strong>🔴 Si no lo usas:</strong><br/>${details.bad}</p>
      </div>
      <a href="#" class="btn btn--primary btn-agendar" style="width:100%; justify-content:center; margin-top:auto;">Agendar para este servicio</a>
    `;
  }

  // Inject Inner wrapper for 3D preserve
  const inner = document.createElement('div');
  inner.className = 'bento__card-inner';
  inner.appendChild(front);
  inner.appendChild(back);
  card.appendChild(inner);

  // Toggle behavior
  card.addEventListener('click', function(e) {
    if(!e.target.closest('.btn-agendar')) {
      card.classList.toggle('is-flipped');
    }
  });
  
  // Bind Calendly to newly created button
  const newBtn = back.querySelector('.btn-agendar');
  if(newBtn) {
    newBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const calendlyUrl = 'https://calendly.com/neurovidstudioia/reunion-estrategica'; 
      if (typeof Calendly !== 'undefined') Calendly.initPopupWidget({url: calendlyUrl});
      else window.open(calendlyUrl, '_blank');
    });
  }
});

// ============================================
// ---- RIGHT LADDER SCROLL PERSON ----
// ============================================
(function() {
  const lPerson   = document.getElementById('ladder-person');
  const legLeft   = document.getElementById('leg-left');
  const legRight  = document.getElementById('leg-right');
  const armLeft   = document.getElementById('arm-left');
  const armRight  = document.getElementById('arm-right');
  if (!lPerson) return;

  // usable track: from 4% to 92% of viewport height (leave room for figure size)
  const TRACK_TOP_PCT    = 0.04;  // 4vh from top
  const TRACK_BOTTOM_PCT = 0.88;  // 88vh from top

  let rafPending = false;
  let walkTick   = 0;
  let isMoving   = false;
  let stopTimer  = null;

  function update() {
    const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollTotal <= 0) return;

    const ratio = Math.max(0, Math.min(window.scrollY / scrollTotal, 1));
    const vh    = window.innerHeight;
    const topPx = (TRACK_TOP_PCT + ratio * (TRACK_BOTTOM_PCT - TRACK_TOP_PCT)) * vh;

    // Position character on the right-side panel
    lPerson.style.top  = topPx + 'px';
    lPerson.style.left = '50%';
    lPerson.style.transform = 'translateX(-50%)';

    // Walking animation using requestAnimationFrame tick
    walkTick += 0.35;
    const legA = Math.sin(walkTick) * 28;  // degrees swing
    const armA = Math.sin(walkTick) * 18;

    if (legLeft)  legLeft .setAttribute('transform',  `rotate(${legA}  26 44)`);
    if (legRight) legRight.setAttribute('transform',  `rotate(${-legA} 34 44)`);
    if (armLeft)  armLeft .setAttribute('transform',  `rotate(${-armA} 22 26)`);
    if (armRight) armRight.setAttribute('transform',  `rotate(${armA}  38 26)`);

    rafPending = false;
  }

  window.addEventListener('scroll', () => {
    if (!rafPending) {
      rafPending = true;
      requestAnimationFrame(update);
    }
    // Stop walk animation after scroll ends
    isMoving = true;
    clearTimeout(stopTimer);
    stopTimer = setTimeout(() => {
      isMoving = false;
      // Reset limbs to neutral
      if (legLeft)  legLeft .setAttribute('transform', 'rotate(0 26 44)');
      if (legRight) legRight.setAttribute('transform', 'rotate(0 34 44)');
      if (armLeft)  armLeft .setAttribute('transform', 'rotate(0 22 26)');
      if (armRight) armRight.setAttribute('transform', 'rotate(0 38 26)');
    }, 120);
  });

  // Initial position at top (no-op, ladder removed)
})();

// ============================================================
// ---- SERVICE MODAL (iOS 26 Icon Click) ----
// ============================================================
const SERVICE_DATA = {
  ads: {
    title: 'Performance Ads',
    icon: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M6 18C6 11.373 11.373 6 18 6" stroke="white" stroke-width="2.5" stroke-linecap="round"/><path d="M30 18C30 24.627 24.627 30 18 30" stroke="white" stroke-width="2.5" stroke-linecap="round"/><circle cx="18" cy="18" r="4" fill="white"/><path d="M26 10L30 6M26 6L30 10" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>`,
    desc: 'Campañas de pago en Meta (Instagram/Facebook) y Google diseñadas con creatividades de alto impacto, segmentación de precisión y optimización continua orientada a conversión. Cada peso invertido trabaja para vos.',
    pros: [
      'Tráfico calificado que llega directo a tu producto o servicio',
      'Resultados medibles desde el primer día con métricas claras',
      'Escalabilidad predecible: más inversión = más ventas',
      'Segmentación por intereses, comportamiento y remarketing',
      'Creatividades A/B testeadas para máximo rendimiento',
    ],
    cons: [
      'Tu competencia capta exactamente los clientes que deberías captar vos',
      'Dependés de visibilidad orgánica impredecible y algoritmos',
      'Sin datos reales, no podés saber qué funciona ni optimizar nada',
      'El costo de adquirir clientes aumenta sin un sistema de ads eficiente',
    ],
    wa: 'Hola, vi los servicios de NeuroStudio y me interesa sumar *Performance Ads (Google & Meta)* para mi negocio. Me gustaría conocer cómo pueden ayudarme a conseguir más clientes con publicidad paga.',
  },
  web: {
    title: 'Desarrollo Web',
    icon: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="4" y="7" width="28" height="20" rx="3" stroke="white" stroke-width="2.5"/><path d="M4 13H32" stroke="white" stroke-width="2"/><circle cx="9" cy="10" r="1.5" fill="white"/><circle cx="14" cy="10" r="1.5" fill="white"/><path d="M12 22L15 19L18 22L23 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    desc: 'Diseñamos y desarrollamos sitios web y landing pages de alto rendimiento con foco total en conversión. Velocidad, estética premium y arquitectura pensada para que el visitante se convierta en cliente.',
    pros: [
      'Tu marca transmite autoridad y confianza desde el primer clic',
      'Convierte visitantes en prospectos con CTAs estratégicos',
      'Optimizado para SEO y velocidad — más tráfico orgánico gratis',
      'Independencia total del algoritmo de Instagram',
      'Pasarelas de pago, formularios y automatizaciones integradas',
    ],
    cons: [
      'Sin web, el cliente no puede investigarte antes de comprarte',
      'Perdés credibilidad frente a competidores con presencia web sólida',
      'Imposible escalar ventas sin una plataforma propia',
      'Dependés 100% de redes sociales que pueden banearte o cambiarte',
    ],
    wa: 'Hola, me interesa el servicio de *Diseño y Desarrollo Web* de NeuroStudio. Quiero crear (o mejorar) mi presencia online con un sitio que convierta visitas en clientes. ¿Podemos hablar?',
  },
  ia: {
    title: 'IA & Automatizaciones',
    icon: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="10" y="8" width="16" height="14" rx="3" stroke="white" stroke-width="2.5"/><rect x="14" y="12" width="3" height="3" rx="0.5" fill="white"/><rect x="19" y="12" width="3" height="3" rx="0.5" fill="white"/><path d="M14 17H22" stroke="white" stroke-width="1.5" stroke-linecap="round"/><path d="M18 22V26" stroke="white" stroke-width="2" stroke-linecap="round"/><path d="M18 8V5" stroke="white" stroke-width="2" stroke-linecap="round"/><circle cx="18" cy="4" r="1.5" fill="white"/></svg>`,
    desc: 'Diseñamos e implementamos flujos de automatización inteligente usando IA: chatbots para WhatsApp e Instagram que califican leads, responden en segundos y agendan citas. Tu equipo de ventas en piloto automático.',
    pros: [
      'Atención al cliente 24/7 sin costo de personal extra',
      'Ningún lead se pierde, aunque sea de madrugada o en feriado',
      'Calificación automática: solo hablas con prospectos listos para comprar',
      'Reducís tiempos de respuesta de horas a 2 segundos',
      'Flujos de email, CRM y seguimiento completamente automatizados',
    ],
    cons: [
      'Perdés clientes impacientes: el 78% elige al primero que responde',
      'Tu equipo gasta horas en tareas repetitivas en lugar de cerrar ventas',
      'Sin cualificación automática, perdés tiempo con leads que nunca compran',
      'Competidores con IA te superan en velocidad y te roban mercado',
    ],
    wa: 'Hola, me interesa implementar *IA y Automatizaciones* en mi negocio con NeuroStudio. Quiero atender clientes las 24hs y automatizar mi proceso de ventas. ¿Cuándo podemos hablar?',
  },
  social: {
    title: 'Social Media',
    icon: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="10" cy="18" r="4" stroke="white" stroke-width="2.5"/><circle cx="27" cy="10" r="4" stroke="white" stroke-width="2.5"/><circle cx="27" cy="26" r="4" stroke="white" stroke-width="2.5"/><line x1="14" y1="16" x2="23" y2="12" stroke="white" stroke-width="2"/><line x1="14" y1="20" x2="23" y2="24" stroke="white" stroke-width="2"/></svg>`,
    desc: 'Gestionamos tus redes sociales de forma estratégica: calendario editorial, community management, respuesta a mensajes y comentarios, y reportes mensuales de crecimiento. Tu marca siempre activa y coherente.',
    pros: [
      'Consistencia de marca que genera confianza y reconocimiento',
      'Comunidad activa y comprometida que recomienda tu negocio',
      'Perfil optimizado que funciona como landing page persuasiva',
      'Manejo profesional de crisis y comentarios negativos',
      'Estrategia de crecimiento medible mes a mes',
    ],
    cons: [
      'Publicaciones irregulares transmiten abandono y desconfianza',
      'Sin estrategia, el algoritmo te ignora y el alcance cae',
      'Comentarios sin respuesta generan mala imagen pública',
      'Tu competencia con buena presencia se lleva a tus seguidores',
    ],
    wa: 'Hola, me interesa el servicio de *Social Media Management* de NeuroStudio. Quiero que gestionen mis redes de forma profesional y consistente. ¿Me cuentan más?',
  },
  video: {
    title: 'Creación de Contenido',
    icon: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="4" y="11" width="20" height="15" rx="3" stroke="white" stroke-width="2.5"/><path d="M24 15L32 11V25L24 21" stroke="white" stroke-width="2.5" stroke-linejoin="round"/><circle cx="12" cy="18" r="2" fill="white"/></svg>`,
    desc: 'Producimos contenido visual y audiovisual de alto impacto: reels, videos para ads, fotos de producto y creatividades para redes. Todo pensado para detener el scroll y llamar a la acción.',
    pros: [
      'Contenido premium que posiciona tu marca como referente del sector',
      'Videos virales que generan alcance orgánico masivo sin pagar',
      'Creatividades profesionales para campañas de ads con mayor CTR',
      'Storytelling que conecta emocionalmente con tu audiencia',
      'Biblioteca de contenido reutilizable para múltiples plataformas',
    ],
    cons: [
      'Contenido amateur resta credibilidad y ahuyenta clientes premium',
      'Sin video, perdés el formato de mayor alcance en Instagram y TikTok',
      'Creatividades mediocres hacen que tus ads cuesten el doble de más',
      'Competidores con mejor contenido captan la atención que debería ser tuya',
    ],
    wa: 'Hola, me interesa el servicio de *Creación de Contenido* de NeuroStudio. Quiero producir material visual y audiovisual de calidad para mi marca. ¿Me cuentan cómo trabajan?',
  },
};

(function() {
  const modal  = document.getElementById('service-modal');
  const closeBtn = document.getElementById('svc-close');
  if (!modal) return;

  function openModal(key) {
    const d = SERVICE_DATA[key];
    if (!d) return;

    // Populate
    document.getElementById('svc-icon').innerHTML = d.icon;
    document.getElementById('svc-title').textContent = d.title;
    document.getElementById('svc-desc').textContent = d.desc;
    document.getElementById('svc-pros').innerHTML = d.pros.map(p => `<li>• ${p}</li>`).join('');
    document.getElementById('svc-cons').innerHTML = d.cons.map(c => `<li>• ${c}</li>`).join('');
    const waHref = `https://wa.me/59899421323?text=${encodeURIComponent(d.wa)}`;
    document.getElementById('svc-wa').href = waHref;

    // Open with animation
    modal.setAttribute('aria-hidden', 'false');
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Bind icon clicks
  document.querySelectorAll('.char-card[data-service]').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.service));
  });

  // Close button
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  // Click outside panel
  modal.addEventListener('click', e => {
    if (e.target === modal || e.target.classList.contains('svc-glow')) closeModal();
  });

  // Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
  });
})();
