// const puppeteer = require('puppeteer');

// const scrapeAmazon = async (url) => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto(url);
//   // Add logic to extract product details from Amazon using Puppeteer
//   await browser.close();
// };

// const scrapeFlipkart = async (url) => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto(url);
//   // Add logic to extract product details from Flipkart using Puppeteer
//   await browser.close();
// };

// const scrapeMyntra = async (url) => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto(url);
//   // Add logic to extract product details from Myntra using Puppeteer
//   await browser.close();
// };

// module.exports = { scrapeAmazon, scrapeFlipkart, scrapeMyntra };
const axios = require('axios');
const cheerio = require('cheerio');

const scrapePrice = async (url) => {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);

  // Sample price extraction logic (adjust based on site)
  const price = $('span#priceblock_ourprice').text();
  
  return price ? price : 'Price not found';
};

module.exports = scrapePrice;
