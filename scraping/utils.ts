import * as cheerio from 'cheerio'

export type ScrapingItem = 'listings'

type Scraping = {
  [key: string]: {
    url: string
  }
}

export const SCRAPINGS: Scraping = {
  listings: {
    url: 'https://www.airbnb.com/s/Chicago/homes'
  }
}

export async function scrape(url: string) {
  console.log('scraping...', url)
  const res = await fetch(url)
  const html = await res.text()
  return cheerio.load(html)
}
