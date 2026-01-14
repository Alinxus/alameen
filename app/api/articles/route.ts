import { NextRequest, NextResponse } from 'next/server'
import { saveArticle, slugify } from '@/lib/articles'

export async function POST(request: NextRequest) {
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
