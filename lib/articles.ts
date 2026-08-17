import fs from 'fs/promises'
import path from 'path'

const articlesDir = path.join(process.cwd(), 'data', 'articles')

// slugs become filenames, so anything with a path separator or a dot segment
// would let a caller read, write, or unlink files outside data/articles
export function isValidSlug(slug: unknown): slug is string {
  return typeof slug === 'string' && /^[a-z0-9][a-z0-9-]*$/.test(slug)
}

export interface Article {
  slug: string
  title: string
  content: string
  excerpt?: string
  date: string
}

async function ensureDir() {
  try {
    await fs.mkdir(articlesDir, { recursive: true })
  } catch (error) {
  }
}

export async function getArticles(): Promise<Article[]> {
  await ensureDir()
  
  try {
    const files = await fs.readdir(articlesDir)
    const articles = await Promise.all(
      files
        .filter(file => file.endsWith('.json'))
        .map(async (file) => {
          const content = await fs.readFile(path.join(articlesDir, file), 'utf-8')
          return JSON.parse(content) as Article
        })
    )
    
    return articles.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  } catch (error) {
    return []
  }
}

export async function getArticle(slug: string): Promise<Article | null> {
  if (!isValidSlug(slug)) return null

  await ensureDir()

  try {
    const content = await fs.readFile(
      path.join(articlesDir, `${slug}.json`),
      'utf-8'
    )
    return JSON.parse(content) as Article
  } catch (error) {
    return null
  }
}

export async function saveArticle(article: Omit<Article, 'date'> & { date?: string }): Promise<Article> {
  if (!isValidSlug(article.slug)) {
    throw new Error(`invalid slug: ${article.slug}`)
  }

  await ensureDir()

  const articleData: Article = {
    ...article,
    date: article.date || new Date().toISOString().split('T')[0],
  }
  
  await fs.writeFile(
    path.join(articlesDir, `${article.slug}.json`),
    JSON.stringify(articleData, null, 2),
    'utf-8'
  )
  
  return articleData
}

export async function deleteArticle(slug: string): Promise<void> {
  if (!isValidSlug(slug)) return

  await ensureDir()

  try {
    await fs.unlink(path.join(articlesDir, `${slug}.json`))
  } catch (error) {
  }
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
