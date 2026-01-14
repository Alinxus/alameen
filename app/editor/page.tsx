'use client'

import Nav from '../components/Nav'
import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

function EditorContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const slug = searchParams.get('slug')
  
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [loading, setLoading] = useState(false)
  const [isEdit, setIsEdit] = useState(false)

  useEffect(() => {
    if (slug) {
      setLoading(true)
      fetch(`/api/articles/${slug}`)
        .then(res => res.json())
        .then(data => {
          setTitle(data.title)
          setContent(data.content)
          setExcerpt(data.excerpt || '')
          setIsEdit(true)
          setLoading(false)
        })
        .catch(() => setLoading(false))
    }
  }, [slug])

  const handleSave = async () => {
    setLoading(true)
    const res = await fetch('/api/articles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        slug: slug || undefined,
        title, 
        content, 
        excerpt 
      }),
    })
    
    if (res.ok) {
      const data = await res.json()
      router.push(`/articles/${data.slug}`)
    }
    setLoading(false)
  }

  const handleDelete = async () => {
    if (!slug || !confirm('delete this article?')) return
    
    setLoading(true)
    await fetch(`/api/articles/${slug}`, {
      method: 'DELETE',
    })
    router.push('/articles')
  }

  return (
    <div className="container">
      <Nav />
      <main>
        <h1>{isEdit ? 'edit article' : 'new article'}</h1>
        
        <div className="editor-container">
          <input
            type="text"
            placeholder="article title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          
          <input
            type="text"
            placeholder="excerpt (optional)"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
          />
          
          <textarea
            placeholder="write your article here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          
          <div className="button-group">
            <button onClick={handleSave} disabled={loading || !title || !content}>
              {loading ? 'saving...' : 'save'}
            </button>
            
            {isEdit && (
              <button className="delete" onClick={handleDelete} disabled={loading}>
                delete
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default function Editor() {
  return (
    <Suspense fallback={<div className="container"><Nav /><main><p>loading...</p></main></div>}>
      <EditorContent />
    </Suspense>
  )
}
