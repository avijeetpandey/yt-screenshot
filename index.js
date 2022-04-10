const puppeteer = require('puppeteer');

const takeScreenshot = async () => {
    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
    await page.goto('https://youtube.com', {
        waitUntil: 'networkidle0',
      });
    await page.screenshot({path: 'buddy-screenshot.png'});
  
    await browser.close();
}

takeScreenshot();