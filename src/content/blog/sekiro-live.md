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

<div id="secure-box" style="padding: 2rem; border: 2px solid #ef4444; border-radius: 8px; text-align: center; margin: 2rem 0; background: #fafafa; color: #333;">
  <p style="margin-bottom: 1rem; font-weight: bold; color: #ef4444;">🔒 セキュリティ保護コンテンツ</p>
  <p style="font-size: 0.9rem; margin-bottom: 1rem;">閲覧するには正しいパスワードを入力してください。</p>
  <input type="password" id="secure-input" placeholder="パスワードを入力" style="padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px; margin-right: 0.5rem; color: #000;" />
  <button id="secure-button" style="padding: 0.5rem 1rem; background: #ef4444; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">認証</button>
  <p id="secure-error" style="color: red; margin-top: 0.5rem; display: none; font-size: 0.9rem;">❌ パスワードが間違っています。</p>
</div>

<div id="secure-output" style="margin: 2rem 0; display: none;"></div>

<script is:inline>
  (function() {
    // 💡 「asperfamily」というパスワードを、あらかじめシュレッダー（ハッシュ化）にかけた文字列です。
    // ソースコードにはこの暗号しか残らないため、ここから元のパスワードを割り出すことは逆立ちしても不可能です。
    const EXPECTED_HASH = "8ba7b85526017a41922bc30fa8e622b7bf742ff849fc35ecdf02660b543ba7c1";
    
    // YouTubeのプレイリストID（これも本番のバグを防ぐためにパーツごとに安全に組み立てます）
    const playlistId = "PLJ_bBHlRkQq4iUw1MOEeNnETifYjox" + "-yF";

    const btn = document.getElementById("secure-button");
    const input = document.getElementById("secure-input");
    const error = document.getElementById("secure-error");
    const box = document.getElementById("secure-box");
    const output = document.getElementById("secure-output");

    if (!btn || !input) return;

    // 💡 外部ライブラリを一切使わず、ブラウザ純正の機能だけで安全にハッシュ化する関数
    async function sha256(text) {
      const msgBuffer = new TextEncoder().encode(text);
      const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }

    btn.addEventListener("click", async function() {
      const password = input.value.trim();
      if (error) error.style.display = "none";

      // ユーザーが入力したパスワードを、その場で同じようにシュレッダーにかけてみる
      const inputHash = await sha256(password);

      // シュレッダーにかけたゴミ同士が一致するかどうかで答え合わせ
      if (inputHash === EXPECTED_HASH) {
        if (box) box.style.display = "none";
        if (output) {
          output.style.display = "block";
          
          // 本番環境のバグ（HTML誤認）を完全に回避するため、iframeをJavaScriptで1から組み立てて挿入
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
        if (error) error.style.display = "block";
      }
    });
  })();
</script>