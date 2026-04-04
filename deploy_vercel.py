import os
import json
import urllib.request
import urllib.error
from pathlib import Path

TOKEN = "vcp_29noE6qxzz0AQHU6oFdNFg0pHdOeXKqYBm1oKI2vOpI"
PROJECT_NAME = "neurostudio-web"
FOLDER = "."

# 1. Gather all files
files = []
ignored_dirs = {'.git', '.claude', 'neurostudio-theme'}
for root, dirs, filenames in os.walk(FOLDER):
    dirs[:] = [d for d in dirs if d not in ignored_dirs]
    for filename in filenames:
        if filename in ['deploy_vercel.py', 'neurostudio-theme.zip', 'preview_video.mp4']:
            continue
        path = os.path.join(root, filename)
        rel_path = os.path.relpath(path, FOLDER).replace('\\', '/')
        try:
            with open(path, 'rb') as f:
                content = f.read()
            # For Vercel API, we must upload files first then link them by grouping them, 
            # or upload via /v13/deployments with file content?
            # Vercel v13 allows sending small files directly in the body base64/hex usually or we just use python requests...
            # Actually, writing Vercel v13 deploy from scratch in Python is complex since u need SHA sum uploads etc.
            pass
        except Exception:
            pass
