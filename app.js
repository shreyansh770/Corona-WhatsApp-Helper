const puppeteer = require('puppeteer');
const taskPerformer = require('./taskPerformer');
let stats = require("./infoObj.json");
const wtsApp = require('./wtsApp');


(async () => {

   let browser = await puppeteer.launch({
      executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
      headless: false,
      defaultViewport: null,
      args: ["--start-maximized"],
   });


   let tabs = await browser.pages();
   let tab = tabs[0];

   await tab.goto("https://www.mohfw.gov.in/");

   // task - 1;

   await tab.waitForSelector(".mob-hide", {
      visible: true
   });

   let covidInfo = await tab.$$(".mob-hide")


   let arr = [];

   for (let i = 1; i < covidInfo.length; i += 2) {
      let text = await tab.evaluate((ele) => {
         return ele.textContent
      }, covidInfo[i]);

      arr.push(text)
   }
   arr.pop()

   stats.ActiveCase = arr[0].substring(0, 7)
   stats.DisCharged = arr[1].substring(0, 7);
   stats.Deaths = arr[2].substring(0, 6);

   // task -2;

   await tab.goto("https://life.coronasafe.network/delhi_(nct)")


   let requirement = process.argv[2];

   taskPerformer(requirement,tab);


   setTimeout(async ()=>{
      await tab.goto("https://web.whatsapp.com/");
   },5000)


   wtsApp(tab);
   
   


})();