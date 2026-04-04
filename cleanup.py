import re, sys

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

orig_len = len(html)
print(f"Original: {orig_len} bytes, {html.count(chr(10))} líneas")

# Encontrar dónde termina el contenido real de la web
# El contenido real termina en la linea con el cierre </div> antes del primer ns-editor
marker_old = 'ns-editor-root'
marker_new = 'id="ns-root"'

cut = -1
for m in [marker_new, marker_old]:
    idx = html.find('<div id="' + m.split('"')[0].replace('id="','') )
    if m == marker_new:
        idx = html.find('<div id="ns-root"')
    elif m == marker_old:
        idx = html.find('<div id="ns-editor-root"')
    if idx > 0:
        cut = idx
        print(f"Marcador '{m}' encontrado en byte {idx}")
        break

if cut < 0:
    print("No se encontró marcador del editor, HTML parece limpio")
    sys.exit(0)

# El HTML real termina justo antes del marcador
real_html = html[:cut].rstrip()

# Limpiar basura de extensiones del navegador cerca del corte
real_html = re.sub(r'<div id="thunderbit-crx[^>]*>[^<]*</div>', '', real_html)
real_html = re.sub(r'<button id="open-side-panel"[^>]*></button>', '', real_html)
real_html = re.sub(r'<div class="calendly-frame-tag"[^>]*></div>', '', real_html)
real_html = re.sub(r'<script src="editor\.js[^"]*"></script>', '', real_html)
real_html = real_html.rstrip()

# Asegurar cierre correcto
if not real_html.endswith('</body>'):
    # quitar cierres parciales
    real_html = re.sub(r'</body>\s*$', '', real_html).rstrip()
    real_html = re.sub(r'</html>\s*$', '', real_html).rstrip()

final = real_html + '\n\n  <script src="editor.js?v=7"></script>\n</body>\n</html>\n'

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(final)

print(f"Guardado: {len(final)} bytes ({orig_len - len(final)} bytes eliminados)")
print("LISTO - HTML limpiado correctamente")
