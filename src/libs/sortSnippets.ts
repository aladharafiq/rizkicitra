import { Snippets } from '@/data/snippets/snippets.type'

export const getNewestSnippets = (a: Snippets, b: Snippets) => {
  return new Date(a.date) < new Date(b.date) ? 1 : new Date(a.date) > new Date(b.date) ? -1 : 0
}
