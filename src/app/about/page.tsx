import styles from "./about.module.css";
import StarStamp from "@/components/StarStamp";

export default function About() {
  return (
    <section className="section-dark">
      <div className={`container ${styles.about}`}>
        <div className={styles.stamp}>
          <StarStamp size={70} rotation={15} opacity={0.15} />
        </div>

        <h1 className={styles.title}>Luiz Porto</h1>
        <p className={styles.intro}>
          Comecei a mexer com código aos 13. Não por vocação, não por curso — porque queria fazer uma coisa funcionar e ninguém ia fazer por mim.
        </p>

        <div className={styles.block}>
          <h2>O que faço</h2>
          <p>
            Construo produtos digitais. Do banco de dados ao deploy. Automação, inteligência artificial, interfaces — o que o problema pedir.
          </p>
          <p>
            Hoje tenho produtos em produção com gente real usando. Não são projetos de portfólio. São sistemas que rodam, quebram, e eu conserto.
          </p>
        </div>

        <div className={styles.block}>
          <h2>Como trabalho</h2>
          <p>
            Prefiro lançar rápido e iterar do que planejar por meses. A maioria dos problemas só aparece quando o produto encontra o mundo real — então quanto antes isso acontecer, melhor.
          </p>
          <p>
            Uso AI como ferramenta de trabalho, não como buzzword. Orquestração de agentes, automação de processos, geração de conteúdo — onde faz sentido, não onde impressiona.
          </p>
        </div>

        <div className={styles.block}>
          <h2>Stack</h2>
          <div className={styles.stackGrid}>
            <div className={styles.stackItem}>
              <span className={styles.stackLabel}>Frontend</span>
              <span className={styles.stackValue}>React, Next.js</span>
            </div>
            <div className={styles.stackItem}>
              <span className={styles.stackLabel}>Backend</span>
              <span className={styles.stackValue}>Node.js, Python</span>
            </div>
            <div className={styles.stackItem}>
              <span className={styles.stackLabel}>Database</span>
              <span className={styles.stackValue}>PostgreSQL</span>
            </div>
            <div className={styles.stackItem}>
              <span className={styles.stackLabel}>AI</span>
              <span className={styles.stackValue}>Claude, LangGraph</span>
            </div>
            <div className={styles.stackItem}>
              <span className={styles.stackLabel}>Automação</span>
              <span className={styles.stackValue}>N8N, workflows</span>
            </div>
            <div className={styles.stackItem}>
              <span className={styles.stackLabel}>Infra</span>
              <span className={styles.stackValue}>Vercel, GitHub Actions</span>
            </div>
          </div>
        </div>

        <div className={styles.block}>
          <h2>Contato</h2>
          <p className={styles.links}>
            <a href="https://instagram.com/oluizporto" target="_blank" rel="noopener noreferrer">Instagram</a>
            <span className={styles.dot}></span>
            <a href="https://github.com/luizporto-ai" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
        </div>
      </div>
    </section>
  );
}
