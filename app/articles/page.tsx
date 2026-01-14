import Nav from '../components/Nav'
import Link from 'next/link'
import { getArticles } from '@/lib/articles'

export default async function Articles() {
  const articles = await getArticles()

  return (
    <div className="container">
      <Nav />
      <main>
        <h1>articles</h1>
        
        {articles.length === 0 ? (
          <p>no articles yet. <Link href="/editor">write one?</Link></p>
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

export const dynamic = 'force-dynamic'
