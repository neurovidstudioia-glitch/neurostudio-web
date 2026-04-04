import re

with open('C:/Users/Cliente/Documents/Web/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# ── CHANGE 1: Bump CSS version ──
content = content.replace('href="style.css?v=15"', 'href="style.css?v=16"')

# ── CHANGE 4: Replace valores section ──
valores_old_pattern = r'    <!-- VALORES / TIMELINE -->.*?    </section>\s*\n    <!-- PROCESO -->'
valores_old_pattern2 = r'    <section class="valores" id="nosotros">.*?    </section>\s*\n    <!-- PROCESO -->'

valores_new = '''    <!-- VALORES / TIMELINE -->
    <section class="valores" id="nosotros">
      <div class="valores__inner">
        <div class="valores__header reveal">
          <span class="tag">Qui\u00e9nes Somos</span>
          <h2 class="section-title">Impulsados por datos,<br />guiados por resultados.</h2>
          <p class="valores__sub">Hac\u00e9 clic en cualquier punto de la l\u00ednea para conocer qui\u00e9nes somos y qu\u00e9 nos mueve.</p>
        </div>

        <!-- Horizontal Timeline -->
        <div class="ns-timeline reveal">
          <div class="ns-timeline__track"></div>

          <div class="ns-timeline__item" data-tl="mision">
            <div class="ns-timeline__dot">
              <svg width="20" height="20" viewBox="0 0 28 28" fill="none"><path d="M14 3L25 8.5V19.5L14 25L3 19.5V8.5L14 3Z" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/><circle cx="14" cy="14" r="3" fill="currentColor"/></svg>
            </div>
            <div class="ns-timeline__label">Misi\u00f3n</div>
            <div class="ns-timeline__panel">
              <div class="ns-timeline__panel-inner">
                <div class="ns-tl-icon">
                  <svg width="32" height="32" viewBox="0 0 28 28" fill="none"><path d="M14 3L25 8.5V19.5L14 25L3 19.5V8.5L14 3Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="14" cy="14" r="4" fill="currentColor" opacity="0.3"/><circle cx="14" cy="14" r="2" fill="currentColor"/></svg>
                </div>
                <h3>Nuestra Misi\u00f3n</h3>
                <p>Transformar la presencia digital de cada cliente en un motor de crecimiento medible y sostenible, mediante marketing inteligente e IA aplicada a resultados concretos. No prometemos humo \u2014 entregamos n\u00fameros.</p>
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
            <div class="ns-timeline__label">Visi\u00f3n</div>
            <div class="ns-timeline__panel">
              <div class="ns-timeline__panel-inner">
                <div class="ns-tl-icon">
                  <svg width="32" height="32" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="10" stroke="currentColor" stroke-width="2"/><path d="M14 4V14L20 20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="14" cy="14" r="2" fill="currentColor"/></svg>
                </div>
                <h3>Nuestra Visi\u00f3n</h3>
                <p>Ser la agencia referente de Latinoam\u00e9rica en marketing con IA: donde cada peso invertido genere retorno medible y cada cliente escale sin techo ni frustraciones. El futuro del marketing es inteligente \u2014 y ya est\u00e1 aqu\u00ed.</p>
                <div class="ns-tl-tags">
                  <span>Liderazgo LATAM</span><span>Escala sin l\u00edmites</span><span>Tecnolog\u00eda de punta</span>
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
                  <div><strong>Resultados</strong><span>M\u00e9tricas reales sobre promesas vac\u00edas. Cada acci\u00f3n tiene un n\u00famero detr\u00e1s.</span></div>
                  <div><strong>Innovaci\u00f3n IA</strong><span>La IA no es moda para nosotros \u2014 es ventaja competitiva real y tangible.</span></div>
                  <div><strong>Transparencia</strong><span>Reportes claros, sin humo. Sab\u00e9s exactamente qu\u00e9 pasa con tu inversi\u00f3n.</span></div>
                  <div><strong>Compromiso</strong><span>Tu \u00e9xito es nuestro \u00e9xito. Crecemos juntos o no crecemos.</span></div>
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
                <p>Trafficker, filmmaker, desarrollador web y especialista en IA en un mismo equipo integrado. Sin intermediarios, sin subcontratos ocultos. Estrategia, creatividad y tecnolog\u00eda bajo el mismo techo \u2014 trabajando para tu crecimiento.</p>
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
                <h3>Por Qu\u00e9 NeuroStudio</h3>
                <p>Combinamos la creatividad de una boutique con la potencia anal\u00edtica de la IA. Cada campa\u00f1a est\u00e1 respaldada por datos, cada contenido tiene prop\u00f3sito, cada automatizaci\u00f3n trabaja mientras vos descans\u00e1s. No somos una agencia m\u00e1s \u2014 somos el sistema de crecimiento de tu negocio.</p>
                <div class="ns-tl-tags">
                  <span>IA + Creatividad</span><span>Data-driven</span><span>ROI garantizado</span>
                </div>
              </div>
            </div>
          </div>

        </div><!-- /ns-timeline -->
      </div>
    </section>

    <!-- PROCESO -->'''

# Replace valores section
content = re.sub(
    r'    <section class="valores" id="nosotros">.*?    </section>\s*\n\s*<!-- PROCESO -->',
    valores_new,
    content,
    flags=re.DOTALL
)

# ── CHANGE 5: Replace proceso section ──
proceso_new = '''    <!-- PROCESO -->
    <section class="proceso" id="proceso">
      <div class="proceso__header reveal">
        <span class="tag">C\u00f3mo trabajamos</span>
        <h2 class="section-title">Un proceso claro<br />de principio a fin.</h2>
        <p style="color:var(--text-dim);font-size:1rem;margin-top:.75rem">Hac\u00e9 clic en cualquier paso para ver en detalle c\u00f3mo trabajamos.</p>
      </div>

      <div class="proceso__steps">

        <div class="proceso__step proceso__step--accordion reveal" data-step="1">
          <div class="proceso__step-trigger">
            <div class="proceso__step-num">01</div>
            <div class="proceso__step-body">
              <h3>Diagn\u00f3stico</h3>
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
                <h4>\u00bfQu\u00e9 hacemos en el diagn\u00f3stico?</h4>
                <p>Antes de mover un peso, entendemos a fondo tu negocio. Analizamos tu presencia digital actual, auditamos a tu competencia directa, mapeamos el comportamiento de tu cliente ideal y definimos m\u00e9tricas de \u00e9xito claras. Sin atajos: la base determina el resultado.</p>
                <ul>
                  <li>Auditor\u00eda de presencia digital (web, redes, SEO)</li>
                  <li>An\u00e1lisis de competidores y posicionamiento de mercado</li>
                  <li>Definici\u00f3n de buyer persona y journey de compra</li>
                  <li>Establecimiento de KPIs y objetivos medibles</li>
                </ul>
                <a href="https://wa.me/59899421323?text=Hola NeuroStudio %F0%9F%91%8B Quiero empezar con el diagn\u00f3stico de mi negocio." target="_blank" class="btn btn--primary" style="margin-top:1rem;display:inline-flex;">Comenzar diagn\u00f3stico gratuito \u2192</a>
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
              <p class="proceso__step-preview">Plan de acci\u00f3n personalizado con KPIs claros.</p>
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
                <h4>\u00bfC\u00f3mo dise\u00f1amos tu estrategia?</h4>
                <p>Con los datos del diagn\u00f3stico, construimos un plan de acci\u00f3n a medida \u2014 sin templates gen\u00e9ricos. Elegimos los canales correctos (Meta, Google, TikTok, email, WhatsApp), definimos presupuestos \u00f3ptimos, formatos de contenido y automatizaciones necesarias para alcanzar tus objetivos.</p>
                <ul>
                  <li>Selecci\u00f3n de canales y mix de medios \u00f3ptimo</li>
                  <li>Calendario de contenido y campa\u00f1as con presupuesto</li>
                  <li>Dise\u00f1o de embudos de conversi\u00f3n personalizados</li>
                  <li>Plan de automatizaciones e IA para escalar</li>
                </ul>
                <a href="https://wa.me/59899421323?text=Hola NeuroStudio %F0%9F%91%8B Quiero que dise\u00f1en una estrategia para mi negocio." target="_blank" class="btn btn--primary" style="margin-top:1rem;display:inline-flex;">Quiero mi estrategia \u2192</a>
              </div>
            </div>
          </div>
        </div>

        <div class="proceso__connector"></div>

        <div class="proceso__step proceso__step--accordion reveal reveal--delay-2" data-step="3">
          <div class="proceso__step-trigger">
            <div class="proceso__step-num">03</div>
            <div class="proceso__step-body">
              <h3>Ejecuci\u00f3n</h3>
              <p class="proceso__step-preview">Campa\u00f1as activas, contenido y automatizaciones en vivo.</p>
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
                <h4>\u00bfC\u00f3mo ejecutamos tu plan?</h4>
                <p>Arrancamos con velocidad y precisi\u00f3n. Lanzamos campa\u00f1as pagadas, publicamos contenido optimizado, activamos chatbots y automatizaciones, y monitoreamos cada variable en tiempo real. Ajustamos diariamente para maximizar el rendimiento desde el d\u00eda uno.</p>
                <ul>
                  <li>Lanzamiento de campa\u00f1as publicitarias en todos los canales</li>
                  <li>Producci\u00f3n y publicaci\u00f3n de contenido seg\u00fan calendario</li>
                  <li>Activaci\u00f3n de chatbots y flujos de automatizaci\u00f3n</li>
                  <li>Optimizaci\u00f3n continua basada en datos en tiempo real</li>
                </ul>
                <a href="https://wa.me/59899421323?text=Hola NeuroStudio %F0%9F%91%8B Quiero empezar a ejecutar mi estrategia digital." target="_blank" class="btn btn--primary" style="margin-top:1rem;display:inline-flex;">Activar mi plan \u2192</a>
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
              <p class="proceso__step-preview">M\u00e9tricas reales y pr\u00f3ximos pasos claros.</p>
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
                <h4>\u00bfQu\u00e9 vas a ver en los reportes?</h4>
                <p>Cero humo, cero excusas. Reportes claros con los n\u00fameros que importan: alcance, clics, conversiones, ROAS, costo por lead y retenci\u00f3n. Cada reporte incluye an\u00e1lisis de qu\u00e9 funcion\u00f3, qu\u00e9 ajustamos y cu\u00e1les son los pr\u00f3ximos pasos para seguir escalando.</p>
                <ul>
                  <li>Dashboard con m\u00e9tricas en tiempo real accesible 24/7</li>
                  <li>Reporte quincenal o mensual seg\u00fan tu plan</li>
                  <li>An\u00e1lisis de ROAS, CPA, CTR y retenci\u00f3n de clientes</li>
                  <li>Reuni\u00f3n de revisi\u00f3n con propuesta de mejoras</li>
                </ul>
                <a href="https://wa.me/59899421323?text=Hola NeuroStudio %F0%9F%91%8B Quiero ver un ejemplo de reporte y empezar." target="_blank" class="btn btn--primary" style="margin-top:1rem;display:inline-flex;">Ver c\u00f3mo reportamos \u2192</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>'''

content = re.sub(
    r'    <!-- PROCESO -->\s*\n    <section class="proceso" id="proceso">.*?    </section>\s*\n\s*<!-- AUDITOR',
    proceso_new + '\n\n    <!-- AUDITOR',
    content,
    flags=re.DOTALL
)

with open('C:/Users/Cliente/Documents/Web/index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('HTML updated successfully')

# Verify changes
with open('C:/Users/Cliente/Documents/Web/index.html', 'r', encoding='utf-8') as f:
    verify = f.read()

print('Version bump:', 'style.css?v=16' in verify)
print('Timeline present:', 'ns-timeline' in verify)
print('Accordion present:', 'proceso__step--accordion' in verify)
