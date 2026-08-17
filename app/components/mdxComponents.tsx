import type { MDXComponents } from 'mdx/types'

// benchmark tables get wide; wrap them so they scroll on their own
// instead of forcing the whole page sideways on mobile
export const mdxComponents: MDXComponents = {
  table: (props) => (
    <div className="table-wrap">
      <table {...props} />
    </div>
  ),
}
