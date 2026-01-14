'use client'

import { useState } from 'react'

export default function Subscribe() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      
      const data = await res.json()
      
      if (res.ok) {
        setStatus('success')
        setMessage('subscribed! you\'ll get notified when new articles drop.')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'something went wrong')
      }
    } catch (error) {
      setStatus('error')
      setMessage('something went wrong')
    }
  }

  return (
    <div className="subscribe-box">
      <p>get notified when i publish new articles</p>
      <form onSubmit={handleSubmit} className="subscribe-form">
        <input
          type="email"
          placeholder="your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === 'loading' || status === 'success'}
        />
        <button type="submit" disabled={status === 'loading' || status === 'success'}>
          {status === 'loading' ? 'subscribing...' : status === 'success' ? 'subscribed ✓' : 'subscribe'}
        </button>
      </form>
      {message && <p className={`subscribe-message ${status}`}>{message}</p>}
      <p className="privacy-note">your email stays private. no spam.</p>
    </div>
  )
}
