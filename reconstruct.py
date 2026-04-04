import re

# Read the original content from the update_html.py script which loaded it into memory
# The issue: the file was corrupted. We need to rebuild from what we know.
# Let's check if there are any temp files or backups
import os

# Check for common backup locations
paths_to_check = [
    'C:/Users/Cliente/Documents/Web/index.html.bak',
    'C:/Users/Cliente/AppData/Local/Temp/',
]

for p in paths_to_check:
    if os.path.exists(p):
        print(f"Found: {p}, size: {os.path.getsize(p)}")

# The original file content was in the variable `content` in update_html.py
# when the script crashed. The original file was already emptied by open('w').
# We need to reconstruct it.
print("No backup found - need to reconstruct")
print("File size:", os.path.getsize('C:/Users/Cliente/Documents/Web/index.html'))
