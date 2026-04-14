export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  author: string;
  publishedAt: string;
  readingTime: number;
  content: string;
}

export const posts: BlogPost[] = [
  {
    slug: "bugs-burger-bug-killers",
    title: "Bugs Burger Bug Killers — O case que mudou como eu penso sobre produto",
    description: "Uma dedetizadora de Miami que cobrava 10x mais que a concorrência, oferecia a garantia mais agressiva da história e dominou o mercado. O que isso ensina pra quem escreve código.",
    category: "Produto",
    tags: ["case study", "produto", "estratégia", "qualidade"],
    author: "Luiz Porto",
    publishedAt: "2026-04-14",
    readingTime: 7,
    content: `## Como conheci esse case

Conheci esse case numa aula magna na **PIB Education** da Praia Brava. O professor apresentou uma dedetizadora de Miami chamada **Bugs Burger Bug Killers** — e eu fiquei obcecado.

Uma dedetizadora. De Miami. Nos anos 60.

Depois da aula, fui me aprofundar. Li o artigo original da Harvard Business Review de 1988 — "The Power of Unconditional Service Guarantees" do Christopher Hart — e tudo que achei sobre o case. Criei uma documentação completa porque achei absurdo que um case tão bom fosse tão pouco conhecido fora da academia. É o tipo de coisa que deveria ser ensinada pra qualquer pessoa que constrói produto.

## O que era a BBBK

Fundada em 1960 por Al "Bugs" Burger. Focava em hotéis e restaurantes — lugares onde uma barata podia destruir a reputação de um negócio inteiro.

O diferencial: **cobrava 10x mais que qualquer concorrente** e oferecia a garantia mais agressiva que qualquer indústria já viu.

## A garantia em 4 níveis

1. **Sem pagamento até erradicação total** — o risco é 100% da BBBK, não do cliente
2. **Reembolso ao hóspede** — se qualquer hóspede visse uma praga, a BBBK pagava a conta do hóspede, mandava carta de desculpas e vale-presente
3. **Insatisfação do cliente** — reembolso de até 12 meses de taxas pagas + 1 ano de serviço por concorrente à escolha do cliente (a BBBK pagava o concorrente)
4. **Interdição sanitária** — cobertura de todas as multas + lucro cessante + $5.000 extras

Loucura, né? Mas funcionava. Em 1986: **$33 milhões de receita**, pagou apenas **$120.000 em garantias** — 0,36% do faturamento.

## Por que Harvard estudou

Christopher Hart queria responder uma pergunta simples: por que quase nenhuma empresa de serviços oferece garantias reais?

A BBBK era a resposta. Não é que garantia não funciona pra serviço. É que a maioria das empresas não é boa o suficiente pra oferecer uma.

A tese central do Hart: **a garantia não existe para compensar o cliente — existe para forçar a empresa a construir sistemas que impeçam qualquer coisa de dar errado.** É uma "forcing function" organizacional.

## Como eles conseguiam cumprir

6 pilares que sustentavam a operação:

- **Dosagem máxima** — usavam o máximo permitido por lei, não economizavam
- **Poucos clientes por técnico** — 2 a 4 contas por noite, não dezenas
- **Protocolos detalhados** — preparação, limpeza, inspeção e documentação
- **Treinamento de 6 meses** — contratação seletiva, salários acima do mercado
- **Responsabilidade do cliente** — clientes assinavam acordo de higiene. Descumpriu? Multa ou cancelamento. ~200 cancelamentos por ano
- **Serviço noturno** — acesso irrestrito sem pressão de tempo

## O que isso ensina pra quem programa

Esse case não é sobre dedetização. É sobre como pensar produto de trás pra frente.

### 1. Comece pela promessa, não pela capacidade

A maioria dos devs (eu incluído) pensa: "dado o que eu sei fazer hoje, o que eu posso oferecer?"

Al Burger pensava o contrário: "o que eu precisaria prometer pra vencer o mercado inteiro? Agora vou construir a empresa que cumpre isso."

**Como aplicar:** antes de escrever código, defina o que o produto **tem que garantir** pro usuário. Escreva essa promessa em uma frase. Depois construa os sistemas pra cumprir. Se a promessa é "seus dados nunca vão sumir", isso define que você precisa de backup automático, validação em cada escrita, e testes de recuperação.

### 2. Garantia como forcing function

Se você promete que o sistema nunca vai perder um dado do usuário, você é **forçado** a construir backups, validação, idempotência, logs. A promessa molda a arquitetura.

Sem promessa, você faz "o suficiente". Com promessa, você faz o necessário.

**Como aplicar:** pegue a funcionalidade mais crítica do seu produto. Escreva uma garantia absurda pra ela — tipo "se X falhar, devolvemos o dinheiro". Agora pense: o que precisaria existir no código pra você ter confiança de oferecer isso? Essa lista é seu backlog de qualidade real.

### 3. Qualidade habilita preço, não o contrário

A BBBK não ficou cara porque quis. Ficou cara porque **precisava** ser pra manter a qualidade que a garantia exigia. E os clientes pagavam porque o risco era zero.

**Como aplicar:** se seu produto realmente funciona melhor — menos bugs, mais uptime, melhor UX — você pode cobrar mais. Mas "funcionar melhor" precisa ser demonstrável: métricas de uptime público, changelog transparente, SLA documentado. Não basta dizer que é bom.

### 4. Exija do cliente também

A BBBK cancelava clientes que não mantinham higiene. ~200 por ano.

**Como aplicar:** nem todo usuário é seu usuário. Se alguém usa seu produto de um jeito que quebra a experiência pra outros (spam, abuso de API, dados sujos), é melhor perder esse cliente do que degradar o produto. Defina termos de uso claros e enforça eles.

### 5. Erros são dados, não vergonha

Cada vez que a BBBK pagava uma garantia, era um dado que mostrava onde o processo falhou. Não escondiam — investigavam.

**Como aplicar:** implemente error tracking (Sentry, LogRocket, ou até logs estruturados). Quando um bug chega em produção, faça post-mortem: por que o teste não pegou? O que faltou na review? Onde o processo tem gap? Cada bug é um dado gratuito sobre onde melhorar.

## Checklist pra aplicar no seu próximo projeto

- [ ] Escreva a promessa central do produto em uma frase
- [ ] Liste o que precisa funcionar perfeitamente pra cumprir essa promessa
- [ ] Construa testes e monitoramento específicos pra cada item dessa lista
- [ ] Defina quem NÃO é seu público e documente isso
- [ ] Implemente error tracking e faça post-mortem de cada bug em produção
- [ ] Revise: você está cobrando pelo valor que entrega ou pelo custo que tem?

## A pergunta que ficou

O modelo convencional pergunta: "dado o que temos, o que podemos prometer?"

O modelo BBBK pergunta: "o que precisamos prometer pra dominar? Agora vamos construir isso."

Essa inversão muda tudo. Muda como você projeta a arquitetura, como define prioridades, como testa, como precifica.

Eu criei a documentação desse case porque acho que todo mundo que constrói produto deveria conhecer essa história. Não é sobre dedetização. É sobre o que acontece quando você leva qualidade a sério de verdade.`,
  },
];

export function getAllPosts(): BlogPost[] {
  return posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
