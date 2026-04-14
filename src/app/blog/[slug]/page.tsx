import { getAllPosts, getPostBySlug, formatDate } from "@/lib/blog";
import { notFound } from "next/navigation";
import styles from "./post.module.css";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import Link from "next/link";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <section className="section-dark">
      <div className="container">
        <Link href="/blog" className={styles.back}>&larr; Voltar</Link>

        <header className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.category}>{post.category}</span>
            <span className={styles.date}>{formatDate(post.publishedAt)}</span>
            <span className={styles.date}>{post.readingTime} min de leitura</span>
          </div>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.description}>{post.description}</p>
        </header>

        <div className={styles.content}>
          <MarkdownRenderer content={post.content} />
        </div>

        <footer className={styles.footer}>
          <span className={styles.author}>Por {post.author}</span>
          <div className={styles.tags}>
            {post.tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </footer>
      </div>
    </section>
  );
}
