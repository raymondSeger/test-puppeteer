const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto('https://github.com');
  await page.screenshot({ path: 'screenshots/github.png' });
  await page.pdf({path: 'screenshots/hn.pdf', format: 'A4'});
  
  browser.close();
}

run();