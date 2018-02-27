const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const limit = 119

  const getPage = async(index) => {
    if(index > limit) return await {}
    if(index === 1) {
      await page.goto(`https://msc-sydjs.now.sh/#${index}`);
    } else {
      await page.keyboard.press('ArrowRight');
    }
    await page.screenshot({path: `jess-slide-${index}.png`});
    await getPage(index + 1)
  }
  await getPage(1)
  await browser.close();
})();