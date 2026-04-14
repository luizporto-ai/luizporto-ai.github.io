import styles from "./links.module.css";
import StarStamp from "@/components/StarStamp";

const links = [
  { label: "Total Assistente", href: "https://totalassistente.com.br", external: true, icon: "/images/total-assistente-logo.webp" },
  { label: "Site", href: "/", external: false, icon: null },
  { label: "Work", href: "/#work", external: false, icon: null },
  { label: "Writing", href: "/blog", external: false, icon: null },
  { label: "Instagram", href: "https://instagram.com/oluizporto", external: true, icon: null },
  { label: "GitHub", href: "https://github.com/luizporto-ai", external: true, icon: null },
];

export default function Links() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.stamp}>
          <StarStamp size={50} rotation={-10} opacity={0.2} />
        </div>
        <h1 className={styles.handle}>@oluizporto</h1>

        <div className={styles.list}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.link}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <span className={styles.linkLeft}>
                {link.icon && <img src={link.icon} alt="" className={styles.linkIcon} />}
                <span className={styles.linkLabel}>{link.label}</span>
              </span>
              {link.external && <span className={styles.arrow}>&#8599;</span>}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
