css_addition = """

/* ============================================================
   v16 OVERRIDES
   ============================================================ */

/* v16: ORBIT CARDS — transparent glass text-only */
.char-card {
  background: rgba(255,255,255,0.06) !important;
  backdrop-filter: blur(24px) saturate(180%) !important;
  -webkit-backdrop-filter: blur(24px) saturate(180%) !important;
  border: 1px solid rgba(255,255,255,0.18) !important;
  box-shadow: 0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.20), 0 0 0 0 rgba(0,87,255,0) !important;
  width: 110px !important;
  height: 80px !important;
  border-radius: 20px !important;
  justify-content: center !important;
  gap: 0 !important;
}
.char-card:hover {
  background: rgba(255,255,255,0.12) !important;
  border-color: rgba(100,160,255,0.50) !important;
  box-shadow: 0 12px 40px rgba(0,60,200,0.40), 0 0 30px rgba(0,87,255,0.25), inset 0 1px 0 rgba(255,255,255,0.28) !important;
}
.char-card::before {
  background: linear-gradient(180deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0) 100%) !important;
}
.ios-icon { display: none !important; }
.char-lbl {
  font-size: 0.70rem !important;
  font-weight: 700 !important;
  color: rgba(255,255,255,0.92) !important;
  text-align: center !important;
  letter-spacing: 0.02em !important;
  line-height: 1.3 !important;
  max-width: 90px !important;
  text-shadow: 0 1px 8px rgba(0,0,0,0.6) !important;
  padding: 0 6px !important;
}
.char-slot {
  width: 110px !important;
  height: 80px !important;
  margin: -40px -55px !important;
}
@media(max-width:900px){
  .char-slot { width: 90px !important; height: 70px !important; margin: -35px -45px !important; }
  .char-card { width: 90px !important; height: 70px !important; }
}
.hero__visual {
  justify-content: flex-end !important;
  padding-right: 2rem !important;
}
@media(max-width:900px){ .hero__visual { justify-content: center !important; padding-right: 0 !important; } }

/* v16: FLIP CARDS */
.flip-card {
  height: 420px !important;
  perspective: 1200px !important;
}
@media(max-width:560px){ .flip-card { height: 360px !important; } }
.flip-card__inner {
  transition: transform 0.80s cubic-bezier(0.34,1.08,0.64,1) !important;
  will-change: transform !important;
}
.flip-card__front,
.flip-card__back {
  backface-visibility: hidden !important;
  -webkit-backface-visibility: hidden !important;
  transform-style: flat !important;
  -webkit-transform-style: flat !important;
}
.flip-card__back {
  transform: rotateY(180deg) !important;
}
.flip-card.is-flipped .flip-card__inner {
  transform: rotateY(180deg) !important;
}
.flip-card.is-flipped .flip-card__back {
  box-shadow: 0 0 40px rgba(0,87,255,0.20), 0 16px 60px rgba(0,20,100,0.60), inset 0 1px 0 rgba(255,255,255,0.10) !important;
}
.flip-back-title {
  font-size: 1.1rem !important;
  color: rgba(255,255,255,0.95) !important;
  margin-bottom: 0.5rem !important;
}
.flip-col ul li {
  font-size: 0.78rem !important;
  line-height: 1.5 !important;
  color: rgba(220,235,255,0.88) !important;
}
.flip-wa-btn {
  margin-top: auto !important;
  background: linear-gradient(135deg, rgba(22,163,74,0.9), rgba(21,128,61,0.9)) !important;
  backdrop-filter: blur(10px) !important;
  border: 1px solid rgba(74,222,128,0.25) !important;
  font-size: 0.88rem !important;
  padding: 0.8rem 1.25rem !important;
}

/* v16: GUIA ICONS */
.guia__option-icon {
  filter: brightness(1.3) saturate(1.1) !important;
  background: rgba(0,60,200,0.15) !important;
  border-color: rgba(0,87,255,0.30) !important;
  width: 36px !important; height: 36px !important;
  border-radius: 10px !important;
  box-shadow: 0 4px 12px rgba(0,0,0,0.30), 0 1px 0 rgba(255,255,255,0.15) inset, 0 -1px 0 rgba(0,0,0,0.20) inset !important;
  font-size: 1.15rem !important;
  transform: translateZ(0) !important;
}
.guia__option:hover .guia__option-icon,
.guia__option.selected .guia__option-icon {
  filter: brightness(1.5) saturate(1.3) !important;
  background: rgba(0,80,220,0.25) !important;
  box-shadow: 0 6px 18px rgba(0,60,200,0.35), 0 0 20px rgba(0,87,255,0.20), 0 1px 0 rgba(255,255,255,0.20) inset !important;
  transform: translateY(-2px) translateZ(0) scale(1.05) !important;
}

/* TIMELINE (Valores section) */
.ns-timeline {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 0;
  padding: 3rem 0 1rem;
  overflow: visible;
}
.ns-timeline__track {
  position: absolute;
  top: calc(3rem + 28px);
  left: 40px;
  right: 40px;
  height: 2px;
  background: linear-gradient(90deg, rgba(0,87,255,0.12), rgba(0,87,255,0.55) 50%, rgba(0,87,255,0.12));
  border-radius: 2px;
  z-index: 0;
}
.ns-timeline__item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;
  z-index: 1;
}
.ns-timeline__dot {
  width: 56px; height: 56px;
  border-radius: 50%;
  background: rgba(0,10,30,0.80);
  border: 2px solid rgba(0,87,255,0.35);
  display: flex; align-items: center; justify-content: center;
  color: rgba(150,190,255,0.80);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: all 0.35s cubic-bezier(0.34,1.56,0.64,1);
  box-shadow: 0 4px 20px rgba(0,0,0,0.40), inset 0 1px 0 rgba(255,255,255,0.12);
  position: relative;
  z-index: 2;
}
.ns-timeline__item:hover .ns-timeline__dot,
.ns-timeline__item.active .ns-timeline__dot {
  background: rgba(0,60,200,0.35);
  border-color: rgba(0,140,255,0.80);
  color: #fff;
  box-shadow: 0 0 30px rgba(0,87,255,0.50), 0 0 60px rgba(0,87,255,0.20), inset 0 1px 0 rgba(255,255,255,0.25);
  transform: scale(1.15) translateY(-4px);
}
.ns-timeline__label {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(150,180,255,0.65);
  margin-top: 0.75rem;
  text-align: center;
  transition: color 0.25s;
}
.ns-timeline__item:hover .ns-timeline__label,
.ns-timeline__item.active .ns-timeline__label {
  color: rgba(200,225,255,0.95);
}
.ns-timeline__panel {
  position: absolute;
  top: calc(56px + 2.5rem);
  left: 50%;
  transform: translateX(-50%) translateY(-10px);
  width: 320px;
  max-width: 90vw;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.40s ease, transform 0.40s cubic-bezier(0.34,1.08,0.64,1), visibility 0.40s;
  z-index: 10;
}
.ns-timeline__item.active .ns-timeline__panel {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateX(-50%) translateY(0);
}
.ns-timeline__item:first-child .ns-timeline__panel { left: 0; transform: translateX(0) translateY(-10px); }
.ns-timeline__item:first-child.active .ns-timeline__panel { transform: translateX(0) translateY(0); }
.ns-timeline__item:last-child .ns-timeline__panel { left: auto; right: 0; transform: translateX(0) translateY(-10px); }
.ns-timeline__item:last-child.active .ns-timeline__panel { transform: translateX(0) translateY(0); }
.ns-timeline__panel-inner {
  background: rgba(3,8,28,0.92);
  backdrop-filter: blur(40px) saturate(180%);
  -webkit-backdrop-filter: blur(40px) saturate(180%);
  border: 1px solid rgba(0,87,255,0.35);
  border-radius: 20px;
  padding: 1.75rem;
  box-shadow: 0 20px 60px rgba(0,0,0,0.60), 0 0 50px rgba(0,87,255,0.12), inset 0 1px 0 rgba(255,255,255,0.10);
  position: relative;
  overflow: hidden;
}
.ns-timeline__panel-inner::before {
  content: '';
  position: absolute; top:0; left:0; right:0; height:50%;
  background: linear-gradient(180deg, rgba(0,87,255,0.08), transparent);
  border-radius: 20px 20px 0 0;
  pointer-events: none;
}
.ns-timeline__panel-inner::after {
  content: '';
  position: absolute;
  top: -8px;
  left: 50%;
  width: 14px; height: 14px;
  background: rgba(3,8,28,0.95);
  border-left: 1px solid rgba(0,87,255,0.35);
  border-top: 1px solid rgba(0,87,255,0.35);
  transform: translateX(-50%) rotate(45deg);
}
.ns-timeline__item:first-child .ns-timeline__panel-inner::after { left: 28px; }
.ns-timeline__item:last-child .ns-timeline__panel-inner::after { left: auto; right: 28px; }
.ns-tl-icon {
  width: 48px; height: 48px;
  border-radius: 14px;
  background: rgba(0,87,255,0.15);
  border: 1px solid rgba(0,87,255,0.30);
  display: flex; align-items: center; justify-content: center;
  color: rgba(150,200,255,0.90);
  margin-bottom: 1rem;
  box-shadow: 0 4px 16px rgba(0,87,255,0.20);
}
.ns-timeline__panel-inner h3 {
  font-size: 1.05rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 0.6rem;
  letter-spacing: -0.02em;
}
.ns-timeline__panel-inner p {
  font-size: 0.83rem;
  color: rgba(190,215,255,0.80);
  line-height: 1.6;
  margin-bottom: 0.75rem;
}
.ns-tl-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.75rem;
}
.ns-tl-tags span {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 0.25rem 0.7rem;
  border-radius: 99px;
  background: rgba(0,87,255,0.15);
  border: 1px solid rgba(0,87,255,0.30);
  color: rgba(130,190,255,0.90);
}
.ns-tl-values-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin-top: 0.5rem;
}
.ns-tl-values-grid div {
  background: rgba(255,255,255,0.04);
  border-radius: 10px;
  padding: 0.6rem 0.75rem;
  border: 1px solid rgba(255,255,255,0.07);
}
.ns-tl-values-grid strong {
  display: block;
  font-size: 0.72rem;
  font-weight: 700;
  color: rgba(180,210,255,0.90);
  margin-bottom: 0.2rem;
}
.ns-tl-values-grid span {
  font-size: 0.68rem;
  color: rgba(160,185,220,0.72);
  line-height: 1.4;
}
@media(max-width:768px){
  .ns-timeline { flex-direction: column; align-items: flex-start; padding-left: 1.5rem; gap: 1.5rem; }
  .ns-timeline__track { top: 0; bottom: 0; left: 27px; right: auto; width: 2px; height: auto; background: linear-gradient(180deg, rgba(0,87,255,0.12), rgba(0,87,255,0.55) 50%, rgba(0,87,255,0.12)); }
  .ns-timeline__item { flex-direction: row; align-items: flex-start; gap: 1rem; width: 100%; }
  .ns-timeline__dot { flex-shrink: 0; width: 48px; height: 48px; }
  .ns-timeline__label { margin-top: 0.15rem; text-align: left; font-size: 0.82rem; }
  .ns-timeline__panel { position: static; opacity: 1; visibility: visible; pointer-events: auto; transform: none !important; width: 100%; max-width: none; display: none; }
  .ns-timeline__item.active .ns-timeline__panel { display: block; }
  .ns-timeline__panel-inner::after { display: none; }
  .ns-timeline__item { flex-direction: column; padding-left: 4rem; }
  .ns-timeline__dot { position: absolute; left: 0; top: 0; }
}

/* PROCESO ACCORDION */
.proceso__step--accordion {
  cursor: pointer;
  border-radius: 20px;
  border: 1px solid rgba(0,50,200,0.15);
  background: rgba(255,255,255,0.03);
  overflow: hidden;
  transition: border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
  margin: 0;
  padding: 0 !important;
}
.proceso__step--accordion:hover {
  border-color: rgba(0,87,255,0.30);
  background: rgba(0,30,100,0.12);
}
.proceso__step--accordion.open {
  border-color: rgba(0,100,255,0.50);
  background: rgba(0,20,80,0.18);
  box-shadow: 0 0 40px rgba(0,87,255,0.12), 0 8px 40px rgba(0,0,0,0.35);
}
.proceso__step-trigger {
  display: grid;
  grid-template-columns: 70px 1fr 32px;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 1.75rem;
  transition: background 0.2s;
}
.proceso__step-trigger h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 0.15rem; }
.proceso__step-preview { font-size: 0.83rem; color: var(--text-dim); margin: 0; }
.proceso__step-chevron {
  color: rgba(100,160,255,0.70);
  transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), color 0.25s;
  display: flex; align-items: center; justify-content: center;
}
.proceso__step--accordion.open .proceso__step-chevron {
  transform: rotate(180deg);
  color: rgba(100,180,255,0.95);
}
.proceso__step-expand {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.55s cubic-bezier(0.4,0,0.2,1);
}
.proceso__step--accordion.open .proceso__step-expand {
  max-height: 600px;
}
.proceso__step-detail {
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 1.25rem;
  padding: 0 1.75rem 1.75rem;
  align-items: flex-start;
}
@media(max-width:560px){
  .proceso__step-detail { grid-template-columns: 1fr; }
  .proceso__step-trigger { grid-template-columns: 56px 1fr 28px; }
}
.proceso__step-detail-icon {
  width: 56px; height: 56px; border-radius: 16px;
  background: rgba(0,87,255,0.14);
  border: 1px solid rgba(0,87,255,0.28);
  display: flex; align-items: center; justify-content: center;
  color: rgba(120,190,255,0.90);
  flex-shrink: 0;
  box-shadow: 0 4px 16px rgba(0,87,255,0.18);
  transition: box-shadow 0.3s;
}
.proceso__step--accordion.open .proceso__step-detail-icon {
  box-shadow: 0 0 30px rgba(0,87,255,0.35), 0 4px 20px rgba(0,87,255,0.20);
}
.proceso__step-detail-content h4 {
  font-size: 0.95rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 0.6rem;
  letter-spacing: -0.01em;
}
.proceso__step-detail-content p {
  font-size: 0.85rem;
  color: rgba(190,215,255,0.80);
  line-height: 1.65;
  margin-bottom: 0.75rem;
}
.proceso__step-detail-content ul {
  list-style: none;
  padding: 0; margin: 0;
  display: flex; flex-direction: column; gap: 0.4rem;
  margin-bottom: 0.5rem;
}
.proceso__step-detail-content ul li {
  font-size: 0.80rem;
  color: rgba(170,200,255,0.80);
  padding-left: 1.1rem;
  position: relative;
  line-height: 1.5;
}
.proceso__step-detail-content ul li::before {
  content: '\\2192';
  position: absolute; left: 0;
  color: rgba(0,150,255,0.75);
  font-weight: 700;
}
@keyframes stepGlow {
  from { box-shadow: 0 0 0 rgba(0,87,255,0); }
  50%  { box-shadow: 0 0 60px rgba(0,87,255,0.25), inset 0 0 30px rgba(0,87,255,0.05); }
  to   { box-shadow: 0 0 40px rgba(0,87,255,0.12), 0 8px 40px rgba(0,0,0,0.35); }
}
.proceso__step--accordion.open {
  animation: stepGlow 0.6s ease forwards;
}
.proceso__step:not(.proceso__step--accordion) {
  display: grid;
  grid-template-columns: 80px 1fr;
}
.proceso__step--accordion .proceso__step-num {
  font-size: 2.4rem;
  font-weight: 900;
  letter-spacing: -0.04em;
  color: rgba(0,87,255,0.30);
  line-height: 1;
  transition: color 0.3s;
}
.proceso__step--accordion.open .proceso__step-num {
  color: rgba(0,150,255,0.80);
  text-shadow: 0 0 20px rgba(0,100,255,0.40);
}
.proceso__connector {
  display: none;
}
"""

with open('C:/Users/Cliente/Documents/Web/style.css', 'a', encoding='utf-8') as f:
    f.write(css_addition)
print('CSS appended successfully')
