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
<style type="text/css">
  .secure-container {
    padding: 2rem !important;
    border: 2px solid #ef4444 !important;
    border-radius: 8px !important;
    text-align: center !important;
    margin: 2rem 0 !important;
    background-color: #fafafa !important;
    color: #333333 !important;
    display: block !important;
  }
  .secure-container p {
    color: #333333 !important;
  }
  .secure-title {
    margin-bottom: 1rem !important;
    font-weight: bold !important;
    color: #ef4444 !important;
  }
  .secure-field {
    padding: 0.5rem !important;
    border: 1px solid #cccccc !important;
    border-radius: 4px !important;
    margin-right: 0.5rem !important;
    color: #000000 !important;
    background-color: #ffffff !important;
  }
  .secure-btn {
    padding: 0.5rem 1rem !important;
    background-color: #ef4444 !important;
    color: #ffffff !important;
    border: none !important;
    border-radius: 4px !important;
    cursor: pointer !important;
    font-weight: bold !important;
  }
  #secure-error {
    color: #ef4444 !important;
    margin-top: 0.5rem !important;
    font-size: 0.9rem !important;
    display: none !important; /* 💡 初期状態では絶対に非表示 */
  }
  #secure-output {
    margin: 2rem 0 !important;
    display: none !important;
  }
</style>

<div id="secure-box" class="secure-container">
  <p class="secure-title">🔒 セキュリティ保護コンテンツ</p>
  <p style="font-size: 0.9rem; margin-bottom: 1rem;">閲覧するには正しいパスワードを入力してください。</p>
  <input type="password" id="secure-input" class="secure-field" placeholder="パスワードを入力" />
  <button id="secure-button" class="secure-btn">認証</button>
  <div id="secure-error">❌ パスワードが間違っています。</div>
</div>

<div id="secure-output"></div>

<script is:inline>
  (function() {
    const EXPECTED_HASH = "8ba7b85526017a41922bc30fa8e622b7bf742ff849fc35ecdf02660b543ba7c1";
    const playlistId = "PLJ_bBHlRkQq4iUw1MOEeNnETifYjox-yF";

    const btn = document.getElementById("secure-button");
    const input = document.getElementById("secure-input");
    const error = document.getElementById("secure-error");
    const box = document.getElementById("secure-box");
    const output = document.getElementById("secure-output");

    if (!btn || !input) return;

    async function sha256(text) {
      const msgBuffer = new TextEncoder().encode(text);
      const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }

    btn.addEventListener("click", async function() {
      const password = input.value.trim();
      if (error) error.style.setProperty("display", "none", "important");

      const inputHash = await sha256(password);

      if (inputHash === EXPECTED_HASH) {
        if (box) box.style.setProperty("display", "none", "important");
        if (output) {
          output.style.setProperty("display", "block", "important");
          
          const iframe = document.createElement("iframe");
          iframe.src = "https://www.youtube.com/embed/videoseries?list=" + playlistId;
          iframe.title = "YouTube";
          iframe.frameBorder = "0";
          iframe.allowFullscreen = true;
          iframe.style.width = "100%";
          iframe.style.height = "500px";
          iframe.style.aspectRatio = "16/9";
          
          output.innerHTML = "";
          output.appendChild(iframe);
        }
      } else {
        if (error) error.style.setProperty("display", "block", "important");
      }
    });
  })();
</script>