import { NextRequest, NextResponse } from 'next/server'
import { getArticle, deleteArticle } from '@/lib/articles'

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
  await deleteArticle(params.slug)
  return NextResponse.json({ success: true })
}
