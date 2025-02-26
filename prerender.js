const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const routes = ['/', '/about', '/contact']; // Add your routes here

  for (const route of routes) {
    await page.goto(`https://miku691.github.io/ixoquiz/${route}`, { waitUntil: 'networkidle0' });
    const content = await page.content();
    const filePath = path.join(__dirname, 'dist', route === '/' ? 'index.html' : `${route}.html`);
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, content);
  }

  await browser.close();
})();
