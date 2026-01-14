import Nav from '@/app/components/Nav'
import { getArticle, getArticles } from '@/lib/articles'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export async function generateStaticParams() {
  const articles = await getArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export default async function ArticlePage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const article = await getArticle(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="container">
      <Nav />
      <main>
        <h1>{article.title}</h1>
        <p className="date">{article.date}</p>
        
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </main>
    </div>
  )
}

export const dynamic = 'force-dynamic'
