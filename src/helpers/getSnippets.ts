import { Snippets } from '@/data/snippets/snippets.type'

import { DATA_DIR, getDirectory } from './getDirectory'

import fs from 'fs/promises'
import matter from 'gray-matter'
import path from 'path'

export interface GetSnippetReturnValue {
  header: Snippets
  content: string
}

export const getSnippetsBySlug = async (slug: string): Promise<GetSnippetReturnValue> => {
  const dir = path.join(`${DATA_DIR}/snippets`, `${slug}.mdx`)
  const file = await fs.readFile(dir, 'utf8')

  const { content, data } = matter(file)

  return {
    header: { ...(data as Snippets), slug },
    content
  }
}

export const getSnippets = async (): Promise<Array<GetSnippetReturnValue['header']>> => {
  // read all files inside directory '@/data/snippets/'
  const files = await getDirectory('/snippets')

  const promises = files.map(async (f) => {
    const dir = path.join(`${DATA_DIR}/snippets`, f)
    const file = await fs.readFile(dir, 'utf8')

    const { data } = matter(file)

    return { ...(data as Snippets), slug: f.replace('.mdx', '') }
  })

  return await Promise.all(promises)
}
