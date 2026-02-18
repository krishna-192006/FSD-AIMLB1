const fs = require('fs')
const fs1 = require('fs').promises

function writeData() {
    let statusmsg="";
   try {
    fs.writeFileSync("student.txt","Welcome to FS module")
    console.log("Data is written succesfully!!")
    statusmsg="Data is written Sucessfully!!"
   } catch (e) {
    console.log("Error is"+e)
    statusmsg="Error is"+e;
   }
   return statusmsg;
}

module.exports = writeData;