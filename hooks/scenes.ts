// Les fonds animés, un par ambiance. Du vectoriel pur, animé lentement en CSS.
// Chaque élément a une position de repos dans le balisage, pour le mouvement réduit.

const HEAD =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">'

// Océan : ciel en dégradé et trois rangs de vagues qui glissent lentement.
const OCEAN = `${HEAD}
<style>
.a{stop-color:#e6f4f6}.b{stop-color:#b9dfe6}.c{stop-color:#8cc7d3}
.w1{fill:#7fbccb;opacity:.55}.w2{fill:#5aa6ba;opacity:.5}.w3{fill:#3f8ea6;opacity:.45}
.f{fill:#ffffff;opacity:.5}
@media (prefers-color-scheme: dark){
.a{stop-color:#04101d}.b{stop-color:#072238}.c{stop-color:#0b3350}
.w1{fill:#0f4566;opacity:.6}.w2{fill:#13587a;opacity:.5}.w3{fill:#1a6c8c;opacity:.45}
.f{fill:#9fe3ef;opacity:.35}
}
.w1{animation:d1 46s ease-in-out infinite alternate}
.w2{animation:d2 38s ease-in-out infinite alternate}
.w3{animation:d1 30s ease-in-out infinite alternate-reverse}
.f{animation:fl 9s ease-in-out infinite alternate}
.f2{animation-delay:-4s}.f3{animation-delay:-7s}
@keyframes d1{from{transform:translateX(0)}to{transform:translateX(-320px)}}
@keyframes d2{from{transform:translateX(-260px)}to{transform:translateX(0)}}
@keyframes fl{from{transform:translateY(0);opacity:.15}to{transform:translateY(-40px);opacity:.5}}
</style>
<defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" class="a"/><stop offset=".55" class="b"/><stop offset="1" class="c"/>
</linearGradient></defs>
<rect width="1600" height="1000" fill="url(#sky)"/>
<circle class="f" cx="260" cy="300" r="3"/>
<circle class="f f2" cx="1320" cy="220" r="2.5"/>
<circle class="f f3" cx="980" cy="380" r="2"/>
<circle class="f f2" cx="560" cy="180" r="2"/>
<path class="w1" d="M-400 700 C-200 650 0 750 200 700 S600 650 800 700 S1200 750 1400 700 S1800 650 2000 700 L2000 1000 L-400 1000 Z"/>
<path class="w2" d="M-400 780 C-250 740 -50 820 150 780 S550 740 750 780 S1150 820 1350 780 S1750 740 2000 780 L2000 1000 L-400 1000 Z"/>
<path class="w3" d="M-400 860 C-200 830 0 890 200 860 S600 830 800 860 S1200 890 1400 860 S1800 830 2000 860 L2000 1000 L-400 1000 Z"/>
</svg>`

// Couchant : ciel chaud, soleil épinglé en haut à droite, nuages qui dérivent.
const COUCHANT = `${HEAD}
<style>
.a{stop-color:#fde4c8}.b{stop-color:#f9b98f}.c{stop-color:#e98a7a}
.sun{fill:#ffd27a}.halo{fill:#ffe2a8;opacity:.45}.cl{fill:#fff3e6;opacity:.55}
@media (prefers-color-scheme: dark){
.a{stop-color:#1b0f24}.b{stop-color:#3b1736}.c{stop-color:#6b2a3c}
.sun{fill:#f38b5a}.halo{fill:#f06a52;opacity:.25}.cl{fill:#8a3c55;opacity:.45}
}
.halo{animation:glow 12s ease-in-out infinite alternate}
.c1{animation:drift 80s linear infinite alternate}
.c2{animation:drift 64s linear infinite alternate-reverse}
.c3{animation:drift 96s linear infinite alternate}
@keyframes glow{from{transform:scale(1)}to{transform:scale(1.08)}}
@keyframes drift{from{transform:translateX(0)}to{transform:translateX(220px)}}
.halo{transform-origin:200px 200px;transform-box:view-box}
</style>
<defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" class="a"/><stop offset=".6" class="b"/><stop offset="1" class="c"/>
</linearGradient></defs>
<rect width="1600" height="1000" fill="url(#sky)"/>
<svg x="0" y="0" width="1600" height="1000" viewBox="0 0 400 400" preserveAspectRatio="xMaxYMin meet">
<circle class="halo" cx="300" cy="90" r="70"/>
<circle class="sun" cx="300" cy="90" r="38"/>
</svg>
<g class="cl c1"><ellipse cx="220" cy="260" rx="160" ry="22"/><ellipse cx="300" cy="244" rx="90" ry="18"/></g>
<g class="cl c2"><ellipse cx="760" cy="150" rx="130" ry="16"/><ellipse cx="830" cy="138" rx="70" ry="14"/></g>
<g class="cl c3"><ellipse cx="420" cy="820" rx="220" ry="20"/><ellipse cx="1180" cy="760" rx="180" ry="18"/></g>
</svg>`

// Forêt : collines et sapins sur les bords, lucioles (ou pollen le jour) qui flottent.
const FORET = `${HEAD}
<style>
.bg{fill:#eef1e4}.h1{fill:#d5dfc4}.h2{fill:#b9caa3}.t{fill:#8fa77c}.p{fill:#c9a85a;opacity:.5}
@media (prefers-color-scheme: dark){
.bg{fill:#0e1612}.h1{fill:#15221b}.h2{fill:#1b2c22}.t{fill:#223829}.p{fill:#e8d77a;opacity:.6}
}
.p{animation:float 14s ease-in-out infinite alternate}
.p2{animation-duration:18s;animation-delay:-6s}
.p3{animation-duration:11s;animation-delay:-3s}
.p4{animation-duration:16s;animation-delay:-9s}
@keyframes float{
0%{transform:translate(0,0);opacity:.15}
50%{transform:translate(18px,-30px);opacity:.6}
100%{transform:translate(-12px,-60px);opacity:.25}}
</style>
<rect class="bg" width="1600" height="1000"/>
<path class="h1" d="M0 760 C300 690 520 720 800 700 S1300 660 1600 720 L1600 1000 L0 1000 Z"/>
<path class="h2" d="M0 850 C260 800 560 830 820 810 S1350 790 1600 830 L1600 1000 L0 1000 Z"/>
<g class="t">
<path d="M70 860 L120 700 L170 860 Z"/><path d="M150 870 L210 650 L270 870 Z"/>
<path d="M30 900 L80 760 L130 900 Z"/>
<path d="M1400 860 L1460 660 L1520 860 Z"/><path d="M1490 880 L1540 720 L1590 880 Z"/>
<path d="M1330 900 L1380 770 L1430 900 Z"/>
</g>
<circle class="p" cx="320" cy="520" r="4"/>
<circle class="p p2" cx="1240" cy="460" r="3.5"/>
<circle class="p p3" cx="460" cy="300" r="3"/>
<circle class="p p4" cx="1120" cy="250" r="3"/>
<circle class="p p2" cx="200" cy="180" r="2.5"/>
<circle class="p p3" cx="1420" cy="560" r="3"/>
</svg>`

// Néon : nuit violette, soleil rayé à l'horizon, grille en perspective qui avance doucement.
const NEON = `${HEAD}
<style>
.a{stop-color:#0b0614}.b{stop-color:#1a0b2e}.c{stop-color:#2b0f3f}
.sun{fill:#ff3d9a;opacity:.55}.g{stroke:#00e5ff;stroke-width:1.5;opacity:.35;fill:none}
.hz{stroke:#ff3d9a;stroke-width:2;opacity:.6}
.mv{animation:run 8s linear infinite}
.sun{animation:pulse 10s ease-in-out infinite alternate}
@keyframes run{from{transform:translateY(0)}to{transform:translateY(60px)}}
@keyframes pulse{from{opacity:.4}to{opacity:.6}}
.st{fill:#ffffff;opacity:.5}
</style>
<defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" class="a"/><stop offset=".6" class="b"/><stop offset="1" class="c"/>
</linearGradient>
<clipPath id="floor"><rect x="0" y="640" width="1600" height="360"/></clipPath></defs>
<rect width="1600" height="1000" fill="url(#sky)"/>
<circle class="st" cx="180" cy="120" r="1.5"/><circle class="st" cx="420" cy="260" r="1"/>
<circle class="st" cx="1280" cy="140" r="1.5"/><circle class="st" cx="1460" cy="320" r="1"/>
<circle class="st" cx="900" cy="90" r="1"/><circle class="st" cx="640" cy="180" r="1.2"/>
<circle class="sun" cx="800" cy="640" r="180"/>
<line class="hz" x1="0" y1="640" x2="1600" y2="640"/>
<g clip-path="url(#floor)">
<g class="g">
<path d="M800 640 L-800 1000 M800 640 L-300 1000 M800 640 L200 1000 M800 640 L600 1000 M800 640 L1000 1000 M800 640 L1400 1000 M800 640 L1900 1000 M800 640 L2400 1000"/>
</g>
<g class="g mv">
<path d="M0 580 H1600 M0 640 H1600 M0 700 H1600 M0 760 H1600 M0 820 H1600 M0 880 H1600 M0 940 H1600 M0 1000 H1600"/>
</g>
</g>
</svg>`

// Hologramme : globe en fil de fer qui tourne sur lui-même (méridiens qui pivotent),
// un satellite sur une orbite inclinée, une ligne de scan, et un socle qui pulse.
const HOLOGRAMME = `${HEAD}
<style>
.bg{fill:#040a12}
.fl{stroke:#1de9ff;stroke-width:1;opacity:.1;fill:none}
.gl{fill:none;stroke:#3ff0ff;stroke-width:1.1;opacity:.55}
.rim{fill:#0a2a3a;fill-opacity:.35;stroke:#5ff6ff;stroke-width:1.6;opacity:.8}
.m{transform-box:fill-box;transform-origin:center;animation:mer 24s infinite}
.m2{animation-delay:-4s}.m3{animation-delay:-8s}.m4{animation-delay:-12s}.m5{animation-delay:-16s}.m6{animation-delay:-20s}
@keyframes mer{
0%{transform:scaleX(1);animation-timing-function:ease-in}
25%{transform:scaleX(0);animation-timing-function:ease-out}
50%{transform:scaleX(-1);animation-timing-function:ease-in}
75%{transform:scaleX(0);animation-timing-function:ease-out}
100%{transform:scaleX(1)}}
.orb{fill:none;stroke:#ff4fd8;stroke-width:1;opacity:.5}
.spin{animation:spin 14s linear infinite}
.sat{animation:sat 14s linear infinite}
@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@keyframes sat{
0%{transform:rotate(0deg) scale(1);opacity:.9}
25%{transform:rotate(-90deg) scale(1.4);opacity:1}
50%{transform:rotate(-180deg) scale(1);opacity:.9}
75%{transform:rotate(-270deg) scale(.6);opacity:.4}
100%{transform:rotate(-360deg) scale(1);opacity:.9}}
.satc{fill:#ff8be6}
.scan{fill:#7ff9ff;opacity:.35;animation:scan 7s ease-in-out infinite alternate}
@keyframes scan{from{transform:translateY(0)}to{transform:translateY(176px)}}
.base{fill:none;stroke:#3ff0ff;stroke-width:1.2;transform-box:fill-box;transform-origin:center;animation:base 6s ease-out infinite}
.b2{animation-delay:-2s}.b3{animation-delay:-4s}
@keyframes base{from{transform:scale(.4);opacity:.7}to{transform:scale(1.3);opacity:0}}
.beam{fill:#3ff0ff;opacity:.07}
.pt{fill:#7ff9ff;opacity:.4;animation:rise 16s linear infinite}
.p2{animation-delay:-5s}.p3{animation-delay:-10s}.p4{animation-delay:-13s}
@keyframes rise{from{transform:translateY(0);opacity:0}20%{opacity:.5}to{transform:translateY(-420px);opacity:0}}
</style>
<defs><clipPath id="globe"><circle cx="250" cy="150" r="90"/></clipPath></defs>
<rect class="bg" width="1600" height="1000"/>
<g class="fl">
<path d="M800 600 L-600 1000 M800 600 L-100 1000 M800 600 L350 1000 M800 600 L650 1000 M800 600 L950 1000 M800 600 L1250 1000 M800 600 L1700 1000 M800 600 L2200 1000"/>
<path d="M0 640 H1600 M0 690 H1600 M0 750 H1600 M0 820 H1600 M0 900 H1600 M0 990 H1600"/>
</g>
<circle class="pt" cx="180" cy="900" r="2"/><circle class="pt p2" cx="520" cy="960" r="1.5"/>
<circle class="pt p3" cx="1100" cy="920" r="2"/><circle class="pt p4" cx="1420" cy="980" r="1.5"/>
<svg x="0" y="0" width="1600" height="1000" viewBox="0 0 420 420" preserveAspectRatio="xMaxYMin meet">
<path class="beam" d="M200 268 L300 268 L290 150 L210 150 Z"/>
<ellipse class="base" cx="250" cy="268" rx="70" ry="12"/>
<ellipse class="base b2" cx="250" cy="268" rx="70" ry="12"/>
<ellipse class="base b3" cx="250" cy="268" rx="70" ry="12"/>
<circle class="rim" cx="250" cy="150" r="90"/>
<ellipse class="gl" cx="250" cy="150" rx="90" ry="14"/>
<ellipse class="gl" cx="250" cy="105" rx="78" ry="12"/>
<ellipse class="gl" cx="250" cy="195" rx="78" ry="12"/>
<ellipse class="gl" cx="250" cy="72" rx="45" ry="7"/>
<ellipse class="gl" cx="250" cy="228" rx="45" ry="7"/>
<ellipse class="gl m" cx="250" cy="150" rx="90" ry="90"/>
<ellipse class="gl m m2" cx="250" cy="150" rx="90" ry="90"/>
<ellipse class="gl m m3" cx="250" cy="150" rx="90" ry="90"/>
<ellipse class="gl m m4" cx="250" cy="150" rx="90" ry="90"/>
<ellipse class="gl m m5" cx="250" cy="150" rx="90" ry="90"/>
<ellipse class="gl m m6" cx="250" cy="150" rx="90" ry="90"/>
<g clip-path="url(#globe)"><rect class="scan" x="150" y="62" width="200" height="2"/></g>
<g transform="translate(250 150) rotate(-18) scale(1 .3)">
<circle class="orb" cx="0" cy="0" r="135"/>
<g class="spin"><g transform="translate(135 0)"><g class="sat"><g transform="scale(1 3.33)"><circle class="satc" r="4"/></g></g></g></g>
</g>
</svg>
</svg>`

// Hyperespace : un tunnel d'anneaux qui fonce vers toi et des traînées d'étoiles.
const HYPERESPACE = `${HEAD}
<style>
.bg{fill:#03030b}
.core{fill:#6a5cff;opacity:.35}
.ring{fill:none;stroke:#7d8bff;stroke-width:2;transform-box:view-box;transform-origin:800px 500px;animation:warp 12s cubic-bezier(.55,0,1,.45) infinite;opacity:0}
.r2{animation-delay:-2s}.r3{animation-delay:-4s}.r4{animation-delay:-6s}.r5{animation-delay:-8s}.r6{animation-delay:-10s}
@keyframes warp{
0%{transform:scale(.05);opacity:0}
30%{opacity:.5}
85%{opacity:.25}
100%{transform:scale(7);opacity:0}}
.st{fill:none;stroke:#cfd6ff;stroke-width:1.4;stroke-linecap:round;stroke-dasharray:2 40 70 600;opacity:.45;animation:streak 9s linear infinite}
.s2{animation-delay:-3s;stroke:#9ef0ff}.s3{animation-delay:-6s;stroke:#ffb3f2}
@keyframes streak{from{stroke-dashoffset:0}to{stroke-dashoffset:-712}}
.glow{animation:glow 8s ease-in-out infinite alternate}
@keyframes glow{from{opacity:.25}to{opacity:.45}}
</style>
<defs><radialGradient id="c"><stop offset="0" stop-color="#b9b3ff"/><stop offset=".35" stop-color="#5b4dff" stop-opacity=".5"/><stop offset="1" stop-color="#03030b" stop-opacity="0"/></radialGradient></defs>
<rect class="bg" width="1600" height="1000"/>
<circle class="glow" cx="800" cy="500" r="260" fill="url(#c)"/>
<g>
<path class="st" d="M800 500 L1600 500"/><path class="st s2" d="M800 500 L1600 180"/><path class="st s3" d="M800 500 L1350 -100"/>
<path class="st" d="M800 500 L920 -100"/><path class="st s2" d="M800 500 L560 -100"/><path class="st s3" d="M800 500 L120 -100"/>
<path class="st" d="M800 500 L0 220"/><path class="st s2" d="M800 500 L0 520"/><path class="st s3" d="M800 500 L0 860"/>
<path class="st" d="M800 500 L300 1100"/><path class="st s2" d="M800 500 L720 1100"/><path class="st s3" d="M800 500 L1100 1100"/>
<path class="st" d="M800 500 L1600 900"/><path class="st s2" d="M800 500 L1600 700"/><path class="st s3" d="M800 500 L1600 330"/>
<path class="st s2" d="M800 500 L1500 1100"/>
</g>
<ellipse class="ring" cx="800" cy="500" rx="160" ry="110"/>
<ellipse class="ring r2" cx="800" cy="500" rx="160" ry="110"/>
<ellipse class="ring r3" cx="800" cy="500" rx="160" ry="110"/>
<ellipse class="ring r4" cx="800" cy="500" rx="160" ry="110"/>
<ellipse class="ring r5" cx="800" cy="500" rx="160" ry="110"/>
<ellipse class="ring r6" cx="800" cy="500" rx="160" ry="110"/>
</svg>`

// Orbite : une étoile ombrée en relief, trois orbites inclinées et des planètes
// qui passent devant (plus grandes) puis derrière (plus petites, plus pâles).
const ORBITE = `${HEAD}
<style>
.bg{fill:#07050f}
.star{fill:#ffffff;opacity:.5}
.tw{animation:tw 7s ease-in-out infinite alternate}
.t2{animation-delay:-3s}.t3{animation-delay:-5s}
@keyframes tw{from{opacity:.15}to{opacity:.6}}
.path{fill:none;stroke-width:1;opacity:.45}
.o1{stroke:#ffb86b}.o2{stroke:#7fd1ff}.o3{stroke:#c59bff}
.spin{animation:spin linear infinite}
.pl{animation:pl linear infinite}
.a{animation-duration:16s}.b{animation-duration:26s}.c{animation-duration:40s}
@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@keyframes pl{
0%{transform:rotate(0deg) scale(1);opacity:.9}
25%{transform:rotate(-90deg) scale(1.45);opacity:1}
50%{transform:rotate(-180deg) scale(1);opacity:.9}
75%{transform:rotate(-270deg) scale(.6);opacity:.45}
100%{transform:rotate(-360deg) scale(1);opacity:.9}}
.halo{animation:halo 10s ease-in-out infinite alternate}
@keyframes halo{from{opacity:.35}to{opacity:.6}}
</style>
<defs>
<radialGradient id="sun" cx=".38" cy=".35" r=".7"><stop offset="0" stop-color="#fff4d6"/><stop offset=".45" stop-color="#ffb347"/><stop offset="1" stop-color="#b8431f"/></radialGradient>
<radialGradient id="hal"><stop offset="0" stop-color="#ff9a3c" stop-opacity=".6"/><stop offset="1" stop-color="#ff9a3c" stop-opacity="0"/></radialGradient>
<radialGradient id="p1" cx=".35" cy=".3" r=".75"><stop offset="0" stop-color="#d9f3ff"/><stop offset="1" stop-color="#2a6ea8"/></radialGradient>
<radialGradient id="p2" cx=".35" cy=".3" r=".75"><stop offset="0" stop-color="#ffe0c2"/><stop offset="1" stop-color="#a1452a"/></radialGradient>
<radialGradient id="p3" cx=".35" cy=".3" r=".75"><stop offset="0" stop-color="#efe0ff"/><stop offset="1" stop-color="#5b3a99"/></radialGradient>
</defs>
<rect class="bg" width="1600" height="1000"/>
<circle class="star tw" cx="900" cy="120" r="1.4"/><circle class="star tw t2" cx="1300" cy="300" r="1.2"/>
<circle class="star tw t3" cx="1500" cy="90" r="1.6"/><circle class="star tw" cx="1100" cy="820" r="1.2"/>
<circle class="star tw t2" cx="700" cy="900" r="1"/><circle class="star tw t3" cx="1450" cy="640" r="1.3"/>
<circle class="star" cx="1000" cy="460" r="1"/><circle class="star" cx="1220" cy="560" r="1"/>
<svg x="0" y="0" width="1600" height="1000" viewBox="0 0 520 520" preserveAspectRatio="xMinYMin meet">
<g transform="translate(190 180)">
<g transform="rotate(-14) scale(1 .3)"><circle class="path o3" r="170"/></g>
<g transform="rotate(10) scale(1 .28)"><circle class="path o2" r="120"/></g>
<g transform="rotate(-24) scale(1 .34)"><circle class="path o1" r="80"/></g>
<circle class="halo" r="95" fill="url(#hal)"/>
<circle r="42" fill="url(#sun)"/>
<g transform="rotate(-24) scale(1 .34)"><g class="spin a"><g transform="translate(80 0)"><g class="pl a"><g transform="scale(1 2.94)"><circle r="7" fill="url(#p2)"/></g></g></g></g></g>
<g transform="rotate(10) scale(1 .28)"><g class="spin b"><g transform="translate(120 0)"><g class="pl b"><g transform="scale(1 3.57)"><circle r="10" fill="url(#p1)"/></g></g></g></g></g>
<g transform="rotate(-14) scale(1 .3)"><g class="spin c"><g transform="translate(170 0)"><g class="pl c"><g transform="scale(1 3.33)"><circle r="8" fill="url(#p3)"/></g></g></g></g></g>
</g>
</svg>
</svg>`

// ---------- Scènes générées : géométrie 3D abstraite ----------

const r = (n: number) => Math.round(n * 10) / 10

// Strates : panneaux extrudés superposés, bords néon cyan et magenta, qui flottent
// à trois profondeurs (les plus proches bougent plus : effet de parallaxe).
function strates(): string {
  // [x, y, largeur, hauteur, profondeur 1 à 3]
  const panels: [number, number, number, number, number][] = [
    [60, 40, 420, 300, 1], [1080, 30, 470, 260, 1], [-40, 620, 380, 420, 1], [1220, 640, 420, 380, 1],
    [220, 180, 360, 380, 2], [980, 220, 380, 330, 2], [520, 700, 520, 300, 2], [700, -40, 360, 230, 2],
    [120, 420, 300, 260, 3], [1180, 430, 300, 250, 3], [420, 60, 240, 170, 3], [930, 760, 250, 200, 3],
  ]
  const face = panels
    .map(([x, y, w, h, d]) => {
      const ext = 6 + d * 5
      return `<g class="l${d}">
<rect x="${x + ext + 10}" y="${y + ext + 14}" width="${w}" height="${h}" class="sh"/>
<polygon class="side" points="${x + w},${y} ${x + w + ext},${y + ext} ${x + w + ext},${y + h + ext} ${x + w},${y + h}"/>
<polygon class="bot" points="${x},${y + h} ${x + w},${y + h} ${x + w + ext},${y + h + ext} ${x + ext},${y + h + ext}"/>
<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="url(#f${d})"/>
<rect x="${x}" y="${y}" width="${w}" height="${h}" class="rim"/>
</g>`
    })
    .join('\n')

  return `${HEAD}
<style>
.sh{fill:#02030c;opacity:.45}
.side{fill:#0a1650}.bot{fill:#140a3a}
.rim{fill:none;stroke:url(#edge);stroke-width:2;opacity:.9}
.l1{animation:fa 26s ease-in-out infinite alternate}
.l2{animation:fb 21s ease-in-out infinite alternate}
.l3{animation:fc 17s ease-in-out infinite alternate}
@keyframes fa{from{transform:translate(0,0)}to{transform:translate(6px,-8px)}}
@keyframes fb{from{transform:translate(0,0)}to{transform:translate(-12px,-16px)}}
@keyframes fc{from{transform:translate(0,0)}to{transform:translate(18px,-26px)}}
.gm{animation:gm 14s ease-in-out infinite alternate}
.gc{animation:gc 18s ease-in-out infinite alternate}
@keyframes gm{from{transform:translate(0,0);opacity:.55}to{transform:translate(140px,-60px);opacity:.8}}
@keyframes gc{from{transform:translate(0,0);opacity:.5}to{transform:translate(-160px,80px);opacity:.75}}
</style>
<defs>
<linearGradient id="bg" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#3a0a3f"/><stop offset=".5" stop-color="#0e1240"/><stop offset="1" stop-color="#0b3a6e"/></linearGradient>
<radialGradient id="mg"><stop offset="0" stop-color="#ff2fb3" stop-opacity=".7"/><stop offset="1" stop-color="#ff2fb3" stop-opacity="0"/></radialGradient>
<radialGradient id="cy"><stop offset="0" stop-color="#22d3ff" stop-opacity=".6"/><stop offset="1" stop-color="#22d3ff" stop-opacity="0"/></radialGradient>
<linearGradient id="edge" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#ff2fb3"/><stop offset=".5" stop-color="#6a5cff"/><stop offset="1" stop-color="#2ee8ff"/></linearGradient>
<linearGradient id="f1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1b3c9e"/><stop offset="1" stop-color="#0c1a5c"/></linearGradient>
<linearGradient id="f2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2248b8"/><stop offset="1" stop-color="#10216e"/></linearGradient>
<linearGradient id="f3" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2a56cc"/><stop offset="1" stop-color="#132a82"/></linearGradient>
</defs>
<rect width="1600" height="1000" fill="url(#bg)"/>
<circle class="gm" cx="250" cy="850" r="480" fill="url(#mg)"/>
<circle class="gc" cx="1380" cy="160" r="460" fill="url(#cy)"/>
${face}
</svg>`
}

// Soie : rubans violets et magenta qui ondulent lentement, comme un tissu au vent.
function soie(): string {
  const ribbon = (dy: number, grad: string, cls: string) =>
    `<path class="${cls}" fill="url(#${grad})" d="M-300 ${500 + dy} C100 ${280 + dy} 500 ${720 + dy} 900 ${470 + dy} C1300 ${220 + dy} 1600 ${360 + dy} 1900 ${300 + dy} L1900 ${420 + dy} C1600 ${500 + dy} 1300 ${380 + dy} 900 ${610 + dy} C500 ${840 + dy} 100 ${420 + dy} -300 ${650 + dy} Z"/>`
  const shine = (dy: number, cls: string) =>
    `<path class="hl ${cls}" d="M-300 ${560 + dy} C100 ${350 + dy} 500 ${780 + dy} 900 ${535 + dy} C1300 ${290 + dy} 1600 ${420 + dy} 1900 ${360 + dy}"/>`

  return `${HEAD}
<style>
.r1{animation:w1 22s ease-in-out infinite alternate;opacity:.85}
.r2{animation:w2 28s ease-in-out infinite alternate;opacity:.75}
.r3{animation:w3 34s ease-in-out infinite alternate;opacity:.65}
.r4{animation:w1 30s ease-in-out infinite alternate-reverse;opacity:.5}
@keyframes w1{from{transform:translate(0,0) rotate(0deg)}to{transform:translate(-180px,30px) rotate(3deg)}}
@keyframes w2{from{transform:translate(0,0) rotate(0deg)}to{transform:translate(160px,-40px) rotate(-4deg)}}
@keyframes w3{from{transform:translate(-60px,20px) rotate(2deg)}to{transform:translate(120px,-30px) rotate(-2deg)}}
.r1,.r2,.r3,.r4{transform-box:view-box;transform-origin:800px 500px}
.hl{fill:none;stroke:#f4d9ff;stroke-width:3;opacity:.35;stroke-linecap:round}
</style>
<defs>
<linearGradient id="bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0c0420"/><stop offset="1" stop-color="#1d0838"/></linearGradient>
<linearGradient id="g1" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#3b0f7a"/><stop offset=".45" stop-color="#9b3dff"/><stop offset=".7" stop-color="#e06bff"/><stop offset="1" stop-color="#4b1499"/></linearGradient>
<linearGradient id="g2" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ff4fb8"/><stop offset=".5" stop-color="#7a2bd9"/><stop offset="1" stop-color="#2a0c5c"/></linearGradient>
<linearGradient id="g3" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#2a1a8f"/><stop offset=".55" stop-color="#5a6bff"/><stop offset="1" stop-color="#b78bff"/></linearGradient>
</defs>
<rect width="1600" height="1000" fill="url(#bg)"/>
<g class="r4">${ribbon(-320, 'g3', '')}</g>
<g class="r3">${ribbon(260, 'g2', '')}</g>
<g class="r2">${ribbon(-120, 'g3', '')}${shine(-120, '')}</g>
<g class="r1">${ribbon(80, 'g1', '')}${shine(80, '')}</g>
</svg>`
}

// Cristal : un sol de facettes pastel et des cubes isométriques qui flottent,
// avec une lumière qui balaie lentement la scène (version claire).
function cristal(): string {
  const cube = (cx: number, cy: number, s: number, cls: string) => {
    const k = 0.866 * s
    return `<g class="cb ${cls}">
<polygon fill="#fbe9f0" points="${r(cx)},${r(cy - s)} ${r(cx + k)},${r(cy - s / 2)} ${r(cx)},${r(cy)} ${r(cx - k)},${r(cy - s / 2)}"/>
<polygon fill="#e7a9c0" points="${r(cx - k)},${r(cy - s / 2)} ${r(cx)},${r(cy)} ${r(cx)},${r(cy + s)} ${r(cx - k)},${r(cy + s / 2)}"/>
<polygon fill="#9db8e6" points="${r(cx)},${r(cy)} ${r(cx + k)},${r(cy - s / 2)} ${r(cx + k)},${r(cy + s / 2)} ${r(cx)},${r(cy + s)}"/>
</g>`
  }
  // Facettes : une grille de triangles avec des teintes rose, mauve et bleu pâle.
  const tones = ['#f3d6e0', '#eccad7', '#e3bfd0', '#dcc6e2', '#d3d7ef', '#e8d0dc', '#f6e2ea', '#d8cbe6']
  const tri: string[] = []
  const cols = 9
  const rows = 6
  const cw = 1600 / cols
  const rh = 1000 / rows
  // Décalage pseudo-aléatoire fixe des sommets, pour un rendu « low poly ».
  const jit = (i: number, j: number): [number, number] => [((i * 37 + j * 91) % 41) - 20, ((i * 53 + j * 29) % 37) - 18]
  const pt = (i: number, j: number) => {
    const [jx, jy] = i === 0 || i === cols || j === 0 || j === rows ? [0, 0] : jit(i, j)
    return `${r(i * cw + jx)},${r(j * rh + jy)}`
  }
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const t1 = tones[(i * 3 + j * 5) % tones.length]
      const t2 = tones[(i * 5 + j * 3 + 2) % tones.length]
      tri.push(`<polygon fill="${t1}" stroke="${t1}" stroke-width="1.5" points="${pt(i, j)} ${pt(i + 1, j)} ${pt(i, j + 1)}"/>`)
      tri.push(`<polygon fill="${t2}" stroke="${t2}" stroke-width="1.5" points="${pt(i + 1, j)} ${pt(i + 1, j + 1)} ${pt(i, j + 1)}"/>`)
    }
  }

  return `${HEAD}
<style>
.cb{animation:bob 16s ease-in-out infinite alternate}
.c2{animation-duration:20s;animation-delay:-6s}.c3{animation-duration:13s;animation-delay:-3s}
.c4{animation-duration:23s;animation-delay:-9s}.c5{animation-duration:18s;animation-delay:-12s}
@keyframes bob{from{transform:translate(0,0)}to{transform:translate(10px,-34px)}}
.lt{animation:sweep 24s ease-in-out infinite alternate}
@keyframes sweep{from{transform:translate(-500px,0)}to{transform:translate(700px,0)}}
.cs{fill:#7a3a5a;opacity:.12}
</style>
<defs><radialGradient id="lt"><stop offset="0" stop-color="#ffffff" stop-opacity=".55"/><stop offset="1" stop-color="#ffffff" stop-opacity="0"/></radialGradient></defs>
${tri.join('\n')}
<ellipse class="lt" cx="500" cy="380" rx="520" ry="420" fill="url(#lt)"/>
<ellipse class="cs" cx="210" cy="930" rx="90" ry="18"/>
<ellipse class="cs" cx="1420" cy="900" rx="110" ry="20"/>
${cube(210, 760, 90, 'c1')}
${cube(1420, 720, 110, 'c2')}
${cube(1300, 170, 60, 'c3')}
${cube(150, 180, 50, 'c4')}
${cube(1500, 420, 40, 'c5')}
</svg>`
}

// Chrome : ondulations métalliques concentriques sur un plan en perspective,
// avec une onde qui part du centre et se propage vers l'extérieur.
function chrome(): string {
  const rings: string[] = []
  const n = 26
  for (let i = 0; i < n; i++) {
    const rx = 40 + i * 46
    const tone = i % 2 === 0 ? 'hi' : 'lo'
    rings.push(
      `<ellipse class="rg ${tone}" style="animation-delay:${r(-12 + i * 0.35)}s" cx="1180" cy="780" rx="${rx}" ry="${r(rx * 0.32)}"/>`,
    )
  }

  return `${HEAD}
<style>
.rg{fill:none;transform-box:view-box;transform-origin:1180px 780px;animation:rip 12s ease-in-out infinite}
.hi{stroke:url(#metal);stroke-width:7}
.lo{stroke:#07080a;stroke-width:9;opacity:.9}
@keyframes rip{0%,100%{transform:scale(1)}50%{transform:scale(1.025)}}
.sh{animation:shine 20s ease-in-out infinite alternate}
@keyframes shine{from{transform:translate(-200px,0);opacity:.25}to{transform:translate(300px,-60px);opacity:.45}}
</style>
<defs>
<linearGradient id="bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#050608"/><stop offset="1" stop-color="#14171c"/></linearGradient>
<linearGradient id="metal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2b2f36"/><stop offset=".35" stop-color="#d9dee6"/><stop offset=".5" stop-color="#7b838f"/><stop offset=".7" stop-color="#f2f5f9"/><stop offset="1" stop-color="#3a3f47"/></linearGradient>
<radialGradient id="sh"><stop offset="0" stop-color="#cfe3ff" stop-opacity=".5"/><stop offset="1" stop-color="#cfe3ff" stop-opacity="0"/></radialGradient>
</defs>
<rect width="1600" height="1000" fill="url(#bg)"/>
${rings.join('\n')}
<ellipse class="sh" cx="1100" cy="520" rx="420" ry="200" fill="url(#sh)"/>
</svg>`
}

export const SCENES: Record<string, { svg: string; alt: string }> = {
  strates: { svg: strates(), alt: 'Des panneaux bleus superposés aux bords néon qui flottent en profondeur' },
  soie: { svg: soie(), alt: 'Des rubans de soie violets et magenta qui ondulent' },
  cristal: { svg: cristal(), alt: 'Des facettes pastel et des cubes en relief qui flottent sous une lumière douce' },
  chrome: { svg: chrome(), alt: 'Des ondulations de métal chromé qui se propagent' },
  hologramme: { svg: HOLOGRAMME, alt: 'Un globe holographique en fil de fer qui tourne au-dessus d’un socle lumineux' },
  hyperespace: { svg: HYPERESPACE, alt: 'Un tunnel d’anneaux lumineux et des traînées d’étoiles qui filent vers l’avant' },
  orbite: { svg: ORBITE, alt: 'Des planètes en relief qui tournent sur des orbites inclinées autour d’une étoile' },
  ocean: { svg: OCEAN, alt: 'Des vagues qui glissent lentement sous un ciel clair' },
  couchant: { svg: COUCHANT, alt: 'Un soleil couchant et des nuages qui dérivent' },
  foret: { svg: FORET, alt: 'Des collines et des sapins, avec des lucioles qui flottent' },
  neon: { svg: NEON, alt: 'Une grille néon qui avance vers un soleil rose à l’horizon' },
}
