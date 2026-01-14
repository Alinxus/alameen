import Link from 'next/link'

export default function Nav() {
  return (
    <nav>
      <Link href="/">home</Link>
      <Link href="/articles">articles</Link>
    </nav>
  )
}
