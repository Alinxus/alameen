import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

const emailsFile = path.join(process.cwd(), 'data', 'emails.json')

async function ensureEmailsFile() {
  try {
    await fs.access(emailsFile)
  } catch {
    await fs.mkdir(path.dirname(emailsFile), { recursive: true })
    await fs.writeFile(emailsFile, JSON.stringify({ subscribers: [] }, null, 2))
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body
    
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'valid email required' },
        { status: 400 }
      )
    }
    
    await ensureEmailsFile()
    
    const content = await fs.readFile(emailsFile, 'utf-8')
    const data = JSON.parse(content)
    
    if (data.subscribers.includes(email.toLowerCase())) {
      return NextResponse.json(
        { error: 'already subscribed' },
        { status: 400 }
      )
    }
    
    data.subscribers.push(email.toLowerCase())
    data.subscribers.sort()
    
    await fs.writeFile(emailsFile, JSON.stringify(data, null, 2))
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'failed to subscribe' },
      { status: 500 }
    )
  }
}
