import http.server
import socketserver
import os
import json
import uuid
import re

PORT = 8080
UPLOAD_DIR = 'assets/uploads'

os.makedirs(UPLOAD_DIR, exist_ok=True)


def parse_multipart(body_bytes, boundary):
    """Extrae el primer archivo de un body multipart/form-data."""
    sep = b'--' + boundary
    parts = body_bytes.split(sep)
    for part in parts:
        if b'Content-Disposition' not in part:
            continue
        # Separar headers del contenido (doble CRLF)
        if b'\r\n\r\n' in part:
            header_block, content = part.split(b'\r\n\r\n', 1)
        elif b'\n\n' in part:
            header_block, content = part.split(b'\n\n', 1)
        else:
            continue

        header_str = header_block.decode('utf-8', errors='ignore')

        # Buscar filename en el header
        match = re.search(r'filename="([^"]+)"', header_str)
        if not match:
            continue

        filename = match.group(1)
        # Quitar el terminador del part (--\r\n al final)
        content = content.rstrip(b'\r\n').rstrip(b'--')

        return filename, content

    return None, None


class EditorHandler(http.server.SimpleHTTPRequestHandler):

    def do_POST(self):
        length = int(self.headers.get('Content-Length', 0))
        body   = self.rfile.read(length)

        # ── Guardar HTML ──────────────────────────────────────────
        if self.path == '/save':
            try:
                html = body.decode('utf-8')
                with open('index.html', 'w', encoding='utf-8') as f:
                    f.write(html)
                self._json(200, {'status': 'ok'})
            except Exception as e:
                self._json(500, {'status': 'error', 'msg': str(e)})

        # ── Subir imagen desde PC ─────────────────────────────────
        elif self.path == '/upload':
            try:
                content_type = self.headers.get('Content-Type', '')
                # Extraer boundary
                m = re.search(r'boundary=([^\s;]+)', content_type)
                if not m:
                    self._json(400, {'status': 'error', 'msg': 'No boundary'})
                    return

                boundary = m.group(1).encode()
                filename, file_bytes = parse_multipart(body, boundary)

                if not filename or file_bytes is None:
                    self._json(400, {'status': 'error', 'msg': 'No se encontró archivo'})
                    return

                # Validar extensión
                ext = os.path.splitext(filename)[1].lower()
                allowed = {'.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.avif', '.bmp'}
                if ext not in allowed:
                    self._json(400, {'status': 'error', 'msg': f'Tipo no permitido: {ext}'})
                    return

                # Guardar con nombre único
                unique_name = uuid.uuid4().hex + ext
                dest = os.path.join(UPLOAD_DIR, unique_name)
                with open(dest, 'wb') as f:
                    f.write(file_bytes)

                url = '/' + dest.replace('\\', '/')
                print(f"  [UPLOAD] {filename} → {url}")
                self._json(200, {'status': 'ok', 'url': url, 'name': filename})

            except Exception as e:
                self._json(500, {'status': 'error', 'msg': str(e)})

        else:
            self.send_response(404)
            self.end_headers()

    def _json(self, code, data):
        body = json.dumps(data).encode('utf-8')
        self.send_response(code)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Content-Length', str(len(body)))
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, fmt, *args):
        # Silenciar GETs para no llenar la consola
        if args and str(args[0]).startswith('GET'):
            return
        super().log_message(fmt, *args)


print("=" * 54)
print(f"  HOST ACTIVO -> http://localhost:{PORT}")
print(f"  Imagenes subidas -> {os.path.abspath(UPLOAD_DIR)}")
print("=" * 54)

with socketserver.TCPServer(("", PORT), EditorHandler) as httpd:
    httpd.allow_reuse_address = True
    httpd.serve_forever()
