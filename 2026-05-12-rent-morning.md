<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{% if page.title %}{{ page.title }} | {% endif %}{{ site.title }}</title>
<meta name="description" content="{{ page.description | default: site.description }}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Klee+One:wght@400;600&family=Zen+Kaku+Gothic+New:wght@400;500;700&family=Zen+Old+Mincho:wght@400;600;700;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/css/style.css">
</head>
<body>
<div class="paper-noise" aria-hidden="true"></div>

<header class="site-header">
  <p class="issue-line"><span class="fr-it">Vol. 1</span><span class="sep">／</span>第一巻・横浜にて<span class="sep">／</span><span class="fr-it">{{ site.time | date: "%B %Y" }}</span></p>
  <div class="masthead">
    <a class="site-name" href="/">
      <span class="name-ja">あらい りょうた</span>
      <span class="name-en fr-it">RYOTA ARAI</span>
    </a>
  </div>
  <nav class="site-nav">
    <a href="/log/">記録</a>
    <a href="/#themes">テーマ</a>
    <a href="/#about">この場所について</a>
  </nav>
</header>

<main>
{{ content }}
</main>

<footer class="site-footer">
  <p class="footer-name"><span class="name-ja">あらい りょうた</span><span class="name-en fr-it">RYOTA ARAI</span></p>
  <p class="footer-philosophy">人生の後半を、機嫌よく、丁寧に。<br>好きな人と、好きな場所で。</p>
  <ul class="footer-sns">
    <li><a href="{{ site.sns.x }}" target="_blank" rel="noopener">X</a></li>
    <li><a href="{{ site.sns.instagram }}" target="_blank" rel="noopener">Instagram</a></li>
    <li><a href="{{ site.sns.note }}" target="_blank" rel="noopener">note</a></li>
    <li><a href="{{ site.sns.youtube }}" target="_blank" rel="noopener">YouTube</a></li>
  </ul>
  <p class="footer-copy fr-it">&copy; {{ site.time | date: "%Y" }} RYOTA ARAI</p>
</footer>

<script src="/assets/js/main.js"></script>
</body>
</html>
