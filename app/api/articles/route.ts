import { NextRequest, NextResponse } from 'next/server'
import { isValidSlug, saveArticle, slugify } from '@/lib/articles'
import { isAuthorized } from '@/lib/auth'

export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { title, content, excerpt, slug } = body

    if (!title || !content) {
      return NextResponse.json(
        { error: 'title and content required' },
        { status: 400 }
      )
    }

    const articleSlug = slug || slugify(title)

    if (!isValidSlug(articleSlug)) {
      return NextResponse.json(
        { error: 'slug must be lowercase letters, numbers, and hyphens' },
        { status: 400 }
      )
    }

    const article = await saveArticle({
      slug: articleSlug,
      title,
      content,
      excerpt,
    })
    
    return NextResponse.json(article)
  } catch (error) {
    return NextResponse.json(
      { error: 'failed to save article' },
      { status: 500 }
    )
  }
}
