import Nav from '@/app/components/Nav'
import { getArticle, getArticles } from '@/lib/articles'
import { mdxComponents } from '@/app/components/mdxComponents'
import { mdxOptions } from '@/lib/mdx'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  const articles = await getArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const article = await getArticle(params.slug)

  if (!article) return {}

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
    },
  }
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

        <article className="prose">
          <MDXRemote
            source={article.content}
            options={mdxOptions}
            components={mdxComponents}
          />
        </article>
      </main>
    </div>
  )
}
