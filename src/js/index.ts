import axios from 'axios';
import { promises } from 'fs';
import { resolve } from 'url';


const path = require("path");
const sql = require("mssql");
// const config = require(path.resolve("./tsconfig.json"))

var config = {
server: 'picsecure.database.windows.net',
database: 'PicSecure',
user: 'PicSecure',
password: 'Diller12345.com',
port: 1433
}




// let db1;
let folderNameInput: HTMLInputElement = <HTMLInputElement> document.getElementById("Input")

// const connect = () => {

// return new Promise ((resolve, reject)=>{ db1 = new sql.ConnectionPool(config.db, err => {
//   if (err) {

//     console.error("Connection failed.", err);
//     reject(err);
//   }
//   else
//   {

// console.log("Database pool 1 connected");
// resolve();

//           }
//       });
//     });
//   };

//   const insertFolder = async (folderNameInput) => {
//     const query = `
//       INSERT INTO FolderTable ([FolderName])
//       values (@foldername);`;
  
//     const request = new sql.Request(db1);
//     const result = await request
//       .input("folderName", folderNameInput)
//       .query(query);

// return result.rowsAffected === 1;
//   };

  document.getElementById("searchbutton").onclick = function loadEmployees() {
    
    var dbConn = new sql.Connection(config);
    var sqlUp = "INSERT INTO FolderTable (FolderName) values (@folderNameInput)"
    console.log(sqlUp)
    
    dbConn.connect().then(function () {
       
        var request = new sql.Request(dbConn);
        var replacetext = /@folderNameInput/gi;
        var newstr = sqlUp.replace(replacetext, folderNameInput.value);
        console.log(newstr)
        request.query(newstr).then(function () {
            
            dbConn.close();
        }).catch(function (err) {
            
            console.log(err);
            dbConn.close();
        });
    }).catch(function (err) {
        
        console.log(err);
    });
}
  
  

let Buttonhent: HTMLButtonElement = <HTMLButtonElement> document.getElementById("hent");
let hent: HTMLDivElement = <HTMLDivElement> document.getElementById("output");

Buttonhent.addEventListener("click", MouseEvent =>{
// Make a request for a user with a given ID
axios.get('http://api.timezonedb.com/v2.1/get-time-zone?key=CA29L55CTT6E&format=json&by=zone&zone=Europe/Copenhagen')
.then(function (response) {
  hent.innerHTML = JSON.stringify(response.data.formatted)
  console.log(response.data);
})
.catch(function (error) {
  console.log(error);
});
  })



