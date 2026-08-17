import crypto from 'crypto'
import { NextRequest } from 'next/server'

// write endpoints require `Authorization: Bearer $EDITOR_SECRET`.
// with no secret configured this returns false, so a deploy that forgets to
// set it has its write endpoints locked rather than open to the world.
export function isAuthorized(request: NextRequest): boolean {
  const secret = process.env.EDITOR_SECRET
  if (!secret) return false

  const header = request.headers.get('authorization')
  if (!header?.startsWith('Bearer ')) return false

  const provided = Buffer.from(header.slice('Bearer '.length))
  const expected = Buffer.from(secret)

  if (provided.length !== expected.length) return false
  return crypto.timingSafeEqual(provided, expected)
}
