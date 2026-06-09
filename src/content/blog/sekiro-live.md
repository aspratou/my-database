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
  // 💡 トラッキングIDを完全に排除し、純粋なプレイリストID（34文字）だけに整理しました
  const PLAYLIST_ID = "PLJ_bBHlRkQq4iUw1MOEeNnETifYjox-yF";

  const btn = document.getElementById("secure-button");
  const input = document.getElementById("secure-input");
  const error = document.getElementById("secure-error");
  const box = document.getElementById("secure-box");
  const output = document.getElementById("secure-output");

  btn.addEventListener("click", () => {
    const password = input.value.trim();
    error.style.display = "none";

    if (password === "asperfamily") {
      box.style.display = "none";
      output.style.display = "block";
      
      // 🎯 YouTubeが公式に推奨する、一番確実なプレイリスト埋め込みURLの形です
      output.innerHTML = `<iframe src="https://www.youtube.com/embed/videoseries?list=${PLAYLIST_ID}" title="YouTube" frameborder="0" allowfullscreen style="width:100%; height:500px; aspect-ratio: 16/9;"></iframe>`;
    } else {
      error.style.display = "block";
    }
  });
</script>