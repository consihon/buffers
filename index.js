'use strict';
let x = module.exports={};
const fs = require('fs');
function loop() {
    let nameString = `let nameArray=['connor', 'alice', 'miranda'];
`;
    let iterateAndPrint = `function printNames(){
    for (i in nameArray){
        console.log(nameArray[i]);
    };
}
printNames();`;

    function writeWithLoop(string) {
        fs.writeFile('starter-code/files/loop.js', nameString + iterateAndPrint, (err) => {
            if (err) throw error;
            return('file created');
        });
    }

    writeWithLoop();
}
// function pairParse(){
//     fs.readFile(`${__dirname}/starter-code/files/pair-programming.txt`,(err,buffer)=>{
//         if (err) throw err;
//         let toStringed = buffer.toString('utf-8').split('\n');
//         console.log (toStringed);
//
//     })
// }
// pairParse();
loop();
