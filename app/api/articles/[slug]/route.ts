import { NextRequest, NextResponse } from 'next/server'
import { getArticle, deleteArticle } from '@/lib/articles'
import { isAuthorized } from '@/lib/auth'

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const article = await getArticle(params.slug)
  
  if (!article) {
    return NextResponse.json(
      { error: 'article not found' },
      { status: 404 }
    )
  }
  
  return NextResponse.json(article)
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }

  await deleteArticle(params.slug)
  return NextResponse.json({ success: true })
}
