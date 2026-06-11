---
title: "SEKIRO ゲーム実況"
description: "身内だけでゲーム実況まがいなことをした記録"
pubDate: 2026-06-09
categories: ["game"]
tags: ["動画", "ゲーム実況"]
image:
  src: "https://res.cloudinary.com/dellp9a4z/image/upload/v1756758388/og-projects_mj7lcc.png"
  alt: "カバー画像"
license: "all-rights-reserved"
draft: false
---

<div id="secure-box" style="padding: 2rem; border: 2px solid #ef4444; border-radius: 8px; text-align: center; margin: 2rem 0; background: #fafafa; color: #333; display: block;">
  <p style="margin-bottom: 1rem; font-weight: bold; color: #ef4444;">🔒 セキュリティ保護コンテンツ</p>
  <p style="font-size: 0.9rem; margin-bottom: 1rem;">閲覧するには正しいパスワードを入力してください。</p>
  <input type="password" id="secure-input" placeholder="パスワードを入力" style="padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px; margin-right: 0.5rem; color: #000;" />
  <button id="secure-button" style="padding: 0.5rem 1rem; background: #ef4444; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">認証</button>
  <div id="secure-error" style="color: red; margin-top: 0.5rem; display: none; font-size: 0.9rem;">❌ パスワードが間違っています。</div>
</div>

<div id="secure-output" style="margin: 2rem 0; display: none;"></div>

<script is:inline>
  (function() {
    // 💡 本番環境の自動ミニファイ（圧縮）バグを防ぐため、
    // エラーメッセージの初期非表示と、入力欄の初期表示を最優先で強制実行します
    const errorEl = document.getElementById("secure-error");
    const boxEl = document.getElementById("secure-box");
    if (errorEl) errorEl.style.setProperty("display", "none", "important");
    if (boxEl) boxEl.style.setProperty("display", "block", "important");

    const btn = document.getElementById("secure-button");
    const input = document.getElementById("secure-input");
    const output = document.getElementById("secure-output");

    if (!btn || !input) return;

    btn.addEventListener("click", function() {
      const password = input.value.trim();
      if (errorEl) errorEl.style.display = "none";

      if (password === "asperfamily") {
        if (boxEl) boxEl.style.display = "none";
        if (output) {
          output.style.display = "block";
          
          // 💡 本番環境のHTMLコンパイラをバグらせないため、
          // 文字列の足し算（+）やテンプレートリテラルを使わず、
          // ブラウザ標準の iframe 要素をJavaScriptで1から綺麗に組み立てます
          const iframe = document.createElement("iframe");
          iframe.src = "https://www.youtube.com/embed/videoseries?list=PLJ_bBHlRkQq4iUw1MOEeNnETifYjox-yF";
          iframe.title = "YouTube";
          iframe.frameBorder = "0";
          iframe.allowFullscreen = true;
          iframe.style.width = "100%";
          iframe.style.height = "500px";
          iframe.style.aspectRatio = "16/9";
          
          // 既存の中身を空にしてからiframeを挿入
          output.innerHTML = "";
          output.appendChild(iframe);
        }
      } else {
        if (errorEl) errorEl.style.display = "block";
      }
    });
  })();
</script>