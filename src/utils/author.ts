import coAuthorsJson from '../content/coauthors.json'
const coAuthors = new Map<string, string>(
  Object.entries(coAuthorsJson as Record<string, string>),
)

function author(str: string) {
  if (str === 'Jingcheng Niu') {
    return `<span class="inline-block underline font-bold">Jingcheng Niu</span>`
  }
  const url = coAuthors.get(str)
  return url
    ? `<a class="lh-tight nav-link" href="${url}">${str}</a>`
    : str
}

export function processAuthor(str: string, index: number, length: number) {
  if (index === length - 2) return author(str) + ' and '
  if (index < length - 1) return author(str) + ', '
  return author(str) + '.'
}