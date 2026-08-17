import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

const articlesDir = path.join(process.cwd(), 'content', 'articles')

// slugs become filenames, so anything with a path separator or a dot segment
// would let a caller read files outside content/articles
export function isValidSlug(slug: unknown): slug is string {
  return typeof slug === 'string' && /^[a-z0-9][a-z0-9-]*$/.test(slug)
}

export interface Article {
  slug: string
  title: string
  excerpt?: string
  date: string
}

export interface ArticleWithContent extends Article {
  content: string
}

function parse(slug: string, raw: string): ArticleWithContent {
  const { data, content } = matter(raw)

  return {
    slug,
    title: data.title ?? slug,
    excerpt: data.excerpt,
    date: data.date ?? '',
    content,
  }
}

export async function getArticles(): Promise<Article[]> {
  let files: string[]

  try {
    files = await fs.readdir(articlesDir)
  } catch {
    return []
  }

  const articles = await Promise.all(
    files
      .filter(file => file.endsWith('.mdx'))
      .map(async (file) => {
        const slug = file.replace(/\.mdx$/, '')
        const raw = await fs.readFile(path.join(articlesDir, file), 'utf-8')
        const { content, ...meta } = parse(slug, raw)
        return meta
      })
  )

  return articles.sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export async function getArticle(slug: string): Promise<ArticleWithContent | null> {
  if (!isValidSlug(slug)) return null

  try {
    const raw = await fs.readFile(path.join(articlesDir, `${slug}.mdx`), 'utf-8')
    return parse(slug, raw)
  } catch {
    return null
  }
}
