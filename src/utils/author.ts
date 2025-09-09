import coAuthorsJson from '../content/coauthors.json'
const coAuthors = new Map<string, string>(
  Object.entries(coAuthorsJson as Record<string, string>),
)

function author(str: string) {
  // Special case for Jingcheng Niu
  if (str === 'Jingcheng Niu') {
    return `<span class="inline-block underline font-bold">Jingcheng Niu</span>`
  }
  if (str === 'Jingcheng Niu*') {
    return `<span class="inline-block underline font-bold">Jingcheng Niu</span>*`
  }

  const hasStar = str.endsWith('*')
  const lookupName = hasStar ? str.slice(0, -1) : str

  const url = coAuthors.get(lookupName)
  return url
    ? `<a class="lh-tight nav-link" href="${url}">${lookupName}${hasStar ? '*' : ''}</a>`
    : str
}

export function processAuthor(str: string, index: number, length: number) {
  if (index === length - 2) return author(str) + ' and '
  if (index < length - 1) return author(str) + ', '
  return author(str) + '.'
}
