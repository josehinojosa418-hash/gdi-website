const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");

const BASE_URL = "http://localhost:3001";
const PAGES = [
  { url: "/", name: "home" },
  { url: "/quienes-somos", name: "quienes-somos" },
  { url: "/director", name: "director" },
  { url: "/servicios", name: "servicios" },
  { url: "/proyectos", name: "proyectos" },
  { url: "/clientes", name: "clientes" },
  { url: "/certificaciones", name: "certificaciones" },
  { url: "/valores", name: "valores" },
  { url: "/contacto", name: "contacto" },
];

const screenshotsDir = path.join(__dirname, "../public/screenshots");
if (!fs.existsSync(screenshotsDir)) fs.mkdirSync(screenshotsDir, { recursive: true });

function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

async function scrollAndWait(page) {
  // Scroll slowly to trigger all whileInView animations
  const pageHeight = await page.evaluate(() => document.body.scrollHeight);
  let scrollY = 0;
  const step = 300;
  while (scrollY < pageHeight) {
    scrollY = Math.min(scrollY + step, pageHeight);
    await page.evaluate((y) => window.scrollTo(0, y), scrollY);
    await sleep(120);
  }
  // Wait for all animations to complete, then scroll back to top
  await sleep(1200);
  await page.evaluate(() => window.scrollTo(0, 0));
  await sleep(400);
}

async function takeScreenshots() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  // Desktop
  {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    for (const { url, name } of PAGES) {
      console.log(`📸 desktop ${url}...`);
      try {
        await page.goto(`${BASE_URL}${url}`, { waitUntil: "networkidle0", timeout: 30000 });
        await sleep(800);
        await scrollAndWait(page);
        await page.screenshot({
          path: path.join(screenshotsDir, `${name}.png`),
          fullPage: true,
        });
        console.log(`  ✅ ${name}.png`);
      } catch (e) {
        console.error(`  ❌ ${url}: ${e.message}`);
      }
    }
    await page.close();
  }

  // Mobile
  {
    const page = await browser.newPage();
    await page.setViewport({ width: 390, height: 844 });
    for (const { url, name } of PAGES) {
      console.log(`📱 mobile ${url}...`);
      try {
        await page.goto(`${BASE_URL}${url}`, { waitUntil: "networkidle0", timeout: 30000 });
        await sleep(600);
        await scrollAndWait(page);
        await page.screenshot({
          path: path.join(screenshotsDir, `${name}-mobile.png`),
          fullPage: true,
        });
        console.log(`  ✅ ${name}-mobile.png`);
      } catch (e) {
        console.error(`  ❌ mobile ${url}: ${e.message}`);
      }
    }
    await page.close();
  }

  await browser.close();
  console.log("\n✅ Done — screenshots in public/screenshots/");
}

takeScreenshots().catch(console.error);
