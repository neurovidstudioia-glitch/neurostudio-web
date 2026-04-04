  <!-- FOOTER -->
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__brand">
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="footer__logo">NeuroStudio</a>
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
          <a href="#servicios">Diseño Web</a>
          <a href="#servicios">IA &amp; Automatizaciones</a>
          <a href="#servicios">Social Media</a>
          <a href="#servicios">Contenido Viral</a>
        </div>
        <div class="footer__col">
          <h4 class="footer__col-title">Empresa</h4>
          <a href="#nosotros">Quiénes somos</a>
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
      <p>&copy; <?php echo date('Y'); ?> NeuroStudio. Todos los derechos reservados. Montevideo, Uruguay.</p>
    </div>
  </footer>

  <!-- Orbit panel — placed at body level so position:fixed works correctly -->
  <div id="orbit-panel" aria-hidden="true">
    <div class="orbit-panel__backdrop" id="orbit-overlay"></div>
    <div class="orbit-panel__card">
      <button class="op-close" aria-label="Cerrar">&times;</button>
      <div class="op-icon-wrap" id="op-icon-wrap"></div>
      <div class="op-header">
        <div class="op-title"></div>
        <div class="op-sub"></div>
      </div>
      <div class="op-cols">
        <div class="op-col op-col--pro">
          <h4 class="op-col-title">Con NeuroStudio</h4>
          <ul class="op-pros"></ul>
        </div>
        <div class="op-col op-col--con">
          <h4 class="op-col-title">Sin NeuroStudio</h4>
          <ul class="op-cons"></ul>
        </div>
      </div>
      <a href="#" class="btn btn--primary op-wa-btn" target="_blank" rel="noopener">Quiero este servicio →</a>
    </div>
  </div>

  <!-- WhatsApp flotante -->
  <a href="https://wa.me/59899421323" class="wa-float" target="_blank" rel="noopener" aria-label="Contactar por WhatsApp">
    <svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
  </a>

  <?php wp_footer(); ?>
</body>
</html>
