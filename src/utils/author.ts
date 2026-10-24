import coAuthorsJson from '../data/coauthors.json'

const coAuthors = new Map<string, string>(
  Object.entries(coAuthorsJson as Record<string, string>),
)

function author(str: string) {
  // Trailing marks: * equal contribution, † corresponding author
  const name = str.replace(/[*†]+$/, '')
  const marks = str.slice(name.length)

  // Special case for Jingcheng Niu
  if (name === 'Jingcheng Niu') {
    return `<span class="inline-block underline font-bold">Jingcheng Niu</span>${marks}`
  }

  const url = coAuthors.get(name)
  return url
    ? `<a class="lh-tight nav-link" href="${url}">${name}${marks}</a>`
    : str
}

export function processAuthor(str: string, index: number, length: number) {
  if (index === length - 2)
    return `${author(str)} and `
  if (index < length - 1)
    return `${author(str)}, `
  return `${author(str)}.`
}
