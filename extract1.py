import re, json

html = open('index.html', encoding='utf-8').read()

# Buscamos fragmentos de texto entre tags HTML
texts = set()

# Limpiamos script y style
clean_html = re.sub(r'<(script|style)[^>]*>.*?</\1>', '', html, flags=re.DOTALL | re.IGNORECASE)

matches = re.findall(r'>([^<]+)<', clean_html)
for m in matches:
    t = m.strip()
    if len(t) > 2 and '{' not in t and not re.match(r'^\W+$', t):
        texts.add(t)

# También extraemos strings de catalog.js y main.js
js1 = open('catalog.js', encoding='utf-8').read()
js2 = open('main.js', encoding='utf-8').read()
for js in [js1, js2]:
    for m in re.findall(r"(?:'|\")([^'\"]+)(?:'|\")", js):
        t = m.strip()
        if len(t) > 4 and ' ' in t and '<' not in t and '{' not in t:
            texts.add(t)

with open('es_texts.json', 'w', encoding='utf-8') as f:
    json.dump(list(texts), f, ensure_ascii=False, indent=2)
print(f"Extracted {len(texts)} strings")
