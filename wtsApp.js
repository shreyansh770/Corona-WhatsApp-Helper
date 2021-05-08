module.exports = async function wtsApp(tab){

     await tab.waitForSelector("span [title ='GauravB']",{
          visible : true
     })

     await tab.$("span [title ='Mummy']")

     await tab.click("span [title ='Mummy']");

    await tab.waitForSelector("#main > footer > div.vR1LG._3wXwX.copyable-area > div.EBaI7._23e-h > div._2C9f1 > div > div > span");

    await tab.click("#main > footer > div.vR1LG._3wXwX.copyable-area > div.EBaI7._23e-h > div._2C9f1 > div > div > span")

    const fileChooser = await Promise.all([
        tab.waitForFileChooser(),
        tab.click("span[data-testid= 'attach-document']")
    ])

    await fileChooser[0].accept(['/Users/shrey/Desktop/pp9-dev/hackathon/Details.txt'])
     
    await tab.keyboard.press("Enter")

    console.log("Task Done")

}
