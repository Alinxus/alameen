import remarkGfm from 'remark-gfm'
import rehypePrettyCode, { Options as PrettyCodeOptions } from 'rehype-pretty-code'

// the site is light-only, so a single light theme matches the surrounding css
const prettyCode: PrettyCodeOptions = {
  theme: 'github-light',
  keepBackground: false,
}

export const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, prettyCode] as any],
  },
}
