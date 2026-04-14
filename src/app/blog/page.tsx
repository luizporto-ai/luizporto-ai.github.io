import { getAllPosts, formatDate } from "@/lib/blog";
import Link from "next/link";
import styles from "./blog.module.css";

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <section className="section-dark">
      <div className="container">
        <h1 className={styles.title}>Writing</h1>
        <p className={styles.sub}>O que aprendi construindo.</p>

        <div className={styles.postList}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.postCard}>
              <div className={styles.postMeta}>
                <span className={styles.category}>{post.category}</span>
                <span className={styles.date}>{formatDate(post.publishedAt)}</span>
                <span className={styles.date}>{post.readingTime} min</span>
              </div>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <p className={styles.postDesc}>{post.description}</p>
              <div className={styles.tags}>
                {post.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
