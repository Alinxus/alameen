import Nav from '../components/Nav'
import Link from 'next/link'
import { getArticles } from '@/lib/articles'

export const metadata = {
  title: 'articles',
  description: 'technical deep dives on open models, agent memory, and inference runtimes',
}

export default async function Articles() {
  const articles = await getArticles()

  return (
    <div className="container">
      <Nav />
      <main>
        <h1>articles</h1>

        {articles.length === 0 ? (
          <p>no articles yet.</p>
        ) : (
          articles.map((article) => (
            <article key={article.slug}>
              <h2>
                <Link href={`/articles/${article.slug}`}>{article.title}</Link>
              </h2>
              <p className="date">{article.date}</p>
              {article.excerpt && <p>{article.excerpt}</p>}
            </article>
          ))
        )}
      </main>
    </div>
  )
}
