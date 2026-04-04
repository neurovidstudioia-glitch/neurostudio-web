/**
 * NeuroEditor Pro v7 — Editor visual robusto
 * Sin bugs de drag, edición completa de tarjetas/imágenes/textos
 */
(function () {
  'use strict';
  if (!['localhost','127.0.0.1'].includes(location.hostname)) return;

  // Limpiar instancias previas
  ['ns-root','ns-fab','ns-css-tag','ns-file-inp'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.remove();
  });

  /* ─── CSS ─────────────────────────────────────────────────────── */
  const CSS = document.createElement('style');
  CSS.id = 'ns-css-tag';
  CSS.textContent = `
  #ns-root{position:fixed;top:0;right:0;bottom:0;width:310px;background:#0d1117;
    border-left:1px solid #21262d;z-index:2147483647;display:none;flex-direction:column;
    color:#e6edf3;font-family:system-ui,sans-serif;box-shadow:-6px 0 24px #0008;overflow:hidden}
  #ns-root *{box-sizing:border-box}
  #ns-hd{display:flex;align-items:center;justify-content:space-between;padding:10px 14px;
    background:#161b22;border-bottom:1px solid #21262d;flex-shrink:0}
  #ns-hd h2{font-size:.9rem;font-weight:700;color:#58a6ff;margin:0}
  #ns-hd button{background:none;border:none;color:#8b949e;font-size:1.3rem;cursor:pointer;padding:0 4px}
  #ns-hd button:hover{color:#fff}
  #ns-hist{display:flex;gap:5px;padding:8px 14px;border-bottom:1px solid #21262d;flex-shrink:0}
  .hb{flex:1;background:#21262d;border:1px solid #30363d;color:#c9d1d9;
    font-size:.72rem;font-weight:700;padding:6px 3px;border-radius:5px;cursor:pointer}
  .hb:hover:not(:disabled){background:#30363d;color:#fff}
  .hb:disabled{opacity:.3;cursor:default}
  #ns-quick{display:grid;grid-template-columns:1fr 1fr;gap:5px;padding:0 14px 8px;flex-shrink:0}
  .qb{background:#21262d;border:1px solid #30363d;color:#c9d1d9;font-size:.72rem;
    font-weight:600;padding:7px 4px;border-radius:5px;cursor:pointer;text-align:center}
  .qb:hover{background:#30363d;color:#fff}
  #ns-qsave{background:#238636;border-color:#2ea043;color:#fff;grid-column:span 2}
  #ns-qsave:hover{background:#2ea043}
  #ns-scroll{flex:1;overflow-y:auto;padding:0 12px 20px}
  #ns-scroll::-webkit-scrollbar{width:4px}
  #ns-scroll::-webkit-scrollbar-thumb{background:#30363d;border-radius:2px}
  .ns-sec{background:#161b22;border:1px solid #21262d;border-radius:8px;padding:11px;margin-top:10px}
  .ns-sec-t{font-size:.67rem;text-transform:uppercase;letter-spacing:.08em;
    color:#58a6ff;font-weight:700;margin-bottom:9px}
  .ns-ctrl{margin-bottom:9px}
  .ns-ctrl label{display:block;font-size:.72rem;color:#8b949e;margin-bottom:3px}
  .ns-ctrl input[type=text],.ns-ctrl input[type=number],
  .ns-ctrl textarea,.ns-ctrl select{width:100%;background:#0d1117;border:1px solid #30363d;
    color:#e6edf3;padding:6px 8px;border-radius:5px;font-size:.8rem;font-family:inherit}
  .ns-ctrl input:focus,.ns-ctrl textarea:focus,.ns-ctrl select:focus{border-color:#388bfd;outline:none}
  .ns-ctrl textarea{resize:vertical;min-height:52px}
  .ns-ctrl input[type=range]{width:100%;height:4px;border:none;padding:0;accent-color:#388bfd}
  .ns-ctrl input[type=color]{width:100%;height:32px;padding:2px;border:1px solid #30363d;
    border-radius:5px;background:#0d1117;cursor:pointer}
  .ns-r2{display:grid;grid-template-columns:1fr 1fr;gap:6px}
  .nb{width:100%;background:#21262d;border:1px solid #30363d;color:#c9d1d9;
    padding:7px;border-radius:5px;font-size:.78rem;font-weight:600;cursor:pointer;
    font-family:inherit;transition:.15s}
  .nb:hover{background:#30363d;color:#fff}
  .nb-blue{background:#1f3d6b;border-color:#388bfd;color:#58a6ff}
  .nb-blue:hover{background:#388bfd;color:#fff}
  .nb-red{background:#3d1a1a;border-color:#f85149;color:#f85149}
  .nb-red:hover{background:#f85149;color:#fff}
  .nb-green{background:#1a3d25;border-color:#2ea043;color:#3fb950}
  .nb-green:hover{background:#2ea043;color:#fff}
  .al-row{display:flex;gap:4px}
  .al-btn{flex:1;background:#21262d;border:1px solid #30363d;color:#8b949e;
    padding:5px;border-radius:4px;cursor:pointer;font-size:.85rem}
  .al-btn:hover,.al-btn.on{background:#1f3d6b;border-color:#388bfd;color:#58a6ff}
  #ns-fab{position:fixed;bottom:22px;right:22px;width:52px;height:52px;border-radius:50%;
    background:linear-gradient(135deg,#00f2ff,#388bfd);border:none;cursor:pointer;
    font-size:22px;z-index:2147483646;box-shadow:0 4px 20px #388bfd55;
    display:flex;align-items:center;justify-content:center;transition:.2s}
  #ns-fab:hover{transform:scale(1.12)}
  body.ns-on{padding-right:310px !important;transition:padding .25s}
  .ns-hl{outline:1px dashed #388bfd55 !important;outline-offset:1px;cursor:crosshair !important}
  .ns-sel{outline:2px solid #00f2ff !important;outline-offset:2px}
  .ns-drag-el{opacity:.3;pointer-events:none !important}
  .ns-ghost{position:fixed;pointer-events:none;z-index:9999999;border:2px solid #00f2ff;
    background:#00f2ff11;border-radius:4px;transition:none}
  .ns-drop-zone{outline:3px solid #00f2ff !important;outline-offset:3px}
  #ns-chip{font-family:monospace;font-size:.65rem;background:#1f3d6b;
    color:#58a6ff;padding:1px 5px;border-radius:3px;margin-left:4px}
  .ns-emoji-g{display:grid;grid-template-columns:repeat(7,1fr);gap:3px;margin-top:6px}
  .ns-emoji-g span{background:#0d1117;border:1px solid #21262d;border-radius:3px;
    font-size:1rem;padding:3px;cursor:pointer;text-align:center}
  .ns-emoji-g span:hover{background:#21262d}
  #ns-prev{text-align:center;margin-bottom:8px;display:none}
  #ns-prev img{max-width:100%;max-height:110px;border-radius:6px;border:1px solid #30363d}
  `;
  document.head.appendChild(CSS);

  /* ─── FILE INPUT ──────────────────────────────────────────────── */
  const fileInp = document.createElement('input');
  fileInp.type = 'file'; fileInp.id = 'ns-file-inp';
  fileInp.accept = 'image/*'; fileInp.style.display = 'none';
  document.body.appendChild(fileInp);

  /* ─── PANEL HTML ──────────────────────────────────────────────── */
  const root = document.createElement('div');
  root.id = 'ns-root';
  root.innerHTML = `
  <div id="ns-hd"><h2>✦ NeuroEditor Pro</h2><button id="ns-cls">×</button></div>
  <div id="ns-hist">
    <button class="hb" id="ns-undo" disabled>↩ Deshacer</button>
    <button class="hb" id="ns-redo" disabled>↪ Rehacer</button>
    <button class="hb" id="ns-res">⟳ Inicio</button>
  </div>
  <div id="ns-quick">
    <button class="qb" id="ns-qaimg">🖼 Imagen URL</button>
    <button class="qb" id="ns-qapc">📁 Imagen PC</button>
    <button class="qb" id="ns-qatxt">📝 Añadir Texto</button>
    <button class="qb" id="ns-qmov" id="ns-qmov">🏗 Modo Mover</button>
    <button class="qb" id="ns-qdel" style="color:#f85149">🗑 Borrar</button>
    <button class="qb" id="ns-qsave">✅ Guardar</button>
  </div>
  <div id="ns-scroll">
    <div id="ns-empty" style="text-align:center;padding:36px 12px;color:#484f58;font-size:.85rem">
      <div style="font-size:2.5rem;margin-bottom:12px;opacity:.4">🖱️</div>
      <b>Haz clic en cualquier cosa</b><br>para editar sus propiedades
    </div>
    <div id="ns-props" style="display:none">

      <div class="ns-sec">
        <div class="ns-sec-t">Elemento <span id="ns-chip"></span></div>
        <div class="ns-r2">
          <button class="nb nb-blue" id="ns-pdup">👯 Duplicar</button>
          <button class="nb nb-red"  id="ns-pdel">🗑 Borrar</button>
        </div>
      </div>

      <!-- Texto -->
      <div class="ns-sec" id="ns-ptxt">
        <div class="ns-sec-t">Texto</div>
        <div class="ns-ctrl">
          <button class="nb" id="ns-pinl">✏️ Editar en pantalla</button>
        </div>
        <div class="ns-ctrl" id="ns-phref" style="display:none">
          <label>Enlace (href)</label>
          <input type="text" id="ns-href" placeholder="https://...">
        </div>
      </div>

      <!-- Imagen -->
      <div class="ns-sec" id="ns-pimg" style="display:none">
        <div class="ns-sec-t">Imagen</div>
        <div id="ns-prev"><img id="ns-thumb" src=""></div>
        <div class="ns-ctrl">
          <button class="nb nb-blue" id="ns-pipc">🖥 Elegir desde PC</button>
        </div>
        <div class="ns-ctrl">
          <label>URL de imagen</label>
          <textarea id="ns-iurl" rows="2" placeholder="https://..."></textarea>
        </div>
        <button class="nb" id="ns-piurl">✔ Aplicar URL</button>
      </div>

      <!-- Tarjeta con fondo (bento, plan, etc.) -->
      <div class="ns-sec" id="ns-pbg">
        <div class="ns-sec-t">Fondo del bloque seleccionado</div>
        <div class="ns-ctrl">
          <button class="nb nb-blue" id="ns-bgpc">🖥 Imagen de fondo desde PC</button>
        </div>
        <div class="ns-ctrl">
          <label>URL de imagen de fondo</label>
          <input type="text" id="ns-bgurl" placeholder="https://...">
        </div>
        <button class="nb" id="ns-bgapply">✔ Aplicar imagen de fondo</button>
        <div class="ns-ctrl" style="margin-top:8px">
          <label>Superposición de color (oscurecer)</label>
          <input type="range" id="ns-overlay" min="0" max="90" step="5" value="40">
        </div>
      </div>

      <!-- Tipografía -->
      <div class="ns-sec">
        <div class="ns-sec-t">Tipografía</div>
        <div class="ns-ctrl"><label>Color del texto</label><input type="color" id="ns-col"></div>
        <div class="ns-ctrl">
          <label>Tamaño: <b id="ns-fsv"></b></label>
          <input type="range" id="ns-fs" min="8" max="120" step="1">
        </div>
        <div class="ns-ctrl">
          <label>Peso</label>
          <select id="ns-fw">
            <option value="300">Delgada (300)</option>
            <option value="400">Normal (400)</option>
            <option value="500">Medio (500)</option>
            <option value="600">Semi-negrita (600)</option>
            <option value="700">Negrita (700)</option>
            <option value="800">Extra negrita (800)</option>
          </select>
        </div>
        <div class="ns-ctrl">
          <label>Alineación</label>
          <div class="al-row">
            <button class="al-btn" data-a="left">⫷</button>
            <button class="al-btn" data-a="center">≡</button>
            <button class="al-btn" data-a="right">⫸</button>
            <button class="al-btn" data-a="justify">▤</button>
          </div>
        </div>
      </div>

      <!-- Fondo y Bordes -->
      <div class="ns-sec">
        <div class="ns-sec-t">Apariencia</div>
        <div class="ns-ctrl"><label>Color de fondo</label><input type="color" id="ns-bgcol"></div>
        <div class="ns-ctrl">
          <label>Opacidad: <b id="ns-opv"></b>%</label>
          <input type="range" id="ns-op" min="0" max="100" step="1">
        </div>
        <div class="ns-ctrl">
          <label>Bordes redondeados: <b id="ns-radv"></b>px</label>
          <input type="range" id="ns-rad" min="0" max="200" step="1">
        </div>
      </div>

      <!-- Espaciado -->
      <div class="ns-sec">
        <div class="ns-sec-t">Espaciado y Tamaño</div>
        <div class="ns-ctrl"><label>Ancho</label><input type="text" id="ns-w" placeholder="auto | 100% | 300px"></div>
        <div class="ns-ctrl">
          <label>Margen superior: <b id="ns-mtv"></b>px</label>
          <input type="range" id="ns-mt" min="-200" max="500" step="4">
        </div>
        <div class="ns-ctrl">
          <label>Margen inferior: <b id="ns-mbv"></b>px</label>
          <input type="range" id="ns-mb" min="-200" max="500" step="4">
        </div>
        <div class="ns-ctrl">
          <label>Padding: <b id="ns-padv"></b>px</label>
          <input type="range" id="ns-pad" min="0" max="120" step="2">
        </div>
      </div>

      <!-- Posición -->
      <div class="ns-sec">
        <div class="ns-sec-t">Posición</div>
        <div class="ns-ctrl">
          <label>Modo</label>
          <select id="ns-pos">
            <option value="">Normal (en flujo)</option>
            <option value="absolute">Libre (absoluta)</option>
            <option value="fixed">Fija en pantalla</option>
          </select>
        </div>
        <div id="ns-xy" style="display:none">
          <div class="ns-r2">
            <div class="ns-ctrl"><label>X (left px)</label><input type="number" id="ns-px"></div>
            <div class="ns-ctrl"><label>Y (top px)</label><input type="number" id="ns-py"></div>
          </div>
        </div>
        <div class="ns-ctrl"><label>Z-index</label><input type="number" id="ns-zi" placeholder="auto"></div>
      </div>

      <!-- Emojis -->
      <div class="ns-sec">
        <div class="ns-sec-t">Emojis e Íconos</div>
        <div class="ns-ctrl">
          <input type="text" id="ns-emtxt" placeholder="Pegar emoji p.ej. 🚀">
        </div>
        <button class="nb" id="ns-emset">✔ Reemplazar con este emoji</button>
        <div class="ns-emoji-g" id="ns-emg"></div>
      </div>

      <!-- CSS -->
      <div class="ns-sec">
        <div class="ns-sec-t">CSS Directo</div>
        <div class="ns-ctrl">
          <textarea id="ns-css" rows="3" placeholder="p.ej: letter-spacing:2px; opacity:.8;"></textarea>
        </div>
        <button class="nb" id="ns-cssok">✔ Aplicar CSS</button>
      </div>

    </div>
  </div>`;
  document.body.appendChild(root);

  const fab = document.createElement('button');
  fab.id = 'ns-fab'; fab.innerHTML = '✨'; fab.title = 'NeuroEditor Pro';
  document.body.appendChild(fab);

  /* ─── ESTADO ──────────────────────────────────────────────────── */
  let open = false, moving = false, sel = null;
  let ghost = null, dragActive = false;
  let undoStack = [], redoStack = [];
  // Snapshot inicial SIN el panel (que aún no existe)
  const ORIG = document.body.innerHTML;

  /* ─── HISTORIAL ───────────────────────────────────────────────── */
  const g = id => document.getElementById(id);

  // Obtiene snapshot del contenido SIN incluir el panel del editor
  function getPageHTML() {
    cleanCls();
    // Sacar temporalmente los elementos del editor
    root.remove(); fab.remove();
    const html = document.body.innerHTML;
    // Volver a insertar
    document.body.appendChild(root);
    document.body.appendChild(fab);
    reapplyCls();
    return html;
  }

  function snap() {
    const s = getPageHTML();
    if (undoStack[undoStack.length-1] !== s) { undoStack.push(s); if(undoStack.length>40) undoStack.shift(); }
    redoStack = [];
    refreshH();
  }

  function refreshH() {
    g('ns-undo').disabled = undoStack.length < 2;
    g('ns-redo').disabled = redoStack.length === 0;
  }

  function cleanCls() {
    document.querySelectorAll('.ns-hl,.ns-sel,.ns-drag-el,.ns-drop-zone')
      .forEach(e => e.classList.remove('ns-hl','ns-sel','ns-drag-el','ns-drop-zone'));
  }

  function reapplyCls() { if(sel) sel.classList.add('ns-sel'); }

  function restoreHTML(html) {
    root.remove(); fab.remove();
    document.body.innerHTML = html;
    document.body.appendChild(root);
    document.body.appendChild(fab);
    sel = null; showEmpty(); refreshH();
  }

  g('ns-undo').onclick = () => { if(undoStack.length<2) return; redoStack.push(undoStack.pop()); restoreHTML(undoStack[undoStack.length-1]); };
  g('ns-redo').onclick = () => { if(!redoStack.length) return; const s=redoStack.pop(); undoStack.push(s); restoreHTML(s); };
  g('ns-res').onclick  = () => { if(!confirm('¿Restaurar al estado original de esta sesión?')) return; undoStack=[ORIG]; redoStack=[]; restoreHTML(ORIG); };

  document.addEventListener('keydown', e => {
    if(!open) return;
    if(e.ctrlKey && e.key==='z'){e.preventDefault(); g('ns-undo').click();}
    if(e.ctrlKey && e.key==='y'){e.preventDefault(); g('ns-redo').click();}
  });

  /* ─── ABRIR / CERRAR ─────────────────────────────────────────── */
  function openEd() {
    open = true;
    root.style.display = 'flex'; fab.style.display = 'none';
    document.body.classList.add('ns-on');
    if (undoStack.length === 0) { undoStack = [ORIG]; refreshH(); }
  }

  function closeEd() {
    open = false; moving = false; stopDrag();
    root.style.display = 'none'; fab.style.display = 'flex';
    document.body.classList.remove('ns-on');
    cleanCls(); sel = null;
    g('ns-qmov').style.color = '';
  }

  fab.onclick  = openEd;
  g('ns-cls').onclick = closeEd;

  /* ─── HOVER & CLICK ──────────────────────────────────────────── */
  document.addEventListener('mouseover', e => {
    if(!open || moving || dragActive) return;
    if(root.contains(e.target) || e.target===fab) return;
    document.querySelectorAll('.ns-hl').forEach(x=>x.classList.remove('ns-hl'));
    e.target.classList.add('ns-hl');
  }, true);

  document.addEventListener('mouseout', e => {
    if(e.target.classList) e.target.classList.remove('ns-hl');
  }, true);

  document.addEventListener('click', e => {
    if(!open || moving || dragActive) return;
    if(root.contains(e.target) || e.target===fab) return;
    e.preventDefault(); e.stopPropagation();

    // Desactivar edición inline previa
    document.querySelectorAll('[contenteditable=true]').forEach(el=>{
      el.contentEditable='false'; el.style.cursor='';
    });

    let t = e.target;
    // Si click en SVG hijo, subir al SVG completo
    if(['svg','path','circle','rect','g','polyline','polygon','line'].includes(t.tagName?.toLowerCase()))
      t = t.closest('svg') || t;

    if(sel) sel.classList.remove('ns-sel');
    sel = t;
    sel.classList.add('ns-sel');
    loadProps();
  }, true);

  /* ─── PROPIEDADES ────────────────────────────────────────────── */
  function showEmpty() { g('ns-empty').style.display='block'; g('ns-props').style.display='none'; }

  function loadProps() {
    if(!sel){showEmpty();return;}
    g('ns-empty').style.display='none';
    g('ns-props').style.display='block';

    const tag = sel.tagName.toLowerCase();
    g('ns-chip').textContent = '<'+tag+'>';
    const cs = getComputedStyle(sel);
    const isImg = tag === 'img';
    // Es un "bloque" (div, section, article, bento card, plan card, etc.)
    const isBlock = ['div','section','article','main','header','footer','aside','li','ul'].includes(tag);

    // Sección texto
    g('ns-ptxt').style.display = isImg ? 'none' : 'block';
    // Sección imagen (solo <img>)
    g('ns-pimg').style.display = isImg ? 'block' : 'none';
    // Sección imagen de fondo (solo bloques)
    g('ns-pbg').style.display = isBlock ? 'block' : 'none';

    // Href
    const anc = tag==='a' ? sel : sel.closest('a');
    g('ns-phref').style.display = anc ? 'block' : 'none';
    if(anc) g('ns-href').value = anc.getAttribute('href')||'';

    // Imagen actual
    if(isImg){
      g('ns-iurl').value = sel.src;
      g('ns-prev').style.display = 'block';
      g('ns-thumb').src = sel.src;
    }

    // Fondo actual del bloque
    if(isBlock){
      const bg = sel.style.backgroundImage || cs.backgroundImage;
      const urlM = bg.match(/url\(["']?(.+?)["']?\)/);
      g('ns-bgurl').value = urlM ? urlM[1] : '';
    }

    // Color texto
    g('ns-col').value = rgb2hex(cs.color);
    // Font size
    const fs = parseInt(cs.fontSize)||16;
    g('ns-fs').value = fs; g('ns-fsv').textContent = fs+'px';
    // Font weight
    const fw = cs.fontWeight;
    g('ns-fw').value = ['300','400','500','600','700','800'].includes(fw) ? fw : '400';
    // Align
    const al = cs.textAlign;
    document.querySelectorAll('.al-btn').forEach(b=>b.classList.toggle('on', b.dataset.a===al));
    // Fondo
    g('ns-bgcol').value = rgb2hex(cs.backgroundColor,'#000000');
    // Opacidad
    const op = Math.round((parseFloat(cs.opacity)||1)*100);
    g('ns-op').value=op; g('ns-opv').textContent=op;
    // Radius
    const rad = parseInt(cs.borderRadius)||0;
    g('ns-rad').value=rad; g('ns-radv').textContent=rad;
    // Width
    g('ns-w').value = sel.style.width||'';
    // Márgenes
    const mt=parseInt(cs.marginTop)||0, mb=parseInt(cs.marginBottom)||0;
    g('ns-mt').value=mt; g('ns-mtv').textContent=mt;
    g('ns-mb').value=mb; g('ns-mbv').textContent=mb;
    // Padding
    const pad=parseInt(cs.paddingTop)||0;
    g('ns-pad').value=pad; g('ns-padv').textContent=pad;
    // Posición
    const pos = sel.style.position||'';
    g('ns-pos').value=pos;
    g('ns-xy').style.display=(pos==='absolute'||pos==='fixed')?'block':'none';
    if(pos==='absolute'||pos==='fixed'){
      g('ns-px').value=parseInt(sel.style.left)||0;
      g('ns-py').value=parseInt(sel.style.top)||0;
    }
    g('ns-zi').value=sel.style.zIndex||'';
  }

  function rgb2hex(c, fb='#ffffff'){
    if(!c||!c.startsWith('rgb')) return fb;
    const [r,g2,b]=c.match(/\d+/g).map(Number);
    return '#'+[r,g2,b].map(x=>x.toString(16).padStart(2,'0')).join('');
  }

  /* ─── GUARD ──────────────────────────────────────────────────── */
  const grd = fn => (...a) => { if(!sel) return; fn(...a); };
  const chg = fn => (...a) => { if(!sel) return; fn(...a); snap(); };

  /* ─── BINDINGS BOTONES ───────────────────────────────────────── */

  // Dup + Del
  g('ns-pdup').onclick = grd(()=>{ snap(); const cl=sel.cloneNode(true); cl.removeAttribute('id'); cl.classList.remove('ns-sel'); sel.after(cl); sel.classList.remove('ns-sel'); sel=cl; cl.classList.add('ns-sel'); loadProps(); });
  g('ns-pdel').onclick = grd(()=>{ if(!confirm('¿Borrar?')) return; snap(); sel.remove(); sel=null; showEmpty(); });
  g('ns-qdel').onclick = ()=>{ g('ns-pdel').click(); };

  // Edición inline
  g('ns-pinl').onclick = grd(()=>{
    snap();
    sel.contentEditable='true'; sel.focus(); sel.style.cursor='text';
    const orig = sel;
    sel.addEventListener('blur', function handler(){
      this.contentEditable='false'; this.style.cursor='';
      orig.removeEventListener('blur',handler);
      snap();
    });
  });

  // Href
  g('ns-href').addEventListener('change', grd(e=>{
    const a = sel.tagName==='A'?sel:sel.closest('a');
    if(a){snap(); a.href=e.target.value;}
  }));

  // ── Imagen desde PC (helper compartido) ──
  function pickFromPC(onUrl){
    fileInp.value='';
    fileInp.onchange = ()=>{
      const file = fileInp.files[0];
      if(!file) return;
      const reader = new FileReader();
      reader.onload = ev => {
        // Preview inmediato
        const dataUrl = ev.target.result;
        g('ns-prev').style.display='block';
        g('ns-thumb').src = dataUrl;

        // Subir al servidor
        const fd = new FormData(); fd.append('file',file);
        fetch('/upload',{method:'POST',body:fd})
          .then(r=>r.json()).then(d=>{
            if(d.status==='ok') onUrl(d.url);
            else { alert('Error subida: '+d.msg); onUrl(dataUrl); }
          }).catch(()=>{ onUrl(dataUrl); });
      };
      reader.readAsDataURL(file);
    };
    fileInp.click();
  }

  // Imagen de elemento <img>
  g('ns-pipc').onclick   = grd(()=> pickFromPC(url=>{ snap(); sel.src=url; g('ns-iurl').value=url; g('ns-thumb').src=url; }));
  g('ns-piurl').onclick  = grd(()=>{ const u=g('ns-iurl').value.trim(); if(!u) return; snap(); sel.src=u; g('ns-thumb').src=u; g('ns-prev').style.display='block'; });
  g('ns-qaimg').onclick  = ()=>{
    const url=prompt('URL de la imagen:'); if(!url) return; snap();
    const img=document.createElement('img'); img.src=url;
    img.style.cssText='max-width:100%;border-radius:8px;display:block;margin:12px auto;';
    if(sel) sel.after(img); else document.body.appendChild(img);
    if(sel) sel.classList.remove('ns-sel'); sel=img; img.classList.add('ns-sel'); loadProps();
  };
  g('ns-qapc').onclick = ()=> pickFromPC(url=>{
    snap(); const img=document.createElement('img'); img.src=url;
    img.style.cssText='max-width:100%;border-radius:8px;display:block;margin:12px auto;';
    if(sel) sel.after(img); else document.body.appendChild(img);
    if(sel) sel.classList.remove('ns-sel'); sel=img; img.classList.add('ns-sel'); loadProps();
  });

  // Imagen de FONDO sobre tarjetas/bloques
  g('ns-bgpc').onclick = grd(()=> pickFromPC(url=>{
    snap();
    sel.style.backgroundImage = `url('${url}')`;
    sel.style.backgroundSize = 'cover';
    sel.style.backgroundPosition = 'center';
    applyOverlay();
    g('ns-bgurl').value = url;
  }));
  g('ns-bgapply').onclick = grd(()=>{
    const u=g('ns-bgurl').value.trim(); if(!u) return; snap();
    sel.style.backgroundImage=`url('${u}')`;
    sel.style.backgroundSize='cover'; sel.style.backgroundPosition='center';
    applyOverlay();
  });
  function applyOverlay(){
    const op=(100-parseInt(g('ns-overlay').value))/100;
    // Asegurar que el contenido hijo sea visible
    if(!sel.querySelector('.ns-bg-overlay')){
      const ov=document.createElement('div');
      ov.className='ns-bg-overlay';
      ov.style.cssText=`position:absolute;inset:0;background:rgba(0,0,0,${1-op});border-radius:inherit;pointer-events:none;z-index:0`;
      sel.style.position = sel.style.position||'relative';
      sel.appendChild(ov);
    } else {
      sel.querySelector('.ns-bg-overlay').style.background=`rgba(0,0,0,${1-op})`;
    }
  }
  g('ns-overlay').addEventListener('input', grd(()=>{ if(sel.style.backgroundImage) applyOverlay(); }));

  // Añadir texto
  g('ns-qatxt').onclick = ()=>{
    snap(); const p=document.createElement('p');
    p.textContent='Nuevo texto — haz doble clic para editar';
    p.style.cssText='color:#fff;font-size:18px;margin:12px auto;max-width:800px;text-align:center;';
    if(sel) sel.after(p); else document.body.appendChild(p);
    if(sel) sel.classList.remove('ns-sel'); sel=p; p.classList.add('ns-sel'); loadProps();
  };

  // ── TIPOGRAFÍA ──
  g('ns-col').addEventListener('input', grd(e=>{ sel.style.color=e.target.value; }));
  g('ns-col').addEventListener('change', grd(()=>snap()));
  g('ns-fs').addEventListener('input', grd(e=>{ sel.style.fontSize=e.target.value+'px'; g('ns-fsv').textContent=e.target.value+'px'; }));
  g('ns-fs').addEventListener('change', grd(()=>snap()));
  g('ns-fw').addEventListener('change', chg(e=>{ sel.style.fontWeight=e.target.value; }));
  document.querySelectorAll('.al-btn').forEach(b=>{
    b.onclick = grd(()=>{
      snap(); sel.style.textAlign=b.dataset.a;
      document.querySelectorAll('.al-btn').forEach(x=>x.classList.toggle('on',x===b));
    });
  });

  // ── APARIENCIA ──
  g('ns-bgcol').addEventListener('input', grd(e=>{ sel.style.backgroundColor=e.target.value; }));
  g('ns-bgcol').addEventListener('change', grd(()=>snap()));
  g('ns-op').addEventListener('input', grd(e=>{ sel.style.opacity=e.target.value/100; g('ns-opv').textContent=e.target.value; }));
  g('ns-op').addEventListener('change', grd(()=>snap()));
  g('ns-rad').addEventListener('input', grd(e=>{ sel.style.borderRadius=e.target.value+'px'; g('ns-radv').textContent=e.target.value; }));
  g('ns-rad').addEventListener('change', grd(()=>snap()));

  // ── ESPACIADO ──
  g('ns-w').addEventListener('change', chg(e=>{ sel.style.width=e.target.value; }));
  g('ns-mt').addEventListener('input', grd(e=>{ sel.style.marginTop=e.target.value+'px'; g('ns-mtv').textContent=e.target.value; }));
  g('ns-mt').addEventListener('change', grd(()=>snap()));
  g('ns-mb').addEventListener('input', grd(e=>{ sel.style.marginBottom=e.target.value+'px'; g('ns-mbv').textContent=e.target.value; }));
  g('ns-mb').addEventListener('change', grd(()=>snap()));
  g('ns-pad').addEventListener('input', grd(e=>{ sel.style.padding=e.target.value+'px'; g('ns-padv').textContent=e.target.value; }));
  g('ns-pad').addEventListener('change', grd(()=>snap()));

  // ── POSICIÓN ──
  g('ns-pos').addEventListener('change', chg(e=>{
    sel.style.position=e.target.value;
    if(e.target.value==='absolute'||e.target.value==='fixed'){
      const r=sel.getBoundingClientRect();
      sel.style.left=r.left+'px'; sel.style.top=(r.top+scrollY)+'px'; sel.style.zIndex='9000';
      g('ns-xy').style.display='block'; g('ns-px').value=parseInt(sel.style.left); g('ns-py').value=parseInt(sel.style.top);
    } else { sel.style.left=sel.style.top=''; g('ns-xy').style.display='none'; }
  }));
  g('ns-px').addEventListener('input', grd(e=>{ sel.style.left=e.target.value+'px'; }));
  g('ns-py').addEventListener('input', grd(e=>{ sel.style.top=e.target.value+'px'; }));
  g('ns-zi').addEventListener('change', chg(e=>{ sel.style.zIndex=e.target.value; }));

  // ── EMOJIS ──
  const EMOJIS=['🚀','⭐','✅','❌','🔥','💡','🎯','🏆','💎','✨','🌟','🎨','📱','💻','🖥','📊','🤖','⚡','🔒','🎬','📸','🌍','💰','🤝','👍','💪','🧠','🔗','📩','📞'];
  const eg=g('ns-emg');
  EMOJIS.forEach(em=>{ const s=document.createElement('span'); s.textContent=em; s.onclick=()=>{ g('ns-emtxt').value=em; }; eg.appendChild(s); });
  g('ns-emset').onclick = grd(()=>{ const v=g('ns-emtxt').value.trim(); if(!v) return; snap(); sel.textContent=v; });

  // ── CSS DIRECTO ──
  g('ns-cssok').onclick = grd(()=>{ const c=g('ns-css').value.trim(); if(!c) return; snap(); sel.style.cssText+=';'+c; });

  /* ─── MODO MOVER ─────────────────────────────────────────────── */
  // Usamos un fantasma (ghost) visual en lugar de mover el DOM en tiempo real.
  // Al soltar → determinamos target → reordenamos.
  let dropTarget = null;

  function stopDrag(){
    if(ghost) { ghost.remove(); ghost=null; }
    dragActive=false;
    document.querySelectorAll('.ns-drag-el,.ns-drop-zone').forEach(e=>e.classList.remove('ns-drag-el','ns-drop-zone'));
    dropTarget=null;
  }

  const qmov = g('ns-qmov');
  qmov.onclick = ()=>{
    moving = !moving;
    qmov.style.color = moving ? '#00f2ff' : '';
    qmov.style.borderColor = moving ? '#00f2ff' : '';
    if(!moving) stopDrag();
  };

  document.addEventListener('mousedown', e=>{
    if(!open || !moving) return;
    if(root.contains(e.target)||e.target===fab) return;
    e.preventDefault(); e.stopPropagation();

    let t=e.target;
    ['svg','path','circle','rect','g'].includes(t.tagName?.toLowerCase()) && (t=t.closest('svg')||t);

    // Si el elemento ya es absoluto/fixed → arrastre pixel-a-pixel   
    const cs=getComputedStyle(t);
    if(cs.position==='absolute'||cs.position==='fixed'){
      dragActive=true;
      let startX=e.clientX, startY=e.clientY;
      const startL=parseInt(t.style.left)||t.offsetLeft;
      const startT2=parseInt(t.style.top)||t.offsetTop;
      t.classList.add('ns-drag-el');

      const onMove=ev=>{
        t.style.left=(startL+ev.clientX-startX)+'px';
        t.style.top=(startT2+ev.clientY-startY)+'px';
      };
      const onUp=()=>{
        t.classList.remove('ns-drag-el');
        snap();
        dragActive=false;
        document.removeEventListener('mousemove',onMove,true);
        document.removeEventListener('mouseup',onUp,true);
      };
      document.addEventListener('mousemove',onMove,true);
      document.addEventListener('mouseup',onUp,true);
      return;
    }

    // Modo reordenamiento: crear fantasma
    snap();
    dragActive=true;
    const r=t.getBoundingClientRect();
    ghost=document.createElement('div');
    ghost.className='ns-ghost';
    ghost.style.width=r.width+'px'; ghost.style.height=r.height+'px';
    ghost.style.left=r.left+'px'; ghost.style.top=r.top+'px';
    document.body.appendChild(ghost);
    t.classList.add('ns-drag-el');

    let dragEl=t;

    const onMove=ev=>{
      if(!ghost) return;
      ghost.style.left=(ev.clientX-r.width/2)+'px';
      ghost.style.top=(ev.clientY-r.height/2)+'px';

      // Limpiar zona anterior
      document.querySelectorAll('.ns-drop-zone').forEach(x=>x.classList.remove('ns-drop-zone'));
      dropTarget=null;

      const elems=document.elementsFromPoint(ev.clientX,ev.clientY);
      for(const el of elems){
        if(el===dragEl||el===ghost||root.contains(el)||el===document.body||el===document.documentElement) continue;
        if(el.tagName==='HTML') continue;
        dropTarget=el;
        el.classList.add('ns-drop-zone');
        break;
      }
    };

    const onUp=ev=>{
      if(dropTarget && dropTarget!==dragEl){
        const pr=dropTarget.parentNode;
        if(pr){
          const rr=dropTarget.getBoundingClientRect();
          const after=ev.clientY>rr.top+rr.height/2;
          try{ after ? pr.insertBefore(dragEl,dropTarget.nextSibling) : pr.insertBefore(dragEl,dropTarget); }catch(_){}
        }
      }
      stopDrag();
      snap();
      document.removeEventListener('mousemove',onMove,true);
      document.removeEventListener('mouseup',onUp,true);
    };

    document.addEventListener('mousemove',onMove,true);
    document.addEventListener('mouseup',onUp,true);
  }, true);

  /* ─── GUARDAR ─────────────────────────────────────────────────── */
  g('ns-qsave').onclick = ()=>{
    if(!confirm('¿Guardar todos los cambios en index.html?')) return;
    const sv=g('ns-qsave'); sv.textContent='Guardando...';

    cleanCls();
    document.querySelectorAll('[contenteditable]').forEach(e=>e.removeAttribute('contenteditable'));
    document.body.classList.remove('ns-on');
    root.remove(); fab.remove(); CSS.remove();

    let html='<!DOCTYPE html>\n'+document.documentElement.outerHTML;
    html=html.replace(/<script src="editor\.js[^"]*"><\/script>/g,'');
    html=html.replace(/<\/body>/,'  <script src="editor.js?v='+Date.now()+'"><\/script>\n</body>');

    fetch('/save',{method:'POST',body:html})
      .then(()=>location.reload())
      .catch(()=>{
        alert('Error al guardar. ¿Está corriendo server.py?');
        document.body.appendChild(root); document.body.appendChild(fab); document.head.appendChild(CSS);
        document.body.classList.add('ns-on');
        sv.textContent='✅ Guardar';
      });
  };

  /* ─── EMOJIS en la grilla: grid ya está creado ────────────────── */

  /* ─── INIT ────────────────────────────────────────────────────── */
  console.log('✦ NeuroEditor Pro v7 listo. Haz clic en ✨ para activar.');
})();
