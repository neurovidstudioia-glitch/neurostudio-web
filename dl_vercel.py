import urllib.request
import shutil

url = 'https://github.com/vercel/vercel/releases/download/vercel%4034.2.0/vercel-windows.exe'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as resp, open('vercel.exe', 'wb') as out:
        shutil.copyfileobj(resp, out)
    print("Download completed successfully.")
except Exception as e:
    print(f"Error: {e}")
