# luizporto-ai.github.io

Repositório pessoal de Luiz Felipe Porto — site estático servido em
[luizporto-ai.github.io](https://luizporto-ai.github.io/).

## Estrutura

- `index.html` — landing principal (hero, flagship, outras frentes, blog, stack, trajetória, contato)
- `style.css` — todos os estilos
- `script.js` — interações mínimas (sliding nav, reveal on scroll, clock)
- `links/` — page de links (`/links/`)
- `ia-descomplicada/` — landing do blog (`/ia-descomplicada/`)
- `img/` — assets

## Deploy

Push em `main` → GitHub Actions builda e publica via `.github/workflows/deploy.yml`.

## Local

```bash
python3 -m http.server 8081
```

Abre em `http://localhost:8081`.
