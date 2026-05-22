# PORTO // BRAND GUIDE

**v3 · 2026-05-21 · status: ATIVO**
**Direção:** ElevenLabs editorial (warm cream + serif light + atmospheric gradient orbs)

---

## 1. Posicionamento visual

Editorial premium estilo ElevenLabs — surface cream `#f5f5f5`, ink warm `#292524`, sem accent saturado, sem CTAs coloridos. A "voltagem" da brand vem de **gradient orbs atmosféricos** (mint + peach + lavender + sky + rose blendando organicamente). Display em **serif light weight 300** com tracking aggressive negative. Pills discretos pretos.

**Adjetivos-âncora:** editorial · calmo · warm · sofisticado · atmosférico · premium · sem floreio

---

## 2. Paleta

### Surface (warm cream — não branco puro)
| Token | Hex | Uso |
|---|---|---|
| `--canvas` | `#f5f5f5` | Background base — body inteiro |
| `--canvas-soft` | `#fafafa` | Variação sutil pra cards inset |
| `--canvas-deep` | `#0c0a09` | Dark sections raras (CTA closing) |
| `--surface-card` | `#ffffff` | Cards de produto (branco puro pra contraste) |

### Ink (warm near-black — nunca preto puro)
| Token | Hex | Uso |
|---|---|---|
| `--primary` | `#292524` | Pills primary + texto display |
| `--ink` | `#0c0a09` | Texto principal (raro) |
| `--body` | `#4e4e4e` | Body cinza médio |
| `--muted` | `#777169` | Captions, meta |
| `--hairline` | `#e7e5e4` | Bordas sutis |

### Gradient orbs (signature move — única decoração)
| Token | Hex | Uso |
|---|---|---|
| `--mint` | `#a7e5d3` | Stop em mesh |
| `--peach` | `#f4c5a8` | Stop em mesh |
| `--lavender` | `#c8b8e0` | Stop em mesh |
| `--sky` | `#a8c8e8` | Stop em mesh |
| `--rose` | `#e8b8c4` | Stop em mesh |

**Regra dos orbs:** mesh gradient combinando 3-5 stops desses tokens, blur generoso. Aparece em:
- Background atmosférico do hero
- Full-bleed em product cards
- Background em news/insight cards (texto branco sobre)

**NÃO USAR:** azul saturado, verde fluorescente, magenta puro. Nada de acento single-color forte.

---

## 3. Tipografia

### Pilha
```
--serif: 'Newsreader', 'Source Serif 4', 'Tiempos Headline', 
         'Times New Roman', serif
--sans:  'Inter', system-ui, sans-serif
--mono:  'JetBrains Mono', ui-monospace, monospace
```

**Waldenburg** (font proprietária ElevenLabs) é substituída por **Newsreader weight 300** — humanist serif moderno com feel similar.

### Escala
| Token | Size | Weight | Family | Tracking | Uso |
|---|---|---|---|---|---|
| `display-mega` | 64-88px | **300** | Newsreader | `-1.92px` | Hero |
| `display-xl` | 48-64px | 300 | Newsreader | `-0.96px` | Section heroes |
| `display-lg` | 36-48px | 300 | Newsreader | `-0.36px` | Card titles featured |
| `display-md` | 28-32px | 300 | Newsreader | `-0.32px` | Card titles regular |
| `title-md` | 20px | 500 | Inter | 0 | Subtítulos em cards |
| `body-md` | 16-17px | 400 | Inter | `+0.16px` | Body padrão |
| `body-sm` | 15px | 400 | Inter | `+0.15px` | Captions |
| `caption-up` | 12px | 600 | Inter | `+0.96px` | Eyebrows UPPERCASE |
| `button` | 15px | 500 | Inter | 0 | Pills |

### Princípios
- **Display SEMPRE serif weight 300.** Nunca bold, nunca italic em headline.
- **Inter pra todo o resto.** Body, captions, buttons, labels.
- **Em palavras-acento:** opção é cor sutil ou peso 500 (não italic, não cor saturada).
- **Tracking negativo agressivo em display** — é a assinatura ElevenLabs.

---

## 4. Logo

### Wordmark "LUIZ FELIPE PORTO"
Quadrado pequeno com 3 linhas empilhadas verticalmente, **alinhadas à esquerda**, **sem hairlines internas** — só border externo do quadrado.

```
┌────────┐
│ LUIZ   │
│ FELIPE │
│ PORTO  │
└────────┘
```

Specs:
- Border externo: 1px solid `--primary`
- **Sem divisórias internas**
- Texto: Inter weight 600, 9-10px, tracking `0.18em`, UPPERCASE, color `--primary`
- Text-align: left
- Padding interno: ~10px vertical, ~10px horizontal esquerdo
- Tamanhos: 56×56px (header) / 72×72px (footer) / 96×96px (loading)
- Line-height: 1.4 (palavras coladinhas verticalmente)

Pode aparecer com "Builder · 2026" em Inter 12px ao lado direito do quadrado, opcional.

---

## 5. Layout

### Hero split 2-col (signature ElevenLabs)
- **Esquerda 60%**: title serif display-mega 300 com `-1.92px` tracking
- **Direita 40%**: lede Inter 16px body
- Abaixo: row de 2 CTAs pill + tabs row `● Total Assistente · ● AIOS · ● Avelum Labs`
- Atrás do hero: orb gradient atmosférico (mint+peach+lavender blendando, opacity ~0.4, blur 80px)

### Product cards 2-col
- Card branco rounded 20px, padding generoso (40-48px)
- Texto à esquerda (title serif + lede + pill outline "Learn more")
- Visual à direita (orb gradient ou mockup UI)
- Alterna lado em cards seguintes

### News/insight cards
- 3 cards lado a lado em grid
- **Cada um com mesh gradient full-bleed diferente** (peach+lavender / peach+yellow / mint+sky)
- Tag pequena no canto superior
- Title serif light branco centralizado

### Section bands
- Maioria das seções: `--canvas` warm
- Cards: `--surface-card` branco puro (contraste sutil)
- 1 dark section opcional ao final: `--canvas-deep`

---

## 6. Componentes

### Pills
| Tipo | Background | Text | Border | Padding | Uso |
|---|---|---|---|---|---|
| `btn--primary` | `--primary` | `#fff` | none | `10px 20px` | CTA principal |
| `btn--outline` | transparent | `--primary` | `1px --primary` | `9px 19px` | CTA secundário |
| `btn--text` | transparent | `--primary` | none | 0 | Link inline |

Radius: **pill 9999px** sempre. Height 40px. Font Inter 15px weight 500.

### Tabs row
Linha horizontal de 3 tabs com bullet colorido:
```
● Total Assistente   ● AIOS   ● Avelum Labs
```
Bullets pegam cor do gradient orb associado ao produto.

### Orb gradient (component)
SVG ou `radial-gradient` CSS com mesh 3-5 stops dos tokens pastéis. Sempre com blur 60-100px e opacity 0.35-0.6.

---

## 7. Voz

Frases curtas, declarativas, ger­undio elegante.

**Frases-âncora:**
- "Construindo coisas que aguentam produção."
- "Software, marca e copy no mesmo commit."
- "Quatro produtos sob a Avelum."
- "Sou Luiz Felipe Porto."

**Vetos:**
- Italic em palavras (vetado)
- Caps lock em headlines (vetado)
- Coach-speak
- Buzzwords IA

---

## 8. Do / Don't

### Do
- Serif Newsreader 300 com tracking `-1.92px` em display
- Hero split 2-col (title esquerda / lede direita)
- Gradient orbs como única decoração (mint+peach+lavender+sky+rose)
- Pills pretos discretos
- Surface cream warm `#f5f5f5`
- Cards rounded 20px brancos
- Inter 16-17px body com `+0.16px` letter-spacing

### Don't
- Accent saturado (azul, verde fluor, magenta) — vetado
- Display bold/italic — vetado
- Caps em headlines (caps só em eyebrows mono pequenas)
- Branco puro como surface base (use `#f5f5f5`)
- Preto puro `#000` — use `#292524`
- Mais de 1 dark section por página

---

*Site: `index.html` + `style.css` neste diretório.*
