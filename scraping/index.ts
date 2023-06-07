import { scrape, SCRAPINGS } from './utils.ts'

const { url } = SCRAPINGS['listings'] ?? {}

try {
  if (url) {
    const $ = await scrape(url)
    console.log('scrapped data ', $.html())
  }
} catch (err) {
  console.error('scrape err ', err)
}
