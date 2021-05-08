let listObj = require("./list")
let stats = require("./infoObj.json")
let fs = require("fs")

module.exports = async function taskPerformer(requirement, tab) {


    await tab.waitForSelector("select[id='Select Resource']");
    await tab.click("select[id='Select Resource']");


    if (requirement === "Oxygen") {
        await tab.keyboard.press('ArrowDown');


        await tab.keyboard.press('Enter');
         rep(tab);
    }


    if (requirement === "Medicine") {

        for (let i = 0; i < listObj.Medicine; i++) {
            await tab.keyboard.press('ArrowDown');
        }

        await tab.keyboard.press('Enter');

        rep(tab);
    }

    if (requirement === "Hospital") {
        for (let i = 0; i < listObj.Hospital; i++) {
            await tab.keyboard.press('ArrowDown');
        }

        await tab.keyboard.press('Enter');

        rep(tab);
    }

    if (requirement === "Ambulance") {
        for (let i = 0; i < listObj.Ambulance; i++) {
            await tab.keyboard.press('ArrowDown');
        }

        await tab.keyboard.press('Enter');

        rep(tab);
    }

    if (requirement === "Helpline") {
        for (let i = 0; i < listObj.Helpline; i++) {
            await tab.keyboard.press('ArrowDown');
        }

        await tab.keyboard.press('Enter');

        rep(tab);
    }


    if (requirement === "Vaccine") {
        for (let i = 0; i < listObj.Vaccine; i++) {
            await tab.keyboard.press('ArrowDown');
        }

        await tab.keyboard.press('Enter');

        rep(tab);
    }


}




async function rep(tab) {
    let linkStr = "";

    let links = await tab.$$(".pb-16 .max-w-3xl")
    for (let i = 0; i < 5; i++) {

        let content = await tab.evaluate((ele) => {
            return ele.textContent;
        }, links[i]);

        linkStr = linkStr + i + ") " + content;

        stats.VerifiedContacts.push(linkStr)

        linkStr = ""
    }

    console.log(stats)

    fs.writeFileSync("Details.txt", JSON.stringify(stats,null,4));

}