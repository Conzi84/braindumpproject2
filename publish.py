#!/usr/bin/env python3
"""
Brain Dump Publisher
--------------------
Speichert Blog Post + Medium Draft automatisch in die richtigen Ordner
und pusht direkt zu GitHub.

Verwendung:
    python publish.py
"""

import os
import subprocess
import sys
from datetime import date

# ── Pfad zu deinem Projekt ──────────────────────────────────────────────────
PROJECT_ROOT = r"C:\Users\bandw\Documents\Claude Cowork\brain dump project"
BLOG_DIR     = os.path.join(PROJECT_ROOT, "content", "blog")
MEDIUM_DIR   = os.path.join(PROJECT_ROOT, "medium-drafts")

# ────────────────────────────────────────────────────────────────────────────

def slugify(title: str) -> str:
    """Titel → URL-freundlicher Dateiname."""
    import re
    title = title.lower().strip()
    title = re.sub(r"[äÄ]", "ae", title)
    title = re.sub(r"[öÖ]", "oe", title)
    title = re.sub(r"[üÜ]", "ue", title)
    title = re.sub(r"[ß]",  "ss", title)
    title = re.sub(r"[^a-z0-9\s-]", "", title)
    title = re.sub(r"\s+", "-", title)
    return title


def read_multiline(prompt: str) -> str:
    """Mehrzeiligen Text einlesen — Ende mit einer Leerzeile."""
    print(prompt)
    print("(Leerzeile zum Beenden)")
    lines = []
    while True:
        line = input()
        if line == "":
            if lines:
                break
        else:
            lines.append(line)
    return "\n".join(lines)


def save_file(path: str, content: str):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"  ✓ Gespeichert: {path}")


def git_push(commit_message: str):
    """Git add → commit → push."""
    try:
        subprocess.run(["git", "-C", PROJECT_ROOT, "add", "."],          check=True)
        subprocess.run(["git", "-C", PROJECT_ROOT, "commit", "-m", commit_message], check=True)
        subprocess.run(["git", "-C", PROJECT_ROOT, "push"],              check=True)
        print("  ✓ GitHub Push erfolgreich — Netlify deployed in ~1 Min")
    except subprocess.CalledProcessError as e:
        print(f"  ✗ Git Fehler: {e}")
        sys.exit(1)


def main():
    print("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
    print("  Brain Dump Publisher")
    print("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n")

    today = date.today().isoformat()  # z.B. 2025-10-22

    # ── Titel eingeben ───────────────────────────────────────────────────────
    title = input("Artikel-Titel (English): ").strip()
    slug  = slugify(title)

    blog_filename   = f"{today}-{slug}.md"
    medium_filename = f"{today}-{slug}-medium.md"

    blog_path   = os.path.join(BLOG_DIR,   blog_filename)
    medium_path = os.path.join(MEDIUM_DIR, medium_filename)

    print(f"\n  Blog:   content/blog/{blog_filename}")
    print(f"  Medium: medium-drafts/{medium_filename}\n")

    # ── Blog Post (EN) einfügen ──────────────────────────────────────────────
    blog_content = read_multiline("── Blog Post (EN) einfügen ──")

    # ── Medium Draft einfügen ────────────────────────────────────────────────
    medium_content = read_multiline("\n── Medium Draft einfügen ──")

    # ── Speichern ────────────────────────────────────────────────────────────
    print("\nSpeichere Dateien...")
    save_file(blog_path,   blog_content)
    save_file(medium_path, medium_content)

    # ── Git Push ─────────────────────────────────────────────────────────────
    print("\nPushe zu GitHub...")
    git_push(f"post: {title}")

    print(f"\n✅ Fertig — '{title}' ist live in ~1 Minute auf Netlify.")
    print(f"   Medium Draft liegt in: medium-drafts/{medium_filename}\n")


if __name__ == "__main__":
    main()
