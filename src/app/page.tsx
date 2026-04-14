import styles from "./page.module.css";
import StarStamp from "@/components/StarStamp";
import TotalStamp from "@/components/TotalStamp";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark">
        <div className={`container ${styles.hero}`}>
          <div className={styles.heroStamp}>
            <StarStamp size={90} rotation={-12} opacity={0.2} />
          </div>
          <h1 className={styles.headline}>
            Menos planejamento,{" "}
            <span className="accent">mais produto.</span>
          </h1>
          <p className={styles.subtitle}>
            Do problema ao deploy. Sem esperar ficar perfeito.
          </p>
          <div className={styles.heroCtas}>
            <a href="#work" className={styles.btnPrimary}>Ver projetos</a>
            <a
              href="https://github.com/luizporto-ai"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnSecondary}
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Work */}
      <section className="section-dark" id="work">
        <div className="container">
          <h2 className={styles.sectionTitle}>Work</h2>
          <p className={styles.sectionSub}>Projetos que construí.</p>

          {/* Featured — Total Assistente */}
          <a
            href="https://totalassistente.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cardFeatured}
          >
            <div className={styles.cardHeader}>
              <TotalStamp size={48} rotation={-5} opacity={0.35} />
              <span className={styles.comingSoon}>Documentação pública em breve</span>
            </div>
            <h3 className={styles.cardTitle}>Total Assistente</h3>
            <p className={styles.cardDesc}>
              Assistente pessoal de finanças e agenda pelo WhatsApp.
              Manda um áudio, registra um gasto, marca um compromisso — a IA entende e organiza tudo pra você.
            </p>
            <div className={styles.cardStack}>
              <span className={styles.tag}>Next.js</span>
              <span className={styles.tag}>PostgreSQL</span>
              <span className={styles.tag}>LangGraph</span>
              <span className={styles.tag}>Claude AI</span>
            </div>
          </a>

          {/* Grid */}
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <span className={styles.comingSoon}>Documentação pública em breve</span>
              <h3 className={styles.cardTitle}>Video Factory</h3>
              <p className={styles.cardDesc}>
                Produção de vídeo programático com código. Carrosséis, onboarding, promos.
              </p>
              <div className={styles.cardStack}>
                <span className={styles.tag}>AI</span>
                <span className={styles.tag}>React</span>
                <span className={styles.tag}>TypeScript</span>
              </div>
            </div>
            <div className={styles.card}>
              <span className={styles.comingSoon}>Documentação pública em breve</span>
              <h3 className={styles.cardTitle}>Automação de Tráfego</h3>
              <p className={styles.cardDesc}>
                Sistema de automação de campanhas e gestão de tráfego pago com inteligência artificial.
              </p>
              <div className={styles.cardStack}>
                <span className={styles.tag}>Meta Ads</span>
                <span className={styles.tag}>AI</span>
                <span className={styles.tag}>Python</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Writing */}
      <section className="section-dark" id="writing">
        <div className="container">
          <h2 className={styles.sectionTitle}>Writing</h2>
          <p className={styles.sectionSub}>O que aprendi construindo.</p>

          <a href="/blog/bugs-burger-bug-killers" className={styles.cardFeatured}>
            <div className={styles.cardMeta}>
              <span className={styles.metaTag}>Produto</span>
              <span className={styles.metaDate}>Abr 2026</span>
            </div>
            <h3 className={styles.cardTitle}>Bugs Burger Bug Killers — O case que mudou como eu penso sobre produto</h3>
            <p className={styles.cardDesc}>
              Uma dedetizadora que cobrava 10x mais, oferecia a garantia mais agressiva da história e dominou o mercado. O que isso ensina pra quem programa.
            </p>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="section-light">
        <div className={`container ${styles.cta}`}>
          <StarStamp size={60} rotation={-10} opacity={0.18} />
          <span className={styles.ctaHandle}>@oluizporto</span>
        </div>
      </section>
    </>
  );
}
