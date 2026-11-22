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

export const SCENES: Record<string, { svg: string; alt: string }> = {
  ocean: { svg: OCEAN, alt: 'Des vagues qui glissent lentement sous un ciel clair' },
  couchant: { svg: COUCHANT, alt: 'Un soleil couchant et des nuages qui dérivent' },
  foret: { svg: FORET, alt: 'Des collines et des sapins, avec des lucioles qui flottent' },
  neon: { svg: NEON, alt: 'Une grille néon qui avance vers un soleil rose à l’horizon' },
}
