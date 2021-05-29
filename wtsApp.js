module.exports = async function wtsApp(tab){

     await tab.waitForSelector("span [title ='GauravB']",{
          visible : true
     })

     await tab.$("span [title ='GauravB']")

     await tab.click("span [title ='GauravB']");

    await tab.waitForSelector("#main > footer > div.vR1LG._3wXwX.copyable-area > div.EBaI7._23e-h > div._2C9f1 > div > div > span");

    await tab.click("#main > footer > div.vR1LG._3wXwX.copyable-area > div.EBaI7._23e-h > div._2C9f1 > div > div > span")

    const fileChooser = await Promise.all([
        tab.waitForFileChooser(),
        tab.click("span[data-testid= 'attach-document']")
    ])

    await fileChooser[0].accept(['/Users/shrey/Desktop/pp9-dev/hackathon/Details.txt'])
     
    await tab.waitForSelector(".SncVf _3doiV")
    await tab.click(".SncVf _3doiV")

    console.log("Task Done")

}
